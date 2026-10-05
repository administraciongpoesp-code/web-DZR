import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "DZR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_WIDTH = 560;
const LOGO_HEIGHT = Math.round((LOGO_WIDTH * 1370) / 3642);

export default async function OpengraphImage() {
  const logoFile = await readFile(join(process.cwd(), "public/images/placeholders/logo-dzr-red.png"));
  const logoSrc = `data:image/png;base64,${logoFile.toString("base64")}`;

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
        <img src={logoSrc} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt="" />
        <div style={{ marginTop: 16, fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
          Fábrica de uniformes · Durango, México
        </div>
      </div>
    ),
    { ...size },
  );
}
