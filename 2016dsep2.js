// 2016dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2016-DSE-MATH-CP2-Q01",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 2,
        content: {
            tc: `$8^{222} \\cdot 5^{666} =$
<div class="q-mcopt">
A.\t$10^{666}$。<br>
B.\t$10^{888}$。<br>
C.\t$40^{666}$。<br>
D.\t$40^{888}$。
</div>`,
            en: `$8^{222} \\cdot 5^{666} =$
<div class="q-mcopt">
A.\t$10^{666}$.<br>
B.\t$10^{888}$.<br>
C.\t$40^{666}$.<br>
D.\t$40^{888}$.
</div>`
        },
        hint: {
            tc: `先化成相同指數 (666) 再合併。`,
            en: `Convert them to the same exponent (666), then merge them.`
        },
        solution: `A (46%)<p><iframe src="https://www.youtube.com/embed/Se04vNXn8sk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q02",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: {
            tc: `若 $\\dfrac{a}{x} + \\dfrac{b}{y} = 3$，則 $x =$
<div class="q-mcopt">
A.\t$\\dfrac{ay}{3y-b}$。 <br>
B.\t$\\dfrac{ay}{b-3y}$。 <br>
C.\t$\\dfrac{by}{3y-a}$。 <br>
D.\t$\\dfrac{by}{a-3y}$。 
</div>`,
            en: `If $\\dfrac{a}{x} + \\dfrac{b}{y} = 3$, then $x =$
<div class="q-mcopt">
A.\t$\\dfrac{ay}{3y-b}$. <br>
B.\t$\\dfrac{ay}{b-3y}$. <br>
C.\t$\\dfrac{by}{3y-a}$. <br>
D.\t$\\dfrac{by}{a-3y}$. 
</div>`
        },
        hint: {
            tc: `通分後整理含 $x$ 的項。 `,
            en: `Find a common denominator, then rearrange terms containing $x$.`
        },
        solution: `A (81%)<p><iframe src="https://www.youtube.com/embed/-TSUCJ1gxmA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q03",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 2,
        content: {
            tc: `$16 - (2x - 3y)^2 =$
<div class="q-mcopt">
A.\t$(4 - 2x - 3y)(4 + 2x + 3y)$。 <br>
B.\t$(4 - 2x - 3y)(4 + 2x - 3y)$。 <br>
C.\t$(4 - 2x + 3y)(4 + 2x + 3y)$。 <br>
D.\t$(4 - 2x + 3y)(4 + 2x - 3y)$。 
</div>`,
            en: `$16 - (2x - 3y)^2 =$
<div class="q-mcopt">
A.\t$(4 - 2x - 3y)(4 + 2x + 3y)$. <br>
B.\t$(4 - 2x - 3y)(4 + 2x - 3y)$. <br>
C.\t$(4 - 2x + 3y)(4 + 2x + 3y)$. <br>
D.\t$(4 - 2x + 3y)(4 + 2x - 3y)$. 
</div>`
        },
        hint: {
            tc: `應用平方差公式。 `,
            en: `Apply the difference of squares formula.`
        },
        solution: `D (64%)<p><iframe src="https://www.youtube.com/embed/2ozhgcUHjPA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q04",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: {
            tc: `$0.0765403 =$
<div class="q-mcopt">
A.\t$0.076$（準確至二位有效數字）。 <br>
B.\t$0.0765$（準確至三位小數）。 <br>
C.\t$0.07654$（準確至四位有效數字）。 <br>
D.\t$0.076540$（準確至五位小數）。 
</div>`,
            en: `$0.0765403 =$
<div class="q-mcopt">
A.\t$0.076$ (correct to 2 significant figures). <br>
B.\t$0.0765$ (correct to 3 decimal places). <br>
C.\t$0.07654$ (correct to 4 significant figures). <br>
D.\t$0.076540$ (correct to 5 decimal places). 
</div>`
        },
        hint: {
            tc: `判斷有效數字及小數位。 `,
            en: `Determine the number of significant figures and decimal places.`
        },
        solution: `C (88%)<p><iframe src="https://www.youtube.com/embed/wUe2UQ6GdYE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q05",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: {
            tc: `若 $4\\alpha + \\beta = 7\\alpha + 3\\beta = 5$，則 $\\beta =$
<div class="q-mcopt">
A.\t$-3$。 <br>
B.\t$-2$。 <br>
C.\t$2$。 <br>
D.\t$3$。 
</div>`,
            en: `If $4\\alpha + \\beta = 7\\alpha + 3\\beta = 5$, then $\\beta =$
<div class="q-mcopt">
A.\t$-3$. <br>
B.\t$-2$. <br>
C.\t$2$. <br>
D.\t$3$. 
</div>`
        },
        hint: {
            tc: `由兩個方程聯立求解。 `,
            en: `Solve the simultaneous linear equations.`
        },
        solution: `A (80%)<p><iframe src="https://www.youtube.com/embed/cPT6R3NTaTM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q06",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: {
            tc: `設 $\\mathrm{f}(x) = 4x^3 + kx + 3$，其中 $k$ 為一常數。 若 $\\mathrm{f}(x)$ 可被 $2x+1$ 整除，求當 $\\mathrm{f}(x)$ 除以 $x+1$ 時的餘數。 
<div class="q-mcopt">
A.\t$-7$<br>
B.\t$-6$<br>
C.\t$0$<br>
D.\t$5$
</div>`,
            en: `Let $\\mathrm{f}(x) = 4x^3 + kx + 3$, where $k$ is a constant. If $\\mathrm{f}(x)$ is divisible by $2x+1$, find the remainder when $\\mathrm{f}(x)$ is divided by $x+1$. 
