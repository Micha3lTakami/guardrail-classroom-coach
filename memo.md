# GuardRail Development Memo

## How I Actually Used AI While Building

Throughout the development of GuardRail, I relied heavily on AI-powered development tools, primarily through Lovable's integrated AI coding assistant. The experience was genuinely collaborative—sometimes the AI was a capable partner that understood exactly what I needed, and other times it required significant guidance to produce the right output.

### Tools and Tasks

The primary vibe coding tool I used was Lovable's AI assistant, which combines natural language understanding with code generation capabilities. I used it for a wide range of tasks: scaffolding the initial React application structure, creating UI components with Tailwind CSS, implementing the chatbot widget, and iterating on copywriting and layout. When I needed to understand how to structure the ChatWidget component to accept external control (for opening the chat from a button elsewhere on the page), the AI quickly identified the pattern of controlled vs. uncontrolled components and implemented the appropriate props interface.

For design work, I provided the AI with screenshot mockups of the intended UI, and it was remarkably good at translating visual references into working code. The alternating layout pattern for the three feature sections (image right, image left, image right) came directly from my description of wanting visual variety, and the AI handled the responsive grid implementation smoothly.

### Where Human Judgment Mattered Most

The most significant human intervention came in three areas. First, copywriting refinement: while the AI could generate placeholder text, the actual product messaging required careful human crafting to ensure it resonated with the target audience of teachers. The language around "turning shortcuts into teaching moments" and the specific benefit statements all came from deliberate human writing.

Second, product decisions: the AI could implement any feature I described, but deciding *what* to implement—scoping the demo to focus on the landing page and chatbot rather than trying to build actual Chrome extension functionality—required human judgment about what was achievable and valuable for this stage.

Third, the system prompt design for the Classroom Coach chatbot was entirely human-crafted. Understanding the tone, boundaries, and educational philosophy that should govern the AI's responses required deep thought about the product's mission and user needs.

---

## Why the AI Feature Looks the Way It Does

### Design Choices

I chose to implement an AI chatbot assistant rather than other possible AI features (like an actual student interaction interceptor) for several practical reasons. First, a chatbot is self-contained and demonstrable without requiring complex infrastructure like browser extensions or LMS integrations. Second, it directly addresses the target user (teachers) and lets them experience GuardRail's AI capabilities firsthand. Third, it serves as a proof-of-concept for the conversational AI approach that would power the future "Guide" feature.

### Simplifications Made

The current implementation uses pattern-matching instead of actual LLM API calls. This was a conscious scoping decision—integrating Gemini or another LLM would require API key management, cost considerations, and error handling that weren't essential for demonstrating the product concept. The pattern-matching approach still conveys how the chatbot would behave and what kinds of questions it would answer.

The dashboard mockups are static images rather than interactive components. Building actual data visualization and analytics would require a backend infrastructure, database design, and realistic data generation. For a landing page prototype, the visual mockups effectively communicate the product vision without that complexity.

### Connection to Value Proposition

The chatbot does connect meaningfully to GuardRail's core value proposition, even as a demo. It demonstrates the supportive, educational tone that would characterize all of GuardRail's AI interactions. When teachers ask the Classroom Coach about how "Guide" works, they get a preview of the Socratic questioning approach that students would experience. This creates a tangible experience of the product philosophy.

---

## Risks, Trade-offs, and Integrity

### Privacy and Data Considerations

For this prototype, privacy concerns are minimal because no real data is collected or processed. The waitlist form is frontend-only, and the chatbot doesn't persist conversations. However, the full product would require serious attention to:
- FERPA compliance for any student data handling
- Clear data retention policies
- Transparency about what AI interactions are logged and analyzed
- Parental consent considerations for K-12 contexts

### Bias and Fairness

The Classroom Coach's system prompt was designed to be supportive and non-judgmental, but there's inherent risk in any AI that advises educators. The system prompt explicitly avoids prescriptive statements about what teachers "should" do, instead offering options and explanations. A production version would need ongoing evaluation to ensure responses don't inadvertently favor certain teaching styles, student populations, or educational philosophies.

### Over-Reliance on AI

I explicitly designed the chatbot to emphasize that GuardRail "enhances your expertise, not replaces it." This language choice reflects a genuine concern about AI tools that position themselves as solutions rather than supports. Teachers should use GuardRail's insights as one input into their professional judgment, not as automated decision-makers. The product messaging reinforces this throughout.

### Academic Integrity in My Own Work

This project presented an interesting meta-question: I'm building a tool about responsible AI use while using AI extensively to build it. I've been deliberate about where I rely on AI (code generation, UI scaffolding) versus where I do the thinking myself (product strategy, copywriting, system prompt design). The code the AI generates is transparent and editable—I can see exactly what it wrote and modify it. I haven't hidden the AI's role in building this; the development memo you're reading explicitly documents it.

---

## What I Learned About Building with GenAI

### Biggest Surprise

The most surprising aspect was how much the quality of output depended on the specificity and structure of my prompts, but not in the way I expected. Longer, more detailed prompts didn't always produce better results. What mattered more was *clarity of intent*—when I knew exactly what I wanted, I could express it concisely and the AI would execute well. When I was vague because I hadn't thought through the design, adding more words just produced more confused output.

### One Thing I'd Teach Another Founder

If I were advising another founder using GenAI tools, I'd emphasize: **treat the AI as a junior developer who's very fast but needs clear direction.** Don't expect it to make product decisions or understand your users. Give it specific tasks with clear success criteria. Review everything it produces. And most importantly, do your own thinking first—the AI can't figure out what you should build, it can only help you build what you've already conceptualized.

### How This Affects My Thinking

This project has made me more optimistic about AI as a development accelerator and more cautious about AI as a decision-maker. The coding assistance genuinely let me build a functional prototype faster than I could have alone. But every time I tried to have the AI make a judgment call (about product positioning, about what features to prioritize, about how to phrase something for teachers), I ended up doing that work myself anyway. The AI is a force multiplier for human capability, not a replacement for human judgment—and building GuardRail has reinforced exactly why that distinction matters so much in educational contexts.

---

*Prepared for Product Development Course*
*December 2024*
