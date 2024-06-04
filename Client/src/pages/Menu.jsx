import MenuList from "../Components/Layouts/MenuList";
import Cart from "../Components/Nocart";

export default function Menu() {
  return (
    <>
      <section className="grid grid-cols-12 items-start">
        <div className="col-span-9">
          <MenuList />
        </div>
        <div className="col-span-3 sticky top-0">
          <Cart />
        </div>
      </section>
    </>
  );
}