<div class="q-mcopt">
A.\t$-7$<br>
B.\t$-6$<br>
C.\t$0$<br>
D.\t$5$
</div>`
        },
        hint: {
            tc: `用因式定理求 $k$，再用餘式定理。 `,
            en: `Use the factor theorem to find $k$, then use the remainder theorem.`
        },
        solution: `B (76%)<p><iframe src="https://www.youtube.com/embed/hzWhDqDn9Ho?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q07",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: {
            tc: `$-5x > 21 - 2x$  及  $6x - 18 < 0$  的解為
<div class="q-mcopt">
A.\t$x \\lt -7$。 <br>
B.\t$x \\lt 3$。 <br>
C.\t$-7 \\lt x \\lt 3$。 <br>
D.\t$x \\lt -7$  或  $x \\gt 3$。 
</div>`,
            en: `The solution of $-5x > 21 - 2x$ and $6x - 18 < 0$ is
<div class="q-mcopt">
A.\t$x \\lt -7$. <br>
B.\t$x \\lt 3$. <br>
C.\t$-7 \\lt x \\lt 3$. <br>
D.\t$x \\lt -7$ or $x \\gt 3$. 
</div>`
        },
        hint: {
            tc: `分別解兩個不等式再取交集。 `,
            en: `Solve both inequalities separately and find their intersection.`
        },
        solution: `A (62%)<p><iframe src="https://www.youtube.com/embed/JGBT4EHQqUU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q08",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 1,
        content: {
            tc: `若 $k$ 為一常數使得二次方程 $x^2 + kx + 8k + 36 = 0$ 有等根，則 $k =$
<div class="q-mcopt">
A.\t$-6$。 <br>
B.\t$12$。 <br>
C.\t$-4$  或  $36$。 <br>
D.\t$-18$  或  $2$。 
</div>`,
            en: `If $k$ is a constant such that the quadratic equation $x^2 + kx + 8k + 36 = 0$ has equal roots, then $k =$
<div class="q-mcopt">
A.\t$-6$. <br>
B.\t$12$. <br>
C.\t$-4$ or $36$. <br>
D.\t$-18$ or $2$. 
</div>`
        },
        hint: {
            tc: `令判別式為零。 `,
            en: `Set the discriminant to zero.`
        },
        solution: `C (82%)<p><iframe src="https://www.youtube.com/embed/qpsb5kGZxxU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q09",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `若 $-1 \\lt a \\lt 0$，則下列何者可表示 $y = (ax + 1)^2 + a$ 的圖像？
<div class="q-mcopt">
<img src="img/2016dsep2q09A.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">\t\t<img src="img/2016dsep2q09B.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;"><br>
<img src="img/2016dsep2q09C.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">\t\t<img src="img/2016dsep2q09D.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">
</div>
</div>`,
            en: `If $-1 \\lt a \\lt 0$, which of the following may represent the graph of $y = (ax + 1)^2 + a$?
<div class="q-mcopt">
<img src="img/2016dsep2q09A.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">\t\t<img src="img/2016dsep2q09B.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;"><br>
<img src="img/2016dsep2q09C.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">\t\t<img src="img/2016dsep2q09D.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">
</div>
</div>`
        },
        hint: {
            tc: `觀察開口方向及頂點位置。 `,
            en: `Observe the direction of opening and the position of the vertex.`
        },
        solution: `D (46%)<p><iframe src="https://www.youtube.com/embed/g2tCDVJ6WD0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q10",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: {
            tc: `<u>漢林</u>的月薪較<u>文俊</u>高 $25\\%$，而<u>文俊</u>的月薪較<u>佩怡</u>低 $25\\%$。 已知<u>漢林</u>的月薪為 $\\$33\\,360$，<u>佩怡</u>的月薪為
<div class="q-mcopt">
A.\t$\\$31\\,275$。 <br>
B.\t$\\$33\\,360$。 <br>
C.\t$\\$35\\,584$。 <br>
D.\t$\\$52\\,125$。 
</div>`,
            en: `The monthly salary of Donald is $25\\%$ higher than that of Peter while the monthly salary of Peter is $25\\%$ lower than that of Teresa. It is given that the monthly salary of Donald is $\\$33\\,360$. The monthly salary of Teresa is
<div class="q-mcopt">
A.\t$\\$31\\,275$. <br>
B.\t$\\$33\\,360$. <br>
C.\t$\\$35\\,584$. <br>
D.\t$\\$52\\,125$. 
</div>`
        },
        hint: {
            tc: `由漢林的薪金反推文俊的及佩怡的。 `,
            en: `Work backward from Donald's salary to find Peter's and Teresa's salaries.`
        },
        solution: `C (69%)<p><iframe src="https://www.youtube.com/embed/7qoc9njcU4w?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q11",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: {
            tc: `若 $x$ 及 $y$ 均為非零的數使得 $(3y-4x):(2x+y)=5:6$，則 $x:y=$
<div class="q-mcopt">
A.\t$7:8$。 <br>
B.\t$8:29$。 <br>
C.\t$9:32$。 <br>
D.\t$13:34$。 
</div>`,
            en: `If $x$ and $y$ are non-zero numbers such that $(3y-4x):(2x+y)=5:6$, then $x:y=$
<div class="q-mcopt">
A.\t$7:8$. <br>
B.\t$8:29$. <br>
C.\t$9:32$. <br>
D.\t$13:34$. 
</div>`
        },
        hint: {
            tc: `交叉相乘後整理比例。 `,
            en: `Cross-multiply and simplify to find the ratio.`
        },
        solution: `D (81%)<p><iframe src="https://www.youtube.com/embed/f3n5H120Ylo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q12",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: {
            tc: `已知 $z$ 隨 $\\sqrt{x}$ 正變且隨 $y$ 反變。 若 $x$ 減少 $36\\%$ 且 $y$ 增加 $60\\%$，則 $z$
<div class="q-mcopt">
A.\t增加 $24\\%$。 <br>
B.\t增加 $28\\%$。 <br>
C.\t減少 $40\\%$。 <br>
D.\t減少 $50\\%$。 
</div>`,
            en: `It is given that $z$ varies directly as $\\sqrt{x}$ and inversely as $y$. If $x$ is decreased by $36\\%$ and $y$ is increased by $60\\%$, then $z$
<div class="q-mcopt">
A.\tis increased by $24\\%$. <br>
B.\tis increased by $28\\%$. <br>
C.\tis decreased by $40\\%$. <br>
D.\tis decreased by $50\\%$. 
</div>`
        },
        hint: {
            tc: `由 $z = k \\sqrt{x}/y$ 計算新比值。 `,
            en: `Use $z = k \\sqrt{x}/y$ to calculate the new value relative to the original.`
        },
        solution: `D (67%)<p><iframe src="https://www.youtube.com/embed/pZaLI86m1T4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q13",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: {
            tc: `$X$ 牌麵粉的成本為 $\\$42/\\text{kg}$。 若 $3\\text{ kg}$ 的 $X$ 牌麵粉與 $2\\text{ kg}$ 的 $Y$ 牌麵粉混合使得混合後的麵粉的成本為 $\\$36/\\text{kg}$，求 $Y$ 牌麵粉的成本。 
