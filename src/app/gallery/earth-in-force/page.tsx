import ProjectGallery from "@/components/ProjectGallery";

export default function EarthInForce() {
  return (
    <ProjectGallery
      title="Earth In Force"
      images={[
        "/projects/earthinforce_1.jpg",
        "/projects/earthinforce_2.jpg",
        "/projects/earthinforce_3.jpg",
        "/projects/earthinforce_4.jpg",
        "/projects/earthinforce_5.png",
        "/projects/earthinforce_6.png",
        "/projects/earthinforce_7.jpg",
      ]}
      gridColumns="1fr"
      frameWidth="82%"
      frameMaxWidth="900px"
      frameAspectRatio="16 / 9"
      imageFit="contain"
    />
  );
}
