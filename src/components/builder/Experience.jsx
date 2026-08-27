import { useEffect, useState } from "react"

function Experience({ formData, setFormData }) {
  const [experiences, setExperiences] = useState(
    formData.experience || []
  )

  // =====================================================
  // SYNC WITH BUILDER
  // =====================================================

  useEffect(() => {
    setExperiences(formData.experience || [])
  }, [formData.experience])

  // =====================================================
  // UPDATE PARENT FORM DATA
  // =====================================================

  const updateFormData = (updatedExperiences) => {
    setExperiences(updatedExperiences)

    setFormData((previous) => ({
      ...previous,
      experience: updatedExperiences,
    }))
  }

  // =====================================================
  // ADD EXPERIENCE
  // =====================================================

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }

    updateFormData([
      ...experiences,
      newExperience,
    ])
  }

  // =====================================================
  // REMOVE EXPERIENCE
  // =====================================================

  const removeExperience = (id) => {
    const updatedExperiences = experiences.filter(
      (experience) => experience.id !== id
    )

    updateFormData(updatedExperiences)
  }

  // =====================================================
  // UPDATE EXPERIENCE
  // =====================================================

  const updateExperience = (id, field, value) => {
    const updatedExperiences = experiences.map(
      (experience) =>
        experience.id === id
          ? {
            ...experience,
            [field]: value,

            // Clear end date when current job is selected
            ...(field === "current" && value
              ? { endDate: "" }
              : {}),
          }
          : experience
    )

    updateFormData(updatedExperiences)
  }

  // =====================================================
  // INPUT STYLES
  // =====================================================

  const inputClass = `
    w-full
    rounded-buildcv-lg
    border
    border-buildcv-border
    bg-buildcv-background
    px-4
    py-3
    text-sm
    font-medium
    text-buildcv-text
    outline-none
    transition-all
    duration-200
    placeholder:text-buildcv-text-muted
    hover:border-buildcv-border-strong
    focus:border-buildcv-indigo
    focus:bg-buildcv-navy
    focus:ring-4
    focus:ring-buildcv-indigo/10
  `


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
              text-buildcv-indigo
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7h-3V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 7h10M9 12h6"
              />
            </svg>
          </div>

          {/* Text */}

          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.14em]
                text-buildcv-indigo
              "
            >
              Step 03
            </p>

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
              Work experience
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
              Add your previous roles and highlight the experience,
              responsibilities, and achievements that matter most.
            </p>
          </div>

        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="p-5 sm:p-7">

        {/* =====================================================
            EXPERIENCE LIST
        ====================================================== */}

        <div className="space-y-6">

          {experiences.map((experience, index) => (

            <article
              key={experience.id}
              className="
               rounded-buildcv-xl
                border
                border-buildcv-border
                bg-buildcv-background
                p-5
                transition-colors
                duration-200
                hover:border-buildcv-border-strong
                sm:p-6
              "
            >

              {/* =================================================
                  ENTRY HEADER
              ================================================= */}

              <div
                className="
                  mb-6
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >

                <div className="min-w-0">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-buildcv-indigo
                    "
                  >
                    Experience {index + 1}
                  </p>

                  <h3
                    className="
                      mt-1
                      truncate
                      font-display
                      text-lg
                      font-bold
                      text-buildcv-primary
                    "
                  >
                    {experience.jobTitle || "New position"}
                  </h3>

                  {experience.company && (
                    <p className="mt-1 text-xs text-buildcv-text-secondary">
                      {experience.company}
                    </p>
                  )}

                </div>

                <button
                  type="button"
                  onClick={() =>
                    removeExperience(experience.id)
                  }
                  className="
                    shrink-0
                    rounded-buildcv-md
                    border
                    border-red-400/10
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-red-400
                    transition-all
                    duration-200
                    hover:border-red-400/20
                    hover:bg-red-400/10
                  "
                >
                  Remove
                </button>

              </div>

              {/* =================================================
                  FIELDS
              ================================================= */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* JOB TITLE */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor={`jobTitle-${experience.id}`}
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-buildcv-text
                    "
                  >
                    Job title
                  </label>

                  <input
                    id={`jobTitle-${experience.id}`}
                    type="text"
                    value={experience.jobTitle}
                    onChange={(event) =>
                      updateExperience(
                        experience.id,
                        "jobTitle",
                        event.target.value
                      )
                    }
                    placeholder="e.g. Frontend Developer"
                    autoComplete="organization-title"
                    className={inputClass}
                  />

                </div>

                {/* COMPANY */}

                <div>

                  <label
                    htmlFor={`company-${experience.id}`}
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-buildcv-text
                    "
                  >
                    Company
                  </label>

                  <input
                    id={`company-${experience.id}`}
                    type="text"
                    value={experience.company}
                    onChange={(event) =>
                      updateExperience(
                        experience.id,
                        "company",
                        event.target.value
                      )
                    }
                    placeholder="e.g. Google"
                    autoComplete="organization"
                    className={inputClass}
                  />

                </div>

                {/* LOCATION */}

                <div>

                  <label
                    htmlFor={`experience-location-${experience.id}`}
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-buildcv-text
                    "
                  >
                    Location
                  </label>

                  <input
                    id={`experience-location-${experience.id}`}
                    type="text"
                    value={experience.location}
                    onChange={(event) =>
                      updateExperience(
                        experience.id,
                        "location",
                        event.target.value
                      )
                    }
                    placeholder="e.g. Islamabad, Pakistan"
                    autoComplete="address-level2"
                    className={inputClass}
                  />

                </div>

                {/* START DATE */}

                <div>

                  <label
                    htmlFor={`experience-start-${experience.id}`}
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-buildcv-text
                    "
                  >
                    Start date
                  </label>

                  <input
                    id={`experience-start-${experience.id}`}
                    type="month"
                    value={experience.startDate}
                    onChange={(event) =>
                      updateExperience(
                        experience.id,
                        "startDate",
                        event.target.value
                      )
                    }
                    className={inputClass}
                  />

                </div>

                {/* END DATE */}

                <div>

                  <label
                    htmlFor={`experience-end-${experience.id}`}
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-buildcv-text
                    "
                  >
                    End date
                  </label>

                  <input
                    id={`experience-end-${experience.id}`}
                    type="month"
                    value={experience.endDate}
                    disabled={experience.current}
                    onChange={(event) =>
                      updateExperience(
                        experience.id,
                        "endDate",
                        event.target.value
                      )
                    }
                    className={inputClass}
                  />

                </div>

                {/* CURRENT JOB */}

                <div className="sm:col-span-2">

                  <label
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                      rounded-buildcv-lg
                      border
                      border-buildcv-border
                      bg-buildcv-navy-800
                      px-4
                      py-3
                      transition-colors
                      hover:border-buildcv-indigo/40
                    "
                  >

                    <input
                      type="checkbox"
                      checked={experience.current}
                      onChange={(event) =>
                        updateExperience(
                          experience.id,
                          "current",
                          event.target.checked
                        )
                      }
                      className="
                        h-4
                        w-4
                        rounded
                        border-buildcv-border
                        accent-buildcv-indigo
                      "
                    />

                    <span
                      className="
                        text-sm
                        font-medium
                        text-buildcv-text-secondary
                      "
                    >
                      I currently work here
                    </span>

                  </label>

                </div>

                {/* DESCRIPTION */}

                <div className="sm:col-span-2">

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor={`experience-description-${experience.id}`}
                      className="
                        text-sm
                        font-semibold
                        text-buildcv-text
                      "
                    >
                      Description
                    </label>

                    <span className="text-[10px] text-buildcv-text-muted">
                      Optional
                    </span>

                  </div>

                  <textarea
                    id={`experience-description-${experience.id}`}
                    rows={6}
                    value={experience.description}
                    maxLength={1000}
                    onChange={(event) =>
                      updateExperience(
                        experience.id,
                        "description",
                        event.target.value
                      )
                    }
                    placeholder="Describe your responsibilities, achievements, and impact..."
                    className={`
                      ${inputClass}
                      resize-none
                      leading-6
                    `}
                  />

                  <div className="mt-2 flex items-center justify-between">

                    <p className="text-xs text-buildcv-text-muted">
                      Focus on achievements rather than simply listing duties.
                    </p>

                    <span className="text-[10px] text-buildcv-text-muted">
                      {experience.description?.length || 0}/1000
                    </span>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}

        {experiences.length === 0 && (

          <div
            className="
              rounded-buildcv-xl
              border
              border-dashed
              border-buildcv-border
              bg-buildcv-background
              px-6
              py-12
              text-center
            "
          >

            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-buildcv-indigo/5
                bg-buildcv-indigo/10
                text-lg
                font-bold
                text-buildcv-indigo
              "
            >
              +
            </div>

            <h3
              className="
                mt-4
                font-display
                text-lg
                font-bold
                text-buildcv-primary
              "
            >
              Add your work experience
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-buildcv-text-secondary
              "
            >
              Add your current or previous positions to show
              employers what you have accomplished.
            </p>

          </div>

        )}

        {/* =====================================================
            ADD EXPERIENCE BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={addExperience}
          className="
           mt-6
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-buildcv-lg
            border
            border-dashed
            border-buildcv-indigo/30
            bg-buildcv-indigo/5
            px-5
            py-3.5
            text-sm
            font-semibold
            text-buildcv-indigo
            transition-all
            duration-200
            hover:border-buildcv-indigo/50
            hover:bg-buildcv-indigo/10
          "
        >
          <span className="text-lg leading-none">
            +
          </span>

          Add another experience
        </button>

      </div>
    </section>
  )
}

export default Experience