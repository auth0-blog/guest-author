import {withRouter} from 'next/router'
import deployment from '../config/deployment';

const ActiveLink = ({children, router, href}) => {
  const style = {
    color: router.pathname === href ? '#777' : '#ccc'
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(deployment.path + href);
  };

  return (
    <a href={`${deployment.path}${href}`} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
