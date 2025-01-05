import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselHome.css";


function CarouselHome() {
  return (
    <div className='carouselContainer'>
        <Carousel data-bs-theme="dark">
            <Carousel.Item interval={6000}>
                <img
                    className="d-block w-100"
                    src={require("../../../../utils/images/banner1.png")}
                    alt="First slide"
                /> 
                {/* <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={6000}>
                <img
                    className="d-block w-100"
                    src={require("../../../../utils/images/banner2.png")}
                    alt="Second slide"
                />
                {/* <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={6000}>
                <img
                    className="d-block w-100"
                    src={require("../../../../utils/images/banner3.jpg")}
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={6000}>
                <img
                    className="d-block w-100"
                    src={require("../../../../utils/images/banner4.jpg")}
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
            {/* <Carousel.Item interval={6000}>
                <img
                    className="d-block w-100"
                    // src={require("../../../../utils/images/bgr1.png")}
                    src="https://images.alphacoders.com/133/thumb-1920-1338574.jpeg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    </div>
  );
}

export default CarouselHome;
