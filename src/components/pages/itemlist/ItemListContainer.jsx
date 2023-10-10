import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );
    const cargarItems = new Promise((resolve, reject) => {
      products
        ? resolve(categoryName ? productosFiltrados : products)
        : reject("Error, no se encontraron items");
    });

    cargarItems
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;