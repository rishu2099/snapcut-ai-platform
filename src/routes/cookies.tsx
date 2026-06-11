import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "./privacy";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Cookie Policy — SnapCut AI" }] }),
  component: () => <Legal title="Cookie Policy" />,
});
