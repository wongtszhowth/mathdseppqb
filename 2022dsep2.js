// 2022dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2022-DSE-MATH-CP2-Q01",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `$\\alpha^2 - \\alpha - \\beta^2 + \\beta =$
<div class="q-mcopt">
A.\t$(\\alpha + \\beta)(\\alpha - \\beta + 1)$。<br>
B.\t$(\\alpha + \\beta)(\\alpha - \\beta - 1)$。<br>
C.\t$(\\alpha - \\beta)(\\alpha + \\beta + 1)$。<br>
D.\t$(\\alpha - \\beta)(\\alpha + \\beta - 1)$。
</div>`,
            en: `$\\alpha^2 - \\alpha - \\beta^2 + \\beta =$
<div class="q-mcopt">
A.\t$(\\alpha + \\beta)(\\alpha - \\beta + 1)$.<br>
B.\t$(\\alpha + \\beta)(\\alpha - \\beta - 1)$.<br>
C.\t$(\\alpha - \\beta)(\\alpha + \\beta + 1)$.<br>
D.\t$(\\alpha - \\beta)(\\alpha + \\beta - 1)$.
</div>`
        },
        hint: {
            tc: `分組後因式分解。`,
            en: `Factorize after grouping.`
        },
        solution: `D (77%)<p><iframe src="https://www.youtube.com/embed/QltYkUSe2Ws?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q02",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `$\\dfrac{81^{2n+3}}{(27^{n+1})^2} =$
<div class="q-mcopt">
A.\t$3$。<br>
B.\t$3^{2n+6}$。<br>
C.\t$3^{4n+8}$。<br>
D.\t$3^{10n+14}$。
</div>`,
            en: `$\\dfrac{81^{2n+3}}{(27^{n+1})^2} =$
<div class="q-mcopt">
A.\t$3$.<br>
B.\t$3^{2n+6}$.<br>
C.\t$3^{4n+8}$.<br>
D.\t$3^{10n+14}$.
</div>`
        },
        hint: {
            tc: `先化成相同底數再簡化指數。`,
            en: `Convert to the same base first, then simplify the indices.`
        },
        solution: `B (81%)<p><iframe src="https://www.youtube.com/embed/sePnnJZMsaI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q03",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 2,
        content: {
            tc: `若 $m$ 及 $n$ 均為常數使得 $(x+3)^2 + mx \\equiv (x-n)(x+1) + 2n$，則 $m =$
<div class="q-mcopt">
A.\t$-14$。<br>
B.\t$-8$。<br>
C.\t$4$。<br>
D.\t$9$。
</div>`,
            en: `If $m$ and $n$ are constants such that $(x+3)^2 + mx \\equiv (x-n)(x+1) + 2n$, then $m =$
<div class="q-mcopt">
A.\t$-14$.<br>
B.\t$-8$.<br>
C.\t$4$.<br>
D.\t$9$.
</div>`
        },
        hint: {
            tc: `展開兩邊並比較係數。`,
            en: `Expand both sides and compare coefficients.`
        },
        solution: `A (64%)<p><iframe src="https://www.youtube.com/embed/lMkmwFsTv6U?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q04",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: {
            tc: `設 $c$ 為一常數。 解方程 $(x-c)(x-4c) = (3c-x)(x-4c)$。
<div class="q-mcopt">
A.\t$x=2c$<br>
B.\t$x=3c$<br>
C.\t$x=c$  或  $x=3c$<br>
D.\t$x=2c$  或  $x=4c$
</div>`,
            en: `Let $c$ be a constant. Solve the equation $(x-c)(x-4c) = (3c-x)(x-4c)$.
<div class="q-mcopt">
A.\t$x=2c$<br>
B.\t$x=3c$<br>
C.\t$x=c$ or $x=3c$<br>
D.\t$x=2c$ or $x=4c$
</div>`
        },
        hint: {
            tc: `移項後因式分解。`,
            en: `Rearrange terms and factorize.`
        },
        solution: `D (59%)<p><iframe src="https://www.youtube.com/embed/LPdlnrpuXJw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q05",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: {
            tc: `若 $\\dfrac{2}{u} + \\dfrac{3}{v} = 4$，則 $u =$
<div class="q-mcopt">
A.\t$\\dfrac{2v}{4v-3}$。<br>
B.\t$\\dfrac{2v}{3-4v}$。<br>
C.\t$\\dfrac{3v}{4v-2}$。<br>
D.\t$\\dfrac{3v}{2-4v}$。
</div>`,
            en: `If $\\dfrac{2}{u} + \\dfrac{3}{v} = 4$, then $u =$
<div class="q-mcopt">
A.\t$\\dfrac{2v}{4v-3}$.<br>
B.\t$\\dfrac{2v}{3-4v}$.<br>
C.\t$\\dfrac{3v}{4v-2}$.<br>
D.\t$\\dfrac{3v}{2-4v}$.
</div>`
        },
        hint: {
            tc: `先通分再整理含 $u$ 的項。`,
            en: `Take common denominator first, then rearrange terms with $u$.`
        },
        solution: `A (81%)<p><iframe src="https://www.youtube.com/embed/M8h03_GoWtw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q06",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 2,
        content: {
            tc: `已知 $x$ 為一實數。 若將 $x$ 下捨入至三位有效數字，則結果為 $345$。 求 $x$ 值的範圍。
<div class="q-mcopt">
A.\t$344 < x \\le 345$<br>
B.\t$345 \\le x < 346$<br>
C.\t$345 < x \\le 345.5$<br>
D.\t$344.5 \\le x < 345.5$
</div>`,
            en: `It is given that $x$ is a real number. If $x$ is rounded down to 3 significant figures, then the result is $345$. Find the range of values of $x$.
<div class="q-mcopt">
A.\t$344 < x \\le 345$<br>
B.\t$345 \\le x < 346$<br>
C.\t$345 < x \\le 345.5$<br>
D.\t$344.5 \\le x < 345.5$
</div>`
        },
        hint: {
            tc: `下捨入至三位有效數字的範圍。`,
            en: `Range of values for rounding down to 3 significant figures.`
        },
        solution: `B (45%)<p><iframe src="https://www.youtube.com/embed/j4NsrH5uyFM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q07",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: {
            tc: `$3y - 5 < 5y + 1 \\le 11$ 的解為
<div class="q-mcopt">
A.\t$-3 < y \\le 2$。<br>
B.\t$-3 \\le y < 2$。<br>
C.\t$-2 < y \\le 3$。<br>
D.\t$-2 \\le y < 3$。
</div>`,
            en: `The solution of $3y - 5 < 5y + 1 \\le 11$ is
