// app/contact/page.tsx
import { Contact } from '@/components/contact';
import { MotionDiv } from '@/components/motion-div';

export default function ContactPage() {
  return (
    <div className="container py-20">
      <div className="w-full mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 w-full"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-black">
            Get in Touch
          </h1>
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-3xl">
            Have a project in mind or want to discuss potential opportunities? I'm always open to interesting conversations and collaborations.
          </p>
        </MotionDiv>

        <Contact />
      </div>
    </div>
  );
}