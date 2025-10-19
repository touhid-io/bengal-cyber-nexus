import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Users, 
  Plane, 
  TrendingUp, 
  DollarSign, 
  GraduationCap,
  Building,
  Globe
} from 'lucide-react';

const diasporaRegions = [
  {
    region: 'North America',
    countries: ['USA', 'Canada'],
    population: '1.2M',
    averageIncome: '$75K',
    topSkills: ['Tech', 'Healthcare', 'Finance'],
    returnPotential: 'High',
    color: 'text-primary',
    coordinates: { x: 25, y: 35 }
  },
  {
    region: 'Europe',
    countries: ['UK', 'Germany', 'Italy'],
    population: '800K',
    averageIncome: '$68K',
    topSkills: ['Engineering', 'Research', 'Business'],
    returnPotential: 'Medium',
    color: 'text-accent',
    coordinates: { x: 55, y: 30 }
  },
  {
    region: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Qatar'],
    population: '2.1M',
    averageIncome: '$45K',
    topSkills: ['Construction', 'Oil & Gas', 'Services'],
    returnPotential: 'High',
    color: 'text-success',
    coordinates: { x: 65, y: 45 }
  },
  {
    region: 'Asia Pacific',
    countries: ['Singapore', 'Malaysia', 'Australia'],
    population: '650K',
    averageIncome: '$58K',
    topSkills: ['Tech', 'Trade', 'Education'],
    returnPotential: 'Medium',
    color: 'text-warning',
    coordinates: { x: 75, y: 55 }
  }
];

const qezLocations = [
  {
    name: 'Dhaka Tech Valley',
    focus: 'AI & Software Development',
    investment: '$15B',
    jobs: '500K',
    coordinates: { x: 72, y: 48 }
  },
  {
    name: 'Chittagong Maritime Hub',
    focus: 'Logistics & Manufacturing',
    investment: '$22B',
    jobs: '750K',
    coordinates: { x: 73, y: 52 }
  },
  {
    name: 'Sylhet Aerospace Center',
    focus: 'Space Technology',
    investment: '$8B',
    jobs: '200K',
    coordinates: { x: 73, y: 46 }
  },
  {
    name: 'Khulna Green Energy',
    focus: 'Renewable Energy',
    investment: '$12B',
    jobs: '300K',
    coordinates: { x: 70, y: 50 }
  }
];

const incentivePrograms = [
  {
    title: 'Elite Talent Return Program',
    target: 'PhD holders & Senior Executives',
    benefits: ['Tax exemption for 10 years', 'Dual citizenship', 'Housing subsidies', 'Research grants'],
    expectedReturn: '50K professionals'
  },
  {
    title: 'Entrepreneur Repatriation',
    target: 'Business owners & Investors',
    benefits: ['100% foreign ownership', 'Fast-track licensing', 'Government co-investment', 'Export incentives'],
    expectedReturn: '15K entrepreneurs'
  },
  {
    title: 'Youth Reverse Migration',
    target: 'Recent graduates & Young professionals',
    benefits: ['Student loan forgiveness', 'Career fast-track', 'Startup incubation', 'Digital nomad visas'],
    expectedReturn: '200K young professionals'
  }
];

const DiasporaMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [showQEZ, setShowQEZ] = useState(false);

  return (
    <section className="section-padding">
      <div className="container-cyber">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-gradient-primary">Diaspora</span>
            <span className="text-cyber block text-2xl lg:text-3xl mt-2">Integration Strategy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reverse brain drain initiatives to bring back 5+ million skilled Bangladeshi professionals 
            through strategic incentives and world-class opportunities.
          </p>
        </div>

        {/* Interactive World Map */}
        <Card className="card-cyber p-8 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">
              <span className="text-gradient-primary">Global Diaspora Map</span>
            </h3>
            <div className="flex space-x-4">
              <Button 
                variant={showQEZ ? "outline" : "default"}
                onClick={() => setShowQEZ(!showQEZ)}
                className={showQEZ ? "btn-ghost-cyber" : "btn-cyber"}
              >
                <Building className="w-4 h-4 mr-2" />
                QEZ Locations
              </Button>
            </div>
          </div>
          
          {/* Simplified World Map Visualization */}
          <div className="relative w-full h-96 bg-gradient-to-br from-muted/10 to-muted/5 rounded-lg overflow-hidden">
            {/* World map background pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 100 60" className="w-full h-full">
                {/* Simplified continents outline */}
                <path 
                  d="M10,20 Q30,15 50,25 Q70,20 90,30 L90,50 Q70,45 50,35 Q30,40 10,35 Z" 
                  fill="none" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="0.5"
                />
              </svg>
            </div>

            {/* Diaspora Region Markers */}
            {diasporaRegions.map((region, index) => (
              <div
                key={index}
                className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                  selectedRegion === region.region ? 'scale-125' : 'hover:scale-110'
                } transition-all duration-300`}
                style={{ 
                  left: `${region.coordinates.x}%`, 
                  top: `${region.coordinates.y}%` 
                }}
                onClick={() => setSelectedRegion(selectedRegion === region.region ? null : region.region)}
              >
                <div className={`w-4 h-4 rounded-full ${region.color.replace('text-', 'bg-')} animate-pulse`}>
                  <div className={`w-8 h-8 rounded-full ${region.color.replace('text-', 'bg-')}/20 -m-2 animate-ping`}></div>
                </div>
                <div className="text-xs font-bold mt-1 text-center whitespace-nowrap">
                  {region.region}
                </div>
              </div>
            ))}

            {/* QEZ Markers */}
            {showQEZ && qezLocations.map((qez, index) => (
              <div
                key={index}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-300"
                style={{ 
                  left: `${qez.coordinates.x}%`, 
                  top: `${qez.coordinates.y}%` 
                }}
              >
                <div className="w-3 h-3 bg-accent rounded-full animate-glow">
                  <div className="w-6 h-6 bg-accent/20 rounded-full -m-1.5 animate-pulse"></div>
                </div>
                <div className="text-xs font-bold mt-1 text-center whitespace-nowrap text-accent">
                  {qez.name}
                </div>
              </div>
            ))}

            {/* Migration Flow Lines */}
            {selectedRegion && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" />
                  </marker>
                </defs>
                {diasporaRegions
                  .filter(region => region.region === selectedRegion)
                  .map((region, index) => (
                    <line
                      key={index}
                      x1={`${region.coordinates.x}%`}
                      y1={`${region.coordinates.y}%`}
                      x2="72%"
                      y2="48%"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      markerEnd="url(#arrowhead)"
                      className="animate-pulse"
                    />
                  ))}
              </svg>
            )}
          </div>
        </Card>

        {/* Region Details */}
        {selectedRegion && (
          <Card className="card-cyber p-8 mb-12 animate-slide-up">
            {diasporaRegions
              .filter(region => region.region === selectedRegion)
              .map((region, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3 space-y-4">
                    <h3 className="text-3xl font-bold flex items-center space-x-3">
                      <MapPin className={`w-8 h-8 ${region.color}`} />
                      <span>{region.region}</span>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <Users className={`w-8 h-8 ${region.color} mx-auto mb-2`} />
                        <div className="text-2xl font-bold">{region.population}</div>
                        <div className="text-sm text-muted-foreground">Total Population</div>
                      </div>
                      <div className="text-center">
                        <DollarSign className={`w-8 h-8 ${region.color} mx-auto mb-2`} />
                        <div className="text-2xl font-bold">{region.averageIncome}</div>
                        <div className="text-sm text-muted-foreground">Average Income</div>
                      </div>
                      <div className="text-center">
                        <TrendingUp className={`w-8 h-8 ${region.color} mx-auto mb-2`} />
                        <div className="text-2xl font-bold">{region.returnPotential}</div>
                        <div className="text-sm text-muted-foreground">Return Potential</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold">Top Skills</h4>
                    <div className="space-y-2">
                      {region.topSkills.map((skill, idx) => (
                        <div key={idx} className={`px-3 py-1 rounded-full text-sm text-center ${region.color.replace('text-', 'bg-')}/20 ${region.color}`}>
                          {skill}
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="font-bold">Countries</h4>
                    <div className="text-sm text-muted-foreground">
                      {region.countries.join(', ')}
                    </div>
                  </div>
                </div>
              ))}
          </Card>
        )}

        {/* Incentive Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {incentivePrograms.map((program, index) => (
            <Card key={index} className="card-cyber p-6 hover-lift">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Plane className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">{program.title}</h3>
                </div>
                
                <p className="text-sm text-accent font-medium">{program.target}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Benefits</h4>
                  <ul className="space-y-1">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-success">{program.expectedReturn}</div>
                    <div className="text-xs text-muted-foreground">Expected Return by 2035</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiasporaMap;