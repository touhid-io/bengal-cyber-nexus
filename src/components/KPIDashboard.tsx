import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, DollarSign, Users, Zap, Shield, Target } from 'lucide-react';

interface KPI {
  id: string;
  title: string;
  value: number;
  target: number;
  unit: string;
  icon: any;
  color: string;
  description: string;
}

const kpis: KPI[] = [
  {
    id: 'gdp',
    title: 'GDP Target',
    value: 0,
    target: 850,
    unit: 'B USD',
    icon: DollarSign,
    color: 'text-primary',
    description: 'Projected GDP by 2041 through strategic transformation'
  },
  {
    id: 'jobs',
    title: 'High-Tech Jobs',
    value: 0,
    target: 5.2,
    unit: 'M+',
    icon: Users,
    color: 'text-accent',
    description: 'New technology sector employment opportunities'
  },
  {
    id: 'energy',
    title: 'Energy Independence',
    value: 0,
    target: 100,
    unit: '%',
    icon: Zap,
    color: 'text-success',
    description: 'Renewable and nuclear energy self-sufficiency'
  },
  {
    id: 'corruption',
    title: 'Corruption Reduction',
    value: 0,
    target: 85,
    unit: '%',
    icon: Shield,
    color: 'text-warning',
    description: 'Transparency improvement through digital governance'
  },
  {
    id: 'innovation',
    title: 'Innovation Index',
    value: 0,
    target: 92,
    unit: '/100',
    icon: TrendingUp,
    color: 'text-primary',
    description: 'Global competitiveness ranking improvement'
  },
  {
    id: 'defense',
    title: 'Defense Capability',
    value: 0,
    target: 78,
    unit: '/100',
    icon: Target,
    color: 'text-accent',
    description: 'Multi-domain defense readiness score'
  }
];

const KPIDashboard = () => {
  const [animatedKPIs, setAnimatedKPIs] = useState<KPI[]>(kpis);

  useEffect(() => {
    const animateCounters = () => {
      kpis.forEach((kpi, index) => {
        let currentValue = 0;
        const increment = kpi.target / 100;
        const duration = 2000; // 2 seconds
        const stepTime = duration / 100;
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= kpi.target) {
            currentValue = kpi.target;
            clearInterval(timer);
          }
          
          setAnimatedKPIs(prev => prev.map((item, i) => 
            i === index ? { ...item, value: currentValue } : item
          ));
        }, stepTime);
      });
    };

    // Start animation after component mounts
    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  const getRiskLevel = (percentage: number) => {
    if (percentage >= 80) return { color: 'text-success', bg: 'bg-success/20', label: 'Low Risk' };
    if (percentage >= 60) return { color: 'text-warning', bg: 'bg-warning/20', label: 'Medium Risk' };
    return { color: 'text-destructive', bg: 'bg-destructive/20', label: 'High Risk' };
  };

  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container-cyber">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-gradient-primary">Strategic</span>
            <span className="text-cyber block text-2xl lg:text-3xl mt-2">KPI Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time monitoring of transformation metrics and strategic objectives for Bangladesh 2.0 implementation.
          </p>
        </div>

        {/* Main KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {animatedKPIs.map((kpi) => {
            const Icon = kpi.icon;
            const percentage = (kpi.value / kpi.target) * 100;
            
            return (
              <Card key={kpi.id} className="card-cyber p-6 hover-lift group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Icon className={`w-8 h-8 ${kpi.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-xs text-cyber font-mono">
                      {percentage.toFixed(0)}%
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2">{kpi.title}</h3>
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-3xl font-black ${kpi.color}`}>
                        {kpi.value.toFixed(1)}
                      </span>
                      <span className="text-sm text-muted-foreground font-mono">
                        {kpi.unit}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>Target: {kpi.target}{kpi.unit}</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          kpi.color.includes('primary') ? 'bg-primary' :
                          kpi.color.includes('accent') ? 'bg-accent' :
                          kpi.color.includes('success') ? 'bg-success' :
                          kpi.color.includes('warning') ? 'bg-warning' : 'bg-primary'
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    {kpi.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Risk Matrix */}
        <Card className="card-cyber p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="text-gradient-primary">Implementation Risk Matrix</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Political Stability', 'Economic Transition', 'Technology Adoption'].map((category, index) => {
              const risks = [
                { level: 78, label: 'Low Risk' },
                { level: 65, label: 'Medium Risk' }, 
                { level: 82, label: 'Low Risk' }
              ];
              const risk = risks[index];
              const riskData = getRiskLevel(risk.level);
              
              return (
                <div key={category} className="text-center space-y-4">
                  <h4 className="font-semibold text-lg">{category}</h4>
                  <div className={`w-20 h-20 mx-auto rounded-full ${riskData.bg} flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${riskData.color}`}>
                      {risk.level}%
                    </span>
                  </div>
                  <p className={`text-sm font-medium ${riskData.color}`}>
                    {riskData.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default KPIDashboard;