import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import Navbar from "./Navbar";
import Footer from "./Footer";

const RequestTour = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedDateRange, setSelectedDateRange] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("Midtown"); // Default location
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");

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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you can handle form submission logic
        // Access selectedDateRange, selectedLocation, name, email, and phoneNumber
        console.log("Selected Date Range: ", selectedDateRange);
        console.log("Selected Location: ", selectedLocation);
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Phone Number: ", phoneNumber);
        // You can also validate and submit the data to your backend if needed
    };

    return (
        <div>
            <Navbar />
            <div className="text-center">
                <h2 style={{ color: "#6A0DAD" }}>Request A Tour</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number (optional):</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startDatePicker">Start Date:</label>
                    <DatePicker
                        id="startDatePicker"
                        selected={startDate}
                        onChange={handleStartDateChange}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endDatePicker">End Date (Optional):</label>
                    <DatePicker
                        id="endDatePicker"
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
                    <label htmlFor="tourLocation">Select a Tour Location:</label>
                    <select
                        className="form-control"
                        id="tourLocation"
                        value={selectedLocation}
                        onChange={handleLocationChange}
                    >
                        <option>Midtown</option>
                        <option>Lower Manhattan</option>
                        <option>Brooklyn Bridge and Dumbo</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="additionalInfo">Any additional information you would like to add? Other locations to visit?</label>
                    <textarea
                        className="form-control"
                        id="additionalInfo"
                        rows="3"
                        placeholder="Enter additional information"
                        onChange={handleAdditionalInfoChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <Footer />
        </div>
    );
};

export default RequestTour;