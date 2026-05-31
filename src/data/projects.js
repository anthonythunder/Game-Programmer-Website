const rawBase = import.meta.env.BASE_URL;
const BASE_URL = rawBase.endsWith("/") ? rawBase : rawBase + "/";

export const ProfessionalProjects = [
  {
    name: "Thermoverse",
    image: `${BASE_URL}assets/Images/Thermax Logo.png`,
    tags: ["Unity", "C#"],
    description: "Software programmer",
    note: "",
  },
  {
    name: "Drone Simulator",
    image: `${BASE_URL}assets/Images/Drone simulator.png`,
    tags: ["Unity", "C#", "VR",],
    description:
      "Level designer and gameplay programmer",
    note: "",
  },
];

export const ProfessionalDemos = [{
  name: "Gun Assembly VR",
  image: `${BASE_URL}assets/Images/Insas Gun thumbnail.png`,
  tags: ["Unity", "C#", "VR"],
  description: "This is a demo project",
  note: "",
},
{
  name: "IED Disposal VR",
  image: `${BASE_URL}assets/Images/Insas Gun thumbnail.png`,
  tags: ["Unity", "C#", "VR"],
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
    tags: ["Unity", "C#", "blender"],
    description:
      "Programmed the character movements, Abilites, combat system"
    ,
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
    tags: ["Unity", "C#", "blender"],
    description:
      "Gameplay programmer, Modeler and Animator",
    software: "Unity",
    media: [
      { type: "image", url: `${BASE_URL}assets/Images/First stop.png` }
    ],
    note: "",
  },
];
