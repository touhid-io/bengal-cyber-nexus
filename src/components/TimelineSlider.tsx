import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar, Target, Zap } from 'lucide-react';

const phases = [
  {
    id: 1,
    title: 'Phase 1: Foundation',
    period: '2025-2029',
    subtitle: 'Digital Infrastructure & Institutional Setup',
    description: 'Establishing core digital infrastructure, launching BARPA, and implementing foundational governance systems.',
    objectives: [
      'Launch Bangladesh Advanced Research Projects Agency (BARPA)',
      'Deploy Layer 1 governance infrastructure with blockchain identity',
      'Establish 5 Quantum Economic Zones (QEZ) with AI automation',
      'Achieve 40% renewable energy integration',
      'Train 500,000 citizens in digital literacy programs'
    ],
    milestones: [
      { year: '2025', event: 'BARPA establishment and first cyber defense units' },
      { year: '2026', event: 'National digital identity system deployment' },
      { year: '2027', event: 'First QEZ operational with 100% automation' },
      { year: '2028', event: 'Quantum-resistant security protocols implemented' },
      { year: '2029', event: '50% government services digitized' }
    ],
    investment: '$45B',
    jobs: '1.2M',
    gdpGrowth: '8.5%'
  },
  {
    id: 2,
    title: 'Phase 2: Integration',
    period: '2029-2033',
    subtitle: 'AI Implementation & Regional Expansion',
    description: 'Large-scale AI deployment across government and industry, with regional leadership initiatives.',
    objectives: [
      'Deploy AI-powered governance systems across all ministries',
      'Establish regional space program with satellite constellation',
      'Achieve 70% energy independence through nuclear + renewables',
      'Launch diaspora integration programs for talent return',
      'Become regional hub for high-tech manufacturing'
    ],
    milestones: [
      { year: '2029', event: 'AI governance systems operational' },
      { year: '2030', event: 'First Bangladesh satellite launched' },
      { year: '2031', event: 'Nuclear energy program begins operation' },
      { year: '2032', event: 'Regional tech hub status achieved' },
      { year: '2033', event: '10 QEZs operational with full automation' }
    ],
    investment: '$75B',
    jobs: '2.1M',
    gdpGrowth: '10.2%'
  },
  {
    id: 3,
    title: 'Phase 3: Optimization',
    period: '2033-2037',
    subtitle: 'Advanced Systems & Global Integration',
    description: 'Optimizing all systems with advanced AI, establishing global partnerships, and achieving technological leadership.',
    objectives: [
      'Implement quantum computing infrastructure for government',
      'Achieve 100% corruption-free governance through automation',
      'Establish advanced manufacturing for global export',
      'Launch neuro-warfare defense capabilities',
      'Become net energy exporter to neighboring countries'
    ],
    milestones: [
      { year: '2033', event: 'Quantum computing centers operational' },
      { year: '2034', event: 'Zero-corruption governance achieved' },
      { year: '2035', event: 'Energy export programs launched' },
      { year: '2036', event: 'Advanced defense systems deployed' },
      { year: '2037', event: 'Global tech partnerships established' }
    ],
    investment: '$95B',
    jobs: '3.5M',
    gdpGrowth: '12.8%'
  },
  {
    id: 4,
    title: 'Phase 4: Innovation Leadership',
    period: '2037-2041',
    subtitle: 'Regional Superpower Status',
    description: 'Achieving regional technological superpower status with advanced capabilities in all domains.',
    objectives: [
      'Lead South Asian technological innovation ecosystem',
      'Deploy advanced space-based defense systems',
      'Achieve $850B GDP through high-tech industries',
      'Establish regional cyber defense alliance',
      'Complete transformation to post-industrial economy'
    ],
    milestones: [
      { year: '2037', event: 'Regional innovation leadership achieved' },
      { year: '2038', event: 'Space-based defense systems operational' },
      { year: '2039', event: '$750B GDP milestone reached' },
      { year: '2040', event: 'Regional defense alliance established' },
      { year: '2041', event: 'Bangladesh 2.0 transformation complete' }
    ],
    investment: '$120B',
    jobs: '5.2M',
    gdpGrowth: '15.3%'
  }
];

const TimelineSlider = () => {
  const [currentPhase, setCurrentPhase] = useState(0);

  const nextPhase = () => {
    setCurrentPhase((prev) => (prev + 1) % phases.length);
  };

  const prevPhase = () => {
    setCurrentPhase((prev) => (prev - 1 + phases.length) % phases.length);
  };

  const phase = phases[currentPhase];

  return (
    <section className="section-padding bg-gradient-to-br from-muted/5 via-background to-muted/5">
      <div className="container-cyber">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-gradient-primary">Implementation</span>
            <span className="text-cyber block text-2xl lg:text-3xl mt-2">Timeline 2025-2041</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive 16-year roadmap for transforming Bangladesh into a regional technological superpower.
          </p>
        </div>

        {/* Phase Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={prevPhase} className="btn-ghost-cyber">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {phases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhase(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPhase ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            <Button variant="outline" onClick={nextPhase} className="btn-ghost-cyber">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Main Phase Display */}
        <Card className="card-cyber p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phase Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-cyber font-mono">{phase.period}</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{phase.title}</h3>
                <p className="text-xl text-accent font-medium mb-4">{phase.subtitle}</p>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Strategic Objectives</span>
                </h4>
                <ul className="space-y-3">
                  {phase.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Zap className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="space-y-6">
              <div className="card-cyber p-6">
                <h4 className="text-lg font-bold mb-4 text-center">Key Metrics</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-primary">{phase.investment}</div>
                    <div className="text-xs text-muted-foreground">Total Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-accent">{phase.jobs}</div>
                    <div className="text-xs text-muted-foreground">New Jobs Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-success">{phase.gdpGrowth}</div>
                    <div className="text-xs text-muted-foreground">Annual GDP Growth</div>
                  </div>
                </div>
              </div>

              <div className="card-cyber p-6">
                <h4 className="text-lg font-bold mb-4 text-center">Progress</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Completion</span>
                    <span>{currentPhase === 3 ? '100%' : `${(currentPhase + 1) * 25}%`}</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div 
                      className="h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                      style={{ width: `${currentPhase === 3 ? 100 : (currentPhase + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Milestones Timeline */}
        <Card className="card-cyber p-8">
          <h4 className="text-2xl font-bold mb-6 text-center">
            <span className="text-gradient-primary">Key Milestones</span>
          </h4>
          
          <div className="space-y-4">
            {phase.milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 text-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xs font-bold text-primary">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 p-4 card-cyber">
                  <p className="text-sm">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TimelineSlider;