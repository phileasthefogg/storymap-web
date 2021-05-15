import { TReducerAction } from "../actions/haveFun";

export interface ReducerInterface {
  havingFun: boolean;
}

const initialState = {
  havingFun: true,
};

const reducer = (
  state: ReducerInterface = initialState,
  action: TReducerAction
) => {
  switch (action.type) {
    case "UPDATE_FUN":
      return { ...state, havingFun: action.payload };
    default:
      return state;
  }
};

export default reducer;
