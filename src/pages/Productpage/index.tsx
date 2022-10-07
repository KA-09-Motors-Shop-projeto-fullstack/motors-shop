// React
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";
import { Comment } from "@/components/Comment";

// Styles
import {
  Aside,
  CarInformationContainer,
  CoverImageContainer,
  ImagesContainer,
  MainContainer,
  SectionCar,
  UserContainer,
  CarDescriptionContainer,
  CoverImage,
  Rectangle,
  Title,
  PriceAndYearContainer,
  Description,
  CommentsContainer,
  CommentList,
  AddCommentContainer,
  Textarea,
  TextareaContainer,
} from "./styles";

// Providers
import { AdvertisementContext } from "@/providers/Advertisements";
import { UserContext } from "@/providers/Users";
import { CommentContext } from "@/providers/Comments";

// Types
import {
  AdvertisementContextType,
  IAdvertisement,
} from "@/types/advertisements";
import { UserContextType } from "@/types/users";
import { CommentContextType, IComment } from "@/types/comments";

// Utils
import { formatNameToTwoWords } from "../../utils/format-name-to-two-words";
import { getTokenLocalStorage } from "../../services/auth";

// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Interface
interface IParamsQuery {
  advertisementId: string;
}
interface IFormInputs {
  text: string;
}

export const ProductPage = () => {
  // Query Params
  const { advertisementId } = useParams<IParamsQuery>();

  // Context
  const { showAdvertisement } = useContext(
    AdvertisementContext
  ) as AdvertisementContextType;
  const { userLogged } = useContext(UserContext) as UserContextType;
  const { postComment } = useContext(CommentContext) as CommentContextType;

  // States
  const [advertisement, setAdvertisement] = useState<
    IAdvertisement | undefined
  >();
  const [comments, setComments] = useState<IComment[]>([]);

  // UseEffect
  useEffect(() => {
    showAdvertisement(advertisementId).then((res) => {
      setAdvertisement(res);
      setComments(res.comments);
    });
  }, []);

  // Form
  const schema = yup.object({
    text: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    postComment({
      token: getTokenLocalStorage(),
      advertisementId,
      comment: {
        text: data.text,
      },
    }).then((res) => {
      reset();
      showAdvertisement(advertisementId).then((res) => {
        setComments(res.comments);
      });
    });
  };

  if (!advertisement) {
    return;
  }

  return (
    <>
      <Header />
      <Rectangle />
      <MainContainer>
        <SectionCar>
          <CoverImageContainer>
            <figure>
              <CoverImage src={advertisement.coverImage} alt="" />
            </figure>
          </CoverImageContainer>
          <CarInformationContainer>
            <div>
              <Title>{advertisement.title}</Title>
              <PriceAndYearContainer>
                <div>
                  <Button typeButton="brandOpacity" typeFont="medium">
                    {advertisement.year}
                  </Button>
                  <Button
                    style={{ marginLeft: 12 }}
                    typeButton="brandOpacity"
                    typeFont="medium"
                  >
                    {advertisement.km.toLocaleString("pt-br")} KM
                  </Button>
                </div>
                <strong>
                  {advertisement.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </PriceAndYearContainer>
            </div>
            <Button
              style={{ marginTop: 15 }}
              typeButton="brand1"
              typeFont="big"
            >
              Comprar
            </Button>
          </CarInformationContainer>
          <CarDescriptionContainer>
            <Title>Descrição</Title>
            <Description>{advertisement.description}</Description>
          </CarDescriptionContainer>
          <CommentsContainer>
            <Title>Comentários</Title>
            <CommentList>
              {comments.map((comment) => {
                return (
                  <Comment
                    date={comment.createdAt}
                    textComment={comment.text}
                    user={comment.user}
                  />
                );
              })}
            </CommentList>
          </CommentsContainer>
          <AddCommentContainer>
            {userLogged ? (
              <>
                <div>
                  <Avatar
                    name={userLogged.name}
                    color={userLogged.avatarColor}
                    size={32}
                    fontSize={14}
                  />
                  <h4>{formatNameToTwoWords(userLogged.name)}</h4>
                </div>
                <TextareaContainer onSubmit={handleSubmit(onSubmit)}>
                  <Textarea
                    {...register("text")}
                    placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                  />
                  <Button type="submit" typeButton="brand1" typeFont="big">
                    Comentar
                  </Button>
                </TextareaContainer>
              </>
            ) : (
              <TextareaContainer>
                <Textarea placeholder="Digite seu comentário" />
                <Button
                  style={{ cursor: "default" }}
                  typeButton="brandDisable"
                  typeFont="big"
                >
                  Comentar
                </Button>
              </TextareaContainer>
            )}
          </AddCommentContainer>
        </SectionCar>
        <Aside>
          <ImagesContainer>
            <Title>Fotos</Title>
            <ul>
              {advertisement.images.map(({ image }) => {
                return (
                  <li>
                    <figure>
                      <img src={image} alt="" />
                    </figure>
                  </li>
                );
              })}
            </ul>
          </ImagesContainer>
          <UserContainer>
            <Avatar
              name={advertisement.user.name}
              color={advertisement.user.avatarColor}
              size={104}
              fontSize={36}
            />
            <Title>{advertisement.user.name}</Title>
            <Description>{advertisement.user.description}</Description>
            <Button typeButton="default" typeFont="big">
              Ver todos os anúncios
            </Button>
          </UserContainer>
        </Aside>
      </MainContainer>
      <Footer />
    </>
  );
};
