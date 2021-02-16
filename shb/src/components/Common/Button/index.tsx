import * as React from "react";

import { ButtonProps } from "..";
import { SButton } from "./style";

function Button(props: ButtonProps) {
  return <SButton props={props}>{props.text}</SButton>;
}

export default Button;
