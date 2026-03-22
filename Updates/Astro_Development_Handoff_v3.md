# Frontend Web Developer Agent Handoff: Homepage V3 Upgrade

**Target Action:** You are upgrading `src/pages/index.astro` from the V2 draft to the V3 standard.
**Framework Context:** Astro 5 + Tailwind CSS v4.

---

## 1. Context & The V3 Upgrade

HextonHQ is a 2026 AI Architecture Agency. The brand aesthetic is "dark mode, glassmorphic, highly interactive, yet minimalist." The primary colors are a Violet-to-Rose gradient (`#A855F7 → #FB7185`). 

The original homepage (V2) possessed a strong brand narrative but lacked structural elements required to establish technical authority and Answer Engine Optimization (AEO).

**We have now upgraded the copy to V3.** You must integrate these new sections into the physical `.astro` homepage.

### What has changed from V2 to V3?
1. **[NEW] Section 2: The Interactive Showcase:** A fast-moving glassmorphic carousel mapping exactly what we do.
2. **[UPGRADED] Section 4: Our Capabilities:** Replaced the static text list with an 8-card interactive slider architecture.
3. **[NEW] Section 5: The Infrastructure:** Added a Tech Stack matrix for CTOs/Technical founders.
4. **[NEW] Section 8: Common Questions:** Added a strictly AEO-optimized FAQ section loaded with JSON-LD schema.

---

## 2. Pre-Built UI Components

To support this content upgrade, **the structural UI components have already been built for you.**
You do not need to build them from scratch. Simply import them into `src/pages/index.astro` and pass the V3 content as props.

They are located in `src/components/ui/`:
* `CapabilitiesCarousel.astro`: Handles the 8-card Service Architecture slider in Section 4 using CSS scroll-snapping and a native Z-index Intersection Observer.
* `OldVsNewGrid.astro`: Handles comparative AEO metrics.
* `TechStackMatrix.astro`: Handles the infrastructure logos in Section 5.
* `FAQAccordion.astro`: Handles the Common Questions in Section 8 and automatically injects strict `application/ld+json` schema into the DOM.

---

## 3. The Raw V3 Homepage Content

Below is the complete, user-approved V3 copy that must replace the existing text in `src/pages/index.astro`.

### Section 1: HERO
**Badge**: `The AI Adoption Company`
**Headline**: Extraordinary things happen when extraordinary technology reaches ordinary people.
**Subtitle**: The world's most powerful tools shouldn't be locked behind Fortune 500 budgets. We build open-source AI architecture that scales your growth, automates your operations, and trains your team to own it.
**CTA**: `Build Your Architecture` → /contact
**Secondary CTA**: `See Our Beliefs` → scrolls to brand story

### Section 2: THE INTERACTIVE SHOWCASE (Social Proof)
**Section Label:** `Our Output`
**Headline:** Not theory. Architecture.
- **[Card 1]:** *Metric:* "4 Hours → 2 Seconds." *Description:* Automated CRM Lead Enrichment via n8n.
- **[Card 2]:** *Metric:* "+125% Conversion." *Description:* Full-Funnel Growth Hacking & CRO.
- **[Card 3]:** *Metric:* "Zero Lock-in." *Description:* Open-Source Marketing Stack Deployment.

### Section 3: THE BRAND STORY — "This Has Happened Before"
**Headline**: This has happened before.
**Body**: When electricity arrived, factories that adopted it didn't just get brighter rooms — they redesigned everything. Assembly lines. Shifts. Entire industries, born overnight. The ones that waited? They didn't get a second chance. AI is that moment... We started HextonHQ because we believe the size of your team should never limit the size of your ambition.

### Section 4: OUR CAPABILITIES (The Offerings)
*(Use the `CapabilitiesCarousel.astro` component here)*
**Section Label**: `Our Architecture`
**Headline**: We don't sell advice. We install systems.

**[Card 1]**
> **Hook:** You are paying brilliant people to do robot work. Let's fix that.
> **Title:** AI & Workflow Automation
> **Description:** We deploy autonomous agent systems that handle your lead generation, enrichment, and outreach behind the scenes. Your team does the closing; the system does the rest.

