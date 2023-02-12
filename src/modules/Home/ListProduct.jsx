import { useRecoilValue } from "recoil";
import { productsFetch } from "../../store";
import GridLayout from "../../layouts/GridLayout";
import Card from "../../components/Card";
import { Suspense } from "react";
const ListProduct = () => {
  const products = useRecoilValue(productsFetch);
  console.log(products);
  return (
    <GridLayout>
      {products.map((x, i) => (
        <Card
          key={i}
          image={x.image}
          name={x.title}
          price={x.price}
          info={x.description}
        />
      ))}
    </GridLayout>
  );
};

export default ListProduct;
