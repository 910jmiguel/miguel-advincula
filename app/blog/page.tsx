import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | Miguel Advincula",
  description: "Highlights, achievements, and stories from Miguel Advincula.",
};

export default function BlogPage() {
  return <BlogContent />;
}
