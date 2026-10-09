import React, { useState } from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { COMPANY } from '../data/company';
import { getWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';
import {
  GraduationCap,
  Award,
  Layers,
  Truck,
  Recycle,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Building,
  User,
  Phone,
  Mail,
  Send,
  Sparkles,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  HelpCircle,
  FileCheck
} from 'lucide-react';

const TRACKS = [
  {
    id: 'grading',
    title: 'Sustainable Fashion & Garment Grading',
    tag: 'Fashion & Textiles',
    duration: '4 to 8 Weeks',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: Layers,
    description:
      'Learn the practical art of professional garment evaluation, fiber identification, sorting benchmarks, and condition classification.',
    modules: [
      'Natural vs synthetic fiber testing & tactile inspection',
      'A-Grade (Premium), B-Grade, and Export sorting criteria',
      'Defect detection: seams, zippers, color fastness & fabric fatigue',
      'Garment sanitization, ironing, and presentation packaging'
    ],
    idealFor: 'Fashion Design, Textile Tech, Apparel Merchandising & Costume Design students'
  },
  {
    id: 'logistics',
    title: 'Textile Supply Chain & Warehouse Logistics',
    tag: 'Operations & Logistics',
    duration: '4 to 12 Weeks',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    icon: Truck,
    description:
      'Gain real warehouse floor experience in managing high-volume textile bales, container unloading, inventory batching, and logistics.',
    modules: [
      'Inbound consignment inspection & volume intake protocols',
      'High-pressure hydraulic baling machine operations (45kg–100kg bales)',
      'Warehouse zoning, bin management, and inventory stock rotation',
      'Wholesale order fulfillment & transport logistics across Tamil Nadu'
    ],
    idealFor: 'Logistics, Supply Chain, Operations Management, BBA & MBA candidates'
  },
  {
    id: 'merchandising',
    title: 'B2B Textile Merchandising & Thrift Business',
    tag: 'Business & Commerce',
    duration: '4 to 8 Weeks',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    icon: Briefcase,
    description:
      'Master the commercial mechanics of second-hand apparel trading, customer negotiations, wholesale bale margins, and retail curation.',
    modules: [
      'B2B wholesale customer relations & quotation preparation',
      'Unit economics: Bale cost analysis vs retail piece price models',
      'Curating curated thrift and vintage bundles for online & offline retailers',
      'Digital inquiry management & cataloging for bulk buyers'
    ],
    idealFor: 'Commerce, Marketing, Retail Management students & aspiring thrift store entrepreneurs'
  },
  {
    id: 'upcycling',
    title: 'Upcycling & Zero-Waste Circular Economy',
    tag: 'Sustainability & ESG',
    duration: '4 to 6 Weeks',
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
    icon: Recycle,
    description:
      'Dive deep into circular economy solutions, industrial fabric repurposing, cotton wiping rag production, and zero-waste auditing.',
    modules: [
      'Textile waste segregation by composition (100% cotton, poly-blends)',
      'Industrial wiping cloth cutting specifications & grading',
      'Feasibility evaluation for artisan upcycling & craft repurposing',
      'Calculating textile landfill diversion metrics & sustainability reports'
    ],
    idealFor: 'Environmental Studies, Sustainable Design & Social Impact researchers'
  }
];

const FAQS = [
  {
    q: 'Who is eligible to apply for this internship?',
    a: 'Students currently enrolled in undergraduate, postgraduate, or diploma programs (Fashion Design, Textile Engineering, Commerce, Management, Logistics, Arts & Science), as well as recent graduates and young entrepreneurs interested in the textile and thrift industry.'
  },
  {
    q: 'Do I need prior experience in the textile or second-hand clothing industry?',
    a: 'No prior experience is necessary. Our floor supervisors and trade mentors provide foundational training, hands-on demonstrations, and continuous guidance throughout your tenure.'
  },
  {
    q: 'Will I receive an official Certificate and Letter of Recommendation?',
    a: 'Yes! Upon successful completion of your internship hours and project deliverables, you will receive an authorized Certificate of Internship and a personalized Letter of Recommendation (LOR) from S.K. Old Cloth Merchant.'
  },
  {
    q: 'Can this internship fulfill my college curriculum / academic credit requirements?',
    a: 'Yes. We provide official attendance logs, mid-term progress reports, and sign off on institutional internship evaluation forms/NOC required by universities.'
  },
  {
    q: 'What are the shift timings and batch schedules?',
    a: 'We offer flexible scheduling: Full-time (Monday to Friday, 10:00 AM – 5:30 PM), Part-time morning/afternoon batches, and Weekend immersion tracks for working professionals or busy students.'
  },
  {
    q: 'Where will the internship take place?',
    a: 'At our central operational warehouse located in Choolai, Chennai – 600112. It is a live commercial facility with active sorting, baling, and wholesale dispatching operations.'
  }
];

export default function Internship({ onOpenQuoteModal }) {
  const [activeTrack, setActiveTrack] = useState('grading');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institution: '',
    course: '',
    track: 'Sustainable Fashion & Garment Grading',
    duration: '4 Weeks',
    preferredShift: 'Full-time (Weekdays)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare prefilled WhatsApp application message
    const waText = `*New Internship Application - S.K. OLD CLOTH MERCHANT*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*College/Institution:* ${encodeURIComponent(formData.institution)}%0A*Course/Degree:* ${encodeURIComponent(formData.course)}%0A*Track:* ${encodeURIComponent(formData.track)}%0A*Duration:* ${encodeURIComponent(formData.duration)}%0A*Preferred Shift:* ${encodeURIComponent(formData.preferredShift)}%0A*Note:* ${encodeURIComponent(formData.message || 'Ready for interview/joining.')}`;

    // Mark as submitted locally
    setSubmitted(true);

    // Prompt user to send via WhatsApp for immediate confirmation
    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY.phoneRaw}?text=${waText}`, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const selectedTrackData = TRACKS.find((t) => t.id === activeTrack) || TRACKS[0];

  return (
    <div className="py-8 sm:py-12">
      {/* 1. Page Hero Banner */}
      <section className="bg-[#063B30] text-white py-14 sm:py-20 mb-12 sm:mb-16 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C98D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-700/10 rounded-full blur-2xl pointer-events-none" />

        <Container>
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#00C98D]/20 text-[#00C98D] border border-[#00C98D]/30 uppercase tracking-widest mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-[#00C98D]" />
              <span>ACADEMIC & FIELD TRAINING PROGRAM • CHENNAI</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#FAF8F5] leading-tight">
              Internship & Practical Training in Circular Textiles
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-light mb-8 max-w-2xl">
              Immerse yourself in real warehouse operations, fabric grading, bale machinery, and sustainable fashion merchandising at S.K. Old Cloth Merchant’s central facility in Choolai, Chennai.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <a
                href="#apply-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00C98D] hover:bg-[#00b07a] text-[#063B30] font-bold text-sm shadow-md transition-all duration-200 text-center"
              >
                <span>Apply for Internship</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => openWhatsApp({ type: 'internship' })}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all duration-200 cursor-pointer text-center"
              >
                <span>Ask on WhatsApp</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Key Highlights / Metrics */}
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 -mt-16 sm:-mt-22 mb-16 relative z-20">
          <div className="p-5 rounded-2xl bg-white border border-[#eee7da] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <div className="font-serif text-2xl font-bold text-[#0d2818]">4 Tracks</div>
            <div className="text-xs text-gray-600 font-medium mt-0.5">Specialized domain learning</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#eee7da] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <div className="font-serif text-2xl font-bold text-[#0d2818]">4–12 Weeks</div>
            <div className="text-xs text-gray-600 font-medium mt-0.5">Flexible project duration</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#eee7da] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <div className="font-serif text-2xl font-bold text-[#0d2818]">Cert & LOR</div>
            <div className="text-xs text-gray-600 font-medium mt-0.5">Authorized credentials</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#eee7da] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Building className="w-5 h-5" />
            </div>
            <div className="font-serif text-2xl font-bold text-[#0d2818]">Live Floor</div>
            <div className="text-xs text-gray-600 font-medium mt-0.5">Central Chennai warehouse</div>
          </div>
        </div>

        {/* 3. Program Advantages */}
        <div className="mb-20">
          <SectionTitle
            subtitle="PRACTICAL ADVANTAGE"
            title="Why Train with S.K. Old Cloth Merchant?"
            description="Bridge the gap between academic theory and practical textile commerce with real-world exposure to India's thriving circular fashion industry."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-[#faf8f4] border border-[#e8dfcf] space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#063B30] text-[#00C98D] flex items-center justify-center shadow-xs">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0d2818]">Practical Grading Expertise</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Learn how thousands of garments are sorted, graded, and categorized into premium men's, women's, and kids' selections every single day.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf8f4] border border-[#e8dfcf] space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#063B30] text-[#00C98D] flex items-center justify-center shadow-xs">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0d2818]">Bulk Logistics & Baling</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Operate alongside hydraulic press baling machines, inspect containerized shipments, and understand wholesale distribution channels across Tamil Nadu.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf8f4] border border-[#e8dfcf] space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#063B30] text-[#00C98D] flex items-center justify-center shadow-xs">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0d2818]">Entrepreneurial Launchpad</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Gain trade secrets on sourcing, unit pricing, thrift store curation, and resale margins to launch your own vintage or second-hand brand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf8f4] border border-[#e8dfcf] space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#063B30] text-[#00C98D] flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0d2818]">Accreditation & Mentorship</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct guidance from proprietors with 9+ years of industry tenure, plus verification documents for your college academic review boards.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Interactive Learning Tracks */}
        <div className="mb-20">
          <SectionTitle
            subtitle="CURATED PATHWAYS"
            title="Choose Your Internship Specialization Track"
            description="Select the domain that matches your academic goals and career aspirations."
            centered
          />

          {/* Track selector buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 mb-10">
            {TRACKS.map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => setActiveTrack(track.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                  activeTrack === track.id
                    ? 'bg-[#063B30] text-white shadow-sm border border-[#063B30]'
                    : 'bg-white text-gray-700 hover:bg-[#f4efe6] border border-[#e5ddcd]'
                }`}
              >
                <track.icon className={`w-4 h-4 ${activeTrack === track.id ? 'text-[#00C98D]' : 'text-gray-500'}`} />
                <span>{track.title}</span>
              </button>
            ))}
          </div>

          {/* Active Track Highlight Card */}
          <div className="bg-white rounded-3xl border border-[#e6decb] p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-2 ${selectedTrackData.badgeColor}`}>
                  {selectedTrackData.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d2818]">
                  {selectedTrackData.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0 text-xs font-semibold text-gray-500 bg-[#faf8f4] px-3.5 py-2 rounded-xl border border-gray-200">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>Duration: {selectedTrackData.duration}</span>
              </div>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed py-6">
              {selectedTrackData.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C98D]" />
                  <span>Key Practical Modules</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  {selectedTrackData.modules.map((mod, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fcfaf5] p-5 rounded-2xl border border-[#efe9dc] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B30] flex items-center gap-1.5">
                  <User className="w-4 h-4 text-emerald-700" />
                  <span>Ideal Academic Fit</span>
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {selectedTrackData.idealFor}
                </p>
                <div className="pt-2">
                  <a
                    href="#apply-form"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        track: selectedTrackData.title
                      }))
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063B30] hover:text-[#00C98D] transition-colors"
                  >
                    <span>Apply for this track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Four-Stage Learning Journey */}
        <div className="mb-20">
          <SectionTitle
            subtitle="STRUCTURED ROADMAP"
            title="The 4-Stage Internship Experience"
            description="Our step-by-step curriculum ensures each intern moves from foundational understanding to full operational confidence."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-white border border-[#eee7da] relative space-y-2">
              <span className="text-3xl font-serif font-black text-emerald-900/20">01</span>
              <h4 className="font-serif text-base font-bold text-[#0d2818]">Orientation & Safety</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Warehouse safety briefing, facility navigation, fabric fundamentals, and introduction to circular textile markets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#eee7da] relative space-y-2">
              <span className="text-3xl font-serif font-black text-emerald-900/20">02</span>
              <h4 className="font-serif text-base font-bold text-[#0d2818]">Hands-On Floor Practice</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Assisting senior sorters with garment classification, bale unbundling, fabric grading, and defect identification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#eee7da] relative space-y-2">
              <span className="text-3xl font-serif font-black text-emerald-900/20">03</span>
              <h4 className="font-serif text-base font-bold text-[#0d2818]">Logistics & Systems</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Shadowing wholesale client interactions, bale weight calibration, inventory management, and dispatch coordination.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#eee7da] relative space-y-2">
              <span className="text-3xl font-serif font-black text-emerald-900/20">04</span>
              <h4 className="font-serif text-base font-bold text-[#0d2818]">Project & Certification</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Submitting your practical logbook, supervisor assessment, and receiving your official Certificate and LOR.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Application Form Section */}
        <div id="apply-form" className="max-w-4xl mx-auto mb-20 scroll-mt-24">
          <div className="bg-[#063B30] text-white rounded-3xl p-6 sm:p-12 border border-[#00C98D]/30 shadow-xl relative overflow-hidden">
            <div className="max-w-xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00C98D]">
                ENROLL FOR NEXT BATCH
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mt-1 text-[#FAF8F5]">
                Apply for Internship Training
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/80 mt-2">
                Fill out the application form below. Our training coordinator will contact you within 24 hours to schedule an introductory call or warehouse visit.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/80 border border-[#00C98D]/40 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#00C98D]/20 text-[#00C98D] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Application Received!</h3>
                <p className="text-xs sm:text-sm text-emerald-200/90 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your application has been logged and forwarded via WhatsApp. Our team will review your profile and reach out shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#00C98D] hover:underline cursor-pointer"
                  >
                    Submit another application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-emerald-700/60 text-white placeholder-emerald-300/40 text-sm focus:outline-none focus:border-[#00C98D] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200 mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-emerald-700/60 text-white placeholder-emerald-300/40 text-sm focus:outline-none focus:border-[#00C98D] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="ramesh@college.edu"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-emerald-700/60 text-white placeholder-emerald-300/40 text-sm focus:outline-none focus:border-[#00C98D] transition-colors"
                    />
                  </div>

                  {/* College / Institution */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200 mb-1">
                      College / University / Organization *
                    </label>
                    <input
                      type="text"
                      name="institution"
                      required
                      placeholder="e.g. NIFT Chennai / Loyola College"
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-emerald-700/60 text-white placeholder-emerald-300/40 text-sm focus:outline-none focus:border-[#00C98D] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Preferred Track */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200 mb-1">
                      Specialization Track *
                    </label>
                    <select
                      name="track"
                      value={formData.track}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09261e] border border-emerald-700/60 text-white text-sm focus:outline-none focus:border-[#00C98D] transition-colors cursor-pointer"
                    >
                      {TRACKS.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200 mb-1">
                      Internship Duration *
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09261e] border border-emerald-700/60 text-white text-sm focus:outline-none focus:border-[#00C98D] transition-colors cursor-pointer"
                    >
                      <option value="4 Weeks">4 Weeks (1 Month - Intensive)</option>
                      <option value="8 Weeks">8 Weeks (2 Months - Standard)</option>
                      <option value="12 Weeks">12 Weeks (3 Months - Comprehensive)</option>
                    </select>
                  </div>

                  {/* Preferred Shift */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200 mb-1">
                      Preferred Mode *
                    </label>
                    <select
                      name="preferredShift"
                      value={formData.preferredShift}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09261e] border border-emerald-700/60 text-white text-sm focus:outline-none focus:border-[#00C98D] transition-colors cursor-pointer"
                    >
                      <option value="Full-time (Weekdays)">Full-time (Weekdays)</option>
                      <option value="Part-time (Morning Shift)">Part-time (Morning)</option>
                      <option value="Part-time (Afternoon Shift)">Part-time (Afternoon)</option>
                      <option value="Weekend Immersion">Weekend Immersion</option>
                    </select>
                  </div>
                </div>

                {/* Additional Note */}
                <div>
                  <label className="block text-xs font-medium text-emerald-200 mb-1">
                    Academic Background & Goals (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us about your field of study, semester, or what you hope to learn during this internship..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-emerald-700/60 text-white placeholder-emerald-300/40 text-sm focus:outline-none focus:border-[#00C98D] transition-colors"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#00C98D] hover:bg-[#00b07a] text-[#063B30] font-bold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit & Confirm on WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <span className="text-xs text-emerald-300/70">
                    Direct confirmation with coordinator • No application fee
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* 7. Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto mb-16">
          <SectionTitle
            subtitle="HAVE QUESTIONS?"
            title="Internship FAQs"
            description="Clear answers regarding our eligibility criteria, documentation, timings, and warehouse policies."
            centered
          />

          <div className="mt-8 space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#e5ddcc] bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#0d2818] focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-700 shrink-0 transition-transform duration-200 ${
                      faqOpen === idx ? 'rotate-180 text-emerald-900' : ''
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 8. Bottom Contact / Help Callout */}
        <div className="rounded-3xl bg-[#f4efe6] border border-[#e2d9c6] p-8 sm:p-10 text-center max-w-3xl mx-auto mb-12">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0d2818] mb-2">
            Have Questions About Academic Tie-ups or College Batches?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mb-6">
            We partner directly with fashion institutes, colleges, and university placement cells across Chennai and Tamil Nadu for cohort-based internships.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#063B30] text-white text-xs sm:text-sm font-semibold hover:bg-[#0c4a3d] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00C98D]" />
              <span>Call Us: {COMPANY.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => openWhatsApp({ type: 'internship' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-gray-800 border border-gray-300 text-xs sm:text-sm font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span>WhatsApp Coordinator</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
