import React from 'react';

const Footer = () => {
    return (
         <footer className="  bg-blue-400 mt-8">

            <div className=' lg:flex-col  text-center sm: text-base-content lg:p-10 lg:space-y-6'>



                <div className=" text-white text-2xl lg:text-4xl  flex justify-center items-center gap-3">
                    <div> <img src="../../C002-assets/logo-footer.png" alt="" /></div>
                    <div> jobPortal</div>
                </div>




                <div className="flex items-center justify-center gap-3 mt-4">
                    <div>
                        <a href="https://www.gmail.com"><img src="https://i.ibb.co.com/xKkStmT0/rsz-gmail.png" alt="" /></a>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/'><img src="https://i.ibb.co.com/WWM5qYwH/rsz-facebook.png" alt="" /></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/"><img src="https://i.ibb.co.com/wZgrz7TH/rsz-instagram.png" alt="" /></a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;