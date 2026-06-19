import ProjectGallery from "@/components/ProjectGallery";

export default function MathbroGallery() {
  return (
    <ProjectGallery
      title="MathBro"
      images={[
        "/projects/mathbro1.jpeg",
        "/projects/mathbro2.jpeg",
        "/projects/mathbro3.jpeg",
      ]}
    frameWidth="100%"
    frameMaxWidth="350px"
    frameAspectRatio="9 / 11"
    imageFit="contain"
    gridColumns="repeat(auto-fit, minmax(220px, 1fr))"
  />
);
}