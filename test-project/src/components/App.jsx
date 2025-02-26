// src/App.jsx


function Product({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price} credits</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Products</h1>

      <Product key="1" name="Cookies" price={999} />
      <Product key="2" name="Cake" price={1499} />
      <Product key="3" name="Ice Cream" price={799} />
    </div>
  );
}
  