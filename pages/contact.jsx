// import { useState, useEffect } from 'react';
// import BannerLayout from '../components/Common/BannerLayout';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { HiMail, HiUser } from 'react-icons/hi';
// import { BsChatTextFill } from 'react-icons/bs';
// import LeetCodeIcon from '../components/LeetCodeIcon';
// import Footer from '../components/Footer';
// import { Modal } from 'antd';

// const Contact = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [modalContent, setModalContent] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isOffline, setIsOffline] = useState(!navigator.onLine);

//     useEffect(() => {
//         const handleOnline = () => setIsOffline(false);
//         const handleOffline = () => setIsOffline(true);

//         window.addEventListener('online', handleOnline);
//         window.addEventListener('offline', handleOffline);

//         return () => {
//             window.removeEventListener('online', handleOnline);
//             window.removeEventListener('offline', handleOffline);
//         };
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isOffline) {
//             setModalContent('You are currently offline. Please check your internet connection.');
//             setIsModalOpen(true);
//             return;
//         }

//         setIsSubmitting(true);

//         const form = e.target;

//         fetch('https://formspree.io/f/mqazbaep', { 
//             method: 'POST',
//             body: new FormData(form),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             setModalContent('Message sent successfully!');
//             setIsModalOpen(true);
//             setIsSubmitting(false);
//             form.reset(); // Reset the form after successful submission
//         })
//         .catch((error) => {
//             console.error('Error:', error); // Log error for debugging
//             setModalContent('An error occurred, please try again.');
//             setIsModalOpen(true);
//             setIsSubmitting(false);
//         });
//     };

//     return (
//         <BannerLayout>
//             <div className="px-4 py-2">
//                 <div className="my-6 text-Snow flex flex-col gap-y-5">
//                     <h1 className='text-lg font-bold'>Contact Information</h1>
//                     <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
//                         <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Country:</span>
//                                 <span className='text-LightGray md:text-sm'>India</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>State:</span>
//                                 <span className='text-LightGray md:text-sm'>Uttar Pradesh</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>City:</span>
//                                 <span className='text-LightGray md:text-sm'>Kanpur</span>
//                             </div>
//                         </div>
//                         <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Email:</span>
//                                 <span className='text-LightGray text-sm'>nikhilkumaryadav011@gmail.com</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Linkedin:</span>
//                                 <span className='text-LightGray text-sm'>nikhilyadav0907</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Phone:</span>
//                                 <span className='text-LightGray text-sm'>+91-6388146119</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
//                     <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilkumaryadav011@gmail.com" target="_blank" className='hover:scale-125 ease-in-out duration-700'><HiMail /></a>
//                     <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/coderX-nikhil" target='_blank' rel="noreferrer"><FaGithub /></a>
//                     <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/nikhilyadav0907/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
//                     <a href="https://leetcode.com/u/Nikhil_714829/" target="_blank" className='hover:scale-125 ease-in-out duration-700'>
//                         <LeetCodeIcon />
//                     </a>
//                 </div>

//                 <div className="my-12 w-full h-auto text-Snow">
//                     <h1 className='text-lg font-bold'>Get In Touch</h1>
//                     <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
//                         <form onSubmit={handleSubmit}>
//                             <div className="flex flex-col w-full">
//                                 <div className="userIcon relative mb-6">
//                                     <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
//                                         <HiUser />
//                                     </div>
//                                     <input type="text" name="Name" className="input_stylings" placeholder="Name" required />
//                                 </div>
//                             </div>

//                             <div className="flex flex-col w-full">
//                                 <div className="mailIcon relative mb-6">
//                                     <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
//                                         <HiMail />
//                                     </div>
//                                     <input type="email" name="E-mail" className="input_stylings" placeholder="Email" required />
//                                 </div>
//                             </div>

//                             <div className="flex flex-col w-full">
//                                 <div className="textIcon relative mb-6">
//                                     <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
//                                         <BsChatTextFill />
//                                     </div>
//                                     <textarea name="Message" rows={6} className="input_stylings" placeholder="Message" required />
//                                 </div>
//                             </div>

//                             <div className="my-4">
//                                 <button type="submit" className="button" disabled={isSubmitting}>
//                                     {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
//                                 </button>
//                             </div>
//                             {isSubmitting && (
//                                 <div className="relative pt-1">
//                                     <div className="flex mb-2 items-center justify-between">
//                                         <div className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
//                                             Sending...
//                                         </div>
//                                     </div>
//                                     <div className="relative pt-1">
//                                         <div className="flex items-center justify-between">
//                                             <div className="w-full bg-gray-200 rounded-full">
//                                                 <div className="bg-teal-600 text-xs font-semibold text-teal-100 text-center p-0.5 leading-none rounded-full" style={{ width: '100%' }}>
//                                                     <span className="text-white">100%</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             {/* success or error modal */}
//             <Modal
//                 className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
//                 centered
//                 open={isModalOpen}
//                 footer={null}
//                 onOk={() => setIsModalOpen(false)}
//                 onCancel={() => setIsModalOpen(false)}
//             >
//                 <div className='flex flex-col items-center justify-center'>
//                     <h1 className={`text-2xl ${modalContent.includes('error') ? 'text-red-600' : 'text-green-600'} font-bold`}>
//                         {modalContent}
//                     </h1>
//                 </div>
//             </Modal>

//             <Footer />
//         </BannerLayout>
//     );
// };

// export default Contact;

import { useState, useEffect } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import LeetCodeIcon from '../components/LeetCodeIcon';
import Footer from '../components/Footer';
import { Modal } from 'antd';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOffline, setIsOffline] = useState(!navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isOffline) {
            setModalContent('You are currently offline. Please check your internet connection.');
            setIsModalOpen(true);
            return;
        }

        setIsSubmitting(true);

        const form = e.target;

        fetch('https://formspree.io/f/mqazbaep', { 
            method: 'POST',
            body: new FormData(form),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            setModalContent('Message sent successfully!');
            setIsModalOpen(true);
            form.reset(); // Reset the form after successful submission
        })
        .catch(() => {
        })
        .finally(() => {
            setIsSubmitting(false); // Hide the loader regardless of success or failure
        });
    };

    return (
        <BannerLayout>
            <div className="px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>India</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>State:</span>
                                <span className='text-LightGray md:text-sm'>Uttar Pradesh</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>Kanpur</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>nikhilkumaryadav011@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>nikhilyadav0907</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>+91-6388146119</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilkumaryadav011@gmail.com" target="_blank" className='hover:scale-125 ease-in-out duration-700'><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/coderX-nikhil" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/nikhilyadav0907/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://leetcode.com/u/Nikhil_714829/" target="_blank" className='hover:scale-125 ease-in-out duration-700'>
                        <LeetCodeIcon />
                    </a>
                </div>

                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input type="text" name="Name" className="input_stylings" placeholder="Name" required />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input type="email" name="E-mail" className="input_stylings" placeholder="Email" required />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea name="Message" rows={6} className="input_stylings" placeholder="Message" required />
                                </div>
                            </div>

                            <div className="my-4">
                                <button type="submit" className="button relative" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-4 h-4 border-4 border-t-4 border-teal-600 border-solid rounded-full animate-spin"></div>
                                        </div>
                                    ) : (
                                        'SEND MESSAGE'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* success or error modal */}
            <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                centered
                open={isModalOpen}
                footer={null}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className={`text-2xl ${modalContent.includes('error') ? 'text-red-600' : 'text-green-600'} font-bold`}>
                        {modalContent}
                    </h1>
                </div>
            </Modal>

            <Footer />
        </BannerLayout>
    );
};

export default Contact;