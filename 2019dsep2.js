// 2019dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2019-DSE-MATH-CP2-Q01",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 2,
        content: {
            tc: `$(a-b)(a^2+ab-b^2) =$
<div class="q-mcopt">
A.\t$(a-b)^3$。<br>
B.\t$a^3-b^3$。<br>
C.\t$a^3-2ab^2+b^3$。<br>
D.\t$a^3-2a^2b+2ab^2+b^3$。
</div>`,
            en: `$(a-b)(a^2+ab-b^2) =$
<div class="q-mcopt">
A.\t$(a-b)^3$.<br>
B.\t$a^3-b^3$.<br>
C.\t$a^3-2ab^2+b^3$.<br>
D.\t$a^3-2a^2b+2ab^2+b^3$.
</div>`
        },
        hint: {
            tc: `直接展開後整理。`,
            en: `Expand and simplify.`
        },
        solution: `C (67%)<p><iframe src="https://www.youtube.com/embed/mqb2rhVy26E?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q02",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `$\\dfrac{(6x^7)^2}{4x^5} =$
<div class="q-mcopt">
A.\t$3x^4$。<br>
B.\t$9x^4$。<br>
C.\t$3x^9$。<br>
D.\t$9x^9$。
</div>`,
            en: `$\\dfrac{(6x^7)^2}{4x^5} =$
<div class="q-mcopt">
A.\t$3x^4$.<br>
B.\t$9x^4$.<br>
C.\t$3x^9$.<br>
D.\t$9x^9$.
</div>`
        },
        hint: {
            tc: `先處理指數再簡化。`,
            en: `Handle the indices first and then simplify.`
        },
        solution: `D (88%)<p><iframe src="https://www.youtube.com/embed/YL0nrw4UB4Q?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q03",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: {
            tc: `若 $6x-7y=40=2x+11y$，則 $y=$
<div class="q-mcopt">
A.\t$-4$。<br>
B.\t$2$。<br>
C.\t$4$。<br>
D.\t$9$。
</div>`,
            en: `If $6x-7y=40=2x+11y$, then $y=$
<div class="q-mcopt">
A.\t$-4$.<br>
B.\t$2$.<br>
C.\t$4$.<br>
D.\t$9$.
</div>`
        },
        hint: {
            tc: `由兩個方程聯立求解。`,
            en: `Solve the two equations simultaneously.`
        },
        solution: `B (90%)<p><iframe src="https://www.youtube.com/embed/JyPIM2jrUoI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q04",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 2,
        content: {
            tc: `若 $\\alpha$ 及 $\\beta$ 均為常數使得 $(x-8)(x+\\alpha)-6 \\equiv (x-9)^2+\\beta$，則 $\\beta=$
<div class="q-mcopt">
A.\t$-26$。<br>
B.\t$-10$。<br>
C.\t$-7$。<br>
D.\t$-6$。
</div>`,
            en: `If $\\alpha$ and $\\beta$ are constants such that $(x-8)(x+\\alpha)-6 \\equiv (x-9)^2+\\beta$, then $\\beta=$
<div class="q-mcopt">
A.\t$-26$.<br>
B.\t$-10$.<br>
C.\t$-7$.<br>
D.\t$-6$.
</div>`
        },
        hint: {
            tc: `展開兩邊並比較係數。`,
            en: `Expand both sides and compare coefficients.`
        },
        solution: `C (69%)<p><iframe src="https://www.youtube.com/embed/31BMIa96okM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q05",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: {
            tc: `若 $h=3-\\dfrac{5}{k+4}$，則 $k=$
<div class="q-mcopt">
A.\t$\\dfrac{4h-7}{3-h}$。 <br>
B.\t$\\dfrac{4h-17}{3-h}$。 <br>
C.\t$\\dfrac{4h-7}{3+h}$。 <br>
D.\t$\\dfrac{4h-17}{3+h}$。 
</div>`,
            en: `If $h=3-\\dfrac{5}{k+4}$, then $k=$
<div class="q-mcopt">
A.\t$\\dfrac{4h-7}{3-h}$. <br>
B.\t$\\dfrac{4h-17}{3-h}$. <br>
C.\t$\\dfrac{4h-7}{3+h}$. <br>
D.\t$\\dfrac{4h-17}{3+h}$. 
</div>`
        },
        hint: {
            tc: `移項後解出 $k$。`,
            en: `Rearrange and solve for $k$.`
        },
        solution: `A (75%)<p><iframe src="https://www.youtube.com/embed/-OLNIi46Ib8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q06",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: {
            tc: `若 $0.06557 < x < 0.06564$，則下列何者正確？
<div class="q-mcopt">
A.\t$x=0.065$（準確至二位小數）<br>
B.\t$x=0.065$（準確至二位有效數字）<br>
C.\t$x=0.0656$（準確至三位小數）<br>
D.\t$x=0.0656$（準確至三位有效數字）
</div>`,
            en: `If $0.06557 < x < 0.06564$, which of the following is true?
<div class="q-mcopt">
A.\t$x=0.065$ (correct to 2 decimal places)<br>
B.\t$x=0.065$ (correct to 2 significant figures)<br>
C.\t$x=0.0656$ (correct to 3 decimal places)<br>
D.\t$x=0.0656$ (correct to 3 significant figures)
</div>`
        },
        hint: {
            tc: `判斷有效數字及小數位的範圍。`,
            en: `Determine the range for significant figures and decimal places.`
        },
        solution: `D (80%)<p><iframe src="https://www.youtube.com/embed/Zm7hAHrUHOs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q07",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: {
            tc: `滿足複合不等式  $-2(x-5)+5 < 21$  或  $\\dfrac{3x-5}{-7} > 1$  的最小整數為
<div class="q-mcopt">
A.\t$-3$。 <br>
B.\t$-2$。 <br>
C.\t$4$。 <br>
D.\t$5$。 
</div>`,
            en: `The least integer satisfying the compound inequality  $-2(x-5)+5 < 21$  or  $\\dfrac{3x-5}{-7} > 1$  is
<div class="q-mcopt">
A.\t$-3$. <br>
B.\t$-2$. <br>
C.\t$4$. <br>
D.\t$5$. 
</div>`
        },
        hint: {
            tc: `分別解兩個不等式再取聯集。`,
            en: `Solve the two inequalities separately and take the union.`
        },
        solution: `B (62%)<p><iframe src="https://www.youtube.com/embed/kOYUZfJsimY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q08",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `設 $c$ 為一常數。 若 $\\mathrm{f}(x)=x^3+cx^2+c$，則 $\\mathrm{f}(c)+\\mathrm{f}(-c)=$
