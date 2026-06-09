import type { IconType } from "react-icons";

export type NavItem = {
  label: string;
  href: string;
};

export type MetricItem = {
  label: string;
  value: string;
  note: string;
};

export type SkillCategory = {
  category: string;
  items: SkillItem[];
};

export type SkillItem = {
  name: string;
  level: string;
  description: string;
};

export type ProjectCaseStudy = {
  context: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  challenges: string[];
  results: string[];
  futureImprovements: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  problemSolved: string;
  architectureUsed: string;
  technologies: string[];
  challenges: string[];
  learnings: string[];
  status: string;
  imageLabel: string;
  githubUrl: string;
  demoUrl: string | null;
  caseStudy: ProjectCaseStudy;
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export type CertificateGroup = {
  provider: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
};

export type HighlightItem = {
  title: string;
  description: string;
  icon: IconType;
};

export type GithubInsight = {
  label: string;
  value: string;
  detail: string;
};
