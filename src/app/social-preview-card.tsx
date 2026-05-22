import type { ReactElement } from "react";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";
export const socialImageAlt = "Nikhil Nama - Software Engineer";

export function SocialPreviewCard(): ReactElement {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, rgba(244,108,56,0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(244,108,56,0.12), transparent 28%), #0f0f11",
        color: "#f8fafc",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 36,
          borderRadius: 36,
          border: "1px solid rgba(255,255,255,0.12)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          boxShadow:
            "0 32px 120px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: -120,
          left: -40,
          width: 440,
          height: 440,
          borderRadius: 9999,
          background: "rgba(244,108,56,0.18)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: -120,
          bottom: -140,
          width: 360,
          height: 360,
          borderRadius: 9999,
          background: "rgba(244,108,56,0.12)",
          filter: "blur(72px)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 9999,
                background: "#f46c38",
                boxShadow: "0 0 28px rgba(244,108,56,0.75)",
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: 26,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "rgba(248,250,252,0.58)",
              }}
            >
              nikhilnama.vercel.app
            </p>
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 150,
              lineHeight: 0.82,
              fontWeight: 800,
              letterSpacing: "-0.08em",
              color: "#f46c38",
            }}
          >
            Nikhil Nama
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: 50,
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#f8fafc",
            }}
          >
            Software Engineer
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
          }}
        >
          <p
            style={{
              margin: 0,
              maxWidth: 760,
              fontSize: 38,
              lineHeight: 1.35,
              color: "rgba(248,250,252,0.76)",
            }}
          >
            Building full-stack applications
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderRadius: 9999,
              padding: "10px 18px",
              border: "1px solid rgba(244,108,56,0.28)",
              background: "rgba(244,108,56,0.08)",
              color: "#f8fafc",
              fontSize: 20,
              letterSpacing: 1.2,
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
        </div>
      </div>
    </div>
  );
}
