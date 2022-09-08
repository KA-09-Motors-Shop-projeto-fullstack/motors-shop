import styled from "styled-components";

export const Container = styled.div`
  width: 312px;
  :hover {
    figure {
      outline: ${(props) => props.theme.colors.brand1} 2px solid;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4px 0;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.grey1};
  font: ${(props) => props.theme.fonts["heading-7-600"]};
  max-height: 22px;
  width: 98%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font: ${(props) => props.theme.fonts["body-2-400"]};
  color: ${(props) => props.theme.colors.grey2};
  line-height: 24px;
`;

export const Figure = styled.figure`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey7};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  img {
    width: 312px;
    height: 152px;
    overflow: hidden;
  }
`;

export const Avatar = styled.div`
  color: ${(props) => props.theme.colors.whiteFixed};
  font: ${(props) => props.theme.fonts["body-2-500"]};
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.brand1};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;

export const Advertiser = styled.a`
  span {
    font: ${(props) => props.theme.fonts["body-2-500"]};
    color: ${(props) => props.theme.colors.grey2};
    margin-left: 8px;
  }
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const ContainerTags = styled.div`
  button {
    padding: 5px;
  }
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.span`
  font: ${(props) => props.theme.fonts["heading-7-500"]};
  color: ${(props) => props.theme.colors.grey1};
`;
