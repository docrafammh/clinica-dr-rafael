'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../page.module.css';

export default function Header() {
  const [hash, setHash] = useState('');


  useEffect(() => {
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <span className={styles.logo}>RIGATTI</span>
          <span className={styles.tagline}>DESPERTE SUA FORÇA REAL</span>
        </div>
        <nav className={styles.nav}>
          <Link
            href="/#hero"
            className={hash === '#hero' ? styles.active : ''}
            onClick={() => setHash('#hero')}
          >
            INÍCIO
          </Link>
          <Link
            href="/#symptoms"
            className={hash === '#sintomas' ? styles.active : ''}
            onClick={() => setHash('#sintomas')}
          >
            SINTOMAS
          </Link>
          <Link
            href="/#results"
            className={hash === '#resultados' ? styles.active : ''}
            onClick={() => setHash('#resultados')}
          >
            RESULTADOS
          </Link>
          <Link
            href="/#about"
            className={hash === '#sobre' ? styles.active : ''}
            onClick={() => setHash('#sobre')}
          >
            SOBRE
          </Link>
          <Link
            href="/#faq"
            className={hash === '#faq' ? styles.active : ''}
            onClick={() => setHash('#faq')}
          >
            FAQ
          </Link>
        </nav>
      </header>
    </div>
  );
} 