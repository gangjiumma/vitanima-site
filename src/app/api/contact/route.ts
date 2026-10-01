import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * 랜딩 문의 폼 → cs@vitanima.kr
 *
 * 환경변수: RESEND_API_KEY  (Vercel → Settings → Environment Variables)
 * ⚠️ NEXT_PUBLIC_ 접두사를 붙이면 브라우저에 노출된다. 붙이지 말 것.
 */

const TO = "cs@vitanima.kr";
const FROM = "Vitanima <noreply@vitanima.kr>";

const MAX = { name: 80, company: 120, email: 160, type: 40, message: 5000 };

const esc = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const company = String(body.company ?? "").trim();
    const email = String(body.email ?? "").trim();
    const type = String(body.type ?? "").trim();
    const message = String(body.message ?? "").trim();
    const honeypot = String(body.website ?? "").trim();

    // 봇이 채운 숨은 필드 — 조용히 성공 처리해서 재시도를 막는다
    if (honeypot) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "required" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "email" }, { status: 400 });
    }
    if (
      name.length > MAX.name ||
      company.length > MAX.company ||
      email.length > MAX.email ||
      type.length > MAX.type ||
      message.length > MAX.message
    ) {
      return NextResponse.json({ ok: false, error: "length" }, { status: 400 });
    }

    const key = process.env.RESEND_API_KEY;
    if (!key) {
      console.error("[contact] RESEND_API_KEY 가 설정되지 않았습니다.");
      return NextResponse.json({ ok: false, error: "config" }, { status: 500 });
    }

    const resend = new Resend(key);

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `[문의] ${type || "기타"} · ${name}${company ? ` (${company})` : ""}`,
      text: [
        `이름: ${name}`,
        `회사: ${company || "-"}`,
        `이메일: ${email}`,
        `유형: ${type || "-"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;line-height:1.7;color:#0b1f2a">
          <table style="border-collapse:collapse;margin-bottom:20px">
            <tr><td style="padding:4px 16px 4px 0;color:#7b9099">이름</td><td style="padding:4px 0"><strong>${esc(name)}</strong></td></tr>
            <tr><td style="padding:4px 16px 4px 0;color:#7b9099">회사</td><td style="padding:4px 0">${esc(company) || "-"}</td></tr>
            <tr><td style="padding:4px 16px 4px 0;color:#7b9099">이메일</td><td style="padding:4px 0"><a href="mailto:${esc(email)}" style="color:#14523f">${esc(email)}</a></td></tr>
            <tr><td style="padding:4px 16px 4px 0;color:#7b9099">유형</td><td style="padding:4px 0">${esc(type) || "-"}</td></tr>
          </table>
          <div style="border-top:1px solid #e8ebe9;padding-top:16px;white-space:pre-wrap">${esc(message)}</div>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend 전송 실패:", error);
      return NextResponse.json({ ok: false, error: "send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] 처리 중 오류:", e);
    return NextResponse.json({ ok: false, error: "unknown" }, { status: 500 });
  }
}
