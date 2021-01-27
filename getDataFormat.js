// This is my current working data format for each dataset

// Homepage
const GET_Login_obj = {
  // Need to discuss GET or POST
  loggedIn: true,
  email: "email@email.com",
  userId: 1,
};

const GET_Profiles_arr = [
  {
    name: "test testerson",
    profession: "marketing",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: true,
    photo: "https://database.com/user-upoladed-photo",
    userId: 1,
  },
  {
    name: "example exampleson",
    profession: "horses",
    email: null,
    telephone: "012345678",
    website: null,
    pro: false,
    photo: "https://black-stock-picture.com/no-photo", // ideally, when a new user is created we'll also add a blank profile picture to their db record
    userId: 2,
  },
  {
    name: "change changeson",
    profession: "real estate",
    email: "test@test.com",
    telephone: "012345678",
    website: null,
    pro: true,
    photo: "https://photo.com/user-upoladed-photo",
    userId: 3,
  },
];

const GET_Filters_obj = {
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

// Profile page
// endpoint should be something like: /profile/{userId}
// happy with one huge object or splitting it into portions
const GET_PofileData_obj = {
  userId: 1,
  userInfo: {
    name: "Test tstersonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
    title: "Marketeer",
    pro: true,
    description:
      "Limitations and exclusions of liability: caveats to limits of liability; interpretation of limits of liability; no liability for force majeure; no liability for loss of profits; no liability for loss of revenue; no liability for loss of use; no liability for loss of opportunities; no liability for loss of data; no liability for consequential loss; per event liability cap upon services contract; aggregate liability cap upon services contract.",
    location: "ChangePRO",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    featured: {
      title: "Head of Marketing",
      years: "2017 - 2019",
      company: "Coca-Cola",
    },
    profession: "marketing",
    photo: "https://database.com/user-upoladed-photo",
  },
  testimonials: {
    // will probably want to store user ID and experience ID for cataloguing purposes, but this is all I'll need
    testimonials: [
      {
        testimonialId: 111,
        show: true, // you may also have "show: false" records. You can send them if it's easier and I an filter on this end.
        authorMember: true,
        authorPro: true,
        authorUserId: 7,
        authorPhoto: "https://database.com/user-upoladed-photo",
        authorName: "John Smith",
        authorTitle: "CEO",
        authorCompany: "Pro-Evo Technologies",
        text:
          "Hit the thumbs up in agreement of these changes or comment any questions or objections to this post asap. I'd like to update Joan later this afternoon on whether we're pursue the pre-recorded or live option.",
      },
      {
        testimonialId: 222,
        show: true,
        authorMember: false, // two options here: could either put a blank photo on the backend, or I can check if they're a member and, if not, add a blank picture from the frontend.
        authorPro: false,
        authorUserId: null,
        authorName: "Chris Evans",
        authorTitle: "Marketeer",
        authorCompany: "IBM",
        text:
          "Hit the thumbs up in agreement of these changes or comment any questions or objections to this post asap. I'd like to update Joan later this afternoon on whether we're pursue the pre-recorded or live option.",
      },
    ],
  },
  projects: [
    {
      projectId: 1,
      headline: "Project Manager for IBM's Christmas marketing campaign",
      subheader: "Increased conversion rates by 27%",
      description:
        "2nd Edition: Shaping the recovery. On 11–13 November, after the US presidential elections, the Financial Times, in partnership with TNW, gather the most senior global decision makers and leading minds in policy, business, tech and finance for three days of online conversations with top FT journalists. (198 kB)",
      photo: "https://database.com/user-upoladed-photo",
    },
    {
      projectId: 2,
      headline: "Created my own website called Connectory",
      subheader: "An incredible work of art that took the world by storm",
      description:
        "2nd Edition: Shaping the recovery. On 11–13 November, after the US presidential elections, the Financial Times, in partnership with TNW, gather the most senior global decision makers and leading minds in policy, business, tech and finance for three days of online conversations with top FT journalists. (198 kB)",
      photo: "https://database.com/user-upoladed-photo",
    },
  ],
  experience: [
    {
      // will probably want to store user ID and experience ID for cataloguing purposes, but this is all I'll need
      featured: true,
      title: "Head of Marketing",
      company: "Coca-Cola",
      yearStart: 2017,
      yearEnd: 2019,
      description:
        "Limitations and exclusions of liability: caveats to limits of liability; interpretation of limits of liability; no liability for force majeure; no liability for loss of profits; no liability for loss of revenue; no liability for loss of use; no liability for loss of opportunities; no liability for loss of data; no liability for consequential loss; per event liability cap upon services contract; aggregate liability cap upon services contract.",
    },
    {
      featured: true,
      title: "Senor Marketing Manager",
      company: "IBM",
      yearStart: 2016,
      yearEnd: 2017,
      description:
        "Limitations and exclusions of liability: caveats to limits of liability; interpretation of limits of liability; no liability for force majeure; no liability for loss of profits; no liability for loss of revenue; no liability for loss of use; no liability for loss of opportunities; no liability for loss of data; no liability for consequential loss; per event liability cap upon services contract; aggregate liability cap upon services contract.",
    },
  ],
};
