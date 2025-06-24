// app/api/send-email/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    console.log('Received request to send email');
    const { email, score, selectedSector } = await request.json();
    console.log('Data received:', { email, score, selectedSector });

    if (!email || !selectedSector || score === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const mailerSendResponse = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Authorization": `Bearer ${process.env.MAILERSEND_API_KEY}`
      },
      body: JSON.stringify({
        from: {
          email: "sheriffazeez333@gmail.com",
          name: "Test Sheriff"
        },
        to: [
          {
            email: email,
            name: "Assessment User"
          }
        ],
        subject: "Your Cyber Health Assessment Results",
        text: `Here are your Cyber Health Assessment results:\n\nScore: ${score.toFixed(1)}%\n\nSector: ${selectedSector}\n\nThank you for completing the assessment.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #6d28d9;">Your Cyber Health Assessment Results</h1>
            <p>Thank you for completing the CYBERNOVR Cyber Health Assessment. Here are your results:</p>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0;">Score: <span style="color: #6d28d9;">${score.toFixed(1)}%</span></h2>
              <p>Sector: ${selectedSector}</p>
              
              <div style="width: 100%; background-color: #e5e7eb; border-radius: 4px; height: 8px; margin: 10px 0;">
                <div style="width: ${score}%; background-color: #6d28d9; height: 8px; border-radius: 4px;"></div>
              </div>
              
              ${score < 30 ? `
                <p style="color: #dc2626; font-weight: bold;">Urgent attention needed!</p>
                <p>Your organization has significant cybersecurity gaps that need immediate attention.</p>
              ` : ''}
              
              ${score >= 30 && score < 60 ? `
                <p style="color: #d97706; font-weight: bold;">Improvement needed!</p>
                <p>Your organization has some cybersecurity measures in place but needs improvement.</p>
              ` : ''}
              
              ${score >= 60 ? `
                <p style="color: #059669; font-weight: bold;">Keep up the good work!</p>
                <p>Your organization has good cybersecurity practices.</p>
              ` : ''}
            </div>
            
            <p>For more information about our services and how we can help improve your cybersecurity posture, please visit our website.</p>
            
            <a href="https://cybernovr.com" style="display: inline-block; background-color: #6d28d9; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 20px;">
              Visit CYBERNOVR
            </a>
                  </div>
        `
      })
    });

    if (!mailerSendResponse.ok) {
      const error = await mailerSendResponse.text();
      console.error('MailerSend API error:', error);
      throw new Error('Failed to send email via MailerSend');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}