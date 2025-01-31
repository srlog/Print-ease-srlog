// import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Template } from '@/types';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

interface CertificateFormProps {
  template: Template;
  onSubmit: (data: any) => void;
}

const formSchema = z.object({
  recipientName: z.string().min(2, 'Name must be at least 2 characters'),
  title: z.string().min(2, 'Title must be at least 2 characters'),
  issueDate: z.date()
});

export function CertificateForm({ template, onSubmit }: CertificateFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipientName: '',
      title: '',
      issueDate: new Date()
    }
  });
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {template.fields.map((field) => (
          <FormField
            key={field.id}
            control={form.control}
            name={field.id as any}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                {field.type === 'text' ? (
                  <FormControl>
                    <Input placeholder={field.placeholder} {...formField} />
                  </FormControl>
                ) : field.type === 'date' ? (
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !formField.value && 'text-muted-foreground'
                          )}
                        >
                          {formField.value ? (
                            format(formField.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formField.value}
                        onSelect={formField.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                      />
                    </PopoverContent>
                  </Popover>
                ) : null}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="w-full">Generate Certificate</Button>
      </form>
    </Form>
  );
}