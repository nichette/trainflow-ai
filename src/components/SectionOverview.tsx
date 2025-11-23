import { Train, TrendingUp, Clock, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockTrains = [
  { id: "EXP-2301", type: "Express", priority: "High", status: "Active", delay: 0, track: "A1" },
  { id: "LOC-4521", type: "Local", priority: "Medium", status: "Active", delay: 2, track: "A2" },
  { id: "FRT-8903", type: "Freight", priority: "Low", status: "Waiting", delay: 5, track: "B1" },
  { id: "EXP-2302", type: "Express", priority: "High", status: "Approaching", delay: 0, track: "A1" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active": return "bg-primary text-primary-foreground";
    case "Waiting": return "bg-warning text-warning-foreground";
    case "Approaching": return "bg-success text-success-foreground";
    default: return "bg-secondary text-secondary-foreground";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High": return "text-destructive";
    case "Medium": return "text-warning";
    case "Low": return "text-muted-foreground";
    default: return "text-foreground";
  }
};

export const SectionOverview = () => {
  return (
    <Card className="bg-card border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Section A - Live Status</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="font-mono">14:23:45 IST</span>
        </div>
      </div>

      <div className="space-y-3">
        {mockTrains.map((train) => (
          <div
            key={train.id}
            className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-background rounded-md">
                <Train className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold text-foreground">{train.id}</span>
                  <Badge variant="outline" className="text-xs">{train.type}</Badge>
                </div>
                <div className="flex items-center gap-3 mt-1 text-sm">
                  <span className={`font-medium ${getPriorityColor(train.priority)}`}>
                    {train.priority} Priority
                  </span>
                  <span className="text-muted-foreground">Track {train.track}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {train.delay > 0 && (
                <div className="flex items-center gap-1 text-warning">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm font-mono">+{train.delay}min</span>
                </div>
              )}
              <Badge className={getStatusColor(train.status)}>
                {train.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
