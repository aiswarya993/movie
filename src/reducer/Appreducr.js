export const initialstate = {
  favorite: [],page:1
};
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_FAVORITE":
  
      return { ...state, favorite: [...state.favorite, payload] };
      case "DEL_FAVORITE":
        return { ...state, favorite: state.favorite.filter(itm=>itm.id!==payload)  };
        case "inc_page":
return{...state,page:state.page+1}
case "DESC_page":
    return{...state,page:state.page-1}
  }

  return state;
};
