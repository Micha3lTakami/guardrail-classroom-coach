import { ChatWidget } from '@/components/ChatWidget';
import { Check } from 'lucide-react';
import guideFeature from '@/assets/guide-feature.png';
import analyzeFeature from '@/assets/analyze-feature.png';
import planFeature from '@/assets/plan-feature.png';

const Index = () => {
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
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition">
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

      {/* AI Assistant Info */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            AI-Powered
          </div>
          <h2 className="text-3xl font-bold mb-4">Meet Your Classroom Coach</h2>
          <p className="text-muted-foreground mb-8">
            Try our AI assistant built specifically for teachers navigating student AI use. 
            Click the chat button in the bottom right to get started!
          </p>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
