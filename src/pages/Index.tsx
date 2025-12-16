import { ChatWidget } from '@/components/ChatWidget';
import { Check, Zap, BarChart3, BookOpen, Link2, Shield, Bell, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import guideFeature from '@/assets/guide-feature.png';
import analyzeFeature from '@/assets/analyze-feature.png';
import planFeature from '@/assets/plan-feature.png';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            AI-Powered Teaching Assistant
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Stop Worrying About<br />Student AI Use.<br />
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Start Teaching Through It.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            GuardRail helps you turn AI shortcuts into learning opportunities.
            Guide students with questions, analyze their struggles, and plan smarter lessons.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
              Get Early Access
            </button>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition"
            >
              Try the AI Coach →
            </button>
          </div>
        </div>
      </section>

      {/* Feature 1: Guide */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Turning Shortcuts into Teaching Moments
              </h2>
              <p className="text-muted-foreground mb-6">
                AI blocks learning by giving shortcuts to students. GuardRail takes that learning back. 
                When they attempt to offload thinking, GuardRail provides instant course correction that builds real understanding.
              </p>
              <ul className="space-y-3">
                {[
                  'Real-time redirection based on your AI policy',
                  'Transforms shortcuts into learning opportunities',
                  'Builds critical thinking through guided reflection',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border border-border">
              <img src={guideFeature} alt="GuardRail guiding student interaction" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Analyze */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl border border-border">
              <img src={analyzeFeature} alt="Student analytics dashboard" className="w-full" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Know Where Your Students Are Struggling
              </h2>
              <p className="text-muted-foreground mb-6">
                Get detailed insights into individual and classroom-wide learning gaps through AI conversation analysis. 
                Identify patterns in how students approach problems, understand recurring obstacles, and trace exactly where learning breaks down.
              </p>
              <ul className="space-y-3">
                {[
                  'Identify specific topics and concept gaps where students struggle',
                  'Track student and classroom-wide AI usage patterns',
                  'Designed with teachers in mind - clear insights without the learning curve',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Plan */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Faster Planning, Smarter Curriculum
              </h2>
              <p className="text-muted-foreground mb-6">
                Lesson plans powered by real student needs, not assumptions. Want to address the exact concepts your students are struggling with? 
                Transform AI interaction insights into targeted curriculum in minutes.
              </p>
              <ul className="space-y-3">
                {[
                  'AI-assisted planning that enhances your expertise, not replaces it',
                  'Personalized curriculum planning at classroom scale',
                  'Streamlined workflows that restore your teaching time',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border border-border">
              <img src={planFeature} alt="Curriculum planning dashboard" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Real Classrooms */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Designed for Real Classrooms</h2>
            <p className="text-muted-foreground text-lg">Everything you need to make AI work for learning, not against it</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Smart Redirection', desc: 'GuardRail detects when students paste entire assignments into ChatGPT and intervenes with Socratic questions that promote genuine understanding.' },
              { icon: BarChart3, title: 'Learning Gap Analytics', desc: 'See real-time insights into where your class is struggling. GuardRail surfaces patterns in student questions and misconceptions automatically.' },
              { icon: BookOpen, title: 'AI Lesson Planner', desc: 'Generate targeted lesson plans based on actual student needs. GuardRail suggests activities, discussion questions, and assessments tailored to your class.' },
              { icon: Link2, title: 'Works With Your LMS', desc: 'Seamlessly integrates with Canvas, Google Classroom, and other platforms you already use. No disruption to your workflow.' },
              { icon: Shield, title: 'Privacy First', desc: 'Student data stays secure and private. FERPA compliant with enterprise-grade security. No data sold to third parties, ever.' },
              { icon: Bell, title: 'Real-Time Monitoring', desc: 'Get instant notifications when students need help. Monitor AI usage patterns and intervene when necessary with data-driven insights.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-card p-6 rounded-xl border border-border">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant / Classroom Coach */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            AI-Powered
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Meet Your Classroom Coach</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Try our AI assistant built specifically for teachers navigating student AI use. Ask questions about GuardRail, 
            get strategies for your classroom, or explore how to turn AI shortcuts into learning opportunities.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left">
            {[
              'Answers questions about GuardRail features',
              'Suggests classroom strategies for AI use',
              'Explains Guide, Analyze, Plan workflows',
              'Powered by advanced LLM technology (Gemini)',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setIsChatOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
          >
            <MessageCircle className="h-5 w-5" />
            Open AI Coach
          </button>
          <p className="text-xs text-muted-foreground mt-6 max-w-2xl mx-auto">
            <strong>Technical Note:</strong> This chatbot demonstrates GuardRail's AI capabilities. It uses conversational AI 
            (designed for Google Gemini integration) to provide teacher-focused guidance. The system prompt ensures responses 
            are supportive, practical, and aligned with GuardRail's mission to transform student AI use into learning opportunities.
          </p>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">The Problem We're Solving</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Students are using AI like ChatGPT to complete assignments without learning. Teachers are caught between 
              banning AI (impossible) and ignoring it (irresponsible).
            </p>
            <p>
              GuardRail offers a third path: <strong className="text-foreground">Use AI as a teaching tool.</strong> When students try to take shortcuts, 
              redirect them to think critically. Use their AI interactions to inform your teaching.
            </p>
            <p>
              We believe AI isn't the enemy of education—it's an opportunity to teach students how to think, question, 
              and learn in a world where answers are always available.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">Bring GuardRail to Your School</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { stat: '89%', desc: 'of high school students report using AI for homework' },
              { stat: '67%', desc: 'of teachers feel unprepared to address student AI use' },
              { stat: '95%', desc: 'of GuardRail pilot teachers report increased critical thinking' },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{item.stat}</div>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Waitlist */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Join 10,000+ Teachers on the Waitlist</h2>
          <p className="text-muted-foreground mb-8">
            Be among the first to access GuardRail when we launch this fall.<br />
            Limited spots available for pilot schools.
          </p>
          <form className="space-y-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">School Type</option>
              <option value="elementary">Elementary School</option>
              <option value="middle">Middle School</option>
              <option value="high">High School</option>
              <option value="college">College/University</option>
            </select>
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Apply for Early Access
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            We'll prioritize teachers and schools ready to pilot GuardRail in real classrooms.
          </p>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
    </div>
  );
};

export default Index;
