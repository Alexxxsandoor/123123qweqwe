import BooksList from "./components/books/BooksList";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import InfoBook from "./components/pageInfoBook/InfoBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container content">
          <Routes>
            <Route index path="/" element={<BooksList />} />
            <Route path="book/:id" element={<InfoBook />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
