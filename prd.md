# Product Requirements Document (PRD)
## GuardRail - Phase 2 Prototype

**Version**: 2.0  
**Date**: 2025  
**Status**: Prototype Phase  
**Document Owner**: [Your Name]

---

## 1. Overview & Goal

### Product Vision

GuardRail is an AI-powered teaching assistant designed to help K–12 and higher education teachers transform student AI use from an academic integrity problem into a learning opportunity.

### Problem Statement

Students are increasingly using AI tools like ChatGPT to complete assignments without genuine learning. Teachers face a dilemma: banning AI is impractical and ignores its educational potential, while ignoring AI use undermines learning outcomes. Current solutions (AI detectors) are unreliable and adversarial.

### Solution

GuardRail offers a **third path**: redirect student AI shortcuts into learning opportunities through Socratic questioning, analyze patterns in student struggles to identify learning gaps, and help teachers plan targeted lessons based on real student needs.

### Phase 2 Goals

This prototype demonstrates:

1. **Marketing Website**: Professional landing page explaining GuardRail's value proposition to teachers and schools
2. **Interactive AI Demo**: Functional chatbot ("Classroom Coach") that exemplifies GuardRail's conversational AI capabilities
3. **AI Integration Point**: Clear, documented pathway to connect the chatbot to Google Gemini or other LLMs
4. **Documentation**: Complete technical and product documentation suitable for university assignment submission

---

## 2. Core Features (Implemented)

### 2.1 Marketing Website

**Purpose**: Attract teachers and schools to join the waitlist and understand GuardRail's value

**Sections**:

- **Hero Section**
  - Clear value proposition: "Stop Worrying About Student AI Use. Start Teaching Through It."
  - Primary CTA: "Get Early Access" (links to waitlist form)
  - Secondary CTA: "Try the AI Coach" (opens chatbot)
  - Social proof statistics (10,000+ teachers on waitlist, 95% report better engagement)

- **How It Works**
  - Visual explanation of the Guide → Analyze → Plan workflow
  - Three-step process with icons and descriptions
  - Hover effects and smooth animations for engagement

- **Features Grid**
  - Six feature cards explaining specific capabilities:
    - Smart Redirection (Guide feature)
    - Learning Gap Analytics (Analyze feature)
    - AI Lesson Planner (Plan feature)
    - LMS Integration
    - Privacy & Security (FERPA compliance)
    - Real-Time Monitoring
  - Each card has an icon, title, and description

- **AI Assistant Section** ⭐ *Contains AI component*
  - Introduction to the Classroom Coach chatbot
  - Explanation of what the bot does and who it's for
  - Technical note explaining the AI implementation (system prompt, LLM model)
  - List of chatbot capabilities

- **About / For Schools**
  - Problem statement with statistics (89% of students use AI for homework, 67% of teachers feel unprepared)
  - GuardRail's philosophy: AI as teaching tool, not enemy
  - Success metrics from pilot schools (95% report increased critical thinking)
  - CTA to bring GuardRail to schools

- **Waitlist Form**
  - Email capture
  - School type selection (Elementary, Middle, High, College)
  - Submit button with form validation
  - Note about pilot program prioritization

- **Footer**
  - Brand logo and tagline
  - Quick links (Product, Company, Support)
  - Copyright notice

### 2.2 GuardRail Classroom Coach Chatbot ⭐ **Primary AI Component**

**Purpose**: Demonstrate GuardRail's conversational AI capabilities and help teachers understand the product

**Location**: Floating chat widget in bottom-right corner

**Features**:

- **Chat Widget UI**
  - Floating button with gradient background
  - Expandable chat panel (400px wide, 600px tall)
  - Header with bot identity ("Classroom Coach"), online status, and close button
  - Scrollable message area with distinct styling for user vs. assistant messages
  - Input field with send button
  - Thinking indicator (animated dots) while waiting for response

