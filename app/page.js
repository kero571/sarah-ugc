import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";
import About from "@/components/sections/About";
import Offer from "@/components/sections/Offer";
import Videos from "@/components/sections/Videos";
import Day from "@/components/sections/Day";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { SITE } from "@/lib/site";
import { OFFERS } from "@/data/content";

const jsonLd = [
  { "@context": "https://schema.org", "@type": "WebSite", name: SITE.brand, url: SITE.url },
  { "@context": "https://schema.org", "@type": "Person", name: SITE.name, jobTitle: "UGC Creator", url: SITE.url, image: `${SITE.url}/profile.jpg`, email: SITE.email },
  {
    "@context": "https://schema.org", "@type": "ProfessionalService", name: SITE.brand, url: SITE.url, image: `${SITE.url}/profile.jpg`, description: SITE.description,
    hasOfferCatalog: { "@type": "OfferCatalog", name: "UGC services", itemListElement: OFFERS.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o.title, description: o.text } })) },
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <About />
        <Offer />
        <Videos />
        {/* <Day /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
