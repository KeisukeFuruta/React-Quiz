import { use, useEffect } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display"
import quizData from "../data/quiz"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const";

export default function QuizPage() {
    const [quizIndex, setQuizIndex] = useState(0);
    const [answerLogs, setAnswerLogs] = useState([]);
    const navigation = useNavigate();
    const MAX_QUIZ_LEN = quizData.length;

    const handleClick = (clickedIndex) => {
        if(clickedIndex === quizData[quizIndex].answerIndex){
            // スプレッド構文を使って配列を更新
            // ...はスプレッド構文、
            setAnswerLogs(prev => [...prev, true]);
        }else{
            setAnswerLogs(prev => [...prev, false]);
        }
        // 次の問題へ進むための処理　prevはiみたいなもの。関数型更新
        setQuizIndex(prev => prev + 1);
    };

    // useEffectを使って、answerLogsの長さがMAX_QUIZ_LENに達したら結果ページへ遷移
    useEffect(() => {
        if(answerLogs.length === MAX_QUIZ_LEN){
            const correctNum = answerLogs.filter(answer => answer === true);
            // 全ての問題を解き終えたら結果ページへ遷移
            navigation(ROUTES.RESULT,{
                state:{
                    maxQuizLen: MAX_QUIZ_LEN,
                    correctNumLen: correctNum.length
                }
            });
        }
    },[answerLogs, navigation, MAX_QUIZ_LEN]);

    return (
        <>
            <div>QuizPage</div>
            {quizData[quizIndex] && <Display>{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}</Display>}
            {quizData[quizIndex] && quizData[quizIndex].options.map((option, index) => 
                <Button key={`option-${index}`} onClick={() => handleClick(index)}>{option}</Button>
            )}
        </>
    )
}
