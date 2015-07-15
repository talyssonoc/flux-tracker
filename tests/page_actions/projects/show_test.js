import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';

import getProjects from 'tests/fixtures/getProjects';
import getStories from 'tests/fixtures/getStories';

import MockProjectsStore from 'tests/fixtures/MockProjectsStore';
import MockStoriesStore from 'tests/fixtures/MockStoriesStore';
import show from 'app/page_actions/projects/show';

describe('projects#show', function() {
  var context;
  var projects;
  var stories;

  beforeEach(function() {
    projects = getProjects();
    stories = getStories();

    context = createMockActionContext({
      stores: [MockProjectsStore, MockStoriesStore]
    });

    context.service = new MockService();

    context.service.setService('project', function(method, params, config, callback) {
      callback(null, [projects[0]]);
    });

    context.service.setService('story', function(method, params, config, callback) {
      callback(null, [stories[1], stories[2]]);
    });
  });

  it('should load the project and its stories', function(done) {

    // Mocks the request params Immutable object
    var params = {
      get() {
        return {
          get() {
            return 0;
          }
        }
      }
    };

    context.executeAction(show, params, function(err) {
      if(err) {
        return done(err);
      }

      expect(context.dispatchCalls.length).to.equal(2);

      expect(context.dispatchCalls[0].name).to.equal('RECEIVE_CURRENT_PROJECT');

      expect(context.dispatchCalls[0].payload.project).to.eql(getProjects()[0]);

      var currentProject = context.getStore(MockProjectsStore).getCurrentProject();

      expect(currentProject).to.be.eql(getProjects()[0]);

      expect(context.dispatchCalls[1].name).to.equal('RECEIVE_STORIES');

      expect(context.dispatchCalls[1].payload.stories).to.eql([stories[1], stories[2]]);

      var currentStories = context.getStore(MockStoriesStore).getStories();

      expect(currentStories).to.eql([stories[1], stories[2]]);

      done();
    });
  });
});