- **AI Conversation Logic**
  - System prompt defines bot personality and knowledge (see Section 3.2)
  - Handles common teacher questions about:
    - How GuardRail's Guide, Analyze, Plan features work
    - Classroom strategies for managing student AI use
    - Privacy, security, FERPA compliance
    - Implementation, training, getting started
    - Pricing and pilot program information
  - Maintains conversation history within session
  - Provides helpful, concise responses (2-3 paragraphs)

- **Current Implementation**
  - Placeholder AI using pattern matching on keywords
  - Clearly documented integration point for real LLM (Gemini)
  - Comments explaining how to replace placeholder with API call

**Does NOT Involve AI** (Static Content):
- Navigation menu
- Hero section text and CTAs
- Features grid
- Statistics and testimonials
- Waitlist form

---

## 3. AI Specification

### 3.1 AI Task Definition

**What the AI does**:  
The Classroom Coach chatbot provides conversational guidance to teachers about GuardRail and classroom strategies for student AI use.

**Input**:  
Natural language questions from teachers, such as:
- "How does GuardRail respond if a student pastes in a full essay prompt?"
- "How can I turn a student's AI shortcut into a learning opportunity?"
- "How can GuardRail help me see where my class is struggling?"
- "What about privacy and FERPA compliance?"

**Output**:  
Conversational, teacher-focused responses that:
- Explain GuardRail's features (Guide, Analyze, Plan)
- Suggest practical classroom strategies
- Provide supportive, non-judgmental advice
- Are concise (2-3 paragraphs) and actionable
- Align with GuardRail's mission: turn AI shortcuts into learning opportunities

### 3.2 System Prompt

The chatbot operates using a detailed system prompt (stored in `script.js`):

```
You are GuardRail's Classroom Coach, an AI assistant designed to help teachers 
understand and use GuardRail effectively.

GuardRail is an AI-powered teaching assistant with three core capabilities:
1. **Guide**: When students try to use AI as a shortcut, GuardRail intercepts 
   and redirects them with Socratic questions.
2. **Analyze**: GuardRail analyzes patterns in student AI interactions to 
   identify learning gaps.
3. **Plan**: Based on analysis, GuardRail generates tailored lesson plans.

Your role:
- Answer questions about how GuardRail works
- Explain the Guide, Analyze, Plan workflow
- Suggest practical classroom strategies
- Help teachers understand how to turn AI shortcuts into learning opportunities
- Be supportive, non-judgmental, and teacher-focused
- Keep responses concise (2-3 paragraphs max)
- Focus on real classroom applications

Always remember: GuardRail's philosophy is that AI isn't the enemy of 
education—it's an opportunity to teach critical thinking.
```

### 3.3 Model Selection

**Recommended**: Google Gemini Pro (`gemini-pro`)

**Rationale**:
- Strong conversational abilities
- Good balance of quality and cost
- Supports system prompts / instructions
- Accessible via Google AI Studio (aligns with assignment requirements)

**Alternatives**:
- OpenAI GPT-4 (higher quality, higher cost)
- OpenAI GPT-3.5 Turbo (faster, lower cost, slightly less nuanced)
- Anthropic Claude (excellent for educational content)

**Parameters**:
- `temperature`: 0.7 (balanced creativity and consistency)
- `max_tokens`: 500 (concise responses, ~2-3 paragraphs)
- `top_p`: 0.9 (default)

### 3.4 Integration Architecture

**Current State (Placeholder)**:
- JavaScript function `callGuardRailAI(messages)` in `script.js`
- Simulates AI responses using keyword pattern matching
- Provides realistic demo experience without requiring API key

**Production Architecture** (to be implemented):

```
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│              │         │              │         │              │
│   Frontend   │────────▶│   Backend    │────────▶│    Gemini    │
│  (script.js) │  HTTPS  │  (Endpoint)  │   API   │   (Google)   │
│              │◀────────│              │◀────────│              │
└──────────────┘         └──────────────┘         └──────────────┘
     Chat UI           Proxy + Secrets          LLM Processing
```

