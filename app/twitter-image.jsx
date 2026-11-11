import { socialImage, socialImageSize } from "@/lib/socialImage";

export const alt = "Niket Chawla, software developer";
export const size = socialImageSize;
export const contentType = "image/png";

export default function Image() {
  return socialImage();
}
