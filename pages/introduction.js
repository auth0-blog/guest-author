import AppLayout from '../components/AppLayout'
import Presentation from '../components/Presentation';

export default (props) => (
  <AppLayout>
    <Presentation
      title="Introduction"
      actionLabel="Sign In"
      action={() => { props.auth0Client.signIn() }}
      auth0Client={props.auth0Client}
    >
      <p>
        The present website exists to support the Auth0 Guest Author Program.
        If you want to apply to this program, just click on the <em>Sign In</em> button to get started.
      </p>
    </Presentation>
  </AppLayout>
)
