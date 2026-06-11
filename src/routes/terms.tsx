import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "./privacy";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — SnapCut AI" }] }),
  component: () => <Legal title="Terms of Service" />,
});