<div class="q-mcopt">
A.\t$-3 < y \\le 2$.<br>
B.\t$-3 \\le y < 2$.<br>
C.\t$-2 < y \\le 3$.<br>
D.\t$-2 \\le y < 3$.
</div>`
        },
        hint: {
            tc: `分開處理兩個不等式再取交集。`,
            en: `Solve the two inequalities separately and take the intersection.`
        },
        solution: `A (86%)<p><iframe src="https://www.youtube.com/embed/pvRgHbaEm2o?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q08",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `設 $\\mathrm{f}(x) = x^2 - x + 1$。 若 $k$ 為一常數，則下列何者必為正確？
<div class="q-mcms">
I.\t$\\mathrm{f}(k) = \\mathrm{f}(-k)$
II.\t$\\mathrm{f}(k) = \\mathrm{f}(1-k)$
III.\t$\\mathrm{f}(k+1) = \\mathrm{f}(k) + \\mathrm{f}(1)$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `Let $\\mathrm{f}(x) = x^2 - x + 1$. If $k$ is a constant, which of the following must be true?
<div class="q-mcms">
I.\t$\\mathrm{f}(k) = \\mathrm{f}(-k)$
II.\t$\\mathrm{f}(k) = \\mathrm{f}(1-k)$
III.\t$\\mathrm{f}(k+1) = \\mathrm{f}(k) + \\mathrm{f}(1)$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `直接代入驗證各選項。`,
            en: `Substitute directly to verify each option.`
        },
        solution: `B (60%)<p><iframe src="https://www.youtube.com/embed/e-zlOEjVOOc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q09",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: {
            tc: `設 $\\mathrm{g}(x)=x^2+ax+b$，其中 $a$ 及 $b$ 均為常數。 若 $\\mathrm{g}(x)$ 可被 $x+2a$ 整除，求當 $\\mathrm{g}(x)$ 除以 $x-2a$ 時的餘數。
<div class="q-mcopt">
A.\t$-2a^2$<br>
B.\t$0$<br>
C.\t$2a^2$<br>
D.\t$4a^2$
</div>`,
            en: `Let $\\mathrm{g}(x)=x^2+ax+b$, where $a$ and $b$ are constants. If $\\mathrm{g}(x)$ is divisible by $x+2a$, find the remainder when $\\mathrm{g}(x)$ is divided by $x-2a$.
<div class="q-mcopt">
A.\t$-2a^2$<br>
B.\t$0$<br>
C.\t$2a^2$<br>
D.\t$4a^2$
</div>`
        },
        hint: {
            tc: `用因式定理求 $b$，再用餘式定理。`,
            en: `Use factor theorem to find $b$, then apply remainder theorem.`
        },
        solution: `D (55%)<p><iframe src="https://www.youtube.com/embed/FsjOOy02xBQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q10",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `設 $h$ 及 $k$ 均為實常數使得 $hk<0$。 下列有關 $y=(h-x)(k-x)$ 的圖像之敍述，何者正確？
<div class="q-mcms">
I.\t該圖像開口向上。
II.\t該圖像有兩個 $x$ 截距。
III.\t該圖像的 $y$ 截距為正值。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `Let $h$ and $k$ be real constants such that $hk<0$. Which of the following statements about the graph of $y=(h-x)(k-x)$ are true?
<div class="q-mcms">
I.\tThe graph opens upwards.
II.\tThe graph has two $x$-intercepts.
III.\tThe $y$-intercept of the graph is positive.
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `觀察二次項係數及截距符號。`,
            en: `Examine the quadratic coefficient and the sign of intercepts.`
        },
        solution: `A (56%)<p><iframe src="https://www.youtube.com/embed/-TyySZJ1Lmw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q11",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: {
            tc: `存款 $\\$88\\,000$，年利率 $6\\%$，年期 $4$ 年，複利計算，每月一結。 求利息準確至最接近的元。
<div class="q-mcopt">
A.\t$\\$21\\,120$<br>
B.\t$\\$23\\,098$<br>
C.\t$\\$23\\,803$<br>
D.\t$\\$23\\,825$
</div>`,
            en: `A sum of $\\$88\\,000$ is deposited at an interest rate of $6\\%$ per annum for $4$ years, compounded monthly. Find the interest correct to the nearest dollar.
<div class="q-mcopt">
A.\t$\\$21\\,120$<br>
B.\t$\\$23\\,098$<br>
C.\t$\\$23\\,803$<br>
D.\t$\\$23\\,825$
</div>`
        },
        hint: {
            tc: `月利率為 $0.5\\%$，共 $48$ 期。`,
            en: `Monthly interest rate is $0.5\\%$, with $48$ periods.`
        },
        solution: `C (77%)<p><iframe src="https://www.youtube.com/embed/xKS-lVeJ14w?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q12",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 2,
        content: {
            tc: `設 $x$、$y$ 及 $z$ 均為非零的數。 若 $x:y=8:5$ 及 $2x=4z-3y$，則 $y:z=$
<div class="q-mcopt">
A.\t$16:17$。<br>
B.\t$17:16$。<br>
C.\t$20:31$。<br>
D.\t$31:20$。
</div>`,
            en: `Let $x$, $y$ and $z$ be non-zero numbers. If $x:y=8:5$ and $2x=4z-3y$, then $y:z=$
<div class="q-mcopt">
A.\t$16:17$.<br>
B.\t$17:16$.<br>
C.\t$20:31$.<br>
D.\t$31:20$.
</div>`
        },
        hint: {
            tc: `設 $x=8k$、$y=5k$ 後代入求解。`,
            en: `Set $x=8k$, $y=5k$ and substitute to solve.`
        },
        solution: `C (66%)<p><iframe src="https://www.youtube.com/embed/SbYvkERqNcY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q13",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: {
            tc: `若 $u$ 隨 $v$ 的平方根正變且隨 $w$ 反變，則下列何者正確？
