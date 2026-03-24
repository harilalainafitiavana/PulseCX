



{/* Services - Style grille avec cartes */ }
<section className="py-24 bg-gradient-to-tr from-pulse-azure/5 to-pulse-turquoise/5">
    <div className="container mx-auto px-6">
        {/* <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-pulse-turquoise uppercase tracking-wider">Nos services</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
                04 domaines d'externalisation pour couvrir vos opérations
            </h2>
        </AnimatedSection> */}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 ml-0 md:ml-10 mr-0 md:mr-10">
            {/* Large card - CX Operations */}
            {/* <AnimatedSection className="md:col-span-8">
                <Link to={services[0].href} className="group block h-full">
                    <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 h-full min-h-[320px] bg-gradient-hero text-primary-foreground border border-border/10 shadow-card hover:shadow-card-hover transition-all duration-300">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-0 w-[500px] h-[300px] rounded-full bg-pulse-turquoise blur-[120px]" />
                            <div className="absolute bottom-0 right-0 w-[400px] h-[250px] rounded-full bg-pulse-azure blur-[100px]" />
                        </div>
                        <div className="relative z-10">
                            <div className="text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground/60 mb-4">Pôle 1</div>
                            <Headphones className="w-10 h-10 text-pulse-turquoise mb-4" />
                            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 max-w-md">{services[0].title}</h3>
                            <p className="text-primary-foreground/80 font-medium leading-relaxed max-w-lg mb-6">{services[0].desc}</p>
                            <ul className="flex flex-wrap gap-3">
                                {services[0].features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/90">
                                        <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Link>
            </AnimatedSection> */}

            {/* Right card - Sales */}
            {/* <AnimatedSection className="md:col-span-4" delay={100}>
                <Link to={services[1].href} className="group block h-full">
                    <div className="rounded-3xl p-7 h-full min-h-[320px] bg-card border border-border shadow-card hover:shadow-card-hover hover:border-pulse-turquoise/30 transition-all duration-300">
                        <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">Pôle 2</div>
                        <div className="w-12 h-12 rounded-2xl bg-pulse-azure/10 border border-pulse-azure/20 flex items-center justify-center mb-4">
                            <TrendingUp className="w-6 h-6 text-pulse-azure" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-3">{services[1].title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed mb-4 text-sm">{services[1].desc}</p>
                        <ul className="space-y-2">
                            {services[1].features.map((f) => (
                                <li key={f} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" /> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Link>
            </AnimatedSection> */}

            {/* Bottom left - BPO */}
            {/* <AnimatedSection className="md:col-span-4" delay={200}>
                <Link to={services[2].href} className="group block h-full">
                    <div className="rounded-3xl p-7 h-full min-h-[280px] bg-card border border-border shadow-card hover:shadow-card-hover hover:border-pulse-turquoise/30 transition-all duration-300">
                        <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">Pôle 3</div>
                        <div className="w-12 h-12 rounded-2xl bg-pulse-turquoise/10 border border-pulse-turquoise/20 flex items-center justify-center mb-4">
                            <Settings className="w-6 h-6 text-pulse-turquoise" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-3">{services[2].title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed mb-4 text-sm">{services[2].desc}</p>
                        <ul className="space-y-2">
                            {services[2].features.map((f) => (
                                <li key={f} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" /> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Link>
            </AnimatedSection> */}

            {/* Bottom right - Digital & Automation */}
            {/* <AnimatedSection className="md:col-span-8" delay={300}>
                <Link to={services[3].href} className="group block h-full">
                    <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 h-full min-h-[280px] border border-border shadow-card hover:shadow-card-hover transition-all duration-300" style={{
                        background: "radial-gradient(600px 250px at 80% 20%, hsl(168 75% 53% / 0.12), transparent 60%), radial-gradient(500px 200px at 20% 80%, hsl(204 73% 46% / 0.08), transparent 60%), hsl(0 0% 100%)"
                    }}>
                        <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">Pôle 4</div>
                        <div className="w-12 h-12 rounded-2xl bg-pulse-azure/10 border border-pulse-azure/20 flex items-center justify-center mb-4">
                            <Cpu className="w-6 h-6 text-pulse-azure" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-3">{services[3].title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed max-w-lg mb-5">{services[3].desc}</p>
                        <ul className="flex flex-wrap gap-4">
                            {services[3].features.map((f) => (
                                <li key={f} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-pulse-turquoise" /> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Link>
            </AnimatedSection> */}
        </div>
    </div>
</section>


