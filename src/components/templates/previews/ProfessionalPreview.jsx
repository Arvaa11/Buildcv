function SectionTitle({ children }) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <h3 className="text-[7px] font-bold uppercase tracking-[0.12em] text-[#111827]">
        {children}
      </h3>

      <div className="h-px flex-1 bg-slate-200" />
    </div>
  )
}

function ProfessionalPreview() {
  return (
    <div className="flex h-full w-full bg-white text-slate-900">

      {/* SIDEBAR */}

      <aside className="w-[30%] shrink-0 bg-[#111827] p-4 text-white">

        {/* PHOTO */}

        <div className="
          mx-auto
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-[#D4AF37]
          bg-white/10
          text-[9px]
          font-bold
          text-[#D4AF37]
        ">
          AM
        </div>


        <div className="mt-4 text-center">

          <h2 className="text-[9px] font-bold">
            Alex Morgan
          </h2>

          <p className="mt-1 text-[5.5px] text-[#D4AF37]">
            Product Manager
          </p>

        </div>


        {/* CONTACT */}

        <div className="mt-6">

          <p className="
            text-[6px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[#D4AF37]
          ">
            Contact
          </p>

          <div className="mt-2 space-y-2 text-[5.5px] text-white/60">

            <p>alex@email.com</p>
            <p>+1 234 567</p>
            <p>New York, USA</p>
            <p>linkedin.com/alex</p>

          </div>

        </div>


        {/* SKILLS */}

        <div className="mt-6">

          <p className="
            text-[6px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[#D4AF37]
          ">
            Skills
          </p>

          <div className="mt-2 space-y-1.5">

            {[
              "Leadership",
              "Strategy",
              "Project Management",
              "Communication",
            ].map((skill) => (
              <div
                key={skill}
                className="
                  rounded
                  bg-white/5
                  px-2
                  py-1.5
                  text-[5.5px]
                  text-white/70
                "
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </aside>


      {/* MAIN */}

      <main className="min-w-0 flex-1 p-5">

        <div className="border-b border-slate-200 pb-3">

          <p className="
            text-[6px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#D4AF37]
          ">
            Professional Resume
          </p>

          <h1 className="mt-1.5 text-[15px] font-extrabold">
            Alex Morgan
          </h1>

          <p className="mt-1 text-[7px] text-slate-500">
            Product Manager
          </p>

        </div>


        {/* SUMMARY */}

        <section className="mt-4">

          <SectionTitle>
            Professional Summary
          </SectionTitle>

          <p className="
            text-[6px]
            leading-[1.5]
            text-slate-500
          ">
            Experienced product manager with a strong background
            in strategy, team leadership, and digital products.
          </p>

        </section>


        {/* EXPERIENCE */}

        <section className="mt-4">

          <SectionTitle>
            Experience
          </SectionTitle>

          <div className="space-y-3">

            <div>

              <div className="flex justify-between gap-2">

                <div>
                  <p className="text-[7px] font-bold">
                    Product Manager
                  </p>

                  <p className="mt-0.5 text-[6px] text-[#D4AF37]">
                    Innovation Labs
                  </p>
                </div>

                <span className="text-[5px] text-slate-400">
                  2022 — Present
                </span>

              </div>

              <div className="mt-1.5 space-y-1">

                <div className="h-1 w-full rounded bg-slate-200" />
                <div className="h-1 w-11/12 rounded bg-slate-200" />

              </div>

            </div>


            <div>

              <div className="flex justify-between gap-2">

                <div>
                  <p className="text-[7px] font-bold">
                    Business Analyst
                  </p>

                  <p className="mt-0.5 text-[6px] text-[#D4AF37]">
                    Digital Solutions
                  </p>
                </div>

                <span className="text-[5px] text-slate-400">
                  2020 — 2022
                </span>

              </div>

              <div className="mt-1.5 space-y-1">

                <div className="h-1 w-full rounded bg-slate-200" />
                <div className="h-1 w-10/12 rounded bg-slate-200" />

              </div>

            </div>

          </div>

        </section>


        {/* EDUCATION */}

        <section className="mt-4">

          <SectionTitle>
            Education
          </SectionTitle>

          <p className="text-[7px] font-bold">
            MBA — Business Administration
          </p>

          <p className="mt-0.5 text-[6px] text-slate-500">
            Business University
          </p>

        </section>


        {/* PROJECTS */}

        <section className="mt-4">

          <SectionTitle>
            Projects
          </SectionTitle>

          <p className="text-[7px] font-bold">
            Digital Transformation Strategy
          </p>

          <p className="mt-1 text-[5.5px] leading-[1.5] text-slate-500">
            Developed a digital strategy that improved workflow
            efficiency and customer experience.
          </p>

        </section>

      </main>

    </div>
  )
}

export default ProfessionalPreview