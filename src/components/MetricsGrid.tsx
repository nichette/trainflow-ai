import { Activity, TrendingUp, Clock, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const metrics = [
  {
    label: "Section Throughput",
    value: "87%",
    change: "+5.2%",
    icon: Activity,
    trend: "up",
  },
  {
    label: "Avg. Travel Time",
    value: "42 min",
    change: "-3 min",
    icon: Clock,
    trend: "down",
  },
  {
    label: "Active Trains",
    value: "12",
    change: "+2",
    icon: TrendingUp,
    trend: "up",
  },
  {
    label: "Conflicts Resolved",
    value: "23",
    change: "Last 4hrs",
    icon: AlertCircle,
    trend: "neutral",
  },
];

export const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const trendColor = 
          metric.trend === "up" ? "text-success" : 
          metric.trend === "down" ? "text-warning" : 
          "text-muted-foreground";

        return (
          <Card key={metric.label} className="bg-card border-border p-5 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-foreground font-mono">{metric.value}</p>
                <p className={`text-sm mt-2 ${trendColor} font-medium`}>{metric.change}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
