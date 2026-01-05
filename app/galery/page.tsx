import { GetGalleryImages } from "@/actions/galery";
import FormGalery from "@/components/form-galery";
import Galery from "@/components/galeri";
import { CaretLeftSM } from "badrian-icon/kryston";
import Link from "next/link";

export default async function PageGalery() {
  const galeri = await GetGalleryImages();

  return (
    <>
      <div>
        <h2 className="text-3xl ml-8 font-bold my-8 flex items-center "> <CaretLeftSM className={"w-8 h-8 text-stone-950"} /> <Link href="/">Home</Link></h2>
      </div>
      <FormGalery />
      <Galery galeri={galeri} />
    </>
  );
}