<div class="q-mcopt">
A.\t$\\$27/\\text{kg}$<br>
B.\t$\\$30/\\text{kg}$<br>
C.\t$\\$32/\\text{kg}$<br>
D.\t$\\$39/\\text{kg}$
</div>`,
            en: `The cost of flour of brand X is $\\$42/\\text{kg}$. If $3\\text{ kg}$ of flour of brand X and $2\\text{ kg}$ of flour of brand Y are mixed so that the cost of the mixture is $\\$36/\\text{kg}$, find the cost of flour of brand Y. 
<div class="q-mcopt">
A.\t$\\$27/\\text{kg}$<br>
B.\t$\\$30/\\text{kg}$<br>
C.\t$\\$32/\\text{kg}$<br>
D.\t$\\$39/\\text{kg}$
</div>`
        },
        hint: {
            tc: `用加權平均列方程。 `,
            en: `Set up an equation using the weighted average cost.`
        },
        solution: `A (81%)<p><iframe src="https://www.youtube.com/embed/X_fh4AzlZLI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q14",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 1,
        content: {
            tc: `圖中，第 $1$ 個圖案包含 $9$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $5$ 粒點子所組成。 求第 $7$ 個圖案的點子數目。<img src="img/2016dsep2q14.jpg" class="q-img" alt="題目附圖" style="max-width: 80%;"><div class="q-mcopt">
A.\t$29$<br>
B.\t$34$<br>
C.\t$39$<br>
D.\t$44$
</div>`,
            en: `In the figure, the 1st pattern consists of 9 dots. For any positive integer $n$, the $(n+1)$th pattern is formed by adding 5 dots to the $n$th pattern. Find the number of dots in the 7th pattern.<img src="img/2016dsep2q14.jpg" class="q-img" alt="題目附圖" style="max-width: 80%;"><div class="q-mcopt">
A.\t$29$<br>
B.\t$34$<br>
C.\t$39$<br>
D.\t$44$
</div>`
        },
        hint: {
            tc: `等差數列通項計算。 `,
            en: `Calculate using the general term of an arithmetic sequence.`
        },
        solution: `C (92%)<p><iframe src="https://www.youtube.com/embed/ohEK3dPRx9U?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q15",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `根據圖中所示，下列何者必為正確？
<div class="q-mcms"><img src="img/2016dsep2q15.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a+c=180^\\circ$
II.\t$a+b-c=180^\\circ$
III.\t$b+c=360^\\circ$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div><div style="clear: both;"></div>`,
            en: `According to the figure, which of the following must be true?
<div class="q-mcms"><img src="img/2016dsep2q15.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a+c=180^\\circ$
II.\t$a+b-c=180^\\circ$
III.\t$b+c=360^\\circ$
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用直線上的角及三角形內角和。 `,
            en: `Use angles on a straight line and angle sum of triangle.`
        },
        solution: `B (45%)<p><iframe src="https://www.youtube.com/embed/ZwFw6tg1ZAQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q16",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)", "Pythagoras Theorem"],
        difficulty: 1,
        content: {
            tc: `圖中，$ABC$ 為一直線。 若 $AB=24\\text{ cm}$ 、 $AD=40\\text{ cm}$ 、 $BD=32\\text{ cm}$ 及 $CD=68\\text{ cm}$，則 $BC=$
<div class="q-mcopt"><img src="img/2016dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$43\\text{ cm}$。 <br>
B.\t$54\\text{ cm}$。 <br>
C.\t$55\\text{ cm}$。 <br>
D.\t$60\\text{ cm}$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABC$ is a straight line. If $AB=24\\text{ cm}$, $AD=40\\text{ cm}$, $BD=32\\text{ cm}$ and $CD=68\\text{ cm}$, then $BC =$
<div class="q-mcopt"><img src="img/2016dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$43\\text{ cm}$. <br>
B.\t$54\\text{ cm}$. <br>
C.\t$55\\text{ cm}$. <br>
D.\t$60\\text{ cm}$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `檢查是否直角後用畢氏定理。 `,
            en: `Check if there is a right angle, then apply Pythagoras' theorem.`
        },
        solution: `D (80%)<p><iframe src="https://www.youtube.com/embed/V9Ll0lou3Is?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q17",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一平行四邊形。 $E$ 為 $CD$ 上的一點使得 $BE=CE$。 若 $\\angle ADC=114^\\circ$，則 $\\angle ABE=$
<div class="q-mcopt"><img src="img/2016dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$48^\\circ$。 <br>
B.\t$57^\\circ$。 <br>
C.\t$62^\\circ$。 <br>
D.\t$66^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a parallelogram. $E$ is a point lying on $CD$ such that $BE=CE$. If $\\angle ADC=114^\\circ$, then $\\angle ABE =$
<div class="q-mcopt"><img src="img/2016dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$48^\\circ$. <br>
B.\t$57^\\circ$. <br>
C.\t$62^\\circ$. <br>
D.\t$66^\\circ$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用平行四邊形及等腰三角形性質。 `,
            en: `Use properties of parallelograms and isosceles triangles.`
        },
        solution: `A (55%)<p><iframe src="https://www.youtube.com/embed/Ye0lQZbFzDE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q18",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 1,
        content: {
            tc: `圖中所示為一直立角柱體。 求該角柱體的體積。 
<div class="q-mcopt"><img src="img/2016dsep2q.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$216\\text{ cm}^3$<br>
B.\t$240\\text{ cm}^3$<br>
C.\t$300\\text{ cm}^3$<br>
D.\t$328\\text{ cm}^3$
</div><div style="clear: both;"></div>`,
            en: `The figure shows a right prism. Find the volume of the prism. 
