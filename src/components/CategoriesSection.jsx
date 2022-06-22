export const CategoriesSection = () => {
  return (
    <section className="p-2">
      <div className="mb-6">
        <h3 className="font-bold text-2xl">Categories</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <button className="h-16 hover:scale-105 rounded-md w-full bg-gradient-to-r from-oxford-blue to-blue-pigment">World Cup</button>
        <button className="h-16 hover:scale-105 rounded-md w-full bg-gradient-to-r from-oxford-blue to-blue-pigment">World Cup</button>
        <button className="h-16 hover:scale-105 rounded-md w-full bg-gradient-to-r from-oxford-blue to-blue-pigment">World Cup</button>
        <button className="h-16 hover:scale-105 rounded-md w-full bg-gradient-to-r from-oxford-blue to-blue-pigment">World Cup</button>
      </div>
    </section>
  );
};
