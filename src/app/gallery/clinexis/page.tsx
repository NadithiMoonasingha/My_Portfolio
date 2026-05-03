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
    />
  );
}