<div class="q-mcopt"><img src="img/2016dsep2q.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$216\\text{ cm}^3$<br>
B.\t$240\\text{ cm}^3$<br>
C.\t$300\\text{ cm}^3$<br>
D.\t$328\\text{ cm}^3$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `底面積乘高。 `,
            en: `Base area multiplied by height.`
        },
        solution: `C (79%)<p><iframe src="https://www.youtube.com/embed/8FO-JDFSKM8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q19",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `圖中，扇形 $OAB$ 及扇形 $OCD$ 的圓心均為 $O$，其中 $OA = 33\\text{ cm}$ 及 $OC = 39\\text{ cm}$。 陰影區域 $ABDC$ 的面積為 $72\\pi\\text{ cm}^2$。 下列何者正確？
<div class="q-mcms"><img src="img/2016dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 30%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t扇形 $OAB$ 的角為 $60^\\circ$。
II.\t扇形 $OAB$ 的面積為 $11\\pi\\text{ cm}^2$。
III.\t扇形 $OCD$ 的周界為 $13\\pi\\text{ cm}$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div><div style="clear: both;"></div>`,
            en: `In the figure, $OAB$ and $OCD$ are sectors with centre $O$, where $OA = 33\\text{ cm}$ and $OC = 39\\text{ cm}$. The area of the shaded region $ABDC$ is $72\\pi\\text{ cm}^2$. Which of the following is/are true?
<div class="q-mcms"><img src="img/2016dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 30%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\tThe angle of the sector $OAB$ is $60^\\circ$.
II.\tThe area of the sector $OAB$ is $11\\pi\\text{ cm}^2$.
III.\tThe perimeter of the sector $OCD$ is $13\\pi\\text{ cm}$.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由面積差求圓心角。 `,
            en: `Find the angle of the sector from the difference in area.`
        },
        solution: `A (59%)<p><iframe src="https://www.youtube.com/embed/XqNJ6Yhv7rE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q20",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)", "Mensuration"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$、$CDEF$ 及 $EFGH$ 均為正方形。 $AG$ 分別與 $CD$ 及 $EF$ 相交於 $P$ 及 $Q$。 求四邊形 $DEQP$ 的面積與四邊形 $ABCP$ 的面積之比。 
<div class="q-mcopt"><img src="img/2016dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$1:2$<br>
B.\t$2:3$<br>
C.\t$3:5$<br>
D.\t$4:9$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$, $CDEF$ and $EFGH$ are squares. $AG$ cuts $CD$ and $EF$ at $P$ and $Q$ respectively. Find the ratio of the area of quadrilateral $DEQP$ to the area of quadrilateral $ABCP$. 
<div class="q-mcopt"><img src="img/2016dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$1:2$<br>
B.\t$2:3$<br>
C.\t$3:5$<br>
D.\t$4:9$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用相似及面積比與邊長平方。 `,
            en: `Use similarity and the relation between area ratio and side ratio squared.`
        },
        solution: `C (51%)<p><iframe src="https://www.youtube.com/embed/xwNc_N-0EPY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q21",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: {
            tc: `圖中，$AD =$
<div class="q-mcopt"><img src="img/2016dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$AB \\cos a + BC \\cos c$。<br>
B.\t$AB \\cos a + BC \\sin c$。<br>
C.\t$AB \\sin a + BC \\cos c$。<br>
D.\t$AB \\sin a + BC \\sin c$。
</div><div style="clear: both;"></div>`,
            en: `In the figure, $AD =$
<div class="q-mcopt"><img src="img/2016dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$AB \\cos a + BC \\cos c$.<br>
B.\t$AB \\cos a + BC \\sin c$.<br>
C.\t$AB \\sin a + BC \\cos c$.<br>
D.\t$AB \\sin a + BC \\sin c$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `在直角三角形中表達各段。 `,
            en: `Express each segment in right-angled triangles.`
        },
        solution: `B (57%)<p><iframe src="https://www.youtube.com/embed/Mo7ZcH8m-Mg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q22",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)", "Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一菱形。 $C$ 為圓 $BDE$ 的圓心且 $ADE$ 為一直線。 $BE$ 與 $CD$ 相交於 $F$。 若 $\\angle ADC = 118^\\circ$，則 $\\angle DFE =$
<div class="q-mcopt"><img src="img/2016dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$59^\\circ$。<br>
B.\t$62^\\circ$。<br>
C.\t$78^\\circ$。<br>
D.\t$87^\\circ$。
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a rhombus. $C$ is the centre of the circle $BDE$ and $ADE$ is a straight line. $BE$ and $CD$ intersect at $F$. If $\\angle ADC = 118^\\circ$, then $\\angle DFE =$
<div class="q-mcopt"><img src="img/2016dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$59^\\circ$.<br>
B.\t$62^\\circ$.<br>
C.\t$78^\\circ$.<br>
D.\t$87^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用菱形及圓心角性質。 `,
            en: `Use properties of rhombuses and angle at the centre.`
        },
        solution: `D (54%)<p><iframe src="https://www.youtube.com/embed/k0SIpwYy48I?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q23",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 1,
        content: {
            tc: `下面的圖形包含八個完全相同的正六邊形。 該圖形的反射對稱軸的數目為
<div class="q-mcopt"><img src="img/2016dsep2q23.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 30%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$2$。<br>
B.\t$4$。<br>
C.\t$6$。<br>
D.\t$8$。
</div><div style="clear: both;"></div>`,
            en: `The figure below consists of eight identical regular hexagons. The number of axes of reflectional symmetry of the figure is
<div class="q-mcopt"><img src="img/2016dsep2q23.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 30%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$2$.<br>
B.\t$4$.<br>
C.\t$6$.<br>
D.\t$8$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `觀察圖形的對稱軸。 `,
            en: `Count the axes of symmetry of the figure.`
        },
        solution: `A (82%)<p><iframe src="https://www.youtube.com/embed/6kxW2VRUQUA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q24",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `若一正 $n$ 邊形的內角和為 $3\\,240^\\circ$，則下列何者正確？
<div class="q-mcopt">
A.\t$n$ 的值為 $16$。 <br>
B.\t該多邊形的每一外角均為 $18^\\circ$。 <br>
C.\t該多邊形的對角線數目為 $20$。 <br>
D.\t該多邊形的每一內角均為 $160^\\circ$。 
</div>`,
            en: `If the sum of the interior angles of a regular $n$-sided polygon is $3\\,240^\\circ$, which of the following is true?
<div class="q-mcopt">
A.\tThe value of $n$ is $16$. <br>
B.\tEach exterior angle of the polygon is $18^\\circ$. <br>
C.\tThe number of diagonals of the polygon is $20$. <br>
D.\tEach interior angle of the polygon is $160^\\circ$. 
</div>`
        },
        hint: {
            tc: `由內角和公式求 $n$。 `,
            en: `Find $n$ using the sum of interior angles formula.`
        },
        solution: `B (64%)<p><iframe src="https://www.youtube.com/embed/0lKPpnHN05A?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q25",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `若直線 $hx+ky+15=0$ 與直線 $4x+3y-5=0$ 互相垂直且相交於 $x$ 軸上的一點，則 $k=$
