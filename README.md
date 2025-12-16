# GuardRail – Prototype Website & AI Classroom Coach

## Overview & Purpose

GuardRail is a prototype concept designed to help teachers manage and improve student AI use. Instead of banning AI tools, GuardRail turns moments of "AI shortcutting" into learning opportunities through three flows:

- **Guide:** Redirect students toward real thinking.
- **Analyze:** Identify learning gaps based on AI interactions.
- **Plan:** Create targeted lessons informed by student struggles.

This prototype serves as both a **marketing site** and a **functional demo** of GuardRail's teacher-facing AI assistant.

---

## How to View / Run the Project

This project is a static site using vanilla **HTML, CSS, and JavaScript**.

### Option A: Open Directly

1. Download or clone the repository.
2. Open `index.html` in any modern browser.

### Option B: Local Server (Optional)

```bash
python -m http.server 8000
```

Visit `http://localhost:8000` in your browser.

---

## AI Component: GuardRail Classroom Coach

### What the AI Does

The prototype includes a chatbot that acts as a "Classroom Coach" for teachers. It:

- Answers teacher questions about handling student AI misuse.
- Explains GuardRail's Guide → Analyze → Plan system.
- Suggests strategies, prompts, and classroom policies that reinforce learning.

**Input:** A teacher's typed question in the chat UI.

**Output:** A focused, helpful response offering guidance, examples, or explanations aligned with GuardRail's mission.

The AI logic lives in `script.js` within a `callGuardRailAI` function.

- By default, it simulates responses for offline demo use.
- The function is structured so it can be easily connected to a real Gemini / LLM endpoint through Google AI Studio.

### Why This AI Approach Was Chosen

GuardRail's core value depends on interpreting, coaching, and explaining—tasks that require nuance, reasoning, and language understanding. An LLM-based chatbot is the best tool for:

- Responding to open-ended teacher questions.
- Producing tailored, classroom-friendly explanations.
- Demonstrating how GuardRail's AI-driven workflow feels in practice.

### How the AI Supports the Product's Goal

The Classroom Coach reinforces GuardRail's mission by:

- Helping teachers design better AI usage policies.
- Showing how GuardRail would intervene when students rely too heavily on AI.
- Translating complex product features into practical teaching guidance.
- Modeling responsible AI behavior that emphasizes thinking, not shortcuts.

The chatbot serves as both a functional demo and a conceptual preview of how GuardRail can empower educators through intelligent, well-designed AI support.

### Demo Video
https://drive.google.com/file/d/1d6p5ihcE4459UbRCHSW9zB9xET3jZvsQ/view?usp=sharing

---
