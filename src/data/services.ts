import {
  Globe,
  Server,
  Database,
  Cloud,
  Code,
  MonitorSmartphone,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export type IconComponent = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: IconComponent;
  priceStart: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Web Development",
    description:
      "End-to-end development of scalable web applications using Django and Next.js.",
    icon: Globe,
    priceStart: "$2,000",
    features: [
      "Custom UI/UX Implementation",
      "Secure Backend Architecture",
      "API Integration",
      "Performance Optimization",
    ],
  },
  {
    id: "rest-api",
    title: "REST API Development",
    description:
      "Designing and building robust, secure, and well-documented APIs with DRF or FastAPI.",
    icon: Server,
    priceStart: "$1,000",
    features: [
      "JWT/OAuth2 Authentication",
      "Rate Limiting & Security",
      "Comprehensive Documentation",
      "Third-party Integrations",
    ],
  },
  {
    id: "vps-cloud",
    title: "VPS & Cloud Deployment",
    description:
      "Setting up production-ready environments on AWS, DigitalOcean, or custom VPS.",
    icon: Cloud,
    priceStart: "$500",
    features: [
      "Docker Containerization",
      "CI/CD Pipeline Setup",
      "Nginx & Gunicorn Configuration",
      "SSL & Domain Management",
    ],
  },
  {
    id: "database-arch",
    title: "Database Architecture",
    description:
      "Designing scalable PostgreSQL schemas and tuning database performance.",
    icon: Database,
    priceStart: "$800",
    features: [
      "Schema Design",
      "Query Optimization",
      "Data Migration Strategy",
      "Backup & Recovery Plans",
    ],
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description:
      "Building highly interactive and responsive user interfaces with React, Next.js or Svelte.",
    icon: MonitorSmartphone,
    priceStart: "$1,500",
    features: [
      "Pixel-perfect Implementation",
      "State Management",
      "Framer Motion Animations",
      "Mobile-First Responsive Design",
    ],
  },
  {
    id: "tech-consulting",
    title: "Technical Consulting",
    description:
      "Expert advice on architecture, code reviews, and technology stack decisions.",
    icon: Code,
    priceStart: "$100/hr",
    features: [
      "Code Audits",
      "Architecture Review",
      "Performance Bottleneck Analysis",
      "Mentoring & Pair Programming",
    ],
  },
];
