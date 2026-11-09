import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const innerContent = (
    <>
      {props.link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      {props.video && (!props.image || isHovered) ? (
        <video src={props.video} autoPlay muted playsInline loop controls></video>
      ) : props.image ? (
        <img src={props.image} alt={props.alt} />
      ) : null}
    </>
  );

  if (props.link) {
    return (
      <div className="work-image">
        <a
          className="work-image-in"
          href={props.link}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          target="_blank"
          rel="noreferrer"
          data-cursor={"disable"}
        >
          {innerContent}
        </a>
      </div>
    );
  }

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-cursor={"disable"}
      >
        {innerContent}
      </div>
    </div>
  );
};

export default WorkImage;
