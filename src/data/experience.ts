export type ExperienceHighlight = {
  label: string;
  value: string;
};

export type ExperienceRole = {
  id: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  highlights: ExperienceHighlight[];
};

export const experienceCompany = {
  name: "Vimeo",
  label: "Experience",
  intro:
    "I built product experiences across comments, review links, team management, onboarding, and integrations, helping creators and teams collaborate more effectively, manage workspaces, and streamline their workflows.",
};

export const experienceRoles: ExperienceRole[] = [
  {
    id: "vimeo-se2",
    title: "Software Engineer II",
    period: "Aug 2023 - Present",
    location: "Bangalore, India",
    summary:
      "Leading collaboration-focused product work across review links and commenting systems with an emphasis on scale, access control, and low-risk migrations.",
    bullets: [
      "Drove a 62% increase in new-user adoption by building a scalable multi-review-link system with fine-grained access controls for enterprise review workflows.",
      "Engineered an event-driven expiration pipeline with Google Cloud Tasks, improving review-link security and reducing manual overhead.",
      "Architected a reusable comments module that now powers page-based commenting across three Vimeo video surfaces.",
      "Migrated 20% of production comments data to a new schema with 100% data integrity and zero downtime during the transition.",
      "Built advanced commenting features like search, @mentions, guest comments, threaded replies, filters, and resolve workflows, helping drive a 12% increase in comment engagement.",
    ],
    highlights: [
      { value: "62%", label: "new-user adoption lift" },
      { value: "12%", label: "comment engagement growth" },
      { value: "20%", label: "production data migrated" },
    ],
  },
  {
    id: "vimeo-se1",
    title: "Software Engineer I",
    period: "Aug 2022 - Jul 2023",
    location: "Bangalore, India",
    summary:
      "Expanded Vimeo's team management and Slack integration capabilities by shipping full-stack improvements that reduced friction for onboarding and notifications.",
    bullets: [
      "Developed team management and onboarding enhancements across front end and back end, including search, sorting, role-based filtering, and bulk invites.",
      "Increased average team size for new accounts by 7% while cutting team-management workflow clicks by 13%.",
      "Redesigned the authorization model for the Vimeo-Slack integration using Slack's granular OAuth permissions to reduce over-scoped access.",
      "Implemented folder-scoped event subscriptions so Slack channels could receive targeted notifications for clip additions, edits, and comments.",
      "Supported 50K+ paid users and a notification system processing more than 1M events per week.",
    ],
    highlights: [
      { value: "50K+", label: "paid users supported" },
      { value: "1M+", label: "events processed weekly" },
      { value: "13%", label: "fewer workflow clicks" },
    ],
  },
  {
    id: "vimeo-intern",
    title: "Intern",
    period: "Feb 2022 - Jul 2022",
    location: "Bangalore, India",
    summary:
      "Worked on the backend systems behind Vimeo's pricing and packaging transition, with a focus on monetization workflows and API reliability at high traffic.",
    bullets: [
      "Developed REST APIs to support Vimeo's migration from storage-based plans to seat-based subscriptions on a platform serving 287M+ users.",
      "Enhanced team invite and management APIs to support seat-based pricing across high-traffic workflows handling 4M+ requests daily.",
      "Launched and optimized targeted upsell banners across team-management pages, driving a 13% increase in upsell clicks.",
    ],
    highlights: [
      { value: "287M+", label: "platform users served" },
      { value: "4M+", label: "requests handled daily" },
      { value: "13%", label: "upsell click growth" },
    ],
  },
];
