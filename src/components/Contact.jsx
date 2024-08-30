import React from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "db697ad9-6737-4208-b41f-b239a4b1df65");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="py-16 pb-20" id="contact">
      <div className="flex mt-10 mb-20 justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text */}
          <div className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-[40px] uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[55px] lg:text-[90px] leading-none mb-12 ">
                Let's work <br /> together!
              </h2>
            </div>
          </div>
          {/* form */}
          <form
            onSubmit={onSubmit}
            className="flex-1 mt-14 border rounded-2xl flex flex-col gap-y-6 pb-10 p-6 items-start"
          >
            <input
              required
              name="name"
              id="name"
              className="bg-transparent border-b py-1 outline-none w-full placeholder:text-white focus:border-accent  translation-all"
              type="text"
              placeholder="Your name"
            />
            <input
              required
              name="email"
              id="email"
              className="bg-transparent border-b py-1 outline-none w-full placeholder:text-white focus:border-accent  translation-all"
              type="text"
              placeholder="Your email"
            />
            <textarea
              required
              name="message"
              id="message"
              className="bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:border-accent translation-al mb-12"
              placeholder="You message"
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
