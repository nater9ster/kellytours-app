import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import Navbar from "./Navbar";
import Footer from "./Footer";
import emailjs from '@emailjs/browser';
import "../styles/RequestTour.css"
import ReCAPTCHA from "react-google-recaptcha";

const RequestTour = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedDateRange, setSelectedDateRange] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("Midtown"); // Default location
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const form = useRef();

    const handleStartDateChange = (date) => {
        setStartDate(date);
        setSelectedDateRange([date, endDate]);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        setSelectedDateRange([startDate, date]);
    };

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleAdditionalInfoChange = (event) => {
        setAdditionalInfo(event.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!recaptchaValue) {
            alert("Please check the reCAPTCHA box.");
            return;
        }

        emailjs
            .sendForm(
                "service_ldezb7p",
                "template_vrct9fa",
                form.current,
                "EOGwpZ-0LfXCj4iYx"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormSubmitted(true);
                    // Reset form values
                    setStartDate(null);
                    setEndDate(null);
                    setSelectedDateRange([]);
                    setSelectedLocation("Midtown");
                    setName("");
                    setEmail("");
                    setPhoneNumber("");
                    setAdditionalInfo("");
                })
            .catch((error) => {
                console.log(error.text);
            });
    };


    return (
        <div>
            <Navbar />
            <div className="text-center">
                <h2 style={{ color: "#6A0DAD" }}>Request A Tour</h2>
            </div>
            {formSubmitted ? (
                <div className="thank-you-message"><em>Thank you for your submission!</em></div>
            ) : (
                <div class='container'>

                    <form ref={form} onSubmit={sendEmail}>

                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="user_name" onChange={handleNameChange}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="text" name="user_email" onChange={handleEmailChange}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number (optional): </label>
                            <input type="text" name="user_phone" onChange={handlePhoneNumberChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startDatePicker">Start Date: </label>
                            <DatePicker
                                name="startDatePicker"
                                selected={startDate}
                                onChange={handleStartDateChange}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                dateFormat="yyyy-MM-dd"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endDatePicker">End Date (Optional): </label>
                            <DatePicker
                                name="endDatePicker"
                                selected={endDate}
                                onChange={handleEndDateChange}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                dateFormat="yyyy-MM-dd"
                                isClearable
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tourLocation">Select a Tour Location: </label>
                            <select
                                className="form-control"
                                name="tourLocation"
                                value={selectedLocation}
                                onChange={handleLocationChange}
                            >
                                <option>Midtown</option>
                                <option>Lower Manhattan</option>
                                <option>Brooklyn Bridge and Dumbo</option>
                                <option>Upper Manhattan</option>
                                <option>Other Area(s)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="additionalInfo">Any additional information you would like to add? Other locations to visit? </label>
                            <textarea
                                className="form-control"
                                name="additionalInfo"
                                rows="3"
                                placeholder="Enter additional information"
                                onChange={handleAdditionalInfoChange}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="recaptcha">reCAPTCHA</label>
                            <ReCAPTCHA
                                sitekey="6LdsF1MpAAAAABboBzQbhZ0rMQtAi9U_d7v2YEM8"
                                onChange={(value) => setRecaptchaValue(value)}
                            />
                        </div>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default RequestTour;