<div class="q-mcopt">
A.\t$0$。 <br>
B.\t$2c$。 <br>
C.\t$2c^3+2c$。 <br>
D.\t$-2c^3+2c$。 
</div>`,
            en: `Let $c$ be a constant. If $\\mathrm{f}(x)=x^3+cx^2+c$, then $\\mathrm{f}(c)+\\mathrm{f}(-c)=$
<div class="q-mcopt">
A.\t$0$. <br>
B.\t$2c$. <br>
C.\t$2c^3+2c$. <br>
D.\t$-2c^3+2c$. 
</div>`
        },
        hint: {
            tc: `直接代入並簡化。`,
            en: `Substitute directly and simplify.`
        },
        solution: `C (69%)<p><iframe src="https://www.youtube.com/embed/8wkxLtDuuWc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q09",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: {
            tc: `設 $k$ 為一常數使得 $2x^4 + kx^3 - 4x - 16$ 可被 $2x + k$ 整除。 求 $k$。 
<div class="q-mcopt">
A.\t$-2$<br>
B.\t$2$<br>
C.\t$4$<br>
D.\t$8$
</div>`,
            en: `Let $k$ be a constant such that $2x^4 + kx^3 - 4x - 16$ is divisible by $2x + k$. Find $k$. 
<div class="q-mcopt">
A.\t$-2$<br>
B.\t$2$<br>
C.\t$4$<br>
D.\t$8$
</div>`
        },
        hint: {
            tc: `用因式定理代入 $x=-k/2$。`,
            en: `Use the factor theorem by substituting $x=-k/2$.`
        },
        solution: `D (65%)<p><iframe src="https://www.youtube.com/embed/YkKFahMY9-E?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q10",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `下列有關 $y = (3-x)(x+2)+6$ 的圖像之敍述，何者正確？
<div class="q-mcms">
I.\t該圖像開口向下。
II.\t該圖像通過點 $(1,10)$。
III.\t該圖像的 $x$ 截距為 $-2$ 及 $3$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `Which of the following statements about the graph of $y = (3-x)(x+2)+6$ is/are true?
<div class="q-mcms">
I.\tThe graph opens downwards.
II.\tThe graph passes through the point $(1,10)$.
III.\tThe $x$-intercepts of the graph are $-2$ and $3$.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `展開後觀察二次項及截距。`,
            en: `Expand and observe the quadratic term and intercepts.`
        },
        solution: `A (68%)<p><iframe src="https://www.youtube.com/embed/DbJpvGv4vfQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q11",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: {
            tc: `存款 $\\$65\\,000$，年利率 $7\\%$，年期 $8$ 年，複利計算，每季一結。 求本利和準確至最接近的元。 
<div class="q-mcopt">
A.\t$\\$101\\,400$<br>
B.\t$\\$111\\,682$<br>
C.\t$\\$113\\,244$<br>
D.\t$\\$113\\,609$
</div>`,
            en: `A sum of $\\$65\\,000$ is deposited at an interest rate of $7\\%$ per annum for $8$ years, compounded quarterly. Find the amount correct to the nearest dollar. 
<div class="q-mcopt">
A.\t$\\$101\\,400$<br>
B.\t$\\$111\\,682$<br>
C.\t$\\$113\\,244$<br>
D.\t$\\$113\\,609$
</div>`
        },
        hint: {
            tc: `季利率為 $1.75\\%$，共 $32$ 期。`,
            en: `The quarterly interest rate is $1.75\\%$, for a total of $32$ periods.`
        },
        solution: `C (79%)<p><iframe src="https://www.youtube.com/embed/yYpl9Q64GaM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q12",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 2,
        content: {
            tc: `$A$ 牌及 $B$ 牌茶葉的成本分別為 $\\$140/\\text{kg}$ 及 $\\$315/\\text{kg}$。 若 $x$ kg 的 $A$ 牌茶葉與 $y$ kg 的 $B$ 牌茶葉混合使得混合後的茶葉的成本為 $\\$210/\\text{kg}$，則 $x:y=$
<div class="q-mcopt">
A.\t$2:3$。 <br>
B.\t$3:2$。 <br>
C.\t$4:9$。 <br>
D.\t$9:4$。 
</div>`,
            en: `The costs of tea of brand $A$ and brand $B$ are $\\$140/\\text{kg}$ and $\\$315/\\text{kg}$ respectively. If $x$ kg of tea of brand $A$ and $y$ kg of tea of brand $B$ are mixed so that the cost of the mixture is $\\$210/\\text{kg}$, then $x:y=$
<div class="q-mcopt">
A.\t$2:3$. <br>
B.\t$3:2$. <br>
C.\t$4:9$. <br>
D.\t$9:4$. 
</div>`
        },
        hint: {
            tc: `用加權平均列方程。`,
            en: `Set up an equation using the weighted average.`
        },
        solution: `B (66%)<p><iframe src="https://www.youtube.com/embed/_3cwKmxqQ6k?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q13",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: {
            tc: `已知 $z$ 隨 $x$ 的平方正變且隨 $y$ 的平方根反變。 若 $x$ 減少 $40\\%$ 且 $y$ 增加 $44\\%$，則 $z$
<div class="q-mcopt">
A.\t減少 $70\\%$。 <br>
B.\t增加 $70\\%$。 <br>
C.\t減少 $76\\%$。 <br>
D.\t增加 $76\\%$。 
</div>`,
            en: `It is given that $z$ varies directly as the square of $x$ and inversely as the square root of $y$. If $x$ is decreased by $40\\%$ and $y$ is increased by $44\\%$, then $z$
<div class="q-mcopt">
A.\tis decreased by $70\\%$. <br>
B.\tis increased by $70\\%$. <br>
C.\tis decreased by $76\\%$. <br>
D.\tis increased by $76\\%$. 
</div>`
        },
        hint: {
            tc: `由 $z = k x^2 / \\sqrt{y}$ 計算新比值。`,
            en: `From $z = k x^2 / \\sqrt{y}$, calculate the new ratio.`
        },
        solution: `A (69%)<p><iframe src="https://www.youtube.com/embed/bAs0DA82VE4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q14",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 1,
        content: {
            tc: `圖中，第 $1$ 個圖案包含 $6$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $4$ 粒點子所組成。 求第 $9$ 個圖案的點子數目。<img src="img/2019dsep2q14.jpg" class="q-img" alt="題目附圖" style="max-width: 90%;"><div class="q-mcopt">
