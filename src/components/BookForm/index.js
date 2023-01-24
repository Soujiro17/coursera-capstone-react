import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchAPI, submitAPI } from "../../utils/api";
import "./indes.css";

const BookForm = () => {
  const [avaibleTimes, setAvaibleTimes] = useState([]);

  let date = new Date();
  date = `${date.getFullYear()}-${
    date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate()}`;

  const [formValues, setFormValues] = useState({
    date,
    time: "17:00",
    guests: 1,
    ocassion: "birthday",
  });

  const navigate = useNavigate();

  const onChangeForm = (e) => {
    if (
      (e.target.name === "date" &&
        e.target.value < DateTime.now().toFormat("yyyy-LL-dd")) ||
      (e.target.name === "guests" && e.target.value < 1)
    )
      return;
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const value = submitAPI(formValues);

    if (!value)
      toast.error("Error while booking your table. Please try again later.");

    navigate("/");
    toast.success("Table booked successfully!");
  };

  useEffect(() => {
    const dates = fetchAPI(formValues.date);

    setAvaibleTimes(dates);
  }, [formValues.date]);

  return (
    <form className="book-form" onSubmit={onSubmit}>
      <img className="logo" src="/imgs/Logo.svg" alt="logo" />
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        onChange={onChangeForm}
        value={formValues.date}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        onChange={onChangeForm}
        value={formValues.time}
      >
        {avaibleTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests" onChange={onChangeForm}>
        Number of guests
      </label>
      <input
        name="guests"
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={onChangeForm}
        value={formValues.guests}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        onChange={onChangeForm}
        value={formValues.ocassion}
      >
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <input
        className="submit-form"
        type="submit"
        value="Make Your reservation"
      />
    </form>
  );
};

export default BookForm;
