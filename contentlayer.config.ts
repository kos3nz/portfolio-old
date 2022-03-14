import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';

import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  contentType: 'mdx',
  filePathPattern: 'blog/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields,
}));

export const UI = defineDocumentType(() => ({
  name: 'UI',
  contentType: 'mdx',
  filePathPattern: 'ui/**/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    ...computedFields,
    rawCode: {
      type: 'string',
      resolve: (ui) => ui.body.raw.replace(/```.*\n/g, '').trim(),
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, UI],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
