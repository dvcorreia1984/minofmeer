import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-8">
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Voortrek. Alle regte voorbehou.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;