**Recommended Approach**:
1. Create a backend endpoint (e.g., Cloud Function, Vercel serverless function)
2. Store Gemini API key securely in backend environment variables
3. Frontend sends messages to backend endpoint
4. Backend constructs request with system prompt + conversation history
5. Backend calls Gemini API and returns response to frontend
6. Frontend renders assistant message in chat

**Security Considerations**:
- Never expose API keys in frontend code
- Use HTTPS for all communications
- Implement rate limiting on backend endpoint
- Validate and sanitize user inputs
- Log requests for debugging (without logging PII)

---

## 4. Technical Architecture

### 4.1 Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS custom properties (variables), flexbox, grid
- **Fonts**: Google Fonts (Inter)
- **AI Integration**: Google Gemini (via API, to be connected)
- **Hosting**: GitHub Pages (static hosting)

### 4.2 File Structure

```
guardrail/
├── index.html          # Main website structure
├── styles.css          # Complete styling with design system
├── script.js           # Chat widget logic + AI integration point
├── README.md           # Technical documentation
└── prd.md              # This document
```

### 4.3 Key Technical Decisions

**Decision 1: Vanilla JavaScript (No Frameworks)**  
**Rationale**: Simplicity, zero build step, easy to understand and modify for educational purposes

**Decision 2: Placeholder AI Implementation**  
**Rationale**: Allows functional demo without requiring immediate API key setup; clear upgrade path documented

**Decision 3: Floating Chat Widget**  
**Rationale**: Non-intrusive, always accessible, familiar UX pattern (like Intercom, Drift)

**Decision 4: Mobile-First Responsive Design**  
**Rationale**: Teachers access content from various devices; mobile usage is significant in education

---

## 5. Design System

### 5.1 Color Palette

- **Primary**: `#2563eb` (Trust Blue) - GuardRail brand color
- **Secondary**: `#0ea5e9` (Sky Blue) - Accent and highlights
- **Accent**: `#f59e0b` (Warm Orange) - CTAs and emphasis
- **Success**: `#10b981` (Green) - Positive indicators
- **Text**: `#1e293b` (Dark Slate) - Primary text
- **Text Light**: `#64748b` (Slate) - Secondary text
- **Background**: `#ffffff` (White) - Main background
- **Surface**: `#f8fafc` (Light Gray) - Subtle backgrounds

### 5.2 Typography

- **Font Family**: Inter (Google Fonts)
- **Sizes**:
  - Hero title: `clamp(2.5rem, 5vw, 4rem)`
  - Section titles: `clamp(2rem, 4vw, 3rem)`
  - Body text: `1rem` (16px base)
  - Small text: `0.875rem`
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### 5.3 Spacing Scale

- XS: `0.5rem` (8px)
- SM: `1rem` (16px)
- MD: `1.5rem` (24px)
- LG: `2rem` (32px)
- XL: `3rem` (48px)
- 2XL: `4rem` (64px)

### 5.4 Component Patterns

**Buttons**:
- Primary: Gradient background (`#2563eb` → `#0ea5e9`), white text, shadow
- Secondary: Light background, border, hover state changes to primary color

**Cards**:
- White background, rounded corners (`0.75rem`), shadow on hover, smooth transitions

**Animations**:
- Transitions: 150-300ms cubic-bezier easing
- Hover effects: Lift (translateY), shadow increase
- Loading states: Pulsing dots for "thinking"

---

## 6. User Experience (UX)

### 6.1 User Flows

**Flow 1: Learn About GuardRail**
1. Land on hero section → Read value proposition
2. Scroll to "How It Works" → Understand 3-step process
3. Browse features → Learn specific capabilities
4. Scroll to waitlist → Join waitlist

