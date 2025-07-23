import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SymptomsSection from './components/SymptomsSection';
import ProcessSection from './components/ProcessSection';
import DepoimentosSection from './components/DepoimentosSection';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Logo" width={300} height={150} />
      </div>
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
