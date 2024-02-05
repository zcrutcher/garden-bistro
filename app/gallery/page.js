"use server";

import Image from "next/image";

const Gallery = async () => {
  return (
    <div className="container">
      <h2 className="title is-size-2 has-text-centered block">Gallery</h2>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <Image
                src="/assets/restaurant/imgs/restaurant_inside_1.jpg"
                alt=""
                className="image is-child"
                height={456}
                width={600}
              />
              <Image
                src="/assets/restaurant/imgs/restaurant_bar_1.jpg"
                alt=""
                className="image is-child my-3"
                height={456}
                width={600}
              />
            </div>
            <div className="tile is-parent">
              <Image
                src="/assets/restaurant/imgs/restaurant_garden_1.jpg"
                alt=""
                className="image is-child"
                height={420}
                width={600}
              />
            </div>
          </div>
          <div className="tile is-parent">
            <Image
              src="/assets/restaurant/imgs/table_setting_1.jpg"
              alt=""
              className="image is-child"
              height={420}
              width={600}
            />
          </div>
        </div>
        <div className="tile is-parent is-vertical">
          <Image
            src="/assets/restaurant/imgs/restaurant_long_table_1.jpg"
            alt=""
            className="image is-child"
            height={100}
            width={600}
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/assets/restaurant/imgs/restaurant_garden_table_setting_1.jpg"
            alt=""
            className="image is-child my-3"
            height={600}
            width={432}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
