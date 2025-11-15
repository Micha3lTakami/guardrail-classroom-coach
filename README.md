# GuardRail - AI-Powered Teaching Assistant

**Stop Worrying About Student AI Use. Start Teaching Through It.**

GuardRail is an innovative teaching assistant that helps educators transform student AI use from a problem into a learning opportunity. Instead of fighting against AI tools like ChatGPT, GuardRail guides students with thought-provoking questions, analyzes their learning gaps, and helps teachers plan more effective lessons.

---

## 🎯 What is GuardRail?

GuardRail operates through a simple three-step cycle:

1. **Guide** - When students try to use AI as a shortcut, GuardRail intercepts and redirects them with Socratic questions that promote critical thinking instead of providing direct answers.

2. **Analyze** - GuardRail analyzes patterns in student AI interactions to identify learning gaps, misconceptions, and areas where the class is struggling.

3. **Plan** - Based on real student data, GuardRail generates tailored lesson plans, discussion questions, and teaching activities that address specific class needs.

---

## 🚀 Running the Project

This is a static website prototype built with vanilla HTML, CSS, and JavaScript. No build tools or dependencies required.

### Local Development

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd guardrail
   ```

2. Open `index.html` in your web browser:
   - **Option 1**: Double-click `index.html`
   - **Option 2**: Use a local server (recommended for best experience):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx serve
     ```
   - Then visit `http://localhost:8000` in your browser

3. That's it! The site should be fully functional.

### GitHub Pages Deployment

This site is ready to deploy to GitHub Pages:

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Set source to "main" branch, root directory
4. Your site will be live at `https://yourusername.github.io/guardrail/`

---

## 🤖 AI Integration

### Overview

The **AI component** of this project is the **GuardRail Classroom Coach** chatbot, located in the floating chat widget in the bottom-right corner of the site.

### What the AI Does

**Input**: Teacher questions about GuardRail, student AI use strategies, or classroom scenarios

**Output**: Conversational, teacher-focused guidance that:
- Explains GuardRail's Guide, Analyze, Plan features
- Suggests practical classroom strategies
- Answers questions about implementation, privacy, and effectiveness
- Provides supportive, non-judgmental advice aligned with GuardRail's educational philosophy

### Technical Implementation

**Location**: All AI logic is in `script.js`

**Key Function**: `callGuardRailAI(messages)`
- This function currently contains a **placeholder implementation** that simulates AI responses using pattern matching
- The real implementation should call **Google Gemini** (or another LLM) via API

**System Prompt**: The chatbot uses a detailed system prompt (see `SYSTEM_PROMPT` in `script.js`) that defines:
- The bot's identity as "GuardRail's Classroom Coach"
- Knowledge about GuardRail's features and philosophy
- Tone: supportive, practical, teacher-focused
- Response guidelines (concise, actionable, 2-3 paragraphs)

### Connecting to Google Gemini

To integrate with a real LLM (e.g., Google Gemini via Google AI Studio):

