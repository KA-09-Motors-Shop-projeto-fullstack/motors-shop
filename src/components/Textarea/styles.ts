import styled, { css } from "styled-components";

interface IPropsTextarea {
  error?: boolean;
}

export const Textarea = styled.textarea<IPropsTextarea>`
  resize: none;
  width: 100%;
  height: 128px;
  padding: 24px 16px;

  font: ${(props) => props.theme.fonts["input-placeholder"]};

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.grey6};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.brand1};
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme.colors.grey6};
  }

  &:focus {
    outline: none;
  }
  &:placeholder {
    font: ${(props) => props.theme.fonts["input-placeholder"]};
    color: ${(props) => props.theme.colors.grey3};
  }
`;

export const TextareaContainer = styled.form<IPropsTextarea>`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  border: 1.5px solid
    ${(props) =>
      props.error ? props.theme.colors.alert1 : props.theme.colors.grey7};
  border-radius: 4px;
  button {
    align-self: end;
  }
`;
