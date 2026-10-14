const whatsappUrl = "https://wa.me/923322060667?text=Hello%20Eaquirstech%2C%20I%20would%20like%20to%20learn%20about%20EHMS.";

export default function WhatsAppButton() {
  return <a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Eaquirstech on WhatsApp">
    <span className="whatsapp-button-label" aria-hidden="true">Chat with us</span>
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 3.5a12.5 12.5 0 0 0-10.8 18.8L3.5 28.5l6.4-1.7A12.5 12.5 0 1 0 16 3.5Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M11.1 9.9c-.5-.2-1 .1-1.4.6-.7.9-1 1.8-.8 2.8.5 2.6 3.4 5.8 6.2 7.3 1.5.8 3.1 1.2 4.4.7.8-.3 1.7-1.2 1.9-2 .1-.4-.1-.7-.5-.9l-2.2-1c-.4-.2-.7-.1-1 .2l-1.1 1.1c-1.5-.6-3.3-2.2-4.1-3.6l1-1.1c.3-.3.4-.7.2-1.1l-1-2.3c-.2-.4-.5-.7-.9-.7h-.7Z" fill="currentColor" />
    </svg>
  </a>;
}
