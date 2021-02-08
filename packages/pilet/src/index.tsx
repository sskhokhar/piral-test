import * as React from 'react';
import { PiletApi, addNotification } from 'frontend-shell';

export function setup(app: PiletApi) {
  addNotification({ text: 'BOOM', title: 'HELLo', type: 'info' });
  app.registerMenu({
    type: 'mainmenu',
    name: 'pilet',
    label: 'Todo List',
    href: '/todo',
  });
  app.registerMenu({
    type: 'footer',
    name: 'pilet',
    label: 'Todo List',
    href: '/todo',
  });
}
