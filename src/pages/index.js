import AnimatedText from "@/components/AnimatedText";
import { DownloadIcon, EmailIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import homeGif from "../../public/images/profile/developer-gif.gif";
import TransitionEffect from "@/components/TransitionEffect";
import texts from "../custom/texts";
import urls from "../custom/urls";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Stathis Iakovidis Portfolio</title>
        <meta
          name="description"
          content="modern personal portfolio built with Next.js. Showcasing my projects, skills, and experiences with a responsive design for optimal viewing on all devices. Explore my journey and get in touch!"
        />
       <meta name="author" content="Stathis Iakovids"/>
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-around md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={homeGif}
                alt="HomeGif"
                className="h-auto w-auto"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center md:!pt-16">
              <AnimatedText
                text={texts.homeScreen.title}
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">{texts.homeScreen.description}</p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/Efstathios_Iakovidis_Resume.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <DownloadIcon className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  target="_blank"
                  href={urls.mailto}
                  className="flex items-center ml-4 text-lg font-medium capitalize text-dark p-2.5 px-6 text-lg
                  dark:text-light md:p-2 md:px-4 md:text-base"
                >
                  Contact <EmailIcon className="ml-1 !w-7 md:!w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="LightBulb"
          />
        </div>
      </article>
    </>
  );
}
