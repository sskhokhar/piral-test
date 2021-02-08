import * as React from 'react';
import { PiletApi } from 'shell';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
function dynamic() {
  return <DynamicModuleLoader modules={[]}></DynamicModuleLoader>;
}
export function setup(app: PiletApi) {
  app.registerPage('/test', dynamic);
}
