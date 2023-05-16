import "./Trips.scss";
import Carousel from "react-bootstrap/Carousel";
import { useGet } from "../_Hooks/Custom";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

const Trip = () => {
  const base64prefix = "data:image/jpeg;base64,";

  const { id } = useParams();

  const { data, error, isLoading, mutate } = useGet(
    "http://localhost:8080/trips/" + id
  );

  const {
    data: photo,
    error: photoError,
    isLoading: isLoadingPhoto,
    mutate: mutatePhoto,
  } = useGet("http://localhost:8080/trips/" + id + "/photos");

  if (data) {
    const formattedDepartureDate = format(
      new Date(data.departureDate),
      "dd/MM/yyyy"
    );
    const formattedArrivalDate = format(
      new Date(data.arrivalDate),
      "dd/MM/yyyy"
    );
    return (
      <>
        <h1 className="text-center">Il mio viaggio a : {data.destination}</h1>

        <article className="container">
          <div className="row">
            <div className="col-12">
              <Carousel className="carousel">
                {photo &&
                  photo.map((image) => (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={base64prefix + image.photo}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
              <h1>INFORMAZIONI SUL VIAGGIO</h1>
              <p>
                <b>Continente:</b> {data.continent}
              </p>
              <p>
                <b>Data di andata:</b> {formattedDepartureDate}
              </p>
              <p>
                <b>Data di ritorno:</b> {formattedArrivalDate}
              </p>
              <h3>DESCRIZIONE:</h3>
              <p>{data.description}</p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link className="btn btn-secondary mb-3" to="/trips">
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                style={{ paddingRight: "10px" }}
              />
              Torna indietro
            </Link>
          </div>
        </article>
      </>
    );
  }
};

export default Trip;
