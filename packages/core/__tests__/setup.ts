/* eslint-disable */
require('jsdom-global')();
import Vue from 'vue';
import { ref } from '@nuxtjs/composition-api';

Vue.config.productionTip = false;
Vue.config.devtools = false;

jest.mock('lodash-es/merge', () => (arg1, arg2) => ({ ...arg1, ...arg2 }));

jest.mock('../src/utils', () => ({
  Logger: {
    debug: () => {},
    info: () => {},
    warn: () => {},
    error: () => {}
  },
  mask: jest.fn((s) => s),
  onSSR: jest.fn(fn => fn()),
  sharedRef: jest.fn(ref),
  vsfRef: jest.fn(ref),
  generateContext: jest.fn(() => ({ context: null })),
  configureFactoryParams: jest.fn((fParams) => fParams),
  useVSFContext: jest.fn()
}));

// @ts-ignore
global.__DEV__ = false;
