// 2015dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2015-DSE-MATH-CP2-Q01",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `$(x+1)(x^2+x+1)=$
<div class="q-mcopt">
A.\t$x^3+1$。<br>
B.\t$(x+1)^3$。<br>
C.\t$x^3+x^2+x+1$。<br>
D.\t$x^3+2x^2+2x+1$。
</div>`,
            en: `$(x+1)(x^2+x+1)=$
<div class="q-mcopt">
A.\t$x^3+1$.<br>
B.\t$(x+1)^3$.<br>
C.\t$x^3+x^2+x+1$.<br>
D.\t$x^3+2x^2+2x+1$.
</div>`
        },
        hint: {
            tc: `直接展開。`,
            en: `Expand it.`
        },
        solution: `D (90%)<p><iframe src="https://www.youtube.com/embed/9HJ8aktHw_I?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q02",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `$\\dfrac{(3y^6)^4}{3y^2}=$
<div class="q-mcopt">
A.\t$4y^5$。 <br>
B.\t$4y^8$。 <br>
C.\t$27y^{12}$。 <br>
D.\t$27y^{22}$。 
</div>`,
            en: `$\\dfrac{(3y^6)^4}{3y^2}=$
<div class="q-mcopt">
A.\t$4y^5$. <br>
B.\t$4y^8$. <br>
C.\t$27y^{12}$. <br>
D.\t$27y^{22}$. 
</div>`
        },
        hint: {
            tc: `先處理指數再簡化。 `,
            en: `Simplify the index first.`
        },
        solution: `D (94%)<p><iframe src="https://www.youtube.com/embed/qBszsISsuI4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q03",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: {
            tc: `若 $p+3q=4$ 及 $5p+9q=2$，則 $p=$
<div class="q-mcopt">
A.\t$-5$。 <br>
B.\t$-3$。 <br>
C.\t$3$。 <br>
D.\t$5$。 
</div>`,
            en: `If $p+3q=4$ and $5p+9q=2$, then $p=$
<div class="q-mcopt">
A.\t$-5$. <br>
B.\t$-3$. <br>
C.\t$3$. <br>
D.\t$5$. 
</div>`
        },
        hint: {
            tc: `由兩個方程聯立求解。 `,
            en: `Solve simultaneous equations.`
        },
        solution: `A (84%)<p><iframe src="https://www.youtube.com/embed/QkFRsnj5gOY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q04",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: {
            tc: `$0.0023456789=$
<div class="q-mcopt">
A.\t$0.00235$（準確至六位小數）。 <br>
B.\t$0.002345$（準確至六位小數）。 <br>
C.\t$0.002346$（準確至六位有效數字）。 <br>
D.\t$0.00234568$（準確至六位有效數字）。 
</div>`,
            en: `$0.0023456789=$
<div class="q-mcopt">
A.\t$0.00235$ (correct to 6 decimal places). <br>
B.\t$0.002345$ (correct to 6 decimal places). <br>
C.\t$0.002346$ (correct to 6 significant figures). <br>
D.\t$0.00234568$ (correct to 6 significant figures). 
</div>`
        },
        hint: {
            tc: `判斷有效數字及小數位。 `,
            en: `Check decimal places and significant figures.`
        },
        solution: `D (75%)<p><iframe src="https://www.youtube.com/embed/daAgLJZ61Tc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q05",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 2,
        content: {
            tc: `若 $m$ 及 $n$ 均為常數使得 $x^2 + mx + n \\equiv (x+4)(x-m) + 6$，則 $n =$
<div class="q-mcopt">
A.\t$-8$。 <br>
B.\t$-2$。 <br>
C.\t$2$。 <br>
D.\t$6$。 
</div>`,
            en: `If $m$ and $n$ are constants such that $x^2 + mx + n \\equiv (x+4)(x-m) + 6$, then $n =$
<div class="q-mcopt">
A.\t$-8$. <br>
B.\t$-2$. <br>
C.\t$2$. <br>
D.\t$6$. 
</div>`
        },
        hint: {
            tc: `展開兩邊並比較係數。 `,
            en: `Expand and compare coefficients.`
        },
        solution: `B (64%)<p><iframe src="https://www.youtube.com/embed/Dv5RosReiWA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q06",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: {
            tc: `$18+7x > 4$  或  $5-2x < 3$  的解為
<div class="q-mcopt">
A.\t$x \\gt -2$。 <br>
B.\t$x \\gt -1$。 <br>
C.\t$x \\gt 1$。 <br>
D.\t$-2 \\lt x \\lt 1$。 
</div>`,
            en: `The solution of $18+7x > 4$ or $5-2x < 3$ is
<div class="q-mcopt">
A.\t$x \\gt -2$. <br>
B.\t$x \\gt -1$. <br>
C.\t$x \\gt 1$. <br>
D.\t$-2 \\lt x \\lt 1$. 
</div>`
        },
        hint: {
            tc: `分別解兩個不等式再取聯集。 `,
            en: `Solve both inequalities and combine.`
        },
        solution: `A (63%)<p><iframe src="https://www.youtube.com/embed/uKpMqWw-vf4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q07",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: {
            tc: `若 $\\beta$ 為方程 $4x^2 - 5x - 1 = 0$ 的根，則 $7+10\\beta - 8\\beta^2 =$
<div class="q-mcopt">
A.\t$5$。 <br>
B.\t$7$。 <br>
C.\t$9$。 <br>
D.\t$11$。 
</div>`,
            en: `If $\\beta$ is a root of the equation $4x^2 - 5x - 1 = 0$, then $7+10\\beta - 8\\beta^2 =$