<div class="q-mcms">
I.\t$u^2$ 隨 $v$ 正變且隨 $w$ 的平方反變。
II.\t$v$ 隨 $w$ 正變且隨 $u$ 的平方根反變。
III.\t$w$ 隨 $v$ 的平方根正變且隨 $u$ 反變。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `If $u$ varies directly as the square root of $v$ and inversely as $w$, which of the following are true?
<div class="q-mcms">
I.\t$u^2$ varies directly as $v$ and inversely as the square of $w$.
II.\t$v$ varies directly as $w$ and inversely as the square root of $u$.
III.\t$w$ varies directly as the square root of $v$ and inversely as $u$.
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `由 $u = k\\sqrt{v}/w$ 推導各關係。`,
            en: `Deduce relations from $u = k\\sqrt{v}/w$.`
        },
        solution: `B (69%)<p><iframe src="https://www.youtube.com/embed/y7KhBGXJQHQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q14",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 1,
        content: {
            tc: `圖中，第 $1$ 個圖案包含 $8$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $(2n+6)$ 粒點子所組成。 求第 $7$ 個圖案的點子數目。
<img src="img/2022dsep2q14.jpg" class="q-img" alt="題目附圖" style="max-width: 95%;"><div class="q-mcopt">
A.\t$52$<br>
B.\t$68$<br>
C.\t$86$<br>
D.\t$106$
</div>`,
            en: `In the figure, the 1st pattern consists of $8$ dots. For any positive integer $n$, the $(n+1)\\text{th}$ pattern is formed by adding $(2n+6)$ dots to the $n\\text{th}$ pattern. Find the number of dots in the $7\\text{th}$ pattern.
<img src="img/2022dsep2q14.jpg" class="q-img" alt="題目附圖" style="max-width: 95%;"><div class="q-mcopt">
A.\t$52$<br>
B.\t$68$<br>
C.\t$86$<br>
D.\t$106$
</div>`
        },
        hint: {
            tc: `寫出通項或累加計算。`,
            en: `Find the general term or sum term by term.`
        },
        solution: `C (86%)<p><iframe src="https://www.youtube.com/embed/WKplFWxut-E?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q15",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `一實心半球體的半徑與一實心直立圓柱體的底半徑相等。 若該圓柱體的高等於其底直徑，則該半球體的總表面面積與該圓柱體的總表面面積之比為
<div class="q-mcopt">
A.\t$1:2$。<br>
B.\t$1:3$。<br>
C.\t$2:3$。<br>
D.\t$2:5$。
</div>`,
            en: `The radius of a solid hemisphere and the base radius of a solid right circular cylinder are equal. If the height of the circular cylinder is equal to its base diameter, then the ratio of the total surface area of the hemisphere to the total surface area of the circular cylinder is
<div class="q-mcopt">
A.\t$1:2$.<br>
B.\t$1:3$.<br>
C.\t$2:3$.<br>
D.\t$2:5$.
</div>`
        },
        hint: {
            tc: `設半徑為 $r$，分別計算兩表面積。`,
            en: `Let the radius be $r$, and calculate both total surface areas separately.`
        },
        solution: `A (43%)<p><iframe src="https://www.youtube.com/embed/c5QYzZr01js?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q16",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `某圓的直徑為 $10\\text{ cm}$。 一長度為 $8\\text{ cm}$ 的弦把該圓分成一優弓形及一劣弓形。 求該優弓形的面積準確至最接近的 $\\text{ cm}^2$。
<div class="q-mcopt">
A.\t$11\\text{ cm}^2$<br>
B.\t$23\\text{ cm}^2$<br>
C.\t$55\\text{ cm}^2$<br>
D.\t$67\\text{ cm}^2$
</div>`,
            en: `The diameter of a circle is $10\\text{ cm}$. The circle is divided into a major segment and a minor segment by a chord of length $8\\text{ cm}$. Find the area of the major segment correct to the nearest $\\text{ cm}^2$.
<div class="q-mcopt">
A.\t$11\\text{ cm}^2$<br>
B.\t$23\\text{ cm}^2$<br>
C.\t$55\\text{ cm}^2$<br>
D.\t$67\\text{ cm}^2$
</div>`
        },
        hint: {
            tc: `先求圓心角及扇形面積，再減三角形。`,
            en: `Find the central angle and sector area first, then subtract the triangle area.`
        },
        solution: `D (33%)<p><iframe src="https://www.youtube.com/embed/UOWNbDpTtls?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q17",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `圖中，$M$ 及 $N$ 分別為 $PQ$ 及 $QR$ 上的點使得 $PM:MQ = 5:6$ 及 $QN:NR = 3:4$。 若四邊形 $MNRP$ 的面積為 $59\\text{ cm}^2$，則 $\\Delta MNQ$ 的面積為
<div class="q-mcopt"><img src="img/2022dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$17\\text{ cm}^2$。<br>
B.\t$18\\text{ cm}^2$。<br>
C.\t$19\\text{ cm}^2$。<br>
D.\t$20\\text{ cm}^2$。
</div><div style="clear: both;"></div>`,
            en: `In the figure, $M$ and $N$ are points lying on $PQ$ and $QR$ respectively such that $PM:MQ = 5:6$ and $QN:NR = 3:4$. If the area of the quadrilateral $MNRP$ is $59\\text{ cm}^2$, then the area of $\\Delta MNQ$ is
<div class="q-mcopt"><img src="img/2022dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$17\\text{ cm}^2$.<br>
B.\t$18\\text{ cm}^2$.<br>
C.\t$19\\text{ cm}^2$.<br>
D.\t$20\\text{ cm}^2$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用面積比與底的比例關係。`,
            en: `Use area ratios derived from base ratios.`
        },
        solution: `B (37%)<p><iframe src="https://www.youtube.com/embed/tB-9z6efJ8E?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q18",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: {
            tc: `圖中，長方形 $ABCD$ 的周界為 $170\\text{ cm}$。 已知 $EBF$ 為一直線及 $\\angle AEB = \\angle BFC = 90^\\circ$。 若 $AE = 24\\text{ cm}$ 及 $BC = 34\\text{ cm}$，則 $EF =$
<div class="q-mcopt"><img src="img/2022dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$45\\text{ cm}$。<br>
B.\t$51\\text{ cm}$。<br>
C.\t$61\\text{ cm}$。<br>
D.\t$75\\text{ cm}$。
</div><div style="clear: both;"></div>`,
            en: `In the figure, the perimeter of the rectangle $ABCD$ is $170\\text{ cm}$. It is given that $EBF$ is a straight line and $\\angle AEB = \\angle BFC = 90^\\circ$. If $AE = 24\\text{ cm}$ and $BC = 34\\text{ cm}$, then $EF =$
<div class="q-mcopt"><img src="img/2022dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$45\\text{ cm}$.<br>
B.\t$51\\text{ cm}$.<br>
C.\t$61\\text{ cm}$.<br>
D.\t$75\\text{ cm}$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `先求 $AB$ 及 $BE$、$CF$，再用畢氏定理。`,
            en: `Find $AB$, $BE$, and $CF$ first, then apply Pythagoras' Theorem.`
        },
        solution: `C (70%)<p><iframe src="https://www.youtube.com/embed/NX8SQx2zvNQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q19",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABC$ 為一等邊三角形。 設 $D$ 及 $E$ 分別為 $AC$ 及 $BC$ 上的點使得 $AD = CE$。 若 $\\angle CBD = 38^\\circ$，則 $\\angle AEB =$
<div class="q-mcopt"><img src="img/2022dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$73^\\circ$。<br>
B.\t$75^\\circ$。<br>
C.\t$78^\\circ$。<br>
D.\t$82^\\circ$。
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABC$ is an equilateral triangle. Let $D$ and $E$ be points lying on $AC$ and $BC$ respectively such that $AD = CE$. If $\\angle CBD = 38^\\circ$, then $\\angle AEB =$
<div class="q-mcopt"><img src="img/2022dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$73^\\circ$.<br>
B.\t$75^\\circ$.<br>
C.\t$78^\\circ$.<br>
D.\t$82^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用等邊三角形及等腰三角形性質。`,
            en: `Use properties of equilateral and isosceles triangles.`
        },
        solution: `D (67%)<p><iframe src="https://www.youtube.com/embed/_WrrhHt3c6I?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q20",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `圖中所示為一平行四邊形。 下列何者必為正確？
