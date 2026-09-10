function Interests({ formData, setFormData }) {
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

  const updateInterests = (value) => {
    setFormData((previous) => ({
      ...previous,
      interests: {
        ...previous.interests,
        enabled: true,
        value,
      },
    }))
  }

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

      <div
        className="
          border-b
          border-[#E2E8F0]
          px-5
          py-6
          sm:px-7
          sm:py-7
        "
      >

        <div className="flex items-start gap-4">

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
              text-xl
              text-[#6366F1]
            "
          >
            ♡
          </div>

          <div>

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#6366F1]
              "
            >
              Optional Section
            </p>

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
              Interests
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
              Add hobbies and interests that represent
              you professionally.
            </p>

          </div>

        </div>

      </div>


      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          p-5
          sm:p-7
        "
      >

        <div
          className="
            rounded-xl
            border
            border-[#E2E8F0]
            bg-[#F8FAFC]
            p-5
            sm:p-6
          "
        >

          <label
            htmlFor="resume-interests"
            className="
              mb-2
              block
              text-sm
              font-semibold
              text-[#111827]
            "
          >
            Your interests
          </label>

          <textarea
            id="resume-interests"
            rows={6}
            maxLength={500}
            className={`
              ${inputClass}
              resize-none
              leading-6
            `}
            placeholder="e.g. Photography, Reading, Open-source development, UI design"
            value={
              formData.interests?.value || ""
            }
            onChange={(event) =>
              updateInterests(
                event.target.value
              )
            }
          />

          <div className="mt-2 flex justify-between">

            <p
              className="
                text-xs
                text-[#718096]
              "
            >
              Separate multiple interests with commas.
            </p>

            <span
              className="
                text-[10px]
                text-[#718096]
              "
            >
              {(
                formData.interests?.value || ""
              ).length}/500
            </span>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Interests