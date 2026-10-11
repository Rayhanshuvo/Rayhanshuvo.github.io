// ─────────────────────────────────────────────────────────────────
//  THE ONLY FILE YOU NORMALLY EDIT
//
//  PROFILE: your photo.
//
//  CATEGORIES: the topics on the site, in the order they appear.
//    A category with no projects yet is listed under "Coming next".
//
//  PROJECTS: one { ... } block per project, newest first.
//    "category" must match an "id" from CATEGORIES.
// ─────────────────────────────────────────────────────────────────

// YOUR PHOTO: put a square picture in the assets/ folder with this name.
// To show no photo, set photo to "".
const PROFILE = {
  photo: "assets/profile.jpg",
};

const CATEGORIES = [
  // "color" is the topic's color on the site. Change it to any hex color you like.
  { id: "kubernetes",    name: "Kubernetes",           color: "#2f6fe4" },
  { id: "postgres",      name: "PostgreSQL",           color: "#00908c" },
  { id: "redis",         name: "Redis & caching",      color: "#d9622b" },
  { id: "kafka",         name: "Kafka & messaging",    color: "#7c4dd6" },
  { id: "docker",        name: "Docker & containers",  color: "#1f9e5a" },
  { id: "networking",    name: "Networking",           color: "#b8338f" },
  { id: "aws",           name: "AWS & infrastructure", color: "#b37a00" },
  { id: "system-design", name: "System design",        color: "#4b5bd1" },
];

const PROJECTS = [
    {
    category: "aws",
    title: "What happens when a Kubernetes node dies on AWS, measured",

    summary:
      "I switched off one of two servers on AWS while 200 requests per second were flowing. " +
      "The default setup turned one dead server into a 47-second full outage. I found out why and fixed it.",

    result: {
      before: "8,406",
      after: "4",
      unit: "failed requests when a server died",
    },

    skills: ["AWS EC2", "Pulumi", "K3s multi-node", "Nginx L4", "Spring Boot"],

    image: "assets/node-failure.png",
    imageAlt: "Successful and failed requests per second while a worker node was stopped, default versus resilient setup",

    link: "https://github.com/Rayhanshuvo/k3s-aws-node-failure",
    date: "October 2026",
  },
  {
    category: "kubernetes",
    title: "Zero-downtime deployments on Kubernetes, measured",

    // One or two sentences a non-engineer can follow.
    summary:
      "During a routine release, Kubernetes' default setup took my service offline for 30 seconds " +
      "while reporting that everything was fine. I measured exactly why and fixed it.",

    // The measured result, shown large. Remove the whole "result" block if a project has none.
    result: {
      before: "4,646",
      after: "0",
      unit: "failed requests during a release",
    },

    skills: ["Spring Boot", "Readiness probes", "Graceful shutdown", "Load testing"],

    // Optional picture (upload it to the assets/ folder). Remove both lines if there is none.
    image: "assets/rollout-comparison.png",
    imageAlt: "Successful and failed requests per second during a release, for three Kubernetes configurations",

    link: "https://github.com/Rayhanshuvo/zero-downtime-k8s",
    date: "October 2026",
  },

  // ── Template for the next project: copy, paste above, fill in ──
  // {
  //   category: "postgres",
  //   title: "…",
  //   summary: "…",
  //   result: { before: "…", after: "…", unit: "…" },
  //   skills: ["…", "…"],
  //   image: "assets/….png",
  //   imageAlt: "…",
  //   link: "https://github.com/Rayhanshuvo/…",
  //   date: "Month 2026",
  // },
];
