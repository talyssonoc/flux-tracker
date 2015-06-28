import handler from '../utils/getHandler';
import action from '../utils/getAction';

export default {
  projects: {
    path: '/',
    method: 'get',
    title: 'Projects',
    handler: handler('projects/Index'),
    action: action('projects/index')
  },

  show_project: {
    path: '/project/:id',
    method: 'get',
    title: 'Project',
    handler: handler('projects/Show'),
    action: action('projects/show')
  }
};
