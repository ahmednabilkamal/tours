import React from "react";

type TourProps = {
  image: string;
  name: string;
  price: number;
  info: string;
};

const Tour: React.FC<TourProps> = ({ image, name, price, info }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
    </article>
  );
};

export { Tour };
