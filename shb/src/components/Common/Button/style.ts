import styled from "styled-components";

import { ButtonProps } from "..";

export const SButton = styled.button<{ props: ButtonProps }>`
  width: ${({ props }) => props.width}px;
  height: ${({ props }) => props.height}px;
  border-radius: ${({ props }) => props.radius}px;
  background: ${({ props }) =>
    props.isAct ? "linear-gradient(225deg, #8f34c5, #616bd3)" : "#b2b2b2"};
  font-size: ${({ props }) => props.fontSize}px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