**[Card 2]**
> **Hook:** Great products don't sell themselves. Systems do.
> **Title:** Fractional CMO & Marketing Ops
> **Description:** We don't just hand you a strategy deck. We step in to audit your stack, install the growth engines, and run your marketing operations like a high-precision machine.

**[Card 3]**
> **Hook:** When AI answers the user's question, where does your website go?
> **Title:** Generative Engine Optimization (GEO)
> **Description:** Traditional search is fading. We optimize your brand to be cited by the AI engines—like Perplexity and Google's AI Overviews—that your future customers are already using.

**[Card 4]**
> **Hook:** Buying the software is the easy part. Getting your team to use it is where we come in.
> **Title:** AI Enablement & Consulting
> **Description:** We run hands-on, intensive sprints to turn your staff from hesitant users into AI-native builders who actually own and understand their new workflows.

**[Card 5]**
> **Hook:** How much of your week is spent moving information from one tab to another?
> **Title:** Internal Process Automation
> **Description:** We eliminate the operational bottlenecks in HR, finance, and internal ops by installing invisible automations that run exactly the way your business does.

**[Card 6]**
> **Hook:** Stop paying monthly rent for software you don't even own.
> **Title:** Custom CRM & Client Portals
> **Description:** We build proprietary infrastructure—tailored to your exact workflow—on enterprise-grade open-source tools. You own the code, the data, and the servers. Zero seat licenses.

**[Card 7]**
> **Hook:** You have dashboards. You just don't have answers.
> **Title:** Data Infrastructure & Analytics
> **Description:** We deploy secure, self-hosted data stacks that connect the dots between your marketing spend and your actual revenue, giving you total privacy and absolute clarity.

**[Card 8]**
> **Hook:** Your five-person team can out-execute a fifty-person agency.
> **Title:** Specialized Team Upskilling
> **Description:** We deliver deep, technical upskilling for your ambitious marketing and sales units. We teach them the exact frameworks to deploy, prompt, and manage AI systems that scale your output tenfold.

### Section 5: THE INFRASTRUCTURE (Tech Stack Matrix)
*(Use `TechStackMatrix.astro` here)*
**Headline**: Open by default. Scalable by design. We build on the world's best open-source and enterprise frameworks.
- **Automation:** n8n, Make, Zapier
- **AI/LLMs:** OpenAI, Anthropic, LangChain, Vercel AI SDK
- **Data/Hosting:** Supabase, Dokploy, Postgres, Matomo
- **Frontend:** Astro, Next.js, Payload CMS

### Section 6: IDENTITY
**Adopt.** -> We don't sell AI. We install it.
**Scale.** -> From go-to-market strategy to architecture.
**Prepare.** -> We train individuals and teams to operate in an AI-native world.

### Section 7: VALUES
1. Build, don't advise.
2. Open by default.
3. Earn trust, not dependence.
4. Stay a student.
5. Measure in impact, not hours.

### Section 8: COMMON QUESTIONS (FAQ)
*(Use the `FAQAccordion.astro` component here)*
**Headline**: The Clarity You Need.
*   **Q: Do you charge an upfront fee or a monthly retainer?**
    *   **A:** We offer both. For custom AI architecture (like a conversational agent or proprietary CRM), we charge a flat build fee. For Fractional CMO and continuous Growth Hacking, we operate on a fixed monthly retainer. 
*   **Q: What do you mean by "Open-Source Infrastructure"?**
    *   **A:** Most agencies build your systems on expensive platforms like HubSpot or Salesforce, meaning you are locked in forever. We build on enterprise-grade open-source tools hosted on your own servers. You own the code and the data.
*   **Q: How does the Team Enablement work?**
    *   **A:** It's not a generic PowerPoint. We come in (remotely or in-person) and run agile sprints, training your marketing and sales staff exactly how to use the custom automation workflows we just built for you.

### Section 9: FOUNDER'S NOTE
> "I built HextonHQ for the builder in between. The person with the ambition of a giant and the budget of a startup..."
> — **Vishnu Raam**, Founder

### Section 10: CLOSING CTA
**Headline**: The divide is real. Which side are you building on?
**CTA**: `Start the Conversation` → /contact
