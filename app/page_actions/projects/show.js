import projectConstants from 'app/constants/project';
import storyConstants from 'app/constants/story';

export default function show(context, payload, done) {

  var id = parseInt(payload.get('params').get('id'), 10);

  context.service.read('project', { id: id }, {}, function(err, projects) {
    var project = projects[0];

    context.dispatch(projectConstants.RECEIVE_CURRENT_PROJECT, {
      project: project
    });

    context.service.read('story', { project_id: project.id }, {}, function(err, stories) {

      context.dispatch(storyConstants.RECEIVE_STORIES, {
        stories: stories
      });

      done();
    });
  });
};