<div class="q-mcopt">
A.\t$5$. <br>
B.\t$7$. <br>
C.\t$9$. <br>
D.\t$11$. 
</div>`
        },
        hint: {
            tc: `由方程得 $4\\beta^2 = 5\\beta + 1$，代入簡化。 `,
            en: `Substitute $4\\beta^2 = 5\\beta + 1$ into the expression.`
        },
        solution: `A (59%)<p><iframe src="https://www.youtube.com/embed/OkFeivE8hJw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q08",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `圖中所示為 $y = a(x + b)^2$ 的圖像，其中 $a$ 及 $b$ 均為常數。 下列何者正確？
<div class="q-mcopt"><img src="img/2015dsep2q08.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$a < 0$  及  $b < 0$<br>
B.\t$a < 0$  及  $b > 0$<br>
C.\t$a > 0$  及  $b < 0$<br>
D.\t$a > 0$  及  $b > 0$
</div><div style="clear: both;"></div>`,
            en: `The figure shows the graph of $y = a(x + b)^2$, where $a$ and $b$ are constants. Which of the following is true?
<div class="q-mcopt"><img src="img/2015dsep2q08.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$a < 0$ and $b < 0$<br>
B.\t$a < 0$ and $b > 0$<br>
C.\t$a > 0$ and $b < 0$<br>
D.\t$a > 0$ and $b > 0$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `觀察開口方向及頂點位置。 `,
            en: `Observe the opening direction and vertex.`
        },
        solution: `D (53%)<p><iframe src="https://www.youtube.com/embed/ULd-sOwoK_U?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q09",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: {
            tc: `若某紀念品的價錢增加 $70\\%$ 且隨後減少 $60\\%$，求該紀念品的價錢改變的百分數。 
<div class="q-mcopt">
A.\t$-58\\%$<br>
B.\t$-32\\%$<br>
C.\t$2\\%$<br>
D.\t$10\\%$
</div>`,
            en: `If the price of a souvenir is increased by $70\\%$ and then decreased by $60\\%$, find the percentage change in the price of the souvenir.
<div class="q-mcopt">
A.\t$-58\\%$<br>
B.\t$-32\\%$<br>
C.\t$2\\%$<br>
D.\t$10\\%$
</div>`
        },
        hint: {
            tc: `設原價為 100，計算最終價錢。 `,
            en: `Assume original price is 100 and calculate.`
        },
        solution: `B (69%)<p><iframe src="https://www.youtube.com/embed/u2PXPF1s7DQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q10",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: {
            tc: `存款 $\\$50\\,000$，年利率 $6\\%$，年期 $3$ 年，複利計算，每季一結。 求本利和準確至最接近的元。 
<div class="q-mcopt">
A.\t$\\$59\\,000$<br>
B.\t$\\$59\\,551$<br>
C.\t$\\$59\\,755$<br>
D.\t$\\$59\\,781$
</div>`,
            en: `A sum of $\\$50\\,000$ is deposited at an interest rate of $6\\%$ per annum for $3$ years, compounded quarterly. Find the amount correct to the nearest dollar.
<div class="q-mcopt">
A.\t$\\$59\\,000$<br>
B.\t$\\$59\\,551$<br>
C.\t$\\$59\\,755$<br>
D.\t$\\$59\\,781$
</div>`
        },
        hint: {
            tc: `季利率為 $1.5\\%$，共 $12$ 期。 `,
            en: `Quarterly rate is $1.5\\%$ with $12$ periods.`
        },
        solution: `D (68%)<p><iframe src="https://www.youtube.com/embed/DKR3H0CYZEU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q11",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 2,
        content: {
            tc: `設 $a$、$b$ 及 $c$ 均為非零的數。 若 $a:c=5:3$ 及 $b:c=3:2$，則 $(a+c):(b+c)=$
<div class="q-mcopt">
A.\t$7:5$。<br>
B.\t$8:5$。<br>
C.\t$16:15$。<br>
D.\t$19:15$。
</div>`,
            en: `Let $a$, $b$ and $c$ be non-zero numbers. If $a:c=5:3$ and $b:c=3:2$, then $(a+c):(b+c)=$
<div class="q-mcopt">
A.\t$7:5$.<br>
B.\t$8:5$.<br>
C.\t$16:15$.<br>
D.\t$19:15$.
</div>`
        },
        hint: {
            tc: `設比例後代入計算。 `,
            en: `Express ratios in terms of a common variable.`
        },
        solution: `C (69%)<p><iframe src="https://www.youtube.com/embed/mY6KUwFiWlc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q12",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: {
            tc: `已知 $z$ 隨 $x^3$ 及 $y^2$ 正變。 當 $x=2$ 及 $y=1$ 時，$z=14$。 當 $x=3$ 及 $y=-2$ 時，$z=$
<div class="q-mcopt">
A.\t$-189$。 <br>
B.\t$-126$。 <br>
C.\t$126$。 <br>
D.\t$189$。 
</div>`,
            en: `It is given that $z$ varies as $x^3$ and $y^2$. When $x=2$ and $y=1$, $z=14$. When $x=3$ and $y=-2$, $z=$
<div class="q-mcopt">
A.\t$-189$. <br>
B.\t$-126$. <br>
C.\t$126$. <br>
D.\t$189$. 
</div>`
        },
        hint: {
            tc: `寫出 $z = k x^3 y^2$ 並求 $k$。 `,
            en: `Form $z = k x^3 y^2$ and find $k$.`
        },
        solution: `D (75%)<p><iframe src="https://www.youtube.com/embed/v4VoPEPM3oI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q13",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 1,
        content: {
            tc: `圖中，第 $1$ 個圖案包含 $5$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $4$ 粒點子所組成。 求第 $6$ 個圖案的點子數目。
<img src="img/2015dsep2q13.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-mcopt">
A.\t$21$<br>
B.\t$25$<br>
C.\t$29$<br>
D.\t$33$
</div>`,
            en: `In the figure, the 1st pattern consists of $5$ dots. For any positive integer $n$, the $(n+1)$th pattern is formed by adding $4$ dots to the $n$th pattern. Find the number of dots in the 6th pattern.
<img src="img/2015dsep2q13.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-mcopt">
A.\t$21$<br>
B.\t$25$<br>
C.\t$29$<br>
D.\t$33$
</div>`
        },
        hint: {
            tc: `等差數列通項計算。 `,
            en: `Calculate using general term of arithmetic sequence.`
        },
        solution: `B (92%)<p><iframe src="https://www.youtube.com/embed/GXHpluMxAZc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q14",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 2,
        content: {
            tc: `現有砂糖一袋。 該袋內砂糖的重量量得 $5\\text{ kg}$ 準確至最接近的 kg。 若將該袋砂糖包裝成 $n$ 包使每包內砂糖的重量均量得 $10\\text{ g}$ 準確至最接近的 g，求 $n$ 的最大可取值。 
