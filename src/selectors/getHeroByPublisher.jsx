import { heroes } from '../data/data.jsx'

export const getHeroByPublisher = ( publisher ) => {
    return heroes.filter( hero => hero.publisher === publisher)
}