A.\t$30$<br>
B.\t$34$<br>
C.\t$38$<br>
D.\t$42$
</div>`,
            en: `In the figure, the 1st pattern consists of $6$ dots. For any positive integer $n$, the $(n+1)$th pattern is formed by adding $4$ dots to the $n$th pattern. Find the number of dots in the 9th pattern.<img src="img/2019dsep2q14.jpg" class="q-img" alt="題目附圖" style="max-width: 90%;"><div class="q-mcopt">
A.\t$30$<br>
B.\t$34$<br>
C.\t$38$<br>
D.\t$42$
</div>`
        },
        hint: {
            tc: `等差數列通項計算。`,
            en: `Use the general term of an arithmetic sequence.`
        },
        solution: `C (91%)<p><iframe src="https://www.youtube.com/embed/0AyE_UEx9bc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q15",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `某實心直立角錐體的底為一正方形，其邊長為 $18\\text{ cm}$。 若該角錐體的高為 $12\\text{ cm}$，則該角錐體的總表面面積為
<div class="q-mcopt">
A.\t$432\\text{ cm}^2$。 <br>
B.\t$540\\text{ cm}^2$。 <br>
C.\t$756\\text{ cm}^2$。 <br>
D.\t$864\\text{ cm}^2$。 
</div>`,
            en: `The base of a solid right pyramid is a square of side $18\\text{ cm}$. If the height of the pyramid is $12\\text{ cm}$, then the total surface area of the pyramid is
<div class="q-mcopt">
A.\t$432\\text{ cm}^2$. <br>
B.\t$540\\text{ cm}^2$. <br>
C.\t$756\\text{ cm}^2$. <br>
D.\t$864\\text{ cm}^2$. 
</div>`
        },
        hint: {
            tc: `先求斜高再計算側面積。`,
            en: `First find the slant height and then calculate the lateral surface area.`
        },
        solution: `D (61%)<p><iframe src="https://www.youtube.com/embed/v4ZC7Mc2ids?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q16",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 3,
        content: {
            tc: `圖中，$ABCD$ 為一平行四邊形及 $AEFG$ 為一正方形。 已知 $BE:EF:FG = 2:7:3$。 $BD$ 分別與 $AE$ 及 $FG$ 相交於點 $X$ 及點 $Y$。 若 $\\Delta ABX$ 的面積為 $24\\text{ cm}^2$，則四邊形 $CDYF$ 的面積為
<div class="q-mcopt"><img src="img/2019dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$54\\text{ cm}^2$。 <br>
B.\t$77\\text{ cm}^2$。 <br>
C.\t$81\\text{ cm}^2$。 <br>
D.\t$87\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a parallelogram and $AEFG$ is a square. It is given that $BE:EF:FG = 2:7:3$. $BD$ intersects $AE$ and $FG$ at the points $X$ and $Y$ respectively. If the area of $\\Delta ABX$ is $24\\text{ cm}^2$, then the area of the quadrilateral $CDYF$ is
<div class="q-mcopt"><img src="img/2019dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$54\\text{ cm}^2$. <br>
B.\t$77\\text{ cm}^2$. <br>
C.\t$81\\text{ cm}^2$. <br>
D.\t$87\\text{ cm}^2$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用面積比與底的比例關係。`,
            en: `Use the relationship between area ratios and base ratios.`
        },
        solution: `D (25%)<p><iframe src="https://www.youtube.com/embed/NqLcbbn4zu8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q17",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABC$ 及 $ADE$ 均為直線。 已知 $AB = BD$ 及 $BC = CD$。 若 $\\angle CDE = 66^\\circ$，則 $\\angle ACD =$
<div class="q-mcopt"><img src="img/2019dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$28^\\circ$。 <br>
B.\t$33^\\circ$。 <br>
C.\t$36^\\circ$。 <br>
D.\t$38^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABC$ and $ADE$ are straight lines. It is given that $AB = BD$ and $BC = CD$. If $\\angle CDE = 66^\\circ$, then $\\angle ACD =$
<div class="q-mcopt"><img src="img/2019dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$28^\\circ$. <br>
B.\t$33^\\circ$. <br>
C.\t$36^\\circ$. <br>
D.\t$38^\\circ$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用等腰三角形及外角性質。`,
            en: `Use properties of isosceles triangles and exterior angles.`
        },
        solution: `A (58%)<p><iframe src="https://www.youtube.com/embed/bXBXe-X9Q-A?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q18",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 3,
        content: {
            tc: `圖中，$ABC$ 為一等腰三角形且 $AB = AC$。 $D$ 及 $E$ 均為 $AB$ 上的點使得 $AD = DE = 2EB$，而 $F$ 為 $AC$ 上的一點使得 $DF//EC$。 若 $\\angle ADF = 90^\\circ$ 及 $CE = 60\\text{ cm}$，則 $EF =$
<div class="q-mcopt"><img src="img/2019dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$40\\text{ cm}$。 <br>
B.\t$45\\text{ cm}$。 <br>
C.\t$48\\text{ cm}$。 <br>
D.\t$50\\text{ cm}$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABC$ is an isosceles triangle with $AB = AC$. $D$ and $E$ are points on $AB$ such that $AD = DE = 2EB$, and $F$ is a point on $AC$ such that $DF//EC$. If $\\angle ADF = 90^\\circ$ and $CE = 60\\text{ cm}$, then $EF =$
<div class="q-mcopt"><img src="img/2019dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$40\\text{ cm}$. <br>
B.\t$45\\text{ cm}$. <br>
C.\t$48\\text{ cm}$. <br>
D.\t$50\\text{ cm}$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用相似三角形及比例。`,
            en: `Use similar triangles and proportions.`
        },
        solution: `D (25%)<p><iframe src="https://www.youtube.com/embed/oCypXfp3NqE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q19",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 1,
        content: {
            tc: `圖中，$ABCD$ 為一梯形且 $AB//DC$ 及 $\\angle ABD = 90^\\circ$。 若 $AB = 18\\text{ cm}$、$BC = 26\\text{ cm}$ 及 $AD = 30\\text{ cm}$，求梯形 $ABCD$ 的面積。 
