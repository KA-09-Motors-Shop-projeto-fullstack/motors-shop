import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Button from "../../components/Button"
import { InfoNavContainer, ListsContainer } from "./styles"
import { NormalProductList } from "../../components/NormalProductList"
import { faker } from '@faker-js/faker';
import { IPropsProductCard } from "../../components/ProductCard/types"

export const HomePage = () => {
  function genFakeData(){
    return {
      carAdvertiser: faker.animal.cat(),
      carDescription: faker.lorem.paragraph(),
      carImage: faker.image.transport(),
      carKm: Math.trunc(Math.random() * 10).toString(),
      carPrice: (Math.random() * 100000).toFixed(2),
      carTitle: faker.company.name(),
      carYear: faker.date.past().getFullYear(),
    }
  }

  const carsFakeData:Array<IPropsProductCard> = []

  for(let i = 0; i < 20; i++){
    carsFakeData.push(genFakeData())
  }

  return (
    <>
      <Header />

      <main>
        <InfoNavContainer>
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
        </InfoNavContainer>
        <ListsContainer>
          <NormalProductList 
            listTitle="Carros"
            allData={carsFakeData}
          />

          <NormalProductList 
            listTitle="Motos"
            allData={carsFakeData}
          />
        </ListsContainer>
      </main>

      <Footer />
    </>
  )
}