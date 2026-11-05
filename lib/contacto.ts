// Datos de contacto de Asegúrate, usados en todo el sitio.
export const CONTACTO = {
  /** Número en formato internacional, solo dígitos (para WhatsApp y llamadas). */
  telefono: "56988187891",
  /** Cómo se muestra el número en pantalla. */
  telefonoVisible: "+56 9 8818 7891",
  email: "mmartinez@ans.cl",
};

export const whatsappUrl = `https://wa.me/${CONTACTO.telefono}`;
export const telefonoUrl = `tel:+${CONTACTO.telefono}`;
export const emailUrl = `mailto:${CONTACTO.email}`;
