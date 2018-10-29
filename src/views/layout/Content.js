import { Menu, Icon, Row ,Col } from 'antd';
import React,{Component} from 'react';
import MainSlider from 'views/list-car-slider/ListCars';
import './css/slider.css';
import './css/content.css';
import QuickBook from 'views/page/home/QuickBook';
class Content extends Component {

  render() {
    return (
      <div>
        <Row className="silder_content">
          <MainSlider/>
        </Row>
        <Row className="book_content" >
          <Col span={16} style={{width:'100%'}}>
              <QuickBook/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content;