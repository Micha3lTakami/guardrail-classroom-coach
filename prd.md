# GuardRail: Final PRD

## 1. Product Overview

The problem is straightforward: students are using AI tools like ChatGPT as shortcuts to avoid learning, and teachers don't have a practical way to redirect that behavior toward genuine understanding. When a student asks ChatGPT to "write my essay on photosynthesis" or "solve this calculus problem," they're bypassing the cognitive work that actually builds knowledge. Teachers know this is happening but can't intervene in the moment because they don't see these interactions.

GuardRail is an educational Chrome extension designed for middle and high school classrooms. The core idea is to intercept student AI requests that look like academic shortcuts and redirect them into pedagogical conversations instead. When a student tries to get ChatGPT to do their homework, GuardRail catches the request and responds with questions that guide them toward understanding the concept themselves. The current prototype is a marketing website with a functional AI chatbot that demonstrates this "guide, don't give answers" philosophy. The chatbot helps teachers evaluate whether GuardRail would work in their classroom by answering questions about implementation, privacy, and educational approach.

---

## 2. Core Features & Status

**Implemented:**
- Marketing website with clear value proposition (conventional)
- Three-pillar feature breakdown: Real-time Intervention, Learning Gap Analysis, Teacher Dashboard (conventional)
- Classroom Coach AI chatbot for teacher questions (AI-powered)
- Responsive design for desktop and mobile (conventional)
- Waitlist signup form (conventional, frontend-only)

**Partially Implemented:**
- AI chatbot with limited knowledge scope (answers GuardRail questions only, not general teaching advice)

**Future:**
- Actual Chrome extension that intercepts student browser requests (AI-powered)
- Backend system to log and analyze student AI interactions (conventional + AI)
- Teacher dashboard with real-time alerts and learning gap insights (conventional + AI)
- Integration with LMS platforms like Canvas or Google Classroom (conventional)
- Admin controls for customizing intervention prompts and sensitivity levels (conventional)

---

## 3. AI Specification (Final)

**What the AI Does:**
The Classroom Coach chatbot answers teacher questions about GuardRail's functionality, implementation, and educational philosophy. It takes natural language questions as input and generates conversational responses that explain how GuardRail works, address privacy concerns, and provide context about AI in education.

**User Flow Placement:**
The chatbot appears as a floating widget in the bottom-right corner of the GuardRail website. Teachers can click it at any point while browsing the site to ask questions. It opens in an overlay that doesn't navigate away from the current page.

**Model/Tool:**
The chatbot is built with a pattern-matching system that references pre-written responses rather than calling a live LLM API. This was a practical decision for the prototype to avoid API costs and rate limiting concerns during the assignment evaluation period. A production version would use the Gemini API or Claude API for more flexible conversational responses.

**Constraints & Guardrails:**
- **Scope limitation:** The chatbot only answers questions about GuardRail and general classroom AI strategy. It explicitly declines requests for curriculum advice, specific lesson plans, or student evaluation guidance.
- **No data collection:** The current implementation doesn't log conversations or collect any user data. This keeps the prototype simple and avoids privacy concerns during development.
- **Supportive tone:** The system prompt emphasizes being helpful without being prescriptive. The chatbot offers options and explanations rather than telling teachers what they "should" do.
- **Transparency about limitations:** The chatbot acknowledges when it doesn't have an answer and suggests the teacher reach out via the waitlist for more specific information.

---

## 4. Technical Architecture (Reality Check)

