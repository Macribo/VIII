import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card className="row align-items-center justify-content-center">
        <CardImg top width="100%" className="" src="https://i.imgur.com/f2xQ36f.png" alt="Card image cap" style={{ paddingTop: '50px', width: '50%', }} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Thamania</CardSubtitle>
          <CardText>DCI Group-8 Project</CardText>
          <Button >Start</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;