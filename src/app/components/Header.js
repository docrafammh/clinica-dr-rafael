'use client';
import { useEffect, useState } from 'react';
import styles from '../page.module.css';

const navLinks = [
  { href: '#hero', label: 'INÍCIO' },
  { href: '#symptoms', label: 'SINTOMAS' },
  { href: '#results', label: 'RESULTADOS' },
  { href: '#about', label: 'SOBRE' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setHash(href);
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <span className={styles.logo}>RIGATTI</span>
          <span className={styles.tagline}>DESPERTE SUA FORÇA REAL</span>
        </div>
        <nav className={styles.nav}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={hash === link.href ? styles.active : ''}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
} 