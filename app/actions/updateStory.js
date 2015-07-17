import projectConstants from 'app/constants/project';

export default function updateStory(context, payload, done) {

  context.service.update('story',
    { id: payload.story.id },
    payload.story,
    { upsert: payload.story._new },
    function(err, stories) {
      if(err) {
        console.error(err);
      }

      context.dispatch(projectConstants.UPDATE_STORY, {
        story: stories[0],
        _tempId: payload.story._tempId
      });

      done();
    }
  );
}
