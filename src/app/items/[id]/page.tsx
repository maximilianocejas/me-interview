import api from "@/api"

export default async function ItemPage({params: {id}}:{params:{id:string}}){
    const item = await api.item.fetch(id)
    return(
        <section className="px-40 py-5 bg-neutral-200 min-h-[calc(100vh-80px)]">
            <div className="bg-white w-full h-full">
            <div className="flex justify-center">
                <img className="size-96" src={item.thumbnail} alt={item.title} />
                <div className="">
                    <span className="capitalize text-neutral-500 text-sm">{item.condition}</span>
                    <h1 className="text-xl font-bold max-w-[250px]">{item.title}</h1>
                    <p className="text-3xl">{Number(item.price).toLocaleString('es-AR',{style: 'currency',currency: item.currency_id})}</p>
                    <button className="bg-blue-500 text-white font-medium text-base px-24 py-2 rounded-sm">Comprar</button>
                </div>
            </div>
            <footer className="w-full px-8 py-4">
                <h2 className="text-lg font-semibold">Descrpción del producto</h2>
                <p className="text-xs text-neutral-500">{item.description}</p>
            </footer>

            </div>
            
        </section>
    )
}