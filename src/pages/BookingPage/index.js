import React from "react";
import HomeLayout from "../../layouts/HomeLayout";
import BookForm from "../../components/BookForm";
import "./index.css";

const BookingPage = () => {
  return (
    <HomeLayout>
      <div className="booking">
        <BookForm />
      </div>
    </HomeLayout>
  );
};

export default BookingPage;
