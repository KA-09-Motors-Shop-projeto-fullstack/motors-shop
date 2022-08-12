import styled from "styled-components";

interface IProps {
  color: string;
  width: number;
  height: number;
  fontSize: number;
}

export const Container = styled.div<IProps>`
  background-color: ${(props) => (props.theme.colors as any)[props.color]};
  color: ${(props) => props.theme.colors.whiteFixed};
  font: ${(props) => props.theme.fonts["body-2-500"]};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.fontSize}px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
