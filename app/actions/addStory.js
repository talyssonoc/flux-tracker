import projectConstants from 'app/constants/project';

export default function addStory(context, payload, done) {

  context.dispatch(projectConstants.ADD_STORY, {
    story: {
      title: payload.title,
      project_id: payload.project_id
    }
  });

  done();
}
