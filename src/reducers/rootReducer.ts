import { combineReducers } from "redux";
import reducer, { ReducerInterface } from "./reducer";

export interface IStore {
  reducer: ReducerInterface;
}

const rootReducer = combineReducers({
  reducer: reducer,
});

export const yourReducerSelector = (state: IStore) => state.reducer;

export default rootReducer;
