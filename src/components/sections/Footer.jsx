import { RevealOnScroll } from "../RevealOnScroll";

export const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-900 py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-white">
                        {/* Column 1: About */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                About Me
                            </h3>
                            <p className="text-gray-400">
                                A passionate developer who loves building scalable and user-friendly web applications. Let's create something amazing together!
                            </p>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Social Links */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Follow Me
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/UtsavBajracharya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    <i className="fab fa-github text-2xl"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/utsav-bajracharya/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    <i className="fab fa-linkedin text-2xl"></i>
                                </a>
                                <a
                                    href="https://x.com/UtsavBajrachar4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    <i className="fab fa-twitter text-2xl"></i>
                                </a>
                                <a
                                    href="mailto:utsavbajra619@gmail.com"
                                    className="text-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    <i className="fas fa-envelope text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="mt-12 border-t border-white/10 pt-8 text-center">
                        <p className="text-gray-400">
                            &copy; {new Date().getFullYear()} Utsav Bajrcharya. All rights reserved.
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-6 right-12 bg-blue-500 text-white p-4 w-14 rounded-full shadow-lg hover:bg-blue-600 transition-colors cursor-pointer"
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            </RevealOnScroll>
        </footer>
    );
};