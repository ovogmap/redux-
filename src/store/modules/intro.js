import produce from 'immer';

const REQUEST = 'intro/REQUEST';
const SUCCESS = 'intro/SUCCESS';
const FAILURE = 'intro/FAILURE';

export const request = () => ({type: REQUEST})
export const success = (result) => ({type: SUCCESS, result})
export const failure = () => ({type: FAILURE})

const INITIAL_STATE = {
  introSuccess: false,
  introError: '',
  result: {
    id: '',
    title: '',
    backdropPath: '',
    tagline: '',
  }
}

export default function intro(state = INITIAL_STATE, action){
  switch(action.type){
    case REQUEST:
      return state
    case SUCCESS:
      return {
        ...state,
        introSuccess: true,
        result: action.result 
      }
    default:
      return state;
  }
}