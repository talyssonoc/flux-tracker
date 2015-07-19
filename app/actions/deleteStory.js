import Actions from 'app/constants/Actions';

export default function deleteStory(context, payload, done) {

  context.service.delete('story',
    { id: payload.storyId },
    {},
    function(err) {
      if(err) {
        console.error(err);
      }

      context.dispatch(Actions.DELETE_STORY, {
        storyId: payload.storyId
      });

      done();
    }
  );
}
