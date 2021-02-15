import React from "react"
import Header from "./common/header"
import Footer from "./common/footer"
import Landing from "./landing/landing"
import Welcome from "./common/welcome"
import '../styles/style.scss'

/* Wrapper Component for the Landing Page */
export default function Home() {
  return (
    <div>
      <Header />
      <Welcome isLanding={true}/>
      <Landing />
      <Footer />
    </div>
  )
}
