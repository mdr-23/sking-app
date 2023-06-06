import { useState, useEffect } from "react"
import CarouselHome from "../Components/CarouselHome"
import Loading from "../Components/Loading/Loading"
import Productos from "../Components/Productos"
import firebase from "../Config/firebase"

function Home(){
    
    console.log(firebase)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(
        () => {
            setTimeout(()=>{
                setIsLoading(false)        
            },2000)
        },
        []
    )


    return(
        <>
            <Loading loading={isLoading} >
                <div className='zoom-in'>
                    <CarouselHome />  
                </div>
                <h2 className="stephen text-center">STEPHEN</h2>
                <Productos />
            </Loading>
        </>
    )
}

export default Home