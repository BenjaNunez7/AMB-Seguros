import Link from "next/link";
import { whatsappUrl } from "@/lib/contacto";

export default function Contacto() {
  return (
    <section className="cta-section" id="contacto">
      <div className="container fade-up">
        <h2>
          ¿Listo para asegurar
          <br />
          lo que importa?
        </h2>
        <p>Cotiza y ve tus opciones en segundos.</p>
        <div className="cta-actions">
          <Link href="/cotizar" className="btn-white">
            Cotizar ahora
          </Link>
          <a href={whatsappUrl} className="btn-secondary btn-on-dark">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
