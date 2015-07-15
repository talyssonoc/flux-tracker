import projectConstants from 'app/constants/project';

export default function deleteStory(context, payload, done) {

  context.service.delete('story',
    { id: payload.storyId },
    {},
    function(err) {
      if(err) {
        console.error(err);
      }

      context.dispatch(projectConstants.DELETE_STORY, {
        storyId: payload.storyId
      });

      done();
    }
  );
}
