import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { label: "Templates", id: "templates" },
    { label: "Features", id: "features" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Pricing", id: "pricing" },
  ]

  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // =====================================================
  // NAVIGATION
  // =====================================================

  const handleNavClick = (id) => {
    closeMenu()

    // If already on homepage
    if (location.pathname === "/") {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }

      return
    }

    // If on another page, go home first
    navigate("/")

    // Wait for Home page to render
    setTimeout(() => {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 100)
  }

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        px-3
        pt-3
        sm:px-5
      "
    >
      <nav
        className="
          relative
          mx-auto
          max-w-7xl
          rounded-buildcv-xl
          border
          border-white/70
          bg-white/80
          shadow-buildcv-md
          backdrop-blur-2xl
        "
      >
        {/* =================================================
            MAIN NAV
        ================================================= */}

        <div
          className="
            flex
            h-[68px]
            items-center
            justify-between
            px-3
            sm:px-5
            lg:px-6
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2.5"
          >
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-buildcv-md
                bg-gradient-to-br
                from-buildcv-violet
                via-buildcv-violet-500
                to-buildcv-accent
                font-display
                text-base
                font-extrabold
                text-white
                shadow-buildcv-violet
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:scale-105
              "
            >
              B
            </span>

            <span
              className="
                font-display
                text-lg
                font-extrabold
                tracking-tight
                text-buildcv-ink
                sm:text-xl
              "
            >
              Build
              <span className="text-buildcv-violet">
                CV
              </span>
            </span>
          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div
            className="
              hidden
              items-center
              gap-1
              rounded-full
              border
              border-buildcv-border-soft
              bg-white/60
              p-1
              md:flex
            "
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="
                  rounded-full
                  px-3.5
                  py-2
                  text-sm
                  font-medium
                  text-buildcv-text-secondary
                  transition-all
                  duration-300
                  hover:bg-buildcv-violet-50
                  hover:text-buildcv-violet
                  lg:px-4
                "
              >
                {link.label}
              </button>
            ))}
          </div>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="flex items-center gap-2 sm:gap-3">

          

            {/* =================================================
                CREATE RESUME
            ================================================= */}

            <Link
              to="/templates"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-buildcv-md
                bg-gradient-to-r
                from-buildcv-violet
                to-buildcv-accent
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-buildcv-violet
                transition-all
                duration-300
                hover:-translate-y-0.5
                sm:min-w-[150px]
                sm:px-5
              "
            >
              <span className="hidden sm:inline">
                Create Resume
              </span>

              <span className="sm:hidden">
                Create
              </span>

              <span>→</span>
            </Link>


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              aria-controls="mobile-navigation"
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              onClick={() =>
                setIsMenuOpen((open) => !open)
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-buildcv-md
                border
                border-buildcv-border
                bg-white/70
                text-buildcv-ink
                transition-all
                duration-300
                hover:border-buildcv-violet/30
                hover:bg-buildcv-violet-50
                hover:text-buildcv-violet
                md:hidden
              "
            >
              {isMenuOpen ? (
                <span className="text-xl leading-none">
                  ×
                </span>
              ) : (
                <span className="flex flex-col gap-1">
                  <span className="h-0.5 w-4 rounded-full bg-current" />
                  <span className="h-0.5 w-3 rounded-full bg-current" />
                  <span className="h-0.5 w-4 rounded-full bg-current" />
                </span>
              )}
            </button>

          </div>
        </div>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="
              border-t
              border-buildcv-border
              px-3
              pb-4
              pt-3
              md:hidden
            "
          >
            <div className="space-y-1">

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() =>
                    handleNavClick(link.id)
                  }
                  className="
                    block
                    w-full
                    rounded-buildcv-md
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-semibold
                    text-buildcv-text-secondary
                    transition
                    hover:bg-buildcv-violet-50
                    hover:text-buildcv-violet
                  "
                >
                  {link.label}
                </button>
              ))}


              {/* Mobile CTA */}

              <Link
                to="/builder"
                onClick={closeMenu}
                className="
                  mt-2
                  block
                  rounded-buildcv-md
                  bg-gradient-to-r
                  from-buildcv-violet
                  to-buildcv-accent
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-bold
                  text-white
                "
              >
                Create Resume →
              </Link>

            </div>
          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar
