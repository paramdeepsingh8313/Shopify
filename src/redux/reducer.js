export const initialState = {
  apiData: [],
  name: "Roshan",
  age: 20,
};

export const actionTypes = {
  APIDATA: "APIDATA",
  NAME: "NAME",
  AGE: "AGE",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "APIDATA":
      return { ...state, apiData: action.value };
  }
};
