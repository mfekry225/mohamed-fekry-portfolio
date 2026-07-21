export const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mb-10">
    <div className="w-10 h-1 rounded-full bg-brand" />
    <h2 className="text-2xl md:text-3xl font-black text-brand">{children}</h2>
  </div>
);
