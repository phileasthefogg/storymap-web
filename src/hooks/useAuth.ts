import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../reducers/rootReducer";
import { app } from "../helpers/firebase";

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  useEffect(() => {
    app.auth().onAuthStateChanged((usr: any) => {
      if (usr) {
        usr
          .getIdTokenResult()
          .then((tkn: any) => {
            const { uid, displayName, email, photoUrl } = usr;
            const role = tkn.claims.isCurator ? "Curator" : "User";
            if (!user.uid) {
              dispatch({
                type: "UPDATE_USER",
                payload: { uid, displayName, email, photoUrl, role },
              });
            }
          })
          .catch((err: any) => {
            console.log(
              "something is wrong w/ authoriezd user token fetch",
              err
            );
          });
      } else {
        dispatch({
          type: "UPDATE_USER",
          payload: {
            uid: "",
            displayName: "",
            email: null,
            photoUrl: null,
            role: null,
          }, //TODO: import initial state from user reducer to use here
        });
      }
    });
  }, [dispatch, user.uid]);
};

export default useAuth;
