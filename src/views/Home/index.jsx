import { Suspense } from "react";
import ContentLayout from "../../layouts/ContentLayout";
import ListProduct from "../../modules/Home/ListProduct";
const Home = () => {
  return (
    <ContentLayout>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ListProduct />
      </Suspense>
    </ContentLayout>
  );
};

export default Home;
