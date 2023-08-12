import React from 'react'
import { Helmet } from 'react-helmet'
import Trucks from '../components/Trucks'
import Header from '../components/Header'

const TrucksBoard = () => {
  return (
    <>
    <section className="max-w-[2000px] h-screen mx-auto">
    <Helmet>
      <title>NTL | Բեռնատարներ</title>
    </Helmet>
      <Header />
      <Trucks />
    </section>
  </>
  )
}

export default TrucksBoard
