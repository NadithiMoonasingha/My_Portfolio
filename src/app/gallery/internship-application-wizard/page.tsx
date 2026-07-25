import ProjectGallery from "@/components/ProjectGallery";

export default function internshipApplicationWizardGallery() {
  return (
    <ProjectGallery
      title="Internship Application Wizard"
      images={[
        "/projects/internshipApplicationWizard1.jpg",
        "/projects/internshipApplicationWizard2.jpg",
        "/projects/internshipApplicationWizard3.jpg",
        "/projects/internshipApplicationWizard4.jpg",
        "/projects/internshipApplicationWizard5.jpg",
        "/projects/internshipApplicationWizard6.jpg",
        "/projects/internshipApplicationWizard7.jpg",
        "/projects/internshipApplicationWizard8.jpg",
      ]}
    frameWidth="100%"
    frameMaxWidth="350px"
    frameAspectRatio="9 / 11"
    imageFit="contain"
    gridColumns="repeat(auto-fit, minmax(220px, 1fr))"
  />
);
}