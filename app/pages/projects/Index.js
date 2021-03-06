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

  static defaultProps = {
    projects: [],
    bem: B.with('projects-index')
  }

  render() {
    return (
      <div className={ `page ${this.props.bem()}` }>
        <div className={ `page__header ${this.props.bem('header')}` }>
          <h1 className={ `page__title ${this.props.bem('title')}` }>Projects</h1>
        </div>
        <ul className={ this.props.bem('list') }>
          {
            this.props.projects.map((project) =>
              <li
                key={"project-" + project.id}
                className={ this.props.bem('list__item') }
              >
                <ProjectsListItem project={ project } className={ this.props.bem('project') }/>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Index;
