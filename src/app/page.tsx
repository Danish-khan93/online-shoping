import {
  Header,
  Navbar,
  ProductCard,
  HeroSlider,
  ImageCollectionGellary,
  Footer,
  ProductBanner,
} from "@/component";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <ProductCard />
      <HeroSlider />
      <ProductBanner />
      {/* <ImageCollectionGellary /> */}
      <Footer />

      <h1>danish</h1>
    </div>
  );
}
