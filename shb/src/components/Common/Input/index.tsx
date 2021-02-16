import * as React from "react";

import { InputProps } from "..";
import { SInput } from "./style";

function Input(props: InputProps) {
  return <SInput props={props}>{props.children}</SInput>;
}

export default Input;
