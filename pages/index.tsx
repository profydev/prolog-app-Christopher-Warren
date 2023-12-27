import { LandingPageContainer } from "@features/layout/";
import { Modal } from "@features/ui";
import styles from "./index.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { useGetLanding } from "../features/landing/api/use-get-landing";
import { HeroSection } from "@features/landing/";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const router = useRouter();

  const { data } = useGetLanding();

  if (!data) return null;

  return (
    <LandingPageContainer>
      <Modal
        open={isOpen}
        close={handleClose}
        iconSrc="/icons/mail-large.svg"
        text="Contact Us Via Email"
        action={() => {
          router.push("mailto:prolog@profy.dev");
          setIsOpen(false);
        }}
        actionText="Open Email App"
        supportingText={
          "Any questions? Send us an email at \nprolog@profy.dev. We usually answer within 24 \n hours."
        }
      />
      <button
        className={styles.contactButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
      <HeroSection data={data.sections[0]} />
    </LandingPageContainer>
  );
};

export default LandingPage;
