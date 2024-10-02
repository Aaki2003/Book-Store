import React ,{useEffect , useState }from "react";
import BookCards from "../components/BookCards";

const OtherBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(10, 17)));
  }, []);
  return (
    <div>
      <div>
        <BookCards books={books} headline="Other Books" />
      </div>
    </div>
  );
};

export default OtherBook;
