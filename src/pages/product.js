import React from 'react'
import Footer from './common/footer'
import Header from './common/header'
import Welcome from './common/welcome'
import ProductMain from './product/productMain'

/* Wrapper Component for Product Page */
export default function Product({ location, pid = 0 }) {
    /* Takes the product ID from the page history, if necessary */
    if (location.state && location.state.pid) {
      pid = location.state.pid.pid;
    }
  
    return (
      <div>
        <Header />
        <Welcome isLanding={false} />
        <ProductMain pid={pid} />
        <Footer />
      </div>
    )
}