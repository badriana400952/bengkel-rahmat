import { GetGalleryImages } from "@/actions/galery";
import FormGalery from "@/components/form-galery";
import Galery from "@/components/galeri";
import HeaderNoMenu from "@/components/headersNoMenu";

export default async function PageGalery() {
  const galeri = await GetGalleryImages();

  return (
    <>
      <HeaderNoMenu />
      <FormGalery />
      <Galery galeri={galeri} />
    </>
  );
}
