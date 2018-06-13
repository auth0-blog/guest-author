import React, {Component} from 'react';
import styled from 'styled-components';
import NotificationManager from './NotificationManager';

const NotificationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: transparent;
  pointer-events: none;
  text-align: right;
  padding: 10px;

  > div {
    text-align: left;
    width: 250px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 3px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: 0;
    animation-duration: 0.5s;
    animation-name: notification-slide-in;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    pointer-events:all;
    position: relative;

    svg {
      position: absolute;
      top: 15px;
      right: 15px;

      line {
        stroke: #999;
      }
    }

    &:hover {
      svg {
        line {
          stroke: #777;
        }
      }
    }

    h3 {
      text-transform: uppercase;
      font-size: 12px;
      margin-top: -5px;
      margin-bottom: 5px;
      font-weight: 700;
      color: #555;
    }

    &.success {
      border-left: 5px solid #62cb31;
    }

    &.warning {
      border-left: 5px solid #ffb606;
    }

    &.danger {
      border-left: 5px solid #ea6557;
    }
  }
  
  @keyframes notification-slide-in {
    from {
      margin-right: -300px;
    }
  
    to {
      margin-right: 0;
    }
  }
`;

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const emitter = NotificationManager.getEmitter();
    this.subscription = emitter.addListener('new-notification', (notification) => {
      const withoutRepeated = this.state.notifications.filter((existingNotifications) => (
        notification.type !== existingNotifications.type ||
        notification.message !== existingNotifications.message
      ));

      notification.time = (new Date()).getTime();
      this.setState({
        notifications: [
          ...withoutRepeated,
          notification,
        ]
      });
    });

    this.intervalSubscription = setInterval(() => {
      const now = (new Date()).getTime();
      const notifications = this.state.notifications.filter((notification) => (now - notification.time < 10000));
      this.setState({
        notifications,
      });
    }, 100);
  }

  componentWillUnmount() {
    this.subscription.remove();
    clearInterval(this.intervalSubscription);
  }

  removeNotification(notificationTime) {
    const notifications = this.state.notifications.filter((notification) => (notification.time !== notificationTime));
    this.setState({
      notifications,
    });
  }

  render() {
    return (
      <NotificationContainer>
        {this.state.notifications.map((notification) => {
          return (
            <div
              key={notification.time}
              onClick={() => {
                this.removeNotification(notification.time)
              }}
              className={notification.type}>

              <h3>{notification.title || notification.type}</h3>
              {notification.message}
              <svg width="10" height="10" viewBox="0 0 10 10">
                <line x1="0" y1="0" x2="10" y2="10" strokeWidth={3}/>
                <line x1="0" y1="10" x2="10" y2="0" strokeWidth={3}/>
              </svg>
            </div>
          );
        })}
      </NotificationContainer>
    );
  }
}

export default Notification;
