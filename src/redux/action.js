import { ADDTASK, COMPLETE, DELETETASK, EDIT } from "./actiontypes";

export const addtask = (newtask) => {
  return {
    type: ADDTASK,
    payload: newtask,
  };
};

export const deletetask = (id) => {
  return {
    type: DELETETASK,
    payload: id,
  };
};

export const complete = (id) => {
  return {
    type: COMPLETE,
    payload: id,
  };
};

export const edit = (edittask) => {
  return {
    type: EDIT,
    payload: edittask,
  };
};

// export const filtre = () => {
//   return {
//     type: FILTRE,
//   };
// };