<div class="q-mcms"><img src="img/2022dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a+b=180^\\circ$
II.\t$b+c=360^\\circ$
III.\t$c+d=540^\\circ$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
            en: `The figure shows a parallelogram. Which of the following must be true?
<div class="q-mcms"><img src="img/2022dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a+b=180^\\circ$
II.\t$b+c=360^\\circ$
III.\t$c+d=540^\\circ$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用平行四邊形對角相等及鄰角互補。`,
            en: `Use properties that opposite angles of a parallelogram are equal and adjacent angles are supplementary.`
        },
        solution: `B (69%)<p><iframe src="https://www.youtube.com/embed/lduiZiSnINw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q21",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 1,
        content: {
            tc: `圖中，$O$ 為圓 $ABC$ 的圓心。 若 $\\angle ABO = 36^\\circ$ 及 $\\angle BOC = 164^\\circ$，則 $\\angle ACO =$
<div class="q-mcopt"><img src="img/2022dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$41^\\circ$。<br>
B.\t$46^\\circ$。<br>
C.\t$52^\\circ$。<br>
D.\t$64^\\circ$。
</div><div style="clear: both;"></div>`,
            en: `In the figure, $O$ is the centre of the circle $ABC$. If $\\angle ABO = 36^\\circ$ and $\\angle BOC = 164^\\circ$, then $\\angle ACO =$
<div class="q-mcopt"><img src="img/2022dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$41^\\circ$.<br>
B.\t$46^\\circ$.<br>
C.\t$52^\\circ$.<br>
D.\t$64^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用等腰三角形及圓心角性質。`,
            en: `Use properties of isosceles triangles and angle at the centre.`
        },
        solution: `B (70%)<p><iframe src="https://www.youtube.com/embed/0Wt9HBEg9k4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q22",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABC$ 為一直角三角形且 $\\angle ABC = 90^\\circ$。 設 $D$ 及 $E$ 分別為 $AC$ 及 $BC$ 上的點使得 $ABED$ 為一圓內接四邊形。 若 $AB = 660\\text{ cm}$ 、 $AD = 572\\text{ cm}$ 及 $BE = 275\\text{ cm}$，則 $CD =$
<div class="q-mcopt"><img src="img/2022dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$429\\text{ cm}$。<br>
B.\t$715\\text{ cm}$。<br>
C.\t$728\\text{ cm}$。<br>
D.\t$845\\text{ cm}$。
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABC$ is a right-angled triangle with $\\angle ABC = 90^\\circ$. Let $D$ and $E$ be points lying on $AC$ and $BC$ respectively such that $ABED$ is a cyclic quadrilateral. If $AB = 660\\text{ cm}$, $AD = 572\\text{ cm}$ and $BE = 275\\text{ cm}$, then $CD =$
<div class="q-mcopt"><img src="img/2022dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$429\\text{ cm}$.<br>
B.\t$715\\text{ cm}$.<br>
C.\t$728\\text{ cm}$.<br>
D.\t$845\\text{ cm}$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用圓內接四邊形及相似三角形或畢氏定理。`,
            en: `Use properties of cyclic quadrilaterals and similar triangles or Pythagoras' Theorem.`
        },
        solution: `C (41%)<p><iframe src="https://www.youtube.com/embed/INJ_kUqIPKY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q23",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: {
            tc: `已知 $PQRS$ 為一菱形。 設 $T$ 為 $PR$ 與 $QS$ 的交點。 若 $\\angle QRT = \\theta$，則 $\\dfrac{PQ}{ST} =$
<div class="q-mcopt">
A.\t$\\sin\\theta$。<br>
B.\t$\\cos\\theta$。<br>
C.\t$\\dfrac{1}{\\sin\\theta}$。<br>
D.\t$\\dfrac{1}{\\cos\\theta}$。
</div>`,
            en: `It is given that $PQRS$ is a rhombus. Let $T$ be the point of intersection of $PR$ and $QS$. If $\\angle QRT = \\theta$, then $\\dfrac{PQ}{ST} =$
<div class="q-mcopt">
A.\t$\\sin\\theta$.<br>
B.\t$\\cos\\theta$.<br>
C.\t$\\dfrac{1}{\\sin\\theta}$.<br>
D.\t$\\dfrac{1}{\\cos\\theta}$.
</div>`
        },
        hint: {
            tc: `在直角三角形中表達比值。`,
            en: `Express the ratio using the right-angled triangle.`
        },
        solution: `C (47%)<p><iframe src="https://www.youtube.com/embed/w1_qF3ARNGo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q24",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `圖中所示為直線 $mx+ny=3$ 的圖像。 下列何者正確？
<div class="q-mcms"><img src="img/2022dsep2q24.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$m<0$
II.\t$n>3$
III.\t$m+n=0$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
            en: `The figure shows the graph of the straight line $mx+ny=3$. Which of the following are true?
