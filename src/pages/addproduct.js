import React from "react"
import Header from "./common/header"
import Footer from "./common/footer"
import Welcome from "./common/welcome"
import '../styles/style.scss'
import AddProductMain from "./addproduct/addProductMain"

/* Wrapper Component for the Landing Page */
export default function AddProduct() {
  return (
    <div>
      <Header />
      <Welcome isLanding={false}/>
      <AddProductMain />
      <Footer />
    </div>
  )
}
