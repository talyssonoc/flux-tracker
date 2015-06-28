import _ from 'lodash';

export default function createService(collection, overrides = {}) {
  return _.defaults(overrides, {
    read: function(req, resource, params, config, callback) {
      let hasQuery = Object.keys(params).length;

      let data = db(collection);

      if(hasQuery) {
        data = data.where(params);
      }

      callback(null, data);
    }
  });
};
