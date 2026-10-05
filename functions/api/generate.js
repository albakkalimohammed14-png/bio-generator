// Cloudflare Pages Function: POST /api/generate
// Needs a Workers AI binding named "AI" (Pages > Settings > Bindings).
const MODEL = "@cf/meta/llama-3.1-8b-instruct"; // change here if Cloudflare renames/removes it
const TONES = { formal: "رسمية ومهنية", fun: "مرحة وخفيفة", inspiring: "ملهمة وتحفيزية" };

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

export async function onRequestPost({ request, env }) {
  try {
    const { topic, tone, emoji } = await request.json();
    const t = String(topic || "").trim();
    if (t.length < 2 || t.length > 100 || !TONES[tone]) return json({ error: "bad_input" }, 400);

    const out = await env.AI.run(MODEL, {
      max_tokens: 350,
      messages: [
        { role: "system", content: "أنت كاتب بايو إنستغرام محترف. اكتب بالعربية الفصحى المبسطة فقط." },
        {
          role: "user",
          content:
            `اكتب 5 بايوهات إنستغرام مختلفة لهذا النشاط أو الاهتمام: ${t}\n` +
            `النبرة: ${TONES[tone]}.\n` +
            (emoji ? "أضف إيموجي مناسبا أو اثنين في كل بايو.\n" : "بدون إيموجي.\n") +
            "كل بايو سطر واحد لا يتجاوز 120 حرفا. أعد 5 أسطر فقط، بدون ترقيم ولا شرح.",
        },
      ],
    });

    const bios = String(out.response || "")
      .split("\n")
      .map((l) => l.replace(/^[\s\-–•*\d.)(]+/, "").replace(/^["«“]|["»”]$/g, "").trim())
      .filter((l) => l.length > 5 && l.length <= 160)
      .slice(0, 5);

    if (bios.length < 3) return json({ error: "too_few" }, 502);
    return json({ bios });
  } catch (e) {
    return json({ error: "failed" }, 500);
  }
}
