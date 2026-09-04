import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import PreviewModal from "../components/templates/PreviewModal";
import TemplateCard from "../components/templates/TemplateCard";

/* =========================================================
   BUILDCV — 24 PREMIUM TEMPLATE DATA
========================================================= */

const templates = [
  {
    id: "classic",
    name: "Classic",
    category: "Professional",
    description:
      "A timeless resume layout designed for clarity, professionalism and strong first impressions.",
    ats: true,
    hasPhoto: false,
    featured: true,
  },
  {
    id: "minimal",
    name: "Minimal",
    category: "Minimal",
    description:
      "Clean typography, generous spacing and a distraction-free layout for modern professionals.",
    ats: true,
    hasPhoto: false,
  },
  {
    id: "bold",
    name: "Bold",
    category: "Creative",
    description:
      "Strong typography and confident visual hierarchy for people who want their resume noticed.",
    ats: false,
    hasPhoto: true,
  },
  {
    id: "clean",
    name: "Clean",
    category: "Professional",
    description:
      "A polished and highly readable layout that keeps your experience at the center.",
    ats: true,
    hasPhoto: false,
  },
  {
    id: "modern",
    name: "Modern",
    category: "Modern",
    description:
      "Contemporary structure with elegant accents for today's digital professionals.",
    ats: true,
    hasPhoto: true,
  },
  {
    id: "professional",
    name: "Professional",
    category: "Professional",
    description:
      "Corporate-ready design built for recruiters, hiring managers and serious applications.",
    ats: true,
    hasPhoto: false,
  },
  {
    id: "executive",
    name: "Executive",
    category: "Executive",
    description:
      "Premium executive styling for senior professionals, managers and leadership roles.",
    ats: true,
    hasPhoto: false,
  },
  {
    id: "tech",
    name: "Tech",
    category: "Technology",
    description:
      "A technical resume system designed for developers, engineers and technology professionals.",
    ats: true,
    hasPhoto: false,
  },
  {
    id: "elegant",
    name: "Elegant",
    category: "Elegant",
    description:
      "Sophisticated typography and refined spacing create an effortlessly premium appearance.",
    ats: true,
    hasPhoto: true,
  },
  {
    id: "academic",
    name: "Academic",
    category: "Academic",
    description:
      "Structured academic CV layout for researchers, graduates and university applications.",
    ats: true,
    hasPhoto: false,
  },
  {
    id: "creative",
    name: "Creative",
    category: "Creative",
    description:
      "A visually expressive layout for designers, developers and creative professionals.",
    ats: false,
    hasPhoto: true,
  },
  {
    id: "portfolio",
    name: "Portfolio",
    category: "Portfolio",
    description:
      "Project-first resume design made for creators who want their work to stand out.",
    ats: false,
    hasPhoto: true,
  },
  {
    id: "aurora",
    name: "Aurora",
    category: "Modern",
    description:
      "Soft gradients, contemporary composition and a distinctive digital-product aesthetic.",
    ats: false,
    hasPhoto: true,
  },
  {
    id: "monarch",
    name: "Monarch",
    category: "Executive",
    description:
      "Luxury-inspired styling for leadership, consulting and high-level professional profiles.",
    ats: true,
    hasPhoto: true,
  },
  {
    id: "nexus",
    name: "Nexus",
    category: "Technology",
    description:
      "Structured technology-focused resume with a strong engineering personality.",
    ats: true,
    hasPhoto: false,
  },
  {
    id: "sage",
    name: "Sage",
    category: "Modern",
    description:
      "Calm editorial styling combining natural tones with a highly professional structure.",
    ats: true,
    hasPhoto: false,
  },
  {
    id: "vertex",
    name: "Vertex",
    category: "Technology",
    description:
      "Futuristic technical resume inspired by interfaces, systems and digital architecture.",
    ats: true,
    hasPhoto: true,
  },
  {
    id: "muse",
    name: "Muse",
    category: "Creative",
    description:
      "Expressive editorial layout for designers, developers and creative thinkers.",
    ats: false,
    hasPhoto: true,
  },
  {
    id: "orbit",
    name: "Orbit",
    category: "Technology",
    description:
      "Dark futuristic composition built around career progression and technical expertise.",
    ats: false,
    hasPhoto: true,
  },
  {
    id: "noir",
    name: "Noir",
    category: "Creative",
    description:
      "Dramatic dark editorial design for confident creative and technology professionals.",
    ats: false,
    hasPhoto: true,
  },
  {
    id: "coral",
    name: "Coral",
    category: "Creative",
    description:
      "Energetic coral palette with expressive typography and approachable personality.",
    ats: false,
    hasPhoto: true,
  },
  {
    id: "ocean",
    name: "Ocean",
    category: "Professional",
    description:
      "Calm blue professional design that communicates reliability and technical confidence.",
    ats: true,
    hasPhoto: false,
  },
  {
    id: "stellar",
    name: "Stellar",
    category: "Modern",
    description:
      "A premium space-inspired resume combining strong typography with futuristic details.",
    ats: false,
    hasPhoto: true,
  },
  {
    id: "atelier",
    name: "Atelier",
    category: "Creative",
    description:
      "Editorial portfolio-inspired design for visual designers, developers and makers.",
    ats: false,
    hasPhoto: true,
  },
];

