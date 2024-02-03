import React from "react";
import Image from "next/image";
import "./styles.css";

const MenuItem = ({ id, title, description, img }) => {
  return (
    <div key={id} className="card block menu-item">
      <div className="card-image">
        <figure className="image is-4by3">
          <Image
            src={`/assets/menu/imgs/${img}`}
            alt={title}
            height="288"
            width="216"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
