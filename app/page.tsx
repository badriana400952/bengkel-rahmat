import { ReviewForm } from "@/components/form-ulasan";
import Header from "@/components/headers";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { handleGetUlasan } from "@/library/data/ulasan";
import { getGataUsers } from "@/library/data/users";
import { Phone, MapPin, Clock, Star, Wrench, Droplet, Settings, Gauge } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic";
export default async function SoloMotorPage() {
  const users = await getGataUsers(); // Example usage of the data fetching function
  const ulasan = await handleGetUlasan();

  const handleUlasanRating = (n: number) => {
    const totalRating = ulasan.reduce(
      (sum, item) => sum + item.rating,
      0
    )
    const averageRating = n > 0 ? totalRating / n : 0
    const averageRounded = Number(averageRating.toFixed(1))
    return averageRounded;
  }
  const handleRating = () => {
    const totalRating = ulasan.reduce(
      (sum, item) => sum + item.rating,
      0
    )
    return ulasan.length > 0 ? totalRating / ulasan.length : 0
  }
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-[url('/bengkel.jpeg')] bg-cover bg-center py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl w-full md:text-6xl font-bold mb-6 text-balance">
              Bengkel Motor Terpercaya di Sepatan Timur
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Layanan berkualitas dengan teknisi ramah dan harga terjangkau. Kami siap merawat motor Anda dengan sepenuh
              hati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#location">
                  <MapPin className="w-4 h-4 mr-2" />
                  Petunjuk Arah
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Tentang Solo Motor</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Di Solo Motor, kami spesialisasi dalam perbaikan dan perawatan sepeda motor. Dengan tim teknisi yang
              berpengalaman dan ramah, kami menyediakan layanan yang dapat diandalkan dan terjangkau untuk memastikan
              motor Anda dalam kondisi terbaik. Kepuasan pelanggan adalah prioritas utama kami.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Layanan Kami</h2>
            <p className="text-lg text-muted-foreground text-pretty">Perawatan lengkap untuk motor Anda</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="transition-transform duration-300 ease-out hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Perbaikan Motor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Perbaikan dan diagnosa lengkap untuk semua jenis kerusakan motor Anda
                </p>
              </CardContent>
            </Card>

            <Card className="transition-transform duration-300 ease-out hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Gauge className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ganti Ban</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Penggantian ban berkualitas dengan harga kompetitif
                </p>
              </CardContent>
            </Card>

            <Card className="transition-transform duration-300 ease-out hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Droplet className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ganti Oli</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Servis ganti oli rutin untuk performa mesin optimal
                </p>
              </CardContent>
            </Card>

            <Card className="transition-transform duration-300 ease-out hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Suspensi & Rem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Perbaikan dan penyetelan sistem suspensi dan rem
                </p>
              </CardContent>
            </Card>

            <Card className="transition-transform duration-300 ease-out hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Modifikasi Custom</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Modifikasi sesuai keinginan untuk tampilan motor yang unik
                </p>
              </CardContent>
            </Card>

            <Card className="transition-transform duration-300 ease-out hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Servis Berkala</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Perawatan rutin untuk menjaga performa motor tetap prima
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ulasan Pelanggan</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i}
                    className={`w-6 h-6 ${i <= Math.round(handleRating()) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold">{handleUlasanRating(ulasan.length)}</span>
            </div>
            <p className="text-muted-foreground">Berdasarkan {ulasan.length} ulasan</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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


            {/* <Card>
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? "fill-accent text-accent" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">
                    "Pelayanan cepat dan hasil kerja memuaskan. Motor saya jadi lebih nyaman dikendarai!"
                  </p>
                  <p className="text-sm text-muted-foreground">- Pelanggan Solo Motor</p>
                </CardContent>
              </Card>
                    
  
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? "fill-accent text-accent" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">
                    "Bengkel langganan saya. Teknisinya jujur dan tidak memaksakan servis yang tidak perlu."
                  </p>
                  <p className="text-sm text-muted-foreground">- Pelanggan Solo Motor</p>
                </CardContent>
              </Card> */}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Lihat Semua Ulasan
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Galeri Kami</h2>
            <p className="text-lg text-muted-foreground text-pretty">Lihat fasilitas bengkel dan hasil kerja kami</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border group">
              <img
                src="/motorcycle-workshop-interior-with-tools-and-bikes.jpg"
                alt="Interior bengkel Solo Motor"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border group">
              <img
                src="/mechanic-working-on-motorcycle-engine-repair.jpg"
                alt="Teknisi sedang memperbaiki motor"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border group">
              <img
                src="/motorcycle-oil-change-service.jpg"
                alt="Servis ganti oli motor"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border group">
              <img
                src="/clean-and-organized-motorcycle-workshop.jpg"
                alt="Area kerja bengkel yang rapi"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border group">
              <img
                src="/motorcycle-tire-replacement-service.jpg"
                alt="Penggantian ban motor"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border group">
              <img
                src="/satisfied-customer-with-repaired-motorcycle.jpg"
                alt="Motor pelanggan yang telah selesai diperbaiki"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

            {/* Review Form Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bagikan Pengalaman Anda</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Kami sangat menghargai feedback dari pelanggan setia kami
            </p>
          </div>
          <ReviewForm />
        </div>
      </section>


      {/* Location Section */}
      <section id="location" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Kunjungi Kami</h2>
            <p className="text-lg text-muted-foreground text-pretty">Kami siap melayani Anda</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Informasi Lokasi</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Alamat</p>
                        <p className="text-muted-foreground leading-relaxed text-pretty">
                          Jl. Belimbing Raya, RT.1/RW.11, Kalideres, Kec. Kalideres, Kota Sepatan Timur, Daerah Khusus
                          Ibukota Jakarta 11840
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Jam Operasional</p>
                        <p className="text-muted-foreground">Buka: 10:00 - 17:00</p>
                        <p className="text-sm text-muted-foreground mt-1">Jam sibuk biasanya pukul 12:00 - 15:00</p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full" size="lg" asChild>
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=Jl.+Belimbing+Raya,+RT.1/RW.11,+Kalideres,+Jakarta+Barat"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          Dapatkan Petunjuk Arah
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="h-[400px] md:h-auto rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9826764!2d106.7!3d-6.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknMDAuMCJTIDEwNsKwNDInMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Solo Motor Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Hubungi Kami</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Ada pertanyaan? Ingin booking servis? Jangan ragu untuk menghubungi kami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+62123456789">
                  <Phone className="w-4 h-4 mr-2" />
                  Telepon Sekarang
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/62123456789" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Solo Motor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bengkel motor terpercaya di Sepatan Timur dengan layanan profesional dan harga terjangkau.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navigasi</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                    Ulasan
                  </Link>
                </li>
                <li>
                  <Link href="#location" className="text-muted-foreground hover:text-foreground transition-colors">
                    Lokasi
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Perbaikan Motor</li>
                <li className="text-muted-foreground">Ganti Ban</li>
                <li className="text-muted-foreground">Ganti Oli</li>
                <li className="text-muted-foreground">Suspensi & Rem</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Kalideres, Sepatan Timur</li>
                <li>Buka: 10:00 - 17:00</li>
                <li>
                  <a href="tel:+62123456789" className="hover:text-foreground transition-colors">
                    +62 123 456 789
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Solo Motor. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
