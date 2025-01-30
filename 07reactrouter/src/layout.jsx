import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router'
function Layout(){
    return (
       <>
       <Header/>
       <Outlet/>{/*header footer same rhega outlet dynamic hogi*/}
       <Footer/>
       </>
    );
}
export default Layout