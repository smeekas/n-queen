import { createStore } from "redux";

const queenReducer = (state = { queen: ['....','....','....','....'] }, action) => {
  // console.log(state.queen)
  // console.log(state.queen)
  if (action.type === "change") {
    return { queen: action.queen };
  }
  return state;
};
const store = createStore(queenReducer);

export default store;
