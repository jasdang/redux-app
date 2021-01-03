import * as type from '../types';

export function getUsrs(users) {
  return {
    type: type.GET_USERS,
    payload: users,
  };
}
