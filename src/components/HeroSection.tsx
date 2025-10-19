import { useState, useEffect } from 'react';
import { ChevronDown, Download, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "From Delta State to Delta Force",
    "Strategic Institutional Reconfiguration",
    "Regional Ascendancy Through Innovation",
    "Bangladesh 2.0: The Digital Revolution"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Futuristic Bangladesh"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Shield className="w-12 h-12 text-primary opacity-60" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <Zap className="w-8 h-8 text-accent opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-primary rounded-full animate-glow" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container-cyber text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <h1 className="text-6xl lg:text-8xl font-black tracking-tight">
            <span className="text-gradient-primary">Bangladesh</span>
            <span className="text-cyber block text-4xl lg:text-5xl mt-2">2.0</span>
          </h1>
          
          {/* Animated subtitle */}
          <div className="h-20 flex items-center justify-center">
            <p className="text-2xl lg:text-4xl font-bold text-glow transition-all duration-500">
              {heroTexts[currentText]}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive strategic framework for transforming Bangladesh into a regional technological 
            superpower through institutional innovation, cyber defense capabilities, and digital governance.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button className="btn-cyber text-lg px-8 py-4">
              <Download className="w-5 h-5 mr-2" />
              Download Full Whitepaper
            </Button>
            <Button variant="outline" className="btn-ghost-cyber text-lg px-8 py-4">
              Explore Vision
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;