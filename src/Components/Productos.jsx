import React, {useState, useEffect} from 'react'
import { getProductosServices } from '../Services/productosService'
import Producto from './Producto'


function Productos(){

    const [productos, setProductos] = useState([])
    const [buscar, setBuscar] = useState('')

    useEffect(
        () => {
            const result = async() =>{
                try{
                    const productos = await getProductosServices(buscar)
                    console.log(productos)
                    setProductos(productos)
                }catch(e){
                    console.log(e)
                }
            }
            result()
        },
        [buscar]
    )

    return(
        <section className="section-yellow">
            <h2 className="text-center king">KING</h2>
            <div className="mt-5 text-center">
                <input className="input-buscar" type="text" value={buscar} onChange={(event=>setBuscar(event.target.value))} />
            </div>
            
            <div className="d-flex flex-wrap wrap mx-5 justify-content-center">
                {productos.map(producto => <Producto key={producto.id} {... producto.data()} id={producto.id} />)}
            </div>
        </section>
    )
}

export default Productos