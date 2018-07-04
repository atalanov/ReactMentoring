import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import IndexComponent from './IndexComponent';
import configureStore from './store';
import { actions, events } from './constants/constants';

const computeInitialState = params => ({
    previews: {},
    filter: {
        search: params.search || '',
        searchBy: params.searchBy || 'title',
        sortBy: params.sortBy || 'title',
        sortOrder: params.sortOrder || 'asc',
        filter: [],
        offset: 0,
        limit: 18,
    },
    pendingEvent: { event: events.UPDATE, reporter: 'initial' },
    pending: false,
});

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${process.env.NODE_ENV === 'development' ? '<link href="/css/main.css" rel="stylesheet" type="text/css">' : '<link href="/css/style.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {

    const store = configureStore(computeInitialState(req.params));
    // This context object contains the results of the render
    const context = {};

    const root = (
      <IndexComponent store={store} Router={StaticRouter} />
    );

    const htmlString = renderToString(root);

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));
  };
}
