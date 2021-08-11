import styles from './Learn.module.scss';

export function Learn(): JSX.Element {
    return (
        <section className={styles['learn-about-us']}>
            <h2 className={styles['section-title']}>{`Learn About Our Debt Program`}</h2>
            <details>
                <summary className={styles['title']}>{`What is debt restructure?`}</summary>
                <p className={styles['content']}>
                    {`Debt restructure, also known as debt settlement, is a method of dealing with unsecured debt outside of bankruptcy. Clients, on a monthly basis, put money into savings. Once sufficient funds become available, one of our licensed partners will negotiate settlements of the client’s enrolled debt accounts with the client’s creditors`}
                </p>
            </details>
            <details>
                <summary className={styles['title']}>{`Can I enroll all of my debts into debt restructure program?`}</summary>
                <p className={styles['content']}>
                    {`No, only unsecured debts are eligible for enrollment in a debt restructure program. Debt that is secured in some manner—whether by way of mortgage or security interest—does not qualify for a debt restructure program`}
                </p>
            </details>
            <details>
                <summary className={styles['title']}>{`Can anyone enroll into a debt restructure program?`}</summary>
                <p className={styles['content']}>
                    {`No. Only qualified individuals are accepted into a debt restructure program. One important requirement is that an individual must have suffered from some form of financial hardship. The hardship must have materially affected the individual’s ability to repay debts when due`}
                </p>
            </details>
            <details>
                <summary className={styles['title']}>{`Why not do this myself?`}</summary>
                <p className={styles['content']}>
                    {`While you certainly may perform similar services on your own behalf, our licensed partners are able to negotiate better settlements with creditors given their expertise and experience in the industry. Debt restructure can also be a very time-consuming process. Many of our clients appreciate the assistance and time savings that our licensed partnes can provide`}
                </p>
            </details>
            <p className={styles['section-content']}>
                {`This company does not actually provide any debt settlement, debt consolidation, or other credit counseling services. We ONLY refer you to companies that want to provide some or all of those services`}
            </p>
        </section>
    );
}
