// function ExecutiveSectionTitle({ children }) {
//   return (
//     <div className="mb-2 flex items-center gap-2">
//       <h3 className="text-[6px] font-bold uppercase tracking-[0.18em] text-slate-800">
//         {children}
//       </h3>

//       <div className="h-px flex-1 bg-[#D4AF37]/40" />
//     </div>
//   )
// }

// function ExecutiveExperience({
//   title,
//   company,
//   date,
//   description,
// }) {
//   return (
//     <div className="grid grid-cols-[1fr_auto] gap-4">

//       <div className="min-w-0">

//         <h4 className="text-[7px] font-bold text-slate-900">
//           {title}
//         </h4>

//         <p className="mt-0.5 text-[5.5px] font-semibold text-[#B28B16]">
//           {company}
//         </p>

//         <p className="mt-1 text-[5.2px] leading-[1.55] text-slate-500">
//           {description}
//         </p>

//       </div>

//       <span className="whitespace-nowrap text-[4.8px] font-medium text-slate-400">
//         {date}
//       </span>

//     </div>
//   )
// }

// function ExecutiveProject({
//   name,
//   description,
// }) {
//   return (
//     <div className="border-l-2 border-[#D4AF37] pl-2.5">

//       <div className="flex items-center justify-between gap-3">

//         <h4 className="text-[6.5px] font-bold text-slate-900">
//           {name}
//         </h4>

//         <span className="text-[5px] font-medium text-[#B28B16]">
//           Featured
//         </span>

//       </div>

//       <p className="mt-1 text-[5.2px] leading-[1.5] text-slate-500">
//         {description}
//       </p>

//     </div>
//   )
// }

// function ExecutivePreview() {
//   return (
//     <div className="min-h-full w-full overflow-hidden bg-white text-slate-900">

//       {/* =====================================================
//           PREMIUM TOP BAR
//       ===================================================== */}

//       <div className="h-2 bg-[#111827]" />

//       <div className="h-0.5 bg-[#D4AF37]" />


//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <header className="px-7 pb-5 pt-6">

//         <div className="flex items-start justify-between gap-5">

//           <div className="min-w-0">

//             <p className="text-[4.8px] font-bold uppercase tracking-[0.25em] text-[#B28B16]">
//               Executive Resume
//             </p>

//             <h1 className="mt-2 text-[19px] font-extrabold tracking-[-0.02em] text-[#111827]">
//               Alex Morgan
//             </h1>

//             <p className="mt-1 text-[7px] font-medium text-slate-500">
//               Senior Product & Technology Manager
//             </p>

//           </div>


//           {/* Executive Photo */}

//           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-slate-100 text-[9px] font-bold text-[#111827]">
//             AM
//           </div>

//         </div>


//         {/* Contact */}

//         <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">

//           <span className="text-[4.8px] text-slate-500">
//             alex@email.com
//           </span>

//           <span className="text-[4.8px] text-slate-300">
//             •
//           </span>

//           <span className="text-[4.8px] text-slate-500">
//             +1 234 567 890
//           </span>

//           <span className="text-[4.8px] text-slate-300">
//             •
//           </span>

//           <span className="text-[4.8px] text-slate-500">
//             New York, USA
//           </span>

//           <span className="text-[4.8px] text-slate-300">
//             •
//           </span>

//           <span className="text-[4.8px] text-slate-500">
//             linkedin.com/alex
//           </span>

//         </div>

//       </header>


//       {/* =====================================================
//           EXECUTIVE SUMMARY STRIP
//       ===================================================== */}

//       <div className="mx-7 rounded-lg bg-[#111827] px-4 py-3 text-white">

//         <p className="text-[4.8px] font-bold uppercase tracking-[0.16em] text-[#D4AF37]">
//           Executive Profile
//         </p>

//         <p className="mt-1.5 text-[5.5px] leading-[1.6] text-white/70">
//           Technology leader with 8+ years of experience building
//           high-performing teams, delivering digital products, and
//           driving business growth through scalable technology
//           strategies and customer-focused innovation.
//         </p>

//       </div>


//       {/* =====================================================
//           MAIN CONTENT
//       ===================================================== */}

//       <main className="grid grid-cols-[1.55fr_0.75fr] gap-6 px-7 py-5">


//         {/* =================================================
//             LEFT COLUMN
//         ================================================= */}

//         <div className="min-w-0">


//           {/* Experience */}

//           <section>

//             <ExecutiveSectionTitle>
//               Professional Experience
//             </ExecutiveSectionTitle>

//             <div className="space-y-4">

//               <ExecutiveExperience
//                 title="Senior Product Manager"
//                 company="Tech Innovations Inc."
//                 date="2022 — Present"
//                 description="Led a cross-functional team of 18 engineers, designers, and product specialists while overseeing the delivery of multiple digital products serving more than 100K users."
//               />

//               <ExecutiveExperience
//                 title="Product Manager"
//                 company="Digital Solutions Ltd."
//                 date="2019 — 2022"
//                 description="Defined product strategy, managed roadmap priorities, and collaborated with engineering teams to launch scalable products that improved customer retention."
//               />

//               <ExecutiveExperience
//                 title="Software Engineer"
//                 company="Technology Group"
//                 date="2017 — 2019"
//                 description="Developed scalable web applications and contributed to architecture, performance optimization, and engineering best practices."
//               />

