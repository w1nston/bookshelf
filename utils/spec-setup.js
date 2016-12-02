/* eslint no-undef: 0 */
/* eslint import/no-extraneous-dependencies: 0 */

import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
