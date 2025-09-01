import Container from "./UI/Container";
import BookDetails from "./page/BookDetails";
import BookShop from "./page/BookShop";

export default function App() {
  return (
    <div>
      <Container>
        {/* <BookShop /> */}
        <BookDetails />
      </Container>
    </div>
  );
}
