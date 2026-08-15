import React, { useState } from 'react';
import { 
  MessageCircle, 
  Calendar, 
  Instagram, 
  Check, 
  Clock, 
  ChevronRight,
  Sparkles,
  Send,
  Video
} from 'lucide-react';

export default function App() {
  // Contact form state
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Agenda interactive state
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

  // Generic/Reference images with clean fallbacks for user replacement
  const defaultLawyerImg = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80";
  const defaultContractImg = "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80";
  
  const [lawyerPhoto, setLawyerPhoto] = useState("/images/paula-rucci.jpg");
  const [contractPhoto, setContractPhoto] = useState("/images/contract-signing.jpg");

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-black font-sans-main flex justify-center selection:bg-[#EFCA53] selection:text-black">
      {/* Container simulating exact PDF single-column canvas */}
      <div className="w-full max-w-[960px] bg-white shadow-2xl overflow-hidden flex flex-col">
        
        {/* =========================================================================
            SECTION 1: HERO / TOP SECTION
            - Cream background (#F3EFE9)
            - Left: Title, Description, Credentials, CONTÁCTAME Button
            - Right: Lady Justice Gold Emblem + "PAULA RUCCI ABOGADA"
        ========================================================================= */}
        <section className="bg-[#F3EFE9] px-8 sm:px-14 lg:px-16 py-14 sm:py-20 border-b border-[#E5DFD5]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Main Title */}
              <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#141414] leading-[1.15] tracking-tight uppercase">
                ABOGADA DE<br />
                FAMILIA E INFANCIA
              </h1>

              {/* Paragraph 1 */}
              <p className="text-[13px] sm:text-[14px] text-[#2C2C2C] leading-relaxed font-normal">
                Soy abogada especializada en Derecho de Familia, comprometida con brindar
                una asesoría jurídica seria, clara y cercana. Entiendo que detrás de cada caso
                existe una historia personal y familiar que merece ser escuchada y abordada con respeto.
              </p>

              {/* Paragraph 2 */}
              <p className="text-[13px] sm:text-[14px] text-[#2C2C2C] leading-relaxed font-normal">
                Mi trabajo entrega un servicio jurídico estratégico, acompañando a cada persona durante todo el proceso.
              </p>

              {/* Credentials / Qualifications */}
              <div className="space-y-1 pt-1 text-[12px] sm:text-[13px] text-[#333333] font-medium leading-snug">
                <p>Abogada diplomada en Derecho de Familia Universidad Católica,</p>
                <p>Magister en Derecho de Familia e Infancia Universidad de Los Andes,</p>
                <p>Ex Funcionaria Poder Judicial.</p>
              </div>

              {/* Button: CONTÁCTAME */}
              <div className="pt-3">
                <a
                  href="#contacto"
                  id="hero-contact-button"
                  className="inline-flex items-center gap-3 bg-black hover:bg-[#1f1f1f] text-white px-6 sm:px-8 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <span className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span>CONTÁCTAME</span>
                </a>
              </div>

            </div>

            {/* Right Column: Lady Justice Gold Emblem */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center space-y-4 pt-4 md:pt-0">
              
              {/* Gold Emblem SVG Illustration */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                  {/* Subtle golden halo circle */}
                  <circle cx="100" cy="100" r="88" stroke="#EFCA53" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
                  <circle cx="100" cy="100" r="82" stroke="#EFCA53" strokeWidth="1" opacity="0.4" />
                  
                  {/* Stylized Lady Justice profile & Scales */}
                  {/* Balance / Scales */}
                  <path d="M70 65 L130 65" stroke="#EFCA53" strokeWidth="2" strokeLinecap="round" />
                  <line x1="100" y1="45" x2="100" y2="155" stroke="#EFCA53" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Left pan */}
                  <path d="M70 65 L55 95 L85 95 Z" stroke="#EFCA53" strokeWidth="1.5" fill="#EFCA53" fillOpacity="0.1" />
                  <path d="M50 95 Q70 115 90 95" stroke="#EFCA53" strokeWidth="2" fill="none" />
                  
                  {/* Right pan */}
                  <path d="M130 65 L115 95 L145 95 Z" stroke="#EFCA53" strokeWidth="1.5" fill="#EFCA53" fillOpacity="0.1" />
                  <path d="M110 95 Q130 115 150 95" stroke="#EFCA53" strokeWidth="2" fill="none" />

                  {/* Lady Profile / Crown / Blindfold lines */}
                  <path d="M100 50 Q112 58 110 75 Q106 90 95 105" stroke="#EFCA53" strokeWidth="2" fill="none" />
                  <path d="M92 68 Q105 70 102 76" stroke="#EFCA53" strokeWidth="1.5" />
                  <circle cx="100" cy="42" r="6" stroke="#EFCA53" strokeWidth="2" fill="#EFCA53" fillOpacity="0.2" />

                  {/* Base */}
                  <path d="M75 155 L125 155" stroke="#EFCA53" strokeWidth="3" strokeLinecap="round" />
                  <path d="M65 162 L135 162" stroke="#EFCA53" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Text: PAULA RUCCI ABOGADA */}
              <div className="space-y-1">
                <h2 className="font-playfair text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#C9A227] uppercase">
                  PAULA RUCCI
                </h2>
                <p className="font-playfair text-sm sm:text-base font-semibold tracking-[0.35em] text-[#C9A227] uppercase">
                  ABOGADA
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            SECTION 2: DEMANDA DE PENSIÓN DE ALIMENTOS
            - 2 Columns:
              - Left: Professional Portrait Photo of Lawyer
              - Right: Warm Yellow/Gold Background Box (#F4CE58) with Exact Text & RESERVA TU HORA Button
        ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 bg-[#F4CE58]">
          
          {/* Left Column: Lawyer Photo */}
          <div className="relative min-h-[360px] md:min-h-[460px] bg-neutral-900 overflow-hidden">
            <img 
              src={lawyerPhoto} 
              onError={() => setLawyerPhoto(defaultLawyerImg)}
              alt="Paula Rucci - Abogada de Familia e Infancia"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft overlay gradient for seamless print look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Warm Golden-Yellow Box with Content */}
          <div className="bg-[#F4CE58] p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-5 text-[#141414]">
            
            {/* Title */}
            <h2 className="font-playfair text-2xl sm:text-3xl font-extrabold tracking-tight uppercase leading-tight text-[#141414]">
              DEMANDA DE PENSIÓN<br />
              DE ALIMENTOS
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[13px] sm:text-[14px] text-[#1A1A1A] leading-relaxed font-medium">
              No se trata solo de demandar una pensión de alimentos, sino de exigir lo que legalmente corresponde para tus hijos.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[13px] sm:text-[14px] text-[#1A1A1A] leading-relaxed">
              Estudio tu caso en detalle para determinar cuánto corresponde solicitar y cómo respaldarlo. Te entrego una estrategia clara para enfrentar el proceso con seguridad y decisión.
            </p>

            {/* Paragraph 3 */}
            <p className="text-[13px] sm:text-[14px] text-[#1A1A1A] leading-relaxed">
              Defiendo tus derechos y los de tus hijos, desplegando toda la estrategia judicial para fijar una pensión de alimentos acorde a sus necesidades.
            </p>

            {/* Paragraph 4 */}
            <p className="text-[13px] sm:text-[14px] font-bold text-[#141414] leading-relaxed">
              Si el otro progenitor no cumple, yo te ayudo a EXIGIR que cumpla.
            </p>

            {/* Button: RESERVA TU HORA */}
            <div className="pt-2">
              <a
                href="#agenda"
                id="pension-reserva-button"
                className="inline-flex items-center gap-3 bg-black hover:bg-[#1f1f1f] text-white px-6 sm:px-8 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
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
            SECTION 3: NUESTROS SERVICIOS
            - Black Background (#000000)
            - Left: Title "NUESTROS SERVICIOS" + Contract Photo
            - Right: 2-Column Grid of 12 Exact Pill Badges (Alternating Yellow & White)
        ========================================================================= */}
        <section id="servicios" className="bg-black text-white px-8 sm:px-12 lg:px-14 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-start">
            
            {/* Left Column: Title & Contract Photo */}
            <div className="md:col-span-5 space-y-6">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold tracking-tight uppercase leading-tight text-white">
                NUESTROS<br />
                SERVICIOS
              </h2>

              <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-xl max-w-[340px]">
                <img 
                  src={contractPhoto} 
                  onError={() => setContractPhoto(defaultContractImg)}
                  alt="Firma de contrato y asesoría legal"
                  className="w-full h-48 sm:h-56 object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: 2-Column Grid with Exact Pill Badges */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              
              {/* Row 1 */}
              <div className="flex items-center justify-center px-4 py-3 bg-transparent border border-neutral-700 text-white rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px]">
                DEMANDA DE PENSIÓN DE ALIMENTOS
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-[#F4CE58] text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                COBRO DE DEUDA DE ALIMENTOS
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-center px-4 py-3 bg-[#F4CE58] text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                MEDIACIÓN
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-white text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                VIOLENCIA INTRAFAMILIAR
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-center px-4 py-3 bg-white text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                DIVORCIOS
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-[#F4CE58] text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                ÓRDENES DE ALEJAMIENTO
              </div>

              {/* Row 4 */}
              <div className="flex items-center justify-center px-4 py-3 bg-[#F4CE58] text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                CESE DE ALIMENTOS
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-white text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                AUMENTO DE ALIMENTOS
              </div>

              {/* Row 5 */}
              <div className="flex items-center justify-center px-4 py-3 bg-white text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                RELACIÓN DIRECTA Y REGULAR (VISITAS)
              </div>
              <div className="flex items-center justify-center px-4 py-3 bg-[#F4CE58] text-black rounded-full text-center text-[11px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight min-h-[48px] shadow-sm">
                CUIDADO PERSONAL
              </div>

              {/* Row 6 */}
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
            SECTION 4: AGENDA INTEGRADA
            - Cream Background (#F3EFE9)
            - 3 Stacked Lines: "AGENDA INTEGRADA"
            - Interactive Calendar & Time Selection
        ========================================================================= */}
        <section id="agenda" className="bg-[#F3EFE9] px-8 sm:px-14 lg:px-16 py-14 sm:py-20 border-t border-b border-[#E5DFD5]">
          <div className="space-y-8">
            
            {/* 3-line Stacked Title */}
            <div className="space-y-1">
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-[#141414] uppercase">
                AGENDA INTEGRADA
              </h2>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-[#141414] uppercase">
                AGENDA INTEGRADA
              </h2>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-[#141414] uppercase">
                AGENDA INTEGRADA
              </h2>
            </div>

            {/* Integrated Booking Component Box */}
            <div className="bg-white border border-[#DDD6CB] p-6 sm:p-8 rounded-lg shadow-sm">
              {bookingConfirmed ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 text-[#1a9a48] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#141414]">
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
                  {/* Select Day */}
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
                          <span className="block text-lg font-bold font-playfair">{item.day}</span>
                          <span className="block text-[9px] opacity-80">{item.slots} disp.</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Hour */}
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

                  {/* Confirm CTA */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={handleBooking}
                      className="w-full sm:w-auto bg-black hover:bg-[#1f1f1f] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer"
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
            SECTION 5: FOOTER / CONTACTO
            - 2 Columns:
              - Left: Black Background (#000000)
                - Title: "LLENA ESTE FORMULARIO Y HABLEMOS."
                - Form: Nombre (White pill input), Correo (White pill input)
                - Signature Emblem: Paula Rucci Abogada y Mediadora Familiar
              - Right: Warm Yellow/Gold Background (#F4CE58)
                - 3 Large White Pill Buttons: Contáctame, Agéndate, Sígueme
        ========================================================================= */}
        <footer id="contacto" className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column (Black Background) */}
          <div className="md:col-span-7 bg-black text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Title */}
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold tracking-tight uppercase leading-snug text-white">
                LLENA ESTE FORMULARIO<br />
                Y HABLEMOS.
              </h2>

              {/* Minimal Form */}
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
                  
                  {/* Field: Nombre */}
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
                      placeholder=""
                      className="w-full bg-white text-black text-sm px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-[#F4CE58]"
                    />
                  </div>

                  {/* Field: Correo */}
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
                      placeholder=""
                      className="w-full bg-white text-black text-sm px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-[#F4CE58]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#F4CE58] hover:bg-[#ebc44d] text-black font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-200 shadow-md cursor-pointer"
                    >
                      Enviar Consulta
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Bottom Emblem and Signature */}
            <div className="flex items-center gap-4 pt-8 border-t border-neutral-900">
              {/* Gold Lady Justice Icon */}
              <div className="w-12 h-12 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  <circle cx="50" cy="50" r="44" stroke="#EFCA53" strokeWidth="1.5" />
                  <path d="M35 38 L65 38" stroke="#EFCA53" strokeWidth="1.5" />
                  <line x1="50" y1="28" x2="50" y2="72" stroke="#EFCA53" strokeWidth="1.5" />
                  <path d="M35 38 L27 54 L43 54 Z" stroke="#EFCA53" strokeWidth="1" fill="#EFCA53" fillOpacity="0.2" />
                  <path d="M65 38 L57 54 L73 54 Z" stroke="#EFCA53" strokeWidth="1" fill="#EFCA53" fillOpacity="0.2" />
                  <line x1="38" y1="72" x2="62" y2="72" stroke="#EFCA53" strokeWidth="2" />
                </svg>
              </div>

              {/* Exact Text Signature */}
              <div className="space-y-0.5">
                <p className="font-playfair text-xs sm:text-sm font-bold tracking-wider text-[#EFCA53] uppercase">
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

          {/* Right Column (Golden-Yellow Background with 3 Large White Pill Buttons) */}
          <div className="md:col-span-5 bg-[#F4CE58] p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-center space-y-6">
            
            {/* Button 1: Contáctame (WhatsApp Green Icon) */}
            <a
              href="mailto:prucci.abogada@gmail.com"
              id="footer-btn-contactame"
              className="w-full max-w-[280px] bg-white hover:bg-neutral-50 text-black px-6 py-4 rounded-full flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-200 group active:scale-[0.98]"
            >
              <span className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm">
                <MessageCircle className="w-5 h-5 fill-current" />
              </span>
              <span className="font-bold text-base sm:text-lg text-[#141414]">
                Contáctame
              </span>
            </a>

            {/* Button 2: Agéndate (Blue Icon) */}
            <a
              href="#agenda"
              id="footer-btn-agendate"
              className="w-full max-w-[280px] bg-white hover:bg-neutral-50 text-black px-6 py-4 rounded-full flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-200 group active:scale-[0.98]"
            >
              <span className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Video className="w-5 h-5 fill-current" />
              </span>
              <span className="font-bold text-base sm:text-lg text-[#141414]">
                Agéndate
              </span>
            </a>

            {/* Button 3: Sígueme (Instagram Gradient Icon) */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-btn-sigueme"
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
