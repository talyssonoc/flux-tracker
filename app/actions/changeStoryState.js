import storyConstants from 'app/constants/story';

export default function changeStoryState(context, payload, done) {

  context.service.update('story',
    { id: payload.storyId },
    { state: payload.newState },
    {}, function(err, stories) {
      if(err) {
        console.error(err);
      }

      context.dispatch(storyConstants.CHANGE_STORY_STATE, {
        story: stories[0]
      });

      done();
    }
  );
}
