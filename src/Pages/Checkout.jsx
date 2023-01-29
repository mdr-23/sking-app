import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductosById } from "../Services/productosService"
import Loading from "../Components/Loading/Loading"
import PurchaseMessage from "../Components/PurchaseMessage"

function Checkout(){

    const {id} = useParams()

    const [producto, setProducto] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(
        () => {
            const result = async() =>{
                try {
                    const productoData = await getProductosById(id);
                    if (productoData) {
                      setProducto(productoData.data());
                    }

                    setIsLoading(false)

                  }catch (e) {
                    console.log(e);
                  }
            }
            result()
        },
        [id]
    )

    return(
        <Loading loading={isLoading} >
            <h1 className='detalle-title mt-5'>Detalle de la compra</h1>
            <div className="row d-flex align-items-center checkout-page container mx-auto p-5">
                <div className="col-4">
                    <img src={producto.image} className="checkout-img" height="300" alt="Portada del libro" />
                </div>

                <div className="col-3">
                    <h2 className="checkout-title">{producto.name}</h2>
                    <div>
                        <div className="mt-5">
                            <p className="checkout-precio">Precio total: <span className="checkout-valor">{producto.price}</span></p>
                            <PurchaseMessage />
                        </div>
                    </div>
                </div>
            </div>
        </Loading>
    )
}

export default Checkout