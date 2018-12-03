import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const SimpleAnswers = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="50%" height="50%" src="https://1.bp.blogspot.com/-c_ry3ztSZDA/XAPatqTRBsI/AAAAAAAABAc/wqzfrzLHitoJXscmNf4xlwbcBamPUv_4gCLcBGAs/s320/s1.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Yes, you should totally do it.</CardText>
          <Button>more details</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SimpleAnswers;
