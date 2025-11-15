/**
 * GuardRail - JavaScript
 * 
 * This file handles:
 * - Chat widget UI interactions
 * - AI chatbot functionality (with placeholder for Gemini integration)
 * - Waitlist form handling
 */

// ===========================
// Chat Widget State
// ===========================
const chatWidget = {
  isOpen: false,
  messages: [],
  isThinking: false,
};

// ===========================
// DOM Elements
// ===========================
const chatButton = document.getElementById('chatButton');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const waitlistForm = document.getElementById('waitlistForm');

// ===========================
// Chat Widget Toggle
// ===========================
function toggleChat() {
  chatWidget.isOpen = !chatWidget.isOpen;
  chatPanel.classList.toggle('active', chatWidget.isOpen);
  
  if (chatWidget.isOpen) {
    chatInput.focus();
  }
}

chatButton.addEventListener('click', toggleChat);
chatClose.addEventListener('click', toggleChat);

// ===========================
// Chat Message Rendering
// ===========================
function addMessage(role, content) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${role}`;
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  contentDiv.innerHTML = content.replace(/\n/g, '<br>');
  
  messageDiv.appendChild(contentDiv);
  chatMessages.appendChild(messageDiv);
  
  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  chatWidget.messages.push({ role, content });
}

function showThinkingIndicator() {
  const thinkingDiv = document.createElement('div');
  thinkingDiv.className = 'chat-message thinking';
  thinkingDiv.id = 'thinkingIndicator';
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  contentDiv.innerHTML = `
    <span>Thinking</span>
    <div class="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  
  thinkingDiv.appendChild(contentDiv);
  chatMessages.appendChild(thinkingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeThinkingIndicator() {
  const indicator = document.getElementById('thinkingIndicator');
  if (indicator) {
    indicator.remove();
  }
}

// ===========================
// AI Integration Point
// ===========================

/**
 * System prompt for the GuardRail Classroom Coach
 * This defines the chatbot's personality, knowledge, and behavior
 */
const SYSTEM_PROMPT = `You are GuardRail's Classroom Coach, an AI assistant designed to help teachers understand and use GuardRail effectively.

GuardRail is an AI-powered teaching assistant with three core capabilities:
1. **Guide**: When students try to use AI (like ChatGPT) as a shortcut for assignments, GuardRail intercepts and redirects them with Socratic questions that promote critical thinking instead of giving direct answers.

2. **Analyze**: GuardRail analyzes patterns in student AI interactions to identify learning gaps, misconceptions, and areas where the class is struggling. This gives teachers data-driven insights.

3. **Plan**: Based on the analysis, GuardRail generates tailored lesson plans, discussion questions, and teaching activities that address the specific needs of the class.

Your role:
- Answer questions about how GuardRail works
- Explain the Guide, Analyze, Plan workflow
- Suggest practical classroom strategies for managing student AI use
- Help teachers understand how to turn AI shortcuts into learning opportunities
- Be supportive, non-judgmental, and teacher-focused
- Keep responses concise and practical (2-3 paragraphs max)
- Focus on real classroom applications

Example topics you can help with:
- How GuardRail responds to specific student behaviors
- How to interpret learning gap data
- Classroom policies around AI use
- Ways to integrate GuardRail into existing curriculum
- Privacy and data security questions
- Implementation and training

Always remember: GuardRail's philosophy is that AI isn't the enemy of education—it's an opportunity to teach students how to think critically in a world where answers are always available.`;

/**
 * Call the GuardRail AI Assistant
 * 
 * IMPORTANT: This function currently uses a placeholder simulation.
 * In the real implementation, this should call Google Gemini (or another LLM) API.
 * 
 * Integration instructions:
 * 1. Set up a Google AI Studio project and get an API key
 * 2. Either call Gemini directly from the frontend (less secure) or
 *    create a simple backend endpoint that proxies to Gemini (recommended)
 * 3. Replace the simulation below with a real API call
 * 
 * Example structure for Gemini API call:
 * 
 * async function callGuardRailAI(messages) {
 *   const response = await fetch('YOUR_BACKEND_ENDPOINT_OR_GEMINI_URL', {
 *     method: 'POST',
 *     headers: {
 *       'Content-Type': 'application/json',
 *       // 'Authorization': 'Bearer YOUR_API_KEY' // if calling directly
 *     },
 *     body: JSON.stringify({
 *       messages: [
 *         { role: 'system', content: SYSTEM_PROMPT },
 *         ...messages
 *       ],
 *       // Gemini-specific parameters
 *       model: 'gemini-pro',
 *       temperature: 0.7,
 *       max_tokens: 500
 *     })
 *   });
 *   
 *   const data = await response.json();
 *   return data.response || data.message || data.text;
 * }
 */
async function callGuardRailAI(messages) {
  // ============================================================
  // PLACEHOLDER IMPLEMENTATION
  // Replace this with actual Gemini API call
  // ============================================================
  
  const userMessage = messages[messages.length - 1].content.toLowerCase();
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
  
  // Simple pattern matching for demo purposes
  let response = '';
  
  if (userMessage.includes('guide') || userMessage.includes('redirect') || userMessage.includes('shortcut')) {
    response = `Great question! When a student tries to paste a full assignment prompt into ChatGPT, GuardRail's **Guide** feature immediately intercepts it.\n\nInstead of blocking them or giving them the answer, GuardRail responds with thought-provoking questions like:\n• "What do you already know about this topic?"\n• "What's the hardest part of this problem for you?"\n• "Can you break this down into smaller steps?"\n\nThis Socratic approach helps students develop critical thinking skills rather than just getting answers. Teachers can customize the types of guiding questions based on their subject and grade level.`;
  } 
  else if (userMessage.includes('analyze') || userMessage.includes('gap') || userMessage.includes('data') || userMessage.includes('insight')) {
    response = `The **Analyze** feature is one of GuardRail's most powerful capabilities for teachers.\n\nGuardRail tracks all student AI interactions (anonymized and secure) and identifies patterns:\n• Which concepts students repeatedly struggle with\n• Common misconceptions across the class\n• Topics where students seek AI help most often\n• Individual students who might need extra support\n\nYou'll see this data in an intuitive dashboard with visualizations. For example, if 70% of your class is asking AI for help with quadratic equations, that's a clear signal that your next lesson should reinforce that concept.`;
  }
  else if (userMessage.includes('plan') || userMessage.includes('lesson') || userMessage.includes('teaching') || userMessage.includes('curriculum')) {
    response = `The **Plan** feature turns insights into action automatically.\n\nBased on the learning gaps GuardRail identifies, it generates:\n• Tailored lesson plans with clear objectives\n• Discussion questions that address misconceptions\n• Practice activities at the right difficulty level\n• Assessment ideas to check understanding\n\nFor example, if GuardRail detects that students are confused about the difference between correlation and causation, it might suggest a hands-on activity analyzing real-world data sets. Everything is customizable and aligned with your teaching style.`;
  }
  else if (userMessage.includes('privacy') || userMessage.includes('security') || userMessage.includes('data') || userMessage.includes('ferpa')) {
    response = `Privacy and security are GuardRail's top priorities.\n\n**Our commitments:**\n• FERPA compliant - all student data is protected under federal education privacy laws\n• No third-party data sharing - we never sell student information\n• Encryption at rest and in transit\n• Teachers control data retention and can delete records anytime\n• Students' AI conversations are anonymized in aggregate reports\n\nSchool administrators get full visibility into how data is used, and we provide detailed privacy documentation for district approval processes.`;
  }
  else if (userMessage.includes('how') && userMessage.includes('work')) {
    response = `GuardRail works through a simple three-step cycle:\n\n**1. Guide** - When students try to use AI as a shortcut, GuardRail redirects them with questions that promote thinking.\n\n**2. Analyze** - GuardRail tracks these interactions to identify learning gaps across your class.\n\n**3. Plan** - You get AI-generated lesson suggestions tailored to your students' actual needs.\n\nIt integrates seamlessly with platforms like Canvas and Google Classroom, so there's minimal setup. Students interact with GuardRail just like they would with ChatGPT, but with guardrails that support learning rather than shortcuts.`;
  }
  else if (userMessage.includes('implement') || userMessage.includes('start') || userMessage.includes('setup') || userMessage.includes('training')) {
    response = `Getting started with GuardRail is straightforward:\n\n**Implementation typically takes 1-2 weeks:**\n• Week 1: Integration with your LMS, teacher training (2-hour workshop), and initial setup\n• Week 2: Student onboarding and first guided interactions\n\nWe provide comprehensive training for teachers covering:\n• How to interpret learning gap data\n• Customizing guide questions for your subject\n• Using AI-generated lesson plans effectively\n• Best practices for classroom AI policies\n\nOngoing support includes live chat, documentation, and monthly office hours with our education team.`;
  }
  else if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('pricing')) {
    response = `GuardRail offers flexible pricing for schools:\n\n• **Pilot Program**: Free for the first semester (limited spots)\n• **School License**: $2,000/year for up to 500 students\n• **District License**: Custom pricing with volume discounts\n\nAll plans include:\n• Unlimited teacher accounts\n• Full access to Guide, Analyze, and Plan features\n• Integration support\n• Teacher training and ongoing professional development\n• Priority customer support\n\nWe're currently accepting applications for our pilot program. Teachers who join the pilot get lifetime discounted pricing when we launch. Want me to help you apply?`;
  }
  else {
    response = `I'm here to help you understand GuardRail and how it can transform student AI use in your classroom.\n\nI can answer questions about:\n• How GuardRail's **Guide**, **Analyze**, and **Plan** features work\n• Strategies for managing student AI use effectively\n• Privacy, security, and FERPA compliance\n• Implementation, training, and getting started\n• Pricing and pilot program opportunities\n\nWhat specific aspect of GuardRail would you like to know more about? Or feel free to ask me how you might handle a particular classroom situation involving student AI use.`;
  }
  
  return response;
  
  // ============================================================
  // TO INTEGRATE WITH GOOGLE GEMINI:
  // ============================================================
  // Uncomment and modify the code below:
  
  /*
  try {
    const response = await fetch('https://your-backend-endpoint.com/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
          }))
        ]
      })
    });
    
    if (!response.ok) {
      throw new Error('API call failed');
    }
    
    const data = await response.json();
    return data.message || data.response || 'Sorry, I encountered an error. Please try again.';
    
  } catch (error) {
    console.error('AI API Error:', error);
    return 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment.';
  }
  */
}

