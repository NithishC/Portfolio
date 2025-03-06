import React from "react";
import { Input, Textarea, Button, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { contactData } from "../data/portfolio-data";

export function ContactForm() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  const formLabels = contactData.formLabels;

  return (
    <Card className="border-none overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-10 blur"></div>
      <CardBody className="relative z-10">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10"
          >
            <motion.div 
              className="text-success text-6xl mb-4 relative"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0, -10, 0]
              }}
              transition={{ duration: 0.5 }}
            >
              <Icon icon="lucide:check-circle" />
              <motion.div 
                className="absolute inset-0 bg-success/20 rounded-full blur-xl -z-10"
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </motion.div>
            <h3 className="text-2xl font-semibold mb-2">{formLabels.success}</h3>
            <p className="text-foreground-500 text-center">
              {formLabels.successMessage}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label={formLabels.name}
              name="name"
              value={formState.name}
              onChange={handleChange}
              variant="bordered"
              isInvalid={!!errors.name}
              errorMessage={errors.name}
              startContent={
                <Icon icon="lucide:user" className="text-default-400 text-lg" />
              }
              classNames={{
                inputWrapper: "group-data-[focus=true]:bg-gradient-to-r group-data-[focus=true]:from-primary/10 group-data-[focus=true]:to-secondary/10 transition-colors duration-300"
              }}
            />
            
            <Input
              label={formLabels.email}
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              variant="bordered"
              isInvalid={!!errors.email}
              errorMessage={errors.email}
              startContent={
                <Icon icon="lucide:mail" className="text-default-400 text-lg" />
              }
              classNames={{
                inputWrapper: "group-data-[focus=true]:bg-gradient-to-r group-data-[focus=true]:from-primary/10 group-data-[focus=true]:to-secondary/10 transition-colors duration-300"
              }}
            />
            
            <Input
              label={formLabels.subject}
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              variant="bordered"
              isInvalid={!!errors.subject}
              errorMessage={errors.subject}
              startContent={
                <Icon icon="lucide:tag" className="text-default-400 text-lg" />
              }
              classNames={{
                inputWrapper: "group-data-[focus=true]:bg-gradient-to-r group-data-[focus=true]:from-primary/10 group-data-[focus=true]:to-secondary/10 transition-colors duration-300"
              }}
            />
            
            <Textarea
              label={formLabels.message}
              name="message"
              value={formState.message}
              onChange={handleChange}
              variant="bordered"
              minRows={5}
              isInvalid={!!errors.message}
              errorMessage={errors.message}
              classNames={{
                inputWrapper: "group-data-[focus=true]:bg-gradient-to-r group-data-[focus=true]:from-primary/10 group-data-[focus=true]:to-secondary/10 transition-colors duration-300"
              }}
            />
            
            <Button
              type="submit"
              color="primary"
              isLoading={isSubmitting}
              className="relative overflow-hidden group bg-gradient-to-r from-primary to-secondary border-none"
            >
              <span className="relative z-10">{formLabels.submit}</span>
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </form>
        )}
      </CardBody>
    </Card>
  );
}