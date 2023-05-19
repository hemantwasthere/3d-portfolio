import React from "react";
import { SectionWrapper } from "../hoc";
import Carousel from "better-react-carousel";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

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
      {/* <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>My Blogs</h2>
      </motion.div>
      <div className="flex flex-col gap-4 mt-8">
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
