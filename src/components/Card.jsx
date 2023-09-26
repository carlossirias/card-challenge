/* eslint-disable react/prop-types */
export function Card({id ,image, title, body, smallText, tags})
{

    return(
        <article className="bg-white w-[368px] h-fit rounded-xl shadow-card">
            <section className="px-4 pt-4 pb-5 flex flex-col gap-4">
                <div className="flex w-[336px] h-[152px] rounded-xl overflow-hidden">
                    <img src={image} className="w-full object-cover object-bottom scale-125 rounded-xl " alt={title} />
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags?.map((tag)=>{
                        return <Tags key={id+'-'+tag} nameTag={tag}/>
                    })}
                </div>
                <span className="">
                    <h1 className="font-semibold text-lg">{title}</h1>
                    <p className="text-sm font-light text-gray-card mt-[3px]">
                        {body}
                    </p>
                </span>
            </section>
            <hr className="relative w-full"/>
            <section className="p-4">
                <span className="text-xs text-gray-card">{smallText}</span>
            </section>
        </article>
    )
}

function Tags({nameTag})
{
    return(
        <span className="w-fit text-[10px] py-[3px] px-4 rounded-xl bg-light-purple text-bold-purple font-bold">{nameTag}</span>
    )
}