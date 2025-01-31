import React, { useEffect, useState } from "react";
import Card from "./Card";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
import axios from "axios";
const Course = () => {
  // console.log("aaaaa", list);

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4000/book");
        console.log(response.data);
        setBook(response.data);
      } catch(error) {
        console.log(error);
        
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!: </span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            labore culpa libero quo dignissimos dicta sit sint ipsa doloremque,
            nemo aperiam laboriosam ea soluta iure animi magni blanditiis
            ratione ab.
          </p>
          <Link to="/">
            <button
              className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md 
    ver:bg-pink-700 duration-300"
            >
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