<div class="q-mcopt">
A.\t$-12$。 <br>
B.\t$-4$。 <br>
C.\t$3$。 <br>
D.\t$16$。 
</div>`,
            en: `If the straight lines $hx+ky+15=0$ and $4x+3y-5=0$ are perpendicular to each other and intersect at a point on the $x$-axis, then $k =$
<div class="q-mcopt">
A.\t$-12$. <br>
B.\t$-4$. <br>
C.\t$3$. <br>
D.\t$16$. 
</div>`
        },
        hint: {
            tc: `垂直條件及交點在 $x$ 軸。 `,
            en: `Use the perpendicular condition and the fact that the intersection point lies on the $x$-axis.`
        },
        solution: `D (35%)<p><iframe src="https://www.youtube.com/embed/RtDLt0Ze-QY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q26",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Equations of Straight Lines", "Loci"],
        difficulty: 2,
        content: {
            tc: `點 $A$ 及點 $B$ 的坐標分別為 $(9,-2)$ 及 $(-1,8)$。 若 $C$ 為直線 $x-2y=0$ 上的一點使得 $AC=BC$，則 $C$ 的 $x$ 坐標為
<div class="q-mcopt">
A.\t$1$。 <br>
B.\t$2$。 <br>
C.\t$3$。 <br>
D.\t$4$。 
</div>`,
            en: `The coordinates of the points $A$ and $B$ are $(9,-2)$ and $(-1,8)$ respectively. If $C$ is a point lying on the straight line $x-2y=0$ such that $AC = BC$, then the $x$-coordinate of $C$ is
<div class="q-mcopt">
A.\t$1$. <br>
B.\t$2$. <br>
C.\t$3$. <br>
D.\t$4$. 
</div>`
        },
        hint: {
            tc: `$AC=BC$ 表示 $AB$ 的垂直平分線與已知直線的交點。 `,
            en: `$AC=BC$ implies $C$ lies on the perpendicular bisector of $AB$; find its intersection with the line.`
        },
        solution: `B (36%)<p><iframe src="https://www.youtube.com/embed/tTAbIJN42VQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q27",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: {
            tc: `圓 $C$ 的方程為 $3x^2+3y^2-12x+30y+65=0$。 下列何者正確？
<div class="q-mcms">
I.\t$C$ 的半徑為 $14$。
II.\t原點位於 $C$ 以外。
III.\t$C$ 的圓心的坐標為 $(2,-5)$。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `The equation of the circle $C$ is $3x^2+3y^2-12x+30y+65=0$. Which of the following are true?
<div class="q-mcms">
I.\tThe radius of $C$ is $14$.
II.\tThe origin lies outside $C$.
III.\tThe coordinates of the centre of $C$ are $(2,-5)$.
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `先求圓心及半徑。 `,
            en: `Find the centre and radius of the circle first.`
        },
        solution: `C (56%)<p><iframe src="https://www.youtube.com/embed/r-pQaJ7dHec?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q28",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `<u>潔儀</u>的口袋內有一個 $\\$1$ 硬幣、一個 $\\$2$ 硬幣、一個 $\\$5$ 硬幣及一個 $\\$10$ 硬幣。 若<u>潔儀</u>從她的口袋中隨機取出三個硬幣，求她取得至少 $\\$13$ 的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{1}{2}$<br>
B.\t$\\dfrac{1}{4}$<br>
C.\t$\\dfrac{3}{4}$<br>
D.\t$\\dfrac{23}{24}$
</div>`,
            en: `Christine has one $\\$1$ coin, one $\\$2$ coin, one $\\$5$ coin and one $\\$10$ coin in her pocket. If Christine takes out three coins randomly from her pocket, find the probability that she gets at least $\\$13$. 
<div class="q-mcopt">
A.\t$\\dfrac{1}{2}$<br>
B.\t$\\dfrac{1}{4}$<br>
C.\t$\\dfrac{3}{4}$<br>
D.\t$\\dfrac{23}{24}$
</div>`
        },
        hint: {
            tc: `列出所有組合後計算。 `,
            en: `List all possible combinations and calculate the probability.`
        },
        solution: `C (58%)<p><iframe src="https://www.youtube.com/embed/g9r9oX_jyU0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q29",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `某袋子內有 $1$ 個紅球、$3$ 個黃球及 $6$ 個白球。 在一幸運抽獎中，從該袋子內隨機抽出一個球，並將根據下表獲得若干個代幣：<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 4em;">
      <col style="width: 4em;">
      <col style="width: 4em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">所抽出的球的顏色</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">紅</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">黃</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">白</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">所獲代幣的數目</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">90</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">20</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">10</td>
    </tr>
  </table>求在該幸運抽獎中所獲代幣的數目的期望值。 
<div class="q-mcopt">
A.\t$10$<br>
B.\t$21$<br>
C.\t$40$<br>
D.\t$61$
</div>`,
            en: `A bag contains 1 red ball, 3 yellow balls and 6 white balls. In a lucky draw, a ball is randomly drawn from the bag and a certain number of tokens will be got according to the following table:<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 4em;">
      <col style="width: 4em;">
      <col style="width: 4em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Colour of the ball drawn</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Red</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Yellow</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">White</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Number of tokens got</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">90</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">20</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">10</td>
    </tr>
  </table>Find the expected number of tokens got in the lucky draw. 
