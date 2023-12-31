import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button, IconButton } from "@mui/material";
import "./counter.css";

const Counter = ({ qty, increase, decrease, addToCart, stock, qtyInCart }) => {
  return (
    <section className="counter-container">
      <div className="counter">
        CANTIDAD
        <IconButton
          disabled={qty === 1}
          onClick={decrease}
          className="rmvIcon"
          aria-label="decrease"
        >
          <RemoveIcon sx={{ fontSize: "1.2rem" }} />
        </IconButton>
        {qty}
        <IconButton
          onClick={increase}
          className="addIcon"
          aria-label="increase"
          disabled={stock === qty + qtyInCart || stock === qtyInCart}
        >
          <AddIcon sx={{ fontSize: "1.2rem" }} />
        </IconButton>
      </div>
      <Button
        color="secondary"
        variant="contained"
        sx={{
          color: "white",
          fontSize: { sm: "0.6rem", md: "0.8rem", lg: "0.9rem", xl: "1rem" },
        }}
        onClick={() => {
          addToCart(qty);
        }}
        disabled={stock <= qtyInCart}
      >
        <AddShoppingCartIcon
          sx={{
            marginRight: "1rem",
            fontSize: "1.2rem",
          }}
        />
        Agregar al carrito
      </Button>
    </section>
  );
};

export default Counter;
