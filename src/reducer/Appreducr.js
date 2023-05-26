export const initialstate = {
  favorite: [],
};
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_FAVORITE":
  
      return { ...state, favorite: [...state.favorite, payload] };
      case "DEL_FAVORITE":
        return { ...state, favorite: state.favorite.filter(itm=>itm.id!==payload)  };

  }

  return state;
};
