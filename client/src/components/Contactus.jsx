import { useForm } from "react-hook-form";

export default function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    try {
      const response = fetch("http://localhost:5000/api/contactus",{
        method:post
      })
    } catch (error) {
      
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
              className="w-full p-3 bg-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
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

          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-xl shadow-md hover:bg-blue-600 transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}
