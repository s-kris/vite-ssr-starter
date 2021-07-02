import process from 'process';
import React from 'react';
import ReactDOM from 'react-dom';
import { getPage } from 'vite-plugin-ssr/client';

import { PageLayout } from './PageLayout';

window.process = process;

hydrate();

async function hydrate() {
  const pageContext = await getPage();
  const { Page, pageProps } = pageContext;
  ReactDOM.hydrate(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
    document.getElementById('page-view'),
  );
}
