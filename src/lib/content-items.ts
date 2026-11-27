import p1 from "@/assets/content-archive/character-01.png.asset.json";
import p2 from "@/assets/content-archive/character-02.png.asset.json";
import p3 from "@/assets/content-archive/character-03.png.asset.json";
import p4 from "@/assets/content-archive/character-04.png.asset.json";
import p5 from "@/assets/content-archive/character-05.png.asset.json";
import p6 from "@/assets/content-archive/character-06.png.asset.json";
import p7 from "@/assets/content-archive/character-07.png.asset.json";
import p8 from "@/assets/content-archive/character-08.png.asset.json";
import p9 from "@/assets/content-archive/character-09.png.asset.json";
import p10 from "@/assets/content-archive/character-10.png.asset.json";
import p11 from "@/assets/content-archive/character-11.png.asset.json";
import p12 from "@/assets/content-archive/character-12.png.asset.json";
import p13 from "@/assets/content-archive/character-13.png.asset.json";
import p14 from "@/assets/content-archive/character-14.png.asset.json";
import p15 from "@/assets/content-archive/character-15.png.asset.json";
import p16 from "@/assets/content-archive/character-16.png.asset.json";
import p17 from "@/assets/content-archive/character-17.png.asset.json";
import p18 from "@/assets/content-archive/character-18.png.asset.json";
import p19 from "@/assets/content-archive/character-19.png.asset.json";
import v1 from "@/assets/content-archive/clip-01.mp4.asset.json";
import v2 from "@/assets/content-archive/clip-02.mp4.asset.json";
import v3 from "@/assets/content-archive/clip-03.mp4.asset.json";
import v4 from "@/assets/content-archive/clip-04.mp4.asset.json";
import v5 from "@/assets/content-archive/clip-05.mp4.asset.json";

export type ContentItem = {
  kind: "photo" | "video";
  src: string;
  alt: string;
};

export const contentItems: ContentItem[] = [
  { kind: "photo", src: p1.url, alt: "AI character in a black cap and blazer on a city street" },
  { kind: "photo", src: p2.url, alt: "AI character wearing a fur-trimmed hood indoors" },
  { kind: "photo", src: p3.url, alt: "AI character in a pink outfit in a parking garage" },
  { kind: "photo", src: p4.url, alt: "AI character in a pink tracksuit seated on a plane" },
  { kind: "photo", src: p5.url, alt: "AI character holding a glass bottle indoors" },
  { kind: "photo", src: p6.url, alt: "AI character posing in the back seat of a car" },
  { kind: "photo", src: p7.url, alt: "AI character in a winter jacket on a snowy mountain" },
  { kind: "photo", src: p8.url, alt: "AI character beside an off-road vehicle in the desert" },
  { kind: "photo", src: p9.url, alt: "AI character in a green cap in a toy store" },
  { kind: "photo", src: p10.url, alt: "AI character in black boots on a stairway" },
  { kind: "video", src: v1.url, alt: "AI character in a black lace top and gold heart necklace beside a red truck" },
  { kind: "video", src: v2.url, alt: "AI character with sunglasses on her head pointing at her temples" },
  { kind: "video", src: v3.url, alt: "AI character in a black corset and denim skirt on a night street" },
  { kind: "video", src: v4.url, alt: "AI character in a pink lace-trim top on a night street" },
  { kind: "video", src: v5.url, alt: "AI character in a white one-shoulder top and cross necklace beside a red truck" },
  { kind: "photo", src: p11.url, alt: "AI character in a grey cap and white cross tank top on a city street" },
  { kind: "photo", src: p12.url, alt: "AI character in a yellow Brazil jersey and cap on a sandy beach" },
  { kind: "photo", src: p13.url, alt: "AI character lying down in close-up wearing black glasses and a nose ring" },
  { kind: "photo", src: p14.url, alt: "AI character crouching in a cream beanie and track jacket beside a white bag" },
  { kind: "photo", src: p15.url, alt: "AI character in a white knit face mask and rhinestone ski goggles" },
  { kind: "photo", src: p16.url, alt: "AI character with blue hair in a pink patterned beanie and cross necklaces" },
  { kind: "photo", src: p17.url, alt: "AI character with blonde and pink hair on a night balcony above the city" },
  { kind: "photo", src: p18.url, alt: "AI character in a black fur hood lighting a cigarette in a stairwell" },
  { kind: "photo", src: p19.url, alt: "AI character in a light blue beanie holding an ice cream cone on a city street" },
];
