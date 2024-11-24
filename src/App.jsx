import { useState } from "react";
import Home from "./components/Home.jsx";

import BookItem from "./components/BookItem.jsx";
import BookDetails from "./components/BookDetails.jsx";
import Search from "./components/Search.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
function App() {
  const [query, setQuery] = useState("");
  const [bookResults, setBookResults] = useState([]); // this is store every book results array fetched from api
  const [bookId, setBookId] = useState(""); // since every array store value in object format for everybook
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              <Search
                query={query}
                setQuery={setQuery}
                setBookResults={setBookResults}
                bookResults={bookResults}
                setBookId={setBookId}
              />
            }
          />
          <Route
            path="/bookdetails"
            element={<BookDetails bookId={bookId} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
