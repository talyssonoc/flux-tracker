export default function show(context, payload, done) {

  console.log('Show');

  let id = parseInt(payload.get('params').get('id'), 10);

  context.service.read('project', { id: id }, {}, function(err, projects) {
      let project = projects[0];

      context.service.read('story', { project_id: project.id }, {}, function(err, stories) {
        project.stories = stories;

        context.dispatch('RECEIVE_CURRENT_PROJECT', {
            project: project
        });

        done();
      });
  });
};
