import React from 'react';
import { connectToStores } from 'fluxible-addons-react';
import { NavLink } from 'fluxible-router';

import ProjectsListItem from 'app/components/ProjectsListItem';
import ProjectsStore from 'app/stores/ProjectsStore';

import B from 'app/helpers/bem';

@connectToStores([ ProjectsStore ], (context, props) => {
  var projectsStore = context.getStore(ProjectsStore);

  return {
    projects: projectsStore.getProjects()
  };
})
class Index extends React.Component {

  render() {

    var projects = [];

    if(this.props.projects) {
      projects = this.props.projects.map((project) => {
        return (
          <li
            key={"project-" + project.id}
            className={ this.props.bem('list__item') }
          >
            <ProjectsListItem project={ project } className={ this.props.bem('project') }/>
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

export default Index;
