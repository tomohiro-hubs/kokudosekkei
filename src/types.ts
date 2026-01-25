export interface SiteData {
  site: {
    companyName: string;
    catch: string;
    area: string;
    registrations: { label: string; value: string }[];
    qualified: { name: string; count: number }[];
    contact: { tel: string; hours: string; formUrl: string };
  };
  services: { id: string; title: string; summary: string; deliverables: string[] }[];
  works: Work[];
  careers: {
    roles: { id: string; title: string; summary: string; requirements: string[] }[];
    numbers: { label: string; value: string }[];
  };
}

export interface Work {
  id: string;
  year: number;
  type: 'survey' | 'compensation';
  area: string;
  client: string;
  title: string;
  summary: string;
  details?: {
    issue: string;
    approach: string;
    deliverables: string[];
    notes: string;
  };
}
