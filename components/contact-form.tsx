"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { UNIFORM_TYPE_OPTIONS } from "@/lib/constants";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      quantity: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setState("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("request-failed");

      setState("success");
      reset();
    } catch {
      setState("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot anti-spam: campo oculto para personas, visible para bots */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">No llenar este campo</Label>
        <Input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name ? <p className="mt-1 text-xs text-dezara-red">{errors.name.message}</p> : null}
        </div>

        <div>
          <Label htmlFor="company">Empresa / equipo</Label>
          <Input id="company" autoComplete="organization" {...register("company")} />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email ? <p className="mt-1 text-xs text-dezara-red">{errors.email.message}</p> : null}
        </div>

        <div>
          <Label htmlFor="phone">Teléfono</Label>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone ? <p className="mt-1 text-xs text-dezara-red">{errors.phone.message}</p> : null}
        </div>

        <div>
          <Label htmlFor="uniformType">Tipo de uniforme</Label>
          <Select id="uniformType" defaultValue="" {...register("uniformType")} aria-invalid={!!errors.uniformType}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            {UNIFORM_TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {errors.uniformType ? <p className="mt-1 text-xs text-dezara-red">{errors.uniformType.message}</p> : null}
        </div>

        <div>
          <Label htmlFor="quantity">Cantidad aproximada</Label>
          <Input id="quantity" placeholder="Ej. 25 piezas" {...register("quantity")} />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Mensaje</Label>
        <Textarea id="message" rows={5} {...register("message")} aria-invalid={!!errors.message} />
        {errors.message ? <p className="mt-1 text-xs text-dezara-red">{errors.message.message}</p> : null}
      </div>

      <Button type="submit" size="lg" disabled={state === "loading"} className="w-full sm:w-auto">
        {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
        Enviar mensaje
      </Button>

      <div role="status" aria-live="polite">
        {state === "success" ? (
          <p className="flex items-center gap-2 text-sm font-medium text-green-700">
            <CheckCircle2 className="h-4 w-4" aria-hidden />
            Mensaje enviado. Te contactaremos pronto.
          </p>
        ) : null}
        {state === "error" ? (
          <p className="flex items-center gap-2 text-sm font-medium text-dezara-red">
            <XCircle className="h-4 w-4" aria-hidden />
            No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.
          </p>
        ) : null}
      </div>
    </form>
  );
}
