import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';
import { NavLink } from 'fluxible-router';

import ProjectItem from 'app/components/project/ProjectItem';
import ProjectsStore from 'app/stores/ProjectsStore';

import B from 'app/helpers/bem';

class Index extends React.Component {

  render() {

    var projects = [];

    if(this.props.projects) {
      projects = this.props.projects.map((project) => {
        return (
          <li key={"project-" + project.id}>
            <ProjectItem project={ project } className={ this.props.bem('project') }/>
          </li>
        );
      });
    }

    return (
      <div className={ `page ${this.props.bem()}` }>
        <div className={ `page__header ${this.props.bem('header')}` }>
          <h1 className={ `page__title ${this.props.bem('title')}` }>Projects</h1>
        </div>
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
