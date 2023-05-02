export const FETCH_GREETING_REQUEST = 'FETCH_GREETING_REQUEST';
export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
export const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE';

export const fetchGreetingRequest = () => ({
  type: FETCH_GREETING_REQUEST,
});

export const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

export const fetchGreetingFailure = (error) => ({
  type: FETCH_GREETING_FAILURE,
  payload: error,
});

export const fetchGreeting = () => {
  return async (dispatch) => {
    dispatch(fetchGreetingRequest());
    try {
      const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
      const data = await response.json();
      dispatch(fetchGreetingSuccess(data.message));
    } catch (error) {
      dispatch(fetchGreetingFailure(error));
    }
  };
};
