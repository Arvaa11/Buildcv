function TemplateCard({
  template,
  selected,
  onSelect,
  formData = {},
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(template.id)}
      className={`
        group
        relative
        w-full
        overflow-hidden
        rounded-2xl
        border
        bg-white
        text-left
        transition-all
        duration-300
        ${
          selected
            ? "border-buildcv-violet ring-2 ring-buildcv-violet/20 shadow-xl"
            : "border-slate-200 shadow-sm hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
        }
      `}
    >

      {/* =====================================================
          TAG
      ====================================================== */}

      {template.tag && (
        <div className="absolute left-4 top-4 z-20">
          <span
            className="
              rounded-full
              bg-white
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-wider
              text-slate-600
              shadow-md
            "
          >
            {template.tag}
          </span>
        </div>
      )}

      {/* =====================================================
          SELECTED
      ====================================================== */}

      {selected && (
        <div className="absolute right-4 top-4 z-20">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-buildcv-violet
              text-xs
              font-bold
              text-white
              shadow-lg
            "
          >
            ✓
          </div>
        </div>
      )}

      {/* =====================================================
          TEMPLATE PREVIEW
      ====================================================== */}

      <div className="relative h-[390px] overflow-hidden bg-slate-100">

        <div
          className="
            absolute
            left-1/2
            top-5
            w-[700px]
            origin-top
            -translate-x-1/2
            scale-[0.48]
            shadow-2xl
          "
        >
          {/* 
            TemplatePreview should be rendered
            by the parent component.
          */}
          {template.preview}
        </div>

      </div>

      {/* =====================================================
          TEMPLATE INFORMATION
      ====================================================== */}

      <div className="border-t border-slate-100 p-5">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <h3 className="text-base font-bold text-buildcv-ink">
              {template.name}
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              {template.description}
            </p>

          </div>

          {/* Accent */}

          <span
            className="mt-1 h-3 w-3 shrink-0 rounded-full"
            style={{
              backgroundColor: template.accent,
            }}
          />

        </div>

        {/* =================================================
            FEATURES
        ================================================== */}

        {template.features?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">

            {template.features
              .slice(0, 3)
              .map((feature) => (
                <span
                  key={feature}
                  className="
                    rounded-md
                    bg-slate-100
                    px-2
                    py-1
                    text-[9px]
                    font-medium
                    text-slate-500
                  "
                >
                  {feature}
                </span>
              ))}

          </div>
        )}

        {/* =================================================
            SELECT BUTTON TEXT
        ================================================== */}

        <div className="mt-4 flex items-center justify-between">

          <span
            className={`
              text-xs
              font-bold
              transition-colors
              ${
                selected
                  ? "text-buildcv-violet"
                  : "text-slate-400 group-hover:text-buildcv-violet"
              }
            `}
          >
            {selected ? "Selected" : "Select template"}
          </span>

          <span
            className={`
              text-sm
              transition-transform
              duration-200
              ${
                selected
                  ? "translate-x-1 text-buildcv-violet"
                  : "text-slate-300 group-hover:translate-x-1 group-hover:text-buildcv-violet"
              }
            `}
          >
            →
          </span>

        </div>

      </div>

    </button>
  )
}

export default TemplateCard