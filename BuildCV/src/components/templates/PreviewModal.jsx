import TemplatePreview from "./TemplatePreveiw";

function PreviewModal({
  template,
  onClose,
  onUseTemplate,
}) {
  if (!template) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#111827]/70
        p-4
        backdrop-blur-sm
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          flex
          max-h-[95vh]
          w-full
          max-w-6xl
          flex-col
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-2xl
        "
      >
        {/* HEADER */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-[#E2E8F0]
            px-5
            py-4
            sm:px-6
          "
        >
          <div>
            <h2 className="text-lg font-bold text-[#111827]">
              {template.name}
            </h2>

            <p className="text-sm text-[#718096]">
              {template.category} Resume Template
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#E2E8F0]
              text-xl
              text-[#475569]
              transition
              hover:bg-[#F8FAFC]
              hover:text-[#111827]
            "
            aria-label="Close preview"
          >
            ×
          </button>
        </div>

        {/* PREVIEW */}

        <div
          className="
            flex-1
            overflow-auto
            bg-[#F8FAFC]
            p-6
            sm:p-10
          "
        >
          <div className="flex justify-center">
            <div
              className="
                relative
                h-[773px]
                w-[546px]
                shrink-0
                overflow-hidden
                bg-white
                shadow-2xl
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                "
                style={{
                  width: "794px",
                  height: "1123px",
                  transform: "scale(0.687657)",
                  transformOrigin: "top left",
                }}
              >
                <TemplatePreview
                  template={template}
                />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div
          className="
            flex
            shrink-0
            flex-col
            gap-3
            border-t
            border-[#E2E8F0]
            bg-white
            p-4
            sm:flex-row
            sm:justify-end
            sm:px-6
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-xl
              border
              border-[#E2E8F0]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-[#475569]
              transition
              hover:bg-[#F8FAFC]
              hover:text-[#111827]
            "
          >
            Close
          </button>

          <button
            type="button"
            onClick={() =>
              onUseTemplate(template)
            }
            className="
              rounded-xl
              bg-[#6366F1]
              px-6
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#4F46E5]
            "
          >
            Use This Template
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewModal;