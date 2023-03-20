export const initialState = {
  apiData: [],
  WishlistArray: [11000001],
  cartArray: [],
  name: "Roshan",
  age: 20,
};

export const actionTypes = {
  APIDATA: "APIDATA",
  NAME: "NAME",
  AGE: "AGE",
  WISHLIST: "WISHLIST",
  CARTLIST: "CARTLIST",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "APIDATA":
      return { ...state, apiData: action.value };

    case "WISHLIST":
      return {
        ...state,
        WishlistArray: [...state.WishlistArray, action.value],
      };

    case "CARTLIST":
      return {
        ...state,
        cartArray: [...state.cartArray, action.value],
      };
  }
};
