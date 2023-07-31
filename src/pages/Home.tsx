import Header from "../components/Header";
import HomePage from "../components/Home";
import Features from "../components/Featured";
import AutomatedWidgets from "../components/AutomatedWidgets";
import Customizable from "../components/Customizable";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Plans from "../components/Plans";
import { Helmet } from 'react-helmet';
import HomeComp from "../components/HomeComp";
import PricingTables from "../components/PricingTables";

export default function Home() {
  return (
    <section className="reletive max-w-[1600px] w-full mx-auto">
       <Helmet>
        <title>{`Գլխավոր`}</title>
      </Helmet>
      <Header />
      <main className={`w-full min-h-screen`}>
        <HomeComp />
        <Features />
        <AutomatedWidgets />
        <Customizable />
        <Calendar />
        {/* <PricingTables /> */}
        <Footer />
      </main>
    </section>
  );
}
