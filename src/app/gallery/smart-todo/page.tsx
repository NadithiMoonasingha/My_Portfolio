import ProjectGallery from "@/components/ProjectGallery";

export default function smartTodoGallery() {
  return (
    <ProjectGallery
      title="Smart To Do"
      images={[
        "/projects/smarttodo1.png",
        "/projects/smarttodo2.png",
        "/projects/smarttodo3.png",
      ]}
      gridColumns="1fr"
      frameWidth="82%"
      frameMaxWidth="900px"
      frameAspectRatio="16 / 9"
      imageFit="contain"
    />
  );
}