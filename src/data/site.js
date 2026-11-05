import {
  Boxes,
  Code2,
  Gauge,
  HeartHandshake,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Megaphone,
  PenTool,
  Search,
  ShoppingBag,
  TrendingUp,
  Users,
  Cpu,
} from 'lucide-react'

export const site = {
  name: 'Nexus',
  legalName: 'Nexus Digital Solutions',
  tagline: 'Technology · Design · Growth',
  description:
    'An independent technology and digital solutions studio crafting high-performance websites, platforms, and products for ambitious companies.',
  email: 'hello@nexus.studio',
  phone: '+1 (415) 555-0134',
  phoneHref: '+14155550134',
  whatsapp: '14155550134',
  location: 'Remote-first · Working worldwide',
  availability: 'Accepting new projects',
  founded: '2019',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'X / Twitter', href: 'https://x.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'Dribbble', href: 'https://dribbble.com/' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '40+', label: 'Products shipped' },
  { value: '12', label: 'Countries served' },
  { value: '98', label: 'Avg. Lighthouse score' },
  { value: '7', label: 'Years of craft' },
]

export const principles = [
  {
    number: '01',
    title: 'Clarity over decoration',
    copy: 'Every screen earns its place. We remove noise until the next action becomes obvious.',
  },
  {
    number: '02',
    title: 'Systems over pages',
    copy: 'We build design systems and codebases that scale with your team, not against it.',
  },
  {
    number: '03',
    title: 'Outcomes over output',
    copy: 'Launch is a milestone, not the finish line. We optimize for the business result.',
  },
]

export const services = [
  {
    id: 'web-development',
    icon: Code2,
    title: 'Website Development',
    description:
      'Conversion-focused marketing sites and corporate platforms engineered for speed, clarity, and search.',
    tags: ['Next.js', 'Performance', 'CMS'],
  },
  {
    id: 'web-apps',
    icon: Layers,
    title: 'Full-Stack Web Applications',
    description:
      'End-to-end product engineering, from data models and APIs to polished, reliable interfaces.',
    tags: ['React', 'Node.js', 'APIs'],
  },
  {
    id: 'ui-ux',
    icon: PenTool,
    title: 'UI/UX Design',
    description:
      'Research-led product design that turns complex workflows into intuitive, memorable experiences.',
    tags: ['Research', 'Prototyping', 'Design systems'],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Technical SEO, content architecture, and Core Web Vitals work that compounds organic growth.',
    tags: ['Technical SEO', 'Content', 'Analytics'],
  },
  {
    id: 'advertising',
    icon: Megaphone,
    title: 'Meta & Digital Advertising',
    description:
      'Performance creative and paid campaigns engineered around measurable acquisition, not vanity metrics.',
    tags: ['Meta Ads', 'Creative', 'Tracking'],
  },
  {
    id: 'custom-solutions',
    icon: Boxes,
    title: 'Custom Business Solutions',
    description:
      'Bespoke internal tools and integrations that remove manual work and connect your operations.',
    tags: ['Automation', 'Integrations', 'Ops'],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'E-commerce Development',
    description:
      'High-converting storefronts with seamless checkout, subscriptions, and inventory operations.',
    tags: ['Shopify', 'Stripe', 'Headless'],
  },
  {
    id: 'dashboards',
    icon: LayoutDashboard,
    title: 'Admin Dashboards & Automation',
    description:
      'Operational dashboards and workflow automation that give teams clarity, control, and hours back.',
    tags: ['Dashboards', 'Workflows', 'Data'],
  },
]

export const reasons = [
  {
    icon: Cpu,
    title: 'Modern technology',
    description:
      'A deliberately current stack, chosen for longevity. No legacy baggage, no bloated plugins.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable by design',
    description:
      'Architecture, content, and infrastructure that hold up when traffic and teams grow.',
  },
  {
    icon: Users,
    title: 'User-focused design',
    description:
      'Decisions grounded in real user behavior, not internal assumptions or design trends.',
  },
  {
    icon: Gauge,
    title: 'Performance obsessed',
    description:
      'Fast pages, clean code, and measurable Core Web Vitals. Speed is a feature, not an afterthought.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent communication',
    description:
      'Direct access to the people doing the work, a clear scope, and no surprises at invoice time.',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing support',
    description:
      'Post-launch monitoring, iteration, and a team that stays accountable after the handover.',
  },
]

