import React from 'react';
import Image from 'next/image';

export default function ContactHero() {
    return (
        <div className="flex flex-col justify-between bg-gray-100">
          {/* Content Section */}
          <div className="flex flex-col items-center justify-center py-40 px-4 sm:px-6 lg:px-8">
            <div className="flex w-full max-w-6xl justify-between">
              {/* Follow Us */}
              <div className="text-center">
                <h2 className="text-2xl font-monBlack text-big">FOLLOW US</h2>
                <div className="mt-4 flex flex-row gap-4">
                  <a
                    href="https://www.instagram.com/kleshmongolia"
                    className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full flex items-center justify-center w-[200px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xl font-semibold">Kleshmongolia</span>
                  </a>
                  <a
                    href="https://www.facebook.com/klesh"
                    className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center justify-center w-[200px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xl font-semibold">Klesh</span>
                  </a>
                </div>
              </div>
    
              {/* Contact Us */}
              <div className="text-center">
                <h2 className="text-2xl font-monBlack text-big">CONTACT US</h2>
                <div className="mt-4 text-left">
                  <p>
                    <strong>Address:</strong> 43-52, 19 khoroo, Bayanzurkh district, Ulaanbaatar, Mongolia
                  </p>
                  <p>
                    <strong>E-mail:</strong> <a href="mailto:info@klesh.mn" className="text-blue-600">info@klesh.mn</a>
                  </p>
                  <p>
                    <strong>Phone:</strong> (+976) 7272-1115, 6011-1115
                  </p>
                </div>
              </div>
            </div>
          </div>
    
          {/* Footer Section */}
          <footer className="bg-big text-white py-4 flex justify-center items-center">
            <Image src='/logo.png' width={80} height={80} alt=""/>
            <div className="text-center absolute right-8 text-[12px] font-monBlack">
              <p>© 2025 by Klesh. All rights reserved. Developed by Orgil O</p>
            </div>
          </footer>
        </div>
      );
}
