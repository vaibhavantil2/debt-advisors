import { TermsOfUse as TermsOfUseContent } from '../components/TermsOfUse';
import { Layout } from '../components/Layout';

interface TermsOfUseStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<TermsOfUseStaticProps> {
    return { props: {}, revalidate: 60 };
}

function TermsOfUse(): JSX.Element {
    return (
        <Layout title="Terms Of Use – Debt Advisors">
            <TermsOfUseContent/>
        </Layout>
    );
}

export default TermsOfUse;
