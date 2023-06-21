import Header from "../components/Header";
import HomePage from "../components/Home";
import Features from "../components/Featured";
import AutomatedWidgets from "../components/AutomatedWidgets";
import Customizable from "../components/Customizable";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Plans from "../components/Plans";

export default function Home() {
  return (
    <section className="reletive max-w-[1600px] w-full mx-auto">
      <Header />
      <main className={`w-full min-h-screen`}>
        <HomePage />
        <Features />
        <AutomatedWidgets />
        <Customizable />
        <Calendar />
        <Plans />
        <Footer />
      </main>
    </section>
  );
}
