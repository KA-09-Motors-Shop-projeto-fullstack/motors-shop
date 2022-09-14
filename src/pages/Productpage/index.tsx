import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";
import {
  LeftSidePage,
  RightSidePage,
  MainProduct,
  ImageProduct,
  AnnouncementProdut,
  YearPriceProduct,
  DescriptionProduct,
  CommentsProduct,
  DoACommentaryProduct,
  ImagensProduct,
  FigureProduct,
  ProfileUserProduct,
} from "./styles";
import Commentary from "../../components/Commentary";

export const ProductPage = () => {
  return (
    <>
      <Header />
      <MainProduct>
        <LeftSidePage>
          <ImageProduct>
            <figure>
              <img />
            </figure>
          </ImageProduct>
          <AnnouncementProdut>
            <h2>Nome do produto</h2>
            <YearPriceProduct>
              <div>
                <Button typeButton="brandOpacity" typeFont="medium">
                  ano
                </Button>
                <Button typeButton="brandOpacity" typeFont="medium">
                  KM
                </Button>
              </div>
              <div>
                <p>R$000,00</p>
              </div>
            </YearPriceProduct>
            <div>
              <Button typeButton="brand1" typeFont="medium">
                Comprar
              </Button>
            </div>
          </AnnouncementProdut>
          <DescriptionProduct>
            <h2>Descrição</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </DescriptionProduct>
          <CommentsProduct>
            <h2>Comentários</h2>
            <Commentary
              name={"Gabriel"}
              color={"red"}
              textCommentary="AUEIAUEHOAIUEHAOEIUHAEO"
            />
            <Commentary
              name={"Gabriel"}
              color={"red"}
              textCommentary="AUEIAUEHOAIUEHAOEIUHAEO"
            />
            <Commentary
              name={"Gabriel"}
              color={"red"}
              textCommentary="AUEIAUEHOAIUEHAOEIUHAEO"
            />
          </CommentsProduct>
          <DoACommentaryProduct>
            <div>
              <Avatar name="gabriel" color="red" size={24} fontSize={20} />
            </div>
            <div className="divTextAreaButton">
              <input placeholder="Carro muito confortável, foi uma ótima experiência de compra..." />

              <Button typeButton="brand1" typeFont="medium" type="submit">
                Comentar
              </Button>
            </div>
            <div></div>
          </DoACommentaryProduct>
        </LeftSidePage>
        <RightSidePage>
          <ImagensProduct>
            <h2>Fotos</h2>
          </ImagensProduct>
          <ProfileUserProduct>
            <Avatar name="Gabriel" color="red" size={24} fontSize={20} />
            <h1>Gabriel</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <Button typeButton="default" typeFont="medium">
              Ver todos anuncios
            </Button>
          </ProfileUserProduct>
        </RightSidePage>
      </MainProduct>

      <Footer />
    </>
  );
};
