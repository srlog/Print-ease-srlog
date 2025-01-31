import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Template } from '@/types';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
  selected?: boolean;
}

export function TemplateCard({ template, onSelect, selected }: TemplateCardProps) {
  return (
    <Card 
      className={cn(
        "group overflow-hidden transition-all hover:border-primary/50 cursor-pointer",
        selected && "ring-2 ring-primary border-primary"
      )}
      onClick={() => onSelect(template)}
    >
      <CardHeader className="p-4">
        <AspectRatio ratio={1.414}>
          <div className="relative w-full h-full">
            <img
              src={template.thumbnail}
              alt={template.name}
              className="object-cover rounded-lg w-full h-full transition-transform group-hover:scale-105"
            />
            {selected && (
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <Check className="w-8 h-8" />
                </div>
              </div>
            )}
          </div>
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold mb-2">{template.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {template.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}