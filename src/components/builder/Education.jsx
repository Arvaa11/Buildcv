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
  // SHARED STYLES
  // =====================================================

  const inputClass = `
    h-12
    w-full
    rounded-xl
    border
    border-[#E2E8F0]
    bg-[#F8FAFC]
    px-4
    text-sm
    font-medium
    text-[#111827]
    outline-none
    transition-all
    duration-200
    placeholder:text-[#718096]
    hover:border-[#CBD5E1]
    hover:bg-white
    focus:border-[#6366F1]
    focus:bg-white
    focus:ring-4
    focus:ring-[#EEF2FF]
    disabled:cursor-not-allowed
    disabled:bg-[#F8FAFC]
    disabled:text-[#94A3B8]
  `

  const labelClass = `
    mb-2
    block
    text-[12px]
    font-bold
    tracking-wide
    text-[#334155]
  `

  // =====================================================
  // SECTION HEADER
  // =====================================================

  const SectionHeader = () => (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <h3
          className="
            text-[15px]
            font-black
            tracking-tight
            text-[#111827]
          "
        >
          Academic background
        </h3>

        <div className="h-px flex-1 bg-[#E2E8F0]" />

        <span
          className="
            shrink-0
            rounded-full
            border
            border-[#E2E8F0]
            bg-[#F8FAFC]
            px-2.5
            py-1
            text-[9px]
            font-bold
            uppercase
            tracking-wider
            text-[#718096]
          "
        >
          Education
        </span>
      </div>

      <p
        className="
          mt-1
          text-xs
          leading-5
          text-[#718096]
        "
      >
        Add your degrees, institutions, dates, and relevant
        academic achievements.
      </p>
    </div>
  )

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section
      className="
    flex
    h-full
    min-h-0
    flex-col
    overflow-hidden
    bg-white
  "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          shrink-0
          border-b
          border-[#E2E8F0]
          bg-white
          px-6
          py-6
          sm:px-8
          sm:py-7
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
              rounded-xl
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
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#6366F1]
                "
              >
                Step 02
              </span>
            </div>

            <h2
              className="
                mt-1.5
                text-2xl
                font-black
                tracking-tight
                text-[#111827]
                sm:text-3xl
              "
            >
              Education
            </h2>

            <p
              className="
                mt-1.5
                max-w-2xl
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
      ===================================================== */}

      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          bg-[#F8FAFC]
          px-5
          py-7
          sm:px-8
          sm:py-8
        "
      >
        <div className="mx-auto w-full max-w-[960px]">

          {/* =====================================================
              SECTION HEADER
          ===================================================== */}

          <SectionHeader />

          {/* =====================================================
              EDUCATION ENTRIES
          ===================================================== */}

          <div className="space-y-6">

            {education.map((item, index) => (

              <article
                key={item.id}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#E2E8F0]
                  bg-white
                  shadow-[0_4px_18px_rgba(15,23,42,0.035)]
                  transition-all
                  duration-200
                  hover:border-[#CBD5E1]
                  hover:shadow-[0_6px_22px_rgba(15,23,42,0.05)]
                "
              >

                {/* =================================================
                    ENTRY HEADER
                ================================================= */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-[#E2E8F0]
                    bg-white
                    px-5
                    py-4
                    sm:px-6
                  "
                >

                  <div className="flex min-w-0 items-center gap-3">

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#EEF2FF]
                        text-xs
                        font-black
                        text-[#6366F1]
                      "
                    >
                      {index + 1}
                    </span>

                    <div className="min-w-0">

                      <p
                        className="
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          text-[#6366F1]
                        "
                      >
                        Education
                      </p>

                      <h3
                        className="
                          mt-0.5
                          truncate
                          text-base
                          font-black
                          text-[#111827]
                          sm:text-lg
                        "
                      >
                        {item.degree || "New education"}
                      </h3>

                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      removeEducation(item.id)
                    }
                    className="
                      shrink-0
                      rounded-xl
                      border
                      border-[#E2E8F0]
                      bg-white
                      px-3
                      py-2
                      text-[11px]
                      font-bold
                      text-[#718096]
                      transition-all
                      duration-200
                      hover:border-[#FECACA]
                      hover:bg-[#FEF2F2]
                      hover:text-[#DC2626]
                    "
                  >
                    Remove
                  </button>

                </div>

                {/* =================================================
                    ENTRY CONTENT
                ================================================= */}

                <div
                  className="
                    bg-[#F8FAFC]
                    p-5
                    sm:p-6
                  "
                >

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    {/* =================================================
                        DEGREE
                    ================================================= */}

                    <div className="md:col-span-2">

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

                      <p
                        className="
                          mt-2
                          text-[11px]
                          text-[#718096]
                        "
                      >
                        Enter your degree, diploma, certification,
                        or qualification.
                      </p>

                    </div>

                    {/* =================================================
                        INSTITUTION
                    ================================================= */}

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

                    {/* =================================================
                        LOCATION
                    ================================================= */}

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

                    {/* =================================================
                        START DATE
                    ================================================= */}

                    <div>

                      <label
                        htmlFor={`education-start-${item.id}`}
                        className={labelClass}
                      >
                        Start date
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

                    {/* =================================================
                        END DATE
                    ================================================= */}

                    <div>

                      <label
                        htmlFor={`education-end-${item.id}`}
                        className={labelClass}
                      >
                        End date
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

                    {/* =================================================
                        CURRENTLY STUDYING
                    ================================================= */}

                    <div className="md:col-span-2">

                      <label
                        className="
                          flex
                          cursor-pointer
                          items-center
                          gap-3
                          rounded-xl
                          border
                          border-[#E2E8F0]
                          bg-white
                          px-4
                          py-3.5
                          transition-all
                          duration-200
                          hover:border-[#C7D2FE]
                          hover:bg-[#EEF2FF]
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

                        <div className="min-w-0">

                          <span
                            className="
                              block
                              text-xs
                              font-bold
                              text-[#111827]
                            "
                          >
                            I am currently studying here
                          </span>

                          <span
                            className="
                              mt-0.5
                              block
                              text-[10px]
                              text-[#718096]
                            "
                          >
                            Your end date will be left blank.
                          </span>

                        </div>

                      </label>

                    </div>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <div className="md:col-span-2">

                      <label
                        htmlFor={`education-description-${item.id}`}
                        className={labelClass}
                      >
                        Description
                      </label>

                      <textarea
                        id={`education-description-${item.id}`}
                        rows={5}
                        value={item.description}
                        onChange={(event) =>
                          updateEducation(
                            item.id,
                            "description",
                            event.target.value
                          )
                        }
                        placeholder="Add achievements, relevant coursework, activities, GPA, awards, or other details..."
                        className="
                          min-h-[150px]
                          w-full
                          resize-y
                          rounded-xl
                          border
                          border-[#E2E8F0]
                          bg-[#F8FAFC]
                          px-4
                          py-3.5
                          text-sm
                          leading-6
                          text-[#111827]
                          outline-none
                          transition-all
                          duration-200
                          placeholder:text-[#718096]
                          hover:border-[#CBD5E1]
                          hover:bg-white
                          focus:border-[#6366F1]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#EEF2FF]
                        "
                      />

                      <div className="mt-2 flex items-center justify-between">

                        <p className="text-[11px] text-[#718096]">
                          Keep this concise and focus on relevant achievements.
                        </p>

                        <span className="text-[10px] font-semibold text-[#718096]">
                          {item.description?.length || 0} characters
                        </span>

                      </div>

                    </div>

                  </div>
                </div>

              </article>

            ))}

          </div>

          {/* =====================================================
              EMPTY STATE
          ===================================================== */}

          {education.length === 0 && (

            <div
              className="
                rounded-2xl
                border
                border-dashed
                border-[#CBD5E1]
                bg-white
                px-6
                py-14
                text-center
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#EEF2FF]
                  text-2xl
                  font-black
                  text-[#6366F1]
                "
              >
                +
              </div>

              <h3
                className="
                  mt-5
                  text-lg
                  font-black
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
          ===================================================== */}

          <button
            type="button"
            onClick={addEducation}
            className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-2.5
              rounded-xl
              border
              border-dashed
              border-[#C7D2FE]
              bg-[#EEF2FF]
              px-5
              py-4
              text-sm
              font-bold
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
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#6366F1]
                text-base
                font-bold
                leading-none
                text-white
              "
            >
              +
            </span>

            Add Another Education

          </button>

          {/* =====================================================
              HELPER TIP
          ===================================================== */}

          <div
            className="
              mt-6
              flex
              items-start
              gap-3
              rounded-2xl
              border
              border-[#E0E7FF]
              bg-[#EEF2FF]
              px-5
              py-4
            "
          >

            <span
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#C7D2FE]
                bg-white
                text-[11px]
                font-black
                text-[#6366F1]
              "
            >
              i
            </span>

            <div>
              <p className="text-xs font-bold text-[#111827]">
                Education tip
              </p>

              <p className="mt-1 text-xs leading-5 text-[#475569]">
                Put your most recent or most relevant education
                first. Focus your description on achievements,
                coursework, or activities that support your career.
              </p>
            </div>

          </div>

          <div className="h-4" />

        </div>
      </div>
    </section>
  )
}

export default Education