import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import Header from "../components/Sections/Header";
import PageTitle from "../components/BlogPost/PageTitle";
import BlogContainer from "../components/Blog/BlogContainer";
import BlogDetails from "../components/BlogPost/BlogDetails";
import Sidebar from "../components/Blog/Sidebar";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";

const Blog = () => (

    <Layout
        pageTitle="Revospin - Blog Post"
        colorSchema="/assets/colors/red.css"
    >
        <Loader />
        <Header />
        <PageTitle />

        <BlogContainer>
            <BlogDetails />
            <Sidebar />
        </BlogContainer>

        <Footer />
        <ToTop />
    </Layout>

)

export default Blog;