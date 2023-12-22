import Accueil from "./accueil";

export default function Home() {
  return (
    <section className="flex items-center justify-start h-screen bg-gradient-to-br from-border to-background">
      <div className="w-screen h-screen">
        <div className="mesh w-screen h-screen">
          <Accueil />
        </div>
      </div>
    </section>
  );
}
