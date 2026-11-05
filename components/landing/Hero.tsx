import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <div className="hero-left fade-up">
          <div className="hero-badge">
            <span className="badge-dot"></span> Corredora de Seguros · Chile
          </div>
          <h1>
            Comparamos todo el mercado y encontramos el{" "}
            <span className="highlight">seguro ideal</span> para ti.
          </h1>
          <p className="hero-sub">
            ¿Y si no lo entiendes? Te lo explicamos. ¿Y si toca usarlo? Te
            acompañamos en el proceso.
          </p>
          <div className="hero-actions">
            <Link href="/cotizar" className="btn-primary btn-stacked">
              Cotizar gratis
              <br />
              <span className="btn-sub">(y rápido)</span>
            </Link>
            <a href="#como" className="btn-secondary">Cómo funciona</a>
          </div>
        </div>

        <div className="hero-logos-panel fade-up">
          <p className="panel-title">Trabajamos con las mejores aseguradoras</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/aseguradoras.webp"
            width={338}
            height={338}
            alt="Aseguradoras: BCI Seguros, Zurich, FID, Chubb, SURA, Bupa, Vida Cámara, Orion, Renta Nacional, Southbridge, Europ Assistance"
          />
        </div>
      </div>
    </section>
  );
}
