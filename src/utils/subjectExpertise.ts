import { Globe, Search, Megaphone, Handshake, Globe2, type LucideIcon } from 'lucide-react';

export interface SubjectExpertise {
  icon: LucideIcon;
  domain: string;
}

const RULES: { match: RegExp; icon: LucideIcon; domain: string }[] = [
  { match: /commerce international|\bTCI\b/i, icon: Globe, domain: 'Commerce international' },
  { match: /étude du marché|fcme/i, icon: Search, domain: 'Étude de marché' },
  { match: /négociation|vente|tvn/i, icon: Handshake, domain: 'Vente & négociation' },
  { match: /marketing international|\bMI\b/i, icon: Globe2, domain: 'Marketing international' },
  { match: /marketing/i, icon: Megaphone, domain: 'Stratégie marketing' },
];

const FALLBACK: SubjectExpertise = { icon: Megaphone, domain: 'Marketing & commerce' };

export function getSubjectExpertise(subjectName: string): SubjectExpertise {
  const rule = RULES.find((r) => r.match.test(subjectName));
  return rule ? { icon: rule.icon, domain: rule.domain } : FALLBACK;
}
