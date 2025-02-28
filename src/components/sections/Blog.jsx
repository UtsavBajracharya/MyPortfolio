import { RevealOnScroll } from "../RevealOnScroll";

export const Blog = () => {
    return (
        <section id="blog" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                        Blog
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Blog Post 1 */}
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-white">
                                My Development Journey
                            </h3>
                            <p className="text-gray-400 mb-4">
                                From writing my first line of code to building full-stack applications, my journey has been filled with challenges and growth. I started with HTML and CSS, then moved on to JavaScript and React. Along the way, I discovered my passion for creating user-friendly interfaces and solving real-world problems.
                            </p>
                            <p className="text-sm text-gray-500">
                                Published on: <span className="text-blue-400">October 10, 2023</span>
                            </p>
                        </div>

                        {/* Blog Post 2 */}
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-white">
                                Lessons Learned as a Developer
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Over the years, I've learned the importance of clean code, effective debugging, and collaboration. One of the biggest lessons has been the value of continuous learning. Whether it's mastering a new framework or understanding a new programming paradigm, staying curious has been key to my growth.
                            </p>
                            <p className="text-sm text-gray-500">
                                Published on: <span className="text-blue-400">September 25, 2023</span>
                            </p>
                        </div>

                        {/* Blog Post 3 */}
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-white">
                                Thoughts on Industry Trends
                            </h3>
                            <p className="text-gray-400 mb-4">
                                The tech industry is evolving rapidly, with trends like AI, serverless architecture, and low-code platforms gaining traction. I believe the future of web development lies in creating seamless, scalable, and accessible experiences. Staying updated with these trends is crucial for any developer.
                            </p>
                            <p className="text-sm text-gray-500">
                                Published on: <span className="text-blue-400">September 10, 2023</span>
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};