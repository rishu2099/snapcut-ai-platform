import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Cookie Policy — SnapCut AI" }] }),
  component: () => (
    <LegalLayout title="Cookie Policy" lastUpdated="June 16, 2026">
      <h2>1. What Are Cookies</h2>
      <p>Cookies are small text files placed on your device when you visit our website. They help us remember your preferences and improve your user experience.</p>
      
      <h2>2. How We Use Cookies</h2>
      <p>We use essential cookies to keep you logged in and functional cookies to remember your upload preferences. We do not use third-party tracking cookies.</p>
    </LegalLayout>
  ),
});
