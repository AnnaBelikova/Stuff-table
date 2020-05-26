import * as ActionTypes from'./ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchWorkers = () => (dispatch) => {
    dispatch(workersLoading());
    return fetch(baseUrl + 'workers.php')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      })
    .then(response => response.json())
    .then(workers => dispatch(addWorkers(workers)))
    .catch(error => console.error('Error: ', error))   
}

export const workersLoading = () => ({
    type: ActionTypes.WORKERS_LOADING
});

export const workersFailed = (errmess) => ({
    type: ActionTypes.WORKERS_FAILED,
    payload: errmess
});

export const addWorkers = (workers) => ({
    type: ActionTypes.ADD_WORKERS,
    payload: workers
});