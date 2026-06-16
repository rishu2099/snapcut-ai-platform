import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — SnapCut AI" }] }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions" lastUpdated="June 16, 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using SnapCut AI Platform, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>

      <h2>2. Services Provided</h2>
      <p>SnapCut AI provides tools for automated background removal from images. We offer free and paid (Pro, Enterprise) tiers with varying features, capacities, and API access.</p>

      <h2>3. User Responsibilities and Acceptable Use</h2>
      <p>You agree not to use the service for any unlawful purposes, or to process images that depict illegal content, non-consensual explicit material, or infringe on the intellectual property rights of others. We reserve the right to suspend or terminate your account if you violate these terms.</p>

      <h2>4. Payments and Billing</h2>
      <p>Payments for our subscription plans are processed securely via our payment gateway partner, Razorpay. By providing a payment method, you expressly authorize us to charge the applicable fees. Subscriptions are billed in advance on a monthly or yearly basis and automatically renew unless canceled.</p>

      <h2>5. Intellectual Property</h2>
      <p>You retain all rights to the images you upload and process using SnapCut AI. We do not claim ownership of your content. The technology, algorithms, UI, and branding of SnapCut AI remain our exclusive property.</p>

      <h2>6. Limitation of Liability</h2>
      <p>SnapCut AI is provided "as is" without any warranties of any kind. We are not liable for any damages, loss of data, or business interruptions arising from the use or inability to use our services.</p>

      <h2>7. Contact Information</h2>
      <p>For any questions regarding these Terms, please contact us at <a href="mailto:support@snapcut.ai">support@snapcut.ai</a>.</p>
    </LegalLayout>
  );
}
