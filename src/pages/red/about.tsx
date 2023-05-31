import { RedLayout } from "@/components/RedLayout";
import { About } from "@/containers/About";

About.getLayout = (page) => <RedLayout>{page}</RedLayout>;

export default About;
