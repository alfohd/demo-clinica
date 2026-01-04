"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Shield,
  Heart,
  Clock,
  Award,
  Users,
  Star,
  CheckCircle,
  X,
  ArrowRight,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Smile,
  Zap,
  TrendingUp,
  Stethoscope
} from "lucide-react";
import { useState } from "react";

export default function DentalClinic() {
  const [modal, setModal] = useState<string | null>(null);

  const services = [
    {
      title: "Ortodoncia Invisible",
      desc: "Alineadores transparentes de última generación.",
      price: "Desde $89/mes"
    },
    {
      title: "Implantes Dentales",
      desc: "Recupera tu sonrisa con tecnología 3D.",
      price: "Desde $1,200"
    },
    {
      title: "Blanqueamiento Premium",
      desc: "Hasta 8 tonos más blanco en una sesión.",
      price: "Desde $299"
    },
    {
      title: "Limpieza Profunda",
      desc: "Prevención y salud bucal garantizada.",
      price: "Desde $79"
    }
  ];

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <span className="font-black text-xl text-blue-600">DentalClinic</span>
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#equipo">Equipo</a>
            <a href="#testimonios">Testimonios</a>
          </nav>
          <button
            onClick={() => setModal("Agendar cita")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
          >
            Agendar cita
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-32 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-block mb-6 bg-blue-600 text-white px-6 py-2 rounded-full font-bold">
              ✨ Clínica dental de alta tecnología
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              La sonrisa que
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                siempre soñaste
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10">
              Tratamientos avanzados, médicos certificados y resultados garantizados.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setModal("Agendar cita")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-black text-lg"
              >
                <Calendar className="inline mr-2" /> Consulta gratis
              </button>

              <a
                href="tel:+15551234567"
                className="border-2 border-slate-300 px-10 py-5 rounded-2xl font-black text-lg"
              >
                <Phone className="inline mr-2" /> Llamar
              </a>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80"
            className="rounded-3xl shadow-2xl h-[600px] w-full object-cover"
          />
        </div>
      </section>

      {/* ================= MÉTRICAS ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
        {[
          { icon: Users, value: "10K+", label: "Pacientes felices" },
          { icon: Award, value: "15+", label: "Años experiencia" },
          { icon: Star, value: "4.9", label: "Calificación" },
          { icon: Shield, value: "100%", label: "Garantía" }
        ].map((m, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-xl border">
            <m.icon className="mx-auto text-blue-600 mb-4" size={32} />
            <div className="text-4xl font-black">{m.value}</div>
            <div className="text-slate-600">{m.label}</div>
          </motion.div>
        ))}
      </section>

      {/* ================= SERVICIOS ================= */}
      <section id="servicios" className="py-32 px-6 bg-slate-50">
        <h2 className="text-5xl font-black text-center mb-20">
          Tratamientos <span className="text-blue-600">Premium</span>
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-3xl p-8 shadow-xl border">
              <Sparkles className="text-blue-600 mb-4" />
              <h3 className="text-xl font-black mb-2">{s.title}</h3>
              <p className="text-slate-600 mb-4">{s.desc}</p>
              <div className="flex justify-between items-center">
                <span className="font-black text-blue-600">{s.price}</span>
                <button onClick={() => setModal(s.title)}>
                  <ArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESO ================= */}
      <section id="proceso" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-20">
          Tu sonrisa en <span className="text-blue-600">4 pasos</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Agenda tu cita",
            "Diagnóstico digital",
            "Plan personalizado",
            "Sonríe con confianza"
          ].map((step, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-8 text-center shadow-xl">
              <div className="text-6xl font-black opacity-30 mb-4">0{i + 1}</div>
              <p className="font-bold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EQUIPO ================= */}
      <section id="equipo" className="py-32 px-6 bg-slate-50">
        <h2 className="text-5xl font-black text-center mb-20">
          Nuestro <span className="text-blue-600">equipo médico</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {["Dra. Laura Pérez", "Dr. Miguel Torres", "Dra. Ana Ruiz"].map((name, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <Stethoscope className="mx-auto text-blue-600 mb-4" size={40} />
              <h4 className="font-black text-xl">{name}</h4>
              <p className="text-slate-600">Especialista certificado</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIOS ================= */}
      <section id="testimonios" className="py-32 px-6">
        <h2 className="text-5xl font-black text-center mb-20">
          Pacientes <span className="text-blue-600">felices</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-xl border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 italic">
                “Excelente atención, resultados increíbles. Volvería sin dudar.”
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="py-32 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h2 className="text-6xl font-black mb-6">
          Tu nueva sonrisa empieza hoy
        </h2>
        <p className="text-xl mb-10">
          Primera consulta gratuita por tiempo limitado
        </p>
        <button
          onClick={() => setModal("Agendar ahora")}
          className="bg-white text-blue-600 px-16 py-6 rounded-2xl font-black text-xl"
        >
          Agendar ahora
        </button>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-10 max-w-xl w-full relative"
            >
              <button onClick={() => setModal(null)} className="absolute top-4 right-4">
                <X />
              </button>

              <h3 className="text-3xl font-black text-blue-600 mb-6">{modal}</h3>

              <ul className="space-y-2 text-slate-600 mb-6">
                <li>✓ Diagnóstico profesional</li>
                <li>✓ Tecnología digital</li>
                <li>✓ Plan personalizado</li>
                <li>✓ Opciones de financiamiento</li>
              </ul>

              <div className="grid grid-cols-2 gap-4">
                <a href="https://wa.me/15551234567" className="bg-green-500 text-white py-3 rounded-xl font-bold text-center">
                  WhatsApp
                </a>
                <a href="mailto:info@dentalclinic.com" className="bg-blue-600 text-white py-3 rounded-xl font-bold text-center">
                  Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
