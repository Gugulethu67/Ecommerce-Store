import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import ProductSlider from "./components/ProductSlider";
import ProductPage from "./components/ProductPage";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import LatestPosts from "./components/LatestPosts";
import Instagram from "./components/Instagram";
import CommentsSlider from "./components/CommentsSlider";
import { BlogPosts, comments, instaPosts, iphones, laptops, smartTvs, smartWatches } from "./data";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <>
      <Header />
      <Features />
      <ProductSlider title="Laptops" data={laptops} delay={5000} />
      <ProductSlider title="mobile & tablets" data={iphones} delay={7000} />
      <ProductSlider title="smart watches" data={smartWatches} delay={5000} />
      <ProductSlider title="smart tv" data={smartTvs} delay={5000} />
      <Banner />
      <LatestPosts title="latest posts" posts={BlogPosts} />
      <CommentsSlider comments={comments} delay={5000} />
      <Subscribe />
      <Instagram images={instaPosts} />
    </>
  );
}

export default App;