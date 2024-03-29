import { motion } from "framer-motion";

const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Riad015">
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Riad Hossain' GitHub Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/checkpoint/challenge/AgGOAomPqnoe-gAAAY6Furtz3bRzgkA1Cniet2TiTJWhJzEt1fBDUe8jXIGZYr8GhQ84mlk0PtTmUkeldWwyIWrPYWDXgg?ut=0pUTN4au_LiHc1">
        <motion.i
          initial={{ y1: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Riad Hossain' LinkedIn Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.facebook.com/Riad17CSE015">
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
          className="fa-brands fa-facebook"
          aria-hidden="true"
          title="Riad Hossain' Facebook Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/riadhossain0007">
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Riad Hossain' Twitter Profile"
        ></motion.i>
      </a>

      <a className="icon" style={styles.icon} href="https://www.instagram.com/riad._.hossain/">
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Riad Hossain' Instagram Profile"
        ></motion.i>
      </a>

    </div>
  );
};

export default SocialIcons;
