// function CreativeSectionTitle({ children }) {
//   return (
//     <div className="mb-2 flex items-center gap-2">
//       <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />

//       <h3 className="text-[6px] font-bold uppercase tracking-[0.16em] text-slate-800">
//         {children}
//       </h3>

//       <div className="h-px flex-1 bg-buildcv-violet/20" />
//     </div>
//   )
// }

// function CreativeExperience({
//   title,
//   company,
//   date,
// }) {
//   return (
//     <div className="relative pl-3">

//       {/* Timeline */}

//       <div className="absolute left-0 top-1.5 h-full w-px bg-buildcv-violet/20" />

//       <div className="absolute -left-[2px] top-1 h-1 w-1 rounded-full bg-buildcv-violet" />

//       <div className="flex items-start justify-between gap-2">

//         <div className="min-w-0">

//           <p className="text-[7px] font-bold text-slate-900">
//             {title}
//           </p>

//           <p className="mt-0.5 text-[5.5px] font-semibold text-buildcv-violet">
//             {company}
//           </p>

//         </div>

//         <span className="shrink-0 rounded-full bg-buildcv-violet-50 px-1.5 py-0.5 text-[4.5px] font-semibold text-buildcv-violet">
//           {date}
//         </span>

//       </div>

//       <p className="mt-1 text-[5.2px] leading-[1.55] text-slate-500">
//         Created responsive interfaces, improved user experiences,
//         and collaborated with cross-functional teams to deliver
//         polished digital products.
//       </p>

//     </div>
//   )
// }

// function CreativeProject({
//   name,
//   technologies,
// }) {
//   return (
//     <div
//       className="
//         rounded-lg
//         border
//         border-buildcv-violet/10
//         bg-buildcv-violet-50/40
//         p-2
//       "
//     >

//       <div className="flex items-start justify-between gap-2">

//         <div className="min-w-0">

//           <p className="text-[7px] font-bold text-slate-900">
//             {name}
//           </p>

//           <p className="mt-0.5 text-[5px] font-medium text-buildcv-violet">
//             {technologies}
//           </p>

//         </div>

//         <span className="text-[6px] text-buildcv-violet">
//           ↗
//         </span>

//       </div>

//       <p className="mt-1 text-[5px] leading-[1.5] text-slate-500">
//         Designed and developed a modern digital experience with
//         a strong focus on usability, interaction, and performance.
//       </p>

//     </div>
//   )
// }

// function CreativePreview() {
//   return (
//     <div className="min-h-full w-full overflow-hidden bg-white text-slate-900">

//       {/* =====================================================
//           DECORATIVE TOP
//       ===================================================== */}

//       <div className="relative h-2 bg-buildcv-violet">

//         <div className="absolute right-6 top-0 h-8 w-8 -translate-y-1/2 rounded-full bg-buildcv-indigo opacity-30" />

//       </div>


//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <header className="px-6 pb-5 pt-6">

//         <div className="flex items-start justify-between gap-4">

//           <div className="min-w-0">

//             <div className="inline-flex items-center gap-1.5 rounded-full bg-buildcv-violet-50 px-2 py-1">

//               <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />

//               <span className="text-[4.5px] font-bold uppercase tracking-[0.12em] text-buildcv-violet">
//                 Creative Professional
//               </span>

//             </div>

//             <h1 className="mt-2 text-[18px] font-extrabold tracking-tight text-slate-900">
//               Alex Morgan
//             </h1>

//             <p className="mt-1 text-[7px] font-medium text-slate-500">
//               UI/UX Designer & Frontend Developer
//             </p>

//           </div>


//           {/* Profile */}

//           <div className="relative shrink-0">

//             <div className="absolute -inset-1 rounded-xl bg-buildcv-violet/10" />

//             <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[9px] font-bold text-buildcv-violet">
//               AM
//             </div>

//           </div>

//         </div>


//         {/* Contact */}

//         <div className="mt-4 flex flex-wrap gap-1.5">

//           {[
//             "alex@email.com",
//             "+1 234 567 890",
//             "New York",
//             "linkedin.com/alex",
//           ].map((item) => (

//             <span
//               key={item}
//               className="
//                 rounded-full
//                 bg-slate-50
//                 px-2
//                 py-1
//                 text-[4.7px]
//                 text-slate-500
//               "
//             >
//               {item}
//             </span>

//           ))}

//         </div>

//       </header>


//       {/* =====================================================
//           MAIN CONTENT
//       ===================================================== */}

//       <main className="grid grid-cols-[1.45fr_0.8fr] gap-5 px-6 pb-7">


//         {/* =================================================
//             LEFT COLUMN
//         ================================================= */}

//         <div className="min-w-0">

//           {/* About */}

//           <section>

//             <CreativeSectionTitle>
//               About Me
//             </CreativeSectionTitle>

