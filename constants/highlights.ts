export interface HighlightCard {
  id: number;
  slug: string;
  type: "content" | "achievement" | "event" | "blog";
  title: string;
  subtitle: string;
  body: string;
  date: string;
  externalLink?: string;
  colSpan: string;
  rowSpan?: string;
}

export const highlights: HighlightCard[] = [
  {
    id: 1,
    slug: "chatbase-content",
    type: "content",
    title: "Creating AI Content with Chatbase",
    subtitle: "Producing branded short-form video content for Chatbase across TikTok and Instagram.",
    body: "As a content creator for Chatbase, I produce branded short-form video content that showcases the capabilities of their AI chatbot platform. The work spans TikTok and Instagram, where I develop content strategies to drive user engagement, explain AI features in an approachable way, and help grow the brand's social presence. This role blends my passion for tech and storytelling — taking complex AI tools and making them accessible through creative content.",
    date: "Feb 2026 – Present",
    externalLink: "https://www.tiktok.com/@jmiguel.adv",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 2,
    slug: "best-startup-experience",
    type: "achievement",
    title: "3rd Place — BEST Startup Experience",
    subtitle: "Won $600 with YULearn, an AI-powered platform bridging academia and industry for CS students.",
    body: "Our team placed 3rd at the BEST Startup Experience competition, winning $600 with YULearn — an AI-powered platform designed to bridge the gap between academia and industry expectations for CS and SWE students. We pitched a full startup concept, built a working prototype, and presented to a panel of judges. The experience sharpened my skills in product thinking, pitching, and building under pressure.",
    date: "2025",
    colSpan: "col-span-2",
  },
  {
    id: 3,
    slug: "cutc-promptathon-judge",
    type: "event",
    title: "CUTC Promptathon Judge",
    subtitle: "Judged AI prompt engineering projects at the Caffeine.ai Promptathon hosted by CUTC.",
    body: "I served as a judge at the Caffeine.ai Promptathon, a prompt engineering competition hosted by the Canadian Undergraduate Technology Conference (CUTC). I evaluated participants' AI projects based on creativity, technical execution, and practical impact. It was a great opportunity to give back to the student tech community and see the innovative ways people are leveraging AI tools.",
    date: "Nov 2025",
    colSpan: "col-span-2",
  },
  {
    id: 4,
    slug: "otu-hello-ai-panelist",
    type: "event",
    title: "OTU 'Hello AI' Panelist",
    subtitle: "Panelist discussing AI trends, career paths, and the future of tech with students and professionals.",
    body: "I was invited as a panelist at Ontario Tech University's 'Hello AI' event, where I discussed AI trends, career paths in tech, and the future of the industry with students and fellow professionals. The conversation covered everything from how students can break into AI to the ethical considerations of building with it. Being able to share my perspective alongside experienced industry voices was both humbling and energizing.",
    date: "2025",
    colSpan: "col-span-2",
  },
  {
    id: 5,
    slug: "from-food-basics-to-founding-engineer",
    type: "blog",
    title: "From Food Basics to Founding Engineer",
    subtitle: "A reflection on my journey from retail to building a startup. Coming soon.",
    body: "Coming soon — a reflection on the journey from working as a Front End Clerk & Supervisor at Food Basics to becoming a Founding Engineer at a startup. Stay tuned.",
    date: "Coming Soon",
    colSpan: "col-span-2",
  },
];
