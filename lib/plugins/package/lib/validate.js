'use strict';

const BbPromise = require('bluebird');
const isServiceDir = require('../../../utils/isServiceDir');

module.exports = {
  validate() {
    const isRunInService = isServiceDir(process.cwd());

    if (!isRunInService) {
      return BbPromise
        .reject('This command needs to be run inside of a Serverless service directory');
    }

    return BbPromise.resolve();
  },
};