<div class="q-mcopt"><img src="img/2019dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$336\\text{ cm}^2$<br>
B.\t$400\\text{ cm}^2$<br>
C.\t$504\\text{ cm}^2$<br>
D.\t$552\\text{ cm}^2$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a trapezium with $AB//DC$ and $\\angle ABD = 90^\\circ$. If $AB = 18\\text{ cm}$, $BC = 26\\text{ cm}$ and $AD = 30\\text{ cm}$, find the area of the trapezium $ABCD$. 
<div class="q-mcopt"><img src="img/2019dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$336\\text{ cm}^2$<br>
B.\t$400\\text{ cm}^2$<br>
C.\t$504\\text{ cm}^2$<br>
D.\t$552\\text{ cm}^2$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `用畢氏定理求高後計算面積。`,
            en: `Use Pythagoras' theorem to find the height and then calculate the area.`
        },
        solution: `A (85%)<p><iframe src="https://www.youtube.com/embed/LK18sdtSLHo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q20",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一菱形。 $ABE$ 及 $BCF$ 均為直線使得 $BE = EF$。 若 $\\angle BEF = 56^\\circ$，則 $\\angle BDC =$
<div class="q-mcopt"><img src="img/2019dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$48^\\circ$。 <br>
B.\t$56^\\circ$。 <br>
C.\t$59^\\circ$。 <br>
D.\t$62^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a rhombus. $ABE$ and $BCF$ are straight lines such that $BE = EF$. If $\\angle BEF = 56^\\circ$, then $\\angle BDC =$
<div class="q-mcopt"><img src="img/2019dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$48^\\circ$. <br>
B.\t$56^\\circ$. <br>
C.\t$59^\\circ$. <br>
D.\t$62^\\circ$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用菱形及等腰三角形性質。`,
            en: `Use properties of rhombus and isosceles triangles.`
        },
        solution: `C (50%)<p><iframe src="https://www.youtube.com/embed/_WEa-QGt5tI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q21",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$O$ 為半圓 $ABCD$ 的圓心。 若 $AC = BD$ 及 $\\angle COD = 48^\\circ$，則 $\\angle ABD =$
<div class="q-mcopt"><img src="img/2019dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$31^\\circ$。 <br>
B.\t$33^\\circ$。 <br>
C.\t$42^\\circ$。 <br>
D.\t$48^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $O$ is the centre of the semicircle $ABCD$. If $AC = BD$ and $\\angle COD = 48^\\circ$, then $\\angle ABD =$
<div class="q-mcopt"><img src="img/2019dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$31^\\circ$. <br>
B.\t$33^\\circ$. <br>
C.\t$42^\\circ$. <br>
D.\t$48^\\circ$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用圓心角及等弦對等角。`,
            en: `Use central angles and equal chords subtend equal angles.`
        },
        solution: `B (53%)<p><iframe src="https://www.youtube.com/embed/qgZxoBHcCxs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q22",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一長方形。 $E$ 為 $AD$ 上的一點。 求 $\\dfrac{CE}{AC}$。 
<div class="q-mcopt"><img src="img/2019dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{\\sin \\alpha}{\\sin \\beta}$<br>
B.\t$\\dfrac{\\cos \\alpha}{\\cos \\beta}$<br>
C.\t$\\sin \\alpha \\sin \\beta$<br>
D.\t$\\cos \\alpha \\cos \\beta$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a rectangle. $E$ is a point on $AD$. Find $\\dfrac{CE}{AC}$. 
<div class="q-mcopt"><img src="img/2019dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{\\sin \\alpha}{\\sin \\beta}$<br>
B.\t$\\dfrac{\\cos \\alpha}{\\cos \\beta}$<br>
C.\t$\\sin \\alpha \\sin \\beta$<br>
D.\t$\\cos \\alpha \\cos \\beta$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `在直角三角形中表達比值。`,
            en: `Express the ratio in right-angled triangles.`
        },
        solution: `B (59%)<p><iframe src="https://www.youtube.com/embed/zXyeMxrgRWY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q23",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `圖中，直線 $L$ 的方程為 $ax+by+15=0$。 下列何者正確？
<div class="q-mcms"><img src="img/2019dsep2q23.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a > b$
II.\t$a > -3$
III.\t$b > -5$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
            en: `In the figure, the equation of the straight line $L$ is $ax+by+15=0$. Which of the following are true?
<div class="q-mcms"><img src="img/2019dsep2q23.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a > b$
II.\t$a > -3$
III.\t$b > -5$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由截距判斷 $a$、$b$ 的範圍。`,
            en: `Determine the ranges of $a$ and $b$ from the intercepts.`
        },
        solution: `A (31%)<p><iframe src="https://www.youtube.com/embed/JvVWWRMhKzc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q24",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `求常數 $k$ 使得直線 $3x+2y+k=0$ 與直線 $kx+12y-6=0$ 互相垂直。 
<div class="q-mcopt">
A.\t$-8$<br>
B.\t$-4$<br>
C.\t$4$<br>
D.\t$8$
</div>`,
            en: `Find the constant $k$ such that the straight line $3x+2y+k=0$ is perpendicular to the straight line $kx+12y-6=0$. 
<div class="q-mcopt">
A.\t$-8$<br>
B.\t$-4$<br>
C.\t$4$<br>
D.\t$8$
</div>`
        },
        hint: {
            tc: `兩直線垂直時斜率乘積為 $-1$。`,
            en: `When two straight lines are perpendicular, the product of their slopes is $-1$.`
        },
        solution: `A (65%)<p><iframe src="https://www.youtube.com/embed/nt-fZk2UL6c?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q25",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: {
            tc: `點 $A$ 的坐標為 $(-5, -2)$。 $A$ 向右平移 $9$ 單位至點 $B$，然後 $B$ 繞原點逆時針方向旋轉 $90^\\circ$ 至點 $C$。 求 $C$ 的 $y$ 坐標。 
