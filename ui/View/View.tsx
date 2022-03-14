import { useState, createContext, useContext } from 'react';
import clsx from 'clsx';
import {
  DeviceMobileIcon,
  DeviceTabletIcon,
  DesktopComputerIcon,
} from '@heroicons/react/outline';

const ViewContext = createContext<ViewContextProps | undefined>(undefined);

export const useViewport = () => {
  const viewport = useContext(ViewContext);

  return viewport;
};

export const View = ({ padded, controllable, children }: ViewProps) => {
  const [viewport, setViewport] = useState<Devices>('desktop');

  return (
    <div
      className={clsx(
        'mx-auto w-full overflow-hidden rounded-lg border border-slate-600 bg-slate-800/75 duration-500',
        {
          'max-w-[360px]': viewport === 'mobile',
          'max-w-[768px]': viewport === 'tablet',
          'max-w-[1280px]': viewport === 'desktop',
        }
      )}
    >
      <div className="flex items-center justify-between border-b border-slate-600  px-4 py-3">
        <ul className="flex gap-x-4">
          <li className="h-3 w-3 rounded-full bg-red-400" />
          <li className="h-3 w-3 rounded-full bg-yellow-400" />
          <li className="h-3 w-3 rounded-full bg-green-400" />
        </ul>

        {controllable && (
          <div className="flex items-center gap-x-4">
            <button onClick={() => setViewport('mobile')}>
              <DeviceMobileIcon
                className={clsx('h-7 w-7', {
                  'stroke-slate-500': viewport !== 'mobile',
                  'stroke-primary-400': viewport === 'mobile',
                })}
              />
            </button>
            <button onClick={() => setViewport('tablet')}>
              <DeviceTabletIcon
                className={clsx('h-7 w-7', {
                  'stroke-slate-500': viewport !== 'tablet',
                  'stroke-primary-400': viewport === 'tablet',
                })}
              />
            </button>
            <button onClick={() => setViewport('desktop')}>
              <DesktopComputerIcon
                className={clsx('h-7 w-7', {
                  'stroke-slate-500': viewport !== 'desktop',
                  'stroke-primary-400': viewport === 'desktop',
                })}
              />
            </button>
          </div>
        )}
      </div>

      <ViewContext.Provider value={{ viewport }}>
        <div
          className={clsx(
            'flex min-h-[50px] items-center justify-center bg-gradient-to-tr from-primary-500 via-primary-600 to-primary-700',
            {
              'p-4': padded,
            }
          )}
        >
          {children}
        </div>
      </ViewContext.Provider>
    </div>
  );
};

// Types
type ViewContextProps = {
  viewport: Devices | undefined;
};

export type ViewProps = {
  padded?: boolean;
  controllable?: boolean;
  children?: React.ReactNode;
};

export type Devices = 'mobile' | 'tablet' | 'desktop';

export type ScreenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
/*
  xs = 400px
  sm = 640px
  md = 768px
  lg = 1024px
  xl = 1280px
  2xl = 1536px
*/
