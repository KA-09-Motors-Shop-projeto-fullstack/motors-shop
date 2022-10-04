import styled from "styled-components";

export const CommentaryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TitleCommentary = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;

  h2 {
    font: ${(props) => props.theme.fonts["body-2-500"]};
    font-size: 14px;
    margin-bottom: 0px;
  }

  h4 {
    font: ${(props) => props.theme.fonts["body-2-400"]};
    color: ${(props) => props.theme.colors["grey2"]};
    margin-bottom: 0px;
  }
`;

export const TextCommentary = styled.div`
  font: ${(props) => props.theme.fonts["body-2-400"]};
  color: ${(props) => props.theme.colors["grey2"]};
`;

export const Ellipse = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.grey4};
`;
