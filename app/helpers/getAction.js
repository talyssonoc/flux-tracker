export default function getAction(action) {
  return require('../page_actions/' + action);
}
