import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Download, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Shield,
  Brain,
  Globe
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-padding bg-gradient-to-br from-background via-card/10 to-background border-t border-border/20">
      <div className="container-cyber">
        {/* CTA Section */}
        <Card className="card-cyber p-12 mb-16 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black">
              <span className="text-gradient-primary">Join the</span>
              <span className="text-cyber block text-2xl lg:text-3xl mt-2">Revolution</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of Bangladesh's transformation into a regional technological superpower. 
              Download the complete strategic framework and help shape the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="btn-cyber text-lg px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download Full Whitepaper
              </Button>
              <Button variant="outline" className="btn-ghost-cyber text-lg px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Join the Think Tank
              </Button>
              <Button variant="outline" className="btn-ghost-cyber text-lg px-8 py-4">
                <ExternalLink className="w-5 h-5 mr-2" />
                Partner With Us
              </Button>
            </div>
          </div>
        </Card>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient-primary">Bangladesh</span>
                <span className="text-cyber block text-lg">2.0</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A comprehensive strategic framework for transforming Bangladesh into a regional 
                technological superpower through institutional innovation and digital governance.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-accent" />
              </div>
              <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-success" />
              </div>
            </div>
          </div>

          {/* Strategic Pillars */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Strategic Pillars</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Cyber Defense & Security',
                'Digital Governance',
                'Energy Innovation',
                'Human Capital Development',
                'Economic Zones',
                'AI & Automation'
              ].map((pillar, index) => (
                <li key={index} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {pillar}
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Key Initiatives</h4>
            <ul className="space-y-2 text-sm">
              {[
                'BARPA (Research Agency)',
                'Quantum Economic Zones',
                'Diaspora Integration',
                'Governance Stack L1-L3',
                'Space Program',
                'Innovation Hubs'
              ].map((initiative, index) => (
                <li key={index} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {initiative}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">contact@bangladesh2point0.gov.bd</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+880-2-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Dhaka, Bangladesh</span>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-xs text-muted-foreground mb-2">Strategic Partners</p>
              <div className="grid grid-cols-2 gap-2">
                {['BARPA', 'QEZ Council', 'Cyber Command', 'Innovation Unit'].map((partner, index) => (
                  <div key={index} className="text-xs text-cyber bg-muted/20 px-2 py-1 rounded text-center">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 Bangladesh 2.0 Strategic Initiative. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Terms of Service
              </span>
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Security Framework
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-cyber">
              <span>Version 2.0.1</span>
              <span>•</span>
              <span>Last Updated: 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;