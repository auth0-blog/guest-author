import React, {Component} from 'react';
import styled from 'styled-components';
import Arrow from '../components/Arrow';
import Presentation from '../components/Presentation';
import Profile from '../components/Profile';
import withOnboardService from '../components/withOnboardService';
import DragScroll from 'react-dragscroll';

const Canvas = styled.svg`
  width: 700px;
  height: 430px;
`;

const Step = styled.g`
  opacity: 0.3;
  
  &.active {
    opacity: 1;
  }
`;

const Box = styled.rect`
  fill: #eee;
  stroke: #ccc;
  stroke-width: 1px;
`;

const DraggableArea = styled(DragScroll)`
  cursor: default;
  
  @media (max-width: 700px) {
    cursor: grab;
  }
`;

function getPosition(idx) {
  const row = Math.floor(idx / 3);
  const inverse = (row + 1) % 2 === 0;
  let column = idx - (row * 3);

  if (inverse) column = 2 - column;

  return {
    row,
    column,
    inverse,
  }
}

function getCoordinates(idx) {
  const {row, column} = getPosition(idx);

  return {
    x: column * 235,
    y: row * 115,
  };
}

function getArrowCoordinates(idx) {
  const vertical = (idx + 1) % 3 === 0;

  const {row, column, inverse} = getPosition(idx);

  if (vertical && inverse) {
    return {
      start: {x: 92.5 + column * 235, y: row * 145 + 50},
      end: {x: 92.5 + column * 235, y: row * 195 + 50},
    };
  }

  if (vertical) {
    return {
      start: {x: 92.5 + column * 235, y: row * 115 + 80},
      end: {x: 92.5 + column * 235, y: row * 115 + 130},
    };
  }

  if (inverse) {
    return {
      start: {x: 10 + column * 235, y: row * 115 + 50},
      end: {x: -55 + column * 235, y: row * 115 + 50},
    }
  }

  return {
    start: {x: 175 + column * 235, y: row * 115 + 50},
    end: {x: 240 + column * 235, y: row * 115 + 50},
  };
}

class Authorship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        { title: 'Topic Definition', active: true, description: 'The Guest Author (GA) and Auth0 define a topic together.' },
        { title: 'Prototype Development', active: false, description: 'The GA develops a prototype with the chosen technologies and upload it to a GitHub repo with basic instructions on how to run.' },
        { title: 'Prototype Review', active: false, description: 'Auth0 analyses the prototype, the code, and the whole implementation and approach to provide feedback.' },

        { title: 'Prototype Refactoring', active: false, description: 'The GA applies (if needed) any fix/enhancement asked by Auth0.' },
        { title: 'Outline Definition', active: false, description: 'The GA shares an outline of the article (just the main structure with headers and sub-headers, no real content).' },
        { title: 'Outline Review', active: false, description: 'Auth0 analyses and make comments on the outline.' },

        { title: 'Outline Amendments', active: false, description: 'The GA applies (if needed) corrections to the outline.' },
        { title: 'First Draft', active: false, description: 'The GA writes the post.' },
        { title: 'Draft Review', active: false, description: 'Auth0 reviews the post and, if needed, make corrections, amendments, etc.' },

        { title: 'Draft Amendments', active: false, description: 'Auth0 pays for the article (in the case of a series, we might wait for the last piece to process the payment).' },
        { title: 'Payment', active: false, description: 'Auth0 pays for the article (in the case of a series, we might wait for the last piece to process the payment).' },
        { title: 'Publish', active: false, description: 'Auth0 pays for the article (in the case of a series, we might wait for the last piece to process the payment).' },
      ],
    };
    this.selectStep = this.selectStep.bind(this);
  }

  selectStep(selectedIdx) {
    const steps = this.state.steps.map((step, idx) => {
      step.active = idx <= selectedIdx;
      return step;
    });

    this.setState({
      steps,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Profile
          authenticated={this.props.authenticated}
          auth0Client={this.props.auth0Client}
          profile={this.props.profile}
        />
        <Presentation
          title="Editorial Process"
          action={this.props.moveForward}
          actionLabel="Next"
          cancel={this.props.stepBack}
          cancelLabel="Go Back"
        >
          <p>
            From ideation to publishment, the process of writing to the Guest Author Program consist of the following steps:
          </p>
          <DraggableArea height="460px" width="100%">
            <Canvas>
              { this.state.steps.map((step, idx) => {
                const coordinates = getCoordinates(idx);
                const arrowCoordinates = getArrowCoordinates(idx);
                const lastElement = idx === this.state.steps.length - 1;
                return (
                  <Step key={idx} className={step.active ? 'active' : ''} onClick={() => this.selectStep(idx)}>
                    { !lastElement && <Arrow start={arrowCoordinates.start} end={arrowCoordinates.end} id={idx} /> }
                    <Box x={coordinates.x + 10} y={coordinates.y + 20} rx="10" ry="10" width="165" height="60" />
                    <text x={coordinates.x + 20} y={coordinates.y + 55} fontFamily="Verdana" fontSize="12" fill="666">{step.title}</text>
                  </Step>
                );
              })}
            </Canvas>
          </DraggableArea>
        </Presentation>
      </React.Fragment>
    );
  }
}

export default withOnboardService((props) => <Authorship {...props} />);
