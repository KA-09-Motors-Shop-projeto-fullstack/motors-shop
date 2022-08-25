import styled from "styled-components";

interface IProps {
  color: string;
  size: number;
  fontSize: number;
}

export const Container = styled.div<IProps>`
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.colors.whiteFixed};
  font: ${(props) => props.theme.fonts["body-2-500"]};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  font-size: ${(props) => props.fontSize}px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
