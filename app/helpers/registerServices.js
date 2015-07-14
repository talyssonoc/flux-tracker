import fs from 'fs';
import path from 'path';

export default function registerServices(app) {
  let fetchr = app.getPlugin('FetchrPlugin');

  let services = fs.readdirSync(path.join(app.root, 'services'));

  services.forEach((service) => {
    let servicePath = path.join(app.root, 'services', service);

    fetchr.registerService(require(servicePath));
  });

  return fetchr;
};
