import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectProposals() {
  const proposals = [
    {
      solverName: "Alice Johnson",
      message: "I can complete this in 5 days with modern React practices.",
      submittedAt: "2026-01-26",
      bid: "$500",
    },
    {
      solverName: "Bob Smith",
      message: "I will integrate all APIs and make it responsive.",
      submittedAt: "2026-01-27",
      bid: "$450",
    },
  ];
  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold">Proposals</h2>

      {proposals.length === 0 ? (
        <p className="text-muted-foreground">No proposals yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {proposals.map((proposal, index) => (
            <Card key={index} className="flex flex-col justify-between h-full">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg">{proposal.solverName}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Submitted:{" "}
                  {new Date(proposal.submittedAt).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between gap-2">
                <p className="text-sm sm:text-base">{proposal.message}</p>
                <p className="font-medium">Bid: {proposal.bid}</p>
                <div className="flex gap-2 flex-wrap">
                  <Button size="sm" className="flex-1 sm:flex-auto">
                    Accept
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 sm:flex-auto"
                  >
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
