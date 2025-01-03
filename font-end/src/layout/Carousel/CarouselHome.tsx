// import Carousel from 'react-bootstrap/Carousel';
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';

import IMG from '../../imgs/bookslide.jpg';
import '../../css/carouselHome.css';

function CarouselHome() {
  return (
    <div id='banner'>
      <div id='carousel_banner'>
        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage className="d-block w-100" src={IMG} alt="slide 1" />
            {/* <CCarouselCaption className="d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CCarouselCaption> */}
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={IMG} alt="slide 2" />
            {/* <CCarouselCaption className="d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CCarouselCaption> */}
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={IMG} alt="slide 3" />
            {/* <CCarouselCaption className="d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CCarouselCaption> */}
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={IMG} alt="slide 4" />
            {/* <CCarouselCaption className="d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CCarouselCaption> */}
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={IMG} alt="slide 5" />
            {/* <CCarouselCaption className="d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CCarouselCaption> */}
          </CCarouselItem>
        </CCarousel>
      
      </div>
    </div>

  );
}

export default CarouselHome;
