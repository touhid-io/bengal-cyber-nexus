import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Shield, 
  Building, 
  Zap, 
  Users, 
  Globe, 
  Brain, 
  Factory, 
  Leaf, 
  GraduationCap, 
  Heart, 
  Scale, 
  Target 
} from 'lucide-react';

const pillars = [
  {
    id: 1,
    title: "Cyber Defense & Security",
    icon: Shield,
    description: "Advanced cybersecurity infrastructure with AI-powered threat detection and quantum-resistant protocols.",
    details: "Implementation of BARPA (Bangladesh Advanced Research Projects Agency) to develop cutting-edge cyber warfare capabilities and national digital security framework."
  },
  {
    id: 2,
    title: "Digital Governance",
    icon: Building,
    description: "Blockchain-based transparent governance with smart contracts for policy implementation.",
    details: "Three-layer governance stack (L1-L3) ensuring institutional transparency, automated compliance, and citizen-centric service delivery."
  },
  {
    id: 3,
    title: "Energy Innovation",
    icon: Zap,
    description: "Nuclear and renewable energy fusion for energy independence and regional export capabilities.",
    details: "Strategic energy diversification combining nuclear reactors, solar arrays, and hydroelectric systems to achieve 100% energy independence by 2035."
  },
  {
    id: 4,
    title: "Human Capital",
    icon: Users,
    description: "Advanced STEM education and diaspora integration programs for talent retention.",
    details: "Comprehensive talent development ecosystem with AI-assisted learning, international collaboration, and reverse brain drain initiatives."
  },
  {
    id: 5,
    title: "Economic Zones",
    icon: Globe,
    description: "Quantum Economic Zones (QEZ) with AI-driven industrial automation and export optimization.",
    details: "High-tech manufacturing hubs with autonomous systems, blockchain supply chains, and direct integration with global markets."
  },
  {
    id: 6,
    title: "AI & Automation",
    icon: Brain,
    description: "National AI infrastructure for predictive governance and automated decision-making.",
    details: "Large-scale AI deployment across government, industry, and public services with ethical AI frameworks and human oversight protocols."
  },
  {
    id: 7,
    title: "Manufacturing 4.0",
    icon: Factory,
    description: "Smart factories with IoT integration and autonomous production systems.",
    details: "Next-generation manufacturing with robotics, 3D printing, and real-time supply chain optimization for global competitiveness."
  },
  {
    id: 8,
    title: "Sustainability",
    icon: Leaf,
    description: "Carbon-negative policies with advanced environmental monitoring and restoration.",
    details: "Comprehensive environmental strategy including green technology adoption, ecosystem restoration, and climate resilience infrastructure."
  },
  {
    id: 9,
    title: "Education Revolution",
    icon: GraduationCap,
    description: "AI-powered personalized learning and global knowledge partnerships.",
    details: "Digital education transformation with virtual reality classrooms, AI tutors, and international university collaborations."
  },
  {
    id: 10,
    title: "Healthcare Innovation",
    icon: Heart,
    description: "Telemedicine infrastructure and AI-assisted diagnostics for universal healthcare.",
    details: "National health network with predictive medicine, genetic therapy research, and rural healthcare access through digital platforms."
  },
  {
    id: 11,
    title: "Legal Framework",
    icon: Scale,
    description: "Digital law enforcement with blockchain evidence systems and AI-assisted judiciary.",
    details: "Modernized legal system with smart contracts, digital identity verification, and automated compliance monitoring."
  },
  {
    id: 12,
    title: "Strategic Defense",
    icon: Target,
    description: "Multi-domain defense capabilities with space-based assets and autonomous systems.",
    details: "Comprehensive defense modernization including satellite networks, AI-powered surveillance, and regional security partnerships."
  }
];

const PillarGrid = () => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container-cyber">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-gradient-primary">12-Pillar</span>
            <span className="text-cyber block text-2xl lg:text-3xl mt-2">Strategic Model</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive transformation framework designed to position Bangladesh as a regional technological superpower by 2041.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === pillar.id;
            
            return (
              <Card
                key={pillar.id}
                className={`card-cyber p-6 cursor-pointer transition-all duration-300 hover-lift group ${
                  isSelected ? 'ring-2 ring-primary shadow-primary' : ''
                }`}
                onClick={() => setSelectedPillar(isSelected ? null : pillar.id)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Icon className={`w-8 h-8 transition-colors duration-300 ${
                      isSelected ? 'text-primary' : 'text-accent group-hover:text-primary'
                    }`} />
                    <span className="text-xs text-cyber font-mono">#{pillar.id.toString().padStart(2, '0')}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  {isSelected && (
                    <div className="pt-4 border-t border-border animate-slide-up">
                      <p className="text-sm text-foreground leading-relaxed">
                        {pillar.details}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarGrid;