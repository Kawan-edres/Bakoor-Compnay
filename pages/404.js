import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import NotFound from '../public/assets/imgs/template/404.png'

function Error() {
    return (
        <>
            <Layout>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mt-40">
                                <Image className="img-responsive" src={NotFound} alt="not-found-image" />
                                <h2 className="text-heading-1 color-gray-900 mb-20 mt-50">
                                    Whoops! That page doesn’t exist.
                                </h2>
                                <p className="text-heading-5 color-gray-600 mt-30 mb-70">
                                    The page you requested could not be found
                                </p>
                                <div className="text-center mb-50">
                                    <Link href="/">
                                    <a className="btn btn-black icon-arrow-left">Back to Homepage</a>
                                    
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>

        </>
    )
}

export default Error;