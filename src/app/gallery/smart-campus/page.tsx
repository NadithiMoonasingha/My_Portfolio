import ProjectGallery from "@/components/ProjectGallery";

export default function SmartCampusGallery() {
  return (
    <ProjectGallery
      title="Smart Campus API"
      images={[
        "/projects/SmartCampus1.png",
        "/projects/SmartCampus2.png",
        "/projects/SmartCampus3.png",
      ]}
    />
  );
}