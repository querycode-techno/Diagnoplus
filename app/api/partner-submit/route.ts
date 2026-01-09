import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      fullName,
      businessName,
      address,
      pincode,
      partnerType,
      specialization,
      mobileNumber,
      email,
    } = body

    // Validate required fields
    if (!fullName || !businessName || !address || !pincode || !partnerType || !mobileNumber || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check for API key
    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) {
      console.error("BREVO_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    // Format email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #393185 0%, #7AB735 100%); padding: 30px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Partner Registration</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Diagnoplus Health Services</p>
        </div>
        
        <div style="background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-top: none;">
          <h2 style="color: #393185; margin-top: 0; font-size: 18px; border-bottom: 2px solid #7AB735; padding-bottom: 10px;">Partner Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666; width: 40%;">
                <strong>Full Name:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #333;">
                ${fullName}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">
                <strong>Business Name:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #333;">
                ${businessName}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">
                <strong>Partner Type:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #333;">
                <span style="background: #393185; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
                  ${partnerType}
                </span>
              </td>
            </tr>
            ${specialization ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">
                <strong>Specialization:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #333;">
                ${specialization}
              </td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">
                <strong>Address:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #333;">
                ${address}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">
                <strong>Pincode:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #333;">
                ${pincode}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">
                <strong>Mobile Number:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #333;">
                <a href="tel:${mobileNumber}" style="color: #393185; text-decoration: none;">${mobileNumber}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #666;">
                <strong>Email:</strong>
              </td>
              <td style="padding: 12px 0; color: #333;">
                <a href="mailto:${email}" style="color: #393185; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>
        </div>
        
        <div style="background: #393185; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
          <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">
            This is an automated email from Diagnoplus Partner Registration System
          </p>
        </div>
      </div>
    `

    // Send email using Brevo API
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Diagnoplus Health Services",
          email: "healthservicesdiagnoplus@gmail.com",
        },
        to: [
          {
            email: "healthservicesdiagnoplus@gmail.com",
            name: "Diagnoplus Health Services",
          },
        ],
        replyTo: {
          email: email,
          name: fullName,
        },
        subject: `New Partner Registration: ${fullName} - ${partnerType}`,
        htmlContent: htmlContent,
      }),
    })

    const responseData = await response.json()

    if (!response.ok) {
      console.error("Brevo API error:", JSON.stringify(responseData, null, 2))
      return NextResponse.json(
        { error: responseData.message || "Failed to send email" },
        { status: 500 }
      )
    }

    console.log("Email sent successfully:", responseData)

    return NextResponse.json(
      { success: true, message: "Partner registration submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Partner submission error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

