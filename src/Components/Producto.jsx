import React from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


function Producto({id, name, price, image}){

    return(

        <div className="d-flex justify-content-center mt-5 mx-3 text-start">
            <Card style={{ width: '100%', height: "100%" }} className="card-section-yellow">
                <Card.Img style={{ width: '80%', height: "80%" }} variant="top" src={image} className="mt-2 mx-auto" />
                <Card.Body>
                    <Card.Title className="card-title-section-yellow">{name}</Card.Title>
                    <Card.Text className="card-price-section-yellow">
                    {price}
                    </Card.Text>
                    <Link to={`/productos/${id}`}><Button className="btn-section-yellow">Ver Detalle</Button></Link>
                    <Link to={`/productos/editar/${id}`}><Button className="btn-edit-section-yellow mx-3">Editar</Button></Link>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Producto