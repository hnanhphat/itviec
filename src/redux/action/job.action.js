const SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

const getJobs = () => async (dispatch) => {
  try {
    dispatch({ type: "JOB_REQUEST_START" });
    let url = `${SERVER_URL}/jobs`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: "JOB_REQUEST_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "JOB_REQUEST_FAIL", payload: err.message });
  }
};

const getSingleJob = (id) => async (dispatch) => {
  try {
    dispatch({ type: "SINGLE_JOB_REQUEST_START" });
    let url = `${SERVER_URL}/jobs/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: "SINGLE_JOB_REQUEST_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "SINGLE_JOB_REQUEST_FAIL", payload: err.message });
  }
};

export const jobActions = { getJobs, getSingleJob };
