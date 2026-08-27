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

function MinimalPreview() {
  return (
    <div className="h-full w-full bg-white p-6 text-slate-900">

      {/* HEADER */}

      <header>

        <h1 className="text-[16px] font-bold tracking-tight">
          Alex Morgan
        </h1>

        <p className="mt-1 text-[7px] text-slate-500">
          UX Designer
        </p>

        <div className="
          mt-3
          flex
          flex-wrap
          gap-x-3
          gap-y-1
          text-[5.5px]
          text-slate-400
        ">
          <span>alex@email.com</span>
          <span>New York</span>
          <span>linkedin.com/alex</span>
        </div>

        <div className="mt-4 h-px bg-slate-200" />

      </header>


      {/* SUMMARY */}

      <section className="mt-5">

        <SectionTitle>
          Profile
        </SectionTitle>

        <p className="
          text-[6px]
          leading-[1.6]
          text-slate-500
        ">
          Creative UX designer focused on creating intuitive,
          accessible, and user-centered digital experiences.
        </p>

      </section>


      {/* EXPERIENCE */}

      <section className="mt-5">

        <SectionTitle>
          Experience
        </SectionTitle>

        <div className="space-y-3">

          <div>

            <div className="flex justify-between gap-2">

              <div>
                <p className="text-[7px] font-bold">
                  UX Designer
                </p>

                <p className="mt-0.5 text-[6px] text-slate-500">
                  Creative Studio
                </p>
              </div>

              <span className="text-[5px] text-slate-400">
                2022 — Present
              </span>

            </div>

            <p className="
              mt-1
              text-[5.5px]
              leading-[1.5]
              text-slate-400
            ">
              Designed user interfaces and improved product
              usability through user research and testing.
            </p>

          </div>


          <div>

            <div className="flex justify-between gap-2">

              <div>
                <p className="text-[7px] font-bold">
                  UI Designer
                </p>

                <p className="mt-0.5 text-[6px] text-slate-500">
                  Design Agency
                </p>
              </div>

              <span className="text-[5px] text-slate-400">
                2020 — 2022
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* EDUCATION */}

      <section className="mt-5">

        <SectionTitle>
          Education
        </SectionTitle>

        <p className="text-[7px] font-bold">
          BS Interaction Design
        </p>

        <p className="mt-0.5 text-[6px] text-slate-500">
          Design Institute
        </p>

      </section>


      {/* PROJECT */}

      <section className="mt-5">

        <SectionTitle>
          Projects
        </SectionTitle>

        <p className="text-[7px] font-bold">
          Mobile Banking Experience
        </p>

        <p className="
          mt-1
          text-[5.5px]
          leading-[1.5]
          text-slate-500
        ">
          Redesigned a mobile banking experience to make
          financial tasks easier and more accessible.
        </p>

      </section>


      {/* SKILLS */}

      <section className="mt-5">

        <SectionTitle>
          Skills
        </SectionTitle>

        <div className="flex flex-wrap gap-1">

          {[
            "Figma",
            "UX Research",
            "Wireframing",
            "Prototyping",
          ].map((skill) => (
            <span
              key={skill}
              className="
                rounded
                border
                border-slate-200
                px-1.5
                py-1
                text-[5.5px]
                font-medium
                text-slate-500
              "
            >
              {skill}
            </span>
          ))}

        </div>

      </section>

    </div>
  )
}

export default MinimalPreview