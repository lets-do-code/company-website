import AboutUs1 from "@/components/mvpblocks/about-us-1";
import FeatureSteps from "@/components/mvpblocks/feature-2";
import Header2 from "@/components/mvpblocks/header-2";
import NotebookHero from "@/components/mvpblocks/notebook";
import Team1 from "@/components/mvpblocks/team-1";
import SparkLogo from "@/components/mvpblocks/sparkles-logo"
import TestimonialsCarousel from "@/components/mvpblocks/testimonials-carousel";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";

export default function Dashboard() {
    return (
        <>
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
            <NotebookHero />
            <SparkLogo />
            <AboutUs1 />
            <FeatureSteps />
            <Team1 />
            <TestimonialsCarousel />
            <ContactUs1 />
            <Footer4Col />
        </>

    )
}
