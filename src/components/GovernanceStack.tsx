import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Database, 
  Shield, 
  Users, 
  Building, 
  Network, 
  FileText, 
  CheckCircle, 
  Eye,
  Zap
} from 'lucide-react';

const governanceLayers = [
  {
    id: 'l1',
    title: 'Layer 1: Foundational Infrastructure',
    subtitle: 'Core Systems & Identity',
    description: 'Blockchain-based identity management, secure voting systems, and immutable record keeping.',
    features: [
      'Quantum-resistant cryptographic identity verification',
      'Distributed ledger for all government transactions',
      'Smart contract automation for policy implementation',
      'Real-time transparency dashboards for public access'
    ],
    technologies: ['Blockchain', 'Quantum Cryptography', 'Smart Contracts', 'DLT'],
    icon: Database,
    color: 'text-primary'
  },
  {
    id: 'l2',
    title: 'Layer 2: Operational Excellence',
    subtitle: 'Process Automation & AI',
    description: 'AI-powered decision support, automated compliance monitoring, and predictive governance.',
    features: [
      'Machine learning for policy impact prediction',
      'Automated regulatory compliance checking',
      'Natural language processing for citizen queries',
      'Predictive analytics for resource allocation'
    ],
    technologies: ['AI/ML', 'NLP', 'Predictive Analytics', 'RPA'],
    icon: Zap,
    color: 'text-accent'
  },
  {
    id: 'l3',
    title: 'Layer 3: Citizen Interface',
    subtitle: 'Engagement & Services',
    description: 'Unified digital services platform with personalized citizen experiences and real-time feedback.',
    features: [
      'Single digital identity for all government services',
      'AI-powered chatbots for 24/7 citizen support',
      'Personalized service recommendations',
      'Real-time service delivery tracking'
    ],
    technologies: ['API Gateway', 'Microservices', 'Progressive Web Apps', 'AI Chatbots'],
    icon: Users,
    color: 'text-success'
  }
];

const institutionalFramework = [
  {
    name: 'BARPA (Bangladesh Advanced Research Projects Agency)',
    role: 'Strategic Technology Development',
    description: 'Leading-edge research and development for national security and technological advancement.',
    focus: ['AI/ML Research', 'Quantum Computing', 'Cyber Warfare', 'Space Technology']
  },
  {
    name: 'Digital Governance Council',
    role: 'Policy Implementation',
    description: 'Oversight and coordination of digital transformation across all government sectors.',
    focus: ['Policy Development', 'Standards Setting', 'Compliance Monitoring', 'Change Management']
  },
  {
    name: 'Cyber Defense Command',
    role: 'National Security',
    description: 'Protection of critical infrastructure and digital assets from cyber threats.',
    focus: ['Threat Intelligence', 'Incident Response', 'Security Operations', 'Training']
  },
  {
    name: 'Innovation Acceleration Unit',
    role: 'Economic Development',
    description: 'Fostering public-private partnerships and startup ecosystem development.',
    focus: ['Startup Incubation', 'Technology Transfer', 'Investment Facilitation', 'Skills Development']
  }
];

const GovernanceStack = () => {
  const [activeLayer, setActiveLayer] = useState('l1');

  return (
    <section className="section-padding">
      <div className="container-cyber">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-gradient-primary">Governance</span>
            <span className="text-cyber block text-2xl lg:text-3xl mt-2">Stack Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A three-layer digital governance framework ensuring transparency, efficiency, and citizen-centric service delivery.
          </p>
        </div>

        {/* Layer Visualization */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {governanceLayers.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;
              
              return (
                <Card
                  key={layer.id}
                  className={`card-cyber p-6 cursor-pointer transition-all duration-500 hover-lift ${
                    isActive ? 'ring-2 ring-primary shadow-primary scale-105' : ''
                  }`}
                  onClick={() => setActiveLayer(layer.id)}
                >
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-${layer.color.split('-')[1]}/20 to-${layer.color.split('-')[1]}/10 flex items-center justify-center mb-4`}>
                        <Icon className={`w-8 h-8 ${layer.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{layer.title}</h3>
                      <p className={`text-sm font-medium ${layer.color}`}>{layer.subtitle}</p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      {layer.description}
                    </p>
                    
                    {isActive && (
                      <div className="space-y-4 animate-slide-up">
                        <div>
                          <h4 className="font-semibold mb-3 text-center">Key Features</h4>
                          <ul className="space-y-2">
                            {layer.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-center">Technologies</h4>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {layer.technologies.map((tech, idx) => (
                              <span key={idx} className="text-xs px-2 py-1 bg-muted/30 rounded-md text-cyber">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Institutional Framework */}
        <Card className="card-cyber p-8">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient-primary">Institutional Framework</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {institutionalFramework.map((institution, index) => (
              <Card key={index} className="card-cyber p-6 hover-lift">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-bold text-lg">{institution.name}</h4>
                      <p className="text-sm text-accent">{institution.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {institution.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Focus Areas</h5>
                    <div className="flex flex-wrap gap-2">
                      {institution.focus.map((area, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Implementation Timeline */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">
            <span className="text-gradient-primary">Implementation Roadmap</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['Foundation', 'Integration', 'Optimization', 'Innovation'].map((phase, index) => (
              <div key={phase} className="relative">
                <div className="card-cyber p-4 text-center">
                  <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-sm">{phase}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {2025 + index * 4}-{2025 + (index + 1) * 4}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceStack;