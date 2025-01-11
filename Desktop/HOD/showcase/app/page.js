'use client';

import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="h-full overflow-y-auto">
     
      <Navbar />

      
      <section className="overflow-x-auto bg-gray-100 py-6">
        <div className="flex gap-4 px-4 w-[200%]">
          <img
            src="/images/image1.jpg"
            alt="Image 1"
            className="w-[50%] h-64 object-cover rounded-lg shadow-lg"
          />
          <img
            src="/images/image2.jpg"
            alt="Image 2"
            className="w-[50%] h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

 
      <section id="about" className="p-6 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600">Welcome to our showcase!</p>
      </section>

      
      <section id="showcase" className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Showcase</h2>
        <p className="text-gray-600">Browse our amazing designs.</p>
      </section>

      
      <section id="contact" className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600">Feel free to reach out!</p>
      </section>
    </div>
  );
}
