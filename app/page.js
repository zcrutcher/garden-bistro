import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
    <div className="container">
      <h2 className="title is-size-2 has-text-centered block">
        The Garden Bistro
      </h2>
      <div className="content is-flex is-flex-direction-column is-align-content-center is-justify-content-start pb-6">
        <Image
          src="/assets/home/imgs/home-banner.jpg"
          alt="Table Settings"
          className="home-banner"
          width={1024}
          height={236}
        />
        <h3 className="is-size-3 has-text-centered">Join us for dinner</h3>
        <p className="is-size-5 has-text-centered">
          At The Garden Bistro, we invite you to experience a culinary journey
          that celebrates the best of local flavors and European-inspired
          cuisine. Nestled in the heart of Derry, our bistro is a haven for
          those who appreciate the artistry of farm-to-table dining and the
          beauty of shared moments.
        </p>
      </div>
    </div>
  );
}
