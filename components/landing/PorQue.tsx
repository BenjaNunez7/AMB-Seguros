const items = [
  {
    img: "pq-digital",
    title: "100% digital",
    text: "Cotiza, contrata y gestiona tus seguros desde nuestra web o app, cuando quieras y donde estés.",
  },
  {
    img: "pq-mercado",
    title: "Comparamos todo el mercado",
    text: "Hacemos el match perfecto entre lo que ofrece el mercado y lo que tú necesitas.",
  },
  {
    img: "pq-legal",
    title: "Asesoría legal incluida",
    text: "Nuestro equipo tiene formación legal para guiarte en cada siniestro y resolver todas tus dudas.",
  },
  {
    img: "pq-ia",
    title: "IA en cada etapa",
    text: "Nuestra IA potencia cada etapa del proceso: encuentra tu seguro ideal, lo explica en simple y te acompaña cuando toca usarlo.",
  },
];

const stats = [
  {
    num: "$0",
    label:
      "Costo extra al contratar con nosotros. Nos financiamos con comisiones de las aseguradoras, no con tu bolsillo",
  },
  {
    num: "30+",
    label:
      "Años de experiencia acumulada del equipo en el mercado asegurador chileno",
  },
  {
    num: "100%",
    label: "Independientes. Sin vínculos con ninguna aseguradora",
  },
];

export default function PorQue() {
  return (
    <section className="porque" id="porque">
      <div className="container">
        <div className="porque-grid">
          <div className="porque-left fade-up">
            <div className="section-eyebrow">Por qué Asegúrate</div>
            <h2>Contratar un seguro era un cacho ¡Ya no!</h2>
            <p className="section-sub"></p>
            <div className="porque-items">
              {items.map((it) => (
                <div className="porque-item" key={it.title}>
                  <div className="pq-icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/img/${it.img}.webp`}
                      width={240}
                      height={240}
                      alt=""
                      className="pq-img"
                    />
                  </div>
                  <div className="pq-text">
                    <h4>{it.title}</h4>
                    <p>{it.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="porque-right fade-up">
            {stats.map((s) => (
              <div className="stat-card" key={s.num}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
