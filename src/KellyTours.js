import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from "react";
import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import AboutMe from "./components/AboutMe"; // Import AboutMe component
import RequestTour from "./components/RequestTour"; // Import RequestTour component
import Footer from "./components/Footer"; // Import Footer component

const KellyTours = () => {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/request" element={<RequestTour />} />
        </Routes>

        <Navbar />

        {/* Main content */}
        {/* ... Your main content ... */}
        {/* Main content */}
        <div class="container">
          <div class="row row-content full-height">
            <div class="col-md-6 text-center text-container full-height">
              <h2><strong>Take a walking tour with KellyManhattanTours!</strong></h2>
              <h2><em>Portuguese!</em></h2>
              <p>
                Olá! São tantos lugares para visitar e ver que fica difícil escolher quais lugares visitar e em que
                dia E quanto posso fazer em um dia? Se você tem uma ideia do que gostaria de ver, posso ajudar a
                personalizá-lo para você e agendar um passeio de 4 a 5 horas para você aproveitar! Grande Maçã, aí
                vem você!
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
              {/* Image placeholder (background image) */}
              {/* <div
              className="image-placeholder"
              style={{
                backgroundImage: `url('/empire_state.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
              }}
            ></div> */}
              {/* Or use img tag */}
              <img src="/empire_state.jpg" alt="New York City" className="image-placeholder" />
            </div>

          </div>
        </div>
        {/* <div class="container align-right">
        <div class="row row-content full-height">
          <div class="col-md-6 text-center text-container full-height">
            <img src="/empire_state.jpg" alt="New York City" class="image-placeholder"></img>
          </div>
        </div>
      </div> */}
        {/* Additional sections or components can be added here */}
        {/* For example, you can add more content, other components, or section dividers */}
        {/* Image Carousel */}
        <div className="container mt-4">
          <ImageCarousel />
        </div>

      </Router>

      {/* Footer */}
      <Footer />
    </div>

  );
};

export default KellyTours;