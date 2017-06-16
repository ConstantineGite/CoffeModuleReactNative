import { createStore } from 'redux';

const initialState = {
  lists: [
    'slide1',
    'slide2',
    'slide3',
    'slide4',
    'slide5',
    'slide5'
  ],
  category: true
}

function playlist(state = initialState, action) {
  if (action.type === 'VIEW_LISTS') {
    return {
      ...state,
    list : [...state.lists, action.payload]
    }
  }else if (action.type === 'CHANGE_CATEGORY') {
  return {
      ...state,
    category : state.category = action.payload
    }
  }
  return state;
}

const store = createStore(playlist);

store.subscribe(() => {
 //console.log(store.getState());
})

//store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });



export default store;