<div class="q-mcopt">
A.\t$429$<br>
B.\t$500$<br>
C.\t$578$<br>
D.\t$579$
</div>`,
            en: `There is a bag of white sugar. The weight of white sugar in the bag is measured as $5\\text{ kg}$ correct to the nearest kg. If the bag of white sugar is packed into $n$ packets such that the weight of white sugar in each packet is measured as $10\\text{ g}$ correct to the nearest g, find the greatest possible value of $n$.
<div class="q-mcopt">
A.\t$429$<br>
B.\t$500$<br>
C.\t$578$<br>
D.\t$579$
</div>`
        },
        hint: {
            tc: `考慮重量誤差範圍。 `,
            en: `Consider upper and lower limits of weight.`
        },
        solution: `C (56%)<p><iframe src="https://www.youtube.com/embed/MCfmVbNzTok?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q15",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)", "Mensuration"],
        difficulty: 1,
        content: {
            tc: `圖中，$N$ 為 $AC$ 上的一點且 $E$ 為 $DN$ 上的一點。 若 $DN = 6\\text{ cm}$ 及 $EN = 5\\text{ cm}$，則 $\\Delta ABC$ 的面積為
<div class="q-mcopt"><img src="img/2015dsep2q15.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$24\\text{ cm}^2$。 <br>
B.\t$30\\text{ cm}^2$。 <br>
C.\t$96\\text{ cm}^2$。 <br>
D.\t$192\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $N$ is a point lying on $AC$ and $E$ is a point lying on $DN$. If $DN = 6\\text{ cm}$ and $EN = 5\\text{ cm}$, then the area of $\\Delta ABC$ is
<div class="q-mcopt"><img src="img/2015dsep2q15.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$24\\text{ cm}^2$. <br>
B.\t$30\\text{ cm}^2$. <br>
C.\t$96\\text{ cm}^2$. <br>
D.\t$192\\text{ cm}^2$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用面積比與高的比例。 `,
            en: `Use ratio of areas and heights.`
        },
        solution: `C (91%)<p><iframe src="https://www.youtube.com/embed/iibgW3dMcic?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q16",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `一直立圓錐體的高及底半徑分別為 $12\\text{ cm}$ 及 $9\\text{ cm}$。 圖中所示的平截頭體是從該圓錐體切去其上部分而成。 該平截頭體的高為 $8\\text{ cm}$，求該平截頭體的體積。 
<div class="q-mcopt"><img src="img/2015dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$210\\pi\\text{ cm}^3$<br>
B.\t$312\\pi\\text{ cm}^3$<br>
C.\t$324\\pi\\text{ cm}^3$<br>
D.\t$936\\pi\\text{ cm}^3$
</div><div style="clear: both;"></div>`,
            en: `The height and the base radius of a right circular cone are $12\\text{ cm}$ and $9\\text{ cm}$ respectively. The figure shows a frustum which is made by cutting off the upper part of the circular cone. The height of the frustum is $8\\text{ cm}$. Find the volume of the frustum.
<div class="q-mcopt"><img src="img/2015dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$210\\pi\\text{ cm}^3$<br>
B.\t$312\\pi\\text{ cm}^3$<br>
C.\t$324\\pi\\text{ cm}^3$<br>
D.\t$936\\pi\\text{ cm}^3$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `用相似求小圓錐半徑後計算體積差。 `,
            en: `Use similarity to find small cone radius and subtract volumes.`
        },
        solution: `B (70%)<p><iframe src="https://www.youtube.com/embed/ImDLmdd3XZ0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q17",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 3,
        content: {
            tc: `圖中，$ABCD$ 為一平行四邊形。 $E$ 為 $CD$ 上的一點使得 $DE:EC = 2:3$。 $AD$ 的延線與 $BE$ 的延線相交於 $F$，而 $AE$ 的延線與 $BC$ 的延線相交於 $G$。 若 $\\Delta DEF$ 的面積為 $8\\text{ cm}^2$，則 $\\Delta CEG$ 的面積為
