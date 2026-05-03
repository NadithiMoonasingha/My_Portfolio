import ProjectGallery from "@/components/ProjectGallery";

export default function smartcampusGallery() {
  return (
    <ProjectGallery
      title="Smart To Do"
      images={[
        "/projects/smarttodo1.png",
        "/projects/smarttodo2.png",
        "/projects/smarttodo3.png",
      ]}
    />
  );
}