import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';
import { NavLink } from 'fluxible-router';

import Project from 'app/components/project/Project';
import ProjectsStore from 'app/stores/ProjectsStore';
import StoriesStore from 'app/stores/StoriesStore';

import B from 'app/helpers/bem';

if(process.env.BROWSER) {
  require('app/styles/pages/projects/show.scss');
}

class Show extends React.Component {

  render() {
    return (
      <div className={ this.props.bem() }>
        <NavLink routeName='projects'>
          Back
        </NavLink>
        <Project
          {...this.props.project}
          stories={ this.props.stories }
        />
      </div>
    );
  }
}

Show.defaultProps = {
  bem: B.with('projects-show')
};

export default connectToStores(
  Show,
  [ ProjectsStore, StoriesStore ],
  function(stores, props) {
    var project = stores.ProjectsStore.getCurrentProject();
    var stories = stores.StoriesStore.getStories();

    return {
      project: project,
      stories: stories
    };
  }
);
