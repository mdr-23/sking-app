import { useForm } from "react-hook-form"
import firebase from '../Config/firebase'
import { Form, Button, Card } from 'react-bootstrap';

function ProductosAlta(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        console.log(data)
        try{
            const document = await firebase.firestore().collection("productos")
            .add(data)
            console.log(document)
        }catch(e){
            console.log(e)
        }
    }  

    return(

            <Card style={{ width: '22rem' }} className='mx-auto mt-5 card-login'>
                <Card.Body>
                    <Card.Title className='login-title'>Panel de productos</Card.Title>
                    <Card.Text>
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

export default ProductosAlta