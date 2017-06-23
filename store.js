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
  category: true,
  loadetFont: false,
  page : 'coffee',
  pageParam : null
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
  }else if (action.type === 'LOAD_FONT') {
  return {
      ...state,
    category : state.loadetFont = action.payload
    }
  }else if (action.type === 'CHANGE_PAGE') {
  return {
      ...state,
    category : state.page = action.payload
    }
  }else if (action.type === 'CHANGE_PAGE_PARAM') {
  return {
      ...state,
    pageParam : state.pageParam = action.payload
    }
  }
  return state;
}

const store = createStore(playlist);

store.subscribe(() => {
  //console.log(store.getState('pageParam'), 'pageParam');
})

export default store;
