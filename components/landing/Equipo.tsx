const equipo = [
  {
    inicial: "M",
    nombre: "Marco Martínez",
    rol: "Corredor Senior",
    bio: "Corredor de seguros senior con más de 30 años de experiencia en el mercado chileno.",
    email: "marco.martinez@asegurate.cl",
  },
  {
    inicial: "A",
    nombre: "Agustina Martínez",
    rol: "Corredora · Abogada",
    bio: "Abogada UDP y corredora de seguros. Lidera la asesoría legal y la gestión de siniestros.",
    email: "agustina.martinez@asegurate.cl",
  },
  {
    inicial: "B",
    nombre: "Benjamín Núñez",
    rol: "Tecnología y Procesos",
    bio: "Ingeniero Civil Industrial UAI. Encargado del diseño de procesos y la tecnología de Asegúrate.",
    email: "benjamin.nunez@asegurate.cl",
  },
];

export default function Equipo() {
  return (
    <section className="equipo" id="equipo">
      <div className="container">
        <div className="fade-up">
          <div className="equipo-title">Quiénes somos</div>
        </div>
        <div className="team-grid">
          {equipo.map((p) => (
            <div className="team-card fade-up" key={p.email}>
              <div className="team-avatar">{p.inicial}</div>
              <div className="team-name">{p.nombre}</div>
              <div className="team-role">{p.rol}</div>
              <p className="team-bio">{p.bio}</p>
              <a href={`mailto:${p.email}`} className="team-email">
                {p.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
