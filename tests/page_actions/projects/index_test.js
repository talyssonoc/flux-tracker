import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';

import getProjects from 'tests/fixtures/getProjects';

import MockProjectsStore from 'tests/fixtures/MockProjectsStore';
import index from 'app/page_actions/projects/index';

describe('projects#index', function() {
  var context;
  var projects;

  beforeEach(function() {
    projects = getProjects();

    context = createMockActionContext({
      stores: [MockProjectsStore]
    });

    context.service = new MockService();

    context.service.setService('project', function(method, params, config, callback) {
      callback(null, projects);
    });
  });

  it('should load the projects', function(done) {
    context.executeAction(index, {}, function(err) {
      if(err) {
        return done(err);
      }

      expect(context.dispatchCalls.length).to.equal(1);

      expect(context.dispatchCalls[0].name).to.equal('RECEIVE_PROJECTS');

      expect(context.dispatchCalls[0].payload.projects).to.eql(getProjects());

      var projectsFromStore = context.getStore(MockProjectsStore).getProjects();

      expect(projectsFromStore).to.eql(getProjects());

      done();
    });
  });
});
