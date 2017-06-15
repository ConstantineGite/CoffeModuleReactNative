import { createStore } from 'redux';

const initialState = [
    'Smells like spirit',
    'Enter Sandman',
    'sds sdasdasd'
];

function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

store.subscribe(() => {
 //console.log(store.getState());
})


//store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });



export default store;
