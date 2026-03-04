import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, address, spaceType, size, budget, moveDate, message } = data;

    const spaceLabels: Record<string, string> = {
      apartment: "아파트 리모델링",
      villa: "빌라/다세대",
      store: "상가 인테리어",
      salon: "미용실/뷰티샵",
      academy: "학원/교육시설",
      office: "사무실/오피스",
      cafe: "카페/음식점",
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

    const subject = `[미다움 디자인] 견적 문의 - ${name}님 (${spaceLabels[spaceType] || spaceType})`;

    const html = `
            <div style="font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: #2c2c2c; color: #fff; padding: 24px 20px; border-radius: 8px 8px 0 0;">
                    <h2 style="margin: 0; font-size: 18px;">📋 미다움 디자인 견적 문의</h2>
                </div>
                <div style="border: 1px solid #e0e0e0; border-top: none; padding: 24px 20px; border-radius: 0 0 8px 8px;">
                    <h3 style="color: #333; border-bottom: 2px solid #2c2c2c; padding-bottom: 8px;">👤 고객 정보</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr><td style="padding: 8px 0; color: #666; width: 100px;">이름</td><td style="padding: 8px 0; font-weight: 500;">${name}</td></tr>
                        <tr><td style="padding: 8px 0; color: #666;">연락처</td><td style="padding: 8px 0; font-weight: 500;">${phone}</td></tr>
                        <tr><td style="padding: 8px 0; color: #666;">주소</td><td style="padding: 8px 0; font-weight: 500;">${address}</td></tr>
                    </table>

                    <h3 style="color: #333; border-bottom: 2px solid #2c2c2c; padding-bottom: 8px;">🏠 시공 정보</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr><td style="padding: 8px 0; color: #666; width: 100px;">공간 유형</td><td style="padding: 8px 0; font-weight: 500;">${spaceLabels[spaceType] || spaceType}</td></tr>
                        <tr><td style="padding: 8px 0; color: #666;">평수</td><td style="padding: 8px 0; font-weight: 500;">${sizeLabels[size] || size}</td></tr>
                        <tr><td style="padding: 8px 0; color: #666;">예산</td><td style="padding: 8px 0; font-weight: 500;">${budgetLabels[budget] || budget}</td></tr>
                        <tr><td style="padding: 8px 0; color: #666;">입주 예정일</td><td style="padding: 8px 0; font-weight: 500;">${moveDate || "미정"}</td></tr>
                    </table>

                    ${message ? `
                    <h3 style="color: #333; border-bottom: 2px solid #2c2c2c; padding-bottom: 8px;">💬 추가 요청사항</h3>
                    <p style="padding: 12px; background: #f9f9f9; border-radius: 6px; color: #444; line-height: 1.6;">${message}</p>
                    ` : ""}
                </div>
                <p style="text-align: center; color: #999; font-size: 12px; margin-top: 16px;">
                    이 메일은 미다움 디자인 홈페이지 견적 문의 폼에서 자동 발송되었습니다.
                </p>
            </div>
        `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"미다움 디자인 홈페이지" <${process.env.EMAIL_USER}>`,
      to: "midaum79@gmail.com",
      subject,
      html,
      replyTo: `${name} <noreply@midaumdesign.com>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
