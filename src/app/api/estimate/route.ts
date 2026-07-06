import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { 
        name, phone, address, spaceType, size, budget, moveDate, message
    } = data;

    const spaceLabels: Record<string, string> = {
      academy: "학원/교육시설",
      office: "사무실/오피스",
      other_com: "기타 상업공간",
      other: "기타",
    };

    const sizeLabels: Record<string, string> = {
      "under-20": "20평 미만",
      "20-30": "20~30평",
      "30-40": "30~40평",
      "40-50": "40~50평",
      "over-50": "50평 이상",
    };

    const budgetLabels: Record<string, string> = {
      "under-3000": "3천만원 이하",
      "3000-5000": "3천~5천만원",
      "5000-1억": "5천만원~1억원",
      "1억-2억": "1억~2억원",
      "over-2억": "2억원 이상",
    };



    const subject = `[목수삼촌 실내건축] 견적 문의 - ${name}님 (${spaceLabels[spaceType] || spaceType})`;

    const html = `
            <div style="font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: #2c2c2c; color: #fff; padding: 24px 20px; border-radius: 8px 8px 0 0;">
                    <h2 style="margin: 0; font-size: 18px;">📋 목수삼촌 실내건축 견적 문의</h2>
                </div>
                <div style="border: 1px solid #e0e0e0; border-top: none; padding: 24px 20px; border-radius: 0 0 8px 8px;">
                    <h3 style="color: #333; border-bottom: 2px solid #2c2c2c; padding-bottom: 8px;">👤 고객 정보</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr><td style="padding: 8px 0; color: #666; width: 120px;">이름</td><td style="padding: 8px 0; font-weight: 500;">${name}</td></tr>
                        <tr><td style="padding: 8px 0; color: #666;">연락처</td><td style="padding: 8px 0; font-weight: 500;">${phone}</td></tr>
                        <tr><td style="padding: 8px 0; color: #666;">주소</td><td style="padding: 8px 0; font-weight: 500;">${address}</td></tr>
                    </table>

                    <h3 style="color: #333; border-bottom: 2px solid #2c2c2c; padding-bottom: 8px;">🏠 시공 정보</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr><td style="padding: 8px 0; color: #666; width: 120px;">공간 유형</td><td style="padding: 8px 0; font-weight: 500;">${spaceLabels[spaceType] || spaceType}</td></tr>
                        <tr><td style="padding: 8px 0; color: #666;">평수</td><td style="padding: 8px 0; font-weight: 500;">${sizeLabels[size] || size}</td></tr>
                        <tr><td style="padding: 8px 0; color: #666;">예산</td><td style="padding: 8px 0; font-weight: 500;">${budgetLabels[budget] || budget}</td></tr>
                        <tr><td style="padding: 8px 0; color: #666;">입주/시공 예정일</td><td style="padding: 8px 0; font-weight: 500;">${moveDate || "미정"}</td></tr>
                    </table>

                    ${message ? `
                    <h3 style="color: #333; border-bottom: 2px solid #2c2c2c; padding-bottom: 8px;">💬 추가 요청사항</h3>
                    <p style="padding: 12px; background: #f9f9f9; border-radius: 6px; color: #444; line-height: 1.6;">${message}</p>
                    ` : ""}
                </div>
                <p style="text-align: center; color: #999; font-size: 12px; margin-top: 16px;">
                    이 메일은 목수삼촌 실내건축 홈페이지 견적 문의 폼에서 자동 발송되었습니다.
                </p>
            </div>
        `;

    let emailSuccess = false;
    let telegramSuccess = false;
    const errors: string[] = [];

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"목수삼촌 실내건축 홈페이지" <${process.env.EMAIL_USER}>`,
        to: "midaum79@gmail.com",
        subject,
        html,
        replyTo: `${name} <noreply@midaumdesign.com>`,
      });
      emailSuccess = true;
    } catch (emailError) {
      console.error("Email send error:", emailError);
      errors.push(`Email Error: ${emailError instanceof Error ? emailError.message : String(emailError)}`);
    }

    // Telegram 알림 전송 로직
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      let telegramMessage = `📋 [새로운 견적 문의]\n\n`;
      telegramMessage += `👤 이름: ${name}\n`;
      telegramMessage += `📞 연락처: ${phone}\n`;
      telegramMessage += `🏠 주소: ${address}\n`;
      telegramMessage += `🏢 구분: ${spaceLabels[spaceType] || spaceType}\n`;
      telegramMessage += `📏 평수: ${sizeLabels[size] || size}\n`;
      telegramMessage += `💰 예산: ${budgetLabels[budget] || budget}\n`;
      telegramMessage += `📅 희망일: ${moveDate || "미정"}\n`;

      if (message) {
        telegramMessage += `\n💬 추가요청:\n${message}\n`;
      }

      try {
        const tgResponse = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: telegramMessage,
          }),
        });

        if (!tgResponse.ok) {
           const tgErrorData = await tgResponse.text();
           throw new Error(`Telegram API responded with ${tgResponse.status}: ${tgErrorData}`);
        }
        telegramSuccess = true;
      } catch (tgError) {
        console.error("Telegram send error:", tgError);
        errors.push(`Telegram Error: ${tgError instanceof Error ? tgError.message : String(tgError)}`);
      }
    } else {
        errors.push("Telegram Token or Chat ID not configured");
    }

    if (!emailSuccess && !telegramSuccess) {
        return NextResponse.json({ error: "견적 전송 실패 (이메일 및 텔레그램 모두 실패)", details: errors.join(" / ") }, { status: 500 });
    }

    return NextResponse.json({ success: true, emailSuccess, telegramSuccess, errors: errors.length > 0 ? errors : undefined });
  } catch (error) {
    console.error("Estimate Route Error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: "견적 전송 중 오류 발생", details: errorMessage }, { status: 500 });
  }
}