//             </div>

//           </section>


//           {/* Major Achievements */}

//           <section className="mt-5">

//             <ExecutiveSectionTitle>
//               Key Achievements
//             </ExecutiveSectionTitle>

//             <div className="space-y-2">

//               <div className="flex gap-2">

//                 <span className="mt-0.5 text-[6px] font-bold text-[#D4AF37]">
//                   01
//                 </span>

//                 <p className="text-[5.3px] leading-[1.55] text-slate-500">
//                   Increased product adoption by 42% through a
//                   redesigned onboarding experience.
//                 </p>

//               </div>

//               <div className="flex gap-2">

//                 <span className="mt-0.5 text-[6px] font-bold text-[#D4AF37]">
//                   02
//                 </span>

//                 <p className="text-[5.3px] leading-[1.55] text-slate-500">
//                   Reduced development cycle time by 30% through
//                   improved workflows and engineering processes.
//                 </p>

//               </div>

//               <div className="flex gap-2">

//                 <span className="mt-0.5 text-[6px] font-bold text-[#D4AF37]">
//                   03
//                 </span>

//                 <p className="text-[5.3px] leading-[1.55] text-slate-500">
//                   Successfully delivered multiple enterprise
//                   products within budget and planned timelines.
//                 </p>

//               </div>

//             </div>

//           </section>


//           {/* Projects */}

//           <section className="mt-5">

//             <ExecutiveSectionTitle>
//               Selected Projects
//             </ExecutiveSectionTitle>

//             <div className="space-y-3">

//               <ExecutiveProject
//                 name="Enterprise Analytics Platform"
//                 description="Led product strategy and delivery for a business analytics platform used by enterprise teams."
//               />

//               <ExecutiveProject
//                 name="Digital Transformation Program"
//                 description="Managed the modernization of legacy workflows into scalable cloud-based systems."
//               />

//             </div>

//           </section>

//         </div>


//         {/* =================================================
//             RIGHT COLUMN
//         ================================================= */}

//         <aside className="min-w-0">


//           {/* Core Expertise */}

//           <section>

//             <ExecutiveSectionTitle>
//               Core Expertise
//             </ExecutiveSectionTitle>

//             <div className="space-y-1.5">

//               {[
//                 "Product Strategy",
//                 "Team Leadership",
//                 "Digital Transformation",
//                 "Project Management",
//                 "Technology Strategy",
//                 "Business Development",
//               ].map((item) => (

//                 <div
//                   key={item}
//                   className="
//                     rounded
//                     bg-slate-50
//                     px-2
//                     py-1.5
//                     text-[5px]
//                     font-medium
//                     text-slate-600
//                   "
//                 >
//                   {item}
//                 </div>

//               ))}

//             </div>

//           </section>


//           {/* Education */}

//           <section className="mt-5">

//             <ExecutiveSectionTitle>
//               Education
//             </ExecutiveSectionTitle>

//             <p className="text-[6.5px] font-bold text-slate-900">
//               MBA — Technology Management
//             </p>

//             <p className="mt-0.5 text-[5px] text-slate-500">
//               University of Technology
//             </p>

//             <p className="mt-1 text-[4.8px] text-slate-400">
//               2015 — 2017
//             </p>

//           </section>


//           {/* Certifications */}

//           <section className="mt-5">

//             <ExecutiveSectionTitle>
//               Certifications
//             </ExecutiveSectionTitle>

//             <div className="space-y-2">

//               <div>

//                 <p className="text-[5.5px] font-semibold text-slate-700">
//                   PMP Certification
//                 </p>

//                 <p className="mt-0.5 text-[4.8px] text-slate-400">
//                   Project Management Institute
//                 </p>

//               </div>

//               <div>

//                 <p className="text-[5.5px] font-semibold text-slate-700">
//                   AWS Solutions Architect
//                 </p>

//                 <p className="mt-0.5 text-[4.8px] text-slate-400">
//                   Amazon Web Services
//                 </p>

//               </div>

//             </div>

//           </section>


//           {/* Languages */}

//           <section className="mt-5">

//             <ExecutiveSectionTitle>
//               Languages
//             </ExecutiveSectionTitle>

//             <div className="space-y-1.5">

//               <div className="flex justify-between">
//                 <span className="text-[5px] text-slate-600">
//                   English
//                 </span>

//                 <span className="text-[4.5px] text-slate-400">
//                   Fluent
//                 </span>
//               </div>

//               <div className="flex justify-between">
//                 <span className="text-[5px] text-slate-600">
//                   Urdu
//                 </span>

//                 <span className="text-[4.5px] text-slate-400">
//                   Native
//                 </span>
//               </div>

//             </div>

//           </section>

//         </aside>

//       </main>


//       {/* =====================================================
//           FOOTER
//       ===================================================== */}

//       <footer className="border-t border-slate-100 px-7 py-2">

//         <div className="flex items-center justify-between">

//           <span className="text-[4px] uppercase tracking-[0.15em] text-slate-300">
//             Alex Morgan
//           </span>

//           <span className="text-[4px] text-slate-300">
//             Senior Product & Technology Manager
//           </span>

//         </div>

//       </footer>

//     </div>
//   )
// }

// export default ExecutivePreview