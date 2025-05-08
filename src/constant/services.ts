interface Service {
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    title: "Custom Website Development",
    description:
      "Business websites and systems tailored to specific needs using modern technologies.",
  },
  {
    title: "API Development & Integration",
    description:
      "RESTful API creation using Node.js or PHP, plus integration with any third-party API.",
  },
  {
    title: "Website Maintenance & Upgrades",
    description:
      "Ongoing support, bug fixes, and feature enhancements for existing sites and systems—whether built from scratch or inherited.",
  },
  {
    title: "Single Page Applications (SPA)",
    description:
      "Develop  interactive apps using React or Next.js with seamless user experience and client-side routing",
  },
  {
    title: "Bug Fixing",
    description:
      "Identify and fix slow-loading pages, broken features, or any issues across web applications.",
  },
  {
    title: "Cross-Team Feature Implementation",
    description:
      "Collaborate across frontend/backend teams to ship features end-to-end—clear Git workflows, commits, and documentation included.",
  },
];

export default SERVICES;
