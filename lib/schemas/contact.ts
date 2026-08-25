import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre completo.").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Ingresa un correo válido."),
  phone: z
    .string()
    .trim()
    .min(10, "Ingresa un teléfono a 10 dígitos.")
    .max(20)
    .regex(/^[0-9+()\s-]+$/, "Ingresa solo números y símbolos telefónicos."),
  uniformType: z.enum(["deportivo", "industrial", "medico", "corporativo"], {
    message: "Selecciona el tipo de uniforme.",
  }),
  quantity: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Cuéntanos brevemente qué necesitas.").max(2000),
  // Honeypot anti-spam: debe llegar vacío. Los bots suelen rellenar todos los campos.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