<div class="q-mcopt"><img src="img/2015dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$12\\text{ cm}^2$。 <br>
B.\t$18\\text{ cm}^2$。 <br>
C.\t$20\\text{ cm}^2$。 <br>
D.\t$27\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a parallelogram. $E$ is a point lying on $CD$ such that $DE:EC = 2:3$. $AD$ produced and $BE$ produced meet at $F$ while $AE$ produced and $BC$ produced meet at $G$. If the area of $\\Delta DEF$ is $8\\text{ cm}^2$, then the area of $\\Delta CEG$ is
<div class="q-mcopt"><img src="img/2015dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$12\\text{ cm}^2$. <br>
B.\t$18\\text{ cm}^2$. <br>
C.\t$20\\text{ cm}^2$. <br>
D.\t$27\\text{ cm}^2$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用面積比與底的比例關係。 `,
            en: `Use ratio of areas and base ratio.`
        },
        solution: `D (26%)<p><iframe src="https://www.youtube.com/embed/snQKCQkubmM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q18",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: {
            tc: `圖中，$\\dfrac{AD}{AB} =$
<div class="q-mcopt"><img src="img/2015dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\cos \\alpha \\tan \\beta$。 <br>
B.\t$\\sin \\alpha \\tan \\beta$。 <br>
C.\t$\\dfrac{\\cos \\alpha}{\\tan \\beta}$。 <br>
D.\t$\\dfrac{\\sin \\alpha}{\\tan \\beta}$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $\\dfrac{AD}{AB} =$
<div class="q-mcopt"><img src="img/2015dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\cos \\alpha \\tan \\beta$. <br>
B.\t$\\sin \\alpha \\tan \\beta$. <br>
C.\t$\\dfrac{\\cos \\alpha}{\\tan \\beta}$. <br>
D.\t$\\dfrac{\\sin \\alpha}{\\tan \\beta}$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `在直角三角形中表達比值。 `,
            en: `Express ratios in right-angled triangles.`
        },
        solution: `A (56%)<p><iframe src="https://www.youtube.com/embed/okc592xb69w?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q19",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: {
            tc: `$\\dfrac{\\cos 180^\\circ}{1 + \\sin(90^\\circ + \\theta)} + \\dfrac{\\cos 360^\\circ}{1 + \\sin(270^\\circ + \\theta)} =$
<div class="q-mcopt">
A.\t$0$。 <br>
B.\t$\\dfrac{2}{\\cos \\theta}$。 <br>
C.\t$\\dfrac{2 \\cos \\theta}{\\sin^2 \\theta}$。 <br>
D.\t$\\dfrac{2 \\sin \\theta}{\\cos^2 \\theta}$。 
</div>`,
            en: `$\\dfrac{\\cos 180^\\circ}{1 + \\sin(90^\\circ + \\theta)} + \\dfrac{\\cos 360^\\circ}{1 + \\sin(270^\\circ + \\theta)} =$
<div class="q-mcopt">
A.\t$0$. <br>
B.\t$\\dfrac{2}{\\cos \\theta}$. <br>
C.\t$\\dfrac{2 \\cos \\theta}{\\sin^2 \\theta}$. <br>
D.\t$\\dfrac{2 \\sin \\theta}{\\cos^2 \\theta}$. 
</div>`
        },
        hint: {
            tc: `先化簡特殊角及誘導公式。 `,
            en: `Simplify special angles and reduction formulas.`
        },
        solution: `C (63%)<p><iframe src="https://www.youtube.com/embed/Cr1Jge3Wmjw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q20",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$AD$ 為圓 $ABCDE$ 的一直徑。 若 $\\angle BAD = 58^\\circ$ 及 $BC = CD$，則 $\\angle AEC =$
<div class="q-mcopt"><img src="img/2015dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$32^\\circ$。 <br>
B.\t$58^\\circ$。 <br>
C.\t$61^\\circ$。 <br>
D.\t$64^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $AD$ is a diameter of the circle $ABCDE$. If $\\angle BAD = 58^\\circ$ and $BC = CD$, then $\\angle AEC =$
<div class="q-mcopt"><img src="img/2015dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$32^\\circ$. <br>
B.\t$58^\\circ$. <br>
C.\t$61^\\circ$. <br>
D.\t$64^\\circ$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用直徑及等弦對等角。 `,
            en: `Use diameter properties and equal chords.`
        },
        solution: `C (60%)<p><iframe src="https://www.youtube.com/embed/yn7kLLnFKpo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q21",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)", "Mensuration"],
        difficulty: 1,
        content: {
            tc: `圓 $ABCD$ 的直徑 $AC$ 與直徑 $BD$ 相交於點 $E$。 若 $\\angle AEB = 90^\\circ$ 及 $AC = 24\\text{ cm}$，則 $\\Delta AEB$ 的面積為
<div class="q-mcopt">
A.\t$41\\text{ cm}^2$。 <br>
B.\t$72\\text{ cm}^2$。 <br>
C.\t$144\\text{ cm}^2$。 <br>
D.\t$288\\text{ cm}^2$。 
</div>`,
            en: `The diameters $AC$ and $BD$ of the circle $ABCD$ intersect at the point $E$. If $\\angle AEB = 90^\\circ$ and $AC = 24\\text{ cm}$, then the area of $\\Delta AEB$ is
<div class="q-mcopt">
A.\t$41\\text{ cm}^2$. <br>
B.\t$72\\text{ cm}^2$. <br>
C.\t$144\\text{ cm}^2$. <br>
D.\t$288\\text{ cm}^2$. 
</div>`
        },
        hint: {
            tc: `直徑互相垂直時為正方形。 `,
            en: `When diameters are perpendicular, form right-angled isosceles triangles.`
        },
        solution: `B (72%)<p><iframe src="https://www.youtube.com/embed/cRgS-oKCG7Y?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q22",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `若某正多邊形的一內角為該多邊形的一外角的 $5$ 倍，則下列何者正確？
<div class="q-mcms">
I.\t該多邊形的每一內角均為 $150^\\circ$。
II.\t該多邊形的對角線數目為 $6$。
III.\t該多邊形的旋轉對稱的折式數目為 $6$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 II<br>
D.\t只有 II 及 III
</div>`,
            en: `If an interior angle of a regular polygon is $5$ times an exterior angle of the polygon, which of the following is/are true?
<div class="q-mcms">
I.\tEach interior angle of the polygon is $150^\\circ$.
II.\tThe number of diagonals of the polygon is $6$.
III.\tThe number of folds of rotational symmetry of the polygon is $6$.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `由內外角關係求邊數。 `,
            en: `Find the number of sides using interior and exterior angle relationship.`
        },
        solution: `A (47%)<p><iframe src="https://www.youtube.com/embed/FPeLfaBME0Q?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q23",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: {
            tc: `點 $A$ 的直角坐標為 $(\\sqrt{3}, -1)$。 若 $A$ 對 $y$ 軸作反射，則它的像的極坐標為<div class="q-mcopt">
A.\t$(1, 210^\\circ)$。 <br>
B.\t$(1, 240^\\circ)$。 <br>
C.\t$(2, 210^\\circ)$。 <br>
D.\t$(2, 240^\\circ)$。 
</div>`,
            en: `The rectangular coordinates of the point $A$ are $(\\sqrt{3}, -1)$. If $A$ is reflected with respect to the $y$-axis, then the polar coordinates of its image are
<div class="q-mcopt">
A.\t$(1, 210^\\circ)$. <br>
B.\t$(1, 240^\\circ)$. <br>
C.\t$(2, 210^\\circ)$. <br>
D.\t$(2, 240^\\circ)$. 
</div>`
        },
        hint: {
            tc: `先反射再轉極坐標。 `,
            en: `Reflect first then convert to polar coordinates.`
        },
        solution: `C (59%)<p><iframe src="https://www.youtube.com/embed/MAi3hdiEdYc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q24",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 1,
        content: {
            tc: `點 $A$ 及點 $B$ 的坐標分別為 $(2, 0)$ 及 $(1, 5)$。 若 $P$ 為直角坐標平面上的一動點使得 $P$ 與 $A$ 及 $B$ 等距，則 $P$ 的軌跡是
