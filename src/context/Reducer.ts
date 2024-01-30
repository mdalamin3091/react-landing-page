interface CountryState {
  isLoading: boolean;
  isError: boolean;
  error?: any;
  data?: any;
}

const reducer = (
  state: CountryState,
  { payload, type }: { payload: any; type: string }
) => {
  switch (type) {
    case "lOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADDED_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case "LOADDED_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
