import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "GET": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: null,
        data: action?.data,
      };
    }
    case "ERROR": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error?.message,
      };
    }

    case "FINAL": {
      return {
        ...state,
        isLoading: false,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
};

const useDispatch = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    isLoading: true,
    isError: false,
    error: null,
  });

  return { state, dispatch };
};

export default useDispatch;