<div class="q-mcopt">
A.\t$10$<br>
B.\t$21$<br>
C.\t$40$<br>
D.\t$61$
</div>`
        },
        hint: {
            tc: `期望值 = 各結果乘概率之和。 `,
            en: `Expected value = sum of (value $\\times$ probability).`
        },
        solution: `B (69%)<p><iframe src="https://www.youtube.com/embed/ik3uT0BDm4M?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q30",
        year: 2016,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 1,
        content: {
            tc: `考慮以下數據：<div style="text-align: center;">$32$   $68$   $79$   $86$   $88$   $98$   $98$   $a$   $b$   $c$</div>若以上數據的平均值及眾數分別為 $77$ 及 $68$，則以上數據的中位數為
<div class="q-mcopt">
A.\t$76$。 <br>
B.\t$82$。 <br>
C.\t$85$。 <br>
D.\t$93$。 
</div>`,
            en: `Consider the following data:<div style="text-align: center;">$32$   $68$   $79$   $86$   $88$   $98$   $98$   $a$   $b$   $c$</div>If the mean and the mode of the above data are $77$ and $68$ respectively, then the median of the above data is
<div class="q-mcopt">
A.\t$76$. <br>
B.\t$82$. <br>
C.\t$85$. <br>
D.\t$93$. 
</div>`
        },
        hint: {
            tc: `由平均值及眾數求 $a$、$b$、$c$ 後求中位數。 `,
            en: `Use the mean and mode to determine $a$, $b$, and $c$, then find the median.`
        },
        solution: `B (76%)<p><iframe src="https://www.youtube.com/embed/SoTTDoRIg2c?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q31",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["H.C.F. and L.C.M."],
        difficulty: 2,
        content: {
            tc: `$9a^2b$、$12a^4b^3$ 及 $15a^6$ 的 L.C.M. 為
<div class="q-mcopt">
A.\t$3a^2$。 <br>
B.\t$3a^2b$。 <br>
C.\t$180a^6b^3$。 <br>
D.\t$180a^{12}b^4$。 
</div>`,
            en: `The L.C.M. of $9a^2b$, $12a^4b^3$ and $15a^6$ is
<div class="q-mcopt">
A.\t$3a^2$. <br>
B.\t$3a^2b$. <br>
C.\t$180a^6b^3$. <br>
D.\t$180a^{12}b^4$. 
</div>`
        },
        hint: {
            tc: `取各變數的最高次冪。 `,
            en: `Take the highest power for each factor.`
        },
        solution: `C (60%)<p><iframe src="https://www.youtube.com/embed/ivztc2a8iOU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q32",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
            tc: `圖中的圖像顯示 $x$ 與 $\\log_9 y$ 之間的線性關係。 若 $y=ab^x$，則 $b=$
<div class="q-mcopt"><img src="img/2016dsep2q32.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$-2$。 <br>
B.\t$\\dfrac{1}{81}$。 <br>
C.\t$\\dfrac{1}{2}$。 <br>
D.\t$3$。 
</div><div style="clear: both;"></div>`,
            en: `The graph in the figure shows the linear relation between $x$ and $\\log_9 y$. If $y=ab^x$, then $b=$
<div class="q-mcopt"><img src="img/2016dsep2q32.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$-2$. <br>
B.\t$\\dfrac{1}{81}$. <br>
C.\t$\\dfrac{1}{2}$. <br>
D.\t$3$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由斜率求 $b$。 `,
            en: `Find $b$ using the slope of the line.`
        },
        solution: `D (40%)<p><iframe src="https://www.youtube.com/embed/OO96M3ERUcc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q33",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: {
            tc: `<div style="color: red;">$\\text{BC000DE000000}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.\t$188 \\times 16^{11} + 222 \\times 16^{6}$。 <br>
B.\t$205 \\times 16^{11} + 239 \\times 16^{6}$。 <br>
C.\t$188 \\times 16^{12} + 222 \\times 16^{7}$。 <br>
D.\t$205 \\times 16^{12} + 239 \\times 16^{7}$。 
</div>`,
            en: `<div style="color: red;">$\\text{BC000DE000000}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.\t$188 \\times 16^{11} + 222 \\times 16^{6}$. <br>
B.\t$205 \\times 16^{11} + 239 \\times 16^{6}$. <br>
C.\t$188 \\times 16^{12} + 222 \\times 16^{7}$. <br>
D.\t$205 \\times 16^{12} + 239 \\times 16^{7}$. 
</div>`
        },
        hint: {
            tc: `直接轉成十進制表示。 `,
            en: `Convert the hexadecimal representation directly into base 10 powers.`
        },
        solution: `A (43%)<p><iframe src="https://www.youtube.com/embed/R0sFHzBCMZM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q34",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: {
            tc: `設 $u = \\dfrac{7}{a+i}$ 及 $v = \\dfrac{7}{a-i}$，其中 $a$ 為一實數。 下列何者必為正確？
<div class="q-mcms">
I.\t$uv$ 為一有理數。
II.\t$u$ 的實部等於 $v$ 的實部。
III.\t$\\dfrac{1}{u}$ 的虛部等於 $\\dfrac{1}{v}$ 的虛部。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `Let $u = \\dfrac{7}{a+i}$ and $v = \\dfrac{7}{a-i}$, where $a$ is a real number. Which of the following must be true?
<div class="q-mcms">
I.\t$uv$ is a rational number.
II.\tThe real part of $u$ is equal to the real part of $v$.
III.\tThe imaginary part of $\\dfrac{1}{u}$ is equal to the imaginary part of $\\dfrac{1}{v}$.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `分別化簡 $u$、$v$ 後判斷。 `,
            en: `Simplify $u$ and $v$ individually, then check each statement.`
        },
        solution: `B (38%)<p><iframe src="https://www.youtube.com/embed/34CUAZie76Y?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q35",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: {
            tc: `圖中，$PQ$ 及 $SR$ 均平行於 $x$ 軸。 若 $(x, y)$ 為陰影區域 $PQRS$（包括邊界在內）中的一點，則 $7y-5x+3$ 於哪一點達至其最大值？
