import {useMemo} from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById.jsx'

const Hero = () => {

  
  const navigate = useNavigate()
  const { id } = useParams()

  const hero = useMemo(() => getHeroById(id), [id]) 

  const { url, superhero, alter_ego, publisher, first_appearance, characters } = hero
  
  if(!hero) {
    return <Navigate to="/" />
  }

  const handleReturn = () => {

    navigate( -1 )

 }


  return (
    <div className='row mt-5' >

    <div className="col-4">
      <img 
         src={url}
         alt={superhero}
         className="img-thumbnail"
         />
    </div>

    <div className="col-8">

      <h3> {superhero} </h3>

      <ul className='list-group list-group-flush ' > 
      <li className='list-group-item' > 
      < b> Alter ego:  {alter_ego} </b> 
      </li>
      <li className='list-group-item' >
         < b> Publisher:  {publisher} </b>
      </li>
      <li className='list-group-item' >
         < b> First Appareance:  {first_appearance} </b>
      </li>

      </ul>

      <h5 className='mt-5' >Characters</h5>
      <p>{characters}</p>

      <button className="btn btn-outline-info"
      onClick={handleReturn}
      >
        Regresar
      </button>

    </div>

    </div>
  )
}

export default Hero