import { ReactChild } from "react";

export interface ButtonProps {
  width: number;
  height: number;
  radius: number;
  text: string;
  fontSize: number;
  isAct: boolean;
}

export interface TitleProps {
  text: string;
}

export interface InputProps {
  children: ReactChild;
  width: number;
  height: number;
  fontSize: number;
  isAct: boolean;
}
