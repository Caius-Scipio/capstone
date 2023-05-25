import React from "react";
import bruschetta from "../Images/bruschetta.jpg"
import saladgreek from "../Images/salad-greek.jpg"
import lemondessert from "../Images/lemon-dessert.jpg"

const Main = () => {
  return (
    <>
      <div class="main__header">
        <h1>This Week's Specials!</h1>
        <p><button>Order Online</button></p>
      </div>
      <div class="container">
        <div class="card">
          <img src={ saladgreek } alt="greek salad" />
          <section class="product">
            <h2>Greek Salad</h2>
            <p class="price">$19.99</p>
          </section>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p><button>Order Online</button></p>
        </div>
        <div class="card">
          <img src={ bruschetta } alt="bruschetta" />
          <section class="product">
            <h2>Bruschetta</h2>
            <p class="price">$19.99</p>
          </section>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p><button>Order Online</button></p>
        </div>
        <div class="card">
          <img src={ lemondessert } alt="lemon dessert" />
          <section class="product">
            <h2>Lemmon Dessert</h2>
            <p class="price">$19.99</p>
          </section>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p><button>Order Online</button></p>
        </div>
      </div>
    </>
  )
}

export default Main;
/*
import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./header";
import { useState } from "react";


const Main = () => {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
    const seededRandom = function (seed) {
      var m = 2**35 - 31;
      var a = 185852;
      var s = seed % m;
      return function () {
        return (s = s * a % m) / m;
      };
    }

    const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());
        for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
            result.push(i + ':00');
          }
          if(random() < 0.5) {
            result.push(i + ':30');
          }
        }
        return result;
      };
      const submitAPI = function(formData) {
        return true;
      };
      const initialState = {availableTimes:  fetchAPI(new Date())}
      const [state, dispatch] = useReducer(updateTimes, initialState);

      function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
      }
      const navigate = useNavigate();
      function submitForm (formData) {
        if (submitAPI(formData)) {
          navigate("/confirmed")
        }
      }

    return(
      <main>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
          <Route path="/confirmed" element={<ConfirmedBooking aria-label="Confirmed Booking"/> } />
        </Routes>
      </main>
    )
}

export default Main;
*/