import Immutable from 'immutable';

const createLogger = require('redux-logger');

module.exports = function clogger() {
  const logger = createLogger({
    stateTransformer: (state) =>
      Object.keys(state).reduce((prev, key) =>
        Object.assign(
          {},
          prev,
          { [key]: Immutable.Iterable.isIterable(state[key]) ? state[key].toJS() : state[key] }
        )
    , {}),
  });
  return logger;
};
