import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import PillarGrid from '@/components/PillarGrid';
import KPIDashboard from '@/components/KPIDashboard';
import GovernanceStack from '@/components/GovernanceStack';
import CyberDefense from '@/components/CyberDefense';
import TimelineSlider from '@/components/TimelineSlider';
import DiasporaMap from '@/components/DiasporaMap';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior and animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <PillarGrid />
      <KPIDashboard />
      <GovernanceStack />
      <CyberDefense />
      <TimelineSlider />
      <DiasporaMap />
      <Footer />
    </div>
  );
};

export default Index;
