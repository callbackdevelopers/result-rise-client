import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function ParallaX() {
    return (
        <>
            <div className='h-[10vh] md:h-0 overflow-hidden'>
                <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
                    <ParallaxLayer offset={0} speed={0.25}>
                        <div class="animation_layer parallax" id="artback"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0.3}>
                        <div class="animation_layer parallax" id="mountain"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-0.1}>
                        <div class="animation_layer parallax" id="">
                            <div className="flex justify-center items-center h-[60vh]">
                                <h1 className='text-6xl font-bold text-white'>ResultRise</h1>
                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0.3}>
                        <div className="animation_layer parallax" id="jungle1"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0.35}>
                        <div className="animation_layer parallax" id="jungle2"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0.5}>
                        <div className="animation_layer parallax" id="jungle3"></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0.40}>
                        <div className="animation_layer parallax" id="manonmountain"></div>
                    </ParallaxLayer>
                </Parallax>
            </div>
        </>
    );
}

export default ParallaX;