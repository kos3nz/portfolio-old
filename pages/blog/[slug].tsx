import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allBlogs, type Blog } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
// import { MDXComponents } from 'ui/MDXComponents/MDXComponents';

const PostLayout: NextPage<{ post: Blog }> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">
            <a className="text-center text-sm font-bold uppercase text-cyan-700">
              Home
            </a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-gray-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <div className="prose prose-slate prose-headings:text-cyan-400 dark:prose-invert lg:prose-lg">
          <MDXContent />
        </div>
      </article>
    </>
  );
};

export default PostLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allBlogs.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug);

  return {
    props: {
      post,
    },
  };
};
