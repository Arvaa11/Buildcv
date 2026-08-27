function PreviewSectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2">
      <h3
        className="
          text-[6px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-slate-900
        "
      >
        {children}
      </h3>

      <div className="h-px flex-1 bg-slate-200" />
    </div>
  )
}

export default PreviewSectionTitle