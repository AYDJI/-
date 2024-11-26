<main>
    <section id="overview">
        <h2>רקע כללי</h2>
        <p>מלחמת יום הכיפורים פרצה ב-6 באוקטובר 1973, כאשר צבאות מצרים וסוריה תקפו את ישראל בהפתעה ביום הקדוש ביותר בלוח השנה היהודי...</p>
        <img src="5.jpg" alt="תמונה ממלחמת יום הכיפורים">
    </section>

    <section id="battles">
        <h2>קרבות מרכזיים</h2>
        <h3>חזית הדרום - סיני</h3>
        <p>בדרום, הקרב התרכז בחצי האי סיני...</p>
        <img src="2.jpg" alt="חזית הדרום - סיני">
        <h3>חזית הצפון - רמת הגולן</h3>
        <p>בצפון, צבא סוריה פתח בהתקפה מאסיבית על רמת הגולן...</p>
        <img src="1.jpg" alt="חזית הצפון - רמת הגולן">
    </section>

    <section id="aftermath">
        <h2>תוצאות והשפעות</h2>
        <p>מלחמת יום הכיפורים הובילה לאובדן עצום בנפש ובנזק כלכלי כבד...</p>
        <img src="3.jpeg" alt="תוצאות והשפעות">
    </section>

    <section id="legacy">
        <h2>המורשת והזיכרון</h2>
        <p>מלחמת יום הכיפורים השאירה חותם עמוק בזיכרון הקולקטיבי של החברה הישראלית...</p>
        <img src="4.jpg" alt="המורשת והזיכרון">
    </section>

    function checkAnswers() {
    const answers = {
        q1: '1973',
        q2: 'תעלת סואץ',
        q3: 'הדיפת הסורים',
        q4: '25 באוקטובר 1973',
        q5: 'מבצע אבירי לב',
        q6: 'הגבול עם סוריה',
        q7: 'גולדה מאיר',
        q8: 'הר חרמון',
        q9: 'סוריה',
        q10: '19'
    };

    let score = 0;
    for (let question in answers) {
        const userAnswer = document.querySelector(`#${question}`).value;
        if (userAnswer === answers[question]) {
            score++;
        }
    }

    const totalQuestions = Object.keys(answers).length;
    const message = `השגת ${score} מתוך ${totalQuestions} תשובות נכונות!`;
    document.getElementById('quiz-result').innerText = message;

    if (score === totalQuestions) {
        alert("כל הכבוד! הצלחת לענות על כל השאלות נכון!");
    } else if (score > totalQuestions / 2) {
        alert("יפה מאוד! יש לך ידע טוב על המלחמה.");
    } else {
        alert("כדאי ללמוד קצת יותר על מלחמת יום הכיפורים!");
    }
}

</main>
