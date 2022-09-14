import type { NextPage } from "next";
import {
  Hero,
  PopularCollection,
  Explore,
  Gallery,
  Inspiration,
  Services,
  Spaces,
  Footer
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="">
      <Hero />
      <Services />
      <PopularCollection />
      <Inspiration />
      <Spaces />
      <Explore />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