**Flow 2: Try the AI Assistant**
1. Click "Try the AI Coach" button in hero OR click floating chat button
2. Chat panel opens with greeting message
3. Type question about GuardRail or student AI use
4. Receive helpful, conversational response
5. Continue conversation or close chat

**Flow 3: Apply for Pilot Program**
1. Navigate to waitlist section (via nav or scroll)
2. Enter email and select school type
3. Submit form
4. Receive confirmation (in real version: email follow-up)

### 6.2 Accessibility Considerations

- Semantic HTML (`<nav>`, `<section>`, `<button>`)
- Color contrast ratios meet WCAG AA standards (4.5:1 for text)
- Keyboard navigation support (tab through interactive elements)
- Focus states visible on all interactive elements
- Alt text for SVG icons (decorative, so `role="img"` with descriptive labels where needed)

### 6.3 Mobile Responsiveness

**Breakpoints**:
- Desktop: 769px+
- Tablet: 481-768px
- Mobile: 320-480px

**Mobile Optimizations**:
- Navigation collapses to show only logo and CTA button
- Hero stats stack vertically
- Feature cards stack in single column
- Chat widget adjusts to full width minus margins
- Font sizes scale down using `clamp()`

---

## 7. Prompting Strategy & Iteration Log

This project was developed iteratively using AI assistance (Google AI Studio). Below are example prompts used and their outcomes.

### 7.1 Example Prompt 1: Hero Copy Refinement

**Prompt**:
```
Refine the GuardRail landing page hero copy to better emphasize the 
'Guide, Analyze, Plan' workflow for K–12 teachers. Make it more compelling 
and action-oriented while maintaining a supportive, non-judgmental tone about 
student AI use. The headline should be under 15 words and the subheading 
should clearly explain the three-step process.
```

**Usage**: Improving marketing message clarity and emotional resonance  
**Outcome**: Updated hero section with stronger, more teacher-focused language

### 7.2 Example Prompt 2: CSS Layout Improvement

**Prompt**:
```
Generate CSS improvements for the GuardRail features section to enhance 
visual hierarchy and mobile responsiveness. Use CSS Grid for the layout, 
ensure cards have subtle hover effects (lift + shadow), and make sure the 
design works on screens as small as 320px. Maintain the blue/teal color 
palette and Inter font. Add smooth transitions (200-300ms).
```

**Usage**: Enhancing visual design and mobile experience  
**Outcome**: Implemented grid layout with hover states and responsive breakpoints

### 7.3 Example Prompt 3: System Prompt Enhancement

**Prompt**:
```
Help me improve the system prompt for the GuardRail Classroom Coach chatbot. 
The bot should:
- Give safe, teacher-focused advice about managing student AI use
- Avoid being preachy or judgmental
- Provide practical, classroom-ready examples
- Always tie responses back to GuardRail's Guide, Analyze, Plan features
- Keep responses concise (2-3 paragraphs, max 150 words)
- Use a supportive, knowledgeable tone like a fellow teacher

Make sure the prompt covers edge cases like pricing questions, privacy concerns, 
and implementation details.
```

**Usage**: Refining AI behavior for better teacher conversations  
**Outcome**: Enhanced system prompt with more specific guidance on tone, length, and content

### 7.4 Iteration Strategy

**Phase 1: Structure** (Initial setup)
- Prompts focused on HTML structure, semantic markup, section organization

**Phase 2: Styling** (Design refinement)
- Prompts about color palette selection, spacing, typography
- Iterative CSS improvements based on visual testing

**Phase 3: Functionality** (JavaScript implementation)
- Prompts for chat widget logic, event handling, smooth animations
- AI integration point development

**Phase 4: Content** (Copy and documentation)
- Prompts to refine marketing copy, feature descriptions
- Documentation generation (README, PRD)

**Phase 5: Polish** (Final touches)
- Responsive design fixes
- Accessibility improvements
- Testing and bug fixes

---

## 8. Success Metrics (Future Implementation)

Once deployed, success would be measured by:

