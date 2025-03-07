import Image from "next/image";

export default function Testi() {
  return (
    <div className="w-full min-h-screen py-10 lg:py-20">
      <div className="container mx-auto">
        <h2 className="flex justify-center mt-10 mb-20 font-bold text-3xl">
          TESTIMONIALS
        </h2>
        <p className="uppercase tracking-wider mb-8 text-gray-600 text-center">
          our happy clients are saying...
        </p>
        <div className="flex flex-col md:flex-row md:-  mx-3">
          <div className="flex-1 px-3">
            <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8 box-shadow:0 10px 28px rgba(0,0,0,.08)">
              <p className="text-xl font-semibold">
                Impressive Code Quality and User Experience
              </p>
              <p className="mt-6">
                “I&apos;m really impressed with the functionality and user
                experience of the project. As a Senior Software Engineer, I can
                tell that the project is built using clean code practices and
                modern technologies. It shows great attention to detail and a
                solid understanding of both frontend and backend development.
                Great work!”
              </p>
              <div className="flex items-center mt-8">
                <Image
                  width={60}
                  height={60}
                  className="mr-4 rounded-full"
                  src="/1.jpg"
                  alt="Jennifer Dunn"
                ></Image>
                <div>
                  <p>Jennifer Dunn</p>
                  <p className="text-sm text-gray-600">
                    Senior Software Engineer at Google
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 px-3">
            <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8 box-shadow:0 10px 28px rgba(0,0,0,.08)">
              <p className="text-xl font-semibold">
                Seamless Integration and Scalable Architecture
              </p>
              <p className="mt-6">
                “As a Tech Lead at Microsoft, I oversee many development
                projects, and I&apos;m happy to say that this project stands
                out. The way the frontend and backend are integrated is
                seamless, and I appreciate how the app scales. I also see
                potential for future growth in your approach, which is fantastic
                for a Junior Developer. Keep it up!”
              </p>
              <div className="flex items-center mt-8">
                <Image
                  width={60}
                  height={60}
                  className="mr-4 rounded-full"
                  src="/2.jpg"
                  alt="John Travolta"
                ></Image>
                <div>
                  <p>John Travolta</p>
                  <p className="text-sm text-gray-600">
                    Tech Lead at Microsoft
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 px-3">
            <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8 box-shadow:0 10px 28px rgba(0,0,0,.08)">
              <p className="text-xl font-semibold">
                Strong User-Centric Design and Robust Functionality
              </p>
              <p className="mt-6">
                “I&apos;ve worked on countless projects as a Product Manager,
                but this one caught my attention for its efficient design and
                functional features. Your ability to balance user-centric design
                with technical backend work is impressive for someone at the
                junior level. The project is robust, it's impressive. I&apos;m
                excited to see your growth!”
              </p>
              <div className="flex items-center mt-8">
                <Image
                  width={60}
                  height={60}
                  className="mr-4 rounded-full"
                  src="/3.jfif"
                  alt="Walker Smith"
                ></Image>
                <div>
                  <p>Walker Smith</p>
                  <p className="text-sm text-gray-600">
                    Product Manager at Amazon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
