export default function index(context, payload, done) {

  context.service.read('project', {}, {}, function(err, projects) {

    context.dispatch('RECEIVE_PROJECTS', {
      projects: projects
    });

    done();
  });
};