<div class="q-mcopt"><img src="img/2016dsep2q35.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$P$<br>
B.\t$Q$<br>
C.\t$R$<br>
D.\t$S$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $PQ$ and $SR$ are parallel to the $x$-axis. If $(x, y)$ is a point lying in the shaded region $PQRS$ (including the boundary), at which point does $7y-5x+3$ attain its greatest value?
<div class="q-mcopt"><img src="img/2016dsep2q35.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$P$<br>
B.\t$Q$<br>
C.\t$R$<br>
D.\t$S$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `目標函數在頂點達極值。 `,
            en: `The objective function attains its extreme values at the vertices.`
        },
        solution: `D (47%)<p><iframe src="https://www.youtube.com/embed/1muWKpE71KM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q36",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: {
            tc: `設 $a_n$ 為一等比數列的第 $n$ 項。 若 $a_3 = 21$ 及 $a_7 = 189$，則下列何者必為正確？
<div class="q-mcms">
I.\t該數列的公比小於 $1$。
II.\t該數列的某些項為無理數。
III.\t該數列的首 $99$ 項之和大於 $3 \\times 10^{24}$。 
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `Let $a_n$ be the $n$th term of a geometric sequence. If $a_3 = 21$ and $a_7 = 189$, which of the following must be true?
<div class="q-mcms">
I.\tThe common ratio of the sequence is less than $1$.
II.\tSome of the terms of the sequence are irrational numbers.
III.\tThe sum of the first $99$ terms of the sequence is greater than $3 \\times 10^{24}$. 
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
            en: `Find the common ratio, then evaluate each statement.`
        },
        solution: `B (35%)<p><iframe src="https://www.youtube.com/embed/Q-rxu5Kkwz4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q37",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: {
            tc: `設 $a$ 及 $b$ 均為常數。 若圖中所示為 $y = a \\cos 2x^\\circ$ 的圖像，則
<div class="q-mcopt"><img src="img/2016dsep2q37.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$a = -2$  及  $b = 90$。 <br>
B.\t$a = -2$  及  $b = 360$。 <br>
C.\t$a = 2$  及  $b = 90$。 <br>
D.\t$a = 2$  及  $b = 360$。 
</div><div style="clear: both;"></div>`,
            en: `Let $a$ and $b$ be constants. If the figure shows the graph of $y = a \\cos bx^\\circ$, then
<div class="q-mcopt"><img src="img/2016dsep2q37.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$a = -2$ and $b = 90$. <br>
B.\t$a = -2$ and $b = 360$. <br>
C.\t$a = 2$ and $b = 90$. <br>
D.\t$a = 2$ and $b = 360$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由振幅及週期判斷。 `,
            en: `Determine $a$ and $b$ from amplitude and period.`
        },
        solution: `A (46%)<p><iframe src="https://www.youtube.com/embed/qZ-e3_-pYEk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q38",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: {
            tc: `當 $0^\\circ \\le \\theta \\le 360^\\circ$ 時，方程 $5 \\sin^2 \\theta + \\sin \\theta - 4 = 0$ 有多少個根？
<div class="q-mcopt">
A.\t$2$<br>
B.\t$3$<br>
C.\t$4$<br>
D.\t$5$
</div>`,
            en: `For $0^\\circ \\le \\theta \\le 360^\\circ$, how many roots does the equation $5 \\sin^2 \\theta + \\sin \\theta - 4 = 0$ have?
<div class="q-mcopt">
A.\t$2$<br>
B.\t$3$<br>
C.\t$4$<br>
D.\t$5$
</div>`
        },
        hint: {
            tc: `設 $t=\\sin \\theta$ 後解二次方程並考慮範圍。 `,
            en: `Let $t=\\sin \\theta$, solve the quadratic equation, and consider the range of $\\theta$.`
        },
        solution: `B (49%)<p><iframe src="https://www.youtube.com/embed/dSw_3Nwd31c?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q39",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCDEFGH$ 為一長方體。 $AC$ 與 $BD$ 相交於 $P$。 $Q$ 為 $CH$ 上的一點使得 $CQ = 9\\text{ cm}$ 及 $QH = 15\\text{ cm}$。 求 $\\sin \\angle PFQ$。 
<div class="q-mcopt"><img src="img/2016dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{33}{65}$<br>
B.\t$\\dfrac{56}{65}$<br>
C.\t$\\dfrac{13}{5\\sqrt{181}}$<br>
D.\t$\\dfrac{58}{13\\sqrt{181}}$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCDEFGH$ is a rectangular block. $AC$ and $BD$ intersect at $P$. $Q$ is a point lying on $CH$ such that $CQ = 9\\text{ cm}$ and $QH = 15\\text{ cm}$. Find $\\sin \\angle PFQ$. 
<div class="q-mcopt"><img src="img/2016dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{33}{65}$<br>
B.\t$\\dfrac{56}{65}$<br>
C.\t$\\dfrac{13}{5\\sqrt{181}}$<br>
D.\t$\\dfrac{58}{13\\sqrt{181}}$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `用向量或坐標求夾角。 `,
            en: `Use vectors or coordinates to find the angle.`
        },
        solution: `A (35%)<p><iframe src="https://www.youtube.com/embed/afBrx2V2VIg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q40",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$AC$ 為圓 $ABCD$ 的一直徑。 $PB$ 及 $PD$ 均為該圓的切線。 $AD$ 的延線與 $BC$ 的延線相交於 $Q$。 若 $\\angle BPD = 68^\\circ$，則 $\\angle AQB =$
<div class="q-mcopt"><img src="img/2016dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$22^\\circ$。 <br>
B.\t$28^\\circ$。 <br>
C.\t$32^\\circ$。 <br>
D.\t$34^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $AC$ is a diameter of the circle $ABCD$. $PB$ and $PD$ are tangents to the circle. $AD$ produced and $BC$ produced meet at $Q$. If $\\angle BPD = 68^\\circ$, then $\\angle AQB =$
<div class="q-mcopt"><img src="img/2016dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$22^\\circ$. <br>
B.\t$28^\\circ$. <br>
C.\t$32^\\circ$. <br>
D.\t$34^\\circ$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用切線與弦的夾角及直徑性質。 `,
            en: `Use tangent properties and the angle in a semicircle.`
        },
        solution: `D (38%)<p><iframe src="https://www.youtube.com/embed/J3ima7Cw3IA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q41",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `直線 $2x-y-6=0$ 與圓 $x^2+y^2-8y-14=0$ 相交於 $P$ 及 $Q$。 求 $PQ$ 的中點的 $y$ 坐標。 
