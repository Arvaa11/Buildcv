import TemplatePreview from "./TemplatePreview"

function TemplateCard({
  template,
  selected = false,
  onSelect,
}) {
  if (!template) return null

  const handleSelect = () => {
    if (typeof onSelect === "function") {
      onSelect(template.id)
    }
  }

  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-buildcv-2xl
        border
        bg-buildcv-navy
        transition-all
        duration-300

        ${
          selected
            ? `
              border-buildcv-indigo
              ring-2
              ring-buildcv-indigo/20
              shadow-[0_20px_50px_rgba(99,102,241,0.18)]
            `
            : `
              border-buildcv-border
              shadow-buildcv-sm
              hover:-translate-y-1
              hover:border-buildcv-indigo/50
              hover:shadow-buildcv-lg
            `
        }
      `}
    >
      {/* =====================================================
          SELECTED BADGE
      ===================================================== */}

      {selected && (
        <div
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            items-center
            gap-1.5
            rounded-full
            bg-buildcv-indigo
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-white
            shadow-lg
          "
        >
          <span>✓</span>
          Selected
        </div>
      )}

      {/* =====================================================
          POPULAR BADGE
      ===================================================== */}

      {!selected && template.popular && (
        <div
          className="
            absolute
            left-4
            top-4
            z-20
            rounded-full
            border
            border-buildcv-indigo/30
            bg-buildcv-navy
            px-3
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-wider
            text-buildcv-indigo-400
            shadow-lg
          "
        >
          ✦ Popular
        </div>
      )}

      {/* =====================================================
          TEMPLATE PREVIEW
      ===================================================== */}

      <button
        type="button"
        onClick={handleSelect}
        className="
          block
          w-full
          text-left
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-buildcv-indigo
          focus-visible:ring-inset
        "
        aria-label={`Use ${template.name} template`}
      >
        <div
          className="
            relative
            overflow-hidden
            border-b
            border-buildcv-border
            bg-gradient-to-br
            from-buildcv-navy-800
            via-buildcv-navy-700
            to-buildcv-navy
            px-5
            pb-8
            pt-10
            sm:px-6
            sm:pt-12
          "
        >
          {/* Resume paper */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[275px]
              overflow-hidden
              rounded-lg
              bg-white
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              transition-all
              duration-500
              group-hover:scale-[1.025]
              group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]
            "
          >
            <div className="aspect-[210/297] w-full">
              <TemplatePreview templateId={template.id} />
            </div>

            {/* Hover overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-[#080d1a]/55
                opacity-0
                backdrop-blur-[2px]
                transition-all
                duration-300
                group-hover:opacity-100
              "
            >
              <span
                className="
                  rounded-full
                  bg-white
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  text-buildcv-navy
                  shadow-xl
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                Use this template →
              </span>
            </div>
          </div>
        </div>
      </button>

      {/* =====================================================
          TEMPLATE INFORMATION
      ===================================================== */}

      <div className="p-5 sm:p-6">

        {/* Name + category */}

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <h3
              className="
                font-display
                text-lg
                font-bold
                tracking-tight
                text-buildcv-text
              "
            >
              {template.name}
            </h3>

            {template.category && (
              <p
                className="
                  mt-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-buildcv-indigo-400
                "
              >
                {template.category}
              </p>
            )}

          </div>

          {template.tag && (
            <span
              className="
                shrink-0
                rounded-full
                border
                border-buildcv-border
                bg-buildcv-navy-800
                px-2.5
                py-1
                text-[9px]
                font-bold
                uppercase
                tracking-wider
                text-buildcv-text-secondary
              "
            >
              {template.tag}
            </span>
          )}

        </div>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}

        {template.description && (
          <p
            className="
              mt-3
              text-sm
              leading-6
              text-buildcv-text-secondary
            "
          >
            {template.description}
          </p>
        )}

        {/* =====================================================
            FEATURES
        ===================================================== */}

        {template.features?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {template.features.map((feature) => (
              <span
                key={feature}
                className="
                  rounded-full
                  border
                  border-buildcv-border
                  bg-buildcv-navy-800
                  px-2.5
                  py-1
                  text-[9px]
                  font-semibold
                  text-buildcv-text-secondary
                "
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* =====================================================
            ACTION BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={handleSelect}
          className={`
            mt-6
            flex
            w-full
            items-center
            justify-between
            rounded-xl
            px-4
            py-3
            text-sm
            font-bold
            transition-all
            duration-200
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-buildcv-indigo
            focus-visible:ring-offset-2
            focus-visible:ring-offset-buildcv-navy

            ${
              selected
                ? `
                  bg-buildcv-indigo
                  text-white
                  shadow-lg
                  shadow-buildcv-indigo/20
                `
                : `
                  bg-buildcv-navy-700
                  text-buildcv-text
                  hover:-translate-y-0.5
                  hover:bg-buildcv-indigo
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-buildcv-indigo/20
                `
            }
          `}
        >
          <span>
            {selected
              ? "Template Selected"
              : "Use This Template"}
          </span>

          <span
            className={`
              text-lg
              transition-transform
              duration-200
              ${
                !selected
                  ? "group-hover:translate-x-1"
                  : ""
              }
            `}
          >
            {selected ? "✓" : "→"}
          </span>
        </button>

      </div>
    </article>
  )
}

export default TemplateCard