import React from "react";
import Button from "./Button";

const SaveNewPopup = ({
  confirmAction,
  cancelAction,
  isOpen,
}: {
  confirmAction: () => void;
  cancelAction: () => void;
  isOpen?: boolean;
}) => {
  if (!isOpen)
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: ".25rem",
        }}
      >
        Add a new place?
        <div>
          <Button
            height={"1.5rem"}
            width={"4.5rem"}
            fill={"red"}
            onClick={cancelAction}
            title={"Cancel"}
          />
          <Button
            height={"1.5rem"}
            width={"4.5rem"}
            fill={"green"}
            onClick={confirmAction}
            title={"Save"}
          />
        </div>
      </div>
    );
  return <>Fill in some details &gt;&gt;</>;
};

export default SaveNewPopup;
