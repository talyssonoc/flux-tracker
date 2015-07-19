import Actions from 'app/constants/Actions';

export default function index(context, payload, done) {

  context.service.read('project', {}, {}, function(err, projects) {

    context.dispatch(Actions.RECEIVE_PROJECTS, {
      projects: projects
    });

    done();
  });
};
