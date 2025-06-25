import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  Truck,
  Bus,
  Bike,
  Users,
  MapPin,
  Clock,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Navigation,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PilotLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Navigation className="h-8 w-8 text-orange-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Pilot</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Services
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-orange-600 transition-colors">
            How It Works
          </Link>
          <Link href="#drivers" className="text-sm font-medium hover:text-orange-600 transition-colors">
            For Drivers
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="ml-6 flex gap-2">
          <Button variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
            Sign In
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">Get Started</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">🚀 Now Live in Your City</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Perfect <span className="text-orange-600">Pilot</span> Awaits
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Connect with professional drivers for any vehicle, anytime. Whether you need a ride or want to
                    drive, Pilot makes it simple, safe, and reliable.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Book a Pilot
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                  >
                    Become a Pilot
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9/5</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>50K+ Active Pilots</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    <span>Verified & Insured</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://www.pilot.ind.in/storage/app/public/business/landing-pages/intro-section/2025-06-19-68540e51b9a27.png"
                  width="600"
                  height="400"
                  alt="Pilot App Interface"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl object-bottom-right"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">All Your Transportation Needs</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From quick rides to professional chauffeur services, we've got every vehicle and every journey
                  covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <Card className="border-2 hover:border-orange-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Car className="h-8 w-8 text-orange-600" />
                      <CardTitle className="text-xl">Book a Pilot</CardTitle>
                    </div>
                    <CardDescription>On-demand rides and transportation services</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Car className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Cars</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bike className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Bikes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Trucks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bus className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Buses</span>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">Book Now</Button>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-orange-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Users className="h-8 w-8 text-orange-600" />
                      <CardTitle className="text-xl">Hire a Pilot</CardTitle>
                    </div>
                    <CardDescription>Professional drivers for your business needs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Personal Chauffeurs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Corporate Drivers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Event Transportation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Long-term Contracts</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                    >
                      Hire Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  width="400"
                  height="500"
                  alt="Mobile App"
                  className="mx-auto aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Pilot Works</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting started is simple. Just three steps to your perfect ride or driving opportunity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <span className="text-xl font-bold text-orange-600">1</span>
                  </div>
                  <CardTitle>Choose Your Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Select from Book a Pilot for rides or Hire a Pilot for professional drivers. Choose your vehicle
                    type and preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <span className="text-xl font-bold text-orange-600">2</span>
                  </div>
                  <CardTitle>Get Matched</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our smart algorithm connects you with verified pilots in your area. View profiles, ratings, and
                    availability instantly.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <span className="text-xl font-bold text-orange-600">3</span>
                  </div>
                  <CardTitle>Enjoy the Ride</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Track your pilot in real-time, enjoy safe transportation, and rate your experience. Payment is
                    handled seamlessly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* For Drivers Section */}
        <section id="drivers" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">💰 Earn More</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Drive Your Way to Success</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join thousands of professional pilots earning great income with flexible schedules. Whether you own
                    a car, bike, truck, or bus - there's opportunity waiting.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Flexible Schedule</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Weekly Payouts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Insurance Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>24/7 Support</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Start Driving
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=550"
                width="550"
                height="400"
                alt="Happy Driver"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Pilot?</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're not just another ride-sharing app. We're building the future of transportation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-orange-600" />
                  <CardTitle>Real-time Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Track your pilot's location in real-time with accurate ETAs and route optimization.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-orange-600" />
                  <CardTitle>Safety First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All pilots are background-checked, licensed, and insured for your peace of mind.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-orange-600" />
                  <CardTitle>24/7 Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Need a ride at 3 AM or a driver for your morning meeting? We're always here.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the Pilot community today. Whether you need a ride or want to drive, we're here to help.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 bg-white text-gray-900"
                  />
                  <Button type="submit" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-orange-100">
                  Get notified when Pilot launches in your city.{" "}
                  <Link href="/privacy" className="underline underline-offset-2 text-white">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white"
      >
        <div className="container grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Navigation className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-bold">Pilot</span>
            </div>
            <p className="text-sm text-gray-400">
              Connecting drivers and passengers for safe, reliable transportation.
            </p>
            <div className="flex gap-4">
              <Button
                size="sm"
                variant="outline"
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Phone className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="#" className="block hover:text-white">
                Book a Pilot
              </Link>
              <Link href="#" className="block hover:text-white">
                Hire a Pilot
              </Link>
              <Link href="#" className="block hover:text-white">
                Corporate Solutions
              </Link>
              <Link href="#" className="block hover:text-white">
                Airport Transfers
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">For Drivers</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="#" className="block hover:text-white">
                Become a Pilot
              </Link>
              <Link href="#" className="block hover:text-white">
                Driver Requirements
              </Link>
              <Link href="#" className="block hover:text-white">
                Earnings
              </Link>
              <Link href="#" className="block hover:text-white">
                Support
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="#" className="block hover:text-white">
                About Us
              </Link>
              <Link href="#" className="block hover:text-white">
                Careers
              </Link>
              <Link href="#" className="block hover:text-white">
                Press
              </Link>
              <Link href="#" className="block hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="container border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Pilot. All rights reserved.</p>
            <nav className="flex gap-4 text-xs text-gray-400">
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
