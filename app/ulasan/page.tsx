import { handleGetUlasan } from '@/actions/ulasan';
import HeaderNoMenu from '@/components/headersNoMenu';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Ulasan = async () => {
  const ulasan = await handleGetUlasan();
  return (
    <div>
          <HeaderNoMenu />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-4">
            {
              ulasan.map((ulasanItem) => (
                <Card key={ulasanItem.id}>
                  <CardContent className="p-6">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < ulasanItem?.rating ? "fill-accent text-accent" : "text-muted-foreground"}`} />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 leading-relaxed">
                      "{ulasanItem?.komentar}"
                    </p>
                    <div className="w-full flex justify-start items-start ">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-400"><path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="currentColor" fillOpacity="0.25"></path><circle cx="12" cy="10" r="4" fill="currentColor"></circle><path fillRule="evenodd" clipRule="evenodd" d="M18.2209 18.2462C18.2791 18.3426 18.2613 18.466 18.1795 18.5432C16.5674 20.0662 14.3928 21 12 21C9.60728 21 7.43264 20.0663 5.82057 18.5433C5.73877 18.466 5.72101 18.3427 5.77918 18.2463C6.94337 16.318 9.29215 15 12.0001 15C14.7079 15 17.0567 16.3179 18.2209 18.2462Z" fill="currentColor"></path></svg>
                      <p className="text-sm text-muted-foreground w-full mt-2"> {ulasanItem?.nama} - {ulasanItem?.kendaraan}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            }
          </div>
    </div>
  )
}

export default Ulasan