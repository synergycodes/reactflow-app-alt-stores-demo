import { useContext } from "react";
import { ConnectionMakerContext } from "../context";

export const useConnectionMarkerContext = () => {
  const context = useContext(ConnectionMakerContext);

  if (!context) {
    throw new Error("Missing context useConnectionMarkerContext");
  }

  return context;
};
