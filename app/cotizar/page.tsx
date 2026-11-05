import type { Metadata } from "next";
import Link from "next/link";
import {
  CONTACTO,
  emailUrl,
  telefonoUrl,
  whatsappUrl,
} from "@/lib/contacto";

export const metadata: Metadata = {
  title: "Cotizar · Asegúrate",
  description:
    "Cotiza tu seguro con Asegúrate. Escríbenos por WhatsApp, llámanos o envíanos un correo.",
};

export default function CotizarPage() {
  return (
    <div className="login-page">
      <header className="login-header">
        <Link href="/" className="logo logo-link">Asegúrate</Link>
        <Link href="/" className="login-back">← Volver al inicio</Link>
      </header>

      <main className="login-main">
        <div className="login-card cotizar-card">
          <div className="section-eyebrow">Cotización</div>
          <h1>Estamos terminando nuestro cotizador</h1>
          <p className="login-intro">
            Muy pronto vas a poder cotizar en línea, de forma automática y en
            minutos. Mientras tanto, contáctanos y te cotizamos nosotros:
            comparamos el mercado por ti, sin costo.
          </p>

          <div className="contact-list" id="contacto">
            <a href={whatsappUrl} className="contact-item contact-item--main">
              <span className="contact-label">WhatsApp</span>
              <span className="contact-value">{CONTACTO.telefonoVisible}</span>
            </a>
            <a href={telefonoUrl} className="contact-item">
              <span className="contact-label">Llámanos</span>
              <span className="contact-value">{CONTACTO.telefonoVisible}</span>
            </a>
            <a href={emailUrl} className="contact-item">
              <span className="contact-label">Correo</span>
              <span className="contact-value">{CONTACTO.email}</span>
            </a>
          </div>

          <p className="login-foot">
            ¿Ya eres cliente? <Link href="/ingresar">Ingresa aquí</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
