import { useRef, useState } from "react"

function PersonalInfo({ formData, setFormData }) {
  const fileInputRef = useRef(null)

  const [error, setError] = useState("")
  const [isDragging, setIsDragging] = useState(false)

  // =====================================================
  // TEXT INPUT HANDLER
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  // =====================================================
  // PROFILE IMAGE
  // =====================================================

  const processImage = (file) => {
    if (!file) return

    setError("")

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ]

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a JPG, PNG, or WEBP image.")
      return
    }

    const maxSize = 2 * 1024 * 1024

    if (file.size > maxSize) {
      setError("Image size must be smaller than 2MB.")
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      setFormData((previous) => ({
        ...previous,
        profileImage: reader.result,
      }))
    }

    reader.onerror = () => {
      setError("Unable to read this image. Please try again.")
    }

    reader.readAsDataURL(file)
  }

  const handleImageChange = (event) => {
    const file = event.target.files?.[0]

    processImage(file)

    event.target.value = ""
  }

  const handleDragOver = (event) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (event) => {
    event.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (event) => {
    event.preventDefault()
    setIsDragging(false)

    const file = event.dataTransfer.files?.[0]

    processImage(file)
  }

  const openFileSelector = () => {
    fileInputRef.current?.click()
  }

  const removeImage = () => {
    setFormData((previous) => ({
      ...previous,
      profileImage: "",
    }))

    setError("")
  }

  // =====================================================
  // COMPLETION
  // =====================================================

  const fields = {
    profileImage: Boolean(formData.profileImage),
    fullName: Boolean(formData.fullName?.trim()),
    jobTitle: Boolean(formData.jobTitle?.trim()),
    email: Boolean(formData.email?.trim()),
    phone: Boolean(formData.phone?.trim()),
    location: Boolean(formData.location?.trim()),
    linkedin: Boolean(formData.linkedin?.trim()),
    github: Boolean(formData.github?.trim()),
  }

  const completedFields = Object.values(fields).filter(Boolean).length
  const totalFields = Object.keys(fields).length

  const completionPercentage =
    totalFields > 0
      ? Math.round((completedFields / totalFields) * 100)
      : 0

  // =====================================================
  // SHARED INPUT STYLE
  // =====================================================

  const inputClass = `
    w-full
    rounded-buildcv-lg
    border
    border-buildcv-navy-700
    bg-buildcv-navy-800
    px-4
    py-3
    text-sm
    font-medium
    text-buildcv-text
    outline-none
    transition-all
    duration-200
    placeholder:text-buildcv-text-muted
    hover:border-buildcv-indigo/40
    focus:border-buildcv-indigo
    focus:bg-buildcv-navy
    focus:ring-4
    focus:ring-buildcv-indigo/10
  `

  // =====================================================
  // SECTION TITLE
  // =====================================================

  const sectionTitleClass = `
    text-sm
    font-bold
    text-buildcv-text
  `

  const sectionDescriptionClass = `
    mt-1
    text-xs
    leading-5
    text-buildcv-text-muted
  `

  return (
    <section
      className="
        overflow-hidden
        rounded-buildcv-2xl
        border
        border-buildcv-navy-700
        bg-buildcv-navy
        shadow-buildcv-md
      "
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          border-b
          border-buildcv-navy-700
          bg-buildcv-navy
          px-5
          py-6
          sm:px-7
          sm:py-7
        "
      >
        <div className="flex items-start gap-4">

          {/* Header Icon */}

          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-buildcv-md
              border
              border-buildcv-indigo/20
              bg-buildcv-indigo/10
              text-buildcv-indigo-400
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <circle cx="12" cy="8" r="3.5" />

              <path
                strokeLinecap="round"
                d="M5.5 20c.8-3.3 3.1-5 6.5-5s5.7 1.7 6.5 5"
              />
            </svg>
          </div>

          {/* Header Text */}

          <div className="min-w-0">

            <div className="flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-buildcv-indigo
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-buildcv-indigo-400
                "
              >
                Step 01
              </span>
            </div>

            <h2
              className="
                mt-2
                font-display
                text-2xl
                font-bold
                tracking-tight
                text-buildcv-text
                sm:text-3xl
              "
            >
              Personal information
            </h2>

            <p
              className="
                mt-2
                max-w-xl
                text-sm
                leading-6
                text-buildcv-text-secondary
              "
            >
              Add your photo, contact details, and professional
              identity. These details will appear at the top of
              your resume.
            </p>

          </div>
        </div>
      </div>

      {/* =====================================================
          FORM CONTENT
      ====================================================== */}

      <div className="p-5 sm:p-7">

        {/* =====================================================
            PROFILE PHOTO
        ====================================================== */}

        <div>

          <div className="mb-5">

            <div className="flex items-center gap-3">

              <h3 className={sectionTitleClass}>
                Profile photo
              </h3>

              <div className="h-px flex-1 bg-buildcv-navy-700" />

              <span
                className="
                  rounded-full
                  border
                  border-buildcv-navy-700
                  bg-buildcv-navy-800
                  px-2.5
                  py-1
                  text-[10px]
                  font-semibold
                  text-buildcv-text-muted
                "
              >
                Optional
              </span>

            </div>

            <p className={sectionDescriptionClass}>
              Add a professional photo to personalize your resume.
            </p>

          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-6
              lg:grid-cols-[auto_1fr]
              lg:items-center
            "
          >

            {/* =================================================
                IMAGE PREVIEW
            ================================================== */}

            <div className="flex justify-center lg:justify-start">

              {formData.profileImage ? (

                <div
                  className="
                    relative
                    h-36
                    w-36
                    sm:h-40
                    sm:w-40
                  "
                >

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-buildcv-indigo/30
                      bg-buildcv-navy-800
                      p-1
                      shadow-buildcv-md
                    "
                  >
                    <img
                      src={formData.profileImage}
                      alt="Profile preview"
                      className="
                        h-full
                        w-full
                        rounded-full
                        object-cover
                      "
                    />
                  </div>

                  {/* Change Photo */}

                  <button
                    type="button"
                    onClick={openFileSelector}
                    aria-label="Change profile photo"
                    className="
                      absolute
                      bottom-1
                      right-1
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-buildcv-navy
                      bg-buildcv-indigo
                      text-white
                      shadow-buildcv-md
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:bg-buildcv-indigo-600
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 3.487 3.651 3.651"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 19l3.5-.5L19.5 7.5a2.121 2.121 0 0 0-3-3L5.5 15.5 5 19Z"
                      />
                    </svg>
                  </button>

                </div>

              ) : (

                <button
                  type="button"
                  onClick={openFileSelector}
                  className="
                    group
                    flex
                    h-36
                    w-36
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-dashed
                    border-buildcv-navy-700
                    bg-buildcv-navy-800
                    transition-all
                    duration-200
                    hover:border-buildcv-indigo/50
                    hover:bg-buildcv-indigo/5
                    sm:h-40
                    sm:w-40
                  "
                >

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="
                      h-8
                      w-8
                      text-buildcv-text-muted
                      transition-colors
                      group-hover:text-buildcv-indigo-400
                    "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 21a8 8 0 0 1 16 0"
                    />
                  </svg>

                  <span
                    className="
                      mt-2
                      text-[11px]
                      font-semibold
                      text-buildcv-text-muted
                      group-hover:text-buildcv-indigo-400
                    "
                  >
                    Add photo
                  </span>

                </button>
              )}

            </div>

            {/* =================================================
                UPLOAD AREA
            ================================================== */}

            <div className="min-w-0">

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                  rounded-buildcv-xl
                  border-2
                  border-dashed
                  p-5
                  transition-all
                  duration-200
                  sm:p-6

                  ${
                    isDragging
                      ? `
                        border-buildcv-indigo
                        bg-buildcv-indigo/10
                      `
                      : `
                        border-buildcv-navy-700
                        bg-buildcv-navy-800
                        hover:border-buildcv-indigo/40
                      `
                  }
                `}
              >

                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-buildcv-md
                      border
                      border-buildcv-indigo/15
                      bg-buildcv-indigo/10
                      text-buildcv-indigo-400
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
                        d="M12 16V4m0 0L8 8m4-4 4 4"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">

                    <p
                      className="
                        text-sm
                        font-bold
                        text-buildcv-text
                      "
                    >
                      {formData.profileImage
                        ? "Replace your profile photo"
                        : "Upload your profile photo"}
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-buildcv-text-secondary
                      "
                    >
                      Drag and drop your image here, or{" "}

                      <button
                        type="button"
                        onClick={openFileSelector}
                        className="
                          font-semibold
                          text-buildcv-indigo-400
                          transition-colors
                          hover:text-buildcv-indigo
                        "
                      >
                        browse files
                      </button>
                    </p>

                    <p
                      className="
                        mt-2
                        text-[11px]
                        text-buildcv-text-muted
                      "
                    >
                      JPG, PNG or WEBP • Maximum 2MB
                    </p>

                  </div>

                </div>
              </div>

              {/* Remove Photo */}

              {formData.profileImage && (
                <div className="mt-3 flex justify-end">

                  <button
                    type="button"
                    onClick={removeImage}
                    className="
                      rounded-buildcv-md
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-red-400
                      transition-colors
                      hover:bg-red-500/10
                    "
                  >
                    Remove photo
                  </button>

                </div>
              )}

            </div>
          </div>

          {/* Error */}

          {error && (
            <div
              className="
                mt-4
                flex
                items-start
                gap-2
                rounded-buildcv-md
                border
                border-red-500/20
                bg-red-500/10
                px-4
                py-3
                text-xs
                text-red-400
              "
            >
              <span className="font-bold">!</span>
              <span>{error}</span>
            </div>
          )}

        </div>

        {/* =====================================================
            BASIC INFORMATION
        ====================================================== */}

        <div className="mt-10">

          <div className="mb-5">

            <div className="flex items-center gap-3">

              <h3 className={sectionTitleClass}>
                Basic information
              </h3>

              <div className="h-px flex-1 bg-buildcv-navy-700" />

            </div>

            <p className={sectionDescriptionClass}>
              Tell employers who you are.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5">

            {/* Full Name */}

            <div>

              <label
                htmlFor="fullName"
                className="
                  mb-2
                  flex
                  items-center
                  justify-between
                  text-sm
                  font-semibold
                  text-buildcv-text
                "
              >
                <span>
                  Full name
                  <span className="ml-1 text-buildcv-indigo-400">
                    *
                  </span>
                </span>

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wide
                    text-buildcv-text-muted
                  "
                >
                  Required
                </span>
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName || ""}
                onChange={handleChange}
                placeholder="e.g. Arwa Khan"
                autoComplete="name"
                className={inputClass}
              />

              <p
                className="
                  mt-1.5
                  text-xs
                  text-buildcv-text-muted
                "
              >
                Use the name you want employers to see.
              </p>

            </div>

            {/* Professional Title */}

            <div>

              <label
                htmlFor="jobTitle"
                className="
                  mb-2
                  flex
                  items-center
                  justify-between
                  text-sm
                  font-semibold
                  text-buildcv-text
                "
              >
                <span>
                  Professional title
                  <span className="ml-1 text-buildcv-indigo-400">
                    *
                  </span>
                </span>

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wide
                    text-buildcv-text-muted
                  "
                >
                  Required
                </span>
              </label>

              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                value={formData.jobTitle || ""}
                onChange={handleChange}
                placeholder="e.g. Frontend Developer"
                autoComplete="organization-title"
                className={inputClass}
              />

              <p
                className="
                  mt-1.5
                  text-xs
                  text-buildcv-text-muted
                "
              >
                Your target role or professional specialization.
              </p>

            </div>

          </div>
        </div>

        {/* =====================================================
            CONTACT INFORMATION
        ====================================================== */}

        <div className="mt-10">

          <div className="mb-5">

            <div className="flex items-center gap-3">

              <h3 className={sectionTitleClass}>
                Contact information
              </h3>

              <div className="h-px flex-1 bg-buildcv-navy-700" />

            </div>

            <p className={sectionDescriptionClass}>
              Give employers a way to reach you.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Email */}

            <div>

              <label
                htmlFor="email"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-buildcv-text
                "
              >
                Email address
                <span className="ml-1 text-buildcv-indigo-400">
                  *
                </span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className={inputClass}
              />

            </div>

            {/* Phone */}

            <div>

              <label
                htmlFor="phone"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-buildcv-text
                "
              >
                Phone number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                autoComplete="tel"
                className={inputClass}
              />

            </div>

            {/* Location */}

            <div className="sm:col-span-2">

              <label
                htmlFor="location"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-buildcv-text
                "
              >
                Location
              </label>

              <input
                id="location"
                name="location"
                type="text"
                value={formData.location || ""}
                onChange={handleChange}
                placeholder="e.g. Islamabad, Pakistan"
                autoComplete="address-level2"
                className={inputClass}
              />

            </div>

          </div>
        </div>

        {/* =====================================================
            ONLINE PRESENCE
        ====================================================== */}

        <div className="mt-10">

          <div className="mb-5">

            <div className="flex items-center gap-3">

              <h3 className={sectionTitleClass}>
                Online presence
              </h3>

              <div className="h-px flex-1 bg-buildcv-navy-700" />

              <span
                className="
                  rounded-full
                  border
                  border-buildcv-navy-700
                  bg-buildcv-navy-800
                  px-2.5
                  py-1
                  text-[10px]
                  font-semibold
                  text-buildcv-text-muted
                "
              >
                Optional
              </span>

            </div>

            <p className={sectionDescriptionClass}>
              Add professional profiles to strengthen your resume.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* LinkedIn */}

            <div>

              <label
                htmlFor="linkedin"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-buildcv-text
                "
              >
                LinkedIn
              </label>

              <div className="relative">

                <span
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-xs
                    font-bold
                    text-buildcv-indigo-400
                  "
                >
                  in
                </span>

                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  value={formData.linkedin || ""}
                  onChange={handleChange}
                  placeholder="linkedin.com/in/yourname"
                  className={`${inputClass} pl-10`}
                />

              </div>

            </div>

            {/* GitHub */}

            <div>

              <label
                htmlFor="github"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-buildcv-text
                "
              >
                GitHub
              </label>

              <div className="relative">

                <span
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[10px]
                    font-bold
                    text-buildcv-indigo-400
                  "
                >
                  GH
                </span>

                <input
                  id="github"
                  name="github"
                  type="url"
                  value={formData.github || ""}
                  onChange={handleChange}
                  placeholder="github.com/yourname"
                  className={`${inputClass} pl-10`}
                />

              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            PROFESSIONAL TIP
        ====================================================== */}

        <div
          className="
            mt-10
            flex
            items-start
            gap-3
            rounded-buildcv-lg
            border
            border-buildcv-indigo/20
            bg-buildcv-indigo/5
            px-4
            py-3.5
          "
        >

          <span
            className="
              flex
              h-6
              w-6
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-buildcv-indigo/15
              text-[10px]
              font-bold
              text-buildcv-indigo-400
            "
          >
            i
          </span>

          <div>

            <p
              className="
                text-xs
                font-semibold
                text-buildcv-text
              "
            >
              Keep it professional
            </p>

            <p
              className="
                mt-0.5
                text-xs
                leading-5
                text-buildcv-text-secondary
              "
            >
              Use a professional email address and make sure
              your LinkedIn and GitHub profiles are up to date.
            </p>

          </div>

        </div>

        {/* =====================================================
            COMPLETION BAR
        ====================================================== */}

        <div className="mt-8">

          <div className="flex items-center justify-between">

            <p
              className="
                text-xs
                font-semibold
                text-buildcv-text
              "
            >
              Personal information progress
            </p>

            <span
              className="
                text-xs
                font-bold
                text-buildcv-indigo-400
              "
            >
              {completionPercentage}%
            </span>

          </div>

          <div
            className="
              mt-2
              h-1.5
              overflow-hidden
              rounded-full
              bg-buildcv-navy-800
            "
          >
            <div
              className="
                h-full
                rounded-full
                bg-buildcv-indigo
                shadow-[0_0_12px_rgba(99,102,241,0.35)]
                transition-all
                duration-500
                ease-out
              "
              style={{
                width: `${completionPercentage}%`,
              }}
            />
          </div>

        </div>

      </div>

      {/* =====================================================
          HIDDEN FILE INPUT
      ====================================================== */}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleImageChange}
        className="hidden"
        aria-label="Upload profile photo"
      />

    </section>
  )
}

export default PersonalInfo