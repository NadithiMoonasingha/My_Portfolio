import ProjectGallery from "@/components/ProjectGallery";

export default function ClinexisGallery() {
  return (
    <ProjectGallery
      title="Clinexis"
      images={[
        "/projects/Clinexis_SplashScreen.jpeg",
        "/projects/Clinexis_HomePage.jpeg",
        "/projects/Clinexis_ChooseProfile.jpeg",
        "/projects/Clinexis_SignIn.jpeg",
        "/projects/Clinexis_SignUp.jpeg",
        "/projects/Clinexis_ForgotPassword.jpeg",
        "/projects/Clinexis_CreateNewPassword.jpeg",
      ]}
      frameWidth="100%"
      frameMaxWidth="290px"
      frameAspectRatio="9 / 20"
      imageFit="contain"
      gridColumns="repeat(auto-fit, minmax(220px, 1fr))"
    />
  );
}