**Front-end:**
- React (via Lovable's build system)
- Tailwind CSS for styling
- Deployed as a static site

**AI Integration:**
- The chatbot widget is a React component with local state management
- Currently uses pattern matching against a predefined knowledge base rather than live API calls
- A production version would make POST requests to Gemini API or Claude API from the frontend with a system prompt defining GuardRail's chatbot personality

**External Services:**
- None for the current prototype (no backend, no database, no API calls)
- Future version would need: Chrome Extension API for request interception, a backend server (probably Node.js/Express or Python/Flask) to handle AI API calls, database (probably PostgreSQL) for storing student interaction logs and teacher settings

**Data Flow (Current):**
User types question → React component processes input → Pattern matcher checks against knowledge base → Response rendered in chat interface

**Data Flow (Future Product):**
Student makes AI request in browser → Chrome extension intercepts via webRequest API → Extension sends request to backend → Backend calls LLM API with GuardRail system prompt → LLM generates pedagogical response → Backend logs interaction → Response sent back to extension → Extension displays response to student instead of original AI tool

---

## 5. Prompting & Iteration Summary

**Key Prompt 1: Initial Website Build**
"Create a marketing website for GuardRail, an educational Chrome extension that intercepts student AI requests and turns them into teaching moments. Use a clean, modern design with alternating feature sections. Include a hero section, three core features (Real-time Intervention, Learning Gap Analysis, Teacher Dashboard), and a waitlist signup."

This prompt worked because it was specific about both the product concept and the desired visual structure. I learned that front-loading context about what the product does helps the AI make better design decisions that match the brand's educational mission.

**Key Prompt 2: Chatbot Implementation**
"Add a chatbot widget in the bottom right corner that teachers can use to ask questions about GuardRail. It should open in an overlay, have a friendly but professional tone, and answer questions about how GuardRail works, privacy concerns, and implementation. Keep responses concise and actionable."

The first version of this prompt produced a chatbot that was too generic. I iterated by adding more specificity about tone ("friendly but professional") and scope ("questions about how GuardRail works"). The more specific I was about what the chatbot should NOT do, the better the implementation became.

**Key Prompt 3: Design Refinement**
"Adjust the spacing in the feature sections to give more breathing room. Increase the padding between sections and make the typography hierarchy clearer. The hero CTA button should be more prominent with stronger contrast."

This taught me that design prompts need to be extremely specific about what's wrong and what should change. Vague requests like "make it look better" don't work. But concrete adjustments like "increase padding" or "stronger contrast" produce immediate improvements.

**Key Prompt 4: Content Iteration**
"Rewrite the hero headline to emphasize that GuardRail turns AI shortcuts into learning opportunities. The current version is too technical. Make it more benefit-focused from a teacher's perspective."

This was important for learning that AI-generated copy tends to be either too generic or too jargon-heavy. The best results came from giving the AI a clear audience (teachers) and a specific outcome (benefit-focused messaging). I iterated on this multiple times until the language felt natural and directly addressed teacher pain points.

**What I Learned:**
Prompt design is about specificity and iteration. The more context I provided upfront (product purpose, target audience, desired outcome), the better the first attempt was. But even good prompts needed refinement. I learned to treat prompts like debugging: identify what's not working, make a specific adjustment, and test again. The biggest lesson was that AI is better at execution than at understanding implicit requirements. If I wanted something specific, I had to say it explicitly.

---

## 6. UX & Limitations

**Intended User Journey:**
1. Teacher lands on GuardRail website (probably from a Google search or social media post about AI in education)
2. Reads the hero section to understand the core value proposition: GuardRail intercepts student AI shortcuts and redirects them into learning
3. Scrolls through the three feature sections to understand how it works (real-time intervention, learning gap analysis, teacher dashboard)
4. Either clicks the chatbot to ask specific questions OR scrolls directly to waitlist signup
5. If using chatbot: asks questions about implementation, privacy, or how GuardRail fits their classroom
6. Signs up for the waitlist to be notified when GuardRail launches

**Known Limitations:**
- The chatbot is not actually intelligent. It uses pattern matching, so it only works for questions that closely match the pre-defined knowledge base. Anything too specific or creative gets a generic "that's a great question" response.
- No backend means the waitlist form doesn't actually save anywhere. It's purely for demonstration purposes.
- The website doesn't show any real product screenshots or demo videos because the actual Chrome extension doesn't exist yet.
- Mobile chatbot experience is janky. The overlay covers too much of the screen on smaller devices.
- No authentication or teacher accounts, so there's no way to personalize the experience or save preferences.

**Ethical & Trust Limitations:**
Teachers should NOT rely on this chatbot for actual classroom advice. It's a demo that shows GuardRail's conversational approach, not a substitute for professional development or pedagogical expertise. The chatbot is designed to answer questions about the GuardRail product itself, not to make educational recommendations.

More importantly, the full GuardRail product (when built) should be transparent about its limitations. It can catch obvious homework shortcuts, but it can't detect every form of academic dishonesty, and it shouldn't be used as a surveillance tool. The goal is to create teaching moments, not to punish students for using AI. Teachers need to understand that GuardRail is one tool in their classroom management toolkit, not a complete solution to AI misuse.

---

## 7. Future Roadmap

If I had more time, here's what I'd prioritize:

- **Build the actual Chrome extension MVP.** The most important next step is creating a working prototype that intercepts student browser requests. This would prove the technical feasibility of the core product concept and let us test whether the pedagogical redirection actually works with real students.

- **Implement live LLM integration for the chatbot.** Replace the pattern-matching system with actual API calls to Gemini or Claude so the chatbot can handle more diverse teacher questions. This would make the website demo much more convincing and help teachers understand GuardRail's conversational capabilities.

- **Add a teacher dashboard with real interaction data.** Even a simple backend that logs sample student interactions would let teachers see what the learning gap analysis and intervention history would look like. This is critical for selling the product because teachers need to visualize how they'd use GuardRail day-to-day.

- **Conduct user testing with real teachers.** Right now I'm making assumptions about what teachers want and need. Actual interviews and usability testing would reveal whether the three-pillar feature set (intervention, analysis, dashboard) matches real classroom priorities or if we need to pivot.

- **Build evaluation metrics for AI intervention quality.** This is the hardest part: how do we measure whether GuardRail's pedagogical responses actually help students learn? We'd need to define success metrics (time spent on task, comprehension assessments, teacher feedback) and build a system to track them. This is essential for proving GuardRail's educational value and for iterating on the intervention prompts to make them more effective.
