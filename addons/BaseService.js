/*global db */

class BaseService {

  constructor(options) {
    this.name = options.serviceName;
    this.collection = options.collection || this.name;
  }

  create(req, resource, params, body, config, callback) {
    db[this.collection].create(body).exec(callback);
  }

  read(req, resource, params, config, callback) {

    if(config.findOne) {
      return db[this.collection].findOne(params).exec(callback);
    }

    db[this.collection].find(params).exec(callback);
  }

  update(req, resource, params, body, config, callback) {

    if(Array.isArray(params) || params.id) {
      return db[this.collection].update(params, body).exec(callback);
    }

    db[this.collection].create([body]).exec(callback);
  }

  delete(req, resource, params, config, callback) {
    db[this.collection].destroy(params).exec(callback);
  }
}

export default BaseService;
