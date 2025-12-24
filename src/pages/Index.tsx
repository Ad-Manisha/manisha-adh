import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Manisha Adhikari | Software Engineer & Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Manisha Adhikari - Final year Software Engineering student passionate about web development and AI/ML. Based in Nepal."
        />
        <meta name="keywords" content="Manisha Adhikari, Software Engineer, Web Developer, React, Next.js, Nepal, Portfolio" />
        <meta property="og:title" content="Manisha Adhikari | Software Engineer & Web Developer" />
        <meta
          property="og:description"
          content="Final year Software Engineering student passionate about web development and AI/ML. Based in Nepal."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://manisha-adhikari.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
