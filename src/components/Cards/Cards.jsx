import React from 'react'

function Cards({
    startYear,
    endYear,
    university,
    category
}) {
    return (
        <div className="glow-container-education-1 glow-container p-5" style={{ "--gap": 32, "--blur": 12, "--spread": 80, "--direction": "row" }}>
            <article className="h-fit cursor-pointer border border-[#2a2e5a] relative bg-[#181723] text-[#ded7d7] rounded-xl hover:border-transparent w-full" style={{ "--active": 0, "--start": 277.8644710882834 }}>
                <div className="p-3 relative">
                    <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">{startYear} - {endYear}</p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-2">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="36" width="36" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">{category}</p>
                            <p className="text-sm sm:text-base">{university}</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Cards
