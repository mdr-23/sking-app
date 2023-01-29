import { useForm } from "react-hook-form"
import { Form, Button, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useEffect } from "react"
import { deleteProducto, getProductosById, update } from "../Services/productosService"

function ProductosModificar(){
    const {id} = useParams()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    useEffect(
        () => {
            const result = async() =>{
                try {
                    const productoData = await getProductosById(id);
                    if (productoData) {
                        setValue("name", productoData.data().name)
                        setValue("image", productoData.data().image)
                        setValue("price", productoData.data().price)
                        setValue("description", productoData.data().description)
                    }
                  }catch (e) {
                    console.log(e);
                  }
            }
            result()
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [id]
    )

    const onSubmit = async data => {
        console.log(data)
        try{
            const document = await update(id,data)
            console.log(document)
        }catch(e){
            console.log(e)
        }
    }

    const handleDelete = async() =>{
        try{
            const document = await deleteProducto(id)
            console.log(document)
        }catch(e){
            console.log(e)
        }
    }

    return(

            <Card className='mx-auto mt-5 card-login'>
                <Card.Body>
                    <Card.Title className='login-title'>Panel de productos</Card.Title>
                    <Card.Text>
                    <Button className="btn-login" onClick={handleDelete}>
                        Eliminar
                    </Button>
                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                {errors.name && <span className="campos-obligatorios"> ¡Campo obligatorio!</span>}
                                <Form.Control className="input-login" {...register("name", { required: true })} type="text" placeholder="Ingresar Nombre" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Imagen</Form.Label>
                                {errors.image && <span className="campos-obligatorios"> ¡Campo obligatorio!</span>}
                                <Form.Control className="input-login" {...register("image", { required: true })} type="text" placeholder="Ingresar Descripción" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Precio</Form.Label>
                                {errors.price && <span className="campos-obligatorios"> ¡Campo obligatorio!</span>}
                                <Form.Control className="input-login" {...register("price", { required: true })} type="text" placeholder="Ingresar Precio" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Descripción</Form.Label>
                                {errors.description && <span className="campos-obligatorios"> ¡Campo obligatorio!</span>}
                                <Form.Control className="input-login" {...register("description", { required: true })} type="text" placeholder="Ingresar Descripción" />
                            </Form.Group>

                            <Button className="btn-login" type="submit">
                                Guardar
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        
    )
}

export default ProductosModificar