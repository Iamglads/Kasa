import React from 'react';
import Header from '../../components/Header/Header';
import background from '../../assets/background2.png';
import Accordeon from '../../components/Accordeon/Accordeon';
import '../../index.css';
import './About.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const title1 = 'Fiabilité';
        const text1 = 'Text 1';
        const title2 = 'Respect';
        const text2 =
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
        const title3 = 'Service';
        const text3 = 'Text 1';
        const title4 = 'Responsabilité';
        const text4 = 'Text 1';

        return (
            <main className="container__about">
                <div className="about__wrappe">
                    <Header background={background} />
                    <section className="container__card">
                        <div>
                            <Accordeon title={title1} text={text1} />
                            <Accordeon title={title2} text={text2} />
                            <Accordeon title={title3} text={text3} />
                            <Accordeon title={title4} text={text4} />
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default About;
