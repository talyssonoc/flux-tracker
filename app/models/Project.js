import Waterline from 'waterline';

var Project = Waterline.Collection.extend({

  identity: 'project',
  connection: 'default',

  attributes: {
    name: 'string'
  }
});

export default Project;
