function Certifications({ formData, setFormData }) {
  const certifications =
    formData.certifications?.items || []

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

  const addCertification = () => {
    const newItem = {
      id: crypto.randomUUID?.() || Date.now(),
      name: "",
      organization: "",
      date: "",
      link: "",
    }

    setFormData((previous) => ({
      ...previous,
      certifications: {
        enabled: true,
        items: [
          ...(previous.certifications?.items || []),
          newItem,
        ],
      },
    }))
  }

  const updateCertification = (
    id,
    field,
    value
  ) => {
    setFormData((previous) => ({
      ...previous,
      certifications: {
        ...previous.certifications,
        enabled: true,
        items: (
          previous.certifications?.items || []
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

  const removeCertification = (id) => {
    setFormData((previous) => {
      const remainingItems = (
        previous.certifications?.items || []
      ).filter((item) => item.id !== id)

      return {
        ...previous,
        certifications: {
          enabled: remainingItems.length > 0,
          items: remainingItems,
        },
      }
    })
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
      {/* HEADER */}

      <div
        className="
          border-b
          border-[#E2E8F0]
          bg-white
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
            ✓
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
              Certifications
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
              Add professional certifications, courses,
              and credentials.
            </p>
          </div>

        </div>
      </div>

      {/* CONTENT */}

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

          {certifications.map(
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
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#6366F1]
                      "
                    >
                      Certification {index + 1}
                    </p>

                    <h3
                      className="
                        mt-1
                        text-lg
                        font-bold
                        text-[#111827]
                      "
                    >
                      {item.name || "New certification"}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      removeCertification(item.id)
                    }
                    className="
                      rounded-lg
                      border
                      border-red-400/10
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-red-400
                      hover:bg-red-400/10
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
                    placeholder="Certificate name"
                    value={item.name || ""}
                    onChange={(event) =>
                      updateCertification(
                        item.id,
                        "name",
                        event.target.value
                      )
                    }
                  />

                  <input
                    className={inputClass}
                    placeholder="Issuing organization"
                    value={item.organization || ""}
                    onChange={(event) =>
                      updateCertification(
                        item.id,
                        "organization",
                        event.target.value
                      )
                    }
                  />

                  <input
                    className={inputClass}
                    placeholder="Date"
                    value={item.date || ""}
                    onChange={(event) =>
                      updateCertification(
                        item.id,
                        "date",
                        event.target.value
                      )
                    }
                  />

                  <input
                    className={inputClass}
                    type="url"
                    placeholder="Certificate URL"
                    value={item.link || ""}
                    onChange={(event) =>
                      updateCertification(
                        item.id,
                        "link",
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
          onClick={addCertification}
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
          Add certification
        </button>

      </div>
    </section>
  )
}

export default Certifications