const filters = [
  "All",
  "Professional",
  "Minimal",
  "Modern",
  "Creative",
  "Executive",
  "Technology",
  "Academic",
  "Portfolio",
  "ATS",
];

/* =========================================================
   MAIN TEMPLATES PAGE
========================================================= */

export default function Templates() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const handleUseTemplate = (template) => {
    if (!template?.id) {
      return;
    }

    localStorage.setItem(
      "buildcv-selected-template",
      template.id
    );

    localStorage.setItem(
      "buildcv-template",
      template.id
    );

    navigate("/builder", {
      state: {
        selectedTemplate: template.id,
      },
    });
  };

  /* =======================================================
     FILTER + SEARCH
  ======================================================= */

  const filteredTemplates = useMemo(() => {
    let result = templates;

    if (activeFilter === "ATS") {
      result = result.filter(
        (template) => template.ats
      );
    } else if (activeFilter !== "All") {
      result = result.filter(
        (template) =>
          template.category === activeFilter
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      result = result.filter(
        (template) =>
          template.name
            .toLowerCase()
            .includes(query) ||
          template.category
            .toLowerCase()
            .includes(query) ||
          template.description
            .toLowerCase()
            .includes(query)
      );
    }

    return result;
  }, [activeFilter, searchQuery]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="pointer-events-none absolute left-[5%] top-[40%] h-40 w-40 rounded-full bg-fuchsia-200/20 blur-3xl" />

        <div className="pointer-events-none absolute right-[5%] top-[25%] h-40 w-40 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-700 shadow-sm">
            <span className="text-indigo-500">✦</span>

            24 Premium Resume Templates

            <span className="rounded-full bg-white px-2 py-0.5 text-[9px] text-indigo-600">
              FREE
            </span>
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Design a Resume
            <br className="sm:hidden" />{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              They Remember
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Choose from professionally crafted templates
            designed for recruiters, creatives, developers,
            executives and ambitious professionals.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="text-indigo-500">✦</span>
              24 Unique Designs
            </span>

            <span className="hidden text-slate-300 sm:block">
              •
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span>
              ATS-Friendly Options
            </span>

            <span className="hidden text-slate-300 sm:block">
              •
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-violet-500">✦</span>
              Photo & Non-Photo
            </span>
          </div>

          <div className="mx-auto mt-9 max-w-xl">
            <div className="group relative">
              <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search templates, styles or categories..."
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-12 pr-5 text-sm font-medium text-slate-700 shadow-lg shadow-slate-200/50 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          TEMPLATE SECTION
      =================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => {
              const isActive =
                activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() =>
                    setActiveFilter(filter)
                  }
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                  }`}
                >
                  {filter}

                  {filter === "ATS" && (
                    <span
                      className={`ml-1.5 ${
                        isActive
                          ? "text-indigo-100"
                          : "text-emerald-500"
                      }`}
                    >
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* RESULT HEADER */}

        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                {activeFilter === "All"
                  ? "All Templates"
                  : activeFilter}
              </h2>

              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-bold text-indigo-600">
                {filteredTemplates.length}
              </span>
            </div>

            <p className="mt-1.5 text-sm text-slate-500">
              {searchQuery
                ? `Results for "${searchQuery}"`
                : "Choose a design that matches your professional story."}
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Designed for first impressions
          </div>
        </div>

        {/* GRID */}

        {filteredTemplates.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onPreview={setPreviewTemplate}
                onUseTemplate={handleUseTemplate}
              />
            ))}
          </div>
        ) : (
          /* EMPTY STATE */

          <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-2xl text-indigo-600">
              ✦
            </div>

            <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
              No templates found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              We couldn't find a template matching your
              search. Try another keyword or browse all
              designs.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("All");
                }}
                className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                View All Templates
              </button>

              {searchQuery && (
                <button
                  type="button"
                  onClick={() =>
                    setSearchQuery("")
                  }
                  className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>
        )}
      </section>

      {/* ===================================================
          BOTTOM CTA
      =================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-slate-950 px-6 py-12 text-center text-white sm:px-10">
          <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-indigo-600/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-violet-600/30 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-200">
              Your next opportunity starts here
            </span>

            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Pick your design.
              <br />
              Build your future.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60">
              Every BuildCV template is completely customizable.
              Choose a design and make it yours.
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveFilter("All");

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="mt-7 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Explore All Templates
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================
          PREVIEW MODAL
      =================================================== */}

      <PreviewModal
        template={previewTemplate}
        onClose={() =>
          setPreviewTemplate(null)
        }
        onUseTemplate={handleUseTemplate}
      />
    </main>
  );
}