import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";

function CarouselHome() {
  return (
    <section>
    <Carousel fade style={{ width: "90%" }} className="mx-auto">
        <Carousel.Item>
        <Link to={`/productos/WfpxApeJwyq5KgxVjQ6Y`}>
          <img
            className="cardpro d-block w-100 img-thumbnail"
            src={require('../img/fairytale.gif')}
            alt="Banner de Cuento de Hadas"
        />
        </Link>
        <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <Link to={`/productos/FzxxWtrjVOtjTvlEZSKs`}>
        <img
            className="cardpro d-block w-100 img-thumbnail"
            src={require('../img/billysummers.jpeg')}
            alt="Banner de Billy Summers"
        />
        </Link>
        <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item> 
        <Link to={`/productos/OAbYdb5fnawu3I4XyZGJ`}>      
        <img
            className="cardpro d-block w-100 img-thumbnail"
            src={require('../img/theoutsider.jpeg')}
            alt="Banner de El Visitante"
        />
        <Carousel.Caption></Carousel.Caption>
        </Link>
        </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default CarouselHome;