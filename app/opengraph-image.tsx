import { ImageResponse } from "next/og";

export const alt = "Dezara — Vestimos tu pasión";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b0b0c",
          backgroundImage:
            "linear-gradient(135deg, #0b0b0c 0%, #0b0b0c 60%, #1a1a1c 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 120, fontWeight: 700, color: "#ffffff" }}>
          DE
          <span style={{ color: "#e5292e" }}>/</span>
          ZARA
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            color: "#e5292e",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 6,
          }}
        >
          Vestimos tu pasión
        </div>
        <div style={{ marginTop: 16, fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
          Fábrica de uniformes · Durango, México
        </div>
      </div>
    ),
    { ...size },
  );
}
