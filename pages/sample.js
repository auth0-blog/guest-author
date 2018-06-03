import React from 'react';
import AppLayout from '../components/AppLayout';
import Presentation from '../components/Presentation';

function Authorship() {
  return (
    <AppLayout>
      <Presentation
        restricted
        title="Sample"
        action={() => {}}
        actionLabel="I Agree"
        auth0Client={() => {}}
      >
        <p>
          This is the last step in the application process. You will have to answer just a few questions and write a small
          sample so we can evaluate you.
        </p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </Presentation>
    </AppLayout>
  );
}

export default Authorship;
