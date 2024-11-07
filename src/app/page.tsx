import Feature from "./components/Feature";
import FooterSection from "./components/Footer";
import Hero from "./components/Hero";
import Navigate from "./components/Navigate";
import Recent from "./components/Recent";

export default function Home() {
    return (
        <div className="bg">
            <Navigate />
            <Hero />
            <Recent />
            <Feature />
            <FooterSection />
        </div>
    );
}