//             <p className="text-[5.7px] leading-[1.65] text-slate-500">
//               Creative developer focused on turning ideas into
//               engaging digital experiences. I combine thoughtful
//               design with clean, scalable frontend development.
//             </p>

//           </section>


//           {/* Experience */}

//           <section className="mt-5">

//             <CreativeSectionTitle>
//               Experience
//             </CreativeSectionTitle>

//             <div className="space-y-4">

//               <CreativeExperience
//                 title="Frontend Developer"
//                 company="Digital Studio"
//                 date="2023 — Present"
//               />

//               <CreativeExperience
//                 title="UI/UX Designer"
//                 company="Creative Agency"
//                 date="2021 — 2023"
//               />

//               <CreativeExperience
//                 title="Junior Web Designer"
//                 company="Design Lab"
//                 date="2020 — 2021"
//               />

//             </div>

//           </section>


//           {/* Projects */}

//           <section className="mt-5">

//             <CreativeSectionTitle>
//               Featured Projects
//             </CreativeSectionTitle>

//             <div className="space-y-2">

//               <CreativeProject
//                 name="Creative Portfolio"
//                 technologies="React • GSAP • Tailwind"
//               />

//               <CreativeProject
//                 name="E-Commerce Experience"
//                 technologies="Next.js • TypeScript"
//               />

//             </div>

//           </section>

//         </div>


//         {/* =================================================
//             RIGHT COLUMN
//         ================================================= */}

//         <aside className="min-w-0">

//           {/* Skills */}

//           <section>

//             <CreativeSectionTitle>
//               Skills
//             </CreativeSectionTitle>

//             <div className="space-y-2">

//               {[
//                 "UI / UX Design",
//                 "React",
//                 "JavaScript",
//                 "TypeScript",
//                 "Figma",
//                 "GSAP",
//                 "Tailwind CSS",
//               ].map((skill, index) => (

//                 <div key={skill}>

//                   <div className="flex items-center justify-between">

//                     <span className="text-[5px] font-medium text-slate-600">
//                       {skill}
//                     </span>

//                     <span className="text-[4px] text-slate-400">
//                       {index < 3 ? "Expert" : "Advanced"}
//                     </span>

//                   </div>

//                   <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-100">

//                     <div
//                       className="h-full rounded-full bg-buildcv-violet"
//                       style={{
//                         width:
//                           index < 3
//                             ? "90%"
//                             : "75%",
//                       }}
//                     />

//                   </div>

//                 </div>

//               ))}

//             </div>

//           </section>


//           {/* Education */}

//           <section className="mt-5">

//             <CreativeSectionTitle>
//               Education
//             </CreativeSectionTitle>

//             <p className="text-[6.5px] font-bold text-slate-800">
//               BS Computer Science
//             </p>

//             <p className="mt-0.5 text-[5px] text-slate-500">
//               University of Technology
//             </p>

//             <span className="mt-1 inline-block rounded-full bg-buildcv-violet-50 px-1.5 py-0.5 text-[4px] font-medium text-buildcv-violet">
//               2017 — 2021
//             </span>

//           </section>


//           {/* Languages */}

//           <section className="mt-5">

//             <CreativeSectionTitle>
//               Languages
//             </CreativeSectionTitle>

//             <div className="space-y-1.5">

//               <div className="flex items-center justify-between">
//                 <span className="text-[5px] text-slate-600">
//                   English
//                 </span>

//                 <span className="text-[4.5px] text-slate-400">
//                   Fluent
//                 </span>
//               </div>

//               <div className="flex items-center justify-between">
//                 <span className="text-[5px] text-slate-600">
//                   Urdu
//                 </span>

//                 <span className="text-[4.5px] text-slate-400">
//                   Native
//                 </span>
//               </div>

//             </div>

//           </section>


//           {/* Interests */}

//           <section className="mt-5">

//             <CreativeSectionTitle>
//               Interests
//             </CreativeSectionTitle>

//             <div className="flex flex-wrap gap-1">

//               {[
//                 "Design",
//                 "Photography",
//                 "Travel",
//                 "Technology",
//               ].map((interest) => (

//                 <span
//                   key={interest}
//                   className="
//                     rounded-full
//                     border
//                     border-slate-200
//                     px-1.5
//                     py-1
//                     text-[4.5px]
//                     text-slate-500
//                   "
//                 >
//                   {interest}
//                 </span>

//               ))}

//             </div>

//           </section>

//         </aside>

//       </main>


//       {/* =====================================================
//           FOOTER
//       ===================================================== */}

//       <footer className="border-t border-slate-100 px-6 py-2">

//         <div className="flex items-center justify-between">

//           <span className="text-[4px] font-medium uppercase tracking-[0.15em] text-slate-300">
//             Alex Morgan
//           </span>

//           <span className="text-[4px] text-slate-300">
//             alex@email.com
//           </span>

//         </div>

//       </footer>

//     </div>
//   )
// }

// export default CreativePreview