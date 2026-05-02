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
- Support multiple languages without server-side rendering complexity

## Solution

Designed and implemented a lightweight, content-driven platform optimized for:

- search engine visibility (SEO)
- performance on mobile devices
- clarity of content structure
- low maintenance overhead
- seamless language switching with **localStorage** to prevent content flicker

**Key enhancement:** added a **client-side language loader** to ensure pages display in the user’s preferred language immediately, avoiding flashes of default content before the language loads.

## Architecture & Key Decisions
- Next.js 13+ (SSG/SSR hybrid) → maximize SEO and performance
- **Language context using localStorage** → persist user preference for PL/EN without flicker
- Component-driven architecture → ensure scalability and reuse
- Separation of concerns → clear boundaries between UI, content, and configuration
- Minimal dependencies → lower bundle size and long-term maintenance cost

## Trade-offs
- Skipped full backend → faster delivery, lower complexity
- Static-first approach with client-side i18n → simpler deployment on Dhosting
- Prioritized reliability and user experience over over-engineering

## Internationalization

- Implemented **client-side language context** using localStorage
- Pages now render the correct language **before content loads**
- Trade-off: less flexible dynamic routing but simpler and predictable infrastructure
- Supported languages: `pl` (Polish) and `en` (English)

## Core Features
- Structured presentation of training programs and disciplines
- Configurable class schedule
- Instructor profiles and content sections
- Conversion-oriented contact flow
- **Client-side loader for language initialization**
- SEO optimization (semantic HTML, metadata, performance tuning)

## Performance & Quality
- Optimized asset delivery, lazy loading, and responsive images
- Mobile-first design aligned with user behavior
- Lighthouse-focused improvements (performance, accessibility, SEO)
- Clean, consistent, and maintainable codebase
- Minimal flicker during language initialization thanks to loader

## Tech Stack
Frontend: Next.js / React
Language: TypeScript
Styling: Tailwind / CSS Modules
Deployment: Vercel / Dhosting
Tooling: ESLint, Prettier

## My Role

Full ownership of the project:

- Requirements gathering with client
- Architecture design and technical decisions
- Implementation of UI and core functionality
- **Internationalization with client-side loader**
- Performance and SEO optimization
- Deployment and production delivery

## Impact
- Production website actively used by a real client
- Improved mobile performance and accessibility
- Increased visibility in local search (SEO-focused architecture)
- Established a scalable foundation for future features
- Smooth language switching without content flicker

## Engineering Takeaways
- Pragmatic decision-making: balancing scalability with delivery speed
- Designing under real-world constraints (budget, hosting, non-technical users)
- Maintaining client-side state with **language context** for a better UX
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

Contact

Feel free to reach out if you’d like to discuss architecture decisions or implementation details.
