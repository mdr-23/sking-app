import {Alert } from 'react-bootstrap'

function AlertCustom({variant, text}){
    return(
        <Alert style={{ width: '28rem' }} variant={variant} className="mt-5 card-login mx-auto text-center">
            {text}
        </Alert>
    )

}

export default AlertCustom