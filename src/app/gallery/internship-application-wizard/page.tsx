import ProjectGallery from "@/components/ProjectGallery";

export default function applyFlowGallery() {
  return (
    <ProjectGallery
      title="ApplyFlow"
      images={[
        "/projects/applyFlow1.jpg",
        "/projects/applyFlow2.jpg",
        "/projects/applyFlow3.jpg",
        "/projects/applyFlow4.jpg",
        "/projects/applyFlow5.jpg",
        "/projects/applyFlow6.jpg",
        "/projects/applyFlow7.jpg",
        "/projects/applyFlow8.jpg",
      ]}
    frameWidth="100%"
    frameMaxWidth="350px"
    frameAspectRatio="9 / 11"
    imageFit="contain"
    gridColumns="repeat(auto-fit, minmax(220px, 1fr))"
  />
);
}