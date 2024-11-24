//when ever we clicked any book to uniquely identity that book has been clicked
import { useNavigate, Link } from "react-router-dom";
import styles from "./bookitem.module.css";
export default function BookItem({ books, setBookId }) {
  const navigate = useNavigate();
  const handleList = () => {
    navigate("/bookdetails");
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>{books.title}</div>
        <div className={styles.main}>
          {" "}
          <img src={books.image} />
        </div>
        <div className={styles.button}>
          <button
            className={styles.btn}
            onClick={() => {
              //console.log(books.id);
              handleList();
              setBookId(books.id);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
