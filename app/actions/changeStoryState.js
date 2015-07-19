import Actions from 'app/constants/Actions';

export default function changeStoryState(context, payload, done) {

  context.service.update('story',
    { id: payload.storyId },
    { state: payload.newState },
    {}, function(err, stories) {
      if(err) {
        console.error(err);
      }

      context.dispatch(Actions.UPDATE_STORY, {
        story: stories[0]
      });

      done();
    }
  );
}
