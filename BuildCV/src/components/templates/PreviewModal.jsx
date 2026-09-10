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
        p-3
        backdrop-blur-sm
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="template-preview-title"
        className="
          flex
          max-h-[95vh]
          w-full
          max-w-6xl
          flex-col
          overflow-hidden
          rounded-2xl
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
            <h2
              id="template-preview-title"
              className="text-lg font-bold text-[#111827]"
            >
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
            p-3
            sm:p-10
          "
        >
          <div className="flex justify-center">
            <div
              className="
                relative
                h-[460px]
                w-[325px]
                shrink-0
                overflow-hidden
                bg-white
                shadow-2xl
                sm:h-[773px]
                sm:w-[546px]
              "
            >
              <div
                className="
                  template-modal-canvas
                  absolute
                  left-0
                  top-0
                "
              >
                <TemplatePreview
                  template={template}
                  useSampleData={true}
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
            min-h-11
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
            Continue Browsing
          </button>

          <button
            type="button"
            onClick={() =>
              onUseTemplate(template)
            }
            className="
            min-h-11
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
