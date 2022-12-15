import React from "react";
import ClickContext from "./click-context";

const ClickProvider = (props) => {
  return <ClickContext.Provider value={{isOtherClick: false}}>{props.children}</ClickContext.Provider>;
};

export default ClickProvider;
