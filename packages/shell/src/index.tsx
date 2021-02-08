import 'piral/polyfills';
import * as React from 'react';
import { createInstance, Piral, renderInstance } from 'piral';
import { layout, errors } from './layout';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'shared-store';
// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';

// renderInstance({
//   layout,
//   errors,
//   requestPilets() {
//     return fetch(feedUrl)
//       .then(res => res.json())
//       .then(res => res.items);
//   },
// });

const instance = createInstance();
render(
  <Provider store={configureStore()}>
    <Piral instance={instance}></Piral>
  </Provider>,
  document.querySelector('#app')
);
