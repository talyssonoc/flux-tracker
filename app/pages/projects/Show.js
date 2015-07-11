import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';
import { NavLink } from 'fluxible-router';

import _ from 'lodash';

import toggleColumn from 'app/actions/toggleColumn';
import ProjectsStore from 'app/stores/ProjectsStore';
import Project from 'app/components/project/Project';

import B from 'app/helpers/bem';
import contextTypes from 'app/helpers/contextTypes';

class Show extends React.Component {

  toggleColumn(column) {
    this.context.executeAction(toggleColumn, {
      column: column
    });
  }

  render() {
    var visibleColumns = [];
    var columnValue;

    var visibleColumnsCheckboxes = _.map(this.props.visibleColumns,
      (columnValue, c) => {
        if(columnValue) {
          visibleColumns.push(c);
        }

        return (
          <div key={ `toggle-column-${ c }` }>
            <label>{ c }</label>
            <input
              type="checkbox"
              checked={ columnValue }
              onChange={ () => this.toggleColumn(c) }
            />
          </div>
        );
      }
    );



    return (
      <div className={ `page ${this.props.bem()}` }>
        <div className={ `page__header ${this.props.bem('header')}` }>
          <h1 className={ `page__title ${this.props.bem('title')}` }>
            <NavLink routeName='projects'>
              { '<' }
            </NavLink>
            { this.props.project.name }
            { visibleColumnsCheckboxes }
          </h1>
        </div>
        <Project
          {...this.props.project}
          stories={ this.props.stories }
          visibleColumns={ visibleColumns }
          className='projects-show__project'
        />
      </div>
    );
  }
}

Show.defaultProps = {
  bem: B.with('projects-show')
};

Show.contextTypes = contextTypes();

export default connectToStores(
  Show,
  [ ProjectsStore ],
  function(stores, props) {
    return {
      project: stores.ProjectsStore.getCurrentProject(),
      visibleColumns: stores.ProjectsStore.getVisibleColumns()
    };
  }
);