<div class="q-mcopt">
A.\t$AB$ 的垂直平分線。 <br>
B.\t以 $AB$ 為一直徑的圓。 <br>
C.\t通過 $A$ 及 $B$ 的直線。 <br>
D.\t$\\angle AOB$ 的角平分線，其中 $O$ 為原點。 
</div>`,
            en: `The coordinates of the points $A$ and $B$ are $(2, 0)$ and $(1, 5)$ respectively. If $P$ is a moving point in the rectangular coordinate plane such that $P$ is equidistant from $A$ and $B$, then the locus of $P$ is
<div class="q-mcopt">
A.\tthe perpendicular bisector of $AB$. <br>
B.\tthe circle with $AB$ as a diameter. <br>
C.\tthe straight line which passes through $A$ and $B$. <br>
D.\tthe angle bisector of $\\angle AOB$, where $O$ is the origin. 
</div>`
        },
        hint: {
            tc: `$PA=PB$ 的軌跡是垂直平分線。 `,
            en: `Locus of $PA=PB$ is the perpendicular bisector.`
        },
        solution: `A (73%)<p><iframe src="https://www.youtube.com/embed/xd1K3QZ_L3g?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q25",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `圖中，直線 $L_1$ 及直線 $L_2$ 的方程分別為 $ax=1$ 及 $bx+cy=1$。 下列何者正確？
<div class="q-mcms"><img src="img/2015dsep2q25.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a \\lt 0$
II.\t$a \\lt b$
III.\t$c \\gt 0$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
            en: `In the figure, the equations of the straight lines $L_1$ and $L_2$ are $ax=1$ and $bx+cy=1$ respectively. Which of the following are true?
<div class="q-mcms"><img src="img/2015dsep2q25.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a \\lt 0$
II.\t$a \\lt b$
III.\t$c \\gt 0$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由圖像判斷截距及斜率。 `,
            en: `Determine intercepts and slopes from graph.`
        },
        solution: `B (37%)<p><iframe src="https://www.youtube.com/embed/hDUnE-tiru0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q26",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 1,
        content: {
            tc: `圓 $C$ 通過點 $(0,3)$。 若 $C$ 的圓心的坐標為 $(-4,3)$，則 $C$ 的方程為
<div class="q-mcopt">
A.\t$x^2 + y^2 - 8x + 6y + 9 = 0$。 <br>
B.\t$x^2 + y^2 - 8x + 6y + 16 = 0$。 <br>
C.\t$x^2 + y^2 + 8x - 6y + 9 = 0$。 <br>
D.\t$x^2 + y^2 + 8x - 6y + 16 = 0$。 
</div>`,
            en: `A circle $C$ passes through the point $(0,3)$. If the coordinates of the centre of $C$ are $(-4,3)$, then the equation of $C$ is
<div class="q-mcopt">
A.\t$x^2 + y^2 - 8x + 6y + 9 = 0$. <br>
B.\t$x^2 + y^2 - 8x + 6y + 16 = 0$. <br>
C.\t$x^2 + y^2 + 8x - 6y + 9 = 0$. <br>
D.\t$x^2 + y^2 + 8x - 6y + 16 = 0$. 
</div>`
        },
        hint: {
            tc: `用圓心及半徑求方程。 `,
            en: `Find equation using centre and radius.`
        },
        solution: `C (70%)<p><iframe src="https://www.youtube.com/embed/gWtVYBHXPis?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q27",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `在某遊戲中投擲兩枚勻稱骰子。 若所擲得的兩數之和為 $7$，將賺得 $\\$36$； 否則，將賺得 $\\$6$。 求在該遊戲中所賺得的金額的期望值。 
<div class="q-mcopt">
A.\t$\\$11$<br>
B.\t$\\$12$<br>
C.\t$\\$30$<br>
D.\t$\\$31$
</div>`,
            en: `Two fair dice are thrown in a game. If the sum of the two numbers thrown is $7$, $\\$36$ will be gained; otherwise, $\\$6$ will be gained. Find the expected gain of the game.
<div class="q-mcopt">
A.\t$\\$11$<br>
B.\t$\\$12$<br>
C.\t$\\$30$<br>
D.\t$\\$31$
</div>`
        },
        hint: {
            tc: `計算和為 7 的概率後求期望值。 `,
            en: `Find probability of getting sum 7 and calculate expected value.`
        },
        solution: `A (47%)<p><iframe src="https://www.youtube.com/embed/Fm9QZ0EILsM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q28",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability", "Statistical Graphs"],
        difficulty: 1,
        content: {
            tc: `下面的棒形圖顯示某班學生擁有鑰匙的數目的分佈。 求從該班中隨機選出一名學生擁有 $3$ 條鑰匙的概率。 
<div class="q-mcopt"><img src="img/2015dsep2q28zh.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{1}{5}$<br>
B.\t$\\dfrac{2}{11}$<br>
C.\t$\\dfrac{4}{11}$<br>
D.\t$\\dfrac{9}{11}$
</div><div style="clear: both;"></div>`,
            en: `The bar chart below shows the distribution of the numbers of keys owned by the students in a class. Find the probability that a randomly selected student from the class owns $3$ keys.
<div class="q-mcopt"><img src="img/2015dsep2q28en.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{1}{5}$<br>
B.\t$\\dfrac{2}{11}$<br>
C.\t$\\dfrac{4}{11}$<br>
D.\t$\\dfrac{9}{11}$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由棒形圖讀取人數後計算。 `,
            en: `Read number of students from bar chart.`
        },
        solution: `B (84%)<p><iframe src="https://www.youtube.com/embed/OACURmO4a1M?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q29",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 1,
        content: {
            tc: `下面的框線圖顯示在某學期一些教師的閱書數目的分佈。 求該分佈的四分位數間距。
		<img src="img/2015dsep2q29zh.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-mcopt">
