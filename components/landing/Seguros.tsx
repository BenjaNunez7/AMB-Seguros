const seguros = [
  {
    img: "seguro-auto", w: 405, alt: "Auto", anim: "anim-shake",
    title: "Seguro Auto",
    text: "Para tu primer auto o el de siempre. Cotizamos en las mejores aseguradoras del país.",
  },
  {
    img: "seguro-mascotas", w: 337, alt: "Mascotas", anim: "anim-sway",
    title: "Mascotas",
    text: "Porque son parte de la familia. Cobertura veterinaria, accidentes y responsabilidad civil.",
  },
  {
    img: "seguro-viajes", w: 337, alt: "Viajes", anim: "anim-drift",
    title: "Viajes",
    text: "Viaja tranquilo. Cobertura médica internacional, equipaje y cancelaciones.",
  },
  {
    img: "seguro-hogar", w: 270, alt: "Hogar", anim: "anim-breathe",
    title: "Hogar",
    text: "Protege tu departamento o casa contra incendios, robos y daños imprevistos.",
  },
  {
    img: "seguro-vida-salud", w: 337, alt: "Familia", anim: "anim-pulse",
    title: "Vida y Salud",
    text: "Para ti y tu familia. Complementario de salud, vida y accidentes personales.",
  },
  {
    img: "seguro-empresas", w: 337, alt: "Empresas", anim: "anim-float",
    title: "Empresas",
    text: "Desde pymes hasta grandes empresas. Responsabilidad civil, incendio, transporte y más.",
  },
];

export default function Seguros() {
  return (
    <section className="seguros" id="seguros">
      <div className="container">
        <div className="fade-up">
          <div className="section-eyebrow">Nuestros seguros</div>
          <h2>
            Un seguro para cada
            <br />
            momento de tu vida
          </h2>
          <p className="section-sub">
            Para tu primer auto, tus mascotas, el próximo viaje, tu empresa o el
            hogar que tanto costó.
          </p>
        </div>
        <div className="seguros-grid">
          {seguros.map((s) => (
            <div className="seguro-card fade-up" key={s.title}>
              <div className="seg-illustration">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={s.anim}
                  src={`/img/${s.img}.webp`}
                  width={s.w}
                  height={270}
                  alt={s.alt}
                />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
