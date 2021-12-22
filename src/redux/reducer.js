import { ADDTASK, COMPLETE, DELETETASK, EDIT } from "./actiontypes";

const init = [
  {
    id: Math.random(),
    task: "redux",
    isdone: true,
  },
];

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return [...state, payload];
    case DELETETASK:
      return state.filter((el) => el.id !== payload);
    case COMPLETE:
      return state.map((el) =>
        el.id === payload ? { ...el, isdone: !el.isdone } : el
      );
    case EDIT:
      return state.map((el) => (el.id === payload.id ? payload : el));

    default:
      return state;
  }
};

export default reducer;
