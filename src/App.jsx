import Container from "./UI/Container";
import CartItems from "./components/BookStore/Cart/CartItems";
import BookDetails from "./page/BookDetails";
import BookShop from "./page/BookShop";

export default function App() {
  return (
    <div>
      <Container>
        {/* <BookShop />
        <BookDetails /> */}
        <CartItems />
      </Container>
    </div>
  );
}
