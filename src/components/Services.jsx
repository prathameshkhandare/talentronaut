'use client';

import { useEffect, useRef } from 'react';
import styles from './Services.module.css';

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateItem}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${styles.animateItem}`}>
          <span className={styles.tag}>Services Hub</span>
          <h2 className={styles.title}>
            Everything You Need to <span className={styles.highlight}>Succeed</span>
          </h2>
          <p className={styles.subtitle}>
            Access our comprehensive suite of career development tools and expert guidance
          </p>
        </div>

        {/* Service Cards */}
        <div className={styles.cards}>
          {/* Card 1 - Career Database */}
          <div className={`${styles.card} ${styles.cardPrimary} ${styles.animateItem}`}>
            <div className={styles.cardBadge}>Most Popular</div>
            <div className={styles.cardIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <line x1="12" y1="6" x2="16" y2="6"/>
                <line x1="12" y1="10" x2="16" y2="10"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Career Growth Database</h3>
            <p className={styles.cardDescription}>
              Access 1,001+ curated career development strategies and success blueprints from industry leaders.
            </p>
            <div className={styles.cardFeatures}>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>1,001+ Career Strategies</span>
              </div>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Industry Insights</span>
              </div>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Unlimited Access</span>
              </div>
            </div>
            <div className={styles.cardPricing}>
              <span className={styles.price}>$200</span>
              <span className={styles.pricePeriod}>/ lifetime access</span>
            </div>
            <button className={styles.cardButton}>
              Get Access
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Card 2 - Expert Consultation */}
          <div className={`${styles.card} ${styles.cardSecondary} ${styles.animateItem}`}>
            <div className={styles.cardIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Expert Consultation</h3>
            <p className={styles.cardDescription}>
              Connect directly with 40+ industry experts for personalized career guidance and mentorship.
            </p>
            <div className={styles.cardFeatures}>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>40+ Industry Experts</span>
              </div>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>1-on-1 Sessions</span>
              </div>
              <div className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Personalized Roadmap</span>
              </div>
            </div>
            <div className={styles.cardPricing}>
              <span className={styles.price}>$100</span>
              <span className={styles.pricePeriod}>/ per session</span>
            </div>
            <button className={`${styles.cardButton} ${styles.cardButtonOutline}`}>
              Book Session
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
