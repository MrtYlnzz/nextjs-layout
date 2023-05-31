import { BlueLayout } from "@/components/BlueLayout";
import { About } from "@/containers/About";

About.getLayout = (page) => <BlueLayout>{page}</BlueLayout>;

export default About;
