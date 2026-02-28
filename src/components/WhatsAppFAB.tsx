import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFAB.css';

export default function WhatsAppFAB() {
    return (
        <a
            href="https://wa.me/919822295398?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20your%20manufacturing%20consulting%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-fab"
            aria-label="Chat on WhatsApp"
            id="whatsapp-fab"
        >
            <FaWhatsapp />
            <span className="whatsapp-fab__pulse" />
        </a>
    );
}
