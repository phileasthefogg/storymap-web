import { TUserAction } from "../actions/userActions";

export interface IUserReducer {
  uid: string;
  displayName: string;
  email: string | null;
  photoUrl: string | null;
  role: string | null;
}

const initialState = {
  uid: "",
  displayName: "",
  email: null,
  photoUrl: null,
  role: null,
};

const userReducer = (
  state: IUserReducer = initialState,
  action: TUserAction
) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
