import React from "react";

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
  const removeTour = () => {
    removeSelectedTour(id);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
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
