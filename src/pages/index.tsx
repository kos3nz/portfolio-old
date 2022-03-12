import type { NextPage } from 'next';
import Head from 'next/head';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { CodeIcon, EyeIcon } from '@heroicons/react/outline';
import { Auth, AuthRawCode } from 'ui/Auth';
import { View } from 'ui/View';
import { Divider } from 'ui/Divider';
import { CodeBlock } from 'ui/CodeBlock';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="px-6 pt-28">
          <ul className="flex gap-x-3 divide-x divide-slate-600">
            <li className="pl-3 first-of-type:pl-0">Component</li>
            <li className="pl-3 first-of-type:pl-0">Form</li>
            <li className="pl-3 first-of-type:pl-0">Auth</li>
          </ul>
          <h2 className={'mt-6 mb-2 text-3xl font-semibold text-white'}>
            Auth
          </h2>
          <p className="text-slate-400">Description</p>
          <Divider />
          {/*
          <Link href={'#section'}>
            <a>To section</a>
          </Link>
          <section className="h-[1000px] bg-blue-500">1</section>
          <section className="h-[1000px] bg-blue-500">eeee</section>

          <section id="section" className="scroll-mt-10">
            Section
          </section>

          <section className="h-[1000px] bg-blue-500">eeee</section>
          <section className="h-[1000px] bg-blue-500">eeee</section>
          */}
          <div className="mt-5 w-full">
            <Tab.Group>
              <div className="mb-3 flex justify-start">
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
                    >
                      {({ selected }) => (
                        <>
                          {category === 'preview' ? (
                            <>
                              <EyeIcon
                                className={clsx(
                                  'h-5 w-5 group-hover:stroke-light/90',
                                  {
                                    'stroke-light/90': selected,
                                    'stroke-light/50': !selected,
                                  }
                                )}
                              />
                              {category}
                            </>
                          ) : (
                            <>
                              <CodeIcon
                                className={clsx(
                                  'h-5 w-5 group-hover:stroke-light/90',
                                  {
                                    'stroke-light/90': selected,
                                    'stroke-light/50': !selected,
                                  }
                                )}
                              />
                              {category}
                            </>
                          )}
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
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
                      <CodeBlock className="language-tsx">
                        {AuthRawCode}
                      </CodeBlock>
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
