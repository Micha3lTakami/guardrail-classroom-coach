import { ChatWidget } from '@/components/ChatWidget';

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

      {/* How It Works */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How GuardRail Works</h2>
          <p className="text-muted-foreground text-center mb-12">Three simple steps to transform student AI use into deeper learning</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Guide', desc: 'When students try to use AI as a shortcut, GuardRail intercepts and redirects them with thought-provoking questions.' },
              { step: '02', title: 'Analyze', desc: 'GuardRail analyzes patterns in student AI interactions to identify learning gaps and misconceptions.' },
              { step: '03', title: 'Plan', desc: 'Get AI-powered lesson suggestions tailored to your students\' specific needs.' },
            ].map((item) => (
              <div key={item.step} className="bg-card p-6 rounded-xl border border-border">
                <div className="text-primary font-bold text-sm mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
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
