import React, { Component } from 'react';
import { connect } from 'react-redux';


class B extends Component {


  render() {

    return (

      <h1 id="bText">

        <div id="t">
          <strong>
            The oldest Gaelic poem is called <em>The invocation of Amergin</em>.
</strong>
          <ins>2.5</ins><br></br><br></br>
          The story goes that Amergin the Milesian led his Iberian tribe to an Island
<br></br><br></br>ruled by supernatural creatures called the <em>
            <ins>0.75</ins><br></br><br></br>
            Tuatha Dé Dannan</em><ins>1.5</ins>.
<ins>2</ins><br></br><br></br>
          <del>*</del></div>
        {/* {this.props.Texts} */}

      </h1>

    )
  }
}

// const mapStateToProps = state => ({
//   x: state.reducer1.x,
//   y: state.reducer1.y
// });

// const mapDispatchToProps = dispatch => (
//   {
//     incrementX: () => dispatch({ type: 'INCREMENT_X' }),
//     incrementY: () => dispatch({ type: 'INCREMENT_Y' })
//   });

export default B