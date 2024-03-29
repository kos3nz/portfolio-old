import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import {
  ClipboardListIcon,
  CodeIcon,
  DuplicateIcon,
  EyeIcon,
} from '@heroicons/react/outline';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allUIs, type UI } from 'contentlayer/generated';
import { Auth } from 'ui/Auth';
import { View } from 'ui/View';
import { Divider } from 'ui/Divider';
import CopyToClipboard from 'react-copy-to-clipboard';

const Home: NextPage<{ ui: UI }> = ({ ui }) => {
  const [copied, setCopied] = useState(false);

  const MDXContent = useMDXComponent(ui.body.code);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="blog">
          <a className="absolute top-2 right-4 p-2 font-semibold">Blog</a>
        </Link>
        <div className="px-6 pt-28">
          <ul className="flex gap-x-3 divide-x divide-slate-600">
            <li className="pl-3 first-of-type:pl-0">Component</li>
            <li className="pl-3 first-of-type:pl-0">Form</li>
            <li className="pl-3 first-of-type:pl-0">Auth</li>
          </ul>
          <h2 className={'mt-6 mb-2 text-3xl font-semibold text-white'}>
            {ui.title}
          </h2>
          <p className="text-slate-400">{ui.description}</p>
          <Divider />

          <div className="mt-5 w-full">
            <Tab.Group>
              <div className="mb-3 flex justify-between gap-2">
                <Tab.List className="flex space-x-1 rounded-lg bg-primary-900/50 p-1">
                  {['preview', 'code'].map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        clsx(
                          'group',
                          'flex items-center gap-x-1 rounded-lg py-2 px-2 text-xs font-bold uppercase leading-5 duration-200',
                          'ring-primary-400/50 focus:outline-none focus:ring-2',
                          selected
                            ? 'bg-primary-600 text-light/90 shadow'
                            : 'text-light/50 hover:bg-light/[0.12] hover:text-light'
                        )
                      }
                      title={
                        category === 'preview' ? 'View component' : 'View code'
                      }
                      aria-label={
                        category === 'preview' ? 'View component' : 'View code'
                      }
                    >
                      {({ selected }) => (
                        <>
                          {category === 'preview' ? (
                            <EyeIcon
                              className={clsx(
                                'h-5 w-5 duration-200 group-hover:stroke-light/90',
                                {
                                  'stroke-slate-100': selected,
                                  'stroke-slate-500': !selected,
                                }
                              )}
                            />
                          ) : (
                            <CodeIcon
                              className={clsx(
                                'h-5 w-5 duration-200 group-hover:stroke-light/90',
                                {
                                  'stroke-slate-100': selected,
                                  'stroke-slate-500': !selected,
                                }
                              )}
                            />
                          )}
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
                <div className="rounded-lg bg-primary-900/50 p-1">
                  <CopyToClipboard
                    text={ui.rawCode}
                    onCopy={() => {
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 2000);
                    }}
                  >
                    <button
                      className={clsx(
                        'group',
                        'relative rounded-lg py-2 px-2 duration-200',
                        'hover:bg-light/[0.12]',
                        'focus:outline-none focus:ring-2 focus:ring-primary-400/50'
                      )}
                      onClick={() => {
                        setCopied(true);
                        setTimeout(() => {
                          setCopied(false);
                        }, 2000);
                      }}
                      aria-label="Copy code"
                      title="Copy code"
                    >
                      <ClipboardListIcon
                        className={clsx(
                          'h-5 w-5 stroke-slate-400 duration-200 group-hover:stroke-slate-100 group-focus:stroke-slate-100 '
                        )}
                      />
                      <span
                        className={clsx(
                          'absolute -right-3 -top-9 py-1 px-2',
                          'rounded-lg border border-slate-500 bg-slate-700',
                          'text-xs font-semibold',
                          'duration-200',
                          copied
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-1 opacity-0'
                        )}
                      >
                        Copied!
                      </span>
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
              <Tab.Panels className="mt-2">
                {['preview', 'code'].map((category, i) => (
                  <Tab.Panel
                    key={i}
                    className={clsx('rounded-lg focus:outline-none')}
                    as="div"
                  >
                    {category === 'preview' ? (
                      <View padded>
                        <Auth />
                      </View>
                    ) : (
                      <MDXContent />
                    )}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ui = allUIs.find((ui) => ui.slug === 'Auth');

  return {
    props: {
      ui,
    },
  };
};
