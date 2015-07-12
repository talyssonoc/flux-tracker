import React from 'react';
import connectToStores from 'fluxible/addons/connectToStores';
import { NavLink } from 'fluxible-router';

import _ from 'lodash';

import toggleColumn from 'app/actions/toggleColumn';
import addStory from 'app/actions/addStory';
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

  addStory() {
    var title = prompt('Name:');

    this.context.executeAction(addStory, {
      title: title,
      project_id: this.props.project.id
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
          <div
            key={ `toggle-column-${ c }` }
            className={ this.props.bem('visible-columns__item') }
          >
            <input
              type="checkbox"
              checked={ columnValue }
              onChange={ () => this.toggleColumn(c) }
            />
            <label>{ c }</label>
          </div>
        );
      }
    );

    return (
      <div className={ `page ${this.props.bem()}` }>
        <div className={ `page__header ${this.props.bem('header')}` }>
          <NavLink
            routeName='projects'
            className={ this.props.bem('header__back-link') }>
            { '«' }
          </NavLink>
          <h1 className={ `page__title ${this.props.bem('title')}` }>
            { this.props.project.name }
          </h1>
          <div className={ `${this.props.bem('add-story')}` }>
            <button
              type="button"
              className="button button--black"
              onClick={ () => this.addStory() }
            >
              + Add story
            </button>
          </div>
          <div className={ this.props.bem('visible-columns') }>
            { visibleColumnsCheckboxes }
          </div>
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