### 8.1 Waitlist Metrics
- Number of teacher signups per week
- Conversion rate from visit to signup (target: 5-10%)
- School type distribution (to prioritize pilot partners)

### 8.2 Chatbot Engagement
- Number of chat conversations initiated
- Average messages per conversation (target: 4-6)
- Most common questions (to inform product development)
- User satisfaction rating (optional post-chat survey)

### 8.3 Website Metrics
- Unique visitors per week
- Time on site (target: 3+ minutes)
- Scroll depth (% of users reaching waitlist section)
- Mobile vs. desktop traffic ratio

---

## 9. Privacy & Compliance

### 9.1 Student Data (Future Product)

When GuardRail launches as a real product:

- **FERPA Compliance**: All student data handled per federal education privacy laws
- **Data Minimization**: Collect only data necessary for Guide, Analyze, Plan features
- **Anonymization**: Aggregate reports use anonymized data
- **Encryption**: Data encrypted at rest and in transit (TLS 1.3, AES-256)
- **Teacher Control**: Teachers can delete student records at any time
- **No Third-Party Sharing**: Student data never sold or shared with advertisers

### 9.2 Prototype Data Collection

This prototype does NOT collect or store any real user data:
- Waitlist form submissions are logged to console (not saved)
- Chat conversations exist only in browser memory (lost on page refresh)
- No analytics tracking, cookies, or persistent storage

---

## 10. Next Steps & Roadmap

### 10.1 Immediate Next Steps (Post-Assignment)

1. **Connect Real AI**
   - Set up Google AI Studio project
   - Create backend endpoint for Gemini API
   - Replace placeholder AI in `callGuardRailAI()`
   - Test with various teacher questions

2. **Enhance System Prompt**
   - Conduct user testing with real teachers
   - Refine responses based on feedback
   - Add more example scenarios and edge cases

3. **Implement Waitlist Backend**
   - Set up database (e.g., Firebase, Supabase, Airtable)
   - Send confirmation emails to new signups
   - Create admin dashboard to view submissions

### 10.2 Phase 3 Features (Future Development)

**Mock Student Dashboard**
- Demonstrate "Analyze" feature with sample data visualizations
- Show example learning gap reports
- Display AI-generated lesson plan suggestions

**Teacher Testimonials**
- Add quotes and case studies from pilot teachers
- Include photos and school names (with permission)

**Demo Video**
- 2-3 minute explainer video showing Guide → Analyze → Plan in action
- Screen recordings of student interactions
- Teacher testimonials

**LMS Integration Mockups**
- Screenshots showing GuardRail inside Canvas, Google Classroom
- Explain integration process for schools

### 10.3 Phase 4: Beta Launch

- Onboard pilot schools
- Collect feedback and iterate on product
- Develop full Guide, Analyze, Plan features
- Build teacher and student dashboards
- Launch marketing campaign targeting schools

---

## 11. Appendix

### 11.1 Glossary

- **Guide**: GuardRail's feature that intercepts student AI shortcuts and redirects with Socratic questions
- **Analyze**: GuardRail's feature that identifies learning gaps from student AI usage patterns
- **Plan**: GuardRail's feature that generates tailored lesson plans based on class needs
- **LMS**: Learning Management System (e.g., Canvas, Google Classroom, Blackboard)
- **FERPA**: Family Educational Rights and Privacy Act (US federal student data privacy law)
- **Socratic Questions**: Open-ended questions that promote critical thinking rather than provide answers

### 11.2 References

- **Google AI Studio**: https://makersuite.google.com/
- **Gemini API Documentation**: https://ai.google.dev/docs
- **FERPA Guidelines**: https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html
- **GitHub Pages**: https://pages.github.com/

### 11.3 Document Changelog

- **Version 1.0**: Initial draft for Phase 1 (concept)
- **Version 2.0**: Updated for Phase 2 (working prototype) with AI integration details

---

**End of PRD**
