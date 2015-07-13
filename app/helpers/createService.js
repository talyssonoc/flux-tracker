import _ from 'lodash';
import checkQuery from './checkQuery';

export default function createService(collection, overrides = {}) {
  return _.defaults(overrides, {
    create: function(req, resource, params, body, config, callback) {
      let data = db(collection).insert(body);

      callback(null, data);
    },

    read: function(req, resource, params, config, callback) {
      let hasQuery = checkQuery(params);

      let data = db(collection);

      if(hasQuery) {
        data = data.where(params);
      }

      callback(null, data);
    },

    update: function(req, resource, params, body, config, callback) {
      var data = db(collection).chain().find(params);

      data = data.assign(body).value();

      callback(null, data);
    },

    delete: function(req, resource, params, config, callback) {
      var data = db(collection);

      data.remove(params);

      callback(null, {});
    }
  });
};
