import BaseService from 'addons/BaseService';

class StoryService extends BaseService {
  static serviceName = 'story'

  constructor(options) {
    super(options);
  }

  update(req, resource, params, body, config, callback) {

    if('estimate' in body) {
      if(body.estimate < 0) {
        body.state = 'not_estimated';
      }
      else if(body.state === 'not_estimated') {
        body.state = 'icebox';
      }
    } else if('state' in body && body.state === 'not_estimated') {
      body.estimate = -1;
    }

    super.update(...arguments);
  }
}

export default StoryService;
