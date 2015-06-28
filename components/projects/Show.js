import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';

import { NavLink } from 'fluxible-router';

import Project from '../project/Project';

import ProjectsStore from '../../stores/ProjectsStore';

class Show extends React.Component {

  render() {
    return (
      <div>
        <NavLink routeName='projects'>
          Back
        </NavLink>
        <Project {...this.props.project}/>
      </div>
    );
  }
}

export default connectToStores(
  Show,
  [ ProjectsStore ],
  function(stores, props) {
    let currentProject = stores.ProjectsStore.getCurrentProject();

    return {
      project: currentProject
    };
  }
);
