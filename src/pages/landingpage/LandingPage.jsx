import styles from './LandingPage.module.css';
import Header from './components/LandingPageHeader.jsx';
import About from './components/About.jsx';
import ProductOptions from './components/ProductOptions.jsx';
import Facts from './components/Facts.jsx';

export default function LandingPage() {
    return (
        <>
            <Header/>
            <About/>
            <ProductOptions/>
            <Facts/>
        </>
    );
}
