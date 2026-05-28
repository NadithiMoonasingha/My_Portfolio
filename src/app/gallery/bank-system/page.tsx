import ProjectGallery from "@/components/ProjectGallery";

export default function Bank_Account_Management_SystemGallery() {
  return (
    <ProjectGallery
      title="Bank Account Management System"
      images={[
        "/projects/Bank_management_1.png",
        "/projects/Bank_management_3.png",
        "/projects/Bank_management_2.png",
        "/projects/Bank_management_4.png",
      ]}

      gridColumns="1fr"
      frameWidth="82%"
      frameMaxWidth="900px"
      frameAspectRatio="16 / 9"
      imageFit="contain"
    />
  );
}