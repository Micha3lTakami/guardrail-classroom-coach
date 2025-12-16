# GuardRail - Product Requirements Document (Final)

## Product Overview

**The Problem:** Students are increasingly using AI tools like ChatGPT to complete assignments without actually learning the material. Teachers find themselves caught between two impossible choices: banning AI entirely (which is unrealistic and counterproductive) or ignoring the problem (which undermines educational outcomes). There's no middle ground that helps teachers harness AI as an educational tool rather than a shortcut.

**Our Users:** K-12 and higher education teachers who want to maintain academic integrity while embracing AI as part of modern education. These are educators who understand that AI isn't going away and want practical tools to guide students toward deeper learning.

**What GuardRail Does:** GuardRail is an AI-powered teaching assistant that transforms student AI misuse into learning opportunities. It operates through three core functions:
1. **Guide** - Intercepts AI shortcut attempts and redirects students with Socratic questions
2. **Analyze** - Provides insights into individual and classroom-wide learning gaps based on AI interaction patterns
3. **Plan** - Generates targeted lesson plans based on actual student needs

---

## Core Features & Status

| Feature | Status | AI-Dependent |
|---------|--------|--------------|
| Landing page with product messaging | ✅ Implemented | No |
| AI Classroom Coach chatbot | ✅ Implemented | Yes |
| Guide feature demonstration | ✅ Implemented (static mockups) | Partially (concept) |
| Analyze dashboard mockups | ✅ Implemented (static images) | No (mockup only) |
| Plan feature mockups | ✅ Implemented (static images) | No (mockup only) |
| Email waitlist signup | ✅ Implemented (frontend) | No |
| Chrome extension for real-time interception | 🔮 Future | Yes |
| LMS integrations (Canvas, Google Classroom) | 🔮 Future | No |
| Student data analytics dashboard | 🔮 Future | Yes |
| AI-generated lesson plan engine | 🔮 Future | Yes |
| Teacher authentication & accounts | 🔮 Future | No |

---

## AI Specification (Final)

### What the AI Does
The current prototype includes an AI-powered "Classroom Coach" chatbot that:
- **Task:** Answers teacher questions about GuardRail features and provides classroom strategies for managing student AI use
- **Inputs:** Natural language questions from teachers
- **Outputs:** Contextual, supportive responses about GuardRail's Guide/Analyze/Plan workflow

### User Flow Integration
The AI chatbot appears as:
1. A floating chat widget in the bottom-right corner of the landing page
2. A dedicated "Open AI Coach" button in the "Meet Your Classroom Coach" section
3. Teachers can ask questions about features, get implementation advice, and explore use cases

### Model & Technology
- **Current Implementation:** Pattern-matching demo responses (placeholder)
- **Designed For:** Google Gemini API integration
- **Target Model:** Gemini Pro or equivalent conversational LLM

### Guardrails & Constraints
1. **Scope Limitation:** The AI only answers questions about GuardRail and classroom AI strategies - it doesn't help with other topics
2. **Tone:** Responses are supportive, non-judgmental, and teacher-focused
3. **Length:** Responses capped at 2-3 paragraphs for practical readability
4. **System Prompt:** Carefully crafted to keep responses aligned with GuardRail's educational mission
5. **No Student Data:** The demo chatbot doesn't access any real student information

---

## Technical Architecture

### Front-End Technologies
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom design system tokens
- **UI Components:** Shadcn/ui component library
- **Routing:** React Router DOM

### AI Integration Architecture
```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   React App     │────▶│  ChatWidget.tsx  │────▶│  Gemini API     │
│   (Frontend)    │     │  (Component)     │     │  (Future)       │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                               │
                               ▼
                        ┌──────────────────┐
                        │  Pattern Match   │
                        │  (Current Demo)  │
                        └──────────────────┘
```

### External Services (Planned)
- Google Gemini API for conversational AI
- Supabase for authentication and database (via Lovable Cloud)
- Potential LMS API integrations

---

## Prompting & Iteration Summary

### Key Prompts Used

**1. Initial Product Concept:**
> "Build a landing page for GuardRail, an AI-powered teaching assistant that helps teachers manage student AI use through Guide, Analyze, and Plan features."

This prompt established the core product vision and resulted in the initial landing page structure.

**2. Feature Section Design:**
> "I want three sections, one for each feature benefit pair. Use these screenshots accordingly next to each feature benefit pair. [Copy provided]"

This refined the visual presentation and ensured feature sections had consistent structure with alternating image layouts.

**3. Chatbot Implementation:**
> "Add an AI chatbot that helps teachers understand GuardRail's features and provides classroom strategies."

This prompt led to the ChatWidget component with system prompt design and conversation flow.

**4. Full Section Restoration:**
> "Add these sections back below the three features. [Detailed copy for all sections] Also include a button in the meet your classroom coach to open the ai tool."

This comprehensive prompt demonstrated how to effectively combine multiple requirements into a single iteration.

### Prompt Evolution Learnings
- **Specificity matters:** Detailed copy and section descriptions produced better results than vague requests
- **Visual references help:** Uploading mockup images improved understanding of desired outcomes
- **Incremental building works:** Breaking complex features into steps (chatbot logic, then UI, then integration) was more effective than trying to build everything at once

---

## UX & Limitations

### Intended User Journey
1. **Discover:** Teacher lands on homepage, understands the problem GuardRail solves
2. **Explore Features:** Scrolls through Guide, Analyze, Plan sections with visual mockups
3. **Try the AI:** Opens the Classroom Coach chatbot to ask questions
4. **Convert:** Signs up for the waitlist with email and school type

### Known Limitations
1. **Chatbot is demo-only:** Uses pattern matching, not actual LLM integration
2. **Static mockups:** Dashboard images are not interactive
3. **No backend:** Waitlist form doesn't actually submit data
4. **No authentication:** No teacher accounts or data persistence

### Ethical & Trust Considerations
- **When NOT to rely on this tool:**
  - For actual classroom decisions (demo only)
  - For real student data analysis (no data processing)
  - For generating actual lesson plans (mockup only)
- **Privacy note:** The demo chatbot doesn't collect or store conversation data

---

## Future Roadmap

1. **Integrate Gemini API:** Replace pattern-matching with actual LLM-powered responses for the Classroom Coach

2. **Build Chrome Extension:** Develop the core "Guide" functionality that intercepts student AI requests in real-time

3. **Create Analytics Dashboard:** Build interactive Analyze features with real data visualization

4. **Implement Authentication:** Add teacher accounts, school management, and data persistence via Lovable Cloud

5. **LMS Integrations:** Connect with Canvas, Google Classroom, and other platforms for seamless workflow integration

---

*Last Updated: December 2024*
*Repository: GuardRail AI*
