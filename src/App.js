// import logo from './logo.svg';
import "./App.css";
import { Header } from "./components/header/header.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { HeroSection } from "./components/hero/HeroSection";
import { ProductComponent } from "./components/product/ProductComponent.jsx";
import { ProductGrid } from "./components/product/productGrid.jsx";
import { ProductCarousel } from "./pages/products/movieCcarousel.jsx";

function App() {
  const productData = [
    {
      productImage: "promo_apple_watch_series_11.jpg",
      productTitle: "Watch SERIES 11",
      productSubtitle1: "The ultimate way to",
      productSubtitle2: "watch your health",
      productSubtitle3: "",
      background: "#f5f5f7",
    },
    {
      productImage: "promo_airpodspro_3.jpg",
      productTitle: "Airpod 3 Pro",
      productSubtitle1: "The world's best in-ear",
      productSubtitle2: "Active noise cancelations",
      productSubtitle3: "",
      background: "#f5f5f7",
    },
    {
      productImage: "promo_macbook_air.jpg",
      productTitle: "MacBook Air”",
      productSubtitle1: "Sky blue color.",
      productSubtitle2: "Sky high performance with M4",
      productSubtitle3: "",
      background: "#f5f5f7",
    },
    {
      productImage: "promo_apple_card.jpg",
      productTitle: "MacBook Air”",
      productSubtitle1: "Sky blue color.",
      productSubtitle2: "Sky high performance with M4",
      productSubtitle3: "",
      background: "#f5f5f7",
    },
    {
      productImage: "promo_ipad_air.jpg",
      productTitle: "MacBook Air”",
      productSubtitle1: "Sky blue color.",
      productSubtitle2: "Sky high performance with M4",
      productSubtitle3: "",
      background: "#f5f5f7",
    },
    {
      productImage: "promo_iphone_tradein.jpg",
      productTitle: "MacBook Air”",
      productSubtitle1: "Sky blue color.",
      productSubtitle2: "Sky high performance with M4",
      productSubtitle3: "",
      background: "#f5f5f7",
    },
  ];

  return (
    <>
      <Header />
      <HeroSection
        heroImage={`hero_iphone_17_pro.jpg`}
        heroTitle={`iPhone 15 Pro`}
        heroSubtitle1={`All out Pro.`}
        heroSubtitle2={``}
        background="black"
        textColr="#ffffff"
      />
      <div style={{ height: "15px" }}></div>
      <HeroSection
        heroImage={`hero_iphone_air_small.jpg`}
        heroTitle={`iPhone Air`}
        heroSubtitle1={`The thinnest iPhone ever.`}
        heroSubtitle2={`With the power of pro inside`}
        background="#f5f5f7"
        textColr="black"
      />
      <div style={{ height: "15px" }}></div>
      <HeroSection
        heroImage={`hero_iphone_17.jpg`}
        heroTitle={`iPhone 17`}
        heroSubtitle1={`Magichromatic.`}
        heroSubtitle2={``}
        background="#f5f5f7"
        textColr="black"
      />
      <div style={{ height: "15px" }}></div>
      <ProductGrid>
        {productData.map((product, index) => (
          <ProductComponent
            key={index}
            productImage={product.productImage}
            productTitle={product.productTitle}
            productSubtitle1={product.productSubtitle1}
            productSubtitle2={product.productSubtitle2}
            productSubtitle3={product.productSubtitle3}
            background={product.background}
          />
        ))}
      </ProductGrid>
      <ProductCarousel />
      <Footer />
    </>
  );
}

export default App;
