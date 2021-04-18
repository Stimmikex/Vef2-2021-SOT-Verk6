import Head from 'next/head';
import { Characters } from '../../components/characters/Characters';

import { Layout } from '../../components/layout/Layout';

export default function PageComponent(
): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Star Wars characters</title>
      </Head>
      <h1>Star Wars characters</h1>
      <Characters />
    </Layout>
  );
}
