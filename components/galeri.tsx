

const Galery =  ({galeri}: {galeri: any}) => {
    return (
        <section id="gallery" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Galeri Kami</h2>
                    <p className="text-lg text-muted-foreground text-pretty">Lihat fasilitas bengkel dan hasil kerja kami</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {
                        galeri.map((item: any) => (
                            <div key={item.id} className="relative aspect-square overflow-hidden rounded-lg border border-border group">
                                <img
                                    src={item.imageUrl}
                                    alt={item.caption}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Galery