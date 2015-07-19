import Actions from 'app/constants/Actions';

export default function toggleColumn(context, payload, done) {
  context.dispatch(Actions.TOGGLE_COLUMN, {
    column: payload.column
  });

  done();
}
