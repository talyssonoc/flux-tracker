import projectConstants from 'app/constants/project';

export default function cancelCreateStory(context, payload, done) {

  context.dispatch(projectConstants.CANCEL_CREATE_STORY, {
    _tempId: payload._tempId
  });

  done();
}
