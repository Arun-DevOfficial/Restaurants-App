export default function Product() {
  const dishes = [
    {
      name: "Lumpia with Sauce",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maiores incidunt earum accusamus minima? Expedita.",
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Spaghetti Carbonara",
      desc: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Simple yet incredibly delicious.",
      url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Chicken Tikka Masala",
      desc: "Tender chicken pieces marinated in a blend of spices and yogurt, cooked in a creamy tomato sauce. A favorite in Indian cuisine.",
      url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Saald",
      desc: "Tender chicken pieces marinated in a blend of spices and yogurt, cooked in a creamy tomato sauce. A favorite in Indian cuisine.",
      url: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <>
      <section>
        <div className="my-28 w-full lg:w-[80%] mx-auto flex justify-center">
          <div>
            <div className="text-center w-full lg:max-w-[40%] mx-auto p-4">
              <h1 className="text-3xl lg:text-6xl font-semibold text-slate-800 font-title">
                Our Special Dishes
              </h1>
              <p className="my-5 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                maiores incidunt earum accusamus minima? Expedita.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 my-16">
              {dishes.map((dish, index) => {
                return (
                  <div
                    key={index}
                    className="relative flex h-[400px] w-[300px] flex-col items-center rounded-[15px] rounded-br-[50px] rounded-tl-[50px] border bg-white px-5 py-12 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <img
                      src={dish.url}
                      alt={dish.name}
                      className="absolute -top-8 h-48 w-48 rounded-full border-2 border-slate-200 p-1 bg-center"
                    />
                    <div className="top-20 flex h-full flex-col items-center justify-end text-center">
                      <h1 className="text-2xl font-medium text-slate-700">
                        {dish.name}
                      </h1>
                      <p className="mt-4">{dish.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
