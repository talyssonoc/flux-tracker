import React from 'react';

import { NavLink } from 'fluxible-router';

class ProjectItem extends React.Component {
  render() {
    return (
      <div>
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

export default ProjectItem;
