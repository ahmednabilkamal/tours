import { useEffect, useState, type JSX } from "react";
import { baseUrl } from "../../services";
import "./styles.css";
import { Tour } from "../../components";

type TourType = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
};

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [toursData, setToursData] = useState<TourType[]>([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async (): Promise<void> => {
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const tours: TourType[] = await response.json();
      setToursData(tours);
    } catch (error) {
      console.error("Error fetching tours:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterTours = (id: string): void => {
    const filteredTours = toursData.filter((tour) => tour.id !== id);
    setToursData(filteredTours);
  };

  const renderEmptyTours = (): JSX.Element => {
    return (
      <div className="title">
        <h2>No tours left</h2>
        <button
          className="btn"
          type="button"
          style={{ marginTop: "2rem" }}
          onClick={() => fetchTours()}
        >
          Refresh
        </button>
      </div>
    );
  };

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline" />
      </div>

      <div className="tours">
        {toursData.length === 0 && !isLoading
          ? renderEmptyTours()
          : toursData.map((tour) => (
              <Tour key={tour.id} {...tour} removeSelectedTour={filterTours} />
            ))}
      </div>

      {isLoading && <p>Loading...</p>}
    </section>
  );
};

export { Home };
