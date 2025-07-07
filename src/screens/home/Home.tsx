import { useEffect, useState } from "react";
import { baseUrl } from "../../services";
import "./styles.css";
import { Tour } from "../../components";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
};

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [toursData, setToursData] = useState<Tour[]>([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async (): Promise<void> => {
    try {
      const response = await fetch(baseUrl);
      const tours: Tour[] = await response.json();
      setToursData(tours);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
    setIsLoading(false);
  };

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline" />
      </div>

      <div className="tours">
        {toursData.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>

      {isLoading && <p>Loading...</p>}
    </section>
  );
};

export { Home };
