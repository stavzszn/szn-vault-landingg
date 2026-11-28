import imageGen from "@/assets/gallery-1.png";
import imageEdit from "@/assets/wf-edit-after.png";
import faceswapWorkflow from "@/assets/wf-faceswap-workflow.png.asset.json";
import motion from "@/assets/wf-motion-after.mp4";
import carousel from "@/assets/wf-carousel-after.png";

type Workflow = {
  id: string;
  title: string;
  category: string;
  description: string;
  preview?: { src: string; kind: "image" | "video" };
};

export const archiveWorkflows: Workflow[] = [
  { id: "image-gen", title: "Image Generation", category: "Text to image", description: "Turn a prompt into your next character photo.", preview: { src: imageGen, kind: "image" } },
  { id: "image-edit", title: "Image Edit", category: "Image to image", description: "Change outfits, settings and details without a reshoot.", preview: { src: imageEdit, kind: "image" } },
  { id: "faceswap", title: "Faceswap", category: "Face replacement", description: "A different face. The pose and scene stay the same.", preview: { src: faceswapWorkflow.url, kind: "image" } },
  { id: "motion-control", title: "Motion Control", category: "Video to video", description: "Carry the movement into a new character video.", preview: { src: motion, kind: "video" } },
  { id: "image-to-video", title: "Image to Video", category: "Image to video", description: "Bring a still image into motion." },
  { id: "carousel-gen", title: "Carousel Generation", category: "Photo sets", description: "One source portrait becomes a complete carousel.", preview: { src: carousel, kind: "image" } },
  { id: "dataset-gen", title: "Dataset Generation", category: "Training sets", description: "Build a character set with varied poses and angles." },
  { id: "upscalers", title: "Upscalers", category: "Photo & video", description: "Refine detail in your photos and videos." },
];