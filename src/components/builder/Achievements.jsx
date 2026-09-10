function Achievements({ formData, setFormData }) {
  const achievements =
    formData.achievements?.items || []

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

  const addAchievement = () => {
    const newItem = {
      id: crypto.randomUUID?.() || Date.now(),
      title: "",
      description: "",
      date: "",
    }

    setFormData((previous) => ({
      ...previous,
      achievements: {
        enabled: true,
        items: [
          ...(previous.achievements?.items || []),
          newItem,
        ],
      },
    }))
  }

  const updateAchievement = (
    id,
    field,
    value
  ) => {
    setFormData((previous) => ({
      ...previous,
      achievements: {
        ...previous.achievements,
        enabled: true,
        items: (
          previous.achievements?.items || []
        ).map((item) =>
          item.id === id
            ? {
                ...item,
                [field]: value,
              }
            : item
        ),
      },
    }))
  }

  const removeAchievement = (id) => {
    setFormData((previous) => ({
      ...previous,
      achievements: {
        ...previous.achievements,
        items: (
          previous.achievements?.items || []
        ).filter((item) => item.id !== id),
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
            ★
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
              Achievements
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
              Highlight awards, accomplishments, and
              important milestones.
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

        <div className="space-y-5">

          {achievements.map(
            (item, index) => (
              <article
                key={item.id}
                className="
                  rounded-xl
                  border
                  border-[#E2E8F0]
                  bg-[#F8FAFC]
                  p-5
                  sm:p-6
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    items-center
                    justify-between
                  "
                >

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#6366F1]
                    "
                  >
                    Achievement {index + 1}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      removeAchievement(item.id)
                    }
                    className="
                      text-xs
                      font-semibold
                      text-red-400
                    "
                  >
                    Remove
                  </button>

                </div>

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                  "
                >

                  <input
                    className={inputClass}
                    placeholder="Achievement title"
                    value={item.title || ""}
                    onChange={(event) =>
                      updateAchievement(
                        item.id,
                        "title",
                        event.target.value
                      )
                    }
                  />

                  <input
                    className={inputClass}
                    placeholder="Date"
                    value={item.date || ""}
                    onChange={(event) =>
                      updateAchievement(
                        item.id,
                        "date",
                        event.target.value
                      )
                    }
                  />

                  <textarea
                    rows={5}
                    className={`
                      ${inputClass}
                      resize-none
                      leading-6
                      sm:col-span-2
                    `}
                    placeholder="Describe your achievement..."
                    value={
                      item.description || ""
                    }
                    onChange={(event) =>
                      updateAchievement(
                        item.id,
                        "description",
                        event.target.value
                      )
                    }
                  />

                </div>

              </article>
            )
          )}

        </div>

        <button
          type="button"
          onClick={addAchievement}
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
            border-[#6366F1]/30
            bg-[#6366F1]/5
            px-5
            py-3.5
            text-sm
            font-semibold
            text-[#6366F1]
            hover:bg-[#6366F1]/10
          "
        >
          <span className="text-lg">+</span>
          Add achievement
        </button>

      </div>

    </section>
  )
}

export default Achievements