<div class="q-mcopt">
A.\t$-4$<br>
B.\t$-2$<br>
C.\t$2$<br>
D.\t$4$
</div>`,
            en: `The coordinates of the point $A$ are $(-5, -2)$. $A$ is translated $9$ units to the right to the point $B$, and then $B$ is rotated anticlockwise about the origin through $90^\\circ$ to the point $C$. Find the $y$-coordinate of $C$. 
<div class="q-mcopt">
A.\t$-4$<br>
B.\t$-2$<br>
C.\t$2$<br>
D.\t$4$
</div>`
        },
        hint: {
            tc: `先平移再旋轉。`,
            en: `Translate first and then rotate.`
        },
        solution: `D (69%)<p><iframe src="https://www.youtube.com/embed/nqKcYD0YZ34?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q26",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 2,
        content: {
            tc: `直線 $L$ 的方程為 $5x - 7y - 14 = 0$。 若 $P$ 為直角坐標平面上的一動點使得由 $P$ 至 $L$ 的垂直距離等於 $3$，則 $P$ 的軌跡為
<div class="q-mcopt">
A.\t一扇形。 <br>
B.\t一正方形。 <br>
C.\t一拋物線。 <br>
D.\t一對直線。 
</div>`,
            en: `The equation of the straight line $L$ is $5x - 7y - 14 = 0$. If $P$ is a moving point in the rectangular coordinate plane such that the perpendicular distance from $P$ to $L$ is equal to $3$, then the locus of $P$ is
<div class="q-mcopt">
A.\ta sector. <br>
B.\ta square. <br>
C.\ta parabola. <br>
D.\ta pair of straight lines. 
</div>`
        },
        hint: {
            tc: `定距離的軌跡是平行於 $L$ 的兩直線。`,
            en: `The locus of points at a fixed distance is a pair of straight lines parallel to $L$.`
        },
        solution: `D (69%)<p><iframe src="https://www.youtube.com/embed/_oQyigM1VT8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q27",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: {
            tc: `將圓 $2x^2 + 2y^2 + 4x - 12y + 15 = 0$ 記為 $C$。 下列何者正確？
<div class="q-mcms">
I.\t$C$ 的面積為 $25\\pi$。
II.\t點 $(-3, 3)$ 位於 $C$ 以外。
III.\t$C$ 的圓心位於第四象限。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `Denote the circle $2x^2 + 2y^2 + 4x - 12y + 15 = 0$ by $C$. Which of the following is/are true?
<div class="q-mcms">
I.\tThe area of $C$ is $25\\pi$.
II.\tThe point $(-3, 3)$ lies outside $C$.
III.\tThe centre of $C$ lies in the fourth quadrant.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `先求圓心及半徑。`,
            en: `First find the centre and the radius.`
        },
        solution: `B (56%)<p><iframe src="https://www.youtube.com/embed/wmrNAGDI4VY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q28",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `從九個分別記有數字 $1$、$2$、$3$、$4$、$5$、$6$、$7$、$8$ 及 $9$ 的球中，隨機同時抽出兩個數字。 求抽出的兩個數字為連續整數的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{1}{2}$<br>
B.\t$\\dfrac{1}{4}$<br>
C.\t$\\dfrac{2}{9}$<br>
D.\t$\\dfrac{7}{9}$
</div>`,
            en: `Two numbers are randomly drawn at the same time from nine balls numbered $1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$ and $9$ respectively. Find the probability that the two numbers drawn are consecutive integers. 
<div class="q-mcopt">
A.\t$\\dfrac{1}{2}$<br>
B.\t$\\dfrac{1}{4}$<br>
C.\t$\\dfrac{2}{9}$<br>
D.\t$\\dfrac{7}{9}$
</div>`
        },
        hint: {
            tc: `連續整數對共有 8 對。`,
            en: `There are 8 pairs of consecutive integers.`
        },
        solution: `C (66%)<p><iframe src="https://www.youtube.com/embed/I3B02uW9pSc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q29",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 1,
        content: {
            tc: `下列何者能從任意一框線圖得出？
<div class="q-mcms">
I.\t分佈域
II.\t標準差
III.\t四分位數間距
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `Which of the following can be obtained from any box-and-whisker diagram?
<div class="q-mcms">
I.\tThe range
II.\tThe standard deviation
III.\tThe inter-quartile range
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `框線圖顯示最小值、最大值、$Q_1$、$Q_3$。`,
            en: `A box-and-whisker diagram shows the minimum, maximum, $Q_1$ and $Q_3$.`
        },
        solution: `B (85%)<p><iframe src="https://www.youtube.com/embed/7PDMGy3ixbg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q30",
        year: 2019,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 1,
        content: {
            tc: `下表顯示某些學生在一年內所獲優點的數目的分佈。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">所獲優點的數目</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">7</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">8</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">9</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">10</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">學生人數</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">32</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">36</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">28</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">18</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
    </tr>
  </table>下列何者正確？
<div class="q-mcopt">
A.\t該分佈的眾數為 $36$。 <br>
B.\t該分佈的中位數為 $8$。 <br>
C.\t該分佈的下四分位數為 $6$。 <br>
D.\t該分佈的上四分位數為 $10$。 
</div>`,
            en: `The table below shows the distribution of the numbers of merits obtained by some students in a year.<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Number of merits obtained</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">7</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">8</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">9</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">10</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Number of students</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">32</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">36</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">28</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">18</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
    </tr>
  </table>Which of the following is true?
<div class="q-mcopt">
A.\tThe mode of the distribution is $36$. <br>
B.\tThe median of the distribution is $8$. <br>
C.\tThe lower quartile of the distribution is $6$. <br>
D.\tThe upper quartile of the distribution is $10$. 
</div>`
        },
        hint: {
            tc: `累計人數後求四分位數。`,
            en: `Find the quartiles after accumulating the frequencies.`
        },
        solution: `C (78%)<p><iframe src="https://www.youtube.com/embed/3aY5GWTwwag?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q31",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
            tc: `已知 $\\log_9 y$ 為 $\\log_3 x$ 的線性函數。 該線性函數的圖像在垂直軸上的截距及在水平軸上的截距分別為 $7$ 及 $8$。 下列何者必為正確？
