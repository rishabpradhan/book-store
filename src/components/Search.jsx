import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./search.module.css";
import BookItem from "./BookItem";

export default function Search({
  query,
  setQuery,
  setBookResults,
  bookResults,
  setBookId,
}) {
  //useState to add different types of book name according to query in state variable
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  //api logic
  const url = "https://api.bigbookapi.com/search-books"; //url of the bigbookapi.com
  const apikey = import.meta.env.VITE_APIKEY;

  //useeffect hook for api call

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}?query=${query}&api-key=${apikey}`);
      const data = await response.json();
      //console.log(data.books);

      setBookResults(data.books);
    } catch (error) {
      console.log("error ", error.message);
    }
  };

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.main}>
          <p className={styles.items1}>
            Search any book's name by author and title
          </p>
          <p className={styles.items2}>You can also search by genre</p>
          <p className={styles.items3}>eg:love,thriller,crime ...</p>
        </div>
        <div className={styles.container}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="What are you looking for?"
          />
          <button
            className={styles.btn}
            onClick={() => {
              fetchData();
            }}
          >
            Click
          </button>
        </div>
      </div>

      <div>
        {bookResults.map((bookArray, index) =>
          bookArray.map((books, subindex) => (
            <BookItem
              books={books}
              setBookId={setBookId}
              key={`${index}-${subindex}`}
            />
          ))
        )}
      </div>
    </>
  );
}
