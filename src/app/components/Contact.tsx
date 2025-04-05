export default function Contact() {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <a
            href="mailto:pratyusha.bachu@gmail.com"
            className="text-lg mb-4 hover:text-gray-300"
          >
            [pratyusha.bachu@gmail.com]
          </a>
          <div className="space-x-4">
            <a href="https://www.linkedin.com/in/pratyusha-bachu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
            <a href="https://github.com/PratyushaBachu94" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
            <a href="https://www.instagram.com/_pratyushabachu_?igsh=N2RyNDI0N3BkbGNt&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </section>
    );
  }