A.\t$20$<br>
B.\t$35$<br>
C.\t$40$<br>
D.\t$45$
</div>`,
            en: `The box-and-whisker diagram below shows the distribution of the numbers of books read by some teachers in a term. Find the inter-quartile range of the distribution.
		<img src="img/2015dsep2q29en.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-mcopt">
A.\t$20$<br>
B.\t$35$<br>
C.\t$40$<br>
D.\t$45$
</div>`
        },
        hint: {
            tc: `從框線圖讀取 $Q_1$ 及 $Q_3$。 `,
            en: `Read $Q_1$ and $Q_3$ from box-and-whisker diagram.`
        },
        solution: `A (91%)<p><iframe src="https://www.youtube.com/embed/VWSFGHB3vIo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q30",
        year: 2015,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 2,
        content: {
            tc: `考慮以下整數：<div style="text-align: center;">2  2  3  3  3  3  3  5  5  6  8  8  9  10  $m$</div>設 $p$、$q$ 及 $r$ 分別為以上整數的平均值、中位數及眾數。 若 $3 \\le m \\le 5$，則下列何者必為正確？
<div class="q-mcms">
I.\t$p \\gt q$
II.\t$p \\gt r$
III.\t$q \\gt r$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `Consider the following integers:
<div style="text-align: center;">2  2  3  3  3  3  3  5  5  6  8  8  9  10  $m$</div>Let $p$, $q$ and $r$ be the mean, the median and the mode of the above integers respectively. If $3 \\le m \\le 5$, which of the following must be true?
<div class="q-mcms">
I.\t$p \\gt q$
II.\t$p \\gt r$
III.\t$q \\gt r$
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `由 $m$ 的範圍判斷平均值、中位數、眾數。 `,
            en: `Determine mean, median and mode based on range of $m$.`
        },
        solution: `B (45%)<p><iframe src="https://www.youtube.com/embed/2Oh9Ddrt4Gk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q31",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 2,
        content: {
            tc: `$\\dfrac{1}{x^2 - 2x + 1} - \\dfrac{1}{x^2 + x - 2} =$
<div class="q-mcopt">
A.\t$\\dfrac{1}{(x-1)(x+2)}$。<br>
B.\t$\\dfrac{1}{(x-1)^2(x+2)}$。<br>
C.\t$\\dfrac{3}{(x-1)^2(x+2)}$。<br>
D.\t$\\dfrac{2x+1}{(x-1)^2(x+2)}$。
</div>`,
            en: `$\\dfrac{1}{x^2 - 2x + 1} - \\dfrac{1}{x^2 + x - 2} =$
<div class="q-mcopt">
A.\t$\\dfrac{1}{(x-1)(x+2)}$.<br>
B.\t$\\dfrac{1}{(x-1)^2(x+2)}$.<br>
C.\t$\\dfrac{3}{(x-1)^2(x+2)}$.<br>
D.\t$\\dfrac{2x+1}{(x-1)^2(x+2)}$.
</div>`
        },
        hint: {
            tc: `通分後合併分子。 `,
            en: `Combine fractions with a common denominator.`
        },
        solution: `C (62%)<p><iframe src="https://www.youtube.com/embed/N6xr8LGoYxg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q32",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
            tc: `圖中的圖像顯示 $\\log_3 x$ 與 $\\log_3 y$ 之間的線性關係。 下列何者必為正確？
<div class="q-mcopt"><img src="img/2015dsep2q32.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$x^2 y^3 = 729$<br>
B.\t$x^3 y^2 = 729$<br>
C.\t$x^2 + y^3 = 729$<br>
D.\t$x^3 + y^2 = 729$
</div><div style="clear: both;"></div>`,
            en: `The graph in the figure shows the linear relation between $\\log_3 x$ and $\\log_3 y$. Which of the following must be true?
<div class="q-mcopt"><img src="img/2015dsep2q32.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$x^2 y^3 = 729$<br>
B.\t$x^3 y^2 = 729$<br>
C.\t$x^2 + y^3 = 729$<br>
D.\t$x^3 + y^2 = 729$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由斜率及截距換底。 `,
            en: `Form linear equation using slope and intercepts.`
        },
        solution: `A (30%)<p><iframe src="https://www.youtube.com/embed/OaIJSkqQKh0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q33",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: {
            tc: `$11 + 2^6 + 2^{10} + 2^{11} =$
<div class="q-mcopt">
A.\t$110001001011_2$。<br>
B.\t$110100100011_2$。<br>
C.\t$1100001001011_2$。<br>
D.\t$1101001000011_2$。
</div>`,
            en: `$11 + 2^6 + 2^{10} + 2^{11} =$
<div class="q-mcopt">
A.\t$110001001011_2$.<br>
B.\t$110100100011_2$.<br>
C.\t$1100001001011_2$.<br>
D.\t$1101001000011_2$.
</div>`
        },
        hint: {
            tc: `直接轉成二進制。 `,
            en: `Convert powers of 2 directly to binary.`
        },
        solution: `A (66%)<p><iframe src="https://www.youtube.com/embed/Z-NwWiJVjIA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q34",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: {
            tc: `設 $k$ 為一常數。 若二次方程 $x^2 + kx - 2 = 0$ 的根為 $\\alpha$ 及 $\\beta$，則 $\\alpha^2 + \\beta^2 =$
<div class="q-mcopt">
A.\t$k^2$。 <br>
B.\t$k^2 + 4$。 <br>
C.\t$k^2 - 4$。 <br>
D.\t$k^2 - 8$。 
</div>`,
            en: `Let $k$ be a constant. If the roots of the quadratic equation $x^2 + kx - 2 = 0$ are $\\alpha$ and $\\beta$, then $\\alpha^2 + \\beta^2 =$
<div class="q-mcopt">
A.\t$k^2$. <br>
B.\t$k^2 + 4$. <br>
C.\t$k^2 - 4$. <br>
D.\t$k^2 - 8$. 
</div>`
        },
        hint: {
            tc: `用韋達定理 $\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta$。 `,
            en: `Use Vieta's formulas: $\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta$.`
        },
        solution: `B (62%)<p><iframe src="https://www.youtube.com/embed/wCfg2rkWghc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q35",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: {
            tc: `設 $z = (a+5)i^6 + (a-3)i^7$，其中 $a$ 為一實數。 若 $z$ 為一實數，則 $a =$
