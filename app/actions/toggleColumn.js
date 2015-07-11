export default function toggleColumn(context, payload, done) {
  context.dispatch('TOGGLE_COLUMN', {
    column: payload.column
  });
};
