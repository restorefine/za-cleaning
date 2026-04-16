import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    // Inquiry answers
    kitchens,
    livingRooms,
    bathrooms,
    propertySize,
    serviceType,
    // Contact details
    name,
    phone,
    email,
    area,
    message,
  } = body;

  const emailHtml = `
    <h2>New Cleaning Enquiry — ZA Cleaning</h2>

    <h3>Property Details</h3>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Kitchens</strong></td><td>${kitchens}</td></tr>
      <tr><td><strong>Living Rooms</strong></td><td>${livingRooms}</td></tr>
      <tr><td><strong>Bathrooms / Toilets</strong></td><td>${bathrooms}</td></tr>
      <tr><td><strong>Property Size</strong></td><td>${propertySize}</td></tr>
      <tr><td><strong>Service Required</strong></td><td>${serviceType}</td></tr>
    </table>

    <h3>Contact Details</h3>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Area</strong></td><td>${area || "—"}</td></tr>
    </table>

    ${message ? `<h3>Message</h3><p>${message}</p>` : ""}
  `;

  // ── Resend integration (uncomment once RESEND_API_KEY is set) ──────────────
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "ZA Cleaning <enquiries@zacleaningteam.com>",
  //   to: "info@zacleaningteam.com",
  //   subject: `New Enquiry from ${name}`,
  //   html: emailHtml,
  // });
  // ────────────────────────────────────────────────────────────────────────────

  // Temporary: log submission until Resend key is added
  console.log("[contact] new submission:", { name, email, serviceType, propertySize });
  console.log("[contact] email html preview:\n", emailHtml);

  return NextResponse.json({ success: true });
}
