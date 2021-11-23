import React, { useState } from "react";
import "./category.css";
import { Form, FormLabel } from "react-bootstrap";

const Category = () => {
  const [state, setState] = useState({
    ids: [],
    btnValue: [],
    selectedBtn: false,
  }
  );

  console.log(state);

  const toggleClass = (e) => {
    setState({
      ids: e.target.id,
      selectedBtn: !(state.selectedBtn),
      btnValue: e.target.value,
    });
    //Get the value as well from the button selected

    
  };

  function Cate_click(clicked) {}

  return (
    <div id="content">
      <div>
        <h1>Categories</h1>
      </div>

      <div>
      <div className="CatSect">
        <img
          src="https://cdn3.vectorstock.com/i/1000x1000/28/57/psychedelic-colorful-eye-and-waves-fantastic-art-vector-27432857.jpg"
          alt=""
        />
          <button
            type="submit"
            value="Arts"
            id="c1"
            className="category"
            onClick={toggleClass}
          >
            Arts
          </button>
        </div>

        <div className="CatSect">
        <img
          src="https://sciencenode.org/img_2021/2021-06-21/SNLogo.jpeg"
          alt=""
        />
          <button
            type="submit"
            value="Science & Technology"
            id="c2"
            className="category"
            onClick={toggleClass}
          >
            Science & Technology
          </button>
        </div>

        <div className="CatSect">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNEmspqDGcPUf9rbDVwoodhPYDLTL77dvM7szY88p0zXy4h_g6MVOJbrNpQ4FWlc0SqU&usqp=CAU"
          alt=""
        />
          <button
            type="submit"
            value="Books"
            className="category"
            id="c3"
            onClick={toggleClass}
          >
            Books
          </button>
        </div>

        <div className="CatSect">
        <img
          src="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"
          alt=""
        />
          <button
            type="submit"
            value="Food"
            className="category"
            id="c4"
            onClick={toggleClass}
          >
            Food
          </button>
        </div>

        <div className="CatSect">
        <img
          src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjohnnyjet%2Ffiles%2F2017%2F10%2Ftraveling-alone.jpg"
          alt=""
        />
          <button
            type="submit"
            value="Travel"
            className="category"
            id="c5"
            onClick={toggleClass}
          >
            Travel
          </button>
        </div>

        <div className="CatSect">
        <img
          src="https://www.learninglinksindia.org/public/images/learning-img-03.jpg"
          alt=""
        />
          <button
            type="submit"
            value="Education"
            className="category"
            id="c6"
            onClick={toggleClass}
          >
            Education
          </button>
        </div>

        <div className="CatSect">
        <img
          src="https://media.wired.com/photos/5f9ca518227dbb78ec30dacf/1:1/w_1381,h_1381,c_limit/Gear-RIP-Google-Music-1194411695.jpg"
          alt=""
        />
          <button
            type="submit"
            value="Music"
            className="category"
            id="c7"
            onClick={toggleClass}
          >
            Music
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
