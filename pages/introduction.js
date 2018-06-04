import AppLayout from '../components/AppLayout'
import Presentation from '../components/Presentation';
import Profile from '../components/Profile';

function introduction(props) {
  const auth0Client = {
    isAuthenticated: () => { return false },
    signIn: () => {},
  };
  return (
    <AppLayout>
      <Profile
        authenticated={false}
        auth0Client={auth0Client}
        profile={null}
      />
      <Presentation
        title="Introduction"
        actionLabel="Sign In"
        action={auth0Client.signIn}
        auth0Client={auth0Client}
      >
        <p>
          The present website exists to support the Auth0 Guest Author Program.
          If you want to apply to this program, just click on the <em>Sign In</em> button to get started.
        </p>
      </Presentation>
    </AppLayout>
  );
}

export default introduction;
