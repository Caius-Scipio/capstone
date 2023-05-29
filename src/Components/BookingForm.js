import React from "react";
import { useState } from "react";



const BookingForm = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")

   const handleSumbit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <fieldset>
            <div>
                <section class="section1">
                    <label htmlFor="book-date">Date:</label>
                </section>
                <section class="section2">
                    <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                </section>
            </div>
            <div>
                <section class="section1">
                    <label htmlFor="book-time">Time:</label>
                </section>
                <section class="section2">
                    <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                        <option value="">Select a Time</option>
                        {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                    </select>
                </section>
            </div>
            <div>
                <section class="section1">
                    <label htmlFor="book-guests">Guests:</label>
                </section>
                <section class="section2">
                    <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
                </section>
            </div>
            <div>
                <section class="section1">
                    <label htmlFor="book-occasion">Occasion:</label>
                </section>
                <section class="section2">
                    <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                        <option value="">Select an Option</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </section>
            </div>
            <div>
              <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"} class="button"></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;