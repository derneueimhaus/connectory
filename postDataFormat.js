// This is my current format for data I'll be sendin in POST reqs

const POST_Signup = {
  // if you want we could also hardcode some blank/null values to create the full empty profile template here on signup
  email: "email@email.com", // check if exists in Change=
  firstName: "Test",
  lastName: "Testerson",
  password: "password", // what do we want to do on the frontend here? hash it? check if it matches with "confirm password" field?
};

const POST_Filters = {
  // any of these fields could be empty
  search: "value",
  profession: ["value1", "value2", "value3"], // etc.
  filters: {
    // there are no key-value pairs in this object until a user makes a selection.
    // if a user selects and then deseletcs an option, the key-value stays but changes to false
    // any missing keys can be considered false by default
    // at present, filter options in this post req are not separated into location/profession
    // we can discuss ways I might be able to manipulate the data to make it easier to work with
    chpro: true,
    chzo: true,
    website: false,
  },
};

const POST_EditSettings = {
  // I could send an entire object or a single value -- whatever works best for you
  [setting]: [value],
};
