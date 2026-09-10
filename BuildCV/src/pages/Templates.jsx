import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import PreviewModal from "../components/templates/PreviewModal"
import TemplateRecommendation from "./TemplateRecommendation";
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
  const [showRecommendation, setShowRecommendation] = useState(false);

  /* =======================================================
     USE TEMPLATE
  ======================================================= */

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
    <main className="min-h-screen bg-buildcv-background text-buildcv-text">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden border-b border-buildcv-border bg-buildcv-surface">
        {/* Center Violet Glow */}
        <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-buildcv-violet/20 blur-3xl" />

        {/* Left Pink Glow */}
        <div className="pointer-events-none absolute left-[5%] top-[40%] h-40 w-40 rounded-full bg-buildcv-accent/15 blur-3xl" />

        {/* Right Violet Glow */}
        <div className="pointer-events-none absolute right-[5%] top-[25%] h-40 w-40 rounded-full bg-buildcv-violet/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-buildcv-border-violet bg-buildcv-violet-50 px-4 py-1.5 text-xs font-bold text-buildcv-violet shadow-sm">
            <span className="text-buildcv-violet-500">
              ✦
            </span>

            24 Premium Resume Templates

            <span className="rounded-full bg-buildcv-surface px-2 py-0.5 text-[9px] text-buildcv-violet-600">
              FREE
            </span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold tracking-tight text-buildcv-ink sm:text-5xl lg:text-6xl">
            Design a Resume
            <br className="sm:hidden" />{" "}
            <span className="bg-gradient-to-r from-buildcv-violet via-buildcv-violet-500 to-buildcv-accent bg-clip-text text-transparent">
              They Remember
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-buildcv-text-secondary sm:text-lg">
            Choose from professionally crafted templates
            designed for recruiters, creatives, developers,
            executives and ambitious professionals.
          </p>

          {/* Feature Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-buildcv-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="text-buildcv-violet-500">
                ✦
              </span>
              24 Unique Designs
            </span>

            <span className="hidden text-buildcv-border-strong sm:block">
              •
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-buildcv-success">
                ✓
              </span>
              ATS-Friendly Options
            </span>

            <span className="hidden text-buildcv-border-strong sm:block">
              •
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-buildcv-accent">
                ✦
              </span>
              Photo & Non-Photo
            </span>
          </div>

          {/* Search */}
          <div className="mx-auto mt-9 max-w-xl">
            <div className="group relative">
              <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-buildcv-text-muted">
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
                className="h-13 w-full rounded-2xl border border-buildcv-border bg-buildcv-surface px-12 pr-5 text-sm font-medium text-buildcv-text outline-none shadow-buildcv-lg transition placeholder:text-buildcv-text-muted focus:border-buildcv-violet-300 focus:ring-4 focus:ring-buildcv-violet/10"
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
          <div className="relative overflow-hidden rounded-[28px] border border-buildcv-ink bg-buildcv-ink shadow-buildcv-sm">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-buildcv-violet/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-buildcv-accent/15 blur-3xl" />

            <div className="relative flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-8">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-buildcv-violet/15 text-2xl text-buildcv-violet shadow-sm">
                  ✦
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-xl font-bold tracking-tight text-buildcv-white sm:text-2xl">
                      Not sure which template to choose?
                    </h2>

                    <span className="rounded-full border border-buildcv-violet/30 bg-buildcv-violet/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-buildcv-violet">
                      Smart Match
                    </span>
                  </div>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
                    Answer a few quick questions and BuildCV will recommend the template
                    that best matches your career, experience and resume goals.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={() => setShowRecommendation(true)}
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-buildcv-white px-6 py-3.5 text-sm font-bold text-buildcv-ink shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-buildcv-violet hover:text-buildcv-white"
              >
                Find My Template

                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => {
              const isActive =
                activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${isActive
                      ? "bg-buildcv-ink text-buildcv-white shadow-lg"
                      : "border border-buildcv-border bg-buildcv-surface text-buildcv-ink-600 hover:border-buildcv-border-violet hover:bg-buildcv-violet-50 hover:text-buildcv-violet"
                    }`}
                >
                  {filter}

                  {filter === "ATS" && (
                    <span
                      className={`ml-1.5 ${isActive
                          ? "text-white/80"
                          : "text-buildcv-success"
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

        {/* =================================================
            RESULT HEADER
        ================================================= */}

        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-bold tracking-tight text-buildcv-ink">
                {activeFilter === "All"
                  ? "All Templates"
                  : activeFilter}
              </h2>

              <span className="rounded-full bg-buildcv-violet-50 px-2.5 py-1 text-[10px] font-bold text-buildcv-violet">
                {filteredTemplates.length}
              </span>
            </div>

            <p className="mt-1.5 text-sm text-buildcv-text-muted">
              {searchQuery
                ? `Results for "${searchQuery}"`
                : "Choose a design that matches your professional story."}
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-buildcv-border bg-buildcv-surface px-4 py-2 text-xs font-semibold text-buildcv-text-muted shadow-buildcv-sm sm:flex">
            <span className="h-2 w-2 rounded-full bg-buildcv-success" />
            Designed for first impressions
          </div>
        </div>

        {/* =================================================
            GRID
        ================================================= */}

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
          /* =================================================
             EMPTY STATE
          ================================================= */

          <div className="rounded-buildcv-3xl border border-buildcv-border bg-buildcv-surface px-6 py-20 text-center shadow-buildcv-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-buildcv-violet-50 text-2xl text-buildcv-violet">
              ✦
            </div>

            <h3 className="mt-5 font-display text-xl font-bold text-buildcv-ink">
              No templates found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-buildcv-text-muted">
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
                className="rounded-xl bg-buildcv-gradient px-5 py-2.5 text-sm font-semibold text-buildcv-white shadow-buildcv-violet transition hover:-translate-y-0.5"
              >
                View All Templates
              </button>

              {searchQuery && (
                <button
                  type="button"
                  onClick={() =>
                    setSearchQuery("")
                  }
                  className="rounded-xl border border-buildcv-border bg-buildcv-surface px-5 py-2.5 text-sm font-semibold text-buildcv-ink-600 transition hover:border-buildcv-border-strong hover:bg-buildcv-surface-soft"
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
        <div className="relative overflow-hidden rounded-[32px] bg-buildcv-ink px-6 py-12 text-center text-buildcv-white sm:px-10">

          {/* Violet Glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-buildcv-violet/25 blur-3xl" />

          {/* Pink Glow */}
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-buildcv-accent/20 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-buildcv-violet-300">
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
              className="mt-7 rounded-2xl bg-buildcv-gradient px-6 py-3 text-sm font-bold text-buildcv-white shadow-buildcv-violet transition hover:-translate-y-0.5"
            >
              Explore All Templates
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================
          FIND MY TEMPLATE MODAL
      =================================================== */}

      {showRecommendation && (
        <TemplateRecommendation
          onClose={() =>
            setShowRecommendation(false)
          }
          onSelect={(templateId) => {
            setShowRecommendation(false);

            handleUseTemplate({
              id: templateId,
            });
          }}
        />
      )}

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