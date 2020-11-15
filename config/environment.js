/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    options: {
      'ember-cli-babel': {
        includePolyfill: true
      }
    }
  };
};
