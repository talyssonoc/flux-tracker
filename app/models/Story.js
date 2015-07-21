import Waterline from 'waterline';

var Story = Waterline.Collection.extend({

  identity: 'story',
  connection: 'default',

  attributes: {
    title: 'string',
    state: 'string',
    type: 'string',
    project_id: 'integer',
    estimate: 'integer'
  },

  beforeUpdate(values, next) {
    if('estimate' in values) {
      if(values.estimate < 0) {
        values.state = 'not_estimated';
      }
      else if(values.state === 'not_estimated') {
        values.state = 'icebox';
      }
    } else if('state' in values && values.state === 'not_estimated') {
      values.estimate = -1;
    }

    next();
  }
});

export default Story;
