"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Sun, Mic, Video, Scissors, Users, Star, Check, Calendar, Twitter, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function PlethoraLanding() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Don't render the theme toggle until mounted to avoid hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-system">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-3 md:px-6">
          <div className="flex items-center">
            <span 
              className="text-2xl font-medium text-[#333333] dark:text-white font-inter"
              style={{ 
                letterSpacing: '-0.02em'
              }}
            >
              Plethora
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8"></nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white hidden md:flex">
              <Link
                href="https://calendly.com/goodnessnwanebu/plethorastudios"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Your Podcast,{" "}
                <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 dark:from-purple-300 dark:via-purple-500 dark:to-purple-700 bg-clip-text text-transparent">
                  Perfected
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Focus on creating amazing content. We handle everything else, from production to
                post-production, so you can just have fun recording.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                <Link
                  href="https://calendly.com/goodnessnwanebu/plethorastudios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              We Handle the{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 dark:from-purple-300 dark:via-purple-500 dark:to-purple-700 bg-clip-text text-transparent">
                Heavy Lifting
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From recording to post production, we take care of every aspect of podcast production so you can focus on
              creating incredible content.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Audio Production</h3>
                <p className="text-muted-foreground">
                  Professional audio editing, mixing, and mastering for crystal-clear sound quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Video className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Video Production</h3>
                <p className="text-muted-foreground">
                  Full video editing and production for YouTube, social media, and streaming platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scissors className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Short-Form Content</h3>
                <p className="text-muted-foreground">
                  Transform your episodes into engaging shorts for TikTok, Instagram, and YouTube.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Dedicated support team and strategic partnership to grow your podcast.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what venture capitalists and industry experts say about working with Plethora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-purple-600 text-purple-600" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6">
                  "Plethora transformed our podcast from a side project to a professional production. The quality
                  improvement was immediate and our audience growth has been incredible."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">Partner at Insights Capital </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-purple-600 text-purple-600" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6">
                  "Working with Plethora feels like having an entire media team dedicated to your success. They handle
                  everything so we can focus on delivering value to our listeners."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold">Mike Zajko </div>
                    <div className="text-sm text-muted-foreground">{"General Partner, Lattice Fund"}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-purple-600 text-purple-600" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6">
                  {
                    '"We\'ve always wanted a way to build intellectual capital with a podcast, and Plethora helps us do that with minimal effort."'
                  }
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">AR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Amanda Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Principal at First Check Capital </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Simple,{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              One comprehensive package that covers everything you need to create a professional podcast.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-purple-200 dark:border-purple-800 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Complete Partnership</h3>
                  <p className="text-muted-foreground mb-6">Everything you need for podcast success</p>
                  <div className="text-5xl font-bold mb-2">
                    $2,000
                    <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span>4 fully produced episodes per month</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span>20 short-form content pieces</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span>Professional audio & video editing</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span>Ongoing strategic support</span>
                  </div>
                  <div className="flex items-center"></div>
                  <div className="flex items-center"></div>
                </div>

                <Button asChild size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link
                    href="https://calendly.com/goodnessnwanebu/plethorastudios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Start Your Partnership
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Podcast?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the ranks of successful podcasters who've partnered with Plethora. Let's discuss how we can take your
              podcast to the next level.
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-lg">
              <Link
                href="https://calendly.com/goodnessnwanebu/plethorastudios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-6 w-6" />
                Book Your Strategy Call
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">Free 30-minute consultation • No commitment required</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-lg">
                  <Mic className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Plethora
                </span>
              </div>
              <p className="text-muted-foreground">
                Your podcast production partner, handling everything so you can focus on creating amazing content.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Audio Production</li>
                <li>Video Production</li>
                <li>Short-Form Content</li>
                <li>Strategy & Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <Link href="mailto:goodnessnwanebu@gmail.com" className="hover:text-purple-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://x.com/OnePlethora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:goodnessnwanebu@gmail.com"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Plethora. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-purple-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-purple-600 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
