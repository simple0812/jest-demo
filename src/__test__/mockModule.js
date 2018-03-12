import Promise from 'bluebird';

module.exports = {
  get: () => {
    return Promise.resolve('abc')
  }
}