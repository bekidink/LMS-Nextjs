import NonDashboardNavbar from "@/components/nonDashboardNavbar";
import Image from "next/image";
import LandingPage from "@/app/(nondashboard)/landing/page"
import Footer from "@/components/Footer";
export default function Home() {
  return <div className="nondashboard-layout">
    <NonDashboardNavbar/>
    <main className="nondashboard-layout__main">
<LandingPage/>
    </main>
    <Footer/>
  </div>;
}
