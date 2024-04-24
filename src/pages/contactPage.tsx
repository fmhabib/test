import { useEffect, useState } from "react";
import ContactForm from "../components/contactForm"

const imageData = [
    { desktop: 'img1.png', mobile: 'm-img1.png', url: "/companies" },
    { desktop: 'img2.png', mobile: 'm-img2.png', url: "/jobs" },
    { desktop: 'img3.png', mobile: 'm-img3.png', url: "/articles" },
    { desktop: 'img4.png', mobile: 'm-img4.png', url: "/webinars" },
    { desktop: 'img5.png', mobile: 'm-img5.png', url: "/forums" },
    { desktop: 'img6.png', mobile: 'm-img6.png', url: "/application-notes" }
];



const ContactPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div className="">
        <ContactForm />
        <div className="relative max-w-[1170px] mx-auto relative sm:flex sm:flex-col">

            <div className="max-[300px]:w-[260px] max-[400px]:w-[260px] w-[340px] h-[309px] sm:w-[486px] sm:h-[315px] top-40 absolute left-1/2 transform max-sm:-translate-x-1/2 sm:top-40 sm:left-8 bg-gray-200 p-4 rounded-lg shadow-lg  transform  z-10 bg-bl-gradient p-10 md:p-12 rounded-md text-white">
                <h1 className="text-md md:text-xl lg:text-2xl font-bold">OnestopNDT</h1>
                <p className="pt-8 pb-4 text-sm font-semibold">PAP/R/406 Rabale MIDC Near Dol Electric<br /> Company Rabale MIDC, Navi Mumbai - 400701</p>
                <p className="pt-2 pb-4 text-sm font-medium">Landline - 022 4131 0099</p>
                <div className="pb-4 flex items-center gap-4 text-sm font-semibold">
                    <img src="gmap.png" alt="Google map Link" />
                    <a className="cursor-pointer" href="https://www.google.com/maps/place/edge+CRM/@19.212777,73.109044,15z/data=!4m6!3m5!1s0x3be7c9af72af5525:0x8b52ac04d1895c9!8m2!3d19.2127771!4d73.1090441!16s%2Fg%2F11hdvw2xr1?hl=en&entry=ttu">Google map Link</a>
                </div>
            </div>


        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15070.389776004266!2d73.1090441!3d19.2127771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9af72af5525%3A0x8b52ac04d1895c9!2sedge%20CRM!5e0!3m2!1sen!2sin!4v1713877537989!5m2!1sen!2sin" width="100%" height="638px" style={{ border: 0 }} loading="lazy" ></iframe>


        <div className="max-w-[1170px] mx-auto grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-6 gap-8 my-12 sm:my-20  place-items-center  px-10">
            {
                imageData.map((item, index) => (
                    <a key={index} className="" href={item.url}><img

                        src={isMobile ? item.mobile : item.desktop}
                        className="w-[170px] cursor-pointer"

                    /></a>
                ))
            }
        </div>
    </div>
}


export default ContactPage