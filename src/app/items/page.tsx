
import api from "@/api"
import Link from "next/link"





export default async function ItemsPage({searchParams}: {searchParams: {search: string}}){
    const { results } = await api.item.search(searchParams.search)

    return(
        <section className="w-full h-fit bg-neutral-100 py-10">
            <div className="w-2/4 h-fit rounded-sm mx-auto flex flex-col">
                {results.map((item)=>(
                <Link href={`/items/${item.id}`} key={item.id} className="flex gap-x-4 h-40 bg-white mt-[1px] p-2">
                    <img className="object-cover size-36" src={item.thumbnail} alt={item.title} />
                    <div>
                        <p className="text-lg font-light">{item.title}</p>
                        <p className="font-medium text-xl">{Number(item.price).toLocaleString('es-AR',{style: 'currency',currency: item.currency_id})}</p>
                    </div>
                </Link>
                ))}
            </div>
            
        </section>
    )
}
