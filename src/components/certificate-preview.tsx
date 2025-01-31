import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Certificate, Template } from '@/types';
import { Download, Share2, CheckCircle, FileDown, ThumbsUp, Linkedin } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { cn } from '@/lib/utils';

interface CertificatePreviewProps {
  certificate: Certificate;
  template: Template;
  linkedinProfile: string;
  postLink: string;
  websiteUrl: string;
}

export function CertificatePreview({ 
  certificate, 
  template, 
  linkedinProfile,
  postLink,
  websiteUrl
}: CertificatePreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [liked, setLiked] = useState(false);

  const handleDownload = async () => {
    if (!previewRef.current) return;
    
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        removeContainer: false,
        foreignObjectRendering: false
      });
      
      const link = document.createElement('a');
      link.download = `${certificate.recipientName}-certificate.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating certificate:', error);
    }
  };

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        removeContainer: false,
        foreignObjectRendering: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
      pdf.save(`${certificate.recipientName}-certificate.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleShare = async () => {
    if (!previewRef.current) return;
    
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        removeContainer: false,
        foreignObjectRendering: false
      });
      
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob!);
        }, 'image/png');
      });
      
      if (navigator.share) {
        const shareText = `Check out my certificate! 🎉\n\nCreate your own at ${websiteUrl} 🌟\n\nFollow us:\n${linkedinProfile}\n${postLink}`;
        
        await navigator.share({
          files: [new File([blob], 'certificate.png', { type: 'image/png' })],
          title: 'Certificate',
          text: shareText,
        });
      }
    } catch (error) {
      console.error('Error sharing certificate:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative w-full max-w-4xl mx-auto">
        <Card 
          className="p-12 flex items-center justify-center bg-card"
          ref={previewRef}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 rounded-lg"
            style={{ backgroundImage: `url(${template.thumbnail})` }}
          />
          <div className="text-center space-y-8 relative w-full">
            <div className="absolute top-0 right-0">
              <CheckCircle className="w-12 h-12 text-primary/20" />
            </div>
            <h1 className="text-5xl font-bold text-primary">
              {certificate.title}
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground">This is to certify that</p>
              <p className="text-4xl font-semibold text-primary">
                {certificate.recipientName}
              </p>
              <p className="text-xl text-muted-foreground">
                on {certificate.issueDate.toLocaleDateString()}
              </p>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        <div className="flex gap-4">
          <Button onClick={handleDownload} className="flex-1 text-lg py-6">
            <Download className="mr-2 h-5 w-5" />
            Download PNG
          </Button>
          <Button onClick={handleDownloadPDF} variant="secondary" className="flex-1 text-lg py-6">
            <FileDown className="mr-2 h-5 w-5" />
            Download PDF
          </Button>
          <Button variant="outline" onClick={handleShare} className="flex-1 text-lg py-6">
            <Share2 className="mr-2 h-5 w-5" />
            Share Certificate
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button
            variant={liked ? "default" : "outline"}
            onClick={() => {
              setLiked(true);
              window.open(postLink, '_blank');
            }}
            className="gap-2"
          >
            <ThumbsUp className={cn("h-5 w-5", liked && "fill-current")} />
            {liked ? "Liked!" : "Like Post"}
          </Button>
          <Button
            variant="outline"
            asChild
            className="gap-2"
          >
            <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              Follow on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}