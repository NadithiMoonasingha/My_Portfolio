import ProjectGallery from "@/components/ProjectGallery";

export default function ApplyFlowGallery() {
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
      gridColumns="1fr"
      frameWidth="82%"
      frameMaxWidth="900px"
      frameAspectRatio="16 / 9"
      imageFit="contain"
    />
  );
}