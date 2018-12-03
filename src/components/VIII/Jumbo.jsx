import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron style={{ border: 0, padding: 0, margin: 0, backgroundColor: 'black', color: 'blue' }}>
        <h1 className="display-3">AI improved with user specific data.
</h1>



      </Jumbotron>
    </div>
  );
};

export default Jumbo;