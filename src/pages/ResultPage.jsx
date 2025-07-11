import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../const';
import Result from '../components/Result/Result';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading';

export default function ResultPage() {
    const [active, setActive] = useState(false);
    const location = useLocation();
    const maxQuizLen = location.state.maxQuizLen;
    const correctNumLen = location.state.correctNumLen;

    useEffect(() => {
        setTimeout(() => { setActive(true) }, 2000);
    }, []);
    return (
        <>
            <Loading active={active} />
            <h1>ResultPage</h1>
            <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
            <Link to={ROUTES.HOME}>ReStart!</Link>
        </>
    )
}
