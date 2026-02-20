import { ImageResponse } from "next/og";
import { portfolioConfig } from "@/config/portfolio";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params or fallback to config defaults
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : portfolioConfig.name;

    const hasDesc = searchParams.has("desc");
    const desc = hasDesc
      ? searchParams.get("desc")?.slice(0, 150)
      : portfolioConfig.tagline || "Specializing in Django & Next.js";

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080C14",
          backgroundImage:
            "radial-gradient(circle at 50% 120%, rgba(124, 58, 237, 0.4), transparent 60%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo / Name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 48,
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 40,
            letterSpacing: "-0.05em",
          }}
        >
          <span>{portfolioConfig.name}</span>
          <span style={{ color: "#7C3AED", marginLeft: 8 }}>/</span>
          <span style={{ color: "#06B6D4", marginLeft: 8 }}>Portfolio</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: "transparent",
            backgroundImage:
              "linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)",
            backgroundClip: "text",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: 30,
            letterSpacing: "-0.05em",
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: "80%",
            lineHeight: 1.4,
          }}
        >
          {desc}
        </div>

        {/* Bottom Accent Line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 12,
            background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
          }}
        />
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response("Failed to generate image", { status: 500 });
  }
}
