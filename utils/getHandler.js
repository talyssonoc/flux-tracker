export default function getHandler(component) {
  return require('../components/' + component);
};
