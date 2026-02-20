export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Backend Core",
    skills: ["Python", "Django", "Django REST Framework (DRF)", "FastAPI (Beginner)", "PostgreSQL", "Boto3"],
  },
  {
    title: "Frontend Ecosystem",
    skills: ["React.js", "Redux.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)"],
  },
  {
    title: "Infrastructure & Tools",
    skills: ["AWS (S3, CloudFront)", "Docker", "Redis", "Celery", "Git/GitHub"],
  },
  {
    title: "Payment & Integrations",
    skills: ["Razorpay Integration", "JWT Authentication", "Apple HLS", "REST APIs"],
  },
];
