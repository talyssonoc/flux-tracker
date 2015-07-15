import columnConstants from 'app/constants/column';

export default function toggleColumn(context, payload, done) {
  context.dispatch(columnConstants.TOGGLE_COLUMN, {
    column: payload.column
  });

  done();
}
