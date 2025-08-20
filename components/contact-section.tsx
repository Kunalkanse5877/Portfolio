"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", project: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-32 px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            Let's Work <span className="text-primary animate-glow">Together</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch and let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <Card className="p-10 bg-background/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you within 6 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-background/70 border-2 border-primary/30 focus:border-primary hover:border-primary/50 transition-all duration-300 h-12"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-background/70 border-2 border-primary/30 focus:border-primary hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-semibold mb-3 text-foreground">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/70 border-2 border-primary/30 rounded-md focus:border-primary hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-12"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="graphic">Graphic Design</option>
                    <option value="video">Video Editing</option>
                    <option value="branding">Brand Identity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-background/70 border-2 border-primary/30 focus:border-primary hover:border-primary/50 transition-all duration-300"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 animate-glow h-14 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>

          {/* Contact info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-foreground">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-foreground">Email</div>
                    <div className="text-muted-foreground">Kunalkanse92@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-foreground">Phone</div>
                    <div className="text-muted-foreground">+91 9480115877</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-foreground">Location</div>
                    <div className="text-muted-foreground">Mumbai – 400086</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 text-foreground">Follow Me</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-110 transition-all duration-300 w-14 h-14 p-0"
                  onClick={() => window.open("https://linkedin.com/in/kunal-kanse", "_blank")}
                >
                  <Linkedin className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-110 transition-all duration-300 w-14 h-14 p-0"
                  onClick={() => window.open("https://kunalkanse.my.canva.site", "_blank")}
                >
                  <Mail className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-110 transition-all duration-300 w-14 h-14 p-0"
                  onClick={() => window.open("https://twitter.com/kunalkanse", "_blank")}
                >
                  <Twitter className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-110 transition-all duration-300 w-14 h-14 p-0"
                  onClick={() => window.open("https://instagram.com/kunalkanse", "_blank")}
                >
                  <Instagram className="w-6 h-6" />
                </Button>
              </div>
            </div>

            <Card className="p-8 bg-primary/10 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <h4 className="font-bold text-lg mb-3 text-foreground">Quick Response</h4>
              <p className="text-muted-foreground leading-relaxed">
                I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call me
                directly.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
