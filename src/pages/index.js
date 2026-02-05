import AnimatedText from "@/components/AnimatedText";
import { DownloadIcon, EmailIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import homeGif from "../../public/images/profile/developer-gif.gif";
import TransitionEffect from "@/components/TransitionEffect";
import urls from "../custom/urls";
import { SEO_META, TEXTS } from "../custom/constants";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>{SEO_META.homePage.title}</title>
        <meta
          name="description"
          content={SEO_META.homePage.description}
        />
        <meta name="author" content="Stathis Iakovidis" />
        <meta property="og:title" content={SEO_META.homePage.ogTitle} />
        <meta property="og:description" content={SEO_META.homePage.ogDescription} />
        <meta name="twitter:title" content={SEO_META.homePage.twitterTitle} />
        <meta name="twitter:description" content={SEO_META.homePage.twitterDescription} />
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
                text={TEXTS.homeScreen.title}
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">{TEXTS.homeScreen.description}</p>
              <div className="mt-2 flex items-center self-start lg:self-center sm:flex-col sm:w-full sm:gap-3">
                <Link
                  href="/Efstathios_Iakovidis_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg border-2 border-solid bg-dark
                    p-2.5 px-6 text-lg font-semibold capitalize text-light
                    hover:border-dark hover:bg-transparent hover:text-dark
                    dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    md:p-2 md:px-4 md:text-base sm:w-full sm:py-3
                    min-h-[44px] transition-colors"
                  download
                >
                  Resume <DownloadIcon className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={urls.mailto}
                  className="flex items-center justify-center ml-4 text-lg font-medium capitalize text-dark
                    p-2.5 px-6 dark:text-light md:p-2 md:px-4 md:text-base
                    sm:ml-0 sm:w-full sm:py-3 sm:border-2 sm:border-dark sm:dark:border-light sm:rounded-lg
                    min-h-[44px] transition-colors hover:bg-dark/10 dark:hover:bg-light/10"
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
