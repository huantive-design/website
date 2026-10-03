import { site, whatsappLink } from "@/lib/site";

/**
 * Fixed WhatsApp entry point on the right edge, vertically centred.
 * Opens wa.me, which lands on the WhatsApp contact screen for this number in
 * the mobile app or WhatsApp Web on desktop, with the first message prefilled.
 */
export function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contact HUANTIVE on WhatsApp at ${site.whatsapp}`}
    >
      <span className="wa-float-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26" focusable="false">
          <path
            fill="currentColor"
            d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.2 2.07 3.16 5.01 4.31 2.45.95 2.95.76 3.48.71.53-.05 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.57-.35z"
          />
          <path
            fill="currentColor"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13h-.01c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.16.83.84-3.08-.19-.32a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.26.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.18 8.23z"
          />
        </svg>
      </span>
      <span className="wa-float-text">Chat on WhatsApp</span>
    </a>
  );
}
