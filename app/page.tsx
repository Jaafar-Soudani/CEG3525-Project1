  import Link from 'next/link';

export default function Home() {
  return (
  <div>
    <div className="flex flex-col mx-auto w-5/6 pt-14">
      {/**https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2 */}
      <div className="flex flex-row gap-5">
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/Yki3vGZpVSU`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

        <div className="flex flex-col">
            <span className="text-3xl font-bold">Welcome to Gee & Gee LLP</span>
            <span className="mt-2 ml-5 text-lg">
              At Gee & Gee LLP, we are committed to delivering high-quality legal services to individuals and businesses alike. 
            </span>            
            <span className="mt-2 ml-5 text-lg">
              With years of experience in a wide range of practice areas, our team works tirelessly to ensure your legal needs are met with precision and care.            
            </span>
            <span className="mt-2 ml-5 text-lg">
              Whether you are facing complex litigation, need expert legal advice, or require representation in business matters, our attorneys are here to guide you every step of the way. 
            </span>
            <span className="mt-2 ml-5 text-lg">
              Watch the video to learn more about our firm, our values, and how we can help you achieve the best possible outcome for your case.
            </span>
        </div>
      </div>

      <Link className="mt-10 py-4 px-2 text-center text-white mx-auto w-2/3 bg-gold text-5xl" href="/book">
            Book a Free Consultation
        </Link>
    </div>
  </div>
  );
}
