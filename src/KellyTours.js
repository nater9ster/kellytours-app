import React from "react";
import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";


const KellyTours = () => {
  return (
    <div>
      <Navbar />

      {/* Image Carousel */}
      <ImageCarousel />

      {/* Main content */}
      <div class="container">
        <div class="row row-content full-height">
          <div class="col-md-6 text-center text-container full-height">
            <h2><strong>Visiting NYC? {"\n"} Take a walking tour with KellyManhattanTours!</strong></h2>
            <h2><em>In English!</em></h2>
            <p>
              Hello! There are so many places to visit and see, it's hard to choose which places to visit and what
              day AND how much can I do in one day? If you have an idea of what you would like to see, I can help
              customize it for you and schedule a 4 to 5 hour tour for you to enjoy! Big Apple, here you come!
            </p>
            <h2>
              <em>Or in Portuguese!</em>
            </h2>
            <p>
              Olá! São tantos lugares para visitar e ver que fica difícil escolher quais lugares visitar e em que
              dia E quanto posso fazer em um dia? Se você tem uma ideia do que gostaria de ver, posso ajudar a
              personalizá-lo para você e agendar um passeio de 4 a 5 horas para você aproveitar! Grande Maçã, aí
              vem você!
            </p>
          </div>
          <div class="container">
            <img src="kellytours-app\src\app\assets\img\empire_state.jpg" alt="New York City" class="image-placeholder"></img>
          </div>
        </div>
      </div>
      {/* Additional sections or components can be added here */}
      {/* For example, you can add more content, other components, or section dividers */}
    </div>
    
  );
};

export default KellyTours;
