import Actions from 'app/constants/Actions';

export default function changeStoryColumn(context, payload, done) {

  context.dispatch(Actions.UPDATE_STORY, {
    story: payload.story
  });

  done();
}
