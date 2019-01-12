import axios from 'axios';

export const loadItems = () => async dispatch => {
  try {
    const result = await axios('http://localhost:8000/itemList', {
      method: 'get'
      // withCredentials: true
    });
    if (result.data) {
      dispatch({
        type: 'LOAD_ITEMS',
        items: result.data.message
      });
      console.log('items', result.data);
    }
  } catch (e) {
    console.log('error in loading items:' + e);
  }
};

export const addItem = newItem => dispatch => {
  axios({
    method: 'post',
    url: 'http://localhost:8000/addItem',
    data: newItem
    // withCredentials: true
  })
    .then(response => {
      if (response.data.error === 0) {
        // dispatch({ type: 'ADD_ITEM', newItem: response.data.newItem }); this is for reducer
        console.log(response.data);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateUser = newUser => dispatch => {
  axios({
    method: 'put',
    url: 'http://localhost:8000/updateuser',
    data: newUser,
    withCredentials: true
  })
    .then(response => {
      if (response.data.error === 0) {
        dispatch({ type: 'UPDATE_USER', newUser: newUser });
        dispatch({ type: 'CLOSE_UPDATE_MODAL' });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteUser = userId => dispatch => {
  axios('http://localhost:8000/deleteuser/' + userId, {
    method: 'delete',
    withCredentials: true
  })
    .then(response => {
      if (response.data.error === 0) {
        dispatch({ type: 'DELETE_USER', userId: userId });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const openUpdateModal = userId => dispatch => {
  dispatch({ type: 'OPEN_UPDATE_MODAL', userId: userId });
};
