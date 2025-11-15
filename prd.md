# GuardRail – Product Requirements Document (PRD)

**Version:** Phase 2 Prototype  
**Date:** November 2025  
**Product Type:** AI Governance & Monitoring Platform for Education  
**Target Audience:** Educators (Grades 7–12)

---

## 1. Overview & Goal

GuardRail is an AI governance and monitoring platform designed for educators teaching grades 7–12. Its goal is to prevent students from using AI as a shortcut by intercepting, analyzing, and redirecting their interactions with large language models.

In this **Phase 2 prototype**, the goal was to build a working, hosted marketing site that demonstrates GuardRail's mission and incorporates a functional AI component—a teacher-facing "Classroom Coach" chatbot.

The prototype focuses on communicating GuardRail's core narrative (**Guide → Analyze → Plan**) and giving teachers a hands-on example of the kind of AI support GuardRail will provide.

---

## 2. Core Features (Implemented)

### Marketing Website

- **Hero section** explaining GuardRail's mission
- **"Guide / Analyze / Plan"** feature explanations
- **How It Works** section with 3-step flow
- **Waitlist CTA** and consistent branding

### AI Feature – GuardRail Classroom Coach (Chatbot)

Embedded chat interface with:
- User input box
- Conversation history
- Assistant responses
- Custom system prompt tailored to teachers
- Simulated AI backend with clear structure for integrating Gemini or another LLM

### AI Capabilities Included in Prototype

Conversational guidance for teachers on:
- Handling AI misuse
- Encouraging critical thinking
- Understanding the GuardRail workflow
- AI-generated explanations tailored to GuardRail's brand and purpose

---

## 3. AI Specification

### What the AI Does

The prototype includes a **Classroom Coach chatbot** that models the teacher-facing AI support GuardRail would eventually provide. It performs:

- **Conversational reasoning:** Answering teacher questions about student AI use
- **Pedagogical guidance:** Suggesting responses, redirections, and classroom policies
- **Feature explanation:** Describing how GuardRail's Guide / Analyze / Plan pipeline works

**Input:** Teacher's typed question  
**Output:** Concise, contextual educational guidance

### Where AI Appears in the User Flow

1. User scrolls to the "AI Assistant" demo section or opens the chat widget
2. User asks a question about student AI use or GuardRail functionality
3. The AI (or simulated function) returns a teacher-friendly response
4. Conversation history persists in the UI

### Why This AI Was Chosen

- GuardRail's mission relies heavily on interpreting language and coaching educators—tasks best suited to an LLM
- A chatbot effectively demonstrates how an in-product "coach" could work
- It shows real AI behavior (generation + reasoning), meeting assignment requirements

### How AI Supports the Product's Goal

- Models responsible, pedagogical AI behavior
- Demonstrates how GuardRail turns shortcuts into learning moments
- Helps teachers understand and imagine the future full product
- Provides an interactive proof-of-concept aligned with the mission described in Phase 1

---

## 4. Technical Architecture (Prototype)

### Frontend

- Static `index.html` marketing site
- `styles.css` for layout and branding
- `script.js` containing:
  - Chat UI logic
  - `callGuardRailAI()` function simulating or routing AI calls
  - Placeholder for Gemini API integration

### AI Connection

Architected to connect to Gemini through Google AI Studio:
- Example fetch payload included
- No keys stored client-side

### Hosting

Can be opened locally or uploaded to GitHub Pages / AI Studio hosting.

---

## 5. Prompting Strategy & Iteration Log

These are the prompts used during development:

### Landing Page Refinement Prompt
**Prompt:** "Refine the GuardRail landing page hero copy to better emphasize 'Guide, Analyze, Plan' for teachers and align the tone with educational technology branding."

**Result:** Cleaner, more compelling hero messaging.

### CSS Layout Prompt
**Prompt:** "Generate responsive CSS improvements for the feature sections, ensuring consistent spacing, mobile layout, and modern visual hierarchy."

**Result:** More polished spacing and section consistency.

### Chatbot System Prompt Improvement
**Prompt:** "Improve the system prompt for the GuardRail Classroom Coach chatbot to ensure responses are teacher-focused, supportive, and aligned with the GuardRail mission."

**Result:** Higher-quality and more consistent AI responses.

---

## 6. UX & Design Notes

- **Brand tone:** Calm, modern, teacher-friendly
- **Layout emphasis:** Three pillars: Guide, Analyze, Plan
- **Chatbot design:** Intentionally lightweight and accessible
- **Color palette:** Blues/neutrals to communicate trust and safety
- **Navigation:** Simple anchor links for a smooth single-page experience

---

## 7. Next Steps (Phase 3)

### Planned Enhancements

- Connect the chatbot to a real Gemini endpoint
- Add an educator-facing dashboard mockup
- Expand chatbot to include:
  - Lesson plan suggestions
  - Policy generation tools
  - Real GuardRail redirection examples
- Add a mock "student activity visualization" section
- Strengthen guardrails in the AI prompt for safety and consistency

### Long-Term Roadmap

- Full Chrome extension prototype
- Real-time prompt interception demo
- Multi-classroom analytics
- Authentication + role-based dashboards

---

