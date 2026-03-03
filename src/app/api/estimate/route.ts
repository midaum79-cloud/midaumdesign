import { NextRequest, NextResponse } from "next/server";

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

        const subject = `[미다움 디자인] 견적 문의 - ${name}님 (${spaceLabels[spaceType] || spaceType})`;

        const body = `
미다움 디자인 견적 문의

━━━━━━━━━━━━━━━━━━━━━
■ 고객 정보
  이름: ${name}
  연락처: ${phone}
  주소: ${address}

■ 시공 정보
  공간 유형: ${spaceLabels[spaceType] || spaceType}
  평수: ${size}
  예산: ${budget}
  입주 예정일: ${moveDate || "미정"}

■ 추가 요청사항
  ${message || "없음"}
━━━━━━━━━━━━━━━━━━━━━
        `.trim();

        // Use mailto link approach - construct Gmail compose URL
        // For server-side email, you'd use nodemailer, but this works without SMTP setup
        const mailtoLink = `https://mail.google.com/mail/?view=cm&to=midaum79@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        return NextResponse.json({ success: true, mailtoLink });
    } catch {
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}
