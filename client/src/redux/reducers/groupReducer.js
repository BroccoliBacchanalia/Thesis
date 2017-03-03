const defaults = {
  groupName: '',
  memberKeys: {},
  members: {},
  venueId: ''
};

export default function groupReducer(state = defaults, action) {
  switch(action.type) {
    case 'UPDATING_GROUP_MEMBER': {
      const user = action.payload.user;
      const uid = action.payload.uid;
      const newState = {
        groupName: state.groupName,
        memberKeys: { ...state.memberKeys },
        members: { ...state.members },
        venueId: state.venueId
      };
      newState.members[uid] = user;
      return newState;
    }
    case 'USERS_SORT': {
      const members = objToArray(state.members);
      const sortedUsers = members.sort(action.payload.method);
      return {...state, members: arrToObj(sortedUsers)};
    }
    case 'UPDATE_KEYS': {
      return { ...state, memberKeys: action.payload.keys };
    }
    case 'SHOW_NAME': {
      const uid = action.payload;
      const newState = {
        groupName: state.groupName,
        memberKeys: { ...state.memberKeys },
        members: { ...state.members },
        venueId: state.venueId
      };
      newState.members[uid].showInfo ?
      newState.members[uid].showInfo = !newState.members[uid].showInfo :
      newState.members[uid].showInfo = true;
      return newState;
    }
    case 'UPDATE_GROUP': {
      return { ...state, ...action.payload.group }
    }
    case 'UPDATE_GROUP_NAME': {
      return { ...state, groupName: action.payload.name }
    }
    case 'UPDATE_VENUE_ID': {
      return { ...state, venueId: action.payload.id };
    }
  }
  return state;
};

function objToArray(obj) {
  const result = [];
  for (let key in obj) {
    const newObj = { ...obj[key], key: key };
    result.push(newObj);
  }
  return result;
}

function arrToObj(arr) {
  const result = {};
  for (let item of arr) {
    result[item.key] = item;
  }
  return result;
}
