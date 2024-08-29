import React from "react";

function Contact() {
  return (
    <div className="py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text */}
          <div className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-[40px] uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[55px] lg:text[90px] leading-none mb-12 ">
                Let's work <br /> together!
              </h2>
            </div>
          </div>
          {/* form */}
          <form className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              className="bg-transparent border-b py-1 outline-none w-full placeholder:text-white focus:border-accent  translation-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-1 outline-none w-full placeholder:text-white focus:border-accent  translation-all"
              type="text"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-accent translation-al mb-12"
              placeholder="You message"
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
