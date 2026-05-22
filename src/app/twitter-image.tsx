import { ImageResponse } from "next/og";
import {
  SocialPreviewCard,
  socialImageAlt,
  socialImageContentType,
  socialImageSize,
} from "./social-preview-card";

export const size = socialImageSize;
export const contentType = socialImageContentType;
export const alt = socialImageAlt;

export default function TwitterImage() {
  return new ImageResponse(<SocialPreviewCard />, size);
}
