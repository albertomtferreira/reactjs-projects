import "./description-banner.styles.css";
import BannerList from "./banner-list";
import localData from "./local-data";
import globalData from "./global-data";

export function DummyData({ dummyData = [] }) {
  return (
    <div className="dummy-data">
      <BannerList list={dummyData} />
    </div>
  );
}

// Description Banner
export default function DescriptionBanner({ option }, { dummyData = [] }) {
  const { id, title, description, youtube, github, packages } =
    localData[option];

  return (
    <div className="app-titles">
      {/* tittle */}
      <h1>{title} </h1>
      {/* explain the content */}
      <h4>{globalData.fields.description} </h4>
      <p>{description}</p>

      <div className="links-packages-content">
        <div>
          <h4>{globalData.fields.links} </h4>
          <div className="icons">
            {/* Link to freeCodeCamp */}
            <a href={globalData.freeCodeCamp.link} target="_blank">
              {globalData.freeCodeCamp.icon}
              <h5>{globalData.freeCodeCamp.title} </h5>
            </a>
            {/* Link to repo on git hub */}
            <a href={github.link} target="_blank">
              {globalData.github.icon}
              <h5> {globalData.fields.repo} </h5>
            </a>
            {/* Link to youtube video start */}
            <a href={youtube.link} target="_blank">
              {globalData.youtube.icon}
              <h5>{globalData.fields.video} </h5>
            </a>
          </div>
        </div>
        <div className="packages-content">
          {/* mention to packages */}
          <h4>{globalData.fields.packages} </h4>

          <div className="icons">
            <a href={packages.react.link} target="_blank">
              {packages.react.icon}
              <h5>{packages.react.title} </h5>
            </a>
            {packages.other_packages.active === true ? (
              <a href={packages.other_packages.link} target="_blank">
                {packages.other_packages.icon}
                <h5>{packages.other_packages.title} </h5>
              </a>
            ) : null}
            {packages.other_packages2.active === true ? (
              <a href={packages.other_packages2.link} target="_blank">
                {packages.other_packages2.icon}
                <h5>{packages.other_packages2.title} </h5>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
