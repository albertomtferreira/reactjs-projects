import {
  FaGithub,
  FaYoutube,
  FaNpm,
  FaReact,
  FaFreeCodeCamp,
} from "react-icons/fa";

import "./app-details.styles.css";
// GLOBAL VARIABLES
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
    title: "FreeCodeCamp",
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
  package: {
    react_qr_code: {
      link: "https://www.npmjs.com/package/react-qr-code",
      icon: <FaNpm size={icon_size} />,
      title: "react-qr-code",
    },
  },
};

// LOCAL DATA
const localData = {
  accordion: {
    title: "Accordion",
    description: "Learn to create interactive collapsible content panels",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=482s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/accordian",
    },
  },
  color_generator: {
    title: "Color Generator",
    description:
      "Dive into generating dynamic colors and learn about state management",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=1882s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/random-color",
    },
  },
  qrcode: {
    title: "QR Code Generator",
    description: "Delve into generating QR codes for quick information sharing",
    youtube: {
      link: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=7312s",
    },
    github: {
      link: "https://github.com/sangammukherjee/25-reactjs-interview-projects/tree/master/src/components/qr-code-generator",
    },
  },
};

// Random Color Generator ""
// Star Rating "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=2722s"
// Image Slider "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=3442s"
// Load More Button "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=4870s"
// Tree View "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=5910s"
// QR Code Generator
// Theme Switch "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=7752s"
// Scroll Indicator "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=8771s"
// Tabs "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=9810s"
// Modal Popup "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=10622s"
// Github Profile Finder "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=11597s"
// Search Autocomplete "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=12978s"
// Tic Tac Toe "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=14022s"
// Feature Flag Implementation "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=15405s"
// useFetch Custom Hook "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=16522s"
// useOnclickOutside Custom Hook "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=17235s"
// useWindowResize / useResponsive Custom Hook "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=17802s"
// Scroll to Top and Bottom "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=18157s"
// Scroll to Particular Section "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=18687s"
// Weather App "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=19152s"
// Food Recipe App "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=20904s"
// Shopping Cart App "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=24312s"
// Expense Tracker App "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=27445s"
// Mern Stack Blog App "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=30592s"

// QR Code Details Description Banner
export default function QRCodeDetails() {
  return (
    <div className="app-titles">
      {/* tittle */}
      <h1>{localData.qrcode.title}</h1>
      {/* explain the content */}
      <h4>{globalData.fields.description}</h4>
      <p>{localData.qrcode.description} </p>
      {/* Link to repo on git hub */}
      <div className="links-packages-content">
        <div>
          <h4>{globalData.fields.links}</h4>
          <div className="icons">
            <a href={globalData.freeCodeCamp.link} target="_blank">
              {globalData.freeCodeCamp.icon}
              <h5>{globalData.freeCodeCamp.title} </h5>
            </a>
            <a href={localData.qrcode.github.link} target="_blank">
              {globalData.github.icon}
              <h5>{globalData.fields.repo} </h5>
            </a>
            {/* Link to youtube video start */}
            <a href={localData.qrcode.youtube.link} target="_blank">
              {globalData.youtube.icon}
              <h5>{globalData.fields.video} </h5>
            </a>
          </div>
        </div>

        <div className="packages-content">
          {/* mention to packages */}
          <h4>{globalData.fields.packages} </h4>
          <div className="icons">
            <a href={globalData.react.link} target="_blank">
              {globalData.react.icon}
              <h5>{globalData.react.title} </h5>
            </a>
            <a href={globalData.package.react_qr_code.link} target="_blank">
              {globalData.package.react_qr_code.icon}
              <h5>{globalData.package.react_qr_code.title} </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Color Generator Description Banner
export function ColorGeneratorDetails() {
  return (
    <div className="app-titles">
      {/* tittle */}
      {/* ########################################## UPDATE */}
      <h1>{localData.color_generator.title} </h1>
      {/* explain the content */}
      <h4>{globalData.fields.description} </h4>
      {/* ########################################## UPDATE */}
      <p>{localData.color_generator.description}</p>
      {/* Link to repo on git hub */}
      <div className="links-packages-content">
        <div>
          <h4>{globalData.fields.links} </h4>
          <div className="icons">
            <a href={globalData.freeCodeCamp.link} target="_blank">
              {globalData.freeCodeCamp.icon}
              <h5>{globalData.freeCodeCamp.title} </h5>
            </a>
            {/* ########################################## UPDATE */}
            <a href={localData.color_generator.github.link} target="_blank">
              {globalData.github.icon}
              <h5> {globalData.fields.repo} </h5>
            </a>
            {/* Link to youtube video start */}
            {/* ########################################## UPDATE */}
            <a href={localData.color_generator.youtube.link} target="_blank">
              {globalData.youtube.icon}
              <h5>{globalData.fields.video} </h5>
            </a>
          </div>
        </div>

        <div className="packages-content">
          {/* mention to packages */}
          <h4>{globalData.fields.packages} </h4>
          <div className="icons">
            {/* REACT ICON */}
            <a href={globalData.react.link} target="_blank">
              {globalData.react.icon}
              <h5> {globalData.react.title}</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Accordian Description Banner
export function AccordianDetails() {
  return (
    <div className="app-titles">
      {/* tittle */}
      <h1>{localData.accordion.title}</h1>
      {/* explain the content */}
      <h4>{globalData.fields.description}</h4>
      <p>{localData.accordion.description}</p>
      {/* Link to repo on git hub */}
      <div className="links-packages-content">
        <div>
          <h4>{globalData.fields.links}</h4>
          <div className="icons">
            <a href={globalData.freeCodeCamp.link} target="_blank">
              {globalData.freeCodeCamp.icon}
              <h5>{globalData.freeCodeCamp.title} </h5>
            </a>
            <a href={localData.accordion.github.link} target="_blank">
              {globalData.github.icon}
              <h5>{globalData.fields.repo} </h5>
            </a>
            {/* Link to youtube video start */}
            <a href={localData.accordion.youtube.link} target="_blank">
              {globalData.youtube.icon}
              <h5>{globalData.fields.video} </h5>
            </a>
          </div>
        </div>

        <div className="packages-content">
          {/* mention to packages */}
          <h4>{globalData.fields.packages} </h4>
          <div className="icons">
            {/* REACT ICON */}
            <a href={globalData.react.link} target="_blank">
              {globalData.react.icon}
              <h5>{globalData.react.title} </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
