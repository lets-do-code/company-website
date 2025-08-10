"use client"
import AboutUs1 from "@/components/mvpblocks/about-us-1";
import FeatureSteps from "@/components/mvpblocks/feature-2";
import Header2 from "@/components/mvpblocks/header-2";
import NotebookHero from "@/components/mvpblocks/notebook";
// import Team1 from "@/components/mvpblocks/team-1";
import SparkLogo from "@/components/mvpblocks/sparkles-logo"
import TestimonialsCarousel from "@/components/mvpblocks/testimonials-carousel";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import { useState } from "react";
import SingleStepForm from "@/components/ui/multi-step-form";

export default function Dashboard() {

    const [open, setOpen] = useState<boolean>(false);

    // const handleConnect = () => {
    //     window.location.href = 'https://sales-o1hz.onrender.com/auth'; // Backend endpoint
    // };

    return (
        <div className="relative">
            {/* <div className="bg-red-700 text-white z-[9999999999999999999] absolute cursor-pointer" onClick={handleConnect}>
                Connect to Zoho
            </div> */}
            {/* <PageHeader>
                <PageHeaderHeading>Dashboard</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>React Shadcn Starter</CardTitle>
                    <CardDescription>React + Vite + TypeScript template for building apps with shadcn/ui.</CardDescription>
                </CardHeader>
            </Card> */}
            <Header2 />
            <NotebookHero setOpen={setOpen} />
            <SparkLogo setOpen={setOpen} />
            <AboutUs1 setOpen={setOpen} />
            <FeatureSteps />
            {/* <Team1 /> */}
            <TestimonialsCarousel />
            <ContactUs1 />
            <Footer4Col />

            {open && <div className="fixed bg-white/10 backdrop-blur-sm z-50 border top-0 left-0 flex h-screen w-full justify-center items-center">
                <SingleStepForm open={open} setOpen={setOpen} className=" bg-[#0b0a0a]" />
            </div>}

        </div>

    )
}
