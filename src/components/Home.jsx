import { useEffect, useState } from "react";
import styles from "./home.module.css";
import Search from "./Search";
import { useNavigate, Link } from "react-router-dom";
export default function Home() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/search");
  };

  return (
    <>
      <header>
        <h1 className={styles.heading}>BookLand</h1>
        <nav>
          <ul className={styles.navlink}>
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#"> About me </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.outercontainer}>
        <div className={styles.innercontainer1}>
          <div className={styles.text}>
            <p>READING IS TO THE </p>
            <p>MIND WHAT EXERCISE </p>
            <p>IS TO THE BODY </p>
            <p style={{ fontWeight: 500 }}> -Richard steele </p>
          </div>
          <p style={{ marginTop: 12 }}>
            <span style={{ fontSize: 20, fontWeight: "bold" }}>
              Not sure what to read?{" "}
            </span>
            Search books by name and author
          </p>
          <button onClick={handleExplore} className={styles.btn}>
            Explore Now |↗️
          </button>
        </div>

        <div className={styles.innercontainer2}>
          <div className={styles.wrapper1}>
            <img src="https://store.goodreads.lk/wp-content/uploads/2022/05/9789353338152.jpg" />{" "}
          </div>
          <div className={styles.wrapper2}>
            <img
              src="https://miro.medium.com/v2/resize:fit:272/1*NfoO0EFgXP73wkv0oh-LoA.png"
              alt="hooked nir eyal"
            />
          </div>
        </div>
      </div>

      {search && (
        <Search
          query={query}
          setQuery={setQuery}
          setBookResults={setBookResults}
        />
      )}
    </>
  );
}
