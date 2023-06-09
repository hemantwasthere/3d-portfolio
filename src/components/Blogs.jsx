import Carousel from "better-react-carousel";
import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const data = [
  {
    blogUrl: "https://hemantwasthere.hashnode.dev/drag-n-drop",
    title: "Drag n Drop using react-beautiful-dnd",
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1683357392875/70567d31-912e-40d2-9565-d1e40082459a.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    blogUrl:
      "https://hemantwasthere.hashnode.dev/my-experience-as-a-professional-frontend-developer",
    title: "My Experience as a Professional Frontend Developer",
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1683565663576/7b5b5158-c7de-442b-b788-c221b74de8ed.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    blogUrl:
      "https://hemantwasthere.hashnode.dev/best-practices-for-frontend-development",
    title: "Best practices for frontend development",
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1684087023797/40d45c1a-49ab-466d-a6b2-d4633b34c643.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    blogUrl:
      "https://hemantwasthere.hashnode.dev/evolution-of-frontend-development",
    title:
      "Journey Through Time: Exploring the Evolution of Frontend Development",
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1684927917347/e461a319-c39e-4589-b603-3a6d5aae4c4e.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    blogUrl: "https://hemantwasthere.hashnode.dev/zustand",
    title: "Simplifying State Management with Zustand",
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1685466349178/dd09102a-a4e3-45ea-b26e-3a98c6a8324b.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    blogUrl:
      "https://hemantwasthere.hashnode.dev/21-fantastic-web-features-you-havent-explored",
    title: "21 Fantastic Web Features You Haven't Explored",
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1686479367726/c2c616ec-d0d8-45e1-a468-b1fa09db5692.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
];

const BlogCard = ({ blogUrl, src, title }) => {
  return (
    <div
      onClick={() => window.open(blogUrl, "_blank", "noreferrer")}
      className="mb-10 flex h-full w-full flex-col items-center justify-center rounded-lg border border-content/20 bg-gradient-to-br from-content/0 to-content/10 text-center lg:flex-1"
    >
      <img
        alt="testimonial"
        className="-mt-[1.28rem] inline-block w-full object-cover object-center rounded-t-lg"
        src={src}
      />
      <p className="text-lg my-4 mx-2">{title}</p>
    </div>
  );
};

const Blogs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>My Blogs</h2>
      </motion.div>
      {/* <div className="flex flex-col gap-4 mt-8">
        <Carousel
          cols={3}
          rows={1}
          gap={20}
          autoplay={2500}
          dotColorActive="rgb(89,66,233)"
          showDots
          loop
        >
          {data.map((item, i) => (
            <Carousel.Item key={i}>
              <BlogCard {...item} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div> */}
    </>
  );
};

export default SectionWrapper(Blogs, "blogs");
