import { FiArrowUpRight } from "react-icons/fi";

function CategoryCard({ id, title, items, image }) {
  return (
    <div className="group min-w-[240px] h-[380px] rounded-[28px] border border-[#374151]/[0.5] overflow-hidden flex flex-col justify-between hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      {/* TOP */}
      <div className="flex justify-center items-end w-full h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage : `url(${image})`}}>
        <div className="hidden group-hover:block border border-[#C084FC] rounded-[8px] px-2 py-2 mb-8 bg-[#0A0A0F] text-[#C084FC]">
          Explore Collection
        </div>
      </div>

      {/* BOTTOM */}
      <div>
        <div className="flex items-center justify-between p-6 border-t border-white/10 group-hover:border-[#C084FC]">
          <div>
            <h3 className="text-2xl font-medium group-hover:text-[#C084FC]">{title}</h3>
            <p className="text-sm text-white/40 mt-1 group-hover:text-[#C084FC]">{items}</p>
          </div>
          <FiArrowUpRight className="text-xl text-white/50 group-hover:text-[#C084FC]" />
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
