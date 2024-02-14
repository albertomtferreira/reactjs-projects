import BannerList from "./banner-list";

export default function BannerItem({ item }) {
  return (
    <div>
      <div>1- {item.id} </div>

      <div>
        {item && item.id === "accordion" ? (
          <div>
            <p>2 - {item.id}</p>
            <p>3 - {item.title}</p>
            <p>4 - {item.description}</p>
          </div>
        ) : null}

        {item && item.children && item.children.length > 0 ? (
          <BannerList list={item.children} />
        ) : null}
      </div>
    </div>
  );
}
