"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Sparkles,
  Shield,
  Award,
  Users,
  Star,
  X,
  ArrowRight,
  Phone,
  Menu,
  Stethoscope,
  CheckCircle2
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";

/* =========================
   ANIMACIONES OPTIMIZADAS
========================= */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function DentalClinic() {
  const [modal, setModal] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* =========================
     SCROLL OPTIMIZADO
  ========================= */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =========================
     DATOS MEMORIZADOS
  ========================= */
  const services = useMemo(() => [
    { title: "Ortodoncia Invisible", price: "$89/mes", icon: Sparkles, color: "text-purple-600 bg-purple-50", desc: "Alinea tus dientes sin brackets metálicos" },
    { title: "Implantes 3D", price: "$1,200", icon: Shield, color: "text-blue-600 bg-blue-50", desc: "Tecnología de última generación" },
    { title: "Diseño de Sonrisa", price: "$299", icon: Award, color: "text-teal-600 bg-teal-50", desc: "Transforma tu sonrisa digitalmente" },
    { title: "Odontopediatría", price: "$79", icon: Users, color: "text-pink-600 bg-pink-50", desc: "Cuidado especial para los más pequeños" },
    { title: "Blanqueamiento LED", price: "$199", icon: Star, color: "text-yellow-600 bg-yellow-50", desc: "Sonrisa más blanca en 1 sesión" },
    { title: "Carillas Dentales", price: "$450", icon: Sparkles, color: "text-indigo-600 bg-indigo-50", desc: "Porcelana de alta calidad" }
  ], []);

  const stats = useMemo(() => [
    { number: "15K+", label: "Pacientes Felices" },
    { number: "98%", label: "Satisfacción" },
    { number: "25+", label: "Especialistas" },
    { number: "12", label: "Años de Experiencia" }
  ], []);

  const testimonials = useMemo(() => [
    { name: "María González", text: "Increíble servicio, mi sonrisa cambió por completo", rating: 5 },
    { name: "Carlos Ruiz", text: "Los mejores especialistas, muy profesionales", rating: 5 },
    { name: "Ana Martínez", text: "Tratamiento sin dolor, totalmente recomendado", rating: 5 }
  ], []);

  return (
    <main className="bg-white text-slate-900 font-sans">

      {/* =========================
         NAVBAR
      ========================= */}
      <header
        className={`fixed top-0 w-full z-50 transition-all ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-xl">
            <Stethoscope className="text-blue-600" />
            Nova<span className="text-blue-600">Dental</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#servicios" className="hover:text-blue-600 transition">Servicios</a>
            <a href="#tecnologia" className="hover:text-blue-600 transition">Tecnología</a>
            <a href="#equipo" className="hover:text-blue-600 transition">Equipo</a>
            <a href="#testimonios" className="hover:text-blue-600 transition">Testimonios</a>
            <a href="#planes" className="hover:text-blue-600 transition">Planes</a>
          </nav>

          <button
            onClick={() => setModal("Consulta")}
            className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:scale-105 transition"
          >
            Agendar cita
          </button>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu />
          </button>
        </div>
      </header>

      {/* =========================
         HERO
      ========================= */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeInUp} className="inline-block bg-blue-100 text-blue-600 font-bold text-sm uppercase px-4 py-2 rounded-full">
              🏆 Clínica #1 en Cartagena
            </motion.span>

            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-black mt-6 mb-6 leading-tight">
              Sonrisas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">transforman vidas</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-8 max-w-md leading-relaxed">
              Tecnología 3D de vanguardia, especialistas certificados internacionalmente y tratamientos completamente indoloros. Tu sonrisa perfecta te espera.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setModal("Consulta")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                Reservar ahora <ArrowRight size={20} />
              </button>
              <a href="tel:+15551234567" className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-white border-2 border-slate-200 font-bold hover:border-blue-600 transition">
                <Phone size={18} /> (+57) 300-123-4567
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-600" />
                <span className="text-slate-600">Primera consulta gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-600" />
                <span className="text-slate-600">Financiación 0%</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-[3rem] blur-2xl opacity-20"></div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3779712/pexels-photo-3779712.jpeg"
                alt="Clínica Dental"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
         ESTADÍSTICAS
      ========================= */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl font-black mb-2">{stat.number}</div>
              <div className="text-blue-100 text-sm font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
         SERVICIOS
      ========================= */}
      <section id="servicios" className="py-28 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-bold text-sm uppercase">Lo que hacemos</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-4">Tratamientos Especializados</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios dentales con la más alta tecnología y profesionalismo
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${s.color} group-hover:scale-110 transition`}>
                <s.icon size={28} />
              </div>
              <h3 className="font-black text-xl mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {s.desc}
              </p>
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="font-black text-2xl text-blue-600">{s.price}</span>
                <button className="bg-blue-50 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
         TECNOLOGÍA
      ========================= */}
      <section id="tecnologia" className="py-28 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold text-sm uppercase">Innovación</span>
            <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6">
              Tecnología de <span className="text-blue-600">Última Generación</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Contamos con equipos de diagnóstico 3D, scanners intraorales digitales y sistemas de tratamiento asistido por computadora que garantizan precisión milimétrica.
            </p>
            <div className="space-y-4">
              {[
                "Escaneo 3D sin moldes incómodos",
                "Radiografías digitales de baja radiación",
                "Cirugía guiada por computadora",
                "Sedación consciente para tratamientos sin estrés"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-[3rem] blur-3xl opacity-20"></div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg"
                alt="Tecnología Dental"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
         EQUIPO MÉDICO
      ========================= */}
      <section id="equipo" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-bold text-sm uppercase">Nuestro Equipo</span>
            <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-4">Especialistas Certificados</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Profesionales con formación internacional y años de experiencia transformando sonrisas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Dra. Laura Méndez", specialty: "Ortodoncista", exp: "15 años" },
              { name: "Dr. Andrés Rojas", specialty: "Implantólogo", exp: "12 años" },
              { name: "Dr. Cristian Vega", specialty: "Odontopediatra", exp: "10 años" }
            ].map((doctor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-10 rounded-[3rem] text-center shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition"></div>
                  <img
                    src={`https://i.pravatar.cc/300?img=${i + 10}`}
                    className="relative w-36 h-36 rounded-full mx-auto border-4 border-white shadow-lg"
                    alt={doctor.name}
                  />
                </div>
                <h3 className="font-black text-xl mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-bold mb-2">{doctor.specialty}</p>
                <p className="text-slate-500 text-sm">{doctor.exp} de experiencia</p>
                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
         TESTIMONIOS
      ========================= */}
      <section id="testimonios" className="py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-bold text-sm uppercase">Testimonios</span>
            <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-4">Lo que dicen nuestros pacientes</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    className="w-12 h-12 rounded-full"
                    alt={testimonial.name}
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">Paciente verificado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
         PLANES
      ========================= */}
      <section id="planes" className="py-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-bold text-sm uppercase">Precios</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-4">Planes Flexibles</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Financiación hasta en 12 meses sin intereses. Primera consulta totalmente gratuita
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { 
              name: "Básico", 
              price: "$79", 
              period: "/visita",
              desc: "Perfecto para mantenimiento dental",
              features: ["Chequeo completo", "Limpieza dental", "Rayos X digitales", "Consulta gratis"]
            },
            { 
              name: "Avanzado", 
              price: "$299", 
              period: "/tratamiento",
              desc: "Transforma tu sonrisa",
              features: ["Diseño digital", "Blanqueamiento LED", "Carillas de porcelana", "Seguimiento 6 meses"],
              featured: true
            },
            { 
              name: "Premium", 
              price: "$1,200", 
              period: "/implante",
              desc: "Solución definitiva",
              features: ["Implante titanio", "Corona 3D", "Cirugía guiada", "Garantía de por vida"]
            }
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[3rem] text-center transition-all ${
                plan.featured 
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105" 
                  : "bg-white border-2 border-slate-100 shadow-lg hover:shadow-2xl hover:scale-105"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-6 py-2 rounded-full text-sm font-black">
                  MÁS POPULAR
                </div>
              )}
              <h3 className={`font-black text-2xl mb-2 ${plan.featured ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className={`text-5xl font-black ${plan.featured ? "text-white" : "text-blue-600"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.featured ? "text-blue-100" : "text-slate-500"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mb-8 ${plan.featured ? "text-blue-100" : "text-slate-500"}`}>
                {plan.desc}
              </p>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle2 
                      size={20} 
                      className={plan.featured ? "text-green-300" : "text-green-600"} 
                    />
                    <span className={`text-sm ${plan.featured ? "text-white" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setModal(plan.name)}
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.featured
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Elegir {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
         CTA FINAL
      ========================= */}
      <section className="py-28 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            ¿Listo para tu nueva sonrisa?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Agenda tu consulta gratuita hoy y descubre cómo podemos transformar tu sonrisa
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setModal("Consulta Gratis")}
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition shadow-2xl"
            >
              Agendar Consulta Gratis
            </button>
            <a 
              href="tel:+15551234567" 
              className="bg-blue-500/30 backdrop-blur border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-500/40 transition flex items-center gap-3"
            >
              <Phone size={24} /> Llamar Ahora
            </a>
          </div>
        </motion.div>
      </section>

      {/* =========================
         MODAL
      ========================= */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur z-[100] flex items-center justify-center px-4"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white p-10 rounded-[3rem] max-w-md w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setModal(null)} className="absolute top-6 right-6">
                <X />
              </button>
              <h3 className="text-2xl font-black mb-6">Agendar {modal}</h3>
              <input className="w-full p-4 rounded-xl bg-slate-50 mb-4" placeholder="Nombre completo" />
              <input className="w-full p-4 rounded-xl bg-slate-50 mb-4" placeholder="Email" />
              <input className="w-full p-4 rounded-xl bg-slate-50 mb-6" placeholder="WhatsApp" />
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition">
                Enviar Solicitud
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================
         FOOTER
      ========================= */}
      <footer className="py-16 px-6 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 font-black text-xl mb-4">
              <Stethoscope className="text-blue-600" />
              Nova<span className="text-blue-600">Dental</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Transformando sonrisas con tecnología de vanguardia y el mejor equipo profesional de Cartagena.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-4">Servicios</h4>
            <ul className="space-y-2"></ul>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="hover:text-blue-600 cursor-pointer transition">Ortodoncia Invisible</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Implantes Dentales</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Diseño de Sonrisa</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Blanqueamiento LED</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-4">Contacto</h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" /> 
                Av. Santander #45-12, Cartagena
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" /> 
                +57 300 123 4567
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-blue-600" /> 
                Lun - Sáb: 8:00 AM - 7:00 PM
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <Facebook size={20} />
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-400 leading-relaxed">
              Inscritos en la Secretaría de Salud bajo el registro #DENT-2024-CART.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t text-center text-slate-400 text-xs">
          <p>© 2026 NovaDental Clinic Cartagena. Diseñado con tecnología de vanguardia por Gemini. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* MENU MÓVIL (OVERLAY) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-[100] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2 font-black text-xl">
                <Stethoscope className="text-blue-600" /> NovaDental
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-900">
                <X />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-2xl font-black">
              {["Servicios", "Tecnología", "Equipo", "Testimonios", "Planes"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-600"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <button
              onClick={() => {
                setModal("Consulta Móvil");
                setMobileMenuOpen(false);
              }}
              className="mt-auto bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl"
            >
              Agendar Cita Ahora
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

// Sub-componentes de Lucide que faltaban
function MapPin(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  );
}

function Clock(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  );
}

function Instagram(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );
}

function Facebook(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  );
}