import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import 'styles/globals.css';
import { Mesh } from 'ui/Mesh';
import { CodeBlock, type CodeBlockProps } from 'ui/CodeBlock';

const components = {
  pre: ({
    children,
  }: {
    children: {
      props: { className: string; children: string };
      type: string;
    };
  }) => {
    const props = children.props;
    if (children.type === 'code') {
      return (
        <CodeBlock className={props.className}>{props.children}</CodeBlock>
      );
    } else return null;
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components as any}>
      <Mesh>
        <Component {...pageProps} />
      </Mesh>
    </MDXProvider>
  );
}

export default MyApp;
