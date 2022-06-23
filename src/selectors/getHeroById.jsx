import { heroes } from "../data/data.jsx"

export const getHeroById = ( id = '' ) => {
  return  heroes.find(  hero => hero.id === id )
}
