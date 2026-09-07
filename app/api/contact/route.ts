import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactFormSchema } from "@/lib/schemas/contact";
import { CONTACT } from "@/lib/constants";

const UNIFORM_TYPE_LABELS: Record<string, string> = {
  futbol: "Fútbol",
  basquetbol: "Básquetbol",
  rutas: "Rutas",
  carreras: "Carreras",
  "conjunto-deportivo": "Conjunto deportivo",
  otro: "Otro",
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo de solicitud inválido." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Datos inválidos.", issues: parsed.error.issues }, { status: 400 });
  }

  const data = parsed.data;

  // Honeypot: si el campo "website" llegó con contenido, es un bot.
  // Se responde 200 sin enviar correo, para no delatar la medida anti-spam.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL ?? CONTACT.email;

  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada. No se pudo enviar el correo de contacto.");
    return NextResponse.json({ error: "Servicio de correo no configurado." }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "DZR Web <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: data.email,
      subject: `Nueva cotización — ${data.name}${data.company ? ` (${data.company})` : ""}`,
      text: [
        `Nombre: ${data.name}`,
        `Empresa/equipo: ${data.company || "—"}`,
        `Email: ${data.email}`,
        `Teléfono: ${data.phone}`,
        `Tipo de uniforme: ${UNIFORM_TYPE_LABELS[data.uniformType] ?? data.uniformType}`,
        `Cantidad aproximada: ${data.quantity || "—"}`,
        "",
        "Mensaje:",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error inesperado enviando el correo de contacto:", err);
    return NextResponse.json({ error: "Error inesperado." }, { status: 500 });
  }
}
