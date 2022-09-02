import ProductCard from "../ProductCard"
import { IPropsProductCard } from "../ProductCard/types"
import { Container } from "./styles";

interface Iprops {
  listTitle: string
  allData: Array<IPropsProductCard>
}

export const NormalProductList = ({listTitle, allData}: Iprops) => {
  const products = allData.map( (data, i) => {
    return(
      <li>
        <ProductCard
          carAdvertiser={data.carAdvertiser}
          carDescription={data.carDescription}
          carImage={data.carImage}
          carKm={data.carKm}
          carPrice={data.carPrice}
          carTitle={data.carTitle}
          carYear={data.carYear}
          key={i}
        />
      </li>
    )
  })

  return (
    <Container>
      <h2>{listTitle}</h2>
      <ul>
        {products}
      </ul>
    </Container>
  )
}