import projectConstants from 'app/constants/project';

export default function index(context, payload, done) {

  context.service.read('project', {}, {}, function(err, projects) {

    context.dispatch(projectConstants.RECEIVE_PROJECTS, {
      projects: projects
    });

    done();
  });
};
