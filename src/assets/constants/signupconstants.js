import countryList from "countries-list";

const countries = Object.values(countryList.countries).map(
  (country) => country.name
);
const languages = Object.values(countryList.countries).map(
  (country) => country.native
);
const phoneCodes = Object.values(countryList.countries).map(
  (country) => "+" + country.phone + " (" + country.name + ")"
);
const titles = ["Mr", "Miss", "Ms", "Mx", "Dr", "Prof", "Sir", "Dame"];
const genders = ["Male", "Femail", "Both"];
const roles = [
  "Voice actior",
  "Voice artist",
  "Actor",
  "Narrator",
  "Singer",
  "Character actor",
  "Announcer",
  "Voice talent",
  "Performer",
  "Entertainer",
  "Thespian",
  "Comic",
  "Artiste",
  "Broadcaster",
  "Commentator",
  "Linguist",
  "Impersonator",
];
const interests = [
  "All",
  "Commercials",
  "Narration",
  "Characters",
  "Guides / Explainers",
  "Announcers",
  "Singing / Jingles",
  "Comedy",
];
const startYear = 1943;
const currentYear = new Date().getFullYear();
const startyears = Array.from(
  { length: currentYear - startYear + 1 },
  (_, index) => startYear + index
);
const availabilities = [
  "< 12 hours",
  "< 24 hours",
  "< 48 hours",
  "< 72 hours",
  "< 1 week",
  "< 2 weeks",
];
const currencies = Object.values(countryList.countries).map(
  (country) => country.currency
);
const feeunits = [
  "per hour",
  "per word",
  "per minute",
  "per day",
  "per half day",
];
export default {
  countries,
  languages,
  phoneCodes,
  titles,
  genders,
  roles,
  interests,
  startyears,
  availabilities,
  currencies,
  feeunits,
};
