import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/portal/LoginForm";

export const metadata: Metadata = {
  title: "Portal de clientes · Asegúrate",
  description: "Ingresa para revisar tus pólizas, vencimientos y documentos.",
};

export default function IngresarPage() {
  return (
    <div className="login-page">
      <header className="login-header">
        <Link href="/" className="logo logo-link">Asegúrate</Link>
        <Link href="/" className="login-back">← Volver al inicio</Link>
      </header>

      <main className="login-main">
        <div className="login-card">
          <div className="section-eyebrow">Portal de clientes</div>
          <h1>Revisa tus seguros</h1>
          <p className="login-intro">
            Ingresa con el correo que registraste con nosotros y te enviaremos
            un código de acceso. Sin contraseñas que recordar.
          </p>

          <LoginForm />

          <p className="login-foot">
            ¿Aún no eres cliente? <Link href="/cotizar">Cotiza gratis</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
