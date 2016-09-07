const handler = {};

export const reducer = (state = {}, action) => (
  handler[action.type]
    ? handler[action.type](state, action)
    : state
);

export default reducer;
