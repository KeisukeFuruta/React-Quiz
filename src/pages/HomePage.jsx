import { Link } from "react-router-dom"
import { ROUTES } from "../const"

export default function HomePage() {
    return (
        <>
            <h1>懐かしの問題クイズ</h1>
            <Link to={ROUTES.QUIZ}>Start!</Link>
        </>
    )
}
