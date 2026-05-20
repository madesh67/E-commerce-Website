function SectionTitle({ title, subtitle }) {
  const firstLetter = title.charAt(0);
  const restOfTitle = title.slice(1);

  return (
    <div className="mb-10">
      <h2 className="text-5xl font-semibold tracking-tight">
        <span className="relative after:content-[''] after:absolute after:-top-0.5 after:left-0 after:h-1 after:w-full after:bg-[#7B5EA7] after:rounded-lg">
          {firstLetter}
        </span>
        {restOfTitle}
      </h2>

      <p className="text-white/50 mt-2 text-sm">{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
