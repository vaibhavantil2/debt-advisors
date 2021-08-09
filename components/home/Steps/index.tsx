import freeConsultationImage from '../../../public/images/free-consultation.png';
import considerYourOptionsImage from '../../../public/images/consider-your-options.png';
import getToWorkImage from '../../../public/images/get-to-work.png';

export function Steps(): JSX.Element {
    return (
        <section>
            <div>
                <div>
                    <h3>{`1. Free Consultation`}</h3>
                    <p>
                        {`Take a few minutes to talk with our team. Ask questions. Learn about us. Have a certified debt consultant explain debt restructure program. Together, we can discuss whether a debt restructure program works for you.`}
                    </p>
                </div>
                <picture>
                    <source srcSet={freeConsultationImage.src}/>
                    <img
                        src={freeConsultationImage.src}
                        alt="Free Consultation Image"
                        loading="lazy"
                    />
                </picture>
            </div>
            <div>
                <picture>
                    <source srcSet={considerYourOptionsImage.src}/>
                    <img
                        src={considerYourOptionsImage.src}
                        alt="Consider Your Options Image"
                        loading="lazy"
                    />
                </picture>
                <div>
                    <h3>{`2. Consider Your Options`}</h3>
                    <p>
                        {`If you are qualified, our team provides you with an estimate of how much you can save by enrolling into a debt restructure program. Once you decide to move forward, a certified debt consultant works to tailor a program specific to you.`}
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <h3>{`3. Get To Work`}</h3>
                    <p>
                        {`Our licensed partners have decades of experience negotiating with creditors. They put this experience to work for you, all with the goal of obtaining the best possible resolutions from your creditors.`}
                    </p>
                </div>
                <picture>
                    <source srcSet={getToWorkImage.src}/>
                    <img
                        src={getToWorkImage.src}
                        alt="Get To Work Image"
                        loading="lazy"
                    />
                </picture>
            </div>
        </section>
    );
}
