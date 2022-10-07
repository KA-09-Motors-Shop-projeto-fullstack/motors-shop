import styled, { css } from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey10};
  border-radius: 4px;
`;

// Containers
export const ImagesContainer = styled(Container)`
  padding: 44px;
  * {
    padding: 0;
    margin: 0;
  }
  ul {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-column-gap: 14px;
    grid-row-gap: 32px;
  }
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const UserContainer = styled(Container)`
  display: grid;
  justify-items: center;
  grid-row-gap: 28px;
  padding: 60px;
`;

export const CoverImageContainer = styled(Container)`
  width: 100%;
  figure {
    padding: 15px;
    margin: 0;
  }
`;

export const CarInformationContainer = styled(Container)`
  padding: 44px;
  > div {
    height: 150px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    strong {
      font: ${(props) => props.theme.fonts["heading-7-500"]};
      color: ${(props) => props.theme.colors.grey1};
    }
  }
`;

export const CarDescriptionContainer = styled(Container)`
  padding: 44px;
  display: grid;
  grid-row-gap: 32px;
`;

export const PriceAndYearContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Rectangle
export const Rectangle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.brand2};

  position: fixed;
  z-index: -1;
`;

// Main, Aside e Section
export const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 110px;
`;

export const Aside = styled.aside`
  display: grid;
  grid-row-gap: 34px;
  max-width: 35vw;
`;

export const SectionCar = styled.section`
  width: 50vw;
  display: grid;
  grid-row-gap: 16px;
  margin-bottom: 73px;
`;

// Title e Description
export const Title = styled.h3`
  font: ${(props) => props.theme.fonts["heading-6-600"]};
  color: ${(props) => props.theme.colors.grey1};
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.grey2};
  font: ${(props) => props.theme.fonts["body-1-400"]};
`;

// CoverImage
export const CoverImage = styled.img`
  width: 100%;
  border-radius: 4px;
  box-shadow: 1px 1px 15px 8px rgba(0, 0, 0, 0.5);
`;

// Comments
export const CommentsContainer = styled(Container)`
  padding: 44px;
`;

export const CommentList = styled.div`
  margin-top: 24px;
  display: grid;
  grid-row-gap: 30px;
`;

export const AddCommentContainer = styled(Container)`
  padding: 44px;
  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  h4 {
    font: ${(props) => props.theme.fonts["body-2-500"]};
    color: ${(props) => props.theme.colors.grey1};
    margin: 0;
  }
`;

// Form


// Textarea

