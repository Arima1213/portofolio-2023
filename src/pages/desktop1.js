import { useCallback } from "react";
import "./desktop1.css";
const Desktop1 = () => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='unsplashUAFXj9dRpwoImage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPortofolioTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="desktop-1">
      <img
        className="unsplashkoy1fbevmli-icon"
        alt=""
        src="/unsplashkoy1fbevmli@2x.png"
      />
      <div className="desktop-1-child" />
      <img
        className="unsplashuafxj9drpwo-icon"
        alt=""
        src="/unsplashuafxj9drpwo@2x.png"
        data-scroll-to="unsplashUAFXj9dRpwoImage"
      />
      <div className="navbar">
        <div className="home" onClick={onHomeTextClick}>
          Home
        </div>
        <div className="portofolio" onClick={onPortofolioTextClick}>
          Portofolio
        </div>
        <div className="work-experience">Work Experience</div>
        <div className="project" onClick={onProjectTextClick}>
          Project
        </div>
        <div className="portofolio" onClick={onContactTextClick}>
          Contact
        </div>
      </div>
      <img
        className="unsplashhonjp8dyism-icon"
        alt=""
        src="/unsplashhonjp8dyism@2x.png"
      />
      <div className="desktop-1-item" />
      <div className="scroll-for-more-parent">
        <b className="scroll-for-more">Scroll For More</b>
        <img className="frame-child" alt="" src="/group-1.svg" />
        <div className="ari-mahendra-fauzi">Ari Mahendra Fauzi</div>
        <div className="frame-parent">
          <div className="front-end-web-programmer-creat-parent">
            <div className="front-end-web">
              "Front End Web Programmer creates and implements user interfaces
              for websites using HTML, CSS, and JavaScript to ensure an engaging
              and responsive user experience."
            </div>
            <b className="front-end-web1">Front End Web Programmer</b>
          </div>
          <div className="uiux-designer-designs-visuall-parent">
            <div className="uiux-designer-designs">
              "UI/UX Designer designs visually appealing and user-friendly
              interfaces for digital products, focusing on enhancing user
              experience and ensuring seamless interactions."
            </div>
            <b className="uiux-designer">UI/UX Designer</b>
          </div>
          <div className="uiux-designer-designs-visuall-parent">
            <div className="uiux-designer-designs">
              "IT Support provides technical assistance and troubleshooting for
              computer systems, networks, and software, ensuring smooth
              operations and resolving technical issues for users."
            </div>
            <b className="uiux-designer">IT Support</b>
          </div>
        </div>
        <img className="image-2-traced" alt="" src="/image-2-traced.svg" />
      </div>
      <div className="work-experience-parent">
        <div className="work-experience1">Work Experience</div>
        <b className="career">Career</b>
        <div className="frame-group">
          <div className="pt-pjb-jatim-parent">
            <b className="pt-pjb-jatim">PT PJB Jatim</b>
            <div className="front-end-programmer">IT Support</div>
            <div className="jul-2020-">Jul 2020 - Jan 2021</div>
          </div>
          <div className="freelance-parent">
            <b className="pt-pjb-jatim">Freelance</b>
            <div className="front-end-programmer">Front End Programmer</div>
            <div className="jul-2020-">Feb 2021 - Present</div>
          </div>
        </div>
      </div>
      <div className="about-me-parent" data-scroll-to="frameContainer2">
        <div className="about-me">About Me</div>
        <b className="front-end-web-container">
          <p className="saya-adalah-seorang">Front End Web Programmer,</p>
          <p className="saya-adalah-seorang">UI/UX Designer</p>
          <p className="saya-adalah-seorang">{`& IT Support.`}</p>
        </b>
        <div className="saya-adalah-seorang-container">
          <p className="saya-adalah-seorang">
            Saya adalah seorang mahasiswa Sistem Informasi yang bersemangat
            untuk mengembangkan kemampuan dalam pembuatan web, khususnya di
            bagian desain hingga menjadi tampilan web yang responsif dengan UI
            menarik dan analisis pengalaman pengguna yang mendalam. Perjalanan
            belajar saya dimulai saat menjadi IT Support, tetapi ketertarikan
            saya pada web, terutama bagian front-end, semakin berkembang.
          </p>
          <p className="saya-adalah-seorang">
            Saya memiliki pengalaman dalam menyelesaikan berbagai proyek, baik
            secara individu maupun dalam tim. Inovasi adalah hal yang selalu
            saya bawa dalam setiap pekerjaan saya. Saya selalu mencari cara-cara
            baru untuk memajukan desain dan pengalaman pengguna dalam setiap
            proyek yang saya kerjakan.
          </p>
        </div>
      </div>
      <div className="frame-container" data-scroll-to="frameContainer1">
        <div className="rectangle-parent">
          <div className="frame-item" />
          <img className="image-11-icon" alt="" src="/image-11@2x.png" />
          <div className="rectangle-group">
            <div className="frame-inner" />
            <b className="web-donasi">Web Donasi : Takaful</b>
          </div>
        </div>
        <div className="rectangle-container">
          <div className="rectangle-div" />
          <img className="image-13-icon" alt="" src="/image-13@2x.png" />
          <img className="image-12-icon" alt="" src="/image-12@2x.png" />
          <div className="frame-div">
            <div className="frame-child1" />
            <b className="web-berita">Web Berita : Invest Like a pro</b>
          </div>
        </div>
        <div className="view-more-wrapper">
          <b className="view-more">View More</b>
        </div>
        <div className="recent-work">Recent Work</div>
        <b className="project1">Project</b>
      </div>
      <div className="aboutme-items">
        <div className="leadership-parent">
          <b className="leadership">LEADERSHIP</b>
          <div className="if-youd-like">{`If you’d like to talk about a project you want help with or need an `}</div>
          <img className="frame-icon" alt="" src="/frame-13.svg" />
        </div>
        <div className="inttegrity-parent">
          <b className="inttegrity">INTTEGRITY</b>
          <div className="if-youd-like">{`If you’d like to talk about a project you want help with or need an `}</div>
          <img className="frame-icon" alt="" src="/frame-12.svg" />
        </div>
        <div className="teamwork-parent">
          <b className="teamwork">TEAMWORK</b>
          <div className="if-youd-like">{`If you’d like to talk about a project you want help with or need an `}</div>
          <img className="frame-icon" alt="" src="/frame-11.svg" />
        </div>
        <div className="innovation-parent">
          <b className="innovation">INNOVATION</b>
          <div className="if-youd-like">{`If you’d like to talk about a project you want help with or need an `}</div>
          <img className="frame-child4" alt="" src="/frame-10.svg" />
        </div>
        <div className="innovation-parent2">
          <b className="innovation">INNOVATION</b>
          <div className="if-youd-like">{`If you’d like to talk about a project you want help with or need an `}</div>
          <img className="frame-child4" alt="" src="/frame-10.svg" />
        </div>
        <div className="what">What</div>
        <b className="about-me1">About Me</b>
      </div>
      <div className="desktop-1-inner" data-scroll-to="frameContainer">
        <div className="whats-next-parent">
          <div className="whats-next">Whats Next</div>
          <b className="lets-work-together">Lets work together</b>
          <div className="if-youd-like-container">
            <p className="saya-adalah-seorang">
              <span>{`If you’d like to talk about a project you want help with or need an advice about product design, just drop me a message at `}</span>
              <b className="merahadiansyahgmailcom">
                me.rahadiansyah@gmail.com
              </b>
              <span className="whatsapp">{` / whatsapp `}</span>
              <b className="merahadiansyahgmailcom">082119044407</b>
              <span className="whatsapp">
                . I’m currently Available for any design project.
              </span>
            </p>
            <p className="saya-adalah-seorang">Thankyou</p>
          </div>
          <div className="get-in-touch-wrapper">
            <b className="get-in-touch">GET IN TOUCH</b>
          </div>
        </div>
      </div>
      <div className="design-parent">
        <div className="about-me">Design</div>
        <b className="with-passion-for-container">
          <p className="saya-adalah-seorang">With passion for</p>
          <p className="saya-adalah-seorang">Problem Solving</p>
        </b>
        <div className="figma-wrapper">
          <b className="figma">Figma</b>
        </div>
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      </div>
    </div>
  );
};

export default Desktop1;
