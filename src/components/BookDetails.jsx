import { useEffect, useState } from "react";
import styles from "./bookdetails.module.css";

export default function BookDetails({ bookId }) {
  const [bookDetails, setBookDetails] = useState({}); //since we are searching book information by id
  const url = `https://api.bigbookapi.com/${bookId}`;
  const apiKey = import.meta.env.VITE_APIKEY;
  useEffect(() => {
    //fetching booking information through bookid\
    const fetchdata = async () => {
      try {
        const response = await fetch(`${url}?api-key=${apiKey}`);
        const data = await response.json();
        //console.log(bookId);
        setBookDetails(data);
      } catch (error) {
        console.log("error", error.message);
      }
    };
    if (bookId == null) {
      alert("book not found");
    } else {
      fetchdata();
    }
  }, [bookId]);
  return (
    <div className={styles.main}>
      <div className={styles.title}>{bookDetails.title}</div>
      <div className={styles.image}>
        <img src={bookDetails.image} />
      </div>
      <div className={styles.page}>
        <p>
          <span
            style={{ fontFamily: "sans-serif", marginTop: 8, fontWeight: 600 }}
          >
            page:
          </span>
          {bookDetails.number_of_pages}
        </p>
      </div>
      <br></br>
      <div className={styles.author}>
        <h1>author</h1>
      </div>

      <div className={styles.three}>
        <ul>
          {bookDetails.authors &&
            bookDetails.authors.map(
              (
                authors,
                index //if only data is fetched from api then authors is an array and only map function run
              ) => <h1 key={index}>{authors.name}</h1>
            )}
        </ul>
      </div>
      <div className={styles.four}>
        <p>
          {" "}
          <span
            style={{ fontFamily: "sans-serif", marginTop: 12, fontWeight: 600 }}
          >
            Rating:
          </span>
          {bookDetails.rating && Math.round(bookDetails.rating.average * 100)}{" "}
        </p>

        <br></br>
        <p>
          {" "}
          <span
            style={{ fontFamily: "sans-serif", marginTop: 12, fontWeight: 600 }}
          >
            publish date:
          </span>
          {bookDetails.publish_date}
        </p>
        <br></br>
        <p>
          <span
            style={{ fontFamily: "sans-serif", marginTop: 12, fontWeight: 600 }}
          >
            Description:
          </span>
          {bookDetails.description}
        </p>
        <br></br>
      </div>
    </div>
  );
}
