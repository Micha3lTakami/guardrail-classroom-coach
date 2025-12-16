import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

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
- Focus on real classroom applications`;

async function callGuardRailAI(messages: Message[]): Promise<string> {
  const userMessage = messages[messages.length - 1].content.toLowerCase();
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
  
  // Simple pattern matching for demo purposes
  if (userMessage.includes('guide') || userMessage.includes('redirect') || userMessage.includes('shortcut')) {
    return `Great question! When a student tries to paste a full assignment prompt into ChatGPT, GuardRail's **Guide** feature immediately intercepts it.\n\nInstead of blocking them or giving them the answer, GuardRail responds with thought-provoking questions like:\n• "What do you already know about this topic?"\n• "What's the hardest part of this problem for you?"\n• "Can you break this down into smaller steps?"\n\nThis Socratic approach helps students develop critical thinking skills rather than just getting answers.`;
  } 
  else if (userMessage.includes('analyze') || userMessage.includes('gap') || userMessage.includes('data') || userMessage.includes('insight')) {
    return `The **Analyze** feature is one of GuardRail's most powerful capabilities for teachers.\n\nGuardRail tracks all student AI interactions (anonymized and secure) and identifies patterns:\n• Which concepts students repeatedly struggle with\n• Common misconceptions across the class\n• Topics where students seek AI help most often\n• Individual students who might need extra support\n\nYou'll see this data in an intuitive dashboard with visualizations.`;
  }
  else if (userMessage.includes('plan') || userMessage.includes('lesson') || userMessage.includes('teaching') || userMessage.includes('curriculum')) {
    return `The **Plan** feature turns insights into action automatically.\n\nBased on the learning gaps GuardRail identifies, it generates:\n• Tailored lesson plans with clear objectives\n• Discussion questions that address misconceptions\n• Practice activities at the right difficulty level\n• Assessment ideas to check understanding\n\nEverything is customizable and aligned with your teaching style.`;
  }
  else if (userMessage.includes('privacy') || userMessage.includes('security') || userMessage.includes('ferpa')) {
    return `Privacy and security are GuardRail's top priorities.\n\n**Our commitments:**\n• FERPA compliant - all student data is protected under federal education privacy laws\n• No third-party data sharing - we never sell student information\n• Encryption at rest and in transit\n• Teachers control data retention and can delete records anytime`;
  }
  else if (userMessage.includes('how') && userMessage.includes('work')) {
    return `GuardRail works through a simple three-step cycle:\n\n**1. Guide** - When students try to use AI as a shortcut, GuardRail redirects them with questions that promote thinking.\n\n**2. Analyze** - GuardRail tracks these interactions to identify learning gaps across your class.\n\n**3. Plan** - You get AI-generated lesson suggestions tailored to your students' actual needs.`;
  }
  else {
    return `I'm here to help you understand GuardRail and how it can transform student AI use in your classroom.\n\nI can answer questions about:\n• How GuardRail's **Guide**, **Analyze**, and **Plan** features work\n• Strategies for managing student AI use effectively\n• Privacy, security, and FERPA compliance\n• Implementation, training, and getting started\n\nWhat specific aspect of GuardRail would you like to know more about?`;
  }
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);

    try {
      const response = await callGuardRailAI([...messages, userMessage]);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'I apologize, but I encountered an error. Please try again.' }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      {isOpen && (
        <div className="mb-4 w-[380px] rounded-2xl bg-card border border-border shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Classroom Coach</h3>
                <p className="text-xs opacity-80">GuardRail AI Assistant</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-primary-foreground hover:bg-primary-foreground/20">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground p-4">
                <p className="font-medium mb-2">Welcome! I'm GuardRail's Classroom Coach.</p>
                <p className="text-sm">Ask me about how to guide students' AI use, analyze learning gaps, or plan lessons.</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground rounded-br-md' 
                    : 'bg-card border border-border rounded-bl-md'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-muted-foreground">Thinking</span>
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about GuardRail..."
                className="flex-1 rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isThinking}
              />
              <Button type="submit" size="icon" disabled={isThinking || !input.trim()} className="rounded-xl">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  );
}
