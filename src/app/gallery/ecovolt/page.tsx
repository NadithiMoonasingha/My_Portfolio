import ProjectGallery from "@/components/ProjectGallery";

export default function EcoVoltGallery() {
  return (
    <ProjectGallery
      title="EcoVolt"
      images={[
        "/projects/ecovolt1.png",
        "/projects/ecovolt2.png",
        "/projects/ecovolt3.png",
        "/projects/ecovolt4.png",
        "/projects/ecovolt5.png",

      ]}
      frameWidth="100%"
      frameMaxWidth="290px"
      frameAspectRatio="9 / 17"
      imageFit="contain"
      gridColumns="repeat(auto-fit, minmax(220px, 1fr))"
    />
  );
}