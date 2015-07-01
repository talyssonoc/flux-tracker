export default function getHandler(handler) {
  return require('../pages/' + handler);
};