<div class="q-mcopt">
A.\t$x^4y^7 = 3^{56}$<br>
B.\t$x^7y^4 = 3^{56}$<br>
C.\t$x^7y^8 = 3^{56}$<br>
D.\t$x^8y^7 = 3^{56}$
</div>`,
            en: `It is given that $\\log_9 y$ is a linear function of $\\log_3 x$. The intercepts of the graph of the linear function on the vertical axis and on the horizontal axis are $7$ and $8$ respectively. Which of the following must be true?
<div class="q-mcopt">
A.\t$x^4y^7 = 3^{56}$<br>
B.\t$x^7y^4 = 3^{56}$<br>
C.\t$x^7y^8 = 3^{56}$<br>
D.\t$x^8y^7 = 3^{56}$
</div>`
        },
        hint: {
            tc: `寫出線性關係並換底。`,
            en: `Write the linear relation and change the base.`
        },
        solution: `B (34%)<p><iframe src="https://www.youtube.com/embed/QgabehKagEA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q32",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
            tc: `若 $\\dfrac{3}{3\\log x - 2} + 7 = \\dfrac{2}{2\\log x + 1}$，則 $\\log \\dfrac{1}{x} =$
<div class="q-mcopt">
A.\t$-3$  或  $2$。 <br>
B.\t$-2$  或  $3$。 <br>
C.\t$\\dfrac{-1}{3}$  或  $\\dfrac{1}{2}$。 <br>
D.\t$\\dfrac{-1}{2}$  或  $\\dfrac{1}{3}$。 
</div>`,
            en: `If $\\dfrac{3}{3\\log x - 2} + 7 = \\dfrac{2}{2\\log x + 1}$, then $\\log \\dfrac{1}{x} =$
<div class="q-mcopt">
A.\t$-3$  or  $2$. <br>
B.\t$-2$  or  $3$. <br>
C.\t$\\dfrac{-1}{3}$  or  $\\dfrac{1}{2}$. <br>
D.\t$\\dfrac{-1}{2}$  or  $\\dfrac{1}{3}$. 
</div>`
        },
        hint: {
            tc: `設 $t=\\log x$ 後解方程。`,
            en: `Let $t=\\log x$ and then solve the equation.`
        },
        solution: `D (34%)<p><iframe src="https://www.youtube.com/embed/snRg_kRLAdM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q33",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: {
            tc: `$100110000010110_2 =$
<div class="q-mcopt">
A.\t$19 \\times 2^{10} + 22$。 <br>
B.\t$19 \\times 2^{10} + 44$。 <br>
C.\t$19 \\times 2^{11} + 22$。 <br>
D.\t$19 \\times 2^{11} + 44$。 
</div>`,
            en: `$100110000010110_2 =$
<div class="q-mcopt">
A.\t$19 \\times 2^{10} + 22$. <br>
B.\t$19 \\times 2^{10} + 44$. <br>
C.\t$19 \\times 2^{11} + 22$. <br>
D.\t$19 \\times 2^{11} + 44$. 
</div>`
        },
        hint: {
            tc: `分組後轉成十進制。`,
            en: `Group the digits and convert to decimal.`
        },
        solution: `A (61%)<p><iframe src="https://www.youtube.com/embed/RMtMkwfp_ho?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q34",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: {
            tc: `若 $a$ 為一實數，則 $\\dfrac{4+i^5}{a+i} - i^6$ 的實部為
<div class="q-mcopt">
A.\t$\\dfrac{4a+1}{a^2-1}$。 <br>
B.\t$\\dfrac{4a+1}{a^2+1}$。 <br>
C.\t$\\dfrac{a^2+4a+2}{a^2-1}$。 <br>
D.\t$\\dfrac{a^2+4a+2}{a^2+1}$。 
</div>`,
            en: `If $a$ is a real number, then the real part of $\\dfrac{4+i^5}{a+i} - i^6$ is
<div class="q-mcopt">
A.\t$\\dfrac{4a+1}{a^2-1}$. <br>
B.\t$\\dfrac{4a+1}{a^2+1}$. <br>
C.\t$\\dfrac{a^2+4a+2}{a^2-1}$. <br>
D.\t$\\dfrac{a^2+4a+2}{a^2+1}$. 
</div>`
        },
        hint: {
            tc: `利用 $i$ 的週期簡化後分實虛部。`,
            en: `Simplify using the period of $i$ and then separate the real and imaginary parts.`
        },
        solution: `D (45%)<p><iframe src="https://www.youtube.com/embed/pwpnnssO1Co?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q35",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: {
            tc: `考慮以下的不等式組：<br>
\t$\\begin{cases}
x+2y \\le 20 \\\\[1.2ex]
7x-6y \\le 20 \\\\[1.2ex]
13x+6y \\ge 20
\\end{cases}$<br>
設 $R$ 為表示以上的不等式組的解之區域。 若 $(x, y)$ 為 $R$ 中的一點，則 $7x+8y+9$ 的最大值為
<div class="q-mcopt">
A.\t$15$。 <br>
B.\t$77$。 <br>
C.\t$113$。 <br>
D.\t$115$。 
</div>`,
            en: `Consider the following system of inequalities:<br>