// ===========================
// Chat Form Handling
// ===========================
chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const userInput = chatInput.value.trim();
  if (!userInput || chatWidget.isThinking) return;
  
  // Add user message
  addMessage('user', userInput);
  chatInput.value = '';
  
  // Show thinking indicator
  chatWidget.isThinking = true;
  showThinkingIndicator();
  
  try {
    // Call AI (placeholder or real API)
    const response = await callGuardRailAI(chatWidget.messages);
    
    // Remove thinking indicator and show response
    removeThinkingIndicator();
    addMessage('assistant', response);
    
  } catch (error) {
    removeThinkingIndicator();
    addMessage('assistant', 'I apologize, but I encountered an error. Please try again.');
    console.error('Chat error:', error);
  } finally {
    chatWidget.isThinking = false;
  }
});

// ===========================
// Waitlist Form Handling
// ===========================
waitlistForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = waitlistForm.querySelector('input[type="email"]').value;
  const schoolType = waitlistForm.querySelector('select').value;
  
  // In a real implementation, this would send data to a backend
  console.log('Waitlist submission:', { email, schoolType });
  
  // Show success message
  alert('Thank you for joining the waitlist! We\'ll be in touch soon with next steps.');
  waitlistForm.reset();
  
  // In production, you would:
  // 1. Send data to your backend/database
  // 2. Send a confirmation email
  // 3. Update the UI with a success message
});

// ===========================
// Smooth Scroll for Navigation
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close chat if open
      if (chatWidget.isOpen) {
        toggleChat();
      }
    }
  });
});

// ===========================
// Initialize
// ===========================
console.log('GuardRail website initialized');
console.log('Chat widget ready - AI integration point is at callGuardRailAI() function');
