//reducer takes in two things: action and copy of current state

export default function posts(state=[], action){
  switch(action.type){
    case 'INCREMENT_LIKES':
      console.log('incrementing likes!')
      const i = action.index
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes+1},
        ...state.slice(i+1)
      ]
    default:
      return state
  }
}
