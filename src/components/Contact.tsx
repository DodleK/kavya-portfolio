
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative inline-block">
          Get In Touch
          <span className="absolute -bottom-2 left-0 h-1 w-2/3 bg-purple-400 rounded-full"></span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-800 p-3 rounded-lg mr-4">
                  <Mail size={20} className="text-purple-200" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-purple-200">Email</h4>
                  <a href="mailto:kavya.dodle@outlook.com" className="text-white hover:text-purple-300 transition-colors">
                  kavya.dodle@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-800 p-3 rounded-lg mr-4">
                  <Linkedin size={20} className="text-purple-200" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-purple-200">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/dodlekavyakasthuri" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    linkedin.com/in/dodlekavyakasthuri
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect!</h3>
              <p className="text-purple-200">
                I'm actively looking for data-related roles—feel free to reach out via email or connect with me on LinkedIn!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
