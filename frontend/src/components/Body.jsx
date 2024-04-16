import { ItemCard } from "./ItemCard";
import { useProducts } from "../hooks";

export const Body = () => {
  const { loading, products } = useProducts();
  return (
    <div>
      { loading ==false ?
      <div className="m-5">
        <div className="w-10/12 mx-auto flex flex-wrap gap-8">
          {products.map((item) => (
            <ItemCard
              key={item._id}
              ItemId={item._id}
              name={item.name}
              company={item.brand}
              imagelink={item.image}
              description={item.description}
              currentPrice={item.current_price}
              originalPrice={item.original_price}
              category={item.category}
              countInStock={item.countInStock}
            />
          ))}
        </div>
      </div> :
      <div className="flex justify-center h-96 items-center">
        <div>
        loading.....
        </div>
      </div>
}
    </div>
  );
};
