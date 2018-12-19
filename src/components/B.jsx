import React, { Component } from 'react';
import { connect } from 'react-redux';
class B extends Component {
  render() {
    return (
      <div className="bob">

        <h1 id="bText">

          <div id="t"><strong>We're developers.
          </strong>
            <ins>2.5</ins><br></br><br></br>
            The objective of our 'final project' shouldn't be to build something "brilliant"
            <ins>2</ins><br></br><br></br>
            it should only be to show that we can build something <em>
              <ins>1</ins><br></br><br></br>
              brilliantly.</em><ins>2.5</ins>
            <del>*</del>

            Our project should demonstrate our comfort with web development technologies.
            <ins>1.5</ins>
            <br></br><br></br>
            It should showcase our code,
            <ins>1.5</ins>
            <br></br><br></br>
            not our ideas, <ins>1</ins> <br></br>not our market research skills,  <ins>1</ins><br></br>not our business models; <ins>1.5</ins>
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