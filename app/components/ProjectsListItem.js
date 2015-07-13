import React from 'react';
import { NavLink } from 'fluxible-router';

import B from 'app/helpers/bem';

class ProjectsListItem extends React.Component {
  render() {
    return (
      <div className={ `${this.props.bem()} ${this.props.className}` }>
        <NavLink
          routeName='show_project'
          navParams={{ id: this.props.project.id }}
        >
          {this.props.project.name}
        </NavLink>
      </div>
    );
  }
}

ProjectsListItem.defaultProps = {
  bem: B.with('project-item'),
  className: ''
};

export default ProjectsListItem;
