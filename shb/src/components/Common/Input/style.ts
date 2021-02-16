import styled from "styled-components";

import { InputProps } from "..";

export const SInput = styled.div<{ props: InputProps }>`
  width: ${({ props }) => props.width}px;
  height: ${({ props }) => props.height}px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  ${({ props }) =>
    props.isAct
      ? "border-image: linear-gradient(225deg, #8f34c5, #616bd3); border-image-width: 0 0 0 1px;"
      : "border-bottom: 1px solid #b2b2b2;"}

  > img {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin: 0 20px 0 10px;
  }

  > input {
    font-size: ${({ props }) => props.fontSize}px;
    font-weight: 300;
    color: #000000;
  }
`;
