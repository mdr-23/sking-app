import { useForm } from "react-hook-form"
import firebase from '../Config/firebase'
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import { loginMessage } from "../Utils/errorMessage";
import AlertCustom from "../Components/AlertCustom";

function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const [alert, setAlert] = useState({variant:'', text:''})

    const onSubmit = async data => {
        console.log(data)
        try{
            const responseUser = await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
            console.log("responseUser",responseUser.user.uid)
            if(responseUser.user.uid){
                const userDocument = await firebase.firestore().collection("usuarios")
                .where("userId", "==", responseUser.user.uid)
                .get()

                const user= userDocument.docs[0].data()
                context.handleLogin()
                setAlert({variant: 'success', text: `Hola, ${user?.name}. Todos flotamos aquí abajo...`})
                setTimeout(()=>{
                    navigate('/')
                }, 2000)
            }
            }catch(e){
            console.log(e)
            setAlert({variant: 'danger', text: loginMessage[e.code] || "Ha ocurrido un error. Chequea que todos los campos sean correctos."})
        }
    }

    return(
            <>
                <Card style={{ width: '22rem' }} className='mx-auto mt-5 card-login'>
                    <Card.Body>
                        <Card.Title className='login-title'>Iniciar sesión</Card.Title>
                        <Card.Text>
                            
                            <Form onSubmit={handleSubmit(onSubmit)}>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    {errors.email && <span className="campos-obligatorios"> ¡Campo obligatorio!</span>}
                                    <Form.Control className="input-login" {...register("email", { required: true })} type="email" placeholder="Ingresar Email" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label>Contraseña</Form.Label>
                                    {errors.password && <span className="campos-obligatorios"> ¡Campo obligatorio!</span>}
                                    <Form.Control className="input-login" {...register("password", { required: true })} type="password" placeholder="Ingresar Contraseña" />
                                </Form.Group>

                                <Button className="btn-login" type="submit">
                                    Iniciar sesión
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <AlertCustom {...alert} />
            </>
        
    )
}

export default Login