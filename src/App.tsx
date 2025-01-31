import { useState } from 'react';
import { templates } from '@/data/templates';
import { Certificate, Template } from '@/types';
import { TemplateCard } from '@/components/template-card';
import { CertificateForm } from '@/components/certificate-form';
import { CertificatePreview } from '@/components/certificate-preview';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Printer, Pencil, Layout, FileCheck, Sparkles, Download } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { StarBackground } from '@/components/StarBackground';
// import { Landing } from '@/components/Landing';
// import {zap} from 'lucide-react';

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [activeTab, setActiveTab] = useState('design');

  const navItems = [
    { name: 'design', url: '#', icon: Layout },
    { name: 'customize', url: '#', icon: Pencil },
    { name: 'preview', url: '#', icon: FileCheck }
  ];

  const features = [
    { 
      title: 'Professional Templates', 
      icon: Layout, 
      description: 'Choose from our collection of beautifully designed templates',
      animation: 'group-hover:rotate-12 transition-transform duration-300'
    },
    { 
      title: 'Easy Customization', 
      icon: Sparkles,
      description: 'Personalize your certificate with just a few clicks',
      animation: 'group-hover:scale-125 transition-transform duration-300'
    },
    { 
      title: 'Instant Download', 
      icon: Download,
      description: 'Download your certificate instantly in PNG or PDF format',
      animation: 'group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300'
    }
  ];

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setTimeout(() => setActiveTab('customize'), 300);
  };

  const handleFormSubmit = (data: any) => {
    if (!selectedTemplate) return;

    const newCertificate: Certificate = {
      id: crypto.randomUUID(),
      templateId: selectedTemplate.id,
      recipientName: data.recipientName,
      title: data.title,
      issueDate: data.issueDate,
      customFields: {}
    };

    setCertificate(newCertificate);
    setTimeout(() => setActiveTab('preview'), 300);
  };

  const handleNavClick = (tab: string) => {
    if (tab === 'customize' && !selectedTemplate) return;
    if (tab === 'preview' && !certificate) return;
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background/50 via-background/30 to-background/50 relative">
      <StarBackground />
      <div className="absolute inset-0 backdrop-blur-[50px]" />
      
      <ThemeSwitcher />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/80 via-blue-500/50 to-purple-500/50 rounded-lg blur-xl opacity-70"></div>
            <div className="relative flex items-center justify-center gap-2 bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
              <Printer className="w-12 h-12 text-primary animate-pulse" />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-purple-400">
                PrintEase
              </h1>
            </div>
          </div>
          
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto mt-6">
            Create beautiful certificates in minutes with our professional templates
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <Card className="feature-card cursor-pointer border border-primary/20 bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5" />
                      <feature.icon 
                        className={`w-8 h-8 mx-auto mb-4 text-primary ${feature.animation}`} 
                      />
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex items-start gap-2">
                    <feature.icon className="w-5 h-5 text-primary mt-0.5" />
                    <p>{feature.description}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </header>

        <div className="max-w-7xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl shadow-2xl border border-primary/20">
          <div className="flex justify-center py-4 border-b border-border/50">
            <NavBar
              items={navItems}
              activeItem={activeTab}
              onItemClick={handleNavClick}
              className="static transform-none mb-0"
            />
          </div>

          <div className="p-6">
            {activeTab === 'design' && (
              <ScrollArea className="h-[600px] pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {templates.map((template) => (
                    <TemplateCard
                      key={template.id}
                      template={template}
                      onSelect={handleTemplateSelect}
                      selected={selectedTemplate?.id === template.id}
                    />
                  ))}
                </div>
              </ScrollArea>
            )}

            {activeTab === 'customize' && selectedTemplate && (
              <div className="max-w-xl mx-auto">
                <CertificateForm
                  template={selectedTemplate}
                  onSubmit={handleFormSubmit}
                />
              </div>
            )}

            {activeTab === 'preview' && certificate && selectedTemplate && (
              <div className="max-w-4xl mx-auto">
                <CertificatePreview
                  certificate={certificate}
                  template={selectedTemplate}
                  linkedinProfile="https://www.linkedin.com/in/srlog/"
                  postLink="https://www.linkedin.com/posts/srlog_hackathon-pondicherry-finview-activity-7288692058406432769-yecP"
                  websiteUrl="https://print-ease.vercel.app"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}