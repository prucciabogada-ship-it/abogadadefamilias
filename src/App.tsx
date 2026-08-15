import React, { useState } from 'react';
import { 
  Instagram, 
  Video
} from 'lucide-react';

function WhatsAppIcon({ className = "w-4 h-4 fill-current" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

export default function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Link oficial del evento en Cal.com
  const calComUrl = "https://cal.com/paula-rucci/consulta-legal?embed=true&layout=month_view";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.correo.trim()) return;
    setFormSubmitted(true);
  };

  const [lawyerPhoto, setLawyerPhoto] = useState("/images/paula-rucci.jpg");
  const [contractPhoto, setContractPhoto] = useState("/images/contract-signing.jpg");
  const [logoPhoto, setLogoPhoto] = useState("/images/logo.png");

  const defaultLawyerFallback = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80";
  const defaultContractFallback = "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-black font-sans flex justify-center selection:bg-[#EFCA53] selection:text-black scroll-smooth">
      <div className="w-full max-w-[960px] bg-white shadow-2xl overflow-hidden flex flex-col relative">
        
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 bg-[#F3EFE9]/95 backdrop-blur-md border-b border-[#E5DFD5] px-6 py-4 flex items-center justify-between">
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

        {/* SECCIÓN 1: HERO */}
        <section className="bg-[#F3EFE9] px-8 sm:px-14 lg:px-16 py-12 sm:py-16 border-b border-[#E5DFD5]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 items-center">
            
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

              <div className="pt-3">
                <a
                  href="https://wa.me/56983698589?text=Hola%20Paula,%20quisiera%20solicitar%20informaci%C3%B3n%20para%20una%20consulta%20legal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black hover:bg-[#1f1f1f] text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <span className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span>CONTÁCTAME</span>
                </a>
              </div>
            </div>

            {/* Logo Oficial Agrandado */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center space-y-4 pt-4 md:pt-0">
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl border-2 border-[#EFCA53]/60 bg-black">
                <img 
                  src={logoPhoto} 
                  onError={() => setLogoPhoto("/images/logo.png")}
                  alt="Paula Rucci Logo Oficial"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 2: DEMANDA DE PENSIÓN DE ALIMENTOS */}
        <section className="grid grid-cols-1 md:grid-cols-2 bg-[#F4CE58]">
          <div className="relative min-h-[380px] md:min-h-[480px] bg-neutral-900 overflow-hidden">
            <img 
              src={lawyerPhoto} 
              onError={() => setLawyerPhoto(defaultLawyerFallback)}
              alt="Paula Rucci - Abogada de Familia e Infancia"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

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

        {/* SECCIÓN 3: NUESTROS SERVICIOS */}
        <section id="servicios" className="bg-black text-white px-8 sm:px-12 lg:px-14 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-start">
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

        {/* SECCIÓN 4: MÓDULO CAL.COM EMBEBIDO */}
        <section id="agenda" className="bg-[#F3EFE9] px-6 sm:px-10 lg:px-12 py-14 sm:py-20 border-t border-b border-[#E5DFD5]">
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

            <div className="bg-white border border-[#DDD6CB] rounded-lg shadow-sm overflow-hidden min-h-[700px]">
              <iframe
                src={calComUrl}
                title="Agenda interactiva Paula Rucci"
                className="w-full h-[720px] border-none"
              ></iframe>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: FOOTER */}
        <footer id="contacto" className="grid grid-cols-1 md:grid-cols-12">
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

            <div className="flex items-center gap-4 pt-8 border-t border-neutral-900">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#EFCA53]/40 bg-black">
                <img 
                  src={logoPhoto} 
                  onError={() => setLogoPhoto("/images/logo.png")}
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

          <div className="md:col-span-5 bg-[#F4CE58] p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-center space-y-6">
            <a
              href="https://wa.me/56983698589?text=Hola%20Paula,%20quisiera%20solicitar%20informaci%C3%B3n%20para%20una%20consulta%20legal."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[280px] bg-white hover:bg-neutral-50 text-black px-6 py-4 rounded-full flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-200 group active:scale-[0.98]"
            >
              <span className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm">
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </span>
              <span className="font-bold text-base sm:text-lg text-[#141414]">
                Contáctame
              </span>
            </a>

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
