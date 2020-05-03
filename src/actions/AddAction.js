import types from '../../ActionTypes';

const addCatsAction = (data) => {
  console.warn(data)
  return {
    type: types.CATS_LIST,
    payload: data
  }
}

export default addCatsAction;
