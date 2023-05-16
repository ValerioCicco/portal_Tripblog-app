import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import "./Home.scss";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
  

  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Raccontaci i posti che hai visitato</h3>
            <p>Nulla è più importante della tua opinione!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7245232/pexels-photo-7245232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Se sei qui è perché ami i viaggi</h3>
            <p>
              Qui puoi condividere le tue sensazioni dalla partenza al ritorno!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/16053726/pexels-photo-16053726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/imgs/foto.png"
          />
          <Carousel.Caption>
            <h3>Explain how you feel!</h3>
            <p>É la nostra filosofia di vita, raccontaci la tua storia!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <article className="container-fluid bgimg">
        <div className="row">
          <div className="col-12">
            <h1 id="aboutus" className="text-center f-raleway-title mt-3">
              CHI SIAMO ?
            </h1>
            <div className="text-container">
              <p className="f-raleway text-black">
                Benvenuti su TripBlog, il sito web di viaggi dove condividiamo le
                nostre esperienze di viaggio attraverso l'obiettivo delle nostre
                emozioni. Qui potrai trovare post dettagliati sui viaggi dei
                nostri utenti, arricchiti da fotografie che catturano le vostre
                emozioni mentre esplorate nuovi luoghi e culture. Condividerete
                con noi le vostre avventure, le sfide che avete affrontato e le
                esperienze che vi hanno fatto crescere. Non vi limitate a fornire
                informazioni sui luoghi da visitare, ma cercate di trasmettere la
                magia dei posti che avete scoperto, per farci sentire come se ci
                fossimo stati anche noi!
              </p>
            </div>
            
          </div>
        </div>
      </article>
      <section className={'hidden ' + (isVisible ? 'show' : '')}>
        <h1>Il nostro motto</h1>
        <p className="text-center">
          Il nostro motto è "Explain How You Feel", perché crediamo che ogni
          viaggio sia un'esperienza personale e unica che va oltre le semplici
          descrizioni dei luoghi visitati.
        </p>
      </section>
      <section className={'hidden ' + (isVisible ? 'show' : '')}>
        <h1 id="ourmission">La nostra mission</h1>
        <p className="text-center">
          Su TripBlog cerchiamo di creare una comunità di viaggiatori
          appassionati, dove possiamo interagire con voi, scambiare opinioni e
          condividere la nostra passione per i viaggi. Quindi, se sei alla
          ricerca di un blog di viaggi diverso dal solito, dove le emozioni sono
          al centro dell'esperienza, sei nel posto giusto!
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Home;
