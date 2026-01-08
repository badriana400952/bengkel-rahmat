import { GetGalleryImages } from "@/actions/galery";
import FormGalery from "@/components/form-galery";
import Galery from "@/components/galeri";
import { useGlobal } from "@/components/global-context";
import HeaderNoMenu from "@/components/headersNoMenu";

export default async function PageGalery() {
  const galeri = await GetGalleryImages();

  return (
    <>
      <HeaderNoMenu />
      <Galery galeri={galeri} />
    </>
  );
}
