import Loading from '../Loading/Loading';
import styles from './Result.module.css';
import Confetti from 'react-confetti';

export default function Result({ maxQuizLen, correctNumLen }) {
    return (
        <>
            <div className={styles.result}>
                <p>あなたの正解数は...</p>
                <span className={styles.resultHighlight}>
                    {`全${maxQuizLen}問中、${correctNumLen}問正解です！`}
                </span>
            </div>
            <Confetti />
        </>
    )
}