\t$\\begin{cases}
x+2y \\le 20 \\\\[1.2ex]
7x-6y \\le 20 \\\\[1.2ex]
13x+6y \\ge 20
\\end{cases}$<br>
Let $R$ be the region which represents the solution of the above system of inequalities. If $(x, y)$ is a point lying in $R$, then the greatest value of $7x+8y+9$ is
<div class="q-mcopt">
A.\t$15$. <br>
B.\t$77$. <br>
C.\t$113$. <br>
D.\t$115$. 
</div>`
        },
        hint: {
            tc: `找出可行域頂點並代入目標函數。`,
            en: `Find the vertices of the feasible region and substitute into the objective function.`
        },
        solution: `C (53%)<p><iframe src="https://www.youtube.com/embed/4H5nJgcxemw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q36",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: {
            tc: `一等比數列的第 $2$ 項與第 $5$ 項之和為 $9$，而該數列的第 $7$ 項與第 $10$ 項之和為 $288$。 求該數列的第 $20$ 項。 
<div class="q-mcopt">
A.\t$65\\,536$<br>
B.\t$131\\,072$<br>
C.\t$262\\,144$<br>
D.\t$524\\,288$
</div>`,
            en: `The sum of the 2nd term and the 5th term of a geometric sequence is $9$, while the sum of the 7th term and the 10th term of the sequence is $288$. Find the 20th term of the sequence. 
<div class="q-mcopt">
A.\t$65\\,536$<br>
B.\t$131\\,072$<br>
C.\t$262\\,144$<br>
D.\t$524\\,288$
</div>`
        },
        hint: {
            tc: `設首項及公比後解方程。`,
            en: `Let the first term and the common ratio be unknowns and solve the equations.`
        },
        solution: `C (41%)<p><iframe src="https://www.youtube.com/embed/1cb9VIYUkEk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q37",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: {
            tc: `設 $k$ 為一常數。 直線 $3x-y-2=0$ 與圓 $5x^2+5y^2+kx+4y-20=0$ 相交於點 $P$ 及點 $Q$。 若 $PQ$ 的中點的 $x$ 坐標為 $2$，求 $k$。 
<div class="q-mcopt">
A.\t$-152$<br>
B.\t$-52$<br>
C.\t$148$<br>
D.\t$248$
</div>`,
            en: `Let $k$ be a constant. The straight line $3x-y-2=0$ intersects the circle $5x^2+5y^2+kx+4y-20=0$ at the points $P$ and $Q$. If the $x$-coordinate of the mid-point of $PQ$ is $2$, find $k$. 
<div class="q-mcopt">
A.\t$-152$<br>
B.\t$-52$<br>
C.\t$148$<br>
D.\t$248$
</div>`
        },
        hint: {
            tc: `弦的中點在圓心與弦垂直的直線上。`,
            en: `The mid-point of a chord lies on the line perpendicular to the chord and passing through the centre.`
        },
        solution: `A (31%)<p><iframe src="https://www.youtube.com/embed/AnrIq52-fWk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q38",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `圖中，$O$ 為扇形 $OABC$ 的圓心。 已知 $\\Delta OAB$ 為一等邊三角形，$AC$ 與 $OB$ 相交於點 $D$。 若 $OA=12\\text{ cm}$ 及 $\\angle AOC=90^\\circ$，求陰影區域 $BCD$ 的面積準確至最接近的 $\\text{ cm}^2$。 
<div class="q-mcopt"><img src="img/2019dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$11\\text{ cm}^2$<br>
B.\t$16\\text{ cm}^2$<br>
C.\t$26\\text{ cm}^2$<br>
D.\t$38\\text{ cm}^2$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $O$ is the centre of the sector $OABC$. It is given that $\\Delta OAB$ is an equilateral triangle, and $AC$ intersects $OB$ at the point $D$. If $OA=12\\text{ cm}$ and $\\angle AOC=90^\\circ$, find the area of the shaded region $BCD$ correct to the nearest $\\text{ cm}^2$. 
<div class="q-mcopt"><img src="img/2019dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$11\\text{ cm}^2$<br>
B.\t$16\\text{ cm}^2$<br>
C.\t$26\\text{ cm}^2$<br>
D.\t$38\\text{ cm}^2$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `計算扇形與三角形面積差。`,
            en: `Calculate the difference between the areas of the sector and the triangle.`
        },
        solution: `A (34%)<p><iframe src="https://www.youtube.com/embed/W9jPNCcv3jE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q39",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$TA$ 為圓 $ABCDE$ 在點 $A$ 的切線。 若 $\\angle BAD=64^\\circ$、$\\angle EAT=38^\\circ$ 及 $\\angle DCE=22^\\circ$，則 $\\angle ADB=$
