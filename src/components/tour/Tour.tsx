import React, { useState } from "react";

type TourProps = {
  id: string;
  image: string;
  name: string;
  price: number;
  info: string;
  removeSelectedTour: (id: string) => void;
};

const Tour: React.FC<TourProps> = ({
  id,
  image,
  name,
  price,
  info,
  removeSelectedTour,
}) => {
  const [readMore, setReadMore] = useState(false);

  const removeTour = () => {
    removeSelectedTour(id);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={removeTour}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export { Tour };
