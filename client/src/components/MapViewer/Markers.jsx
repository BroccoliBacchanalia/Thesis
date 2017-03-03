import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Marker, InfoWindow } from 'react-google-maps';
import store from '../../redux/store.js';
import { getGeofence } from '../../redux/actions'

class MapViewer extends Component {
  render() {
    const members = this.props.members;
    const userIds = Object.keys(members);
    return (
      <div>
        {userIds.map((userId, index) => {
          const user = members[userId];
          const icon = {
            url: user.img,
            scaledSize: new google.maps.Size(30, 30),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0, 0),
            labelOrigin: new google.maps.Point(15, 35)
          };
          return (
            <Marker
              key={index}
              {...user}
              label=''
              icon={icon}
              onClick={() => store.dispatch({ type: 'SHOW_NAME', payload: userId })}
            >
              {user.showInfo && (
                <InfoWindow>
                  <div>
                    <div>{user.label}</div>
                    <div>{getGeofence(user.position)}</div>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          );
        })}
      </div>
    );
  }
}

export default connect((store) => {
  return {
    members: store.group.members,
  };
})(MapViewer);
