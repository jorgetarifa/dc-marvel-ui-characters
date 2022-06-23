import { getHeroByPublisher } from '../../selectors/getHeroByPublisher.jsx'
import HeroCard from './HeroCard.jsx'
import { useMemo } from 'react'

export const HeroList = ( { publisher } ) => {
   const heroes =  useMemo(() => getHeroByPublisher( publisher ), [publisher] )

    const validateCharacter = [ 'DC Comics', 'Marvel Comics' ]
    if ( !validateCharacter.includes(publisher) ) {
        throw new Error(` ${publisher} in not valid a publisher `) 
    }

    
  return (
    <div className='row rows-columns-1 row-cols-md-3 g-3' >
    
    

    
        {
            heroes.map( hero => (
                <HeroCard key={hero.id} 
                   {...hero}    
                 />
            ) )
        }


    </div>
  )
}