<div class="q-mcms"><img src="img/2022dsep2q24.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$m<0$
II.\t$n>3$
III.\t$m+n=0$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由截距判斷 $m$、$n$ 的符號及大小。`,
            en: `Determine the signs and values of $m$ and $n$ using the intercepts.`
        },
        solution: `A (47%)<p><iframe src="https://www.youtube.com/embed/Vi_FR7zoELE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q25",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: {
            tc: `<div style="color: red;">點 $Q$ 的直角坐標為 $(4\\sqrt{3}, -4)$。 若 $Q$ 繞原點順時針方向旋轉 $90^\\circ$，則它的像的極坐標為</div><div class="q-mcopt" style="color: red;">
A.\t$(8, 60^\\circ)$。<br>
B.\t$(8, 120^\\circ)$。<br>
C.\t$(8, 210^\\circ)$。<br>
D.\t$(8, 240^\\circ)$。
</div>`,
            en: `<div style="color: red;">The rectangular coordinates of the point $Q$ are $(4\\sqrt{3}, -4)$. If $Q$ is rotated clockwise about the origin through $90^\\circ$, then the polar coordinates of its image are</div><div class="q-mcopt" style="color: red;">
A.\t$(8, 60^\\circ)$.<br>
B.\t$(8, 120^\\circ)$.<br>
C.\t$(8, 210^\\circ)$.<br>
D.\t$(8, 240^\\circ)$.
</div>`
        },
        hint: {
            tc: `先旋轉直角坐標再轉極坐標。`,
            en: `Rotate rectangular coordinates first, then convert to polar coordinates.`
        },
        solution: `D (57%)<p><iframe src="https://www.youtube.com/embed/iUcoqrg6poM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q26",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 2,
        content: {
            tc: `直線 $12x - 5y = 60$ 分別與 $x$ 軸及 $y$ 軸相交於點 $A$ 及點 $B$。 設 $P$ 為直角坐標平面上的一動點使得 $AP = BP$。 求 $P$ 的軌跡的方程。
<div class="q-mcopt">
A.\t$10x + 24y + 119 = 0$<br>
B.\t$15x + 36y + 179 = 0$<br>
C.\t$x^2 + y^2 - 5x + 12y = 0$<br>
D.\t$x^2 + y^2 + 12x - 133 = 0$
</div>`,
            en: `The straight line $12x - 5y = 60$ cuts the $x$-axis and the $y$-axis at the points $A$ and $B$ respectively. Let $P$ be a moving point in the rectangular coordinate plane such that $AP = BP$. Find the equation of the locus of $P$.
<div class="q-mcopt">
A.\t$10x + 24y + 119 = 0$<br>
B.\t$15x + 36y + 179 = 0$<br>
C.\t$x^2 + y^2 - 5x + 12y = 0$<br>
D.\t$x^2 + y^2 + 12x - 133 = 0$
</div>`
        },
        hint: {
            tc: `$AP=BP$ 表示垂直平分線。`,
            en: `$AP=BP$ represents the perpendicular bisector.`
        },
        solution: `A (52%)<p><iframe src="https://www.youtube.com/embed/osGKuwa25Ag?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q27",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: {
            tc: `點 $P$ 及點 $Q$ 的坐標分別為 $(10, -24)$ 及 $(17, -7)$。 設 $C$ 為通過原點、$P$ 及 $Q$ 的圓。 下列何者正確？
<div class="q-mcopt">
A.\t$PQ$ 為 $C$ 的一直徑。<br>
B.\t$C$ 的面積為 $196\\pi$。<br>
C.\t點 $(16, -9)$ 位於 $C$ 以內。<br>
D.\t$C$ 的圓心在直線 $5x + 12y = 0$ 上。
</div>`,
            en: `The coordinates of the points $P$ and $Q$ are $(10, -24)$ and $(17, -7)$ respectively. Let $C$ be the circle which passes through the origin, $P$ and $Q$. Which of the following is true?
<div class="q-mcopt">
A.\t$PQ$ is a diameter of $C$.<br>
B.\tThe area of $C$ is $196\\pi$.<br>
C.\tThe point $(16, -9)$ lies inside $C$.<br>
D.\tThe centre of $C$ lies on the straight line $5x + 12y = 0$.
</div>`
        },
        hint: {
            tc: `求圓方程後判斷各選項。`,
            en: `Find the equation of the circle first, then test each option.`
        },
        solution: `C (50%)<p><iframe src="https://www.youtube.com/embed/sxjDPSeKtL8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q28",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 1,
        content: {
            tc: `5&#9670;2 為三位數，其中 &#9670; 為 $0$ 至 $9$（包括 $0$ 及 $9$）內的整數。 求該三位數可被 $7$ 整除的概率。
<div class="q-mcopt">
A.\t$\\dfrac{1}{5}$<br>
B.\t$\\dfrac{1}{7}$<br>
C.\t$\\dfrac{1}{9}$<br>
D.\t$\\dfrac{1}{10}$
</div>`,
            en: `5&#9670;2 is a 3-digit number, where &#9670; is an integer from $0$ to $9$ inclusive. Find the probability that the 3-digit number is divisible by $7$.
<div class="q-mcopt">
A.\t$\\dfrac{1}{5}$<br>
B.\t$\\dfrac{1}{7}$<br>
C.\t$\\dfrac{1}{9}$<br>
D.\t$\\dfrac{1}{10}$
</div>`
        },
        hint: {
            tc: `計算 $502$ 至 $592$ 中可被 $7$ 整除的個數。`,
            en: `Count how many numbers from $502$ to $592$ are divisible by $7$.`
        },
        solution: `D (73%)<p><iframe src="https://www.youtube.com/embed/JFuoQDDhxSw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q29",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 1,
        content: {
            tc: `$60$ 名男演員和 $40$ 名女演員的平均體重為 $57\\text{ kg}$。 若男演員的平均體重為 $63\\text{ kg}$，則女演員的平均體重為
<div class="q-mcopt">
A.\t$48\\text{ kg}$。<br>
B.\t$50\\text{ kg}$。<br>
C.\t$53\\text{ kg}$。<br>
D.\t$60\\text{ kg}$。
</div>`,
            en: `The mean weight of $60$ actors and $40$ actresses is $57\\text{ kg}$. If the mean weight of the actors is $63\\text{ kg}$, then the mean weight of the actresses is
<div class="q-mcopt">
A.\t$48\\text{ kg}$.<br>
B.\t$50\\text{ kg}$.<br>
C.\t$53\\text{ kg}$.<br>
D.\t$60\\text{ kg}$.
</div>`
        },
        hint: {
            tc: `用加權平均列方程。`,
            en: `Set up an equation using weighted mean.`
        },
        solution: `A (79%)<p><iframe src="https://www.youtube.com/embed/fzMQlKfiZ4M?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q30",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 3,
        content: {
            tc: `考慮以下正整數：<div style="text-align: center;">$2$　　$5$　　$6$　　$6$　　$x$　　$x$　　$x$　　$y$</div>若以上正整數的平均值及中位數均為 $6$，則下列何者必為正確？
