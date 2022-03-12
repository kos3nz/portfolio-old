import { useState } from 'react';
import SyntaxHighlighter, {
  type SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import clsx from 'clsx';
import CopyToClipboard from 'react-copy-to-clipboard';
import { DuplicateIcon } from '@heroicons/react/outline';

export const CodeBlock = ({
  className,
  children,
  ...props
}: CodeBlockProps) => {
  const language = className?.replace(/language-/, '');
  const [copied, setCopied] = useState(false);
  const code = children.trim();

  return (
    <div
      className={clsx(
        'group',
        'relative w-full rounded-lg dark:border dark:border-slate-600'
      )}
    >
      <CopyToClipboard
        text={code}
        onCopy={() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
      >
        <button
          className={clsx(
            'absolute top-2 right-2 rounded-lg p-2 ring-1 ring-slate-500',
            'opacity-0 duration-300 group-hover:opacity-100',
            'hover:ring-2 hover:ring-primary-400',
            'outline-none focus:opacity-100 focus:ring-2 focus:ring-primary-500'
          )}
        >
          <DuplicateIcon className={clsx('h-5 w-5 stroke-slate-400')} />
          <span
            className={clsx(
              'absolute -right-2.5 -top-9 py-1 px-1',
              'rounded-lg border border-slate-500 bg-slate-700',
              'text-sm font-semibold',
              'duration-200',
              copied ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
            )}
          >
            Copied!
          </span>
        </button>
      </CopyToClipboard>

      <SyntaxHighlighter
        language={language}
        style={nord}
        showLineNumbers
        codeTagProps={{ className: 'text-sm' }}
        {...props}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

// Types
export type CodeBlockProps = {
  className: string;
} & SyntaxHighlighterProps;
