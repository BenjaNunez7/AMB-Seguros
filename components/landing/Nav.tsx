import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="logo">Asegúrate</div>
      <ul>
        <li><a href="#como">Cómo funciona</a></li>
        <li><a href="#seguros">Seguros</a></li>
        <li><a href="#equipo">Equipo</a></li>
        <li className="nav-cliente">
          <Link href="/ingresar" className="btn-cliente">Soy cliente</Link>
        </li>
        <li><Link href="/cotizar" className="btn-nav">Cotizar gratis</Link></li>
      </ul>
    </nav>
  );
}
