import { useEffect, useState } from "react"

function Education({ formData, setFormData }) {
  const [education, setEducation] = useState(
    formData.education || []
  )

  // =====================================================
  // SYNC WITH BUILDER
  // =====================================================

  useEffect(() => {
    setEducation(formData.education || [])
  }, [formData.education])

  // =====================================================
  // UPDATE PARENT
  // =====================================================

  const updateParent = (updatedEducation) => {
    setEducation(updatedEducation)

    setFormData((previous) => ({
      ...previous,
      education: updatedEducation,
    }))
  }

  // =====================================================
  // ADD EDUCATION
  // =====================================================

  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }

    updateParent([
      ...education,
      newEducation,
    ])
  }

  // =====================================================
  // REMOVE EDUCATION
  // =====================================================

  const removeEducation = (id) => {
    const updatedEducation = education.filter(
      (item) => item.id !== id
    )

    updateParent(updatedEducation)
  }

  // =====================================================
  // UPDATE EDUCATION
  // =====================================================

  const updateEducation = (id, field, value) => {
    const updatedEducation = education.map((item) =>
      item.id === id
        ? {
            ...item,
            [field]: value,

            // Clear end date when currently studying
            ...(field === "current" && value
              ? { endDate: "" }
              : {}),
          }
        : item
    )

    updateParent(updatedEducation)
  }

  // =====================================================
  // SHARED INPUT STYLE
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
                d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 6h8M8 10h8"
              />
            </svg>

          </div>

          {/* Header text */}

          <div className="min-w-0">

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-buildcv-indigo
              "
            >
              Step 4
            </span>

            <h2
              className="
                mt-1
                font-display
                text-2xl
                font-bold
                tracking-tight
                text-buildcv-primary
                sm:text-3xl
              "
            >
              Education
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
              Add your academic background, degrees,
              qualifications, and relevant achievements.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="p-5 sm:p-7">

        {/* =====================================================
            EDUCATION ENTRIES
        ====================================================== */}

        <div className="space-y-5">

          {education.map((item, index) => (

            <article
              key={item.id}
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

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-buildcv-indigo
                    "
                  >
                    Education {index + 1}
                  </span>

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
                    {item.degree || "New Education"}
                  </h3>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    removeEducation(item.id)
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
              ================================================== */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* DEGREE */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor={`degree-${item.id}`}
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-buildcv-text
                    "
                  >
                    Degree / Qualification
                  </label>

                  <input
                    id={`degree-${item.id}`}
                    type="text"
                    value={item.degree}
                    onChange={(event) =>
                      updateEducation(
                        item.id,
                        "degree",
                        event.target.value
                      )
                    }
                    placeholder="e.g. Bachelor of Computer Science"
                    className={inputClass}
                  />

                </div>


                {/* INSTITUTION */}

                <div>

                  <label
                    htmlFor={`institution-${item.id}`}
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-buildcv-text
                    "
                  >
                    Institution
                  </label>

                  <input
                    id={`institution-${item.id}`}
                    type="text"
                    value={item.institution}
                    onChange={(event) =>
                      updateEducation(
                        item.id,
                        "institution",
                        event.target.value
                      )
                    }
                    placeholder="e.g. University of Islamabad"
                    className={inputClass}
                  />

                </div>


                {/* LOCATION */}

                <div>

                  <label
                    htmlFor={`education-location-${item.id}`}
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
                    id={`education-location-${item.id}`}
                    type="text"
                    value={item.location}
                    onChange={(event) =>
                      updateEducation(
                        item.id,
                        "location",
                        event.target.value
                      )
                    }
                    placeholder="e.g. Islamabad, Pakistan"
                    className={inputClass}
                  />

                </div>


                {/* START DATE */}

                <div>

                  <label
                    htmlFor={`education-start-${item.id}`}
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-buildcv-text
                    "
                  >
                    Start Date
                  </label>

                  <input
                    id={`education-start-${item.id}`}
                    type="month"
                    value={item.startDate}
                    onChange={(event) =>
                      updateEducation(
                        item.id,
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
                    htmlFor={`education-end-${item.id}`}
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-buildcv-text
                    "
                  >
                    End Date
                  </label>

                  <input
                    id={`education-end-${item.id}`}
                    type="month"
                    value={item.endDate}
                    disabled={item.current}
                    onChange={(event) =>
                      updateEducation(
                        item.id,
                        "endDate",
                        event.target.value
                      )
                    }
                    className={`
                      ${inputClass}
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    `}
                  />

                </div>


                {/* CURRENTLY STUDYING */}

                <div className="sm:col-span-2">

                  <label
                    className="
                      group
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                    "
                  >

                    <input
                      type="checkbox"
                      checked={Boolean(item.current)}
                      onChange={(event) =>
                        updateEducation(
                          item.id,
                          "current",
                          event.target.checked
                        )
                      }
                      className="
                        h-4
                        w-4
                        cursor-pointer
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
                        transition-colors
                        group-hover:text-buildcv-text
                      "
                    >
                      I am currently studying here
                    </span>

                  </label>

                </div>


                {/* DESCRIPTION */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor={`education-description-${item.id}`}
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-buildcv-text
                    "
                  >
                    Description
                  </label>

                  <textarea
                    id={`education-description-${item.id}`}
                    rows={4}
                    value={item.description}
                    onChange={(event) =>
                      updateEducation(
                        item.id,
                        "description",
                        event.target.value
                      )
                    }
                    placeholder="Add achievements, relevant coursework, activities, GPA, or other details..."
                    className={`
                      ${inputClass}
                      resize-none
                      leading-6
                    `}
                  />

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =====================================================
            EMPTY STATE
        ====================================================== */}

        {education.length === 0 && (

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
              Add your education
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
              Add your degree, university, college,
              certification, or other educational
              qualifications.
            </p>

          </div>

        )}


        {/* =====================================================
            ADD EDUCATION
        ====================================================== */}

        <button
          type="button"
          onClick={addEducation}
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

          Add Another Education

        </button>

      </div>

    </section>
  )
}

export default Education