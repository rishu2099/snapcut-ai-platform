import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — SnapCut AI" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 16, 2026">
      <h2>1. Introduction</h2>
      <p>Welcome to SnapCut AI Platform. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI background removal services.</p>

      <h2>2. Information We Collect</h2>
      <ul>
        <li><strong>Personal Data:</strong> We may collect personally identifiable information such as your name, email address, and contact details when you register for an account or contact our support.</li>
        <li><strong>Payment Information:</strong> When you purchase a subscription, our third-party payment processor (Razorpay) collects your payment information. We do not store your full credit card details on our servers.</li>
        <li><strong>Uploaded Images:</strong> Images you upload for processing are temporarily stored on our secure servers solely for the purpose of removing the background.</li>
        <li><strong>Usage Data:</strong> We collect anonymous data regarding your usage of the platform, such as API calls, IP addresses, browser types, and access times, to improve our service.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the collected data to provide, maintain, and improve our services, process payments, authenticate users, and provide customer support. Uploaded images are automatically deleted from our servers within 24 hours for free-tier users and are not used to train our AI models unless explicitly consented.</p>

      <h2>4. Data Sharing and Third Parties</h2>
      <p>We do not sell your personal data. We may share necessary information with third-party service providers (such as Razorpay for payments and AWS/GCP for hosting) who assist us in operating our platform, under strict confidentiality agreements.</p>

      <h2>5. Your Rights</h2>
      <p>You have the right to access, correct, or delete your personal data. You can manage your information from your account dashboard or by contacting us at <a href="mailto:privacy@snapcut.ai">privacy@snapcut.ai</a>.</p>
      
      <h2>6. Contact Us</h2>
      <p>If you have questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@snapcut.ai">support@snapcut.ai</a>.</p>
    </LegalLayout>
  );
}
