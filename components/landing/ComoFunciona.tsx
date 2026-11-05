const steps = [
  {
    title: "Cuéntanos qué necesitas",
    text: "Completa un formulario simple. Te preguntamos lo justo para entender bien tu situación.",
  },
  {
    title: "Comparamos por ti",
    text: "Revisamos todo el mercado asegurador chileno y te traemos las mejores opciones para tu caso. ¿Tienes dudas o algo que modificar? Adaptamos la búsqueda en vivo.",
  },
  {
    title: "Estamos contigo siempre",
    text: "Cuando ocurre un siniestro, nuestro equipo con formación legal te acompaña de principio a fin. Y en todo lo que necesites, también.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="como" id="como">
      <div className="container">
        <div className="fade-up">
          <div className="section-eyebrow">Cómo funciona</div>
          <h2>Simple como debe ser</h2>
          <p className="section-sub">
            Sin llamadas innecesarias, sin papeles, sin esperas. Tres pasos y
            listo.
          </p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step fade-up" key={s.title}>
              <div className="step-num">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
