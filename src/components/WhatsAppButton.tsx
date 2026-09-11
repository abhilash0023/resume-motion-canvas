import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WHATSAPP_NUMBER = '919600598446';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Abhilash, I saw your portfolio and I'd like to connect."
)}`;

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Abhilash on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex min-h-11 min-w-11 items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:shadow-xl transition-shadow"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
