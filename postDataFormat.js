// This is my current format for data I'll be sendin in POST reqs

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
