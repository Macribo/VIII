const intialState = {
  items: null,
  currentItem: ''
};

export default function(state = intialState, action) {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return {
        ...state,
        items: action.items
      };

    default:
      return state;
  }
}
