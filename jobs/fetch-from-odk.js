get(
  "/v1/projects/6/forms/CAMFED_Annual_Data_2021.svc/Submissions", // the ODK central endpoint
  {
    filter: 'year(__system%2FsubmissionDate)%20lt%20year(now())', // before now?
    expand: '&#42' // expand all references?
  }, // extra options
  state => { // callback to show off some fancy stuff
    console.log(JSON.stringify(state.data, null, 2));
    return { ...state, references: [], submissions: state.data.value };
  }
 );