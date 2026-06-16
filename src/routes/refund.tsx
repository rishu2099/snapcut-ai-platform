import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/refund")({
  head: () => ({ meta: [{ title: "Refund and Cancellation — SnapCut AI" }] }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <LegalLayout title="Refund and Cancellation Policy" lastUpdated="June 16, 2026">
      <h2>1. Cancellation Policy</h2>
      <p>You can cancel your SnapCut AI Pro or Enterprise subscription at any time. When you cancel, you will continue to have access to the premium features until the end of your current billing cycle. To cancel, please navigate to your Account Dashboard and click on "Manage Subscription", or contact our support team.</p>

      <h2>2. Refund Policy</h2>
      <p>We want you to be fully satisfied with SnapCut AI. Since we offer a digital service with an immediate allocation of computing resources, our refund policy is as follows:</p>
      <ul>
        <li><strong>Initial Purchase:</strong> We offer a 7-day money-back guarantee for your first payment. If you are not satisfied, you may request a full refund within 7 days of your initial purchase, provided you have processed fewer than 20 high-resolution images.</li>
        <li><strong>Renewals:</strong> Subscription renewals are generally non-refundable. However, if you forget to cancel and notify us within 48 hours of the renewal charge, we will refund the renewal amount, provided no images have been processed during the new billing cycle.</li>
      </ul>

      <h2>3. How to Request a Refund</h2>
      <p>To request a refund, please contact us at <a href="mailto:support@snapcut.ai">support@snapcut.ai</a> with your account email and order details. Refund requests are typically processed within 5-7 business days, and the funds will be credited back to your original payment method.</p>

      <h2>4. Exceptional Circumstances</h2>
      <p>If our service experiences prolonged downtime or significant bugs that prevent you from using the features you paid for, please contact support. We may, at our sole discretion, issue partial or full refunds in such scenarios.</p>

      <h2>5. Non-Refundable Items</h2>
      <p>Custom Enterprise integrations, API overuse fees, and one-time quota top-ups are non-refundable.</p>
    </LegalLayout>
  );
}
