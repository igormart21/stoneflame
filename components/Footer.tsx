import Image from "next/image";
import { getWhatsAppLink } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#1A1208", borderTop: "1px solid rgba(43,33,24,0.8)" }}>
      <div className="container-xl py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/logotipo-stoneflame-light.svg"
                alt="STONEFLAME"
                width={200}
                height={64}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="font-body text-sm text-offwhite/40 leading-relaxed max-w-xs mb-5" style={{ fontSize: "0.8rem" }}>
              Handcrafted volcanic stone cookware for those who cook with fire, patience, and intention.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-bronze hover:text-copper transition-colors"
            >
              +1 (847) 523-6194
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-bronze mb-5" style={{ letterSpacing: "0.2em" }}>Navigate</h4>
            <nav className="flex flex-col gap-3">
              {[
                ["Collection", "#collection"],
                ["Our Story", "#story"],
                ["The Process", "#process"],
                ["Find Your Piece", "#quiz"],
                ["Reviews", "#reviews"],
              ].map(([l, h]) => (
                <a key={h} href={h} className="font-body text-sm text-offwhite/40 hover:text-offwhite/80 transition-colors" style={{ fontSize: "0.82rem" }}>{l}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div id="contact" className="scroll-mt-24">
            <h4 className="font-body text-xs uppercase tracking-widest text-bronze mb-5" style={{ letterSpacing: "0.2em" }}>Order</h4>
            <p className="font-body text-sm text-offwhite/40 leading-relaxed mb-5" style={{ fontSize: "0.82rem" }}>
              All orders are handled personally via WhatsApp. Direct conversation, no checkout.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase px-5 py-2.5 border border-bronze/40 text-bronze hover:bg-bronze hover:text-bg transition-all duration-300"
              style={{ letterSpacing: "0.16em" }}
            >
              Open WhatsApp
            </a>
            <div className="flex items-center gap-4 mt-7">
              <a href="https://instagram.com/stoneflame" target="_blank" rel="noopener noreferrer"
                className="text-offwhite/30 hover:text-bronze transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"
                className="text-offwhite/30 hover:text-bronze transition-colors" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: "linear-gradient(90deg,transparent,rgba(163,109,58,0.25),transparent)" }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-offwhite/20" style={{ fontSize: "0.7rem" }}>
            © {year} STONEFLAME. All rights reserved. Handcrafted with fire.
          </p>
          <p className="font-body text-xs text-offwhite/15" style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}>
            Stone Cookware · Volcanic · Artisanal
          </p>
        </div>
      </div>
    </footer>
  );
}
