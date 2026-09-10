function References({ formData, setFormData }) {
  const references =
    formData.references?.items || []

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

  const addReference = () => {
    const newItem = {
      id: crypto.randomUUID?.() || Date.now(),
      name: "",
      position: "",
      company: "",
      email: "",
      phone: "",
    }

    setFormData((previous) => ({
      ...previous,
      references: {
        enabled: true,
        items: [
          ...(previous.references?.items || []),
          newItem,
        ],
      },
    }))
  }

  const updateReference = (
    id,
    field,
    value
  ) => {
    setFormData((previous) => ({
      ...previous,
      references: {
        ...previous.references,
        enabled: true,
        items: (
          previous.references?.items || []
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

  const removeReference = (id) => {
    setFormData((previous) => ({
      ...previous,
      references: {
        ...previous.references,
        items: (
          previous.references?.items || []
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
              text-[#6366F1]
            "
          >
            👤
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
              References
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
              Add professional references when they are
              relevant to your application.
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

          {references.map(
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
                    Reference {index + 1}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      removeReference(item.id)
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
                    placeholder="Full name"
                    value={item.name || ""}
                    onChange={(event) =>
                      updateReference(
                        item.id,
                        "name",
                        event.target.value
                      )
                    }
                  />

                  <input
                    className={inputClass}
                    placeholder="Position"
                    value={item.position || ""}
                    onChange={(event) =>
                      updateReference(
                        item.id,
                        "position",
                        event.target.value
                      )
                    }
                  />

                  <input
                    className={inputClass}
                    placeholder="Company"
                    value={item.company || ""}
                    onChange={(event) =>
                      updateReference(
                        item.id,
                        "company",
                        event.target.value
                      )
                    }
                  />

                  <input
                    className={inputClass}
                    type="email"
                    placeholder="Email"
                    value={item.email || ""}
                    onChange={(event) =>
                      updateReference(
                        item.id,
                        "email",
                        event.target.value
                      )
                    }
                  />

                  <input
                    className={inputClass}
                    type="tel"
                    placeholder="Phone"
                    value={item.phone || ""}
                    onChange={(event) =>
                      updateReference(
                        item.id,
                        "phone",
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
          onClick={addReference}
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
          Add reference
        </button>

      </div>

    </section>
  )
}

export default References