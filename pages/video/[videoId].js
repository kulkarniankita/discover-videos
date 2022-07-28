import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();
  console.log({ router });
  return (
    <div className={styles.container}>
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
          frameBorder="0"
        ></iframe>
        <div>Modal body</div>
      </Modal>
    </div>
  );
};

export default Video;
