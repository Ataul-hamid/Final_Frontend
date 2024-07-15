import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import OurProducts from '../OurProducts/OurProducts';
import RecommendProduct from '../RecommendProduct/RecommendProduct';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <RecommendProduct></RecommendProduct>
            <OurProducts page='home'></OurProducts>
            <Reviews></Reviews>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;