import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor ingrese un correo válido." }),
  phone: z.string().min(8, { message: "El teléfono debe tener al menos 8 dígitos." }),
  service: z.string().min(1, { message: "Por favor seleccione un servicio de interés." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  // TODO: Reemplaza "TU_ID_AQUI" con el ID de tu formulario de Formspree
  // Regístrate gratis en https://formspree.io/
  // Crea un nuevo formulario apuntando a serviticogps@gmail.com
  // Copia el ID (parte final de la URL que te dan) y pégalo aquí.
  const FORMSPREE_ID = "xwveqyzk"; 

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      if (FORMSPREE_ID === "TU_ID_AQUI") {
        // Simulación si no hay ID configurado
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Form Data (Simulación):", data);
        // Descomentar la siguiente línea para mostrar error de configuración en lugar de éxito simulado
        // throw new Error("Falta configurar el ID del formulario");
      } else {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error("Error al enviar el formulario");
        }
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      setError("Hubo un error al enviar el mensaje. Por favor verifica tu conexión o intenta más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">¡Mensaje Enviado!</h3>
        <p className="text-green-700 mb-6">
          Gracias por contactarnos. Un asesor de TicoGPS se pondrá en contacto contigo a la brevedad posible.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-green-700 font-semibold hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 transition-colors">
      <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Envíanos un mensaje</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">Completa el formulario y te contactaremos para asesorarte.</p>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md flex items-center gap-2 text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-white">Nombre Completo</label>
        <input
          id="name"
          {...register("name")}
          className={cn(
            "w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-black",
            errors.name && "border-red-500 focus:ring-red-200"
          )}
          placeholder="Ej. Juan Pérez"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-white">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={cn(
              "w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-black",
              errors.email && "border-red-500 focus:ring-red-200"
            )}
            placeholder="juan@ejemplo.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-white">Teléfono</label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={cn(
              "w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-black",
              errors.phone && "border-red-500 focus:ring-red-200"
            )}
            placeholder="8888-8888"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-slate-700 dark:text-white">Servicio de Interés</label>
        <select
          id="service"
          {...register("service")}
          className={cn(
            "w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-black",
            errors.service && "border-red-500 focus:ring-red-200"
          )}
        >
          <option value="">Seleccione una opción</option>
          <option value="auto_particular">GPS para Auto Particular</option>
          <option value="flota">Control de Flota Corporativa</option>
          <option value="maquinaria">Maquinaria Pesada</option>
          <option value="motos">Motocicletas</option>
          <option value="otro">Otro</option>
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-white">Mensaje</label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={cn(
            "w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-black",
            errors.message && "border-red-500 focus:ring-red-200"
          )}
          placeholder="Hola, me gustaría recibir más información sobre..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-md font-bold text-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Mensaje"
        )}
      </button>
    </form>
  );
}
