import Actions from 'app/constants/Actions';

export default function addStory(context, payload, done) {

  context.dispatch(Actions.ADD_STORY, {
    story: {
      title: payload.title,
      project_id: payload.project_id
    }
  });

  done();
}
