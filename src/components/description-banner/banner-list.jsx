import BannerItem from "./banner-item";

export default function BannerList({ list = [] }) {
  return (
    <div className="banner-list">
      {list && list.length > 0
        ? list.map((bannerItem) => <BannerItem item={bannerItem} />)
        : null}
    </div>
  );
}
