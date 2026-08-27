import { useState } from "react"

function Skills({ formData, setFormData }) {
  const [skillInput, setSkillInput] = useState("")

  const skills = formData.skills || []

  // =====================================================
  // ADD SKILL
  // =====================================================

  const addSkill = () => {
    const newSkill = skillInput.trim()

    if (!newSkill) return

    const alreadyExists = skills.some(
      (skill) =>
        skill.toLowerCase() === newSkill.toLowerCase()
    )

    if (alreadyExists) {
      setSkillInput("")
      return
    }

    setFormData((previous) => ({
      ...previous,
      skills: [...(previous.skills || []), newSkill],
    }))

    setSkillInput("")
  }

  // =====================================================
  // REMOVE SKILL
  // =====================================================

  const removeSkill = (skillToRemove) => {
    setFormData((previous) => ({
      ...previous,
      skills: (previous.skills || []).filter(
        (skill) => skill !== skillToRemove
      ),
    }))
  }

  // =====================================================
  // ADD POPULAR SKILL
  // =====================================================

  const addPopularSkill = (skillToAdd) => {
    const alreadyExists = skills.some(
      (skill) =>
        skill.toLowerCase() === skillToAdd.toLowerCase()
    )

    if (alreadyExists) return

    setFormData((previous) => ({
      ...previous,
      skills: [...(previous.skills || []), skillToAdd],
    }))
  }

  // =====================================================
  // KEYBOARD
  // =====================================================

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      addSkill()
    }
  }

  return (
    <div
      className="
        rounded-buildcv-2xl
        border
        border-buildcv-border
        bg-white
        p-6
        shadow-buildcv-sm
        sm:p-8
      "
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-8">

        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-buildcv-indigo
          "
        >
          Step 5
        </span>

        <h2
          className="
            mt-2
            font-display
            text-2xl
            font-bold
            text-buildcv-navy
          "
        >
          Skills
        </h2>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-buildcv-text-secondary
          "
        >
          Add the skills that best describe your abilities
          and experience.
        </p>

      </div>


      {/* =================================================
          SKILL INPUT
      ================================================= */}

      <div>

        <label
          htmlFor="skillInput"
          className="
            mb-2
            block
            text-sm
            font-semibold
            text-buildcv-navy
          "
        >
          Add a Skill
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">

          <input
            id="skillInput"
            type="text"
            value={skillInput}
            onChange={(event) =>
              setSkillInput(event.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="e.g. React.js"
            className="
              min-w-0
              flex-1
              rounded-buildcv-md
              border
              border-buildcv-border
              bg-white
              px-4
              py-3
              text-sm
              text-buildcv-navy
              outline-none
              transition-all
              duration-200
              placeholder:text-buildcv-text-muted
              focus:border-buildcv-indigo
              focus:ring-4
              focus:ring-buildcv-indigo/10
            "
          />

          <button
            type="button"
            onClick={addSkill}
            className="
              rounded-buildcv-md
              bg-buildcv-indigo
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-buildcv-indigo-600
              focus:outline-none
              focus:ring-4
              focus:ring-buildcv-indigo/20
            "
          >
            Add Skill
          </button>

        </div>

        <p
          className="
            mt-2
            text-xs
            text-buildcv-text-muted
          "
        >
          Press Enter or click "Add Skill" to add it.
        </p>

      </div>


      {/* =================================================
          SKILLS LIST
      ================================================= */}

      <div className="mt-8">

        <div className="mb-3 flex items-center justify-between">

          <h3
            className="
              text-sm
              font-semibold
              text-buildcv-navy
            "
          >
            Your Skills
          </h3>

          <span
            className="
              text-xs
              font-medium
              text-buildcv-text-muted
            "
          >
            {skills.length}{" "}
            {skills.length === 1 ? "skill" : "skills"}
          </span>

        </div>


        {skills.length > 0 ? (

          <div
            className="
              flex
              flex-wrap
              gap-2
              rounded-buildcv-xl
              border
              border-buildcv-border
              bg-buildcv-background
              p-5
            "
          >

            {skills.map((skill) => (

              <div
                key={skill}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-buildcv-indigo-50
                  px-3.5
                  py-2
                  text-sm
                  font-medium
                  text-buildcv-indigo
                "
              >

                <span>
                  {skill}
                </span>

                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  aria-label={`Remove ${skill}`}
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    text-buildcv-indigo
                    transition-colors
                    duration-150
                    hover:bg-buildcv-indigo
                    hover:text-white
                  "
                >
                  ×
                </button>

              </div>

            ))}

          </div>

        ) : (

          <div
            className="
              rounded-buildcv-xl
              border
              border-dashed
              border-buildcv-border
              bg-buildcv-background
              px-6
              py-10
              text-center
            "
          >

            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-buildcv-indigo-50
                text-xl
                text-buildcv-indigo
              "
            >
              +
            </div>

            <h3
              className="
                mt-4
                font-display
                text-lg
                font-bold
                text-buildcv-navy
              "
            >
              No skills added yet
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-sm
                text-sm
                leading-6
                text-buildcv-text-secondary
              "
            >
              Start adding your technical and professional
              skills above.
            </p>

          </div>

        )}

      </div>


      {/* =================================================
          POPULAR SKILLS
      ================================================= */}

      <div className="mt-8">

        <p
          className="
            mb-3
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-buildcv-text-muted
          "
        >
          Popular Skills
        </p>

        <div className="flex flex-wrap gap-2">

          {[
            "JavaScript",
            "React",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Python",
            "Git",
            "SQL",
          ].map((skill) => {

            const isAdded = skills.some(
              (item) =>
                item.toLowerCase() === skill.toLowerCase()
            )

            return (
              <button
                key={skill}
                type="button"
                onClick={() => addPopularSkill(skill)}
                disabled={isAdded}
                className={`
                  rounded-full
                  border
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  transition-all
                  duration-200

                  ${
                    isAdded
                      ? `
                        cursor-not-allowed
                        border-buildcv-indigo/20
                        bg-buildcv-indigo-50
                        text-buildcv-indigo/50
                      `
                      : `
                        border-buildcv-border
                        bg-white
                        text-buildcv-text-secondary
                        hover:border-buildcv-indigo
                        hover:bg-buildcv-indigo-50
                        hover:text-buildcv-indigo
                      `
                  }
                `}
              >
                {isAdded ? "✓ " : "+ "}
                {skill}
              </button>
            )
          })}

        </div>

      </div>

    </div>
  )
}

export default Skills