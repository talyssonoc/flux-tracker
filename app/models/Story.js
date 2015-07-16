import Waterline from 'waterline';

var Story = Waterline.Collection.extend({

  identity: 'story',
  connection: 'default',

  attributes: {
    title: 'string',
    state: 'string',
    type: 'string',
    project_id: 'integer'
  }
});

export default Story;
