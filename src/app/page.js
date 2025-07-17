import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SymptomsSection from './components/SymptomsSection';
import ProcessSection from './components/ProcessSection';
import DepoimentosSection from './components/DepoimentosSection';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HeroSection />
      <SymptomsSection />
      <ProcessSection />
      <DepoimentosSection />
      <AboutSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
