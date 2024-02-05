"use server";

import Image from "next/image";

const Review = ({ firstName, stars, message, img }) => {
  const renderStars = (stars) => {
    const list = [];
    for (let i = 0; i < stars; i++) {
      list.push(<i id="stars" className="fas fa-star" />);
    }
    return list;
  };

  return (
    <div className="card-content box">
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
              <p className="icon has-text-warning block">
                {renderStars(stars)}
              </p>
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
