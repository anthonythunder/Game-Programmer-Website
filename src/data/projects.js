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
    name: "Fire Safety VR simulator",
    image: `${BASE_URL}assets/Images/P ff.png`,
    tags: ["Unity", "C#", "VR",],
    description:
      "Gameplay programmer",
    note: "",
  },
  {
    name: "Drone Simulator",
    image: `${BASE_URL}assets/Images/Drone simulator.png`,
    tags: ["Unity", "C#", "VR",],
    description:
      "Gameplay programmer",
    note: "",
  },
];

export const Demos = [{
  name: "Gun Assembly VR",
  image: `${BASE_URL}assets/Images/Insas Gun thumbnail.png`,
  tags: ["Unity", "C#", "VR"],
  description: "Gun assembling and disassembling VR experience",
  note: "",
},
{
  name: "IED Disposal VR",
  image: `${BASE_URL}assets/Images/IED Disposal.png`,
  tags: ["Unity", "C#", "VR"],
  description: "IED Disposal Mission in VR",
  note: "",
},
{
  name: "Fire fighing multiplayer",
  image: `${BASE_URL}assets/Images/Fire fight multiplayer.png`,
  tags: ["Unity", "C#"],
  description: "A multiplayer demo developed for a fire fighing event",
  note: "",
},
{
  name: "Bailey bridge assembly VR",
  image: `${BASE_URL}assets/Images/Bailey bridge.png`,
  tags: ["Unity", "C#"],
  description: "Bailey bridge assembling steps in VR",
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
