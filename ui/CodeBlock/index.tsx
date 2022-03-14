import dynamic from 'next/dynamic';
import { CodeBlock as Code } from './CodeBlock';

export const CodeBlock = dynamic(
  () => import('./CodeBlock').then((mod) => mod.CodeBlock as any),
  { ssr: false }
) as typeof Code;
