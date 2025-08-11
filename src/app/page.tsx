import { Button } from '@/components/ui'
import { Card, CardHeader, CardContent } from '@/components/ui'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Math Competitions with <span className="text-blue-600">MathChamp</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Prepare for AMC, AIME, MathCounts, and other competitions with adaptive learning,
              gamification, and collaborative study tools designed by education experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Start Learning Free
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform adapts to your learning style and keeps you motivated
              throughout your math competition journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Adaptive Learning</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI-powered system adjusts difficulty based on your performance, ensuring optimal
                  challenge and steady progress toward mastery.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Gamification</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Earn points, unlock achievements, and compete with friends. Our reward system
                  keeps you motivated and engaged throughout your learning journey.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Progress Tracking</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Detailed analytics help students and parents track improvement, identify weak
                  areas, and celebrate achievements with comprehensive reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competition Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Competition Prep
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored preparation for every major math competition with grade-appropriate content
              and proven strategies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'AMC 8/10/12', grades: 'Grades 6-12' },
              { name: 'AIME', grades: 'Advanced' },
              { name: 'MathCounts', grades: 'Grades 6-8' },
              { name: 'USAMO', grades: 'Elite Level' },
            ].map((competition, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{competition.name}</h3>
                <p className="text-sm text-gray-600">{competition.grades}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empowering Math Excellence Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a thriving community of students achieving their mathematical potential through
              structured learning and proven competition preparation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50K+</div>
              <p className="text-gray-600 font-medium">Problems Solved Daily</p>
              <p className="text-sm text-gray-500 mt-1">Across all difficulty levels</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">15K+</div>
              <p className="text-gray-600 font-medium">Active Students</p>
              <p className="text-sm text-gray-500 mt-1">From grades K-12</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">92%</div>
              <p className="text-gray-600 font-medium">Competition Success Rate</p>
              <p className="text-sm text-gray-500 mt-1">Students improve their scores</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">500+</div>
              <p className="text-gray-600 font-medium">Study Groups Active</p>
              <p className="text-sm text-gray-500 mt-1">Collaborative learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Students and Parents Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from our community of learners achieving their mathematical goals and
              building confidence in competition mathematics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Testimonial 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sarah Chen</h3>
                    <p className="text-sm text-gray-600">8th Grade • AIME Qualifier</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  &ldquo;MathChamp&rsquo;s adaptive learning helped me identify my weak areas in
                  algebra. The gamification kept me motivated, and I improved my MathCounts score by
                  40 points! Now I qualified for AIME for the first time.&rdquo;
                </blockquote>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex text-yellow-400 mr-2">★★★★★</div>
                  <span>AMC 8 Score: 23/25</span>
                </div>
              </CardContent>
            </Card>

            {/* Parent Testimonial */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Maria Rodriguez</h3>
                    <p className="text-sm text-gray-600">Parent • Alex&rsquo;s Mom</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  &ldquo;The parent dashboard is incredible! I can see exactly where Alex is
                  progressing and what topics need more work. The detailed analytics help me support
                  his learning journey effectively.&rdquo;
                </blockquote>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex text-yellow-400 mr-2">★★★★★</div>
                  <span>Son improved 2 grade levels</span>
                </div>
              </CardContent>
            </Card>

            {/* Student Testimonial 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-lg">J</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">James Park</h3>
                    <p className="text-sm text-gray-600">11th Grade • USAMO Qualifier</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  &ldquo;The study groups feature changed everything for me. Collaborating with
                  other students and explaining solutions helped deepen my understanding. I went
                  from struggling with AMC 12 to qualifying for USAMO!&rdquo;
                </blockquote>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex text-yellow-400 mr-2">★★★★★</div>
                  <span>AMC 12: 108/150</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Join thousands of successful students</p>
            <Button variant="outline">Read More Success Stories</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Math Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already improving their problem-solving skills and
            achieving their competition goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 bg-white text-blue-600 hover:bg-gray-100"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
