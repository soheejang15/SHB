import * as React from "react";

import { TitleProps } from "..";
import { STitle } from "./style";

function Title(props: TitleProps) {
  return <STitle>{props.text}</STitle>;
}

export default Title;
