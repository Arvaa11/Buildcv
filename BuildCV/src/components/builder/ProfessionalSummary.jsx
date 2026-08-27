function ProfessionalSummary({ formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value.slice(0, 500),
    }))
  }

  const summaryLength = formData.summary?.length || 0

  return (
    <section
      className="
        overflow-hidden
        rounded-buildcv-2xl
        border
        border-buildcv-border
        bg-buildcv-card
        shadow-buildcv-md
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          border-b
          border-buildcv-border
          px-5
          py-6
          sm:px-7
          sm:py-7
        "
      >
        <div className="flex items-start gap-4">

          {/* Icon */}

          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-buildcv-md
              border
              border-buildcv-indigo/20
              bg-buildcv-indigo/10
              text-buildcv-indigo-400
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9h8M8 13h8M8 17h5"
              />
            </svg>
          </div>

          {/* Heading */}

          <div className="min-w-0">

          
            <h2
              className="
                mt-1.5
                font-display
                text-2xl
                font-bold
                tracking-tight
                text-buildcv-text
                sm:text-3xl
              "
            >
              Professional Summary
            </h2>

            <p
              className="
                mt-2
                max-w-xl
                text-sm
                leading-6
                text-buildcv-text-secondary
              "
            >
              Introduce yourself with a concise summary that highlights
              your experience, strengths, and career direction.
            </p>

          </div>

        </div>
      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="p-5 sm:p-7">

        {/* Section heading */}

        <div className="mb-5">

          <div className="flex items-center gap-3">

            <h3
              className="
                text-sm
                font-bold
                text-buildcv-text
              "
            >
              About you
            </h3>

            <div className="h-px flex-1 bg-buildcv-border" />

            <span
              className="
                rounded-full
                bg-buildcv-background
                px-2.5
                py-1
                text-[10px]
                font-semibold
                text-buildcv-text-muted
              "
            >
              Recommended
            </span>

          </div>

          <p
            className="
              mt-1
              text-xs
              text-buildcv-text-muted
            "
          >
            Make a strong first impression with 2–4 sentences.
          </p>

        </div>


        {/* =====================================================
            TEXTAREA
        ====================================================== */}

        <div>

          <label
            htmlFor="summary"
            className="
              mb-2
              flex
              items-center
              justify-between
              text-sm
              font-semibold
              text-buildcv-text
            "
          >
            <span>
              Professional summary
            </span>

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-wide
                text-buildcv-text-muted
              "
            >
              {summaryLength}/500
            </span>
          </label>


          <textarea
            id="summary"
            name="summary"
            value={formData.summary || ""}
            onChange={handleChange}
            rows={9}
            maxLength={500}
            placeholder="e.g. Frontend Developer with experience building responsive and user-friendly web applications. Skilled in React, JavaScript, and modern UI development with a strong focus on performance and accessibility."
            className="
              min-h-[220px]
              w-full
              resize-y
              rounded-buildcv-lg
              border
              border-buildcv-border
              bg-buildcv-background
              px-4
              py-3.5
              text-sm
              font-medium
              leading-6
              text-buildcv-text
              outline-none
              transition-all
              duration-200
              placeholder:text-buildcv-text-muted
              hover:border-buildcv-border-strong
              focus:border-buildcv-indigo
              focus:bg-buildcv-navy-800
              focus:ring-4
              focus:ring-buildcv-indigo/10
            "
          />

          {/* Helper text */}

          <div className="mt-2 flex items-start justify-between gap-4">

            <p
              className="
                text-xs
                leading-5
                text-buildcv-text-muted
              "
            >
              Keep it concise. Focus on your strongest skills,
              experience, and what you can bring to the role.
            </p>

            <span
              className={`
                shrink-0
                text-xs
                font-semibold
                ${
                  summaryLength >= 450
                    ? "text-buildcv-indigo-400"
                    : "text-buildcv-text-muted"
                }
              `}
            >
              {summaryLength}/500
            </span>

          </div>

        </div>


        {/* =====================================================
            WRITING TIPS
        ====================================================== */}

        <div
          className="
            mt-7
            rounded-buildcv-lg
            border
            border-buildcv-indigo/15
            bg-buildcv-indigo-50
            px-4
            py-4
          "
        >

          <div className="flex items-start gap-3">

            {/* Tip icon */}

            <span
              className="
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-buildcv-indigo
                text-[10px]
                font-bold
                text-white
              "
            >
              ✦
            </span>


            <div className="min-w-0">

              <p
                className="
                  text-xs
                  font-bold
                  text-buildcv-text
                "
              >
                What makes a good summary?
              </p>

              <div
                className="
                  mt-2
                  grid
                  grid-cols-1
                  gap-2
                  sm:grid-cols-2
                "
              >

                {[
                  "Mention your professional role",
                  "Highlight your strongest skills",
                  "Show relevant experience",
                  "Keep it clear and specific",
                ].map((tip) => (
                  <div
                    key={tip}
                    className="flex items-start gap-2"
                  >

                    <span
                      className="
                        mt-1
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-buildcv-indigo-400
                      "
                    />

                    <span
                      className="
                        text-[11px]
                        leading-4
                        text-buildcv-text-secondary
                      "
                    >
                      {tip}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            EXAMPLE
        ====================================================== */}

        <div
          className="
            mt-5
            rounded-buildcv-lg
            border
            border-buildcv-border
            bg-buildcv-background
            px-4
            py-4
          "
        >

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-buildcv-text-muted
            "
          >
            Example
          </p>

          <p
            className="
              mt-2
              text-xs
              leading-5
              text-buildcv-text-secondary
            "
          >
            "Frontend Developer skilled in React and JavaScript with
            experience creating responsive web applications. Passionate
            about building accessible, high-performance interfaces and
            solving real-world problems through clean code."
          </p>

        </div>

      </div>
    </section>
  )
}

export default ProfessionalSummary