import mirror from 'react/lib/keyMirror';

const Actions = mirror({
  // Navigations actions
  NAVIGATE_SUCCESS: null,

  // Project actions
  RECEIVE_PROJECTS: null,
  RECEIVE_CURRENT_PROJECT: null,

  // Column actions
  TOGGLE_COLUMN: null,

  // Story actions
  RECEIVE_STORIES: null,
  ADD_STORY: null,
  DELETE_STORY: null,
  UPDATE_STORY: null,
  CANCEL_CREATE_STORY: null
});

export default Actions;
