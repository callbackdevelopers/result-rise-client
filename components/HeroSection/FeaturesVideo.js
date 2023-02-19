import Link from 'next/link';
import React from 'react';
import ButtonUp from '../Shared/Buttons/SecondaryButton';

const FeaturesVideo = () => {
    return (

        <div className=" py-10">

            <div className="my-10 md:mx-20 mx-10  " >
                <h1 className="md:text-6xl text-2xl my-5 md:my-10">Explore System Features</h1>
                <div className="grid md:grid-cols-2 gap-4 card lg:card-side    ">
                    <figure className='col-span-1'>
                        <iframe src="https://www.youtube.com/embed/J9yakjR3N6c?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Now released Result Rise latest version!</h2>
                        <p>If you want to see our latest version all updates then you can watch the video or you can <span className='btn btn-xs'>Read more</span></p>
                        <p className="card-title">Result Rise Student Result Management System divided in three modules:
                        </p>
                        <li>Head</li>
                        <li>Teacher</li>
                        <li>Student</li>
                        <Link href="/whyUs" className="card-actions justify-start">
                            <ButtonUp h={10}>Starting Guide</ButtonUp>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesVideo;