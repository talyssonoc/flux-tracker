import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';

import { NavLink } from 'fluxible-router';

import ProjectItem from 'app/components/project/ProjectItem';

import ProjectsStore from 'app/stores/ProjectsStore';

if(process.env.BROWSER) {
  require('app/styles/pages/projects/index.scss');
}

class Index extends React.Component {

  render() {
    var projects = [];

    if(this.props.projects) {
      projects = this.props.projects.map((project) => {
        return (
          <li key={"project-" + project.id}>
            <ProjectItem project={ project }/>
          </li>
        );
      });
    }

    return (
      <div>
        <h1>Projects</h1>
        <ul>
          { projects }
        </ul>
      </div>
    );
  }
}

export default connectToStores(
  Index,
  [ ProjectsStore ],
  function(stores, props) {
    return {
      projects: stores.ProjectsStore.getProjects()
    };
  }
);
