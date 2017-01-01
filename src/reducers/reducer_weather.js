import { FETCH_WEATHER } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log(action.payload.data);
      return action.payload.data;

    }
  return state;
}
