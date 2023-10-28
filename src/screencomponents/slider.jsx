import Carousel from 'react-bootstrap/Carousel';
import { Sliderimg } from '../sliderimg';
import sliderimg1 from "../image/sliderimg1.jpeg"
import sliderimg2 from "../image/sliderimg2.jpeg"
import sliderimg3 from "../image/sliderimg3-.webp"

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Sliderimg myimg={sliderimg1}/>
                <Carousel.Caption>
                  <Sliderimg head1="Fresh Fruits And Big Discount" head2="Save upto 50% on your first order" head3="Enter your email address" head4="Subscribe"/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Sliderimg myimg={sliderimg2}/>
        <Carousel.Caption>
        <Sliderimg head1="Fresh Fruits And Big Discount" head2="Save upto 50% on your first order" head3="Enter your email address" head4="Subscribe"/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Sliderimg myimg={sliderimg3}/>
                <Carousel.Caption>
                <Sliderimg head1="Fresh Fruits And Big Discount" head2="Save upto 50% on your first order" head3="Enter your email address" head4="Subscribe"/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;