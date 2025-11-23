import { Lightbulb, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const recommendations = [
  {
    id: 1,
    action: "Prioritize EXP-2301 on Track A1",
    impact: "High throughput gain",
    confidence: 94,
    details: "Express train approaching optimal crossing window. Minimal delay to other services.",
  },
  {
    id: 2,
    action: "Hold FRT-8903 for 3 minutes",
    impact: "Prevents conflict",
    confidence: 89,
    details: "Freight can wait without affecting schedule. Allows LOC-4521 to clear section.",
  },
];

export const DecisionPanel = () => {
  return (
    <Card className="bg-card border-border p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">AI Recommendations</h2>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-4 bg-secondary/30 border border-border rounded-lg hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{rec.action}</h3>
                <p className="text-sm text-muted-foreground">{rec.details}</p>
              </div>
              <Badge variant="outline" className="ml-4 bg-success/10 text-success border-success/30">
                {rec.confidence}% confidence
              </Badge>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-success" />
                <span>{rec.impact}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Simulate
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  Apply
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