export const process = [
  {
    number: '01',
    title: 'Discover',
    summary: 'We map the business, the users, and the real problem worth solving.',
    deliverables: ['Stakeholder interviews', 'Audit & research', 'Success metrics'],
  },
  {
    number: '02',
    title: 'Plan',
    summary: 'Scope, architecture, and a roadmap with no hidden corners.',
    deliverables: ['Technical architecture', 'Scope & timeline', 'Content plan'],
  },
  {
    number: '03',
    title: 'Design',
    summary: 'We shape the experience in high fidelity, from flows to final interfaces.',
    deliverables: ['Wireframes', 'UI design', 'Design system'],
  },
  {
    number: '04',
    title: 'Develop',
    summary: 'Clean, tested code built in weekly increments you can actually review.',
    deliverables: ['Front-end build', 'Integrations', 'QA & accessibility'],
  },
  {
    number: '05',
    title: 'Launch',
    summary: 'A measured release with performance, SEO, and analytics in place.',
    deliverables: ['Deployment', 'SEO & analytics', 'Team handover'],
  },
  {
    number: '06',
    title: 'Grow',
    summary: 'We study how it performs and improve the product where it matters.',
    deliverables: ['Monitoring', 'Iteration sprints', 'Growth experiments'],
  },
]

export const projects = [
  {
    id: 'aurora',
    number: '01',
    title: 'Aurora',
    category: 'SaaS · Product design & engineering',
    year: '2025',
    tagline: 'Analytics that make momentum visible.',
    description:
      'A unified analytics workspace that turns fragmented operational data into a single, legible story for product teams.',
    overview:
      'Aurora is a concept for a B2B analytics platform built around one question: what changed, and why does it matter? Instead of another wall of charts, the product leads with narrative, context, and the few signals that deserve attention.',
    approach:
      'We designed a modular dashboard system with a disciplined visual hierarchy, then engineered it as a fast, accessible React application. A live data layer and role-based views keep the experience relevant for founders, analysts, and operators alike.',
    highlights: ['Narrative-led reporting', 'Role-based workspaces', 'Live data pipeline', 'Accessible design system'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    visual: 'aurora',
    accent: '#D8FF57',
    concept: true,
  },
  {
    id: 'atelier-two',
    number: '02',
    title: 'Atelier Two',
    category: 'E-commerce · Brand & storefront',
    year: '2025',
    tagline: 'A quieter kind of luxury retail.',
    description:
      'An editorial storefront for a modern fashion house, balancing rich storytelling with a frictionless path to purchase.',
    overview:
      'Atelier Two is a concept commerce experience for a small-batch fashion label. The challenge was to preserve the restraint of the brand while making product discovery, sizing, and checkout genuinely effortless.',
    approach:
      'We built an editorial-first storefront with a headless commerce layer, oversized typography, and product pages that prioritize fabric, fit, and provenance. Every interaction was measured against one metric: confidence.',
    highlights: ['Headless commerce', 'Editorial product pages', 'One-page checkout', 'Lookbook CMS'],
    stack: ['Next.js', 'Shopify', 'Sanity', 'Stripe'],
    visual: 'atelier',
    accent: '#C77B4E',
    concept: true,
  },
  {
    id: 'northwind',
    number: '03',
    title: 'Northwind',
    category: 'Logistics · Platform',
    year: '2024',
    tagline: 'Freight visibility, finally unified.',
    description:
      'A live operations platform that gives logistics teams one shared view of every shipment, exception, and handoff.',
    overview:
      'Northwind is a concept control tower for logistics operators. Dispatchers, account managers, and customers each need a different slice of the same truth — without switching between five disconnected tools.',
    approach:
      'We mapped the operational workflow end to end, then designed a map-first interface with exception-driven alerts. The front end is backed by a normalized event model that keeps every status update consistent across roles.',
    highlights: ['Live shipment map', 'Exception workflows', 'Customer portal', 'Event-driven updates'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Mapbox'],
    visual: 'northwind',
    accent: '#6C8CFF',
    concept: true,
  },
]

export const technologies = [
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'REST & GraphQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Cloudflare'],
  },
  {
    group: 'Design & Growth',
    items: ['Figma', 'Design systems', 'GA4', 'Meta Ads', 'Search Console'],
  },
]

export const techMarquee = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Figma',
  'Framer Motion',
  'Vercel',
  'Shopify',
]

export const testimonials = [
  {
    quote:
      'Nexus turned a complex operational problem into a product our team actually enjoys using. The clarity they brought to every decision was rare.',
    name: 'Amara Chen',
    role: 'Product Lead · B2B SaaS',
    initials: 'AC',
  },
  {
    quote:
      'The process was calm, transparent, and unusually fast. We went from a rough idea to a working product without the usual chaos.',
    name: 'Daniel Okafor',
    role: 'Founder · E-commerce',
    initials: 'DO',
  },
  {
    quote:
      'They think beyond the launch. Our site is faster, clearer, and finally feels like the company we want to be.',
    name: 'Sofia Reyes',
    role: 'Marketing Director · Professional services',
    initials: 'SR',
  },
]

export const budgetOptions = [
  'Under $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000+',
  'Not sure yet',
]
