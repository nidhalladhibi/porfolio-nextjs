import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap globalement
import "./styles/globals.css"; // Vérifie que ce fichier existe


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <NavigationBar />
        <main className="container mt-4">{children}</main>
      </body>
    </html>
  );
}
