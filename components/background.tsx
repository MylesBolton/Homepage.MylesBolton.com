"use client"
import { useCallback } from "react";
import { Particles } from "react-particles";
import { ParticlesConfig } from "@/particles.config"
import { loadSlim } from "tsparticles-slim";
import { Container, Engine } from "tsparticles-engine";

export function DefaultBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={ParticlesConfig}
        />
    )
}