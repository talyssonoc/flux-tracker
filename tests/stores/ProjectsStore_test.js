import ProjectsStore from 'app/stores/ProjectsStore';

import getProjects from 'tests/fixtures/getProjects';

describe('ProjectsStore', function() {

  var store;
  var projects;

  beforeEach(function() {
    store = new ProjectsStore();
    projects = getProjects();
  });

  afterEach(function() {
    store = undefined;
    projects = undefined;
  });

  it('should correctly receive projects', function() {
    store.handleReceiveProjects({
      projects: projects
    });

    expect(store.projects.length).to.be.equal(3);
  });

  it('should correctly toggle a column', function() {
    store.handleToggleColumn({
      column: 'done'
    });

    expect(store.visibleColumns.done).to.not.be.ok;

    store.handleToggleColumn({
      column: 'icebox'
    });

    expect(store.visibleColumns.icebox).to.not.be.ok;

    store.handleToggleColumn({
      column: 'done'
    });

    expect(store.visibleColumns.done).to.be.ok;
  });
});
