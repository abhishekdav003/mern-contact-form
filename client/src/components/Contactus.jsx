import { useForm } from "react-hook-form";

export default function ContactUs({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:5000/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-3 max-w-sm lg:w-1/4  relative">
      {/* Close button inside ContactUs at top-right */}
      <button
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
        onClick={onClose}
      >
        ✖
      </button>

      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-3 cormorant-garamond-bold ">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 bg-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
            })}
            className="w-full p-3 bg-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Enter your phone number"
            {...register("contactNo", {
              required: "Phone number is required",
              pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number. Must be 10 digits." },
            })}
            className="w-full p-3 bg-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.contactNo && <p className="text-red-500 text-sm mt-1">{errors.contactNo.message}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Subject"
            {...register("subject", { required: "Subject is required" })}
            className="w-full p-3 bg-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
        </div>

        <div>
          <textarea
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
            className="w-full p-3 bg-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-xl shadow-md hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
