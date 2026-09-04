import TemplatePreview from "./TemplatePreveiw";

function TemplateCard({
  template,
  onPreview,
  onUseTemplate,
}) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[#E2E8F0]
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#E0E7FF]
        hover:shadow-xl
      "
    >
      {/* ================================================= */}
      {/* TEMPLATE PREVIEW */}
      {/* ================================================= */}

      <button
        type="button"
        onClick={() => onPreview(template)}
        className="
          relative
          block
          w-full
          overflow-hidden
          bg-[#F8FAFC]
          text-left
          focus:outline-none
          focus:ring-2
          focus:ring-[#6366F1]
          focus:ring-inset
        "
        aria-label={`Preview ${template.name} template`}
      >
        {/* ================================================= */}
        {/* PREVIEW AREA */}
        {/* ================================================= */}

        <div
          className="
            flex
            h-[400px]
            w-full
            items-start
            justify-center
            overflow-hidden
            bg-[#F8FAFC]
            px-4
            pt-5
          "
        >
          {/* ================================================= */}
          {/* A4 FRAME */}
          {/* ================================================= */}

          <div
            className="
              relative
              h-[390px]
              w-[276px]
              shrink-0
              overflow-hidden
              rounded-[2px]
              bg-white
              shadow-[0_8px_30px_rgba(15,23,42,0.12)]
              transition-transform
              duration-300
              group-hover:scale-[1.015]
            "
          >
            {/* ================================================= */}
            {/* REAL A4 CANVAS */}
            {/* ================================================= */}

            <div
              className="
                absolute
                left-0
                top-0
              "
              style={{
                width: "794px",
                height: "1123px",
                transform: "scale(0.347607)",
                transformOrigin: "top left",
              }}
            >
              <TemplatePreview
                template={template}
              />
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* PREVIEW OVERLAY */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-[#111827]/10
            opacity-0
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
              text-sm
              font-semibold
              text-[#111827]
              shadow-lg
              transition-transform
              duration-300
              group-hover:scale-100
            "
          >
            View Template
          </span>
        </div>

        {/* ================================================= */}
        {/* FEATURED */}
        {/* ================================================= */}

        {template.featured && (
          <div
            className="
              pointer-events-none
              absolute
              left-4
              top-4
              rounded-full
              bg-[#6366F1]
              px-3
              py-1.5
              text-[11px]
              font-bold
              text-white
              shadow-md
            "
          >
            Featured
          </div>
        )}
      </button>

      {/* ================================================= */}
      {/* TEMPLATE INFORMATION */}
      {/* ================================================= */}

      <div className="p-4.5">
        {/* ================================================= */}
        {/* TITLE ROW */}
        {/* ================================================= */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-3
          "
        >
          <div className="min-w-0">
            <h3
              className="
                truncate
                text-[17px]
                font-bold
                leading-6
                text-[#111827]
              "
            >
              {template.name}
            </h3>

            <p
              className="
                mt-0.5
                text-[12px]
                font-medium
                text-[#6366F1]
              "
            >
              {template.category}
            </p>
          </div>

          {/* ATS */}

          {template.ats && (
            <span
              className="
                shrink-0
                rounded-full
                bg-[#EEF2FF]
                px-2.5
                py-1
                text-[10px]
                font-bold
                tracking-wide
                text-[#4F46E5]
              "
            >
              ATS
            </span>
          )}
        </div>

        {/* ================================================= */}
        {/* DESCRIPTION */}
        {/* ================================================= */}

        <p
          className="
            mt-2.5
            min-h-[42px]
            text-[12px]
            leading-[1.55]
            text-[#718096]
          "
        >
          {template.description}
        </p>

        {/* ================================================= */}
        {/* ACTIONS */}
        {/* ================================================= */}

        <div className="mt-4 flex gap-2.5">
          {/* PREVIEW */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPreview(template);
            }}
            className="
              flex-1
              rounded-lg
              border
              border-[#E2E8F0]
              bg-white
              px-3
              py-2.5
              text-[12px]
              font-semibold
              text-[#111827]
              transition-all
              duration-200
              hover:border-[#6366F1]
              hover:bg-[#EEF2FF]
              hover:text-[#4F46E5]
            "
          >
            Preview
          </button>

          {/* USE TEMPLATE */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onUseTemplate(template);
            }}
            className="
              flex-1
              rounded-lg
              bg-[#6366F1]
              px-3
              py-2.5
              text-[12px]
              font-semibold
              text-white
              transition-all
              duration-200
              hover:bg-[#4F46E5]
              active:scale-[0.98]
            "
          >
            Use Template
          </button>
        </div>
      </div>
    </article>
  );
}

export default TemplateCard;