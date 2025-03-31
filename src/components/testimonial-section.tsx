import { Card, CardBody} from "@heroui/react";
import { motion } from "framer-motion";

export function Testimonial() {

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Testimonials
          </h2>
        </motion.div>

        <div className="grid gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none bg-default-50 dark:bg-default-100/5">
              <CardBody className="gap-4">
                <h3 className="text-2xl font-semibold mb-2">Naveen Rajagopal Mohanraj</h3>
                  <p className="text-foreground-500 mb-4">
                    Nithish is an exceptional full-stack developer with a deep understanding of both front-end and back-end technologies. Their ability to build high-performance, scalable applications using modern frameworks is impressive. Whether optimizing system performance or designing intuitive user experiences, they consistently deliver reliable and efficient solutions.
                  </p>
                  <h3 className="text-2xl font-semibold mb-2">Faiyaz Kadhar Kani</h3>
                  <p className="text-foreground-500 mb-4">
                    Nithish is a highly skilled AI engineer with expertise in machine learning, NLP, and system optimization. They have worked on complex models, fine-tuned LLMs, and implemented AI-driven solutions that enhance efficiency and accuracy. Their ability to innovate and push the boundaries of AI makes them a valuable asset in the field.
                  </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}