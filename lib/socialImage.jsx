import { ImageResponse } from "next/og";
import { profile } from "./data";

// Share card (1200x630) drawn with the site's palette: dark paper, the accent
// dot from the hero, the name large, one line saying what the site is.
export const socialImageSize = { width: 1200, height: 630 };

export function socialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e0e0d",
          color: "#f2f0eb",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              background: "#ff7a4d",
            }}
          />
          <div
            style={{
              fontSize: 28,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8f8b84",
            }}
          >
            Software developer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 128,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 40,
              lineHeight: 1.35,
              color: "#8f8b84",
              maxWidth: 900,
            }}
          >
            Backend services and internal tools in Java, Spring Boot and
            Next.js.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#8f8b84" }}>
          niketchawla.vercel.app
        </div>
      </div>
    ),
    socialImageSize,
  );
}
