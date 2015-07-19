import Actions from 'app/constants/Actions';

export default function updateStory(context, payload, done) {

  context.service.update('story',
    { id: payload.story.id },
    payload.story,
    {},
    function(err, stories) {
      if(err) {
        console.error(err);
      }

      context.dispatch(Actions.UPDATE_STORY, {
        story: stories[0],
        _tempId: payload.story._tempId
      });

      done();
    }
  );
}
