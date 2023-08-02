"use client"
import { useCallback, useEffect, useState } from "react";
import { Particles } from "react-particles";
import { ParticlesConfig } from "@/src/particles.config.js"
import { loadSlim } from "tsparticles-slim";
import { Container, Engine } from "tsparticles-engine";

export function DefaultBackground() {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        setShouldRender(true);
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return shouldRender ? (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={ParticlesConfig}
        />
    ) : null;
}