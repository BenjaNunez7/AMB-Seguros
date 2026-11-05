"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Formulario de ingreso por código al correo.
 * TODO: conectar con Supabase Auth (signInWithOtp) cuando esté la base de datos.
 * Mientras tanto, al enviar muestra un aviso de que el portal está en construcción.
 */
export default function LoginForm() {
  const [enviado, setEnviado] = useState(false);

  return (
    <>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          setEnviado(true);
        }}
      >
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="tu@correo.cl"
          autoComplete="email"
          required
        />
        <button type="submit" className="btn-primary">
          Enviarme el código
        </button>
      </form>

      {enviado && (
        <div className="login-notice" role="status">
          Estamos terminando el portal de clientes. Muy pronto vas a poder ver
          aquí tus pólizas, vencimientos y documentos. Si necesitas algo hoy,{" "}
          <Link href="/cotizar#contacto">escríbenos</Link> y te ayudamos.
        </div>
      )}
    </>
  );
}
