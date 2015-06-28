export default function index(context, payload, done) {

  console.log('Index');

  context.service.read('project', {}, {}, function(err, projects) {

      context.dispatch('RECEIVE_PROJECTS', {
          projects: projects
      });

      done();
  });
};
