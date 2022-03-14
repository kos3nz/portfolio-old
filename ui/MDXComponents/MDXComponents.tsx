import { CodeBlock } from 'ui/CodeBlock';

export const MDXComponents = {
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
