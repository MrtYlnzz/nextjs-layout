import { MainLayout } from "@/components/MainLayout";
import { Home } from "@/containers/Home";

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