<div class="q-mcms">
I.\t以上正整數的眾數為 $6$。
II.\t以上正整數的最小可取分佈域為 $6$。
III.\t以上正整數的最大可取方差為 $6$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `Consider the following positive integers:<div style="text-align: center;">$2$　　$5$　　$6$　　$6$　　$x$　　$x$　　$x$　　$y$</div>If both the mean and the median of the above positive integers are $6$, which of the following must be true?
<div class="q-mcms">
I.\tThe mode of the above positive integers is $6$.
II.\tThe least possible range of the above positive integers is $6$.
III.\tThe greatest possible variance of the above positive integers is $6$.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `由平均值及中位數求 $x$、$y$ 的可能值。`,
            en: `Find possible values of $x$ and $y$ using the mean and median.`
        },
        solution: `B (25%)<p><iframe src="https://www.youtube.com/embed/_X0ktrIDmKE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q31",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices", "Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
            tc: `下列何者最小？
<div class="q-mcopt">
A.\t$(-345)^{768}$<br>
B.\t$453^{-786}$<br>
C.\t$\\left(\\dfrac{1}{435}\\right)^{867}$<br>
D.\t$\\left(\\dfrac{2}{543}\\right)^{876}$
</div>`,
            en: `Which of the following is the least?
<div class="q-mcopt">
A.\t$(-345)^{768}$<br>
B.\t$453^{-786}$<br>
C.\t$\\left(\\dfrac{1}{435}\\right)^{867}$<br>
D.\t$\\left(\\dfrac{2}{543}\\right)^{876}$
</div>`
        },
        hint: {
            tc: `比較各數的絕對值及正負。`,
            en: `Compare the absolute values and signs of each term.`
        },
        solution: `C (51%)<p><iframe src="https://www.youtube.com/embed/3Mjw-1GbepA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q32",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
            tc: `已知 $\\log_a y$ 為 $x$ 的線性函數，其中 $0 < a < 1$。 該線性函數的圖像在垂直軸上的截距及在水平軸上的截距分別為 $6$ 及 $3$。 若 $y=m x^n$，則下列何者正確？
<div class="q-mcms">
I.\t$m<1$
II.\t$n<1$
III.\t$mn^3=1$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `It is given that $\\log_a y$ is a linear function of $x$, where $0 < a < 1$. The intercepts on the vertical axis and on the horizontal axis of the graph of the linear function are $6$ and $3$ respectively. If $y=m x^n$, which of the following is/are true?
<div class="q-mcms">
I.\t$m<1$
II.\t$n<1$
III.\t$mn^3=1$
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `寫出線性關係並換底。`,
            en: `Formulate the linear relation and change base.`
        },
        solution: `C (34%)<p><iframe src="https://www.youtube.com/embed/V8vt30m2wTs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q33",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
            tc: `若 $\\log_4 y = 2x - 1$ 及 $(\\log_4 y)^2 = 20x - 31$，則 $\\log_2 y =$
<div class="q-mcopt">
A.\t$1$  或  $2$。<br>
B.\t$2$  或  $4$。<br>
C.\t$3$  或  $7$。<br>
D.\t$6$  或  $14$。
</div>`,
            en: `If $\\log_4 y = 2x - 1$ and $(\\log_4 y)^2 = 20x - 31$, then $\\log_2 y =$
<div class="q-mcopt">
A.\t$1$ or $2$.<br>
B.\t$2$ or $4$.<br>
C.\t$3$ or $7$.<br>
D.\t$6$ or $14$.
</div>`
        },
        hint: {
            tc: `設 $t=\\log_4 y$ 後解二次方程。`,
            en: `Let $t=\\log_4 y$ and solve the quadratic equation.`
        },
        solution: `D (40%)<p><iframe src="https://www.youtube.com/embed/6PUDqQdj89k?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q34",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: {
            tc: `<div style="color: red;">$\\text{12B00CD000000E}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.\t$299 \\times 4^{22} + 205 \\times 4^{14} + 14$。<br>
B.\t$300 \\times 4^{22} + 222 \\times 4^{14} + 15$。<br>
C.\t$299 \\times 4^{22} + 205 \\times 4^{16} + 14$。<br>
D.\t$300 \\times 4^{22} + 222 \\times 4^{16} + 15$。
</div>`,
            en: `<div style="color: red;">$\\text{12B00CD000000E}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.\t$299 \\times 4^{22} + 205 \\times 4^{14} + 14$.<br>
B.\t$300 \\times 4^{22} + 222 \\times 4^{14} + 15$.<br>
C.\t$299 \\times 4^{22} + 205 \\times 4^{16} + 14$.<br>
D.\t$300 \\times 4^{22} + 222 \\times 4^{16} + 15$.
</div>`
        },
        hint: {
            tc: `將十六進制分組轉成四進制或十進制。`,
            en: `Group hexadecimal digits to convert into base 4 or base 10.`
        },
        solution: `A (53%)<p><iframe src="https://www.youtube.com/embed/yFUIWMCaXHs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q35",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: {
            tc: `設 $z = 4 + 5i^{10} - ki^{15} + 6i^{21} + 2ki^{28}$，其中 $k$ 為一實數。 若 $z$ 的實部與虛部相等，則 $z$ 的實部為
<div class="q-mcopt">
A.\t$7$。<br>
B.\t$13$。<br>
C.\t$17$。<br>
D.\t$25$。
</div>`,
            en: `Let $z = 4 + 5i^{10} - ki^{15} + 6i^{21} + 2ki^{28}$, where $k$ is a real number. If the real part and the imaginary part of $z$ are equal, then the real part of $z$ is
<div class="q-mcopt">
A.\t$7$.<br>
B.\t$13$.<br>
C.\t$17$.<br>
D.\t$25$.
</div>`
        },
        hint: {
            tc: `利用 $i$ 的週期簡化各項。`,
            en: `Simplify terms using the periodicity of $i$.`
        },
        solution: `B (38%)<p><iframe src="https://www.youtube.com/embed/LPMSqv79AHQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q36",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: {
            tc: `考慮以下的不等式組：<br>
