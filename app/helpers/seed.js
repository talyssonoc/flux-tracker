import loadDatabase from 'app/helpers/loadDatabase';

import projectData from 'database/seed/project.json';
import storyData from 'database/seed/story.json';

export default function seed(done) {
  loadDatabase((loadError, models) => {

    if(loadError) {
      return done(loadError, null);
    }

    models.project.create(projectData, function(projectError) {

      if(projectError) {
        return done(projectError, null);
      }

      models.story.create(storyData, function(storyError) {
        if(storyError) {
          return done(storyError, null);
        }

        console.log('Seed finished');

        done(null, models);
      });

    });
  });
}

if(process.env.SEED_TASK) {
  seed(function(err) {
    if(err) {
      throw err;
    }
  });
}

