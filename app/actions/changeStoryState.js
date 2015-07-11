export default function changeStoryState(context, payload, done) {
  context.service.update(
    'story',
    { id: payload.storyId },
    { state: payload.newState },
    {},
    function(err, story) {
      if(err) {
        console.error(err);
      }

      context.dispatch('CHANGE_STORY_STATE', {
        story: story
      });

      done();
  });
};
