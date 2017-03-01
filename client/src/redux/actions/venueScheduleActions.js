import store from '../store.js';
import firebase from 'firebase';


export function removeAgenda(agenda) {
  store.dispatch({
    type: 'REMOVE_AGENDA', 
    payload: { agenda }
  });
}
export function addAgenda(agenda) {
  store.dispatch({
    type: 'ADD_AGENDA', 
    payload: { agenda }
  });
}

export function updateDay(day) {
  store.dispatch({
    type:'UPDATE_DAY',
    payload: { day }
  });
}

export function updateStage(stage) {
  store.dispatch({type: 'UPDATE_STAGE', payload: { stage }})
}

export function updateFestival(festival) {
  return {
    type: 'UPDATE_FESTIVAL',
    payload: { festival }
  }
}

export function def() {
  store.dispatch({type: 'DEF'})
}

export function allStages (scheduleItems) {
  const stages = {};
  for(let key in scheduleItems) {
    const item = scheduleItems[key];
    if(!(item.geofence in stages)) {
      stages[item.geofence] = item.geofence;
    }
  }
  return Object.keys(stages);
}

export function allDays(scheduleData) {

    let datesDay={};
    for(let key in scheduleData) {
      let item = scheduleData[key];
      if(!(item.day in datesDay)) {
        datesDay[generateDay(item.day)] = item.day;
      }
    }
    return datesDay;
}

export function getArtist(stage, day){
 let arr=[]
  for(let key in scheduleData) {
    let item = scheduleData[key];
    if(item.geofence === stage && item.day === daysAndDates[day]) {
      arr.push(item.name);
    }
  }
  return arr.join(' | ');
}

function generateDay(dateString) {
  let weekday = new Array(7);
  weekday[0] =  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let d = new Date(dateString)
  return weekday[d.getDay()];
}
