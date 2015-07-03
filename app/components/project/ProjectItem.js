import React from 'react';
import { NavLink } from 'fluxible-router';

import B from 'b_';

class ProjectItem extends React.Component {
  render() {
    return (
      <div className={ this.props.bem() }>
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

ProjectItem.defaultProps = {
  bem: B.with('project-item')
};

export default ProjectItem;
