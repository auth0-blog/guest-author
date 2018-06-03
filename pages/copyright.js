import React from 'react';
import AppLayout from '../components/AppLayout';
import Presentation from '../components/Presentation';

function Copyright() {
  return (
    <AppLayout>
      <Presentation
        restricted
        action={() => {}}
        actionLabel="I Agree"
        title="Copyright"
        cancel={() => {}}
        cancelLabel="Step Back"
        auth0Client={{}}
      >
        <p>
          Having the authorship subject clearly understood, the second most important topic is regarding copyright of
          the work.
        </p>
        <p>
          As Auth0 pays guest authors to research, develop, and write about different topics, <strong>we ask in return
          that authors give
          to Auth0 the following rights</strong>:
        </p>
        <ul>
          <li>the right to issue copies of the work to the public;</li>
          <li>the right to communicate the work to the public;</li>
          <li>the right to make an adaptation of the work;</li>
          <li>the right to rent or lend the work to the public;</li>
        </ul>
        <p>
          In other words, once Auth0 pay for an article, <strong>the author cannot publish it elsewhere without explicit
          permission from Auth0</strong>. Also, we don't publish articles that are already published on other
          publications.
        </p>
      </Presentation>
    </AppLayout>
  )
}

export default Copyright;
