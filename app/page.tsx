import createStore from "redux";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Hello world</h1>
    <ProductCard id={1}></ProductCard>
    <ProductCard id={2}></ProductCard>
    </main>
  );
}
