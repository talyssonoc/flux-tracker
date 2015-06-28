export default function action(controller) {
  return require('../controllers/' + controller);
}
