import { Link } from 'react-router-dom'

const HeroCard = ( {

    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    url
    
}) => {
  return (
    <div className="col">
      <div className="card" >

        <div className="row no-gutters">

            <div className="col-4">

              <img src={url} alt={superhero} className="card-img-top" />

            </div>

            <div className="col-8">

                <div className="card-body">
                    <h5 className="card-title">  {superhero} </h5>
                    <p className="card-text">  {alter_ego} </p>

                    {/* {
                        ( alter_ego !== characters ) && 
                        <p className="text-muted"> 
                         <small> {characters} </small>  
                        </p>
                    } */}

                    <p className="card-text">
                        <small className="text-muted"> {first_appearance}  </small>
                    </p>

                    <Link to={`/hero/${id}`} className="text-decoration-none" > Ver...  </Link>

                </div>
                
            </div>

        </div>

      </div>
    </div> 
  )
}

export default HeroCard