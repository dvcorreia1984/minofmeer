import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Voortrek</h3>
            <p className="text-gray-400">
            Wat is modulêr? Modulêr verwys na iets wat gemaak word uit afsondelike, selfstandige en standaard eenhede wat maklik gekombineer of rangskik kan word, gebaseer op 'n module of modules, wat maklike montering of oprigting bewerkstellig. 
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/moduler" className="text-gray-400 hover:text-white transition-colors">
                  Moduler
                </Link>
              </li>
              <li>
                <Link to="/houtwerk" className="text-gray-400 hover:text-white transition-colors">
                  Houtwerk
                </Link>
              </li>
              <li>
                <Link to="/advantages" className="text-gray-400 hover:text-white transition-colors">
                  Advantages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak ons</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                +27 (0) 84 251 3952
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                yolande@voortrek.co.za
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                Orania, Suid-Africa
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Voortrek. Alle regte voorbehou.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;