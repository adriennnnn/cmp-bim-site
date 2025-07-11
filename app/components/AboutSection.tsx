import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="a-propos" className="px-4 sm:px-0 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">À propos</h2>
      <Card className="bg-muted">
        <CardContent className="p-6 space-y-6 text-sm">
          <p>
            CMP BIM accompagne les projets complexes grâce à une expertise en modélisation, coordination et formation BIM.
            Nos solutions sont intégrées dans des projets emblématiques tels que la Ligne 15, le Village Olympique ou Roissy T4.
          </p>
          <div className="grid gap-4 md:grid-cols-2 text-gray-700">
            <div>
              <p><strong>📍 Adresse :</strong><br />1 rue Marguerin, 75014 Paris</p>
            </div>
            <div>
              <p><strong>✉️ Email :</strong><br /><a href="mailto:cmp.bim@outlook.fr" className="underline text-blue-600">cmp.bim@outlook.fr</a></p>
            </div>
            {/* <div>
              <p><strong>🛠 Logiciels :</strong><br />AutoCAD, Revit, Navisworks, Mensura, SketchUp, Trimble Connect</p>
            </div>
            <div>
              <p><strong>💻 Matériel :</strong><br />Ordinateur portable HP ZBook Studio G8 
              </p>
            </div> */}
            <div>
              <p>
                <strong>🛠 Logiciels :</strong>
              </p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>AutoCAD</li>
                <li>Revit</li>
                <li>Navisworks</li>
                <li>Mensura</li>
                <li>SketchUp</li>
                <li>Trimble Connect</li>
                <li>Covadis</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>💻 Matériel :</strong>
              </p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Ordinateur portable HP ZBook Studio G8</li>
                <li>Écran externe 27"</li>
                <li>Traceur HP DesignJet T630</li>
                <li>Imprimante laser multifonction</li>
                <li>Tablette graphique Wacom Intuos / XP-Pen Deco</li>
                <li>Scanner de documents A4/A3</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
