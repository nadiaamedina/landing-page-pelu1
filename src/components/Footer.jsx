import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div id="contactos">
        <Button
          as="a"
          href="https://wa.me/3812168577"
          target="_blank"
          rel="noopener noreferrer"
          variant="success"
          className="d-inline-flex align-items-center"
        >
          Chatear por WhatsApp
        </Button>
      </div>
      <div id="redes">
        Siguenos en nuestras redes sociales: instragram: @example Facebook:
        @example Twitter: @example
      </div>
      <div id="derechos">
        <p>&copy; 2025 Nadia Medina. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
