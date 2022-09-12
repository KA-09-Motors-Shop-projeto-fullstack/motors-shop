import { IPropsProductCard } from "../components/ProductCard/types"
import { IAPIProduct } from "../pages/Homepage"

export function filterByCarType(list: Array<IAPIProduct>, ...args: Array<string>){
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