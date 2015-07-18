import mirror from 'react/lib/keyMirror';
import _ from 'lodash';

export default _.extend(mirror({
  RECEIVE_STORIES: null,
  CHANGE_STORY_STATE: null,
  CHANGE_STORY_ESTIMATE: null
}), {
  TYPES: [
    'feature',
    'chore',
    'bug',
    'release'
  ],
  STATES: [
    'not_estimated',
    'icebox',
    'unstarted',
    'started',
    'finished',
    'delivered',
    'accepted',
    'rejected'
  ]
});
