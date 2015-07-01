import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';

import { NavLink } from 'fluxible-router';

import Project from '../project/Project';

import ProjectsStore from '../../stores/ProjectsStore';
import StoriesStore from '../../stores/StoriesStore';

class Show extends React.Component {

  render() {
    return (
      <div>
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
