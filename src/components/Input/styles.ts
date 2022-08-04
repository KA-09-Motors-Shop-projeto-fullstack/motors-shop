import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Label = styled.label`
  color: ${(props) => props.theme.colors.grey1};
  font: ${(props) => props.theme.fonts["input-label"]};
`;
export const InputStyle = styled.input`
  padding: 10px 16px;
  border: 1.5px solid ${(props) => props.theme.colors.grey7};
  border-radius: 4px;
  height: 25px;
  width: 280px;
  ::placeholder {
    font: ${(props) => props.theme.fonts["input-placeholder"]};
    color: ${(props) => props.theme.colors.grey3};
  }
  :hover {
    background-color: ${(props) => props.theme.colors.grey8};
    border-color: ${(props) => props.theme.colors.grey8};
  }
  :focus {
    background-color: ${(props) => props.theme.colors.grey9};
    outline: ${(props) => props.theme.colors.brand2} solid 1.5px;
  }
`;