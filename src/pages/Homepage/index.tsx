import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Button from "../../components/Button"
import { StyleContainer } from "./styles"

export const HomePage = () => {
  return (
    <>
      <Header />

      <StyleContainer>
        <section>
          <div>
            <h2>Velocidade e experiência em um lugar feito para você</h2>
            <p>Um ambiente feito para você explorar o seu melhor</p>
          </div>

          <nav>
            <Button
              typeButton="outline2"
              typeFont="medium"
              children="Leilão"
            />

            <Button
              typeButton="outline2"
              typeFont="medium"
              children="Carros"
            />

            <Button
              typeButton="outline2"
              typeFont="medium"
              children="Motos"
            />
          </nav>
        </section>
      </StyleContainer>

      <Footer />
    </>
  )
}