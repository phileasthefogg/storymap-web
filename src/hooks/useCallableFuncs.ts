import { useMemo } from "react";
import { app } from "../helpers/firebase";

const useCallableFuncs = () => {
  // if (window.location.hostname === "localhost") {
  //   Functions.useEmulator("localhost", 5001);
  // }
  const callables = useMemo(
    () => ({
      addCurator: app.functions().httpsCallable("addCurator"),
      submitRequest: app.functions().httpsCallable("submitRequest"),
      approveRequest: app.functions().httpsCallable("approveRequest"),
    }),
    []
  );

  return callables;
};

export default useCallableFuncs;