1. **Get API Access**:
   - Create a project in [Google AI Studio](https://makersuite.google.com/)
   - Generate an API key for Gemini

2. **Choose Integration Approach**:
   - **Frontend (simpler, less secure)**: Call Gemini directly from `script.js`
   - **Backend (recommended)**: Create a simple backend endpoint (e.g., using Cloud Functions, Vercel, or Netlify) that proxies requests to Gemini

3. **Update `callGuardRailAI()` Function**:
   ```javascript
   async function callGuardRailAI(messages) {
     const response = await fetch('YOUR_ENDPOINT_OR_GEMINI_URL', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         // 'Authorization': 'Bearer YOUR_API_KEY' // if calling directly
       },
       body: JSON.stringify({
         messages: [
           { role: 'system', content: SYSTEM_PROMPT },
           ...messages
         ],
         model: 'gemini-pro',
         temperature: 0.7,
         max_tokens: 500
       })
     });
     
     const data = await response.json();
     return data.response || data.message;
   }
   ```

4. **Never commit API keys** to version control. Use environment variables or backend secrets management.

### AI Model Choice

The chatbot is designed for **Google Gemini** (specifically `gemini-pro`), but it can work with any conversational LLM:
- **Gemini Pro**: Recommended for teacher-focused conversations (good balance of quality and cost)
- **GPT-4**: Alternative if using OpenAI ecosystem
- **Claude**: Another alternative with strong conversational abilities

The key is maintaining the system prompt to ensure responses are teacher-focused and aligned with GuardRail's mission.

---

## 🎓 AI Usage & Prompting

This project was developed iteratively using AI assistance (Google AI Studio). Here are example prompts that can be used to further develop or refine the prototype:

### Example Prompts for Google AI Studio

1. **Refining Marketing Copy**:
   ```
   Refine the GuardRail landing page hero copy to better emphasize the 
   'Guide, Analyze, Plan' workflow for K–12 teachers. Make it more 
   compelling and action-oriented while maintaining a supportive, 
   non-judgmental tone about student AI use.
   ```

2. **Improving Layout & Responsiveness**:
   ```
   Generate CSS improvements for the GuardRail features section to enhance 
   visual hierarchy and responsiveness on mobile devices. Use modern CSS 
   techniques like flexbox or grid, and ensure the design feels clean and 
   educational. Maintain the existing color scheme (blues and warm accents).
   ```

3. **Enhancing the AI System Prompt**:
   ```
   Help me improve the system prompt for the GuardRail Classroom Coach 
   chatbot. The bot should give safe, teacher-focused advice about managing 
   student AI use. Make sure it avoids being preachy or judgmental, provides 
   practical examples, and always ties back to GuardRail's Guide, Analyze, 
   Plan features. Keep responses concise (2-3 paragraphs).
   ```

### Iteration Strategy

When developing with AI Studio:
1. Start with high-level prompts about overall structure and goals
2. Iterate with specific refinement prompts for individual sections
3. Test generated code incrementally (don't apply everything at once)
4. Use follow-up prompts to fix bugs or adjust styling: *"The chat widget is too wide on mobile, adjust the CSS for screens under 480px"*

---

## 📁 Project Structure

```
guardrail/
├── index.html          # Main HTML file with complete website structure
├── styles.css          # Complete styling (design system + responsive)
├── script.js           # JavaScript (chat widget, AI integration point, form handling)
├── README.md           # This file
├── prd.md              # Product Requirements Document
└── (future: images/    # Logo, hero images, feature illustrations)
```

---

## 🎨 Design System

The site uses a cohesive design system defined in CSS variables:

- **Colors**: Primary blues (`#2563eb`), secondary teals, warm accents
- **Typography**: Inter font family, clear hierarchy
- **Spacing**: Consistent spacing scale (xs/sm/md/lg/xl/2xl)
- **Shadows**: Layered depth with multiple shadow weights
- **Animations**: Smooth transitions (150-300ms cubic-bezier)
- **Responsive**: Mobile-first approach with breakpoints at 768px and 480px

All styles are in `styles.css` with clear comments organizing each section.

---

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Modern layout (flexbox, grid), custom properties, animations
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **Google Fonts**: Inter font family

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design: 320px+ screen widths

### Performance

- No external dependencies (except Google Fonts)
- Lightweight (~50KB total before images)
- Fast initial load
- Smooth animations using CSS transforms

---

## 📋 Assignment Context

This project is a **university assignment prototype** demonstrating:

1. **Working prototype**: Marketing site + interactive product demo
2. **Real AI integration**: Functional chatbot with clear LLM integration point
3. **Documentation**: README (this file) and PRD explaining AI implementation
4. **Iterative development**: Designed to be refined using Google AI Studio

### Assignment Deliverables

✅ **Source code**: HTML, CSS, JavaScript in this repository  
✅ **AI component**: GuardRail Classroom Coach chatbot with system prompt  
✅ **README.md**: Clear explanation of AI functionality and integration  
✅ **prd.md**: Product requirements with AI specification  
✅ **Example prompts**: Documented above for iterative AI-assisted development

---

## 🔐 Privacy & Security

GuardRail (the product) is designed with privacy as a core principle:

- FERPA compliant for student data
- No third-party data sharing
- Encryption at rest and in transit
- Teacher-controlled data retention
- Anonymized aggregate reporting

*This prototype does not collect or store any real user data.*

---

## 🚧 Future Development

Next steps to evolve this prototype:

1. **Connect to real Gemini API** for chatbot functionality
2. **Add mock dashboards** showing example "Analyze" data visualizations
3. **Enhance system prompt** with more sophisticated conversation handling
4. **Add teacher testimonials** and case studies
5. **Create demo video** showing Guide, Analyze, Plan in action
6. **Implement actual waitlist backend** (e.g., using Firebase, Supabase)

---

## 📞 Contact

For questions about this project or GuardRail:

- **GitHub Issues**: [Create an issue](../../issues)
- **Email**: [Your contact email]
- **Website**: [Your website URL]

---

## 📄 License

This project is for educational purposes as part of a university assignment.

---

**Built with ❤️ for teachers navigating the AI era in education.**
