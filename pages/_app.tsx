import type { AppProps } from 'next/app';
import GlobalStyles from 'src/styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
