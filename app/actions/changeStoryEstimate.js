import projectConstants from 'app/constants/project';

export default function changeStoryEstimate(context, payload, done) {
  context.service.update('story',
    { id: payload.storyId },
    {
      estimate: payload.newEstimate,
      state: 'icebox'
    },
    {}, function(err, stories) {
      if(err) {
        console.error(err);
      }

      context.dispatch(projectConstants.UPDATE_STORY, {
        story: stories[0]
      });

      done();
    }
  );
}
