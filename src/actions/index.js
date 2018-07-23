export const ADD = 'ADD';

export function addMessages(message) {
  console.log("Check " + message);
  return {
    type: ADD,
    message
  }
};


