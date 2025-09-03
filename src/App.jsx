import Container from "./UI/Container";
import CartItems from "./components/BookStore/Cart/CartItems";
import BookDetails from "./page/BookDetails";
import BookShop from "./page/BookShop";
import Checkout from "./page/Checkout";
import Order from "./page/Order";

export default function App() {
  return (
    <div>
      <Container>
        {/* <BookShop />
        <BookDetails /> */}
        {/* <CartItems /> */}
        {/* <Checkout /> */}
        <Order />
      </Container>
    </div>
  );
}
