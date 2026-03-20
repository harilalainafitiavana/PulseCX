import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useState } from "react";

// Toutes nos images avec différentes tailles
const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Collaboration d'équipe",
        category: "Équipe",
        size: "large", // occupe 2 colonnes
        height: "tall" // plus haut
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Dashboard performance",
        category: "Digital",
        size: "small",
        height: "short"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Support client 24/7",
        category: "Support",
        size: "medium",
        height: "medium"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Formation continue",
        category: "Équipe",
        size: "small",
        height: "short"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Innovation technologique",
        category: "Digital",
        size: "medium",
        height: "tall"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Relation client",
        category: "Support",
        size: "small",
        height: "medium"
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Bureau moderne",
        category: "Environnement",
        size: "large",
        height: "medium"
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1573164713988-2485fc7d6c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Réunion d'équipe",
        category: "Équipe",
        size: "small",
        height: "short"
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Espace de travail",
        category: "Environnement",
        size: "medium",
        height: "tall"
    }
];

const NosRealisations = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredId, setHoveredId] = useState(null);

    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % galleryImages.length;
        setCurrentIndex(newIndex);
        setSelectedImage(galleryImages[newIndex]);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentIndex(newIndex);
        setSelectedImage(galleryImages[newIndex]);
    };

    // Fonction pour déterminer les classes de taille
    const getSizeClasses = (image) => {
        let classes = "";

        // Largeur
        if (image.size === "large") {
            classes += "md:col-span-2 ";
        } else if (image.size === "medium") {
            classes += "md:col-span-1 ";
        } else {
            classes += "md:col-span-1 ";
        }

        // Hauteur
        if (image.height === "tall") {
            classes += "row-span-2 min-h-[320px]";
        } else if (image.height === "medium") {
            classes += "row-span-1 min-h-[240px]";
        } else {
            classes += "row-span-1 min-h-[200px]";
        }

        return classes;
    };

    return (
        <div className="min-h-screen">
            {/* Hero - Même style */}
            <section className="bg-gradient-hero pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="max-w-3xl">
                        <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider mb-4 block">
                            Nos réalisations
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                            Découvrez{" "}
                            <span className="text-gradient">notre univers</span>
                        </h1>
                        <p className="text-xl text-primary-foreground/70 max-w-2xl">
                            Un aperçu de notre quotidien à travers une sélection d'images variées.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Grille d'images asymétrique */}
            <section className="py-16 bg-gradient-to-br from-pulse-turquoise/5 to-pulse-azure/5">
                <div className="container mx-auto px-6">
                    {/* En-tête de la galerie */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="font-display text-2xl font-bold text-foreground">
                                Galerie photos
                            </h2>
                            <p className="text-muted-foreground text-sm mt-1">
                                {galleryImages.length} images • Disposition dynamique
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-pulse-turquoise">
                            <Eye className="w-4 h-4" />
                            <span>Explorer</span>
                        </div>
                    </div>

                    {/* Grille avec différentes tailles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(20px,auto)]">
                        {galleryImages.map((image, index) => (
                            <AnimatedSection key={image.id} delay={index * 50}>
                                <div
                                    onClick={() => openLightbox(image, index)}
                                    onMouseEnter={() => setHoveredId(image.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className={`group relative overflow-hidden rounded-xl cursor-pointer bg-card shadow-md hover:shadow-xl transition-all duration-300 ${getSizeClasses(image)}`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Badge catégorie */}
                                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-pulse-turquoise shadow-sm z-10">
                                        {image.category}
                                    </div>

                                    {/* Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-pulse-turquoise/90 via-pulse-azure/80 to-transparent flex items-end justify-start p-4 transition-opacity duration-300 ${hoveredId === image.id ? 'opacity-100' : 'opacity-0'
                                        }`}>
                                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-white font-display font-semibold text-sm mb-1">
                                                {image.title}
                                            </h3>
                                            <p className="text-white/80 text-xs flex items-center gap-1">
                                                <Eye className="w-3 h-3" />
                                                Agrandir
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10 backdrop-blur-sm border border-white/20"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10 backdrop-blur-sm border border-white/20"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10 backdrop-blur-sm border border-white/20"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <div className="relative">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-white font-display font-semibold text-xl">
                                            {selectedImage.title}
                                        </h3>
                                        <p className="text-white/70 text-sm mt-1">
                                            {selectedImage.category}
                                        </p>
                                    </div>
                                    <div className="text-white/50 text-sm">
                                        {currentIndex + 1} / {galleryImages.length}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA */}
            <section className="py-20 bg-gradient-hero">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                            Envie d'en voir plus ?
                        </h2>
                        <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
                            Contactez-nous pour une visite de nos locaux.
                        </p>
                        <Link to="/contact">
                            <Button variant="hero" size="lg" className="text-base px-10 py-6">
                                Discutons de vos besoins
                                <ArrowRight className="w-5 h-5 ml-1" />
                            </Button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default NosRealisations;