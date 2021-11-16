import React from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import HeaderButton from "./HeaderButton";

const CarouselCaption = props => {
    return <MDBCarouselCaption className="" style={{"height": "100%"}}>
        <div style={{"height": "30%"}} className="d-md-none d-lg-block"/>
        <h1 className={'headerTitle mb-0 d-lg-block d-md-block align-bottom mt-md-5 pt-md-4'}>
            Om MASALA
        </h1>
        <h2 className={'headerDescription text-warning px-5 mx-4 align-bottom'}>
            {props.text}
        </h2>
        <div className='px-5 mx-3 m-lg-0 p-lg-0 m-lg-0'>
            <HeaderButton name="nature" text='Nature' color="warning" bold={true} path={props.path}/>
            <HeaderButton name="mandir" text='Mandir' color="warning" bold={true} path={props.path}/>
            <br className="d-lg-none"/>
            <HeaderButton name="tibetan" text='Tibetan' color="warning" bold={true} path={props.path}/>
            <HeaderButton name="krishna" text='Krishna' color="warning" bold={true} path={props.path}/>
        </div>
    </MDBCarouselCaption>
}

const HeaderCarousel = props => {
    let display = ""
    if (props.dNoneSmall) {
        display =  "d-none d-md-block d-lg-block"
    }
    if (props.dNoneSmall) {
        return <MDBCarousel className={"mt-4 d-none d-lg-block d-md-block" + display} fade showControls showIndicators interval={4600}>
            <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                    <div className='mask' style={{backgroundColor: 'rgba(37, 37, 37, 0.75)'}}/>
                    <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/041.jpg' alt='...'/>
                    <CarouselCaption path={props.path} text="индийские пыльцовые благовония ручной работы"/>
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <div className='mask' style={{backgroundColor: 'rgba(37, 37, 37, 0.75)'}}/>
                    <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/042.jpg' alt='...'/>
                    <CarouselCaption path={props.path} text="индийские пыльцовые благовония ручной работы"/>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>

    }

}

export default HeaderCarousel