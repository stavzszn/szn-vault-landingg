import g1 from "@/assets/gallery-1.png";
import g2 from "@/assets/gallery-2.png";
import g3 from "@/assets/gallery-3.png";
import g4 from "@/assets/gallery-4.png";
import g5 from "@/assets/gallery-5.png";
import g6 from "@/assets/gallery-6.png";
import f1 from "@/assets/wf-face-after.png";
import f2 from "@/assets/wf-face-before.png";
import e1 from "@/assets/wf-edit-after.png";
import e2 from "@/assets/wf-edit-before.png";
import c1 from "@/assets/wf-carousel-before.png";
import c2 from "@/assets/wf-carousel-after.png";

export type ArchivePhoto = { src: string; alt: string };

/** Photos shown in the landing marquee and hero letters. */
export const galleryPhotos: ArchivePhoto[] = [g1, g2, g3, g4, g5, g6].map((src, i) => ({
  src,
  alt: `AI-generated photo made with SZNVAULT workflows ${i + 1}`,
}));

/** Every photo shown on the /archive page. */
export const archivePhotos: ArchivePhoto[] = [
  ...galleryPhotos,
  ...[f1, e1, c1, f2, e2, c2].map((src, i) => ({
    src,
    alt: `AI-generated photo from the SZNVAULT archive ${i + 7}`,
  })),
];