<div class="q-mcopt"><img src="img/2019dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$52^\\circ$<br>
B.\t$56^\\circ$<br>
C.\t$60^\\circ$<br>
D.\t$68^\\circ$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $TA$ is the tangent to the circle $ABCDE$ at the point $A$. If $\\angle BAD=64^\\circ$, $\\angle EAT=38^\\circ$ and $\\angle DCE=22^\\circ$, then $\\angle ADB=$
<div class="q-mcopt"><img src="img/2019dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$52^\\circ$<br>
B.\t$56^\\circ$<br>
C.\t$60^\\circ$<br>
D.\t$68^\\circ$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用切線與弦的夾角及圓周角。`,
            en: `Use the alternate segment theorem and angles in the same segment.`
        },
        solution: `B (48%)<p><iframe src="https://www.youtube.com/embed/VqkeXV8Vo8M?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q40",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 2,
        content: {
            tc: `圖中所示為四面體 $PQRS$，其底 $QRS$ 在水平地面上。 已知 $Q$ 鉛垂於 $P$ 之下。 若 $\\angle PRQ = 47^\\circ$、$\\angle PSQ = 53^\\circ$ 及 $\\angle RQS = 120^\\circ$，求 $\\angle RPS$ 準確至最接近的度。 
<div class="q-mcopt"><img src="img/2019dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$52^\\circ$<br>
B.\t$60^\\circ$<br>
C.\t$68^\\circ$<br>
D.\t$76^\\circ$
</div><div style="clear: both;"></div>`,
            en: `The figure shows a tetrahedron $PQRS$ with base $QRS$ on the horizontal ground. It is given that $Q$ is vertically below $P$. If $\\angle PRQ = 47^\\circ$, $\\angle PSQ = 53^\\circ$ and $\\angle RQS = 120^\\circ$, find $\\angle RPS$ correct to the nearest degree. 
<div class="q-mcopt"><img src="img/2019dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$52^\\circ$<br>
B.\t$60^\\circ$<br>
C.\t$68^\\circ$<br>
D.\t$76^\\circ$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `用餘弦定理求各邊後再求角。`,
            en: `Use the cosine formula to find the sides and then find the angle.`
        },
        solution: `C (37%)<p><iframe src="https://www.youtube.com/embed/hjbM0GewSuU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q41",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Four Centres of a Triangle"],
        difficulty: 2,
        content: {
            tc: `若 $\\Delta ABC$ 為一直角三角形且 $\\angle ABC = 90^\\circ$，則下列何者正確？
<div class="q-mcms">
I.\t$\\Delta ABC$ 的垂心在 $AC$ 上。
II.\t$\\Delta ABC$ 的形心位於 $\\Delta ABC$ 以內。
III.\t$\\Delta ABC$ 的內心位於 $\\Delta ABC$ 以外。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `If $\\Delta ABC$ is a right-angled triangle with $\\angle ABC = 90^\\circ$, which of the following is/are true?
<div class="q-mcms">
I.\tThe orthocentre of $\\Delta ABC$ lies on $AC$.
II.\tThe centroid of $\\Delta ABC$ lies inside $\\Delta ABC$.
III.\tThe incentre of $\\Delta ABC$ lies outside $\\Delta ABC$.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `直角三角形的垂心在直角頂點。`,
            en: `The orthocentre of a right-angled triangle is at the right-angled vertex.`
        },
        solution: `B (44%)<p><iframe src="https://www.youtube.com/embed/6FEGer_ClkU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q42",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `某袋子內有 $2$ 個綠色杯、$8$ 個藍色杯及 $9$ 個紅色杯。 若從該袋子內隨機同時抽出 $6$ 個杯，求抽出至少 $1$ 個藍色杯的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{31}{57}$<br>
B.\t$\\dfrac{44}{323}$<br>
C.\t$\\dfrac{635}{646}$<br>
D.\t$\\dfrac{968}{969}$
</div>`,
            en: `There are $2$ green cups, $8$ blue cups and $9$ red cups in a bag. If $6$ cups are randomly drawn at the same time from the bag, find the probability that at least $1$ blue cup is drawn. 
<div class="q-mcopt">
A.\t$\\dfrac{31}{57}$<br>
B.\t$\\dfrac{44}{323}$<br>
C.\t$\\dfrac{635}{646}$<br>
D.\t$\\dfrac{968}{969}$
</div>`
        },
        hint: {
            tc: `用補集計算：1 減沒有藍色杯的概率。`,
            en: `Use the complement: 1 minus the probability of no blue cups.`
        },
        solution: `C (65%)<p><iframe src="https://www.youtube.com/embed/LIgqdLMkrZc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q43",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `某數學比賽共設三題。 素珊答對第一題、答對第二題及答對第三題的概率分別為 $\\dfrac{1}{3}$、$\\dfrac{1}{5}$ 及 $\\dfrac{1}{7}$。 素珊在該比賽中答對至多 $2$ 題的概率為
<div class="q-mcopt">
A.\t$\\dfrac{1}{105}$。 <br>
B.\t$\\dfrac{13}{105}$。 <br>
C.\t$\\dfrac{92}{105}$。 <br>
D.\t$\\dfrac{104}{105}$。 
</div>`,
            en: `There are three questions in a mathematics competition. The probabilities that Susan answers the first question, the second question and the third question correctly are $\\dfrac{1}{3}$, $\\dfrac{1}{5}$ and $\\dfrac{1}{7}$ respectively. The probability that Susan answers at most $2$ questions correctly in the competition is
<div class="q-mcopt">
A.\t$\\dfrac{1}{105}$. <br>
B.\t$\\dfrac{13}{105}$. <br>
C.\t$\\dfrac{92}{105}$. <br>
D.\t$\\dfrac{104}{105}$. 
</div>`
        },
        hint: {
            tc: `1 減答對全部三題的概率。`,
            en: `1 minus the probability of answering all three questions correctly.`
        },
        solution: `D (46%)<p><iframe src="https://www.youtube.com/embed/1z3tgfg-Jks?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q44",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 1,
        content: {
            tc: `在某考試，考試得分的標準差為 $8$ 分。 小麗的考試得分為 $69$ 分且她的標準分為 $0.5$。 若偉明在該考試的標準分為 $-1.5$，則他的考試得分為
<div class="q-mcopt">
A.\t$45$ 分。 <br>
B.\t$53$ 分。 <br>
C.\t$65$ 分。 <br>
D.\t$77$ 分。 
</div>`,
            en: `In a test, the standard deviation of the test scores is $8$ marks. Mary's test score is $69$ marks and her standard score is $0.5$. If John's standard score in the test is $-1.5$, then his test score is
<div class="q-mcopt">
A.\t$45$ marks. <br>
B.\t$53$ marks. <br>
C.\t$65$ marks. <br>
D.\t$77$ marks. 
</div>`
        },
        hint: {
            tc: `先求平均值再計算偉明得分。`,
            en: `First find the mean and then calculate John's score.`
        },
        solution: `B (72%)<p><iframe src="https://www.youtube.com/embed/HBL9c6rQhXs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2019-DSE-MATH-CP2-Q45",
        year: 2019,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: {
            tc: `某組數的平均值、分佈域及方差分別為 $m$、$r$ 及 $v$。 將該組的每個數乘以 $6$ 後各加上 $5$ 而成新一組數。 下列何者正確？
<div class="q-mcms">
I.\t新一組數的平均值為 $6m+5$。
II.\t新一組數的分佈域為 $6r+5$。
III.\t新一組數的方差為 $6v+5$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `The mean, the range and the variance of a set of numbers are $m$, $r$ and $v$ respectively. A new set of numbers is formed by multiplying each number of the set by $6$ and then adding $5$. Which of the following is/are true?
<div class="q-mcms">
I.\tThe mean of the new set of numbers is $6m+5$.
II.\tThe range of the new set of numbers is $6r+5$.
III.\tThe variance of the new set of numbers is $6v+5$.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `線性變換對平均值、分佈域、方差的影響。`,
            en: `The effects of a linear transformation on the mean, the range and the variance.`
        },
        solution: `A (56%)<p><iframe src="https://www.youtube.com/embed/LYdGB6kyySQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
);
