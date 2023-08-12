import React from 'react'
import { Helmet } from 'react-helmet'
import DashboardHeader from '../components/DashboardHeader'
import Trucks from '../components/Trucks'

const TrucksBoard = () => {
  return (
    <>
    <section className="max-w-[2000px] h-screen mx-auto">
    <Helmet>
      <title>NTL | Բեռնատարներ</title>
    </Helmet>
      <DashboardHeader />
      <Trucks />
    </section>
  </>
  )
}

export default TrucksBoard
