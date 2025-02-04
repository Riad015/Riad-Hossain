import { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import SocialIcons from "../components/SocialIcons";
import './Footer.css'
const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/mdyeates/my-portfolio")
      .then((res) => res.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer className="footerContainer">
      <SocialIcons />
      <a className="footer-link" href="https://github.com/Riad015">
        <span>
          {/* <AiOutlineStar /> {gitHubInfo.stars} <BiGitRepoForked /> */}
          {gitHubInfo.forks} - Show your support by giving this project a star!
        </span>
        <p>
          <span>▷</span> Designed and built by Riad Hossain &copy; {currentYear}
        </p>
        <p>All views and work are my own</p>
      </a>
    </footer>
  );
};

export default Footer;
