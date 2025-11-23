import { ControlHeader } from "@/components/ControlHeader";
import { MetricsGrid } from "@/components/MetricsGrid";
import { SectionOverview } from "@/components/SectionOverview";
import { DecisionPanel } from "@/components/DecisionPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ControlHeader />
      
      <main className="container mx-auto px-6 py-6 space-y-6">
        <MetricsGrid />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SectionOverview />
          <DecisionPanel />
        </div>
      </main>
    </div>
  );
};

export default Index;
