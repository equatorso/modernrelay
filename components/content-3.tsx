import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="bg-background">
            <div className="bg-muted/25 py-16 md:py-32">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div className="row-span-3 grid grid-rows-subgrid gap-6">
                            <h3 className="text-muted-foreground">Visual Intelligence</h3>
                            <div className="bg-background ring-foreground/5 aspect-square rounded-xl border border-transparent p-6 shadow ring-1">
                                <Image
                                    src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171590/time_djv8te.webp"
                                    alt="Visual intelligence representation"
                                    width={6394}
                                    height={4500}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <p className="text-muted-foreground">
                                Our advanced visual processing system can <strong className="text-foreground font-semibold">analyze and interpret complex images</strong>, enabling applications from medical diagnostics to autonomous navigation and content moderation.
                            </p>
                        </div>
                        <div className="row-span-3 grid grid-rows-subgrid gap-6">
                            <h3 className="text-muted-foreground">Multimodal Learning</h3>
                            <div className="bg-background ring-foreground/5 aspect-square rounded-xl border border-transparent p-6 shadow ring-1">
                                <Image
                                    src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171584/dots-2_kmiukp.webp"
                                    alt="Multimodal learning visualization"
                                    width="6944"
                                    height="6944"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <p className="text-muted-foreground">
                                Our platform <strong className="text-foreground font-semibold">integrates text, image, and audio processing</strong> into a unified framework, creating more intuitive and powerful AI systems that understand the world more like humans do.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}