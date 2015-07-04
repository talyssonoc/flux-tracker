import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';
import { NavLink } from 'fluxible-router';

import ProjectItem from 'app/components/project/ProjectItem';
import ProjectsStore from 'app/stores/ProjectsStore';

import B from 'app/helpers/bem';

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
      <div className={ this.props.bem() }>
        <h1>Projects</h1>
        <ul className={ this.props.bem('list') }>
          { projects }
        </ul>
      </div>
    );
  }
}

Index.defaultProps = {
  bem: B.with('projects-index')
};

export default connectToStores(
  Index,
  [ ProjectsStore ],
  function(stores, props) {
    return {
      projects: stores.ProjectsStore.getProjects()
    };
  }
);
