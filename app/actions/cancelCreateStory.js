import Actions from 'app/constants/Actions';

export default function cancelCreateStory(context, payload, done) {

  context.dispatch(Actions.CANCEL_CREATE_STORY, {
    _tempId: payload._tempId
  });

  done();
}
