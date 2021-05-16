import { useMemo } from "react";
import { Functions } from "../helpers/firebase";

const useCallableFuncs = () => {
  const callables = useMemo(
    () => ({
      addCurator: Functions.httpsCallable("addCurator"),
    }),
    []
  );

  return callables;
};

export default useCallableFuncs;
