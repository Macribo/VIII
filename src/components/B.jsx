import React, { Component } from 'react';
import { connect } from 'react-redux';
class B extends Component {
  render() {
    return (
      <div className="bob">

        <h1 id="bText">

          <div id="t"><strong>
            The oldest Gaelic poem is called <em>The invocation of Amergin</em>.
          </strong>
            <ins>2.5</ins><br></br><br></br>
            The story goes that Amergin the Milesian led his Iberian tribe to an Island
            <br></br><br></br>ruled by supernatural creatures called the <em>
              <ins>0.75</ins><br></br><br></br>
              Tuatha Dé Dannan</em><ins>1.5</ins>.
            <ins>2</ins><br></br><br></br>
            <del>*</del>

            The queens of Dé Danann allowed Amergin and his Milesians to settle there on two conditions: <ins>1</ins>
            <br></br><br></br> First the Milesians had to defeat the kings warriors and druids of the Dé Danann in battle. <ins>1.5</ins><br></br><br></br>Second, the land must be named after the Queens of Dé Danann.
            <ins>2</ins> <del>*</del>

            In battle, Amargín's warriors were forced to retreat beyond the magical boundary of the ninth wave.

            <ins>1.5</ins>
            <br></br><br></br>The druids of Dé Danann raised a magical storm to keep Amergin from reaching land <ins>2</ins>
            <br></br><br></br>
            But Amergín was a poet and words have power
            <del>*</del>

            ...
            <ins>1.5</ins>
            <br></br><br></br>
            <ins>1.5</ins>
            <br></br><br></br>
            ... <ins>1</ins> <br></br>... <ins>1</ins><br></br>...<ins>1.5</ins>
            <del>*</del>
            It's all about the code.
            <ins>1.5</ins>
            <br></br><br></br>
            Whatever we build, the code goes
            <ins>0.5</ins><br></br><br></br>
            <em>on top</em>.<ins>1.5</ins><br></br><br></br>So
            <ins>0.5</ins><br></br>
            I propose we go <em>meta</em>
            <ins>0.5</ins><br></br>
            and present for our group project:
            <ins>3</ins><del>*</del>
          </div>
        </h1>

      </div>
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