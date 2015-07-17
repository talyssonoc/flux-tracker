import _ from 'lodash';

/* global db */

export default function createService(overrides = {}) {
  const collectionName = overrides.name;

  return _.defaults(overrides, {
    create: function(req, resource, params, body, config, callback) {
      db[collectionName].create(body).exec(callback);
    },

    read: function(req, resource, params, config, callback) {

      if(config.findOne) {
        return db[collectionName].findOne(params).exec(callback);
      }

      db[collectionName].find(params).exec(callback);
    },

    update: function(req, resource, params, body, config, callback) {

      if(!params.id) {
        return db[collectionName].create([body]).exec(callback);
      }

      db[collectionName].update(params, body).exec(callback);
    },

    delete: function(req, resource, params, config, callback) {
      db[collectionName].destroy(params).exec(callback);
    }
  });
}
