'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Spotlight } from '@/components/ui/spotlight';
// import { BorderBeam } from '@/components/ui/border-beam';
import { CardHoverEffect } from '@/components/ui/pulse-card';
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
  ArrowRight,
  // Website,
} from 'lucide-react';
import { BannerProps } from './notebook';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}

const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};

const defaultValues: AboutUsProps['values'] = [
  {
    title: 'Custom Website Development',
    description:
      'We craft responsive, user-focused websites tailored to your brand and business goals — designed to perform across all devices.',
    icon: 'Lightbulb',
  },
  {
    title: 'Smart CRM Integration',
    description:
      'Streamline your sales and support workflows with intelligent CRM integrations that centralize data and boost productivity.',
    icon: 'Users',
  },
  {
    title: 'Lead Generation Strategies',
    description:
      'We implement proven lead funnels and automation strategies that consistently drive high-quality leads to your business.',
    icon: 'Sparkles',
  },
  {
    title: 'Landing Pages',
    description:
      'High-converting, SEO-optimized landing pages built to engage your visitors and drive action with compelling CTAs.',
    icon: 'Sparkles',
  },
  {
    title: 'Ongoing Support & Maintenance',
    description:
      'We ensure your website and systems stay secure, up-to-date, and optimized with proactive support and maintenance.',
    icon: 'Globe',
  },
  {
    title: 'Conversion Optimization',
    description:
      'We analyze user behavior and optimize the user journey to increase conversions and maximize ROI across your digital platforms.',
    icon: 'Sparkles',
  },
  {
    title: 'SEO & Performance Tuning',
    description:
      'Our sites are built with speed, accessibility, and search engine performance in mind — for better visibility and user experience.',
    icon: 'Users',
  },
  {
    title: 'Custom Integrations',
    description:
      'We develop secure, scalable integrations with third-party tools, APIs, and payment systems to enhance your digital ecosystem.',
    icon: 'Lightbulb',
  },
];


export default function AboutUs1(
  { setOpen }: BannerProps
) {
  const aboutData = {
    title: 'About Us',
    subtitle:
      'Building the future of web development with beautiful, reusable components.',
    mission:
      'Our mission is to democratize web development by providing high-quality, customizable components that help developers build stunning websites quickly and efficiently.',
    vision:
      'We envision a world where creating beautiful websites is accessible to everyone, regardless of their design or development experience.',
    values: defaultValues,
    className: 'relative overflow-hidden py-20',
  };

  // const missionRef = useRef(null);
  const valuesRef = useRef(null);

  // const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section id='services' className="relative w-full overflow-hidden pt-20 border">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 ">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {aboutData.title}
          </h1>
          <p className="text-muted-foreground mt-6 text-xl">
            {aboutData.subtitle}
          </p>
        </motion.div> */}

        {/* Mission & Vision Section */}
        {/* <div ref={missionRef} className="relative px-2 mb-24 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="via-primary/40 from-transparent to-transparent"
              />

              <div className="from-primary/20 to-primary/5 mb-6 inline-flex aspect-square h-16 w-16 flex-1 items-center justify-center rounded-2xl bg-gradient-to-br backdrop-blur-sm">
                <Rocket className="text-primary h-8 w-8" />
              </div>

              <div className="space-y-4">
                <h2 className="from-primary/90 to-primary/70 mb-4 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                  Our Mission
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Target className="h-8 w-8 text-blue-500" />
              </div>

              <h2 className="mb-4 bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text text-3xl font-bold text-transparent">
                Our Vision
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div> */}

        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <h2 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-medium tracking-tight text-transparent sm:text-5xl">
              Our Services
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </motion.div>

          <div className=" max-w-[1400px] mx-auto px-2 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              const IconComponent = iconComponents[value.icon];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0 || index === 3
                        ? 'purple'
                        : index === 6 || index === 4
                          ? 'blue'
                          : index === 2 || index === 5
                            ? 'amber'
                            : 'rose'
                    }
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='px-4 mb-10 flex justify-center'>
        <button
          onClick={() => setOpen && setOpen(true)}
          style={{ cursor: "pointer" }}
          className={cn(
            buttonVariants({
              size: 'lg',
              className:
                // 'from-primary to-primary/80 text-primary-foreground rounded-full bg-gradient-to-b',
                'rounded-full bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]',
            }),
          )}
        >
          Contact Us <ArrowRight className="size-4" />
        </button>
      </div>
    </section>
  );
}
