import { Link } from "react-router-dom";
import { Star, Wifi, Wind, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-hotel.jpg";
import roomImage from "@/assets/room-king.jpg";
import templeImage from "@/assets/ahobilam-temple.jpg";

const features = [
  { icon: Wind, title: "Air Conditioned", desc: "All rooms are fully air conditioned" },
  { icon: Star, title: "King Size Beds", desc: "Premium king size beds for comfort" },
  { icon: Wifi, title: "Free Wi-Fi", desc: "Complimentary high-speed internet" },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Round the clock security & reception" },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImage} alt="Madam Rajeswari Complex Hotel Room" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Welcome to</p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-gradient-gold mb-4">
          Madam Rajeswari Complex
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-2">Ahobilam, Andhra Pradesh</p>
        <p className="text-muted-foreground mb-8">Your divine stay near the sacred Narasimha temples</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/917675962840?text=Hi%2C%20I%20want%20to%20book%20a%20room"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Book via WhatsApp
          </a>
          <Link
            to="/rooms"
            className="border border-primary text-primary px-8 py-3 rounded-md font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View Rooms
          </Link>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-gradient-gold mb-12">Our Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading text-lg text-foreground mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Rooms Preview */}
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-gradient-gold mb-12">Our Rooms</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { title: "King AC Room – 2 Sharing", guests: "Perfect for couples & pairs" },
            { title: "King AC Room – 3 Sharing", guests: "Ideal for family & friends" },
          ].map((room) => (
            <div key={room.title} className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary transition-colors">
              <div className="overflow-hidden">
                <img src={roomImage} alt={room.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-2">{room.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{room.guests}</p>
                <div className="flex gap-3 text-xs text-muted-foreground mb-4">
                  <span className="bg-muted px-2 py-1 rounded">AC</span>
                  <span className="bg-muted px-2 py-1 rounded">King Bed</span>
                  <span className="bg-muted px-2 py-1 rounded">Wi-Fi</span>
                  <span className="bg-muted px-2 py-1 rounded">TV</span>
                </div>
                <a
                  href={`https://wa.me/917675962840?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(room.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-gradient text-primary-foreground px-6 py-2.5 rounded-md text-sm font-semibold inline-block hover:opacity-90 transition-opacity"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/rooms" className="text-primary hover:text-accent inline-flex items-center gap-1 font-medium">
            View all room details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Ahobilam Temple */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div>
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-2">Discover</p>
            <h2 className="font-heading text-3xl md:text-4xl text-gradient-gold mb-4">Ahobilam – The Sacred Abode</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ahobilam is a renowned pilgrimage centre in Kurnool district of Andhra Pradesh, famous for the nine temples of Lord Narasimha (Nava Narasimha Kshetram). Nestled in the Nallamala Hills, it attracts devotees and nature lovers from across India.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our hotel is conveniently located near the temple complex, making it the perfect base for your spiritual journey.
            </p>
            <Link to="/temple-history" className="text-primary hover:text-accent inline-flex items-center gap-1 font-medium">
              <MapPin className="w-4 h-4" /> Learn more about Ahobilam
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <img src={templeImage} alt="Ahobilam Temple" className="w-full h-72 md:h-96 object-cover" loading="lazy" width={1200} height={600} />
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