<div class="q-mcopt">
A.\t$-5$。 <br>
B.\t$-3$。 <br>
C.\t$3$。 <br>
D.\t$5$。 
</div>`,
            en: `Let $z = (a+5)i^6 + (a-3)i^7$, where $a$ is a real number. If $z$ is a real number, then $a =$
<div class="q-mcopt">
A.\t$-5$. <br>
B.\t$-3$. <br>
C.\t$3$. <br>
D.\t$5$. 
</div>`
        },
        hint: {
            tc: `令虛部為零。 `,
            en: `Set the imaginary part to zero.`
        },
        solution: `C (51%)<p><iframe src="https://www.youtube.com/embed/CLxW2PTcWvA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q36",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: {
            tc: `圖中所示為一陰影區域（包括邊界在內）。 若 $(a, b)$ 為陰影區域中的一點，則下列何者正確？
<div class="q-mcms"><img src="img/2015dsep2q36.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a \\le 4$
II.\t$a \\ge b - 5$
III.\t$a \\ge 10 - 2b$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
            en: `The figure shows a shaded region (including the boundary). If $(a, b)$ is a point lying in the shaded region, which of the following are true?
<div class="q-mcms"><img src="img/2015dsep2q36.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a \\le 4$
II.\t$a \\ge b - 5$
III.\t$a \\ge 10 - 2b$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由邊界直線判斷不等式。 `,
            en: `Determine inequalities from boundary lines.`
        },
        solution: `D (43%)<p><iframe src="https://www.youtube.com/embed/U3vsSAasQtc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q37",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 3,
        content: {
            tc: `設 $x_n$ 為一等比數列的第 $n$ 項。 若 $x_6 = 216$ 及 $x_8 = 96$，則下列何者必為正確？
<div class="q-mcms">
I.\t$x_3 = 729$
II.\t$\\dfrac{x_5}{x_7} \\gt 1$
III.\t$x_2 + x_4 + x_6 + \\cdots + x_{2n} \\lt 2015$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `Let $x_n$ be the $n$th term of a geometric sequence. If $x_6 = 216$ and $x_8 = 96$, which of the following must be true?
<div class="q-mcms">
I.\t$x_3 = 729$
II.\t$\\dfrac{x_5}{x_7} \\gt 1$
III.\t$x_2 + x_4 + x_6 + \\cdots + x_{2n} \\lt 2015$
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `求公比後判斷各選項。 `,
            en: `Find the common ratio and check each statement.`
        },
        solution: `D (27%)<p><iframe src="https://www.youtube.com/embed/qTiTucm_2Ts?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q38",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: {
            tc: `當 $0^\\circ \\le x < 360^\\circ$ 時，方程 $\\cos^2 x - \\sin x = 1$ 有多少個根？
<div class="q-mcopt">
A.\t$2$<br>
B.\t$3$<br>
C.\t$4$<br>
D.\t$5$
</div>`,
            en: `For $0^\\circ \\le x < 360^\\circ$, how many roots does the equation $\\cos^2 x - \\sin x = 1$ have?
<div class="q-mcopt">
A.\t$2$<br>
B.\t$3$<br>
C.\t$4$<br>
D.\t$5$
</div>`
        },
        hint: {
            tc: `化成關於 $\\sin x$ 的方程後考慮範圍。 `,
            en: `Convert to equation in $\\sin x$ and solve in given range.`
        },
        solution: `B (36%)<p><iframe src="https://www.youtube.com/embed/v9sxXBoDd24?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q39",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: {
            tc: `設 $k$ 為一正常數且 $-180^\\circ < \\theta < 180^\\circ$。 若圖中所示為 $y = \\sin(kx^\\circ + \\theta)$ 的圖像，則
<div class="q-mcopt"><img src="img/2015dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$k = \\dfrac{1}{2}$  及  $\\theta = -30^\\circ$。 <br>
B.\t$k = \\dfrac{1}{2}$  及  $\\theta = 30^\\circ$。 <br>
C.\t$k = 2$  及  $\\theta = -30^\\circ$。 <br>
D.\t$k = 2$  及  $\\theta = 30^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `Let $k$ be a positive constant and $-180^\\circ < \\theta < 180^\\circ$. If the figure shows the graph of $y = \\sin(kx^\\circ + \\theta)$, then
<div class="q-mcopt"><img src="img/2015dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$k = \\dfrac{1}{2}$ and $\\theta = -30^\\circ$. <br>
B.\t$k = \\dfrac{1}{2}$ and $\\theta = 30^\\circ$. <br>
C.\t$k = 2$ and $\\theta = -30^\\circ$. <br>
D.\t$k = 2$ and $\\theta = 30^\\circ$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由週期及相位判斷。 `,
            en: `Determine values using period and phase shift.`
        },
        solution: `D (49%)<p><iframe src="https://www.youtube.com/embed/ww7QS4oVuGY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q40",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$AB$ 及 $AC$ 分別為圓在 $B$ 及 $C$ 的切線。 $BD$ 為該圓的一直徑。 $AC$ 的延線與 $BD$ 的延線相交於 $E$。 若 $AB = 6\\text{ cm}$ 及 $AE = 10\\text{ cm}$，則 $BD =$
<div class="q-mcopt"><img src="img/2015dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$3\\text{ cm}$。 <br>
B.\t$5\\text{ cm}$。 <br>
C.\t$6\\text{ cm}$。 <br>
D.\t$8\\text{ cm}$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $AB$ and $AC$ are the tangents to the circle at $B$ and $C$ respectively. $BD$ is a diameter of the circle. $AC$ produced and $BD$ produced meet at $E$. If $AB = 6\\text{ cm}$ and $AE = 10\\text{ cm}$, then $BD =$
<div class="q-mcopt"><img src="img/2015dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$3\\text{ cm}$. <br>
B.\t$5\\text{ cm}$. <br>
C.\t$6\\text{ cm}$. <br>
D.\t$8\\text{ cm}$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用切線性質及相似三角形。 `,
            en: `Use tangent properties and similar triangles.`
        },
        solution: `C (51%)<p><iframe src="https://www.youtube.com/embed/1uFju3ulrVk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q41",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `求常數 $k$ 使得圓 $x^2 + y^2 + 2x - 6y + k = 0$ 與直線 $x + y + 4 = 0$ 只相交於一點。 
<div class="q-mcopt">
A.\t$-16$<br>
B.\t$-8$<br>
C.\t$8$<br>
D.\t$16$
</div>`,
            en: `Find the constant $k$ such that the circle $x^2 + y^2 + 2x - 6y + k = 0$ and the straight line $x + y + 4 = 0$ intersect at only one point.
<div class="q-mcopt">
A.\t$-16$<br>
B.\t$-8$<br>
C.\t$8$<br>
D.\t$16$
</div>`
        },
        hint: {
            tc: `將直線代入圓方程後令判別式為零。 `,
            en: `Substitute line into circle equation and set discriminant to zero.`
        },
        solution: `B (42%)<p><iframe src="https://www.youtube.com/embed/YCsrasQ2v8k?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q42",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Four Centres of a Triangle"],
        difficulty: 3,
        content: {
            tc: `設 $O$ 為原點。 點 $P$ 及點 $Q$ 的坐標分別為 $(0, 60)$ 及 $(96, 48)$。 $\\Delta OPQ$ 的垂心的 $x$ 坐標為
<div class="q-mcopt">
A.\t$6$。 <br>
B.\t$32$。 <br>
C.\t$45$。 <br>
D.\t$48$。 
</div>`,
            en: `Let $O$ be the origin. The coordinates of the points $P$ and $Q$ are $(0, 60)$ and $(96, 48)$ respectively. The $x$-coordinate of the orthocentre of $\\Delta OPQ$ is
<div class="q-mcopt">
A.\t$6$. <br>
B.\t$32$. <br>
C.\t$45$. <br>
D.\t$48$. 
</div>`
        },
        hint: {
            tc: `利用垂心性質及垂直條件。 `,
            en: `Use orthocentre properties and perpendicular conditions.`
        },
        solution: `A (30%)<p><iframe src="https://www.youtube.com/embed/rMtmDM8SFlk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q43",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: {
            tc: `$6$ 名男生與 $2$ 名女生排成一隊。 若沒有女生相鄰而排，則可排成多少不同的隊？
<div class="q-mcopt">
A.\t$1\\,440$<br>
B.\t$10\\,080$<br>
C.\t$30\\,240$<br>
D.\t$35\\,280$
</div>`,
            en: `A queue is formed by $6$ boys and $2$ girls. If no girls are next to each other, how many different queues can be formed?
<div class="q-mcopt">
A.\t$1\\,440$<br>
B.\t$10\\,080$<br>
C.\t$30\\,240$<br>
D.\t$35\\,280$
</div>`
        },
        hint: {
            tc: `先排男生再插入女生。 `,
            en: `Arrange boys first, then insert girls into gaps.`
        },
        solution: `C (51%)<p><iframe src="https://www.youtube.com/embed/_0z7qyAnJRs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q44",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `$P$ 袋內有 $2$ 個紅球及 $4$ 個綠球，而 $Q$ 袋內有 $1$ 個紅球及 $3$ 個綠球。 若隨機選取一袋且隨後從該袋中隨機抽出一個球，求抽出綠球的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{3}{10}$<br>
B.\t$\\dfrac{7}{10}$<br>
C.\t$\\dfrac{7}{24}$<br>
D.\t$\\dfrac{17}{24}$
</div>`,
            en: `Bag $P$ contains $2$ red balls and $4$ green balls while bag $Q$ contains $1$ red ball and $3$ green balls. If a bag is randomly chosen and then a ball is randomly drawn from the bag, find the probability that a green ball is drawn.
<div class="q-mcopt">
A.\t$\\dfrac{3}{10}$<br>
B.\t$\\dfrac{7}{10}$<br>
C.\t$\\dfrac{7}{24}$<br>
D.\t$\\dfrac{17}{24}$
</div>`
        },
        hint: {
            tc: `用全概率公式。 `,
            en: `Use law of total probability.`
        },
        solution: `D (51%)<p><iframe src="https://www.youtube.com/embed/75QEqCWaKBk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2015-DSE-MATH-CP2-Q45",
        year: 2015,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion", "Change of Data"],
        difficulty: 3,
        content: {
            tc: `設 $x_1$、$y_1$ 及 $z_1$ 分別為某組數 $\\{a_1, a_2, a_3, \\dots, a_{50}\\}$ 的平均值、中位數及方差，而 $x_2$、$y_2$ 及 $z_2$ 分別為 $\\{a_1, a_2, a_3, \\dots, a_{49}\\}$ 這組數的平均值、中位數及方差。 若 $x_1 = a_{50}$，則下列何者必為正確？
<div class="q-mcms">
I.\t$x_1 = x_2$
II.\t$y_1 \\ge y_2$
III.\t$z_1 \\le z_2$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `Let $x_1$, $y_1$ and $z_1$ be the mean, the median and the variance of a group of numbers $\\{a_1, a_2, a_3, \\dots, a_{50}\\}$ respectively while $x_2$, $y_2$ and $z_2$ be the mean, the median and the variance of the group of numbers $\\{a_1, a_2, a_3, \\dots, a_{49}\\}$ respectively. If $x_1 = a_{50}$, which of the following must be true?
<div class="q-mcms">
I.\t$x_1 = x_2$
II.\t$y_1 \\ge y_2$
III.\t$z_1 \\le z_2$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `當最後一項等於平均值時，去掉它不改變平均值。 `,
            en: `Removing a data equal to the mean does not change the mean.`
        },
        solution: `B (25%)<p><iframe src="https://www.youtube.com/embed/HVcm1XeQguA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
);
