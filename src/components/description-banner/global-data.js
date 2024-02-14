import {
  FaGithub,
  FaYoutube,
  FaNpm,
  FaReact,
  FaFreeCodeCamp,
} from "react-icons/fa";
const icon_size = 50;
// GLOBAL DATA
const globalData = {
  fields: {
    description: "Description:",
    links: "Links",
    repo: "Repo",
    video: "Video",
    packages: "Packages Used:",
  },
  freeCodeCamp: {
    link: "https://www.freecodecamp.org/news/master-react-by-building-25-projects/",
    icon: <FaFreeCodeCamp size={icon_size} />,
    title: "freeCodeCamp",
  },
  react: {
    link: "https://react.dev/",
    icon: <FaReact size={icon_size} />,
    title: "React",
  },
  youtube: {
    icon: <FaYoutube size={icon_size} />,
  },
  github: {
    icon: <FaGithub size={icon_size} />,
  },
};

export default globalData;