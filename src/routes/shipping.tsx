import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/shipping")({
  head: () => ({ meta: [{ title: "Shipping and Delivery — SnapCut AI" }] }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <LegalLayout title="Shipping and Delivery Policy" lastUpdated="June 16, 2026">
      <h2>1. Digital Delivery</h2>
      <p>SnapCut AI Platform is a Software as a Service (SaaS) providing AI-powered background removal tools and APIs. As such, <strong>we do not ship any physical goods or products</strong>.</p>
      
      <h2>2. Instant Access</h2>
      <p>Upon successful payment for a Pro or Enterprise subscription, your account will be instantly upgraded. You will receive an immediate confirmation email, and your increased quota, high-definition processing capabilities, and API keys will be accessible immediately via your Account Dashboard.</p>

      <h2>3. Issues with Delivery</h2>
      <p>In rare cases, if your account does not reflect the upgraded status immediately after a successful payment transaction, please try logging out and logging back in. If the issue persists for more than 15 minutes, contact us immediately at <a href="mailto:support@snapcut.ai" className="text-cyan">support@snapcut.ai</a> with your payment transaction ID, and our team will manually provision your access.</p>

      <h2>4. International Availability</h2>
      <p>Since SnapCut AI is a digital platform, our services are accessible globally. No shipping fees, customs duties, or physical import taxes apply.</p>
    </LegalLayout>
  );
}
