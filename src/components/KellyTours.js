import React from "react";
import Navbar from "./Navbar";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer"; // Import Footer component

const KellyTours = () => {
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row row-content full-height">
          <div class="col-12 col-md-6 text-center text-container full-height">
            <h2><strong>Take a walking tour with KellyManhattanTours!</strong></h2>
            <h2><em>Portuguese!</em></h2>
            <p>
              Olá! São tantos lugares para visitar e ver que fica difícil escolher quais lugares visitar e em que
              dia E quanto posso fazer em um dia? Se você tem uma ideia do que gostaria de ver, posso ajudar a
              personalizá-lo para você e agendar um passeio de 4 a 5 horas para você aproveitar!
            </p>
            <h2>
              <em>English!</em>
            </h2>
            <p>
              Hello! There are so many places to visit and see, it's hard to choose which places to visit and what
              day AND how much can I do in one day? If you have an idea of what you would like to see, I can help
              customize it for you and schedule a 4 to 5 hour tour for you to enjoy! Big Apple, here you come!
            </p>
            <h2>
              <em>Or Spanish!</em>
            </h2>
            <p>Bienvenido a la ciudad de Nueva York! :)</p>
          </div>
          <div className="col-md-6">
            <img src="/empire_state.jpg" alt="New York City" className="image-placeholder" />
          </div>

        </div>
      </div>
      <div className="container mt-4">
        <ImageCarousel />
      </div>

      <Footer />

    </div>

  );
};

export default KellyTours;