// components/contact.tsx
'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'react-toastify';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  //const [isSubmitting, setIsSubmitting] = useState(false);
  //const [submitSuccess, setSubmitSuccess] = useState(false);

  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e :any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });
  
      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-12">
          {/* <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white text-black">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white text-black relative">
                <div className='absolute top-0 -translate-y-[96.5%] rounded-lg px-2 bg-[#0a0a0a] left-4'>
                  Email
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </label>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white text-black">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full p-2 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>

            {submitSuccess && (
              <motion.p
                className="text-green-500 mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form> */}
          <div className="bg-[#1e1e1f] mt-8 p-6 rounded-lg shadow-sm border border-gray-700">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-[#1e8fff50] w-fit">
          Send Me a Message
        </h2>
        
        <form 
        className="space-y-6"
        action="https://formsubmit.co/762d148a6546ad1a656d89f712ab0ce6" 
        method="POST"
        onSubmit={handleSubmit}
        >
          
          <input type="hidden" name="_replyto" defaultValue={email}/>
          <input type="hidden" name="_subject" defaultValue={`New message from ${name}!`}/>
          <input type="hidden" name="_cc" defaultValue="ubokabasi.o.udoh@gmail.com"/>
          <input type="hidden" name="_captcha" defaultValue="false"/>
          <input type="text" name="_honey" style={{display: 'none'}}/>
          <input type="hidden" name="_template" defaultValue="table"/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={e=>setName(e.target.value)}
                className="w-full px-4 py-3 bg-[#2a2a2b] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e8fff50]"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={e=>setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#2a2a2b] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e8fff50]"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-3 bg-[#2a2a2b] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e8fff50]"
              placeholder="What's this about?"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="resize-none w-full px-4 py-3 bg-[#2a2a2b] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e8fff50]"
              placeholder="Tell me about your project, opportunity, or question..."
              required
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-[#1e8fff] text-white font-medium rounded-lg hover:bg-[#1a7fe6] transition-colors flex items-center gap-2 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : (<> <Send /> Send Message </>)}
            </button>
          </div>
        </form>
      </div>

          <div className="lg:w-1/2">
            <motion.div 
              className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-8 h-fit"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold dark:text-white text-black mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm dark:text-gray-400 text-gray-500">Email</p>
                    <a href="mailto:ubokabasi.o.udoh@gmail.com" className="text-blue-500 hover:underline">ubokabasi.o.udoh@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm dark:text-gray-400 text-gray-500">Phone</p>
                    <a href="tel:+2348125702091" className="text-blue-500 hover:underline">+234 812 570 2091</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm dark:text-gray-400 text-gray-500">Social</p>
                    <div className="flex gap-4 mt-2">
                      <a href="https://github.com/basii199" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                      <a href="https://www.linkedin.com/in/ubokabasi-udoh/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}