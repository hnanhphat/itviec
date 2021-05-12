const initialState = {
  jobs: [],
  loading: false,
  error: "",
  singleJob: {},
};

const jobReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "JOB_REQUEST_START":
    case "SINGLE_JOB_REQUEST_START":
      state.loading = true;
      break;
    case "JOB_REQUEST_SUCCESS":
      state.jobs = payload;
      state.loading = false;
      break;

    case "SINGLE_JOB_REQUEST_SUCCESS":
      state.singleJob = payload;
      state.loading = false;
      break;

    case "JOB_REQUEST_FAIL":
    case "SINGLE_JOB_REQUEST_FAIL":
      state.loading = false;
      state.error = payload;
      break;
    default:
      break;
  }
  return { ...state };
};

export default jobReducer;
