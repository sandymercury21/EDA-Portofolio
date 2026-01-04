
import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  Award,
  BarChart3,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  Download,
  FileText
} from 'lucide-react';
import { PROFILE_DATA } from './constants';

const App: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PROFILE_DATA.phone.replace(/[^0-9]/g, '')}?text=Halo%20Erin,%20saya%20tertarik%20bekerja%20sama%20dengan%20Anda.`;

  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 no-print">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            EDA.
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">Tentang</a>
            <a href="#education" className="hover:text-indigo-600 transition-colors">Pendidikan</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Pengalaman</a>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleDownloadCV}
              className="hidden sm:flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 text-sm font-semibold rounded-full hover:bg-slate-50 transition-all"
            >
              <Download size={16} /> CV PDF
            </button>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-24">
        
        {/* Hero Section */}
        <section id="about" className="flex flex-col md:flex-row items-center gap-12 pt-8">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-sm font-bold rounded-full">
              Sales Leadership & Management
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Seorang profesional di bidang Sales dengan pengalaman lebih dari 10 tahun. Berpengalaman dalam memimpin tim area, strategi pemasaran, dan manajemen akun kunci.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm">
                <Calendar size={18} className="text-indigo-500" />
                <span>{PROFILE_DATA.birthDate}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm">
                <MapPin size={18} className="text-indigo-500" />
                <span>Semarang, Jawa Tengah</span>
              </div>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-600 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-100 transition-colors"
              >
                <Phone size={18} />
                <span className="font-semibold">{PROFILE_DATA.phone}</span>
              </a>
            </div>
            <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start no-print">
               <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Hire Me Now <ExternalLink size={20} />
              </a>
              <button 
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Download CV PDF <Download size={20} />
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <img 
                src="https://picsum.photos/seed/erin/600/600" 
                alt={PROFILE_DATA.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
              <GraduationCap className="text-indigo-600" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Pendidikan Terakhir</h2>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-100/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">{PROFILE_DATA.education.degree}</h3>
              <p className="text-lg text-indigo-600 font-semibold">{PROFILE_DATA.education.institution}</p>
            </div>
            <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 text-center">
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">GPA / IPK</p>
              <p className="text-4xl font-black text-slate-900">{PROFILE_DATA.education.gpa}</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12 scroll-mt-24">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
              <Briefcase className="text-indigo-600" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Perjalanan Karir</h2>
          </div>
          
          <div className="space-y-8">
            {PROFILE_DATA.experiences.map((exp, index) => (
              <div key={index} className="group relative pl-8 md:pl-0">
                {/* Timeline connector */}
                {index !== PROFILE_DATA.experiences.length - 1 && (
                  <div className="absolute left-0 md:left-1/2 top-10 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />
                )}
                
                <div className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2 space-y-4">
                    <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-lg group-hover:shadow-indigo-100 transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest">{exp.period}</p>
                          <h3 className="text-2xl font-bold text-slate-900 mt-1">{exp.role}</h3>
                          <p className="text-lg font-medium text-slate-600">{exp.company}</p>
                        </div>
                        <Award className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-slate-500 leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-full border border-slate-100">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline point */}
                  <div className="absolute left-0 md:left-1/2 top-10 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-md -translate-x-1/2 z-10 hidden md:block" />
                  
                  <div className="hidden md:block w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 rounded-3xl text-white space-y-2">
            <BarChart3 size={32} className="opacity-50" />
            <p className="text-5xl font-black">15+</p>
            <p className="text-indigo-100 font-medium uppercase tracking-wider text-sm">Tahun Pengalaman</p>
          </div>
          <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-2 shadow-sm">
            <p className="text-5xl font-black text-slate-900">3</p>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Perusahaan Multinasional</p>
          </div>
          <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-2 shadow-sm">
            <p className="text-5xl font-black text-slate-900">3.11</p>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">IPK S.AK STIE Smg</p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-24 py-12 no-print">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Erin Dwi Aprilia</p>
            <p className="text-slate-500 mt-1">Professional Sales Leadership Portfolio</p>
          </div>
          <div className="flex gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all font-semibold"
            >
              <MessageCircle size={20} />
              <span>{PROFILE_DATA.phone}</span>
            </a>
          </div>
          <p className="text-slate-400 text-sm">© 2024 EDA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
