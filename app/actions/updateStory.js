import projectConstants from 'app/constants/project';

export default function updateStory(context, payload, done) {

  context.service.update(
    'story',
    { id: payload.story.id },
    payload.story,
    {},
    function(err, story) {
      if(err) {
        console.error(err);
      }

      context.dispatch(projectConstants.UPDATE_STORY, {
        story: story
      });

      done();
    }
  );
};
