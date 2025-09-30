import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="p-6 bg-blue-900 text-white text-center shadow-md"
      >
        <h1 className="text-4xl font-bold">Nivetha S</h1>
        <p className="text-lg mt-2">Medical Electronics Engineer | AI & Healthcare Innovator</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:nivethasrinivasan09@gmail.com" target="_blank" rel="noreferrer">
            <Mail className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/12032004" target="_blank" rel="noreferrer">
            <Github className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/nivetha-srinivasan12032004/" target="_blank" rel="noreferrer">
            <Linkedin className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
        </div>
      </motion.header>

      {/* About */}
      <motion.section 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a Medical Electronics Engineer passionate about merging technology with healthcare to
          enhance patient outcomes. Skilled in Python, MATLAB, KiCad, and bioinstrumentation, I focus
          on developing AI-driven medical devices and healthcare innovations.
        </p>
      </motion.section>

      {/* Education */}
      <motion.section 
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="space-y-3">
          <li><strong>B.E. Medical Electronics</strong> – Saveetha Engineering College (2022–2026), 84%</li>
          <li><strong>Class 12</strong> – Velammal Vidyalaya, 75%</li>
          <li><strong>Class 10</strong> – Jaigopal Garodia Vivekananda Vidyalaya, 84%</li>
        </ul>
      </motion.section>

      {/* Project */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Project</h2>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Anxiety Detection Using 2D Game</h3>
              <p className="text-sm mt-2">Developed a Python-based 2D game to detect anxiety levels. Data was analyzed using Google Colab, achieving a predictive accuracy of <strong>70%</strong>.</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Skills */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Technical</h3>
                <ul className="list-disc ml-6 text-sm">
                  <li>Python, Java, MATLAB</li>
                  <li>Machine Learning, AI, NLP</li>
                  <li>KiCad, Google Colab</li>
                  <li>Bioinstrumentation</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Soft Skills</h3>
                <ul className="list-disc ml-6 text-sm">
                  <li>Leadership & Teamwork</li>
                  <li>Time Management</li>
                  <li>Critical Thinking</li>
                  <li>Communication</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>3rd Place – IEEE EMBS Poster Presentation (2023)</li>
          <li>3rd Place – Scientific Debate, National Science Day (2023)</li>
          <li>2nd Place – Debate, Cultural Event Cleanza (2025)</li>
        </ul>
      </motion.section>

      {/* Certifications */}
      <motion.section 
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>MATLAB & Simulink (NIIT Calicut, 2024)</li>
          <li>NPTEL IoT & Python (12 weeks)</li>
          <li>Google AI & Responsible AI</li>
          <li>Cisco IoT & Digital Transformation</li>
          <li>Data Analytics Bootcamp (2025)</li>
        </ul>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="p-6 text-center bg-gray-200 mt-6"
      >
        <p>© {new Date().getFullYear()} Nivetha S. All Rights Reserved.</p>
      </motion.footer>
    </div>
  );
}
