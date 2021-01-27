// This is my current working data format for each dataset

const GET_Filters = {
  profession: ["value1", "value2", "value3"], // etc. This might need key ids too.
  location: {
    options: [
      {
        name: "Change= ZO",
        key: "chzo",
      },
      {
        name: "Change= PRO",
        key: "chpro",
      }, // etc.
    ],
  },
  contact: {
    options: [
      {
        name: "email",
        key: "email",
      },
      {
        name: "website",
        key: "website",
      }, // etc.
    ],
  },
};
