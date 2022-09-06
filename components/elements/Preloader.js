import Image from 'next/image';
import React from 'react';
import BakoorLogo from '../../public/assets/imgs/Logo/logo.png'

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="text-center">
                             <Image src={BakoorLogo} alt="bakoor logo" title='bakoor logo' width={200} height={200} />
                            <div className="loader" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Preloader;