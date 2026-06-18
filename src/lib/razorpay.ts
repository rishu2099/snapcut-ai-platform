import { toast } from "sonner";

export function loadScript(src: string) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

// A crisp, professional SVG logo encoded as base64 for the Razorpay modal
const LOGO_BASE64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHJlY3Qgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGZpbGw9IiMwZWE1ZTkiIHJ4PSIxMjgiLz48cGF0aCBkPSJNMTYwIDE2MGw5NiA5NiA5Ni05Ni05NiA5NnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjQ4Ii8+PHBhdGggZD0iTTI1NiAzNTJ2LTE5MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iNDgiLz48L3N2Zz4=";

export async function openRazorpayCheckout(amount: number) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    toast.error("Network Error", {
      description: "Razorpay SDK failed to load. Please check your internet connection.",
    });
    return;
  }

  let keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
  if (!keyId || keyId.includes("YOUR_TEST_KEY_HERE")) {
    keyId = "rzp_test_T2MMEHtA2rGIOD";
  }

  const options = {
    key: keyId,
    amount: amount * 100, // Amount in paise
    currency: "INR",
    name: "SnapCut AI",
    description: "Pro Subscription Checkout",
    // Omitting the 'image' property forces Razorpay to auto-generate the nice 'S' letter logo!
    handler: async function (response: any) {
      toast.success("Payment Successful!", {
        description: `Payment ID: ${response.razorpay_payment_id}. Your account has been upgraded.`,
      });
      // In a full MERN stack, we would now verify response.razorpay_signature on our backend.
      
      // Update credits in Supabase
      try {
        const { supabase } = await import('@/lib/supabase');
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const { data: profile } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
          if (profile) {
            const newCredits = profile.credits + 10;
            const expires = new Date();
            expires.setMonth(expires.getMonth() + 1);
            
            await supabase.from('profiles').update({ 
              credits: newCredits,
              is_pro: true,
              pro_expires_at: expires.toISOString()
            }).eq('id', session.user.id);
            
            toast.success("Credits added!", { description: "You received 10 Pro credits valid for 1 month." });
            setTimeout(() => window.location.reload(), 2000);
          }
        }
      } catch (e) {
        console.error("Failed to upgrade account", e);
      }
    },
    prefill: {
      name: "Snapcut User",
      email: "user@snapcut.ai",
      contact: "9999999999",
    },
    theme: {
      color: "#6366f1", // Match the indigo/purple color from screenshot 2
    },
  };

  const paymentObject = new (window as any).Razorpay(options);
  
  paymentObject.on('payment.failed', function (response: any) {
    console.error("Payment Failed", response.error);
    toast.error("Payment Failed", {
      description: response.error.description || "The transaction could not be completed.",
    });
  });

  paymentObject.open();
}
