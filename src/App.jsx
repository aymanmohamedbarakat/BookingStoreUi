import Container from "./UI/Container";
import CartItems from "./components/BookStore/Cart/CartItems";
import BookDetails from "./page/BookDetails";
import BookShop from "./page/BookShop";
import Checkout from "./page/Checkout";

export default function App() {
  return (
    <div>
      <Container>
        {/* <BookShop />
        <BookDetails /> */}
        {/* <CartItems /> */}
        <Checkout />
      </Container>
    </div>
  );
}