\t$\\begin{cases}
2x + y \\ge 8 \\\\[1.2ex]
2x + 3y \\ge 16 \\\\[1.2ex]
4x + 3y \\le 22
\\end{cases}$<br>
設 $R$ 為表示以上的不等式組的解之區域。 若 $(x, y)$ 為 $R$ 中的一點，則 $7x + 6y$ 的最小值為
<div class="q-mcopt">
A.\t$32$。<br>
B.\t$38$。<br>
C.\t$41$。<br>
D.\t$43$。
</div>`,
            en: `Consider the following system of inequalities:<br>
\t$\\begin{cases}
2x + y \\ge 8 \\\\[1.2ex]
2x + 3y \\ge 16 \\\\[1.2ex]
4x + 3y \\le 22
\\end{cases}$<br>
Let $R$ be the region which represents the solution of the above system of inequalities. If $(x, y)$ is a point lying in $R$, then the least value of $7x + 6y$ is
<div class="q-mcopt">
A.\t$32$.<br>
B.\t$38$.<br>
C.\t$41$.<br>
D.\t$43$.
</div>`
        },
        hint: {
            tc: `找出可行域頂點並代入目標函數。`,
            en: `Find the vertices of the feasible region and substitute into the objective function.`
        },
        solution: `B (46%)<p><iframe src="https://www.youtube.com/embed/ftIVSrNSlpo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q37",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: {
            tc: `設 $a_n$ 為一等比數列的第 $n$ 項。 已知  $a_1=8p^2$ 、 $a_2=1$  及  $a_3=27p$ ，其中 $p$ 為一實數。 求 $a_4$。
<div class="q-mcopt">
A.\t$\\dfrac{1}{6}$<br>
B.\t$\\dfrac{2}{9}$<br>
C.\t$\\dfrac{9}{2}$<br>
D.\t$\\dfrac{81}{4}$
</div>`,
            en: `Let $a_n$ be the $n\\text{th}$ term of a geometric sequence. It is given that $a_1=8p^2$, $a_2=1$ and $a_3=27p$, where $p$ is a real number. Find $a_4$.
<div class="q-mcopt">
A.\t$\\dfrac{1}{6}$<br>
B.\t$\\dfrac{2}{9}$<br>
C.\t$\\dfrac{9}{2}$<br>
D.\t$\\dfrac{81}{4}$
</div>`
        },
        hint: {
            tc: `由公比關係求 $p$ 再求 $a_4$。`,
            en: `Find $p$ using common ratio relations, then calculate $a_4$.`
        },
        solution: `D (44%)<p><iframe src="https://www.youtube.com/embed/FsVZdMknzUA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q38",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一圓。 $PA$ 及 $QB$ 分別為該圓在 $A$ 及 $B$ 的切線。 若 $\\angle ADC=79^\\circ$ 、 $\\angle CBQ=39^\\circ$ 及 $\\angle DAP=42^\\circ$，則 $\\angle BCD=$
<div class="q-mcopt"><img src="img/2022dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$76^\\circ$。<br>
B.\t$79^\\circ$。<br>
C.\t$81^\\circ$。<br>
D.\t$82^\\circ$。
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a circle. $PA$ and $QB$ are the tangents to the circle at $A$ and $B$ respectively. If $\\angle ADC=79^\\circ$, $\\angle CBQ=39^\\circ$ and $\\angle DAP=42^\\circ$, then $\\angle BCD=$
<div class="q-mcopt"><img src="img/2022dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$76^\\circ$.<br>
B.\t$79^\\circ$.<br>
C.\t$81^\\circ$.<br>
D.\t$82^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用切線與弦的夾角及圓內接四邊形性質。`,
            en: `Use angle in alternate segment and properties of cyclic quadrilaterals.`
        },
        solution: `D (48%)<p><iframe src="https://www.youtube.com/embed/jBk8BE8fuco?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q39",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: {
            tc: `當 $0^\\circ \\le x < 360^\\circ$ 時，方程 $\\sin^2 x = 6\\cos^2 x$ 有多少個根？
<div class="q-mcopt">
A.\t$2$<br>
B.\t$3$<br>
C.\t$4$<br>
D.\t$5$
</div>`,
            en: `For $0^\\circ \\le x < 360^\\circ$, how many roots does the equation $\\sin^2 x = 6\\cos^2 x$ have?
