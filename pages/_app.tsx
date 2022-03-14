import type { AppProps } from 'next/app';
import 'styles/globals.css';
import { Mesh } from 'ui/Mesh';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Mesh>
      <Component {...pageProps} />
    </Mesh>
  );
}

export default MyApp;
