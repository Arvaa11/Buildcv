/* =========================================================
   BUILDCV — TEMPLATE DATA UTILITIES
   Supports:
   • formData.personal structure
   • flat resume structure
   • all BuildCV templates
========================================================= */


/* =========================================================
   MAIN RESUME DATA
========================================================= */

export function getResumeData(data = {}) {
  // Support both:
  //
  // {
  //   personal: {...},
  //   education: [],
  //   ...
  // }
  //
  // and:
  //
  // {
  //   fullName: "",
  //   jobTitle: "",
  //   ...
  // }

  const personal = data?.personal || data || {};

  return {
    /* =====================================================
       PERSONAL
    ===================================================== */

    fullName:
      personal.fullName ||
      "Your Name",

    jobTitle:
      personal.jobTitle ||
      "Professional Title",

    email:
      personal.email ||
      "",

    phone:
      personal.phone ||
      "",

    location:
      personal.location ||
      "",

    linkedin:
      personal.linkedin ||
      "",

    github:
      personal.github ||
      "",

    summary:
      personal.summary ||
      "",

    profileImage:
      personal.profileImage ||
      "",


    /* =====================================================
       EDUCATION
    ===================================================== */

    education:
      Array.isArray(data?.education)
        ? data.education
        : [],


    /* =====================================================
       EXPERIENCE
    ===================================================== */

    experience:
      Array.isArray(data?.experience)
        ? data.experience
        : [],


    /* =====================================================
       SKILLS
    ===================================================== */

    skills:
      Array.isArray(data?.skills)
        ? data.skills
        : [],


    /* =====================================================
       PROJECTS
    ===================================================== */

    projects:
      Array.isArray(data?.projects)
        ? data.projects
        : [],
  };
}


/* =========================================================
   SKILL NAME
========================================================= */

export function getSkillName(skill) {
  if (typeof skill === "string") {
    return skill;
  }

  return (
    skill?.name ||
    skill?.skill ||
    skill?.title ||
    skill?.technology ||
    ""
  );
}


/* =========================================================
   EDUCATION TITLE
========================================================= */

export function getEducationTitle(item) {
  return (
    item?.degree ||
    item?.title ||
    item?.qualification ||
    item?.program ||
    ""
  );
}


/* =========================================================
   INSTITUTION
========================================================= */

export function getInstitution(item) {
  return (
    item?.institution ||
    item?.school ||
    item?.university ||
    item?.college ||
    ""
  );
}


/* =========================================================
   EXPERIENCE TITLE
========================================================= */

export function getExperienceTitle(item) {
  return (
    item?.jobTitle ||
    item?.position ||
    item?.title ||
    item?.role ||
    ""
  );
}


/* =========================================================
   COMPANY
========================================================= */

export function getCompany(item) {
  return (
    item?.company ||
    item?.companyName ||
    item?.organization ||
    item?.employer ||
    ""
  );
}


/* =========================================================
   PROJECT NAME
========================================================= */

export function getProjectName(item) {
  return (
    item?.name ||
    item?.title ||
    item?.projectName ||
    ""
  );
}


/* =========================================================
   DESCRIPTION
========================================================= */

export function getDescription(item) {
  return (
    item?.description ||
    item?.details ||
    item?.summary ||
    ""
  );
}


/* =========================================================
   DATE
========================================================= */

export function getDate(item) {
  /* -------------------------------------------------------
     If an explicit date/duration exists
  ------------------------------------------------------- */

  if (item?.date) {
    return item.date;
  }

  if (item?.duration) {
    return item.duration;
  }

  if (item?.year) {
    return item.year;
  }

  /* -------------------------------------------------------
     Build date from start/end
  ------------------------------------------------------- */

  const start = item?.startDate || "";
  const end = item?.endDate || "";

  if (start && end) {
    return `${start} – ${end}`;
  }

  if (start) {
    return start;
  }

  if (end) {
    return end;
  }

  return "";
}


/* =========================================================
   TECHNOLOGIES
========================================================= */

export function getTechnologies(item) {
  const technologies =
    item?.technologies ||
    item?.techStack ||
    item?.skills ||
    "";

  if (Array.isArray(technologies)) {
    return technologies
      .filter(Boolean)
      .join(" • ");
  }

  return technologies;
}