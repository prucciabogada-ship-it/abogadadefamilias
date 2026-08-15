import React, { useState } from 'react';
import { 
  MessageCircle, 
  Calendar, 
  Instagram, 
  Check, 
  Clock, 
  Video
} from 'lucide-react';

export default function App() {
  // Estado del formulario de contacto
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Estado de la agenda
  const [selectedDate, setSelectedDate] = useState<number | null>(19);
  const [selectedTime, setSelectedTime] = useState<string | null>('11:00 AM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const availableDays = [
    { day: 18, name: 'LUN', slots: 3 },
    { day: 19, name: 'MAR', slots: 4 },
    { day: 20, name: 'MIÉ', slots: 5 },
    { day: 21, name: 'JUE', slots: 2 },
    { day: 22, name: 'VIE', slots: 4 },
    { day: 25, name: 'LUN', slots: 6 },
  ];

  const availableHours = ['09:30 AM', '11:00 AM', '15:00 PM', '16:30 PM', '18:00 PM'];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.correo.trim()) return;
    setFormSubmitted(true);
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return;
    setBookingConfirmed(true);
  };

  // Rutas de imágenes (Carga desde public/ con fallback)
  const [lawyerPhoto, setLawyerPhoto] = useState("/paula-rucci.jpg");
  const [contractPhoto, setContractPhoto] = useState("/contract-signing.jpg");
  const [logoPhoto, setLogoPhoto] = useState("/logo.png");

  const defaultLawyerFallback = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80";
  const defaultContractFallback = "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-black font-sans flex justify-center selection:bg-[#EFCA53] selection:text-black scroll-smooth">
      
      {/* Contenedor Principal (Simula el lienzo PDF) */}
      <div className="w-full max-w-[960px] bg-white shadow-2xl overflow-hidden flex flex-col relative">
        
        {/* =========================================================================
            NAVBAR MINIMALISTA & ELEGANTE
        ========================================================================= */}
        <header className="sticky top-0 z-50 bg-[#F3EFE9]/90 backdrop-blur-md border-b border-[#E5DFD5] px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif text-sm font-bold tracking-[0.2em] text-[#141414] uppercase hover:text-[#C9A227] transition-colors">
            PAULA RUCCI
          </a>
          
          <nav className="flex items-center gap-6 sm:gap-8 text-xs font-semibold tracking-wider text-[#2C2C2C] uppercase">
            <a href="#servicios" className="hover:text-[#C9A227] transition-colors">
              Servicios
            </a>
            <a href="#agenda" className="hover:text-[#C9A227] transition-colors">
              Reserva tu Hora
            </a>
            <a href="#contacto" className="hover:text-[#C9A227] transition-colors">
              Contacto
            </a>
          </nav>
        </header>

        {/* =========================================================================
            SECCIÓN 1: HERO / PORTADA
        ========================================================================= */}
        <section className="bg-[#F3EFE9] px-8 sm:px-14 lg:px-16 py-12 sm:py-16 border-b border-[#E5DFD5]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 items-center">
            
            {/* Columna Izquierda: Contenidos */}
            <div className="md:col-span-7 space-y-6">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#141414] leading-[1.15] tracking-tight uppercase">
                ABOGADA DE<br />
                FAMILIA E INFANCIA
              </h1>

              <p className="text-[13px] sm:text-[14px] text-[#2C2C2C] leading-relaxed font-normal">
                Soy abogada especializada en Derecho de Familia, comprometida con brindar
                una asesoría jurídica seria, clara y cercana. Entiendo que detrás de cada caso
                existe una historia personal y familiar que merece ser escuchada y abordada con respeto.
              </p>

              <p className="text-[13px] sm:text-[14px] text-[#2C2C2C] leading-relaxed font-normal">
                Mi trabajo entrega un servicio jurídico estratégico, acompañando a cada persona durante todo el proceso.
              </p>

              <div className="space-y-1 pt-1 text-[12px] sm:text-[13px] text-[#333333] font-medium leading-snug">
                <p>Abogada diplomada en Derecho de Familia Universidad Católica,</p>
                <p>Magister en Derecho de Familia e Infancia Universidad de Los Andes,</p>
                <p>Ex Funcionaria Poder Judicial.</p>
              </div>

              {/* Botón WhatsApp */}
              <div className="pt-3">
                <a
                  href="https://wa.me/56983698589?text=Hola%20Paula,%20quisiera%20solicitar%20informaci%C3%B3n%20para%20una%20consulta%20legal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black hover:bg-[#1f1f1f] text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <span className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span>CONTÁCTAME</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Logo Oficial Circular */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center space-y-4 pt-4 md:pt-0">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-xl border-2 border-[#EFCA53]/50">
                <img 
                  src={logoPhoto} 
                  onError={() => setLogoPhoto("/logo.jpg")}
                  alt="Paula Rucci Logo Oficial"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECCIÓN 2: DEMANDA DE PENSIÓN DE ALIMENTOS
        ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 bg-[#F4CE58]">
          
          {/* Foto Real de la Clienta */}
          <div className="relative min-h-[380px] md:min-h-[480px] bg-neutral-900 overflow-hidden">
            <img 
              src={lawyerPhoto} 
              onError={() => setLawyerPhoto(defaultLawyerFallback)}
              alt="Paula Rucci - Abogada de Familia e Infancia"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Caja Amarilla con Texto */}
          <div className="bg-[#F4CE58] p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-5 text-[#141414]">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight uppercase leading-tight text-[#141414]">
              DEMANDA DE PENSIÓN<br />
              DE ALIMENTOS
            </h2>

            <p className="text-[13px] sm:text-[14px] text-[#1A1A1A] leading-relaxed font-medium">
              No se trata solo de demandar una pensión de alimentos, sino de exigir lo que legalmente corresponde para tus hijos.
            </p>

            <p className="text-[13px] sm:text-[14px] text-[#1A1A1A] leading-relaxed">
              Estudio tu caso en detalle para determinar cuánto corresponde solicitar y cómo respaldarlo. Te entrego una estrategia clara para enfrentar el proceso con seguridad y decisión.
            </p>

            <p className="text-[13px] sm:text-[14px] text-[#1A1A1A] leading-relaxed">
              Defiendo tus derechos y los de tus hijos, desplegando toda la estrategia judicial para fijar una pensión de alimentos acorde a sus necesidades.
            </p>

            <p className="text-[13px] sm:text-[14px] font-bold text-[#141414] leading-relaxed">
              Si el otro progenitor no cumple, yo te ayudo a EXIGIR que cumpla.
            </p>

            <div className="pt-2">
              <a
                href="#agenda"
                className="inline-flex items-center gap-3 bg-black hover:bg-[#1f1f1f] text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0">
                  <Video className="w-3.5 h-3.5 fill-current" />
                </span>
                <span>RESERVA TU HORA</span>
              </a>
            </div>
          </div>

        </section>

        {/* =========================================================================
            SECCIÓN 3: NUESTROS SERVICIOS
        ========================================================================= */}
        <section id="servicios" className="bg-black text-white px-8 sm:px-12 lg:px-14 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-start">
            
            {/* Título e Imagen de Firma de Contrato */}
            <div className="md:col-span-5 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight uppercase leading-tight text-white">
                NUESTROS<br />
                SERVICIOS
              </h2>

              <div className="relative rounded-lg overflow-hidden border border-neutral-800 shadow-xl max-w-[340px]">
                <img 
                  src={contractPhoto} 
                  onError={() => setContractPhoto(defaultContractFallback)}
                  alt="Firma de contrato y asesoría legal"
                  className="w-full h-48 sm:h-56 object-cover object-center"
                />
              </div>
            </div>

            {/* Grid de Servicios */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center justify-center px-4 py-3 bg-transparent border border-neutral-700 text-white rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px]">
                DEMANDA DE PENSIÓN DE ALIMENTOS
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-[#F4CE58] text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                COBRO DE DEUDA DE ALIMENTOS
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-[#F4CE58] text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                MEDIACIÓN
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-white text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                VIOLENCIA INTRAFAMILIAR
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-white text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                DIVORCIOS
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-[#F4CE58] text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                ÓRDENES DE ALEJAMIENTO
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-[#F4CE58] text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                CESE DE ALIMENTOS
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-white text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                AUMENTO DE ALIMENTOS
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-white text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                RELACIÓN DIRECTA Y REGULAR (VISITAS)
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-[#F4CE58] text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                CUIDADO PERSONAL
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-[#F4CE58] text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                VULNERACIÓN DERECHOS DE LOS NIÑOS
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-white text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                AUTORIZACIÓN SALIDA DEL PAÍS
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECCIÓN 4: AGENDA INTEGRADA
        ========================================================================= */}
        <section id="agenda" className="bg-[#F3EFE9] px-8 sm:px-14 lg:px-16 py-14 sm:py-20 border-t border-b border-[#E5DFD5]">
          <div className="space-y-8">
            
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-[#141414] uppercase">
                AGENDA INTEGRADA
              </h2>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-[#141414] uppercase">
                AGENDA INTEGRADA
              </h2>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-[#141414] uppercase">
                AGENDA INTEGRADA
              </h2>
            </div>

            <div className="bg-white border border-[#DDD6CB] p-6 sm:p-8 rounded-lg shadow-sm">
              {bookingConfirmed ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 text-[#1a9a48] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#141414]">
                    ¡Hora Reservada con Éxito!
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto">
                    Tu cita ha quedado confirmada para el <span className="font-bold text-black">{selectedDate} de Agosto</span> a las <span className="font-bold text-black">{selectedTime}</span>.
                  </p>
                  <button
                    onClick={() => setBookingConfirmed(false)}
                    className="mt-2 text-xs font-bold uppercase tracking-wider text-[#C9A227] hover:underline"
                  >
                    Modificar o agendar otra hora
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                      Selecciona la fecha disponible:
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {availableDays.map((item) => (
                        <button
                          key={item.day}
                          type="button"
                          onClick={() => setSelectedDate(item.day)}
                          className={`p-3 text-center rounded border transition-all ${
                            selectedDate === item.day
                              ? 'bg-black text-white border-black font-bold shadow-md'
                              : 'bg-[#F9F7F4] border-[#E5DFD5] text-neutral-800 hover:border-black'
                          }`}
                        >
                          <span className="block text-[10px] uppercase font-semibold opacity-70">{item.name}</span>
                          <span className="block text-lg font-bold font-serif">{item.day}</span>
                          <span className="block text-[9px] opacity-80">{item.slots} disp.</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                      Selecciona el horario:
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {availableHours.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-3 text-xs rounded border text-center font-medium transition-all ${
                            selectedTime === time
                              ? 'bg-[#F4CE58] text-black border-[#F4CE58] font-bold shadow-sm'
                              : 'bg-[#F9F7F4] border-[#E5DFD5] text-neutral-800 hover:border-neutral-400'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={handleBooking}
                      className="w-full sm:w-auto bg-black hover:bg-[#1f1f1f] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer"
                    >
                      Confirmar Reserva de Hora
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECCIÓN 5: FOOTER / CONTACTO
        ========================================================================= */}
        <footer id="contacto" className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Columna Izquierda: Formulario & Firma */}
          <div className="md:col-span-7 bg-black text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight uppercase leading-snug text-white">
                LLENA ESTE FORMULARIO<br />
                Y HABLEMOS.
              </h2>

              {formSubmitted ? (
                <div className="py-6 space-y-2">
                  <div className="text-[#F4CE58] font-bold text-sm">✓ Mensaje Enviado</div>
                  <p className="text-neutral-300 text-xs">
                    Gracias {formData.nombre}. Te contactaré a la brevedad.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ nombre: '', correo: '', mensaje: '' });
                    }}
                    className="text-xs text-neutral-400 hover:text-white underline pt-2"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 max-w-sm">
                  <div className="space-y-1.5">
                    <label htmlFor="nombre" className="block text-xs font-bold text-neutral-300">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full bg-white text-black text-sm px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-[#F4CE58]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="correo" className="block text-xs font-bold text-neutral-300">
                      Correo
                    </label>
                    <input
                      type="email"
                      id="correo"
                      required
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      className="w-full bg-white text-black text-sm px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-[#F4CE58]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#F4CE58] hover:bg-[#ebc44d] text-black font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-200 shadow-md cursor-pointer"
                    >
                      Enviar Consulta
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Logo y Nombre Institucional */}
            <div className="flex items-center gap-4 pt-8 border-t border-neutral-900">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#EFCA53]/40">
                <img 
                  src={logoPhoto} 
                  onError={() => setLogoPhoto("/logo.jpg")}
                  alt="Paula Rucci Logo Footer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-0.5">
                <p className="font-serif text-xs sm:text-sm font-bold tracking-wider text-[#EFCA53] uppercase">
                  PAULA RUCCI
                </p>
                <p className="text-[10px] sm:text-[11px] font-semibold text-neutral-300 uppercase tracking-wide">
                  ABOGADA Y MEDIADORA FAMILIAR
                </p>
                <p className="text-[9px] sm:text-[10px] text-neutral-400">
                  Especialista en Derecho de Familia e Infancia
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Botones Amarillos */}
          <div className="md:col-span-5 bg-[#F4CE58] p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-center space-y-6">
            
            {/* Botón WhatsApp */}
            <a
              href="https://wa.me/56983698589?text=Hola%20Paula,%20quisiera%20solicitar%20informaci%C3%B3n%20para%20una%20consulta%20legal."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[280px] bg-white hover:bg-neutral-50 text-black px-6 py-4 rounded-full flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-200 group active:scale-[0.98]"
            >
              <span className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm">
                <MessageCircle className="w-5 h-5 fill-current" />
              </span>
              <span className="font-bold text-base sm:text-lg text-[#141414]">
                Contáctame
              </span>
            </a>

            {/* Botón Agéndate */}
            <a
              href="#agenda"
              className="w-full max-w-[280px] bg-white hover:bg-neutral-50 text-black px-6 py-4 rounded-full flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-200 group active:scale-[0.98]"
            >
              <span className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Video className="w-5 h-5 fill-current" />
              </span>
              <span className="font-bold text-base sm:text-lg text-[#141414]">
                Agéndate
              </span>
            </a>

            {/* Botón Instagram */}
            <a
              href="https://www.instagram.com/prucci.abogada/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[280px] bg-white hover:bg-neutral-50 text-black px-6 py-4 rounded-full flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-200 group active:scale-[0.98]"
            >
              <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Instagram className="w-5 h-5" />
              </span>
              <span className="font-bold text-base sm:text-lg text-[#141414]">
                Sígueme
              </span>
            </a>

          </div>

        </footer>

      </div>
    </div>
  );
}
