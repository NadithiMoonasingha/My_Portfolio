import ProjectGallery from "@/components/ProjectGallery";

export default function smartTodoGallery() {
  return (
    <ProjectGallery
      title="Smart To Do"
      images={[
        "/projects/ToDo_1.png",
        "/projects/ToDo_2.jpg",
        "/projects/ToDo_3.jpg",
        "/projects/ToDo_4.jpg",
      ]}
      gridColumns="1fr"
      frameWidth="82%"
      frameMaxWidth="900px"
      frameAspectRatio="16 / 9"
      imageFit="contain"
    />
  );
}