<div class="q-mcopt">
A.\t$2$<br>
B.\t$3$<br>
C.\t$4$<br>
D.\t$5$
</div>`
        },
        hint: {
            tc: `化成 $\\tan^2 x = 6$ 後考慮範圍。`,
            en: `Convert to $\\tan^2 x = 6$ and consider the domain.`
        },
        solution: `C (39%)<p><iframe src="https://www.youtube.com/embed/KPwlzfDyT_Y?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q40",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 3,
        content: {
            tc: `圖中，$ABCDEFGH$ 為一正方體。 設 $\\alpha$ 為 $\\Delta AFG$ 與 $\\Delta AFH$ 間的交角，而 $\\beta$ 為 $\\Delta AFH$ 與 $\\Delta FGH$ 間的交角。 下列何者正確？
<div class="q-mcopt"><img src="img/2022dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\alpha<60^\\circ<\\beta$<br>
B.\t$\\alpha<\\beta<60^\\circ$<br>
C.\t$60^\\circ<\\alpha<\\beta$<br>
D.\t$60^\\circ<\\beta<\\alpha$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCDEFGH$ is a cube. Let $\\alpha$ be the angle between $\\Delta AFG$ and $\\Delta AFH$ while $\\beta$ be the angle between $\\Delta AFH$ and $\\Delta FGH$. Which of the following is true?
<div class="q-mcopt"><img src="img/2022dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\alpha<60^\\circ<\\beta$<br>
B.\t$\\alpha<\\beta<60^\\circ$<br>
C.\t$60^\\circ<\\alpha<\\beta$<br>
D.\t$60^\\circ<\\beta<\\alpha$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `設邊長為 $1$，用餘弦定理求兩面角。`,
            en: `Assume side length $1$, use Cosine Formula to find the dihedral angles.`
        },
        solution: `A (29%)<p><iframe src="https://www.youtube.com/embed/8xi6rdC2fMQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q41",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Equations of Straight Lines", "Four Centres of a Triangle"],
        difficulty: 3,
        content: {
            tc: `設 $O$ 為原點。 點 $A$ 及點 $B$ 的坐標分別為 $(a,0)$ 及 $(0,b)$，其中 $a$ 及 $b$ 均為正數。 若 $\\Delta OAB$ 的外心在直線 $4x+16y=17a$ 上，則 $a:b=$
<div class="q-mcopt">
A.\t$8:15$。<br>
B.\t$15:8$。<br>
C.\t$16:47$。<br>
D.\t$47:16$。
</div>`,
            en: `Let $O$ be the origin. The coordinates of the points $A$ and $B$ are $(a,0)$ and $(0,b)$ respectively, where $a$ and $b$ are positive numbers. If the circumcentre of $\\Delta OAB$ lies on the straight line $4x+16y=17a$, then $a:b=$
<div class="q-mcopt">
A.\t$8:15$.<br>
B.\t$15:8$.<br>
C.\t$16:47$.<br>
D.\t$47:16$.
</div>`
        },
        hint: {
            tc: `外心是兩邊中垂線的交點。`,
            en: `The circumcentre is the intersection of perpendicular bisectors of the sides.`
        },
        solution: `A (29%)<p><iframe src="https://www.youtube.com/embed/ViUXt3wyigw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q42",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: {
            tc: `若七位密碼的首五個位及尾兩個位分別由 $1,3,5,7,9$ 的排列及 $2,8$ 的排列所組成，則可組成多少個不同的七位密碼？
<div class="q-mcopt">
A.\t$10$<br>
B.\t$240$<br>
C.\t$480$<br>
D.\t$5\\,040$
</div>`,
            en: `If the first five digits and the last two digits of a seven-digit password are formed by a permutation of $1,3,5,7,9$ and a permutation of $2,8$ respectively, how many different seven-digit passwords can be formed?
<div class="q-mcopt">
A.\t$10$<br>
B.\t$240$<br>
C.\t$480$<br>
D.\t$5\\,040$
</div>`
        },
        hint: {
            tc: `首五位排列數乘尾兩位排列數。`,
            en: `Multiply permutations of the first five digits by permutations of the last two digits.`
        },
        solution: `B (68%)<p><iframe src="https://www.youtube.com/embed/LRsJ9KbTpQc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q43",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 3,
        content: {
            tc: `一盒子內有 $2$ 個白球、$2$ 個黃球及 $3$ 個紅球。 某男生及某女生輪流從該盒子中隨機取一個球，且取球後須放回該盒子中，直至其中一人取出白球或黃球為止。 該男生首先取球。 求該女生取出白球的概率。
<div class="q-mcopt">
A.\t$\\dfrac{3}{10}$<br>
B.\t$\\dfrac{3}{20}$<br>
C.\t$\\dfrac{7}{20}$<br>
D.\t$\\dfrac{17}{20}$
</div>`,
            en: `A box contains $2$ white balls, $2$ yellow balls and $3$ red balls. A boy and a girl take turns to draw one ball randomly from the box with replacement until one of them draws a white ball or a yellow ball. The boy draws a ball first. Find the probability that the girl draws a white ball.
<div class="q-mcopt">
A.\t$\\dfrac{3}{10}$<br>
B.\t$\\dfrac{3}{20}$<br>
C.\t$\\dfrac{7}{20}$<br>
D.\t$\\dfrac{17}{20}$
</div>`
        },
        hint: {
            tc: `考慮女生在第 2、4、6… 次取到白球的情況。`,
            en: `Consider scenarios where the girl draws a white ball on the 2nd, 4th, 6th... turns.`
        },
        solution: `B (30%)<p><iframe src="https://www.youtube.com/embed/w3jFy6l0DmU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q44",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 2,
        content: {
            tc: `某測驗中，一班學生的測驗得分的中位數為 $30$ 分。 全部學生在該測驗均不及格，故此將每名學生的測驗得分調整，使每個得分均增加 $50\\%$ 然後額外加 $8$ 分。 設 $x$ 分為該班學生在得分調整後的測驗得分的中位數。 該測驗中，某學生在得分調整前的標準分為 $-2$。 將這學生在得分調整後的標準分記為 $z$。 求 $x$ 及 $z$。
<div class="q-mcopt">
A.\t$x=45$  及  $z=-2$<br>
B.\t$x=45$  及  $z=-1$<br>
C.\t$x=53$  及  $z=-2$<br>
D.\t$x=53$  及  $z=-1$
</div>`,
            en: `In a test, the median of the test scores of a class of students is $30$ marks. All the students fail in the test, so the test score of each student is adjusted such that each score is increased by $50\\%$ and then extra $8$ marks are added. Let $x$ marks be the median of the test scores of the class of students after the score adjustment. In the test, the standard score of a student before the score adjustment is $-2$. Denote the standard score of this student after the score adjustment by $z$. Find $x$ and $z$.
<div class="q-mcopt">
A.\t$x=45$ and $z=-2$<br>
B.\t$x=45$ and $z=-1$<br>
C.\t$x=53$ and $z=-2$<br>
D.\t$x=53$ and $z=-1$
</div>`
        },
        hint: {
            tc: `中位數線性變換，標準分在線性變換下保持不變。`,
            en: `The median changes linearly; standard score remains invariant under linear transformation.`
        },
        solution: `C (43%)<p><iframe src="https://www.youtube.com/embed/LOkaViM9gtM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2022-DSE-MATH-CP2-Q45",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: {
            tc: `已知 $d$ 為一實數。 設 $S_1$ 為一組數 $\\{d-6, d-2, d-1, d+3, d+5, d+7\\}$ 而 $S_2$ 為另一組數 $\\{d-7, d-5, d-3, d+1, d+2, d+6\\}$。 下列何者正確？
<div class="q-mcms">
I.\t$S_1$ 與 $S_2$ 的平均值相等。
II.\t$S_1$ 與 $S_2$ 的標準差相等。
III.\t$S_1$ 與 $S_2$ 的四分位數間距相等。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `It is given that $d$ is a real number. Let $S_1$ be a group of numbers $\\{d-6, d-2, d-1, d+3, d+5, d+7\\}$ and $S_2$ be another group of numbers $\\{d-7, d-5, d-3, d+1, d+2, d+6\\}$. Which of the following is/are true?
<div class="q-mcms">
I.\tThe means of $S_1$ and $S_2$ are equal.
II.\tThe standard deviations of $S_1$ and $S_2$ are equal.
III.\tThe inter-quartile ranges of $S_1$ and $S_2$ are equal.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `比較兩組數的平均值、離差及排序後的四分位數。`,
            en: `Compare the mean, deviations, and inter-quartile range of both sets.`
        },
        solution: `D (50%)<p><iframe src="https://www.youtube.com/embed/5-byq33VTYU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
);
