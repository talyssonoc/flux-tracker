import Waterline from 'waterline';

const orm = new Waterline();

import config from 'configs/database';

import Project from 'app/models/Project';
import Story from 'app/models/Story';

orm.loadCollection(Project);
orm.loadCollection(Story);

export default function loadDatabase(done) {
  orm.initialize(config, (err, models) => {
    if(err) {
      return done(err, null);
    }

    done(null, models.collections)

  });
}
