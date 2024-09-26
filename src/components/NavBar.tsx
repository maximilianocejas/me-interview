import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full h-20 bg-yellow-300 text-white flex px-20 items-center gap-x-20">
      <Link className="textr-lg text-neutral-500 font-bold" href={"/"}>
        MELI
      </Link>
      <div className="w-full">
        <form action={`/items`} className="flex gap-x-4">
          <input
            name="search"
            autoComplete="off"
            className="w-full px-2 outline-none border-none focus:outline-slate-600 text-neutral-700"
            type="text"
          />
          <button className="flex-1 bg-slate-900 py-2 px-6" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}
