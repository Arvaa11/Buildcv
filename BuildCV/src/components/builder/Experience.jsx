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

    updateFormData([...experiences, newExperience])
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
    const updatedExperiences = experiences.map((experience) =>
      experience.id === id
        ? {
            ...experience,
            [field]: value,

            ...(field === "current" && value
              ? { endDate: "" }
              : {}),
          }
        : experience
    )

    updateFormData(updatedExperiences)
  }

  // =====================================================
  // SHARED INPUT STYLE
  // =====================================================

  const inputClass = `
    w-full
    rounded-lg
    border
    border-[#E2E8F0]
    bg-white
    px-4
    py-3
    text-sm
    font-medium
    text-[#111827]
    outline-none
    transition-all
    duration-200
    placeholder:text-[#718096]
    hover:border-[#CBD5E1]
    focus:border-[#6366F1]
    focus:ring-4
    focus:ring-[#6366F1]/10
  `

  return (
    <section
      className="
        flex
        h-[calc(100vh-190px)]
        min-h-[740px]
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-[#E2E8F0]
        bg-white
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          shrink-0
          border-b
          border-[#E2E8F0]
          bg-white
          px-5
          py-5
          sm:px-7
          sm:py-6
        "
      >
        <div className="flex items-start gap-4">

          {/* ICON */}

          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-[#E0E7FF]
              bg-[#EEF2FF]
              text-[#6366F1]
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

          {/* HEADER TEXT */}

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#6366F1]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#6366F1]
                "
              >
                Step 03
              </span>
            </div>

            <h2
              className="
                mt-1.5
                text-2xl
                font-bold
                tracking-tight
                text-[#111827]
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
                text-[#475569]
              "
            >
              Add your previous roles and highlight the
              experience, responsibilities, and achievements
              that matter most.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLLABLE CONTENT
      ====================================================== */}

      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          overscroll-contain
          p-5
          sm:p-7
        "
      >
        {/* =====================================================
            EXPERIENCE LIST
        ====================================================== */}

        <div className="space-y-5">

          {experiences.map((experience, index) => (
            <article
              key={experience.id}
              className="
                rounded-xl
                border
                border-[#E2E8F0]
                bg-[#F8FAFC]
                p-5
                transition-all
                duration-200
                hover:border-[#CBD5E1]
                sm:p-6
              "
            >

              {/* ENTRY HEADER */}

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

                  <div className="flex items-center gap-2">
                    <span
                      className="
                        rounded-full
                        bg-[#EEF2FF]
                        px-2
                        py-1
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wide
                        text-[#6366F1]
                      "
                    >
                      Experience {index + 1}
                    </span>

                    {experience.current && (
                      <span
                        className="
                          rounded-full
                          bg-[#E0E7FF]
                          px-2
                          py-1
                          text-[10px]
                          font-semibold
                          text-[#4F46E5]
                        "
                      >
                        Current
                      </span>
                    )}
                  </div>

                  <h3
                    className="
                      mt-2
                      truncate
                      text-lg
                      font-bold
                      text-[#111827]
                    "
                  >
                    {experience.jobTitle || "New position"}
                  </h3>

                  {experience.company && (
                    <p
                      className="
                        mt-1
                        text-xs
                        text-[#718096]
                      "
                    >
                      {experience.company}
                    </p>
                  )}
                </div>

                {/* REMOVE */}

                <button
                  type="button"
                  onClick={() =>
                    removeExperience(experience.id)
                  }
                  className="
                    shrink-0
                    rounded-lg
                    border
                    border-[#E2E8F0]
                    bg-white
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-[#475569]
                    transition-all
                    duration-200
                    hover:border-red-200
                    hover:bg-red-50
                    hover:text-red-500
                  "
                >
                  Remove
                </button>
              </div>

              {/* =================================================
                  FORM FIELDS
              ================================================== */}

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
                      text-[#111827]
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
                      text-[#111827]
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
                      text-[#111827]
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
                      text-[#111827]
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
                      text-[#111827]
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
                    className={`
                      ${inputClass}
                      disabled:cursor-not-allowed
                      disabled:bg-[#F1F5F9]
                      disabled:text-[#94A3B8]
                      disabled:opacity-70
                    `}
                  />
                </div>

                {/* CURRENT JOB */}

                <div className="sm:col-span-2">

                  <label
                    className="
                      group
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                      rounded-lg
                      border
                      border-[#E2E8F0]
                      bg-white
                      px-4
                      py-3
                      transition-all
                      duration-200
                      hover:border-[#C7D2FE]
                      hover:bg-[#F8FAFC]
                    "
                  >
                    <input
                      type="checkbox"
                      checked={Boolean(experience.current)}
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
                        cursor-pointer
                        rounded
                        border-[#CBD5E1]
                        accent-[#6366F1]
                      "
                    />

                    <span
                      className="
                        text-sm
                        font-medium
                        text-[#475569]
                        transition-colors
                        group-hover:text-[#111827]
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
                        text-[#111827]
                      "
                    >
                      Description
                    </label>

                    <span
                      className="
                        text-[10px]
                        font-medium
                        text-[#718096]
                      "
                    >
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

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <p
                      className="
                        text-xs
                        leading-5
                        text-[#718096]
                      "
                    >
                      Focus on achievements rather than simply
                      listing duties.
                    </p>

                    <span
                      className="
                        shrink-0
                        text-[10px]
                        font-medium
                        text-[#718096]
                      "
                    >
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
              rounded-xl
              border
              border-dashed
              border-[#E2E8F0]
              bg-[#F8FAFC]
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
                bg-[#EEF2FF]
                text-xl
                font-semibold
                text-[#6366F1]
              "
            >
              +
            </div>

            <h3
              className="
                mt-4
                text-lg
                font-bold
                text-[#111827]
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
                text-[#475569]
              "
            >
              Add your current or previous positions to show
              employers what you have accomplished.
            </p>
          </div>
        )}

        {/* =====================================================
            ADD EXPERIENCE
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
            rounded-lg
            border
            border-dashed
            border-[#C7D2FE]
            bg-[#EEF2FF]
            px-5
            py-3.5
            text-sm
            font-semibold
            text-[#6366F1]
            transition-all
            duration-200
            hover:border-[#A5B4FC]
            hover:bg-[#E0E7FF]
          "
        >
          <span className="text-lg leading-none">
            +
          </span>

          Add another experience
        </button>

        {/* BOTTOM SPACE */}

        <div className="h-2" />
      </div>
    </section>
  )
}

export default Experience
