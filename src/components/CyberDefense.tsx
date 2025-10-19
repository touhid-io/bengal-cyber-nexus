import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Zap, 
  Brain, 
  Satellite, 
  Target, 
  Lock, 
  Eye, 
  Network,
  Radar,
  Command
} from 'lucide-react';

const defenseCapabilities = [
  {
    category: 'Cyber Warfare',
    icon: Shield,
    color: 'text-primary',
    items: [
      'AI-powered threat detection and response systems',
      'Quantum-resistant encryption protocols',
      'Autonomous cyber defense networks',
      'Real-time vulnerability assessment'
    ]
  },
  {
    category: 'Intelligence Operations',
    icon: Eye,
    color: 'text-accent',
    items: [
      'Advanced signal intelligence (SIGINT) capabilities',
      'Social media and digital footprint analysis',
      'Predictive threat modeling using machine learning',
      'Cross-border digital surveillance systems'
    ]
  },
  {
    category: 'Neuro Warfare',
    icon: Brain,
    color: 'text-warning',
    items: [
      'Cognitive influence operation frameworks',
      'Social engineering countermeasures',
      'Information warfare detection systems',
      'Psychological operations (PSYOPS) capabilities'
    ]
  },
  {
    category: 'Space Assets',
    icon: Satellite,
    color: 'text-success',
    items: [
      'Military satellite constellation',
      'Space-based surveillance systems',
      'Anti-satellite defense protocols',
      'Secure satellite communications network'
    ]
  }
];

const commandStructure = [
  {
    level: 'Strategic Command',
    description: 'National Cyber Defense Headquarters',
    responsibilities: ['Policy Development', 'Strategic Planning', 'International Coordination'],
    personnel: '200+ Elite Specialists'
  },
  {
    level: 'Operational Command',
    description: 'Regional Cyber Operations Centers',
    responsibilities: ['Threat Monitoring', 'Incident Response', 'Tactical Operations'],
    personnel: '500+ Cyber Warriors'
  },
  {
    level: 'Tactical Units',
    description: 'Specialized Response Teams',
    responsibilities: ['Active Defense', 'Penetration Testing', 'Digital Forensics'],
    personnel: '1000+ Field Operators'
  }
];

const CyberDefense = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-gradient-to-br from-background via-card/20 to-background cyber-grid">
      <div className="container-cyber">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-gradient-primary">Cyber Defense</span>
            <span className="text-cyber block text-2xl lg:text-3xl mt-2">&amp; Neuro Warfare</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced multi-domain defense capabilities combining cyber warfare, intelligence operations, 
            and psychological defense systems for comprehensive national security.
          </p>
        </div>

        {/* Defense Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {defenseCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            
            return (
              <Card key={index} className="card-cyber p-8 hover-lift group">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${capability.color.split('-')[1]}/20 to-${capability.color.split('-')[1]}/10 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${capability.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {capability.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {capability.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Target className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Command Structure */}
        <Card className="card-cyber p-8 mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient-primary">Command Structure</span>
          </h3>
          
          <div className="space-y-6">
            {commandStructure.map((level, index) => (
              <div key={index} className="relative">
                <Card className="card-cyber p-6 hover-lift">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Command className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div>
                        <h4 className="text-xl font-bold">{level.level}</h4>
                        <p className="text-accent font-medium">{level.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Key Responsibilities</h5>
                          <ul className="space-y-1">
                            {level.responsibilities.map((resp, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center space-x-2">
                                <span className="w-1 h-1 bg-primary rounded-full"></span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-2">Personnel</h5>
                          <p className="text-cyber font-mono">{level.personnel}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {index < commandStructure.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-primary/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Threat Assessment Matrix */}
        <Card className="card-cyber p-8">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient-primary">Threat Assessment Matrix</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { threat: 'Cyber Attacks', level: 'High', color: 'text-destructive', probability: 85 },
              { threat: 'Information Warfare', level: 'Medium', color: 'text-warning', probability: 65 },
              { threat: 'Space Threats', level: 'Low', color: 'text-success', probability: 35 }
            ].map((threat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className={`w-20 h-20 mx-auto rounded-full bg-${threat.color.split('-')[1]}/20 flex items-center justify-center`}>
                  <Radar className={`w-8 h-8 ${threat.color}`} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{threat.threat}</h4>
                  <p className={`text-sm font-medium ${threat.color}`}>{threat.level} Risk</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {threat.probability}% Probability
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CyberDefense;