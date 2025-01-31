export interface Certificate {
  id: string;
  templateId: string;
  recipientName: string;
  title: string;
  issueDate: Date;
  customFields: Record<string, string>;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  fields: Field[];
}

export interface Field {
  id: string;
  label: string;
  type: 'text' | 'date';
  required: boolean;
  placeholder?: string;
}