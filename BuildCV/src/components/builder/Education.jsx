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

    updateParent([...education, newEducation])
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
    disabled:cursor-not-allowed
    disabled:bg-[#F8FAFC]
    disabled:text-[#94A3B8]
  `

  const labelClass = `
    mb-2
    block
    text-sm
    font-semibold
    text-[#111827]
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
        shadow-sm
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

          {/* HEADER TEXT */}

          <div className="min-w-0">

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#6366F1]
                "
              >
                Step 02
              </span>

            </div>

            <h2
              className="
                mt-1
                text-2xl
                font-bold
                tracking-tight
                text-[#111827]
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
                text-[#718096]
              "
            >
              Add your academic background, degrees,
              qualifications, and relevant achievements.
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
          px-5
          py-5
          sm:px-7
          sm:py-6
        "
      >

        {/* =====================================================
            EDUCATION ENTRIES
        ====================================================== */}

        <div className="space-y-5">

          {education.map((item, index) => (

            <article
              key={item.id}
              className="
                rounded-xl
                border
                border-[#E2E8F0]
                bg-[#F8FAFC]
                p-5
                transition-all
                duration-200
                hover:border-[#CBD5E1]
                hover:bg-white
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
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#EEF2FF]
                        text-xs
                        font-bold
                        text-[#6366F1]
                      "
                    >
                      {index + 1}
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#6366F1]
                      "
                    >
                      Education
                    </span>

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
                    rounded-lg
                    border
                    border-[#E2E8F0]
                    bg-white
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-[#718096]
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
                  FIELDS
              ================================================== */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* DEGREE */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor={`degree-${item.id}`}
                    className={labelClass}
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
                    className={labelClass}
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
                    className={labelClass}
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
                    className={labelClass}
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
                    className={labelClass}
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
                    className={inputClass}
                  />

                </div>

                {/* CURRENTLY STUDYING */}

                <div className="sm:col-span-2">

                  <label
                    className="
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
                      transition-colors
                      duration-200
                      hover:border-[#E0E7FF]
                      hover:bg-[#EEF2FF]/40
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
                        border-[#CBD5E1]
                        accent-[#6366F1]
                      "
                    />

                    <span className="text-sm font-medium text-[#475569]">
                      I am currently studying here
                    </span>

                  </label>

                </div>

                {/* DESCRIPTION */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor={`education-description-${item.id}`}
                    className={labelClass}
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

                  <p className="mt-1.5 text-xs text-[#718096]">
                    Keep this concise and focus on relevant achievements.
                  </p>

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
                rounded-xl
                bg-[#EEF2FF]
                text-xl
                font-bold
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
              Add your education
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-[#718096]
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
            mt-5
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
            text-[#4F46E5]
            transition-all
            duration-200
            hover:border-[#6366F1]
            hover:bg-[#E0E7FF]
          "
        >

          <span
            className="
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-[#6366F1]
              text-sm
              font-bold
              leading-none
              text-white
            "
          >
            +
          </span>

          Add Another Education

        </button>

      </div>
    </section>
  )
}

export default Education
