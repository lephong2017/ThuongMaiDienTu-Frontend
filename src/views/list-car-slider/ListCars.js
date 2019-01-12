import React,{Component} from 'react';
import  {Carousel}  from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from './banner/banner2.jpg';
import banner2 from './banner/banner3.jpg';
import banner3 from './banner/banner6.png';
// import './Slides.css'
class ListCarSlider extends Component{
    state={
        listParner: [
            { image: banner1 },
            { image: banner2  },
            { image: banner3 }
        ]
    }
    render(){
        return(
            <Carousel 
                showThumbs={false}
                showArrows={false}
                infiniteLoop={true}
                swipeScrollTolerance={6}
                autoPlay={true}
                interval={5000}
                showStatus={false}
                onChange={this.onChange}
                onClickItem={this.onClickItem}
                onClickThumb={this.onClickThumb}>

                {this.state.listParner.map((slide) =>
                    <div id="slider" key={slide.image}>
                        <div id="slider-img">
                            {/* <li> */}
                                <img                     
                                src={slide.image} 
                                alt={slide.image} 
                                className = "img-slider"/> 
                            {/* </li> */}
                        </div>
                    </div>
                )}
            </Carousel>
        );
    }
}
export default ListCarSlider;