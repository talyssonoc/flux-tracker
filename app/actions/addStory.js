import projectConstants from 'app/constants/project';

export default function addStory(context, payload, done) {

  context.service.create('story',
    {},
    {
      title: payload.title,
      project_id: payload.project_id
    },
    {}, function(err, story) {
      if(err) {
        console.error(err);
      }

      context.dispatch(projectConstants.ADD_STORY, {
        story: story
      });

      done();
    }
  );
};
