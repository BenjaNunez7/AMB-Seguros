const items = [
  "Independientes — trabajamos para ti",
  "Supervisados por la CMF",
  "30+ años de experiencia",
  "Asesoría legal incluida",
  "Sin letra chica",
];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-inner">
        {items.map((text) => (
          <div className="trust-item" key={text}>
            <span>✓</span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
