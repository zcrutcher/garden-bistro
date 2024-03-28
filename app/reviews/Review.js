"use server";

import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ firstName, stars, message, img }) => {
  return (
    <div className="card-content box">
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      ></script>
      <div className="media">
        <div className="media-left">
          <figure className="image is-64x64 is-clipped">
            <Image
              className="is-rounded"
              src={`/assets/reviews/imgs/${img}`}
              alt="profile"
              height={42}
              width={64}
            />
          </figure>
        </div>
        <div className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="title is-4 mb-0 block">{firstName}</p>
              <div className="icon has-text-warning block">
                <div className="is-flex is-flex-direction-row">
                  {Array.apply(null, { length: stars }).map((_, i) => (
                    <FontAwesomeIcon icon={faStar} key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        {message}
        <br />
      </div>
    </div>
  );
};

export default Review;
