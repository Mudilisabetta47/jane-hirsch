import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RegistrationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Registration request received");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone }: RegistrationRequest = await req.json();

    console.log(`Processing registration for: ${firstName} ${lastName}, ${email}`);

    // Send notification to business
    const businessEmailResponse = await resend.emails.send({
      from: "Masterclass Anmeldung <onboarding@resend.dev>",
      to: ["info@hochzeitsstyling-jane.de"],
      subject: `Neue Masterclass Anmeldung: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Futura', 'Century Gothic', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #c17a7a; margin-bottom: 30px;">Neue Masterclass Anmeldung</h1>
          
          <div style="background: #faf8f6; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <h2 style="color: #2d2d2d; margin-top: 0;">Teilnehmer Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #666; width: 120px;">Name:</td>
                <td style="padding: 10px 0; color: #2d2d2d; font-weight: 500;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;">E-Mail:</td>
                <td style="padding: 10px 0; color: #2d2d2d; font-weight: 500;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;">Telefon:</td>
                <td style="padding: 10px 0; color: #2d2d2d; font-weight: 500;">${phone || "Nicht angegeben"}</td>
              </tr>
            </table>
          </div>
          
          <p style="color: #888; font-size: 14px;">Diese E-Mail wurde automatisch generiert.</p>
        </div>
      `,
    });

    console.log("Business notification sent:", businessEmailResponse);

    // Send confirmation to participant
    const confirmationEmailResponse = await resend.emails.send({
      from: "Masterclass <onboarding@resend.dev>",
      to: [email],
      subject: "Deine Masterclass Anmeldung ist eingegangen! ✨",
      html: `
        <div style="font-family: 'Futura', 'Century Gothic', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #c17a7a; margin-bottom: 10px;">Masterclass</h1>
          <p style="color: #888; margin-bottom: 30px; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Bridal Hair & Makeup Coaching</p>
          
          <h2 style="color: #2d2d2d; margin-bottom: 20px;">Hallo ${firstName}! 💕</h2>
          
          <p style="color: #555; line-height: 1.8; margin-bottom: 25px;">
            Vielen Dank für deine Anmeldung zur Masterclass! Wir freuen uns sehr, dass du dabei sein möchtest.
          </p>
          
          <p style="color: #555; line-height: 1.8; margin-bottom: 25px;">
            Wir werden uns in Kürze bei dir melden, um alle weiteren Details zu besprechen.
          </p>
          
          <div style="background: #faf8f6; padding: 25px; border-radius: 12px; margin: 30px 0;">
            <p style="color: #2d2d2d; margin: 0; font-style: italic;">
              "Investiere in deine Fähigkeiten und erschaffe unvergessliche Braut-Momente."
            </p>
          </div>
          
          <p style="color: #555; line-height: 1.8;">
            Herzliche Grüße,<br>
            <strong style="color: #c17a7a;">Dein Masterclass Team</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 40px 0 20px;">
          
          <p style="color: #aaa; font-size: 12px; text-align: center;">
            Diese E-Mail wurde automatisch versendet. Bei Fragen erreichst du uns unter info@hochzeitsstyling-jane.de
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Registration emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-registration function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
