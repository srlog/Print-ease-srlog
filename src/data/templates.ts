import { Template } from '@/types';

export const templates: Template[] = [
  {
    id: 'modern-1',
    name: 'Modern Professional',
    description: 'Clean and professional design with modern typography',
    thumbnail: 'https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=800&q=80',
    fields: [
      {
        id: 'recipientName',
        label: 'Recipient Name',
        type: 'text',
        required: true,
        placeholder: 'Enter recipient name'
      },
      {
        id: 'title',
        label: 'Certificate Title',
        type: 'text',
        required: true,
        placeholder: 'e.g., Certificate of Achievement'
      },
      {
        id: 'issueDate',
        label: 'Issue Date',
        type: 'date',
        required: true
      }
    ]
  },
  {
    id: 'elegant-1',
    name: 'Elegant Classic',
    description: 'Traditional design with elegant borders and typography',
    thumbnail: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80',
    fields: [
      {
        id: 'recipientName',
        label: 'Recipient Name',
        type: 'text',
        required: true,
        placeholder: 'Enter recipient name'
      },
      {
        id: 'title',
        label: 'Certificate Title',
        type: 'text',
        required: true,
        placeholder: 'e.g., Certificate of Excellence'
      },
      {
        id: 'issueDate',
        label: 'Issue Date',
        type: 'date',
        required: true
      }
    ]
  },
  {
    id: 'minimalist-1',
    name: 'Minimalist Design',
    description: 'Simple and clean design focusing on essential elements',
    thumbnail: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?w=800&q=80',
    fields: [
      {
        id: 'recipientName',
        label: 'Recipient Name',
        type: 'text',
        required: true,
        placeholder: 'Enter recipient name'
      },
      {
        id: 'title',
        label: 'Certificate Title',
        type: 'text',
        required: true,
        placeholder: 'e.g., Certificate of Completion'
      },
      {
        id: 'issueDate',
        label: 'Issue Date',
        type: 'date',
        required: true
      }
    ]
  },
  {
    id: 'corporate-1',
    name: 'Corporate Excellence',
    description: 'Professional design for corporate achievements',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    fields: [
      {
        id: 'recipientName',
        label: 'Recipient Name',
        type: 'text',
        required: true,
        placeholder: 'Enter recipient name'
      },
      {
        id: 'title',
        label: 'Certificate Title',
        type: 'text',
        required: true,
        placeholder: 'e.g., Certificate of Recognition'
      },
      {
        id: 'issueDate',
        label: 'Issue Date',
        type: 'date',
        required: true
      }
    ]
  },
  {
    id: 'academic-1',
    name: 'Academic Achievement',
    description: 'Traditional academic style with formal elements',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    fields: [
      {
        id: 'recipientName',
        label: 'Recipient Name',
        type: 'text',
        required: true,
        placeholder: 'Enter recipient name'
      },
      {
        id: 'title',
        label: 'Certificate Title',
        type: 'text',
        required: true,
        placeholder: 'e.g., Academic Excellence Award'
      },
      {
        id: 'issueDate',
        label: 'Issue Date',
        type: 'date',
        required: true
      }
    ]
  },
  {
    id: 'creative-1',
    name: 'Creative Arts',
    description: 'Artistic design for creative achievements',
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    fields: [
      {
        id: 'recipientName',
        label: 'Recipient Name',
        type: 'text',
        required: true,
        placeholder: 'Enter recipient name'
      },
      {
        id: 'title',
        label: 'Certificate Title',
        type: 'text',
        required: true,
        placeholder: 'e.g., Creative Excellence Award'
      },
      {
        id: 'issueDate',
        label: 'Issue Date',
        type: 'date',
        required: true
      }
    ]
  },
  {
    id: 'tech-1',
    name: 'Tech Achievement',
    description: 'Modern design for technology certifications',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    fields: [
      {
        id: 'recipientName',
        label: 'Recipient Name',
        type: 'text',
        required: true,
        placeholder: 'Enter recipient name'
      },
      {
        id: 'title',
        label: 'Certificate Title',
        type: 'text',
        required: true,
        placeholder: 'e.g., Technical Certification'
      },
      {
        id: 'issueDate',
        label: 'Issue Date',
        type: 'date',
        required: true
      }
    ]
  },
  {
    id: 'modern-2',
    name: 'Modern Geometric',
    description: 'Contemporary design with geometric patterns',
    thumbnail: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&q=80',
    fields: [
      {
        id: 'recipientName',
        label: 'Recipient Name',
        type: 'text',
        required: true,
        placeholder: 'Enter recipient name'
      },
      {
        id: 'title',
        label: 'Certificate Title',
        type: 'text',
        required: true,
        placeholder: 'e.g., Certificate of Merit'
      },
      {
        id: 'issueDate',
        label: 'Issue Date',
        type: 'date',
        required: true
      }
    ]
  }
];