import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us — SnapCut AI" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <LegalLayout title="Contact Us" lastUpdated="June 16, 2026">
      <p>We're here to help! If you have any questions, feedback, or need support with your SnapCut AI account, please don't hesitate to reach out to us using the details below.</p>
      
      <div className="mt-8 rounded-3xl border border-border bg-card/60 p-8">
        <h2 className="mt-0 text-white">Business Details</h2>
        <ul className="list-none space-y-4 pl-0">
          <li><strong>Trade Name:</strong> Snapcut AI Platform</li>
          <li><strong>Email Support:</strong> <a href="mailto:support@snapcut.ai" className="text-cyan hover:underline">support@snapcut.ai</a></li>
          <li><strong>Phone Number:</strong> +91-9999999999 (Mon-Fri, 9am - 6pm IST)</li>
          <li><strong>Registered Address:</strong></li>
          <li className="text-sm">
            Snapcut AI HQ<br/>
            123 Innovation Drive, Sector 45<br/>
            Tech City, 110001<br/>
            India
          </li>
        </ul>
      </div>
      
      <p className="mt-8"><em>Note: The above contact details are for compliance and general inquiries. For technical support regarding image processing or API usage, please use our dedicated support portal inside your dashboard.</em></p>
    </LegalLayout>
  );
}
