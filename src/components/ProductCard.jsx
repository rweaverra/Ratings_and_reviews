import React from 'react';
import {
  Card, CardImg, CardBody, CardText
} from 'reactstrap';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <CardImg variant="top" src="https://picsum.photos/200" />
        <CardBody class='card-b'>
          <CardText className='text-pc'>
            CATEGORY
          </CardText>
          <CardText className='text-pc title-pc'>
            Expanded Product Name with Extra Text
          </CardText>
          <CardText className='text-pc'>
            $123
          </CardText>
          <CardText className='text-pc stars-pc'>
            Rating
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default ProductCard;
