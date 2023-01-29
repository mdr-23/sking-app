import { useForm } from "react-hook-form"
import firebase from '../Config/firebase'
import { Form, Button, Card } from 'react-bootstrap'
import { useState } from "react";
import AlertCustom from "../Components/AlertCustom"
import { registroMessage } from "../Utils/errorMessage"
import { useNavigate } from 'react-router-dom'

function Registro(){

    const [alert, setAlert] = useState({variant:'', text:''})
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        console.log(data)
        try{
            const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            console.log(responseUser)
            if(responseUser.user.uid){
                const document = await firebase.firestore().collection("usuarios")
                .add({
                    name: data.name,
                    lastName: data.lastName,
                    userId: responseUser.user.uid
                })
                console.log(document)
                if(document){
                    setAlert({variant: 'success', text: "Gracias por registrarte. Tú también flotarás..."})
                    setTimeout(()=>{
                        navigate ("/login")
                    },2000)
                }
            }
        }catch(e){
            console.log(e.code)
            setAlert({variant: 'danger', text: registroMessage[e.code] || "Ha ocurrido un error en el registro. Chequea que todos los campos sean correctos."})
        }
    }

    return(

        <>
            <Card style={{ width: '22rem' }} className='mx-auto mt-5 card-login'>
                <Card.Body>
                    <Card.Title className='login-title'>Registrarse</Card.Title>
                    <Card.Text>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                {errors.name && <span className="campos-obligatorios"> ¡Campo obligatorio!</span>}
                                <Form.Control className="input-login" {...register("name", { required: true })} type="text" placeholder="Ingresar Nombre" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Apellido</Form.Label>
                                {errors.lastName && <span className="campos-obligatorios"> ¡Campo obligatorio!</span>}
                                <Form.Control className="input-login" {...register("lastName", { required: true })} type="text" placeholder="Ingresar Apellido" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                {errors.email && <span className="campos-obligatorios"> ¡Campo obligatorio!</span>}
                                <Form.Control className="input-login" {...register("email", { required: true })} type="email" placeholder="Ingresar Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Contraseña</Form.Label>
                                {errors.password && <span className="campos-obligatorios"> ¡Campo obligatorio!</span>}
                                <Form.Control className="input-login" {...register("password", { required: true })} type="password" placeholder="Ingresar Contraseña" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Text className="campos-obligatorios">
                                Tus datos no serán compartidos.
                                </Form.Text>
                            </Form.Group>

                            <Button className="btn-login" type="submit">
                                Registrarse
                            </Button>
                        </Form>
                        
                    </Card.Text>
                </Card.Body>
            </Card>

            <AlertCustom {...alert} />

        </>
        
    )
}

export default Registro