<div class="q-mcopt">
A.\t$-4$<br>
B.\t$-2$<br>
C.\t$2$<br>
D.\t$4$
</div>`,
            en: `The straight line $2x-y-6=0$ and the circle $x^2+y^2-8y-14=0$ intersect at $P$ and $Q$. Find the $y$-coordinate of the mid-point of $PQ$. 
<div class="q-mcopt">
A.\t$-4$<br>
B.\t$-2$<br>
C.\t$2$<br>
D.\t$4$
</div>`
        },
        hint: {
            tc: `弦的中點在圓心與弦垂直的直線上。 `,
            en: `The midpoint of a chord lies on the line passing through the centre perpendicular to the chord.`
        },
        solution: `C (44%)<p><iframe src="https://www.youtube.com/embed/isBX8BcJD2A?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q42",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `某箱子內有 $9$ 罐咖啡及 $3$ 罐紅茶。 若從該箱子中隨機取出 $4$ 罐，求取出至少 $2$ 罐紅茶的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{13}{55}$<br>
B.\t$\\dfrac{21}{55}$<br>
C.\t$\\dfrac{34}{55}$<br>
D.\t$\\dfrac{42}{55}$
</div>`,
            en: `There are 9 cans of coffee and 3 cans of tea in a box. If 4 cans are randomly chosen from the box, find the probability that at least 2 cans of tea are chosen. 
<div class="q-mcopt">
A.\t$\\dfrac{13}{55}$<br>
B.\t$\\dfrac{21}{55}$<br>
C.\t$\\dfrac{34}{55}$<br>
D.\t$\\dfrac{42}{55}$
</div>`
        },
        hint: {
            tc: `分情況計算紅茶數目 $\\ge 2$ 的組合。 `,
            en: `Consider the cases where the number of cans of tea is $\\ge 2$.`
        },
        solution: `A (55%)<p><iframe src="https://www.youtube.com/embed/n8tUWh6LvpU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q43",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: {
            tc: `某班有 $20$ 名男生及 $15$ 名女生。 若從該班中選出 $6$ 名學生組成一個至多有 $2$ 名女生的委員會，則可組成多少個不同的委員會？
<div class="q-mcopt">
A.\t$271\\,320$<br>
B.\t$324\\,415$<br>
C.\t$508\\,725$<br>
D.\t$780\\,045$
</div>`,
            en: `There are 20 boys and 15 girls in a class. If 6 students are selected from the class to form a committee consisting of at most 2 girls, how many different committees can be formed?
<div class="q-mcopt">
A.\t$271\\,320$<br>
B.\t$324\\,415$<br>
C.\t$508\\,725$<br>
D.\t$780\\,045$
</div>`
        },
        hint: {
            tc: `分情況計算女生數目 $\\le 2$ 的組合。 `,
            en: `Consider the cases where the number of girls is $\\le 2$.`
        },
        solution: `D (51%)<p><iframe src="https://www.youtube.com/embed/iud7Ok-_EG4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q44",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Standard Score", "Measures of Dispersion"],
        difficulty: 2,
        content: {
            tc: `下面的幹葉圖顯示某群學生在一測驗中得分（以分為單位）的分佈。 <u>佩玲</u>在該測驗中獲最高得分。
        <table class="q-table" style="border-collapse: collapse; table-layout: auto; width: auto; white-space: pre;" align="center">
    <colgroup>
      <col style="width: auto;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;"><u>幹（十位）</u></td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;"><u>葉（個位）</u></td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">5	6	7	8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">5	5	6	8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3	5	5	6	9	9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0	0	1</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">8</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0	2	5</td>
    </tr>
  </table>
下列何者正確？
<div class="q-mcms">
I.\t該分佈的上四分位數為 $55$ 分。
II.\t<u>佩玲</u>在該測驗中的標準分低於 $2$。
III.\t該分佈的標準差大於 $12$ 分。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `The stem-and-leaf diagram below shows the distribution of the scores (in marks) of a group of students in a test. Ada gets the highest score in the test.
        <table class="q-table" style="border-collapse: collapse; table-layout: auto; width: auto; white-space: pre;" align="center">
    <colgroup>
      <col style="width: auto;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;"><u>Stem (tens)</u></td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;"><u>Leaf (units)</u></td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">5	6	7	8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">5	5	6	8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3	5	5	6	9	9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0	0	1</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">8</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0	2	5</td>
    </tr>
  </table>
Which of the following is/are true?
<div class="q-mcms">
I.\tThe upper quartile of the distribution is 55 marks.
II.\tThe standard score of Ada in the test is lower than 2.
III.\tThe standard deviation of the distribution is greater than 12 marks.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `由幹葉圖求四分位數、平均及標準差。 `,
            en: `Find the upper quartile, mean, and standard deviation from the stem-and-leaf diagram.`
        },
        solution: `B (52%)<p><iframe src="https://www.youtube.com/embed/HpkixsOQpME?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2016-DSE-MATH-CP2-Q45",
        year: 2016,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: {
            tc: `某組數的方差為 $49$。 將該組的每個數乘以 $4$ 後各加上 $9$ 而成新一組數。 求新一組數的方差。 
<div class="q-mcopt">
A.\t$196$<br>
B.\t$205$<br>
C.\t$784$<br>
D.\t$793$
</div>`,
            en: `The variance of a set of numbers is $49$. Each number of the set is multiplied by $4$ and then $9$ is added to each resulting number to form a new set of numbers. Find the variance of the new set of numbers. 
<div class="q-mcopt">
A.\t$196$<br>
B.\t$205$<br>
C.\t$784$<br>
D.\t$793$
</div>`
        },
        hint: {
            tc: `方差受倍數影響，平移不影響。 `,
            en: `Variance is affected by multiplication scaling ($k^2$), but unaffected by addition/subtraction.`
        },
        solution: `C (50%)<p><iframe src="https://www.youtube.com/embed/OdaHKfAoTVI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
);
