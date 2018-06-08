import React, {Fragment} from 'react';

function Arrow({start, end, id}) {
  const path = `M${start.x} ${start.y} T ${end.x} ${end.y}`;
  return (
    <Fragment>
      <defs id={`arrow-def-${id}`}>
        <marker id={`arrow-head-${id}`} orient="auto" viewBox="-100 -100 450 450" fill="black" markerWidth="50" markerHeight="50">
          <polygon points="-25,-20 15,0 -25,20" fill="#999" />
        </marker>
      </defs>
      <path d={path} stroke="#999" strokeWidth="2" markerEnd={`url(#arrow-head-${id})`} fill="transparent"/>
    </Fragment>
  );
}

export default Arrow;
