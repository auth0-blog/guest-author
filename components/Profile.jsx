import PropTypes from 'prop-types';
import React from 'react';
import {withRouter} from 'next/router';
import ContainerArea from './ContentArea';
import Card from './Card';
import {DefaultButton} from './Buttons';

const ProfileCard = Card.extend`
  padding: 10px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  
  > div {
    line-height: 40px;
  }
  
  > div > img {
    border-radius: 50%;
    max-width: 40px;
    float: left;
    margin-right: 10px;
  }
`;

function Profile(props) {
  const signOut = () => {
    props.auth0Client.signOut();
  };

  const profilePicture = (props.authenticated && props.profile.picture) ?
    props.profile.picture :
    'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';

  return (
    <ContainerArea>
      {props.authenticated &&
      <ProfileCard>
        <div>
          <img src={profilePicture} alt="Author Profile"/>
          {props.profile.name}
        </div>
        <DefaultButton onClick={signOut}>Sair</DefaultButton>
      </ProfileCard>
      }
    </ContainerArea>
  );
}

Profile.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  auth0Client: PropTypes.object,
  profile: PropTypes.object,
};

export default withRouter(Profile);
