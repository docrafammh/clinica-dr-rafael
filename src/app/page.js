import HeroSection from './components/HeroSection';
import SymptomsSection from './components/SymptomsSection';
import ProcessSection from './components/ProcessSection';
import DepoimentosSection from './components/DepoimentosSection';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import styles from './page.module.css';
import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.topBgSection}>
        <Image
          src="/drRafael-bg.jpeg"
          alt="Fundo Dr. Rafael"
          fill={false}
          width={1920}
          height={420}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className={styles.topBgImg}
          priority
        />
        <div className={styles.topBgGradient}></div>
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
