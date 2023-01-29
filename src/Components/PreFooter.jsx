import { Container } from "react-bootstrap"
import SvgBaloon from "../img/baloon"
import SvgMuenchen from "../img/muenchen"

function PreFooter(){
    return(
        <div className='footerYellow'>
            <Container className='d-flex justify-content-center'>
                <div>
                    <SvgBaloon className="svgBaloon" />
                    <SvgMuenchen className='svgMuenchen' />
                </div>
            </Container>
        </div>
    )
}

export default PreFooter