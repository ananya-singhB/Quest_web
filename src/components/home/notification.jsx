import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
   
toast.configure() 

class Notification extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          toast.info('Info message', {autoClose:false});
          break;
      }
    };
  };
 
  render() {
    return (
      <div>
        <button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </button>
 
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default Notification;