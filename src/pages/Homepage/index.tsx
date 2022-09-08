import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Button from "../../components/Button"
import { InfoNavContainer, ListsContainer } from "./styles"
import { NormalProductList } from "../../components/NormalProductList"
import { IPropsProductCard } from "../../components/ProductCard/types"
import { useEffect, useState } from "react"
import api from "../../services/api"

interface IAPIProduct {
  coverImage: string
  created_at: Date
  id: string
  images: Array<string>
  km: number
  price: number
  title: string
  typeAd: string
  updated_at: string
  user: {
    name: string
    id: string
  }
  vehicleType: string
  year: number
  description: string
}

export const HomePage = () => {
  const [ cars, setCars ] = useState<Array<IPropsProductCard>>([]); 
  const [ bikes, setBikes ] = useState<Array<IPropsProductCard>>([]);

  function filterByCarType(list: Array<IAPIProduct>, ...args: Array<string>){
    const filtered: Array<IPropsProductCard> = []

    for (const data of list){
      for(const filter of args){
        if(data.vehicleType === filter){
          filtered.push({
            advertiserName: data.user.name,
            carImage: data.coverImage,
            carPrice: String(data.price),
            carDescription: data.description,
            carKm: String(data.km),
            carTitle: data.title,
            carYear: data.year,
            advertiserId: data.user.id
          })
        }
      }
    }

    return filtered
  }

  useEffect( () => {
    ( async () => {
      const apiData = (await api.get("/advertisements")).data as Array<IAPIProduct>

      const filteredCars = filterByCarType(apiData, "car", "carro")
      const filteredBikes = filterByCarType(apiData, "moto", "bike", "motorcicle")

      setCars(filteredCars)
      setBikes(filteredBikes)
    })()
  }, [])

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
          {
            cars.length ? (
              <NormalProductList
                listTitle="Carros"
                allData={cars}
              />
            ) : undefined
          }

          {
            bikes.length ? (
              <NormalProductList 
                listTitle="Motos"
                allData={bikes}
              />
            ) : undefined
          }

          
        </ListsContainer>
      </main>

      <Footer />
    </>
  )
}