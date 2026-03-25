## Martial Arts Club Platform

Production-grade, SEO-optimized web platform built for a real martial arts school to improve online visibility and drive new student acquisition.

👉 Live: https://gdanskaszkolafechtunku.pl/
👉 Staging: https://gdanska-szkola-fechtunku.vercel.app/
👉 Repository: https://github.com/aleksandercuch/martial-arts-club

## Problem

The client had a low-visibility website that failed to attract new students and performed poorly on mobile devices.

Key requirements:

- Improve SEO for local discovery
- Optimize for mobile-first traffic (primary user base)
- Present structured training content clearly
- Keep the system simple, fast, and maintainable

## Solution

Designed and implemented a lightweight, content-driven platform optimized for:

- search engine visibility (SEO)
- performance on mobile devices
- clarity of content structure
- low maintenance overhead

## Architecture & Key Decisions
- Next.js (SSG/SSR hybrid) → maximize SEO and performance
- Static-first approach → reduce hosting complexity and cost
- Component-driven architecture → ensure scalability and reuse
- Separation of concerns → clear boundaries between UI, content, and configuration
- Minimal dependencies → lower bundle size and long-term maintenance cost
- 
## Trade-offs
- Skipped backend layer → faster delivery and lower complexity
- Chose static/dynamic balance based on content update frequency
- Prioritized reliability and simplicity over over-engineering

  
## Internationalization

Used duplicated static pages (/pl, /en) instead of dynamic routing.

Reason:

client hosting constraints (Dhosting)
requirement for fully static deployment
reduced operational complexity and cost

Trade-off:

less flexibility vs simpler and more predictable infrastructure

## Core Features
- Structured presentation of training programs and disciplines
- Configurable class schedule
- Instructor profiles and content sections
- Conversion-oriented contact flow
- SEO optimization (semantic HTML, metadata, performance tuning)

## Performance & Quality
- Optimized asset delivery and lazy loading
- Mobile-first design aligned with user behavior
- Lighthouse-focused improvements (performance, accessibility, SEO)
- Clean, consistent, and maintainable codebase

## Tech Stack
Frontend: Next.js / React
Language: TypeScript
Styling: Tailwind / CSS Modules
Deployment: Vercel / Dhosting
Tooling: ESLint, Prettier


## My Role

Full ownership of the project:

- requirements gathering with client
- architecture design and key technical decisions
- implementation of UI and core functionality
- performance and SEO optimization
- deployment and production delivery
  
## Impact
- Production website actively used by a real client
- Improved mobile performance and accessibility
- Increased visibility in local search (SEO-focused architecture)
- Established a scalable foundation for future features

## Engineering Takeaways
- Pragmatic decision-making: balancing scalability with delivery speed
- Designing under real-world constraints (budget, hosting, non-technical users)
- Building maintainable systems without unnecessary complexity
- Focusing on user intent and business goals over purely technical solutions

## What I Would Do Differently
- Introduce headless CMS for non-technical content management
- Add booking system to support user conversion
- Implement analytics to measure user behavior
- Improve i18n with dynamic routing if infrastructure allowed

## Future Improvements
- Online booking / scheduling system
- CMS integration
- Analytics-driven UX optimization
- Extended internationalization support
- Dynamic App Routes with middleware

## Local Setup
git clone https://github.com/aleksandercuch/martial-arts-club.git
cd martial-arts-club
npm install
npm run dev

## Contact

Feel free to reach out if you'd like to discuss architecture decisions or implementation details.
npm run dev
Contact

Feel free to reach out if you’d like to discuss architecture decisions or implementation details.
