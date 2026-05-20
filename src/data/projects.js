const rawBase = import.meta.env.BASE_URL;
const BASE_URL = rawBase.endsWith("/") ? rawBase : rawBase + "/";

export const ProfessionalProjects = [
  {
    name: "Thermoverse",
    image: `${BASE_URL}assets/Images/Thermax Logo 2_.png`,
    tags: ["Unity", "C#"],
    description: "internal Training/learning application for Thermax Limited",
    note: "Application was for internal use and not publicly released.",
  },
  {
    name: "Drone Simulator",
    image: `${BASE_URL}assets/Images/Drone simulator.png`,
    tags: ["Unity", "C#"],
    description:
      "Contributed to the development of a VR-based drone simulator used for training and operational practice.This is a demo project",
    note: "",
  },
];

export const ProfessionalDemos = [{
  name: "Gun Assembly VR",
  image: `${BASE_URL}assets/Images/Insas Gun thumbnail.png`,
  tags: ["Unity", "C#"],
  description: "This is a demo project",
  note: "",
},
{
  name: "IED Disposal VR",
  image: `${BASE_URL}assets/Images/Insas Gun thumbnail.png`,
  tags: ["Unity", "C#"],
  description: "This is a demo project",
  note: "",
},
{
  name: "Point Switch machine control",
  image: `${BASE_URL}assets/Images/Insas Gun thumbnail.png`,
  tags: ["Unity", "C#"],
  description: "This is a demo project",
  note: "",
},

{
  name: "Fire fighing multiplayer",
  image: `${BASE_URL}assets/Images/Insas Gun thumbnail.png`,
  tags: ["Unity", "C#"],
  description: "This is a demo project",
  note: "",
},
{
  name: "Bailey bridge assembly VR",
  image: `${BASE_URL}assets/Images/Insas Gun thumbnail.png`,
  tags: ["Unity", "C#"],
  description: "This is a demo project",
  note: "",
},
];

export const PersonalProjects = [
  {
    slug: "botw-prototype",
    name: "Botw Prototype",
    image: `${BASE_URL}assets/Images/Botw-Project-Img.png`,
    tags: ["Unity"],
    description:
      "This is a Third-person prototype inspired by the Legend of Zelda : Breath of the Wild",
    software: "Unity",
    media: [
      { type: "image", url: `${BASE_URL}assets/Images/Botw-Project-Img.png` }
    ],
    note: "",
  },
  {
    slug: "first-stop",
    name: "First stop",
    image: `${BASE_URL}assets/Images/First stop.png`,
    tags: ["Unity"],
    description:
      "Contributed as a gameplay programmer to create a boss rush game for jam",
    software: "Unity",
    media: [
      { type: "image", url: `${BASE_URL}assets/Images/First stop.png` }
    ],
    note: "",
  },
];
