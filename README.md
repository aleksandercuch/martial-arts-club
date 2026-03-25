Martial Arts Club Platform

Live: https://gdanskaszkolafechtunku.pl/

Staging: https://gdanska-szkola-fechtunku.vercel.app/

Repository: https://github.com/aleksandercuch/martial-arts-club


Context & Problem

This project was developed for a real martial arts school that needed a modern, performant web presence to replace a low-visibility, static solution.

Key challenges included:

Presenting structured content (classes, schedules, disciplines) in a clear way

Ensuring strong SEO for local discovery

Delivering excellent performance on mobile devices (primary user base)

Keeping the solution maintainable and easy to extend


Architecture & Design Decisions

Component-driven architecture to ensure reusability and scalability

Separation of concerns between UI, content, and configuration

Responsive-first approach with emphasis on mobile UX

Static generation / optimized rendering strategy for performance and SEO

Internationalization Approach:
The website uses duplicated static pages for Polish (/pl) and English (/en) content. This approach was chosen due to the client’s requirement for a fully static solution on Dhosting. While Next.js supports dynamic [locale]-based routing and automatic redirects, implementing it would have introduced additional runtime complexity and hosting costs. Choosing a static, duplicated-page structure allowed us to deliver a fast, SEO-optimized, and maintainable solution that fit within the client’s budget and hosting constraints.

Minimal dependency footprint to reduce bundle size and long-term maintenance cost


Trade-offs:

Prioritized simplicity and reliability over over-engineering (e.g., avoided unnecessary backend complexity)

Chose static/dynamic balance based on content update frequency


Core Features

Structured presentation of training programs and disciplines

Dynamic or configurable class schedule

Instructor profiles and content sections

Contact flow optimized for conversion

SEO optimization (semantic HTML, metadata, performance metrics)


Performance & Quality

Optimized asset delivery and lazy loading strategies

Lighthouse-focused improvements (performance, accessibility, SEO)

Mobile-first optimization due to target audience behavior

Clean, maintainable codebase with consistent patterns


Tech Stack

Frontend: Next.js / React

Styling: Tailwind / CSS Modules

Deployment: Vercel / Dhosting

Tooling: ESLint, Prettier


My Contribution

Owned the project end-to-end: from requirements gathering to deployment

Designed the architecture and made key technical decisions

Implemented the UI and core functionality

Optimized for performance, SEO, and accessibility

Delivered a production-ready solution used by a real client


Impact

Significantly improved the club’s online presence

Increased accessibility for new users via search and mobile UX

Provided a scalable foundation for future features (e.g., booking, CMS integration)


Engineering Takeaways

Pragmatic decision-making: balancing scalability with delivery speed

Designing for real-world constraints (non-technical client, content changes)

Building maintainable frontends without unnecessary complexity

Focusing on user intent rather than purely technical solutions


Future Improvements

CMS integration for non-technical content management

Online booking / scheduling system

Analytics-driven UX improvements

Internationalization (i18n) support

Local Setup
git clone https://github.com/aleksandercuch/martial-arts-club.git
cd martial-arts-club
npm install
npm run dev
Contact

Feel free to reach out if you’d like to discuss architecture decisions or implementation details.
