import styled from "styled-components";
import theme from "../../styles/theme";

export const MainProduct = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props) => props.theme.colors["grey8"]};
  gap: 46px;
  nav {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSidePage = styled.nav`
  gap: 25px;
`;

export const RightSidePage = styled.nav`
  gap: 25px;
`;

export const ImageProduct = styled.section`
  max-width: 752px;
  max-height: 355px;
  align-items: center;
  background-color: ${(props) => props.theme.colors["whiteFixed"]};
`;

export const AnnouncementProdut = styled.section`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  max-width: 751px;
  max-height: 240px;
  gap: 24px;
  padding: 44px 49px 28px 44px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors["whiteFixed"]};

  div {
    gap: 50px;
  }

  h2 {
    font: ${(props) => props.theme.fonts["heading-6-600"]};
    margin-bottom: 17px;
  }
`;

export const YearPriceProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    gap: 12px;
  }

  p {
    font: ${(props) => props.theme.fonts["heading-7-600"]};
  }
`;

export const DescriptionProduct = styled.section`
  display: flex;
  flex-direction: column;
  width: 751px;
  height: 213px;
  gap: 24px;
  padding: 44px 49px 24px 44px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors["whiteFixed"]};

  h2 {
    font: ${(props) => props.theme.fonts["heading-7-600"]};
  }

  p {
    color: ${(props) => props.theme.colors["grey2"]};
    font: ${(props) => props.theme.fonts["body-1-400"]};
    margin: 0px;
  }
`;

export const CommentsProduct = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 751px;
  border-radius: 4px;
  padding: 44px 49px 24px 44px;
  background-color: ${(props) => props.theme.colors["whiteFixed"]};

  h2 {
    font: ${(props) => props.theme.fonts["heading-7-600"]};
  }
`;

export const DoACommentaryProduct = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 751px;
  border-radius: 4px;
  padding: 44px 49px 24px 44px;
  background-color: ${(props) => props.theme.colors["whiteFixed"]};

  .divTextAreaButton {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    border: solid 1.5px ${(props) => props.theme.colors["grey7"]};
    width: 672px;
    height: 128px;
    border-radius: 4px;

    input {
      font: ${(props) => props.theme.fonts["input-placeholder"]};
      color: ${(props) => props.theme.colors["grey3"]};
      width: 100%;
      height: 100%;
      padding-left: 28px;
      padding-right: 28px;

      ::placeholder {
        font: ${(props) => props.theme.fonts["input-placeholder"]};
        color: ${(props) => props.theme.colors["grey3"]};
        text-align: start;
      }
    }
    button {
      margin-right: 13px;
      margin-bottom: 11px;
    }
  }
`;

export const ImagensProduct = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 440px;
  height: 377px;
  border-radius: 4px;
  padding: 44px 49px 24px 44px;
  background-color: ${(props) => props.theme.colors["whiteFixed"]};
  margin-top: 40px;

  h2 {
    font: ${(props) => props.theme.fonts["heading-7-600"]};
  }
`;

export const FigureProduct = styled.figure``;

export const ProfileUserProduct = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 440px;
  height: 426px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors["whiteFixed"]};
  h1 {
    font: ${(props) => props.theme.fonts["heading-7-600"]};
  }

  p {
    text-align: center;
    width: 352px;
    font: ${(props) => props.theme.fonts["body-1-400"]};
    color: ${(props) => props.theme.colors["grey2"]};
  }
`;
