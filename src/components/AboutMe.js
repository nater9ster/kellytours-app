import React from "react";
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer";

const AboutMe = () => {
    return (
        <div>
            <Navbar />
            <div>
                <section id="about" class="py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <img src="kellytours-app/src/assets/img/kelymain.jpg" alt="Profile Image" class="img-fluid"></img>
                            </div>
                            <div class="col-lg-6">
                                <h2>About Me</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at metus mi. Quisque congue gravida
                                    nulla a efficitur. Nunc lacinia mauris ut sem cursus venenatis. Sed nec tristique ipsum.</p>
                                <p>Pellentesque non congue nisl. Praesent at fermentum dolor. Phasellus convallis efficitur dui, non
                                    interdum ex. Integer lacinia metus et enim semper auctor.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <section id="photos" class="photo-section">
                    <div class="container">
                        <div class="row photo-grid">
                            <div class="col-lg-4">
                                <img src="kellytours-app/src/assets/img/empire_state" alt="Photo 1"></img>
                            </div>
                            <div class="col-lg-4">
                                <img src="kellytours-app/src/assets/img/kelymanhattanwalkingtours.jpg" alt="Photo 2"></img>
                            </div>
                            <div class="col-lg-4">
                                <img src="kellytours-app/src/assets/img/kelyskyline.jpg" alt="Photo 3"></img>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AboutMe;