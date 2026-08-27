function ModernPreview() {
  return (
    <div className="h-full w-full bg-white p-5 text-slate-900">

      {/* HEADER */}
      <div className="flex items-start justify-between gap-3">

        <div>
          <h2 className="text-[15px] font-extrabold tracking-tight">
            Alex Morgan
          </h2>

          <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.12em] text-buildcv-violet">
            Frontend Developer
          </p>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-buildcv-violet-50 text-[8px] font-bold text-buildcv-violet">
          AM
        </div>

      </div>

      {/* CONTACT */}
      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5.5px] text-slate-500">
        <span>alex@email.com</span>
        <span>+1 234 567</span>
        <span>New York</span>
        <span>linkedin.com/alex</span>
      </div>

      <div className="my-3 h-px bg-slate-200" />

      {/* PROFILE */}
      <PreviewSectionTitle>
        Profile
      </PreviewSectionTitle>

      <p className="mt-1.5 text-[6.5px] leading-[1.5] text-slate-500">
        Frontend developer passionate about creating responsive
        and user-friendly web experiences.
      </p>

      {/* EXPERIENCE */}
      <div className="mt-4">

        <PreviewSectionTitle>
          Experience
        </PreviewSectionTitle>

        <div className="mt-2 space-y-3">

          <div>
            <div className="flex justify-between">
              <div>
                <p className="text-[7px] font-bold">
                  Frontend Developer
                </p>

                <p className="text-[5.5px] text-buildcv-violet">
                  Tech Company
                </p>
              </div>

              <p className="text-[5px] text-slate-400">
                2023 — Present
              </p>
            </div>

            <p className="mt-1 text-[5.5px] leading-[1.5] text-slate-500">
              Developed responsive interfaces and reusable React
              components for modern web applications.
            </p>
          </div>

          <div>
            <div className="flex justify-between">
              <div>
                <p className="text-[7px] font-bold">
                  Web Developer
                </p>

                <p className="text-[5.5px] text-buildcv-violet">
                  Creative Studio
                </p>
              </div>

              <p className="text-[5px] text-slate-400">
                2021 — 2023
              </p>
            </div>

            <p className="mt-1 text-[5.5px] leading-[1.5] text-slate-500">
              Built interactive websites using JavaScript, CSS,
              and modern frontend technologies.
            </p>
          </div>

        </div>
      </div>

      {/* EDUCATION */}
      <div className="mt-4">

        <PreviewSectionTitle>
          Education
        </PreviewSectionTitle>

        <div className="mt-2">

          <p className="text-[7px] font-bold">
            BS Computer Science
          </p>

          <p className="mt-0.5 text-[6px] text-slate-500">
            University of Technology
          </p>

          <p className="mt-0.5 text-[5px] text-slate-400">
            2019 — 2023
          </p>

        </div>
      </div>

      {/* PROJECTS */}
      <div className="mt-4">

        <PreviewSectionTitle>
          Projects
        </PreviewSectionTitle>

        <div className="mt-2">

          <p className="text-[7px] font-bold">
            Portfolio Website
          </p>

          <p className="mt-0.5 text-[6px] text-buildcv-violet">
            React • Tailwind CSS • JavaScript
          </p>

          <p className="mt-1 text-[5.5px] leading-[1.5] text-slate-500">
            Designed and developed a responsive portfolio website
            with animations and interactive components.
          </p>

        </div>
      </div>

      {/* SKILLS */}
      <div className="mt-4">

        <PreviewSectionTitle>
          Skills
        </PreviewSectionTitle>

        <div className="mt-2 flex flex-wrap gap-1">

          {[
            "React",
            "JavaScript",
            "TypeScript",
            "Git",
            "CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="
                rounded
                bg-buildcv-violet-50
                px-1.5
                py-1
                text-[5.5px]
                font-semibold
                text-buildcv-violet-600
              "
            >
              {skill}
            </span>
          ))}

        </div>
      </div>

    </div>
  )
}

function PreviewSectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h3 className="text-[6.5px] font-bold uppercase tracking-[0.12em] text-slate-900">
        {children}
      </h3>

      <div className="h-px flex-1 bg-slate-200" />

    </div>
  )
}

export default ModernPreview