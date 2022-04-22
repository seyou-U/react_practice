import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    //下はcolor: color,の略称
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
