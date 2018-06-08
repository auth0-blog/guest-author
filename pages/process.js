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

const Step = styled.rect`
  fill: #ddd;
  stroke: #999;
  stroke-width: 1px;
  opacity: 0.5;
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

function Authorship(props) {

  const steps = [
    { title: 'Topic Definition', description: 'The Guest Author (GA) and Auth0 define a topic together.' },
    { title: 'Prototype Development', description: 'The GA develops a prototype with the chosen technologies and upload it to a GitHub repo with basic instructions on how to run.' },
    { title: 'Prototype Review', description: 'Auth0 analyses the prototype, the code, and the whole implementation and approach to provide feedback.' },

    { title: 'Prototype Refactoring', description: 'The GA applies (if needed) any fix/enhancement asked by Auth0.' },
    { title: 'Outline Definition', description: 'The GA shares an outline of the article (just the main structure with headers and sub-headers, no real content).' },
    { title: 'Outline Review', description: 'Auth0 analyses and make comments on the outline.' },

    { title: 'Outline Amendments', description: 'The GA applies (if needed) corrections to the outline.' },
    { title: 'First Draft', description: 'The GA writes the post.' },
    { title: 'Draft Review', description: 'Auth0 reviews the post and, if needed, make corrections, amendments, etc.' },

    { title: 'Draft Amendments', description: 'Auth0 pays for the article (in the case of a series, we might wait for the last piece to process the payment).' },
    { title: 'Payment', description: 'Auth0 pays for the article (in the case of a series, we might wait for the last piece to process the payment).' },
  ];

  return (
    <React.Fragment>
      <Profile
        authenticated={props.authenticated}
        auth0Client={props.auth0Client}
        profile={props.profile}
      />
      <Presentation
        title="Editorial Process"
        action={props.moveForward}
        actionLabel="Next"
        cancel={props.stepBack}
        cancelLabel="Go Back"
      >
        <p>
          As most articles submitted to the Guest Author Program are related to programming languages, frameworks, etc,
          the following process usually takes place:
        </p>
        <DraggableArea height="460px" width="100%">
          <Canvas>
            { steps.map((step, idx) => {
              const coordinates = getCoordinates(idx);
              const arrowCoordinates = getArrowCoordinates(idx);
              const lastElement = idx === steps.length - 1;
              return (
                <g key={idx}>
                  { !lastElement && <Arrow start={arrowCoordinates.start} end={arrowCoordinates.end} id={idx} /> }
                  <Step x={coordinates.x + 10} y={coordinates.y + 20} rx="10" ry="10" width="165" height="60" />
                  <text x={coordinates.x + 20} y={coordinates.y + 55} fontFamily="Verdana" fontSize="12" fill="666">{step.title}</text>
                </g>
              );
            })}
          </Canvas>
        </DraggableArea>
      </Presentation>
    </React.Fragment>
  );
}

export default withOnboardService(Authorship);
