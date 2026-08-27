// 2021dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2021-DSE-MATH-CP2-Q01",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `$\\dfrac{(2^n)(8^{3n})}{64^n} =$
<div class="q-mcopt">
A.\t$4^n$。<br>
B.\t$4^{2n}$。<br>
C.\t$4^{-3n}$。<br>
D.\t$4^{-4n}$。
</div>`,
            en: `$\\dfrac{(2^n)(8^{3n})}{64^n} =$
<div class="q-mcopt">
A.\t$4^n$.<br>
B.\t$4^{2n}$.<br>
C.\t$4^{-3n}$.<br>
D.\t$4^{-4n}$.
</div>`
        },
        hint: {
            tc: `先化成相同底數再簡化指數。`,
            en: `Convert them to the same base, then simplify the exponent.`
        },
        solution: `B (73%)<p><iframe src="https://www.youtube.com/embed/MsjuSiGKxWc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q02",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: {
            tc: `若 $m(m-a)=a(1-m)$，則 $a=$
<div class="q-mcopt">
A.\t$m$。 <br>
B.\t$2m$。 <br>
C.\t$m^2$。 <br>
D.\t$\\dfrac{m^2+m}{2}$。 
</div>`,
            en: `If $m(m-a)=a(1-m)$, then $a=$
<div class="q-mcopt">
A.\t$m$.<br>
B.\t$2m$.<br>
C.\t$m^2$.<br>
D.\t$\\dfrac{m^2+m}{2}$.
</div>`
        },
        hint: {
            tc: `展開後整理含 $a$ 的項。`,
            en: `Expand the expression and group the terms containing $a$.`
        },
        solution: `C (87%)<p><iframe src="https://www.youtube.com/embed/FWacrJNiAzY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q03",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `$(u+v)(u-v)(u-1) =$
<div class="q-mcopt">
A.\t$u^3+u^2-uv^2+v^2$。 <br>
B.\t$u^3+u^2-uv^2-v^2$。 <br>
C.\t$u^3-u^2+uv^2+v^2$。 <br>
D.\t$u^3-u^2-uv^2+v^2$。 
</div>`,
            en: `$(u+v)(u-v)(u-1) =$
<div class="q-mcopt">
A.\t$u^3+u^2-uv^2+v^2$.<br>
B.\t$u^3+u^2-uv^2-v^2$.<br>
C.\t$u^3-u^2+uv^2+v^2$.<br>
D.\t$u^3-u^2-uv^2+v^2$.
</div>`
        },
        hint: {
            tc: `先用平方差再展開。`,
            en: `Use the difference of two squares first, then expand.`
        },
        solution: `D (82%)<p><iframe src="https://www.youtube.com/embed/TP-nJLrae_0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q04",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 1,
        content: {
            tc: `$\\dfrac{6}{n-6} - \\dfrac{7}{n-7} =$
<div class="q-mcopt">
A.\t$\\dfrac{n}{(n-6)(n-7)}$。<br>
B.\t$\\dfrac{n}{(n-6)(7-n)}$。<br>
C.\t$\\dfrac{n+84}{(n-6)(n-7)}$。<br>
D.\t$\\dfrac{n+84}{(n-6)(7-n)}$。
</div>`,
            en: `$\\dfrac{6}{n-6} - \\dfrac{7}{n-7} =$
<div class="q-mcopt">
A.\t$\\dfrac{n}{(n-6)(n-7)}$.<br>
B.\t$\\dfrac{n}{(n-6)(7-n)}$.<br>
C.\t$\\dfrac{n+84}{(n-6)(n-7)}$.<br>
D.\t$\\dfrac{n+84}{(n-6)(7-n)}$.
</div>`
        },
        hint: {
            tc: `通分後合併分子。`,
            en: `Find a common denominator and combine the numerators.`
        },
        solution: `B (76%)<p><iframe src="https://www.youtube.com/embed/62DvVymnNDs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q05",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: {
            tc: `若 $x=6.24$（準確至二位小數），求 $x$ 值的範圍。 
<div class="q-mcopt">
A.\t$6.23 < x \\le 6.25$<br>
B.\t$6.23 \\le x < 6.25$<br>
C.\t$6.235 < x \\le 6.245$<br>
D.\t$6.235 \\le x < 6.245$
</div>`,
            en: `If $x=6.24$ (correct to 2 decimal places), find the range of values of $x$.
<div class="q-mcopt">
A.\t$6.23 < x \\le 6.25$<br>
B.\t$6.23 \\le x < 6.25$<br>
C.\t$6.235 < x \\le 6.245$<br>
D.\t$6.235 \\le x < 6.245$
</div>`
        },
        hint: {
            tc: `準確至二位小數的範圍為中間值的一半單位。`,
            en: `The range for rounding to 2 decimal places uses half of the smallest unit.`
        },
        solution: `D (74%)<p><iframe src="https://www.youtube.com/embed/hT-Nj_QeG6U?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q06",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 2,
        content: {
            tc: `若 $a$、$b$ 及 $c$ 均為非零的常數使得 $a(x+3)+b(3x+1)=c(x+2)$，則 $a:b=$
<div class="q-mcopt">
A.\t$1:3$<br>
B.\t$1:5$<br>
C.\t$3:1$<br>
D.\t$5:1$
</div>`,
            en: `If $a$, $b$ and $c$ are non-zero constants such that $a(x+3)+b(3x+1)=c(x+2)$, then $a:b=$
<div class="q-mcopt">
A.\t$1:3$<br>
B.\t$1:5$<br>
C.\t$3:1$<br>
D.\t$5:1$
</div>`
        },
        hint: {
            tc: `比較兩邊 $x$ 及常數項係數。`,
            en: `Compare the coefficients of $x$ and the constant terms on both sides.`
        },
        solution: `D (49%)<p><iframe src="https://www.youtube.com/embed/BLgbMmLBGYs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q07",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 1,
        content: {
            tc: `設 $\\mathrm{f}(x)=(x+h)(x-3)+k$，其中 $h$ 及 $k$ 均為常數。 若 $\\mathrm{f}(0)=\\mathrm{f}(8)=1$，求 $k$。 
<div class="q-mcopt">
A.\t$-14$<br>
B.\t$-5$<br>
C.\t$20$<br>
D.\t$31$
</div>`,
            en: `Let $\\mathrm{f}(x)=(x+h)(x-3)+k$, where $h$ and $k$ are constants. If $\\mathrm{f}(0)=\\mathrm{f}(8)=1$, find $k$.
<div class="q-mcopt">
A.\t$-14$<br>
B.\t$-5$<br>
C.\t$20$<br>
D.\t$31$
</div>`
        },
        hint: {
            tc: `代入 $x=0$ 及 $x=8$ 後解聯立。`,
            en: `Substitute $x=0$ and $x=8$ to solve simultaneous equations.`
        },
        solution: `A (76%)<p><iframe src="https://www.youtube.com/embed/XT-sYDyS19M?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q08",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 3,
        content: {
            tc: `設 $\\mathrm{p}(x)$ 為一多項式。 當 $\\mathrm{p}(x)$ 除以 $x+1$ 時，餘數為 $-2$。 若 $\\mathrm{p}(x)$ 可被 $x-1$ 整除，求當 $\\mathrm{p}(x)$ 除以 $x^2-1$ 時的餘式。 
<div class="q-mcopt">
A.\t$x+1$<br>
B.\t$x-1$<br>
C.\t$-x+1$<br>
D.\t$-x-1$
</div>`,
            en: `Let $\\mathrm{p}(x)$ be a polynomial. When $\\mathrm{p}(x)$ is divided by $x+1$, the remainder is $-2$. If $\\mathrm{p}(x)$ is divisible by $x-1$, find the remainder when $\\mathrm{p}(x)$ is divided by $x^2-1$.
<div class="q-mcopt">
A.\t$x+1$<br>
B.\t$x-1$<br>
C.\t$-x+1$<br>
D.\t$-x-1$
</div>`
        },
        hint: {
            tc: `設餘式為 $ax+b$，用餘式定理求 $a$、$b$。`,
            en: `Let the remainder be $ax+b$, then use the Remainder Theorem to find $a$ and $b$.`
        },
        solution: `B (29%)<p><iframe src="https://www.youtube.com/embed/r3XCa7msdLY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q09",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: {
            tc: `在某校，$33\\%$ 學生超重。 已知該校中 $60\\%$ 學生為女生且 $45\\%$ 女生超重。 若該校中 $x\\%$ 男生超重，則 $x=$
<div class="q-mcopt">
A.\t$15$。 <br>
B.\t$18$。 <br>
C.\t$25$。 <br>
D.\t$55$。 
</div>`,
            en: `In a school, $33\\%$ of the students are overweight. It is given that $60\\%$ of the students in the school are girls and $45\\%$ of the girls are overweight. If $x\\%$ of the boys in the school are overweight, then $x=$
<div class="q-mcopt">
A.\t$15$.<br>
B.\t$18$.<br>
C.\t$25$.<br>
D.\t$55$.
</div>`
        },
        hint: {
            tc: `設總人數後列方程求解。`,
            en: `Assume a total number of students and set up an equation to solve.`
        },
        solution: `A (62%)<p><iframe src="https://www.youtube.com/embed/5iBW91fmMcY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q10",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: {
            tc: `$9x+8 \\le 4(x-3)$  或  $6-7x > 20$  的解為
<div class="q-mcopt">
A.\t$x \\le -4$。 <br>
B.\t$x \\ge -4$。 <br>
C.\t$x < -2$。 <br>
D.\t$x > -2$。 
</div>`,
            en: `The solution of $9x+8 \\le 4(x-3)$ or $6-7x > 20$ is
<div class="q-mcopt">
A.\t$x \\le -4$.<br>
B.\t$x \\ge -4$.<br>
C.\t$x < -2$.<br>
D.\t$x > -2$.
</div>`
        },
        hint: {
            tc: `分別解兩個不等式再取聯集。`,
            en: `Solve the two inequalities separately and find their union.`
        },
        solution: `C (69%)<p><iframe src="https://www.youtube.com/embed/EIKxJd70VIk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q11",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: {
            tc: `若 $\\alpha$ 及 $\\beta$ 均為非零的數使得 $\\dfrac{2\\alpha+3\\beta}{3\\alpha+2\\beta} = \\dfrac{7}{10}$，則 $\\dfrac{2\\alpha+\\beta}{\\alpha+2\\beta} =$
<div class="q-mcopt">
A.\t$1$。 <br>
B.\t$\\dfrac{3}{2}$。 <br>
C.\t$\\dfrac{11}{6}$。 <br>
D.\t$\\dfrac{13}{8}$。 
</div>`,
            en: `If $\\alpha$ and $\\beta$ are non-zero numbers such that $\\dfrac{2\\alpha+3\\beta}{3\\alpha+2\\beta} = \\dfrac{7}{10}$, then $\\dfrac{2\\alpha+\\beta}{\\alpha+2\\beta} =$
<div class="q-mcopt">
A.\t$1$.<br>
B.\t$\\dfrac{3}{2}$.<br>
C.\t$\\dfrac{11}{6}$.<br>
D.\t$\\dfrac{13}{8}$.
</div>`
        },
        hint: {
            tc: `由比例求 $\\alpha:\\beta$ 後代入。`,
            en: `Find the ratio $\\alpha:\\beta$ from the given equation, then substitute it into the expression.`
        },
        solution: `C (73%)<p><iframe src="https://www.youtube.com/embed/HAXXFtjF9kA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q12",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: {
            tc: `若 $w$ 隨 $x$ 的平方正變且隨 $y$ 的立方反變，則下列何者必為常數？
<div class="q-mcopt">
A.\t$\\dfrac{x}{w^2 y^6}$<br>
B.\t$\\dfrac{x^2}{wy^3}$<br>
C.\t$\\dfrac{w}{x^2 y^3}$<br>
D.\t$\\dfrac{w^2}{xy^2}$
</div>`,
            en: `If $w$ varies directly as the square of $x$ and inversely as the cube of $y$, which of the following must be constant?
<div class="q-mcopt">
A.\t$\\dfrac{x}{w^2 y^6}$<br>
B.\t$\\dfrac{x^2}{wy^3}$<br>
C.\t$\\dfrac{w}{x^2 y^3}$<br>
D.\t$\\dfrac{w^2}{xy^2}$
</div>`
        },
        hint: {
            tc: `由 $w = k\\dfrac{x^2}{y^3}$ 判斷。`,
            en: `Determine using the relation $w = k\\dfrac{x^2}{y^3}$.`
        },
        solution: `B (74%)<p><iframe src="https://www.youtube.com/embed/10RIulQz3qQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q13",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 1,
        content: {
            tc: `圖中，第 $1$ 個圖案包含 $3$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $(2n+3)$ 粒點子所組成。 求第 $8$ 個圖案的點子數目。<img src="img/2021dsep2q13.jpg" class="q-img" alt="題目附圖" style="max-width: 85%;"><div class="q-mcopt">
A.\t$63$<br>
B.\t$75$<br>
C.\t$80$<br>
D.\t$99$
</div>`,
            en: `In the figure, the 1st pattern consists of $3$ dots. For any positive integer $n$, the $(n+1)$th pattern is formed by adding $(2n+3)$ dots to the $n$th pattern. Find the number of dots in the 8th pattern.<img src="img/2021dsep2q13.jpg" class="q-img" alt="Figure" style="max-width: 85%;"><div class="q-mcopt">
A.\t$63$<br>
B.\t$75$<br>
C.\t$80$<br>
D.\t$99$
</div>`
        },
        hint: {
            tc: `寫出通項或累加計算。`,
            en: `Find the general term or sum up cumulatively.`
        },
        solution: `C (83%)<p><iframe src="https://www.youtube.com/embed/YRWLSW3CNCA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q14",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `設 $m$ 及 $n$ 均為實常數。 下列有關 $y=(m-x)^2+n$ 的圖像之敍述，何者必為正確？
<div class="q-mcms">
I.\t該圖像開口向上。
II.\t該圖像的 $y$ 截距為正值。
III.\t該圖像通過點 $(n,m)$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `Let $m$ and $n$ be real constants. Which of the following statements about the graph of $y=(m-x)^2+n$ must be true?
<div class="q-mcms">
I.\tThe graph opens upwards.
II.\tThe $y$-intercept of the graph is positive.
III.\tThe graph passes through the point $(n,m)$.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `觀察二次項係數及頂點。`,
            en: `Examine the coefficient of the quadratic term and the vertex.`
        },
        solution: `A (52%)<p><iframe src="https://www.youtube.com/embed/mzIONMPMuQk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q15",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `某實心直立角柱體的底為一正 $6$ 邊形，其邊長為 $8\\text{ cm}$。 若該角柱體的體積為 $288\\text{ cm}^3$，求該角柱體的總表面面積準確至最接近的 $\\text{cm}^2$。 
<div class="q-mcopt">
A.\t$166\\text{ cm}^2$<br>
B.\t$249\\text{ cm}^2$<br>
C.\t$416\\text{ cm}^2$<br>
D.\t$748\\text{ cm}^2$
</div>`,
            en: `The base of a solid right prism is a regular 6-sided polygon of side $8\\text{ cm}$. If the volume of the prism is $288\\text{ cm}^3$, find the total surface area of the prism correct to the nearest $\\text{cm}^2$.
<div class="q-mcopt">
A.\t$166\\text{ cm}^2$<br>
B.\t$249\\text{ cm}^2$<br>
C.\t$416\\text{ cm}^2$<br>
D.\t$748\\text{ cm}^2$
</div>`
        },
        hint: {
            tc: `先求高，再計算底面積及側面積。`,
            en: `Find the height first, then compute the base area and lateral area.`
        },
        solution: `C (43%)<p><iframe src="https://www.youtube.com/embed/_eSPZUWSPeU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q16",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `某兩實心半球體的總表面面積之和為 $351\\pi\\text{ cm}^2$。 若較小的半球體的半徑與較大的半球體的半徑之比為 $2:3$，則該兩半球體的體積之差為
<div class="q-mcopt">
A.\t$342\\pi\\text{ cm}^3$。 <br>
B.\t$630\\pi\\text{ cm}^3$。 <br>
C.\t$684\\pi\\text{ cm}^3$。 <br>
D.\t$1260\\pi\\text{ cm}^3$。 
</div>`,
            en: `The sum of the total surface areas of two solid hemispheres is $351\\pi\\text{ cm}^2$. If the ratio of the radius of the smaller hemisphere to the radius of the larger hemisphere is $2:3$, then the difference of the volumes of the two hemispheres is
<div class="q-mcopt">
A.\t$342\\pi\\text{ cm}^3$.<br>
B.\t$630\\pi\\text{ cm}^3$.<br>
C.\t$684\\pi\\text{ cm}^3$.<br>
D.\t$1260\\pi\\text{ cm}^3$.
</div>`
        },
        hint: {
            tc: `設半徑後由總表面積求實際半徑。`,
            en: `Let the radii be variables and find their actual values using the sum of total surface areas.`
        },
        solution: `A (34%)<p><iframe src="https://www.youtube.com/embed/0aHjNb1DAPw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q17",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `扇形 $OAB$ 的面積為 $\\pi\\text{ cm}^2$，其中 $O$ 為扇形 $OAB$ 的圓心。 若 $\\angle AOB = 90^\\circ$，則下列何者正確？
<div class="q-mcms">
I.\t扇形 $OAB$ 的半徑為 $2\\text{ cm}$。
II.\t扇形 $OAB$ 的周界為 $\\pi\\text{ cm}$。
III.\t通過 $O$、$A$ 及 $B$ 的圓的面積為 $2\\pi\\text{ cm}^2$。 
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `The area of the sector $OAB$ is $\\pi\\text{ cm}^2$, where $O$ is the centre of the sector $OAB$. If $\\angle AOB = 90^\\circ$, which of the following are true?
<div class="q-mcms">
I.\tThe radius of the sector $OAB$ is $2\\text{ cm}$.
II.\tThe perimeter of the sector $OAB$ is $\\pi\\text{ cm}$.
III.\tThe area of the circle passing through $O$, $A$ and $B$ is $2\\pi\\text{ cm}^2$.
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `由面積公式求半徑後驗證各選項。`,
            en: `Find the radius using the area formula, then check each statement.`
        },
        solution: `B (50%)<p><iframe src="https://www.youtube.com/embed/jCj8jzU8i7A?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q18",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 1,
        content: {
            tc: `圖中，$AB = BC$ 及 $AB // CD$。 設 $E$ 為 $AD$ 與 $BC$ 的交點。 若 $\\angle ADC = 28^\\circ$ 及 $\\angle AEB = 94^\\circ$，則 $\\angle CAD =$
<div class="q-mcopt"><img src="img/2021dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$30^\\circ$。 <br>
B.\t$33^\\circ$。 <br>
C.\t$36^\\circ$。 <br>
D.\t$39^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $AB = BC$ and $AB // CD$. Let $E$ be the point of intersection of $AD$ and $BC$. If $\\angle ADC = 28^\\circ$ and $\\angle AEB = 94^\\circ$, then $\\angle CAD =$
<div class="q-mcopt"><img src="img/2021dsep2q18.jpg" class="q-img" alt="Figure" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$30^\\circ$.<br>
B.\t$33^\\circ$.<br>
C.\t$36^\\circ$.<br>
D.\t$39^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用等腰三角形及平行線性質。`,
            en: `Use the properties of isosceles triangles and parallel lines.`
        },
        solution: `B (72%)<p><iframe src="https://www.youtube.com/embed/oFl6XjY23Jo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q19",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一長方形。 設 $E$ 為 $AC$ 上的一點使得 $BE$ 垂直於 $AC$。 延長 $BE$ 至點 $F$ 使得 $CF = AD$。 將 $BF$ 與 $CD$ 的交點記為 $G$。 下列何者正確？
<div class="q-mcms"><img src="img/2021dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$\\angle DAB = \\angle DGF$
II.\t$\\Delta BCE \\sim \\Delta CGE$
III.\t$\\Delta BCE \\cong \\Delta FCE$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a rectangle. Let $E$ be a point lying on $AC$ such that $BE$ is perpendicular to $AC$. $BE$ is produced to the point $F$ such that $CF = AD$. Denote the point of intersection of $BF$ and $CD$ by $G$. Which of the following are true?
<div class="q-mcms"><img src="img/2021dsep2q19.jpg" class="q-img" alt="Figure" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$\\angle DAB = \\angle DGF$
II.\t$\\Delta BCE \\sim \\Delta CGE$
III.\t$\\Delta BCE \\cong \\Delta FCE$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用直角及相似／全等條件。`,
            en: `Use right angles and conditions for similarity/congruence.`
        },
        solution: `D (35%)<p><iframe src="https://www.youtube.com/embed/KTAq_EdFANY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q20",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一正方形。 設 $E$ 及 $F$ 分別為 $AB$ 及 $BC$ 上的點使得 $AE = 3BE$ 且 $\\angle DEF = 90^\\circ$。 若 $\\Delta DEF$ 的面積為 $25\\text{ cm}^2$，則 $\\Delta CDF$ 的面積為
<div class="q-mcopt"><img src="img/2021dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$48\\text{ cm}^2$。 <br>
B.\t$50\\text{ cm}^2$。 <br>
C.\t$52\\text{ cm}^2$。 <br>
D.\t$75\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a square. Let $E$ and $F$ be points lying on $AB$ and $BC$ respectively such that $AE = 3BE$ and $\\angle DEF = 90^\\circ$. If the area of $\\Delta DEF$ is $25\\text{ cm}^2$, then the area of $\\Delta CDF$ is
<div class="q-mcopt"><img src="img/2021dsep2q20.jpg" class="q-img" alt="Figure" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$48\\text{ cm}^2$.<br>
B.\t$50\\text{ cm}^2$.<br>
C.\t$52\\text{ cm}^2$.<br>
D.\t$75\\text{ cm}^2$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `設邊長後用面積及畢氏定理。`,
            en: `Set variables for side lengths and use area formulas together with Pythagoras' theorem.`
        },
        solution: `C (34%)<p><iframe src="https://www.youtube.com/embed/ryDeDLwxBfY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q21",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `若 $ABCDEFGH$ 為一正 $8$ 邊形，則下列何者正確？
<div class="q-mcms">
I.\t$AG // BF$
II.\t$BD = EG$
III.\t$\\angle CAG = 2\\angle BDH$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `If $ABCDEFGH$ is a regular 8-sided polygon, which of the following are true?
<div class="q-mcms">
I.\t$AG // BF$
II.\t$BD = EG$
III.\t$\\angle CAG = 2\\angle BDH$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `利用正八邊形的對稱及內角性質。`,
            en: `Use the symmetry and interior angle properties of a regular octagon.`
        },
        solution: `D (40%)<p><iframe src="https://www.youtube.com/embed/b0iPv5zefAM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q22",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCDE$ 為一圓。 若 $AC = BD$、$\\angle AED = 96^\\circ$ 及 $\\angle BDC = 14^\\circ$，則 $\\angle CAD =$
<div class="q-mcopt"><img src="img/2021dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$41^\\circ$。 <br>
B.\t$44^\\circ$。 <br>
C.\t$49^\\circ$。 <br>
D.\t$55^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCDE$ is a circle. If $AC = BD$, $\\angle AED = 96^\\circ$ and $\\angle BDC = 14^\\circ$, then $\\angle CAD =$
<div class="q-mcopt"><img src="img/2021dsep2q22.jpg" class="q-img" alt="Figure" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$41^\\circ$.<br>
B.\t$44^\\circ$.<br>
C.\t$49^\\circ$.<br>
D.\t$55^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用圓周角及等弦對等角。`,
            en: `Use angles in the same segment and equal chords subtend equal angles.`
        },
        solution: `A (57%)<p><iframe src="https://www.youtube.com/embed/PuiOnEwBtls?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q23",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: {
            tc: `點 $P$ 的坐標為 $(7, -5)$。 $P$ 對 $y$ 軸作反射至點 $Q$，然後 $Q$ 繞原點順時針方向旋轉 $90^\\circ$ 至點 $R$。 求 $R$ 的 $x$ 坐標。 
<div class="q-mcopt">
A.\t$-7$<br>
B.\t$-5$<br>
C.\t$5$<br>
D.\t$7$
</div>`,
            en: `The coordinates of the point $P$ are $(7, -5)$. $P$ is reflected with respect to the $y$-axis to the point $Q$. $Q$ is then rotated clockwise about the origin through $90^\\circ$ to the point $R$. Find the $x$-coordinate of $R$.
<div class="q-mcopt">
A.\t$-7$<br>
B.\t$-5$<br>
C.\t$5$<br>
D.\t$7$
</div>`
        },
        hint: {
            tc: `先反射再旋轉。`,
            en: `Perform the reflection first, followed by the rotation.`
        },
        solution: `B (65%)<p><iframe src="https://www.youtube.com/embed/lHEruWnFz2k?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q24",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: {
            tc: `圖中，$\\dfrac{AB}{CD} =$
<div class="q-mcopt"><img src="img/2021dsep2q24.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\cos\\theta \\sin\\phi$<br>
B.\t$\\sin\\theta \\cos\\phi$<br>
C.\t$\\tan\\theta \\cos\\phi$<br>
D.\t$\\tan\\theta \\sin\\phi$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $\\dfrac{AB}{CD} =$
<div class="q-mcopt"><img src="img/2021dsep2q24.jpg" class="q-img" alt="Figure" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\cos\\theta \\sin\\phi$<br>
B.\t$\\sin\\theta \\cos\\phi$<br>
C.\t$\\tan\\theta \\cos\\phi$<br>
D.\t$\\tan\\theta \\sin\\phi$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `在直角三角形中表達各邊。`,
            en: `Express each side in terms of trigonometric ratios in the right-angled triangles.`
        },
        solution: `D (64%)<p><iframe src="https://www.youtube.com/embed/Gw4ma6kUDYQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q25",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci", "Equations of Straight Lines", "Equations of Circles"],
        difficulty: 2,
        content: {
            tc: `點 $M$ 及點 $N$ 的坐標分別為 $(5,7)$ 及 $(6,8)$。 設 $P$ 為直角坐標平面上的一動點使得 $PM = MN$。 求 $P$ 的軌跡的方程。 
<div class="q-mcopt">
A.\t$x-y+2=0$<br>
B.\t$x+y-13=0$<br>
C.\t$x^2+y^2-10x-14y+72=0$<br>
D.\t$x^2+y^2-12x-16y+98=0$
</div>`,
            en: `The coordinates of the points $M$ and $N$ are $(5,7)$ and $(6,8)$ respectively. Let $P$ be a moving point in the rectangular coordinate plane such that $PM = MN$. Find the equation of the locus of $P$.
<div class="q-mcopt">
A.\t$x-y+2=0$<br>
B.\t$x+y-13=0$<br>
C.\t$x^2+y^2-10x-14y+72=0$<br>
D.\t$x^2+y^2-12x-16y+98=0$
</div>`
        },
        hint: {
            tc: `$PM=MN$ 表示以 $M$ 為圓心、$MN$ 為半徑的圓。`,
            en: `$PM=MN$ represents a circle with centre $M$ and radius $MN$.`
        },
        solution: `C (35%)<p><iframe src="https://www.youtube.com/embed/3IdW3EyTy80?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q26",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `點 $A$、點 $B$ 及點 $C$ 的坐標分別為 $(3,3)$、$(5,8)$ 及 $(9,2)$。 設 $P$ 為一點使得 $AP$ 為 $\\Delta ABC$ 的中線。 求通過 $A$ 及 $P$ 的直線的方程。 
<div class="q-mcopt">
A.\t$x-2y+3=0$<br>
B.\t$2x-3y+1=0$<br>
C.\t$2x-3y+3=0$<br>
D.\t$3x+2y-15=0$
</div>`,
            en: `The coordinates of the points $A$, $B$ and $C$ are $(3,3)$, $(5,8)$ and $(9,2)$ respectively. Let $P$ be a point such that $AP$ is a median of $\\Delta ABC$. Find the equation of the straight line which passes through $A$ and $P$.
<div class="q-mcopt">
A.\t$x-2y+3=0$<br>
B.\t$2x-3y+1=0$<br>
C.\t$2x-3y+3=0$<br>
D.\t$3x+2y-15=0$
</div>`
        },
        hint: {
            tc: `先求 $BC$ 中點再求直線方程。`,
            en: `Find the mid-point of $BC$ first, then find the equation of the line.`
        },
        solution: `A (43%)<p><iframe src="https://www.youtube.com/embed/a5r7oqS0uRI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q27",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `直線 $L$ 的斜率為 $4$。 已知 $L$ 與圓 $x^2+y^2-18x-20y+96=0$ 相交於點 $P$ 及點 $Q$。 若 $PQ$ 的中點的坐標為 $(s,t)$，則下列何者必為正確？
<div class="q-mcopt">
A.\t$s-4t-49=0$<br>
B.\t$s-4t+31=0$<br>
C.\t$s+4t-49=0$<br>
D.\t$s+4t+31=0$
</div>`,
            en: `The slope of the straight line $L$ is $4$. It is given that $L$ and the circle $x^2+y^2-18x-20y+96=0$ intersect at the points $P$ and $Q$. If the coordinates of the mid-point of $PQ$ are $(s,t)$, which of the following must be true?
<div class="q-mcopt">
A.\t$s-4t-49=0$<br>
B.\t$s-4t+31=0$<br>
C.\t$s+4t-49=0$<br>
D.\t$s+4t+31=0$
</div>`
        },
        hint: {
            tc: `弦的中點在圓心與弦垂直的直線上。`,
            en: `The mid-point of a chord lies on the line passing through the centre perpendicular to the chord.`
        },
        solution: `C (35%)<p><iframe src="https://www.youtube.com/embed/xQ80Iu_qlEU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q28",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `下面的幹葉圖顯示一群工人的體重（以 kg 為單位）的分佈。
        <table class="q-table" style="border-collapse: collapse; table-layout: auto; width: auto; white-space: pre;" align="center">
    <colgroup>
      <col style="width: 7em;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;"><u>幹（十位）</u></td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;"><u>葉（個位）</u></td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3\t6\t7</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1\t2\t2\t2\t6\t8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">2\t3\t4\t5\t7\t7\t9\t9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">8</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3\t4\t5\t6\t6\t7\t8</td>
    </tr>
  </table>
若從該群中隨機選出一名工人，求所選出的工人的體重不少於該分佈的下四分位數的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{1}{4}$<br>
B.\t$\\dfrac{1}{5}$<br>
C.\t$\\dfrac{1}{6}$<br>
D.\t$\\dfrac{5}{6}$
</div>`,
            en: `The stem-and-leaf diagram below shows the distribution of the weights (in kg) of a group of workers.
        <table class="q-table" style="border-collapse: collapse; table-layout: auto; width: auto; white-space: pre;" align="center">
    <colgroup>
      <col style="width: 7em;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;"><u>Stem (tens)</u></td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;"><u>Leaf (units)</u></td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3\t6\t7</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1\t2\t2\t2\t6\t8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">2\t3\t4\t5\t7\t7\t9\t9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">8</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3\t4\t5\t6\t6\t7\t8</td>
    </tr>
  </table>
If a worker is randomly selected from the group, find the probability that the weight of the selected worker is not less than the lower quartile of the distribution.
<div class="q-mcopt">
A.\t$\\dfrac{1}{4}$<br>
B.\t$\\dfrac{1}{5}$<br>
C.\t$\\dfrac{1}{6}$<br>
D.\t$\\dfrac{5}{6}$
</div>`
        },
        hint: {
            tc: `先求下四分位數再計算概率。`,
            en: `Find the lower quartile first, then calculate the probability.`
        },
        solution: `D (60%)<p><iframe src="https://www.youtube.com/embed/3a3rJuDdxiY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q29",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 1,
        content: {
            tc: `下面的框線圖顯示一群研究員的年歲的分佈。 求該分佈的四分位數間距。<img src="img/2021dsep2q29zh.jpg" class="q-img" alt="題目附圖" style="max-width: 55%;"><div class="q-mcopt">
A.\t$5$<br>
B.\t$10$<br>
C.\t$20$<br>
D.\t$34$
</div>`,
            en: `The box-and-whisker diagram below shows the distribution of the ages of a group of researchers. Find the inter-quartile range of the distribution.<img src="img/2021dsep2q29en.jpg" class="q-img" alt="Figure" style="max-width: 55%;"><div class="q-mcopt">
A.\t$5$<br>
B.\t$10$<br>
C.\t$20$<br>
D.\t$34$
</div>`
        },
        hint: {
            tc: `從框線圖讀取 $Q_1$ 及 $Q_3$。`,
            en: `Read $Q_1$ and $Q_3$ from the box-and-whisker diagram.`
        },
        solution: `B (88%)<p><iframe src="https://www.youtube.com/embed/5klubaZaG50?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q30",
        year: 2021,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 1,
        content: {
            tc: `某 $70$ 個整數的平均值為 $32$。 若這 $70$ 個整數其中 $30$ 個的平均值為 $24$，則餘下 $40$ 個整數的平均值為
<div class="q-mcopt">
A.\t$38$。 <br>
B.\t$40$。 <br>
C.\t$43$。 <br>
D.\t$74$。 
</div>`,
            en: `The mean of $70$ integers is $32$. If the mean of $30$ of these $70$ integers is $24$, then the mean of the remaining $40$ integers is
<div class="q-mcopt">
A.\t$38$.<br>
B.\t$40$.<br>
C.\t$43$.<br>
D.\t$74$.
</div>`
        },
        hint: {
            tc: `用加權平均列方程。`,
            en: `Set up an equation using weighted mean.`
        },
        solution: `A (77%)<p><iframe src="https://www.youtube.com/embed/R4KuJj3wpGM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q31",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["H.C.F. and L.C.M."],
        difficulty: 2,
        content: {
            tc: `三個數式的 H.C.F. 及 L.C.M. 分別為 $x^2y^2z$ 及 $x^3y^4z^5$。 若第一個數式及第二個數式分別為 $x^3y^2z^2$ 及 $x^3y^3z^5$，則第三個數式為
<div class="q-mcopt">
A.\t$x^2y^4z$。 <br>
B.\t$x^2y^4z^2$。 <br>
C.\t$x^3y^2z$。 <br>
D.\t$x^3y^2z^2$。 
</div>`,
            en: `The H.C.F. and the L.C.M. of three expressions are $x^2y^2z$ and $x^3y^4z^5$ respectively. If the first expression and the second expression are $x^3y^2z^2$ and $x^3y^3z^5$ respectively, then the third expression is
<div class="q-mcopt">
A.\t$x^2y^4z$.<br>
B.\t$x^2y^4z^2$.<br>
C.\t$x^3y^2z$.<br>
D.\t$x^3y^2z^2$.
</div>`
        },
        hint: {
            tc: `由 H.C.F. 及 L.C.M. 求第三個數式。`,
            en: `Determine the third expression from the given H.C.F. and L.C.M.`
        },
        solution: `A (65%)<p><iframe src="https://www.youtube.com/embed/01Y2C00Bi2U?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q32",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: {
            tc: `<div style="color: red;">$14 \\times 16^{15} + 17 \\times 16^{14} + 16^2 + 17 =$</div><div class="q-mcopt" style="color: red;">
A.\t$\\mathrm{E}10100000000021_{16}$。 <br>
B.\t$\\mathrm{F}10000000000111_{16}$。 <br>
C.\t$\\mathrm{E}110000000000021_{16}$。 <br>
D.\t$\\mathrm{F}100000000000111_{16}$。 
</div>`,
            en: `<div style="color: red;">$14 \\times 16^{15} + 17 \\times 16^{14} + 16^2 + 17 =$</div><div class="q-mcopt" style="color: red;">
A.\t$\\mathrm{E}10100000000021_{16}$.<br>
B.\t$\\mathrm{F}10000000000111_{16}$.<br>
C.\t$\\mathrm{E}110000000000021_{16}$.<br>
D.\t$\\mathrm{F}100000000000111_{16}$.
</div>`
        },
        hint: {
            tc: `直接轉成十六進制表示。`,
            en: `Convert directly into hexadecimal representation.`
        },
        solution: `D (41%)<p><iframe src="https://www.youtube.com/embed/QVHiLERcmeA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q33",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: {
            tc: `設 $a$、$b$ 及 $c$ 均為正常數。 在同一直角坐標系上，$y=a+\\log_b x$ 的圖像及 $y=\\log_c x$ 的圖像分別與 $x$ 軸相交於點 $S$ 及點 $T$。 將原點記為 $O$。 求 $OT:OS$。 
<div class="q-mcopt">
A.\t$1:b^a$<br>
B.\t$1:c^a$<br>
C.\t$b^a:1$<br>
D.\t$c^a:1$
</div>`,
            en: `Let $a$, $b$ and $c$ be positive constants. On the same rectangular coordinate system, the graph of $y=a+\\log_b x$ and the graph of $y=\\log_c x$ cut the $x$-axis at the points $S$ and $T$ respectively. Denote the origin by $O$. Find $OT:OS$.
<div class="q-mcopt">
A.\t$1:b^a$<br>
B.\t$1:c^a$<br>
C.\t$b^a:1$<br>
D.\t$c^a:1$
</div>`
        },
        hint: {
            tc: `求兩圖像的 $x$ 截距。`,
            en: `Find the $x$-intercepts of both graphs.`
        },
        solution: `C (30%)<p><iframe src="https://www.youtube.com/embed/YeixSZSoaK0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q34",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
            tc: `圖中的圖像顯示 $\\log_5 x$ 與 $\\log_5 y$ 之間的線性關係。 下列何者必為正確？
<div class="q-mcopt"><img src="img/2021dsep2q34.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$x^2 = 625$<br>
B.\t$x^2 y = 625$<br>
C.\t$\\dfrac{y^2}{x} = 625$<br>
D.\t$\\dfrac{y}{x^2} = 625$
</div><div style="clear: both;"></div>`,
            en: `The graph in the figure shows the linear relation between $\\log_5 x$ and $\\log_5 y$. Which of the following must be true?
<div class="q-mcopt"><img src="img/2021dsep2q34.jpg" class="q-img" alt="Figure" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$x^2 = 625$<br>
B.\t$x^2 y = 625$<br>
C.\t$\\dfrac{y^2}{x} = 625$<br>
D.\t$\\dfrac{y}{x^2} = 625$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由圖像讀取斜率及截距後換底。`,
            en: `Read the slope and intercepts from the graph, then change base.`
        },
        solution: `C (46%)<p><iframe src="https://www.youtube.com/embed/dXHGUDIZQUQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q35",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: {
            tc: `設 $\\alpha$ 為一實數。 定義 $u = w + \\dfrac{1}{w}$ 及 $v = w - \\dfrac{1}{w}$，其中 $w = \\dfrac{\\alpha + i}{\\alpha - i}$。 下列何者必為正確？
<div class="q-mcms">
I.\t$u$ 為一實數。
II.\t$v$ 的實部等於 $0$。
III.\t$w$ 的虛部等於 $2w$ 的虛部。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `Let $\\alpha$ be a real number. Define $u = w + \\dfrac{1}{w}$ and $v = w - \\dfrac{1}{w}$, where $w = \\dfrac{\\alpha + i}{\\alpha - i}$. Which of the following must be true?
<div class="q-mcms">
I.\t$u$ is a real number.
II.\tThe real part of $v$ is equal to $0$.
III.\tThe imaginary part of $w$ is equal to the imaginary part of $2w$.
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `先化簡 $w$ 再計算 $u$、$v$。`,
            en: `Simplify $w$ first, then calculate $u$ and $v$.`
        },
        solution: `A (33%)<p><iframe src="https://www.youtube.com/embed/yyIZnSFWNhs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q36",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: {
            tc: `若 $p, q, r, s$ 為一等比數列，則下列何者必為正確？
<div class="q-mcms">
I.\t$ps = qr$
II.\t$p+s=q+r$
III.\t$p \\lt q \\lt r \\lt s$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `If $p, q, r, s$ is a geometric sequence, which of the following must be true?
<div class="q-mcms">
I.\t$ps = qr$
II.\t$p+s=q+r$
III.\t$p \\lt q \\lt r \\lt s$
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `由公比性質判斷。`,
            en: `Determine using the properties of common ratio.`
        },
        solution: `A (54%)<p><iframe src="https://www.youtube.com/embed/ZUXjz83OYBM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q37",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 3,
        content: {
            tc: `設 $k$ 為一常數。 求 $k$ 值的範圍使得對任意實數 $x$，$x^2+kx+k+8 \\ge 0$。 
<div class="q-mcopt">
A.\t$-8 \\le k \\le 4$<br>
B.\t$-4 \\le k \\le 8$<br>
C.\t$k \\le -8$  或  $k \\ge 4$<br>
D.\t$k \\le -4$  或  $k \\ge 8$
</div>`,
            en: `Let $k$ be a constant. Find the range of values of $k$ such that $x^2+kx+k+8 \\ge 0$ for any real number $x$.
<div class="q-mcopt">
A.\t$-8 \\le k \\le 4$<br>
B.\t$-4 \\le k \\le 8$<br>
C.\t$k \\le -8$ or $k \\ge 4$<br>
D.\t$k \\le -4$ or $k \\ge 8$
</div>`
        },
        hint: {
            tc: `判別式 $\\le 0$ 且二次項係數為正。`,
            en: `Discriminant $\\le 0$ with a positive quadratic coefficient.`
        },
        solution: `B (27%)<p><iframe src="https://www.youtube.com/embed/SEfLVE1vN-U?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q38",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: {
            tc: `圖中所示為長方形 $ABCD$，其中 $AB=960\\text{ cm}$ 及 $BC=597\\text{ cm}$。 設 $E$、$F$ 及 $G$ 分別為 $AB$、$BC$ 及 $CD$ 上的點使得 $AE=638\\text{ cm}$、$BF=280\\text{ cm}$ 及 $CG=480\\text{ cm}$。 將 $AF$ 與 $EG$ 的交點記為 $H$。 求 $DH$ 準確至最接近的 cm。 
<div class="q-mcopt"><img src="img/2021dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$728\\text{ cm}$<br>
B.\t$729\\text{ cm}$<br>
C.\t$741\\text{ cm}$<br>
D.\t$742\\text{ cm}$
</div><div style="clear: both;"></div>`,
            en: `The figure shows the rectangle $ABCD$, where $AB=960\\text{ cm}$ and $BC=597\\text{ cm}$. Let $E$, $F$ and $G$ be points lying on $AB$, $BC$ and $CD$ respectively such that $AE=638\\text{ cm}$, $BF=280\\text{ cm}$ and $CG=480\\text{ cm}$. Denote the point of intersection of $AF$ and $EG$ by $H$. Find $DH$ correct to the nearest cm.
<div class="q-mcopt"><img src="img/2021dsep2q38.jpg" class="q-img" alt="Figure" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$728\\text{ cm}$<br>
B.\t$729\\text{ cm}$<br>
C.\t$741\\text{ cm}$<br>
D.\t$742\\text{ cm}$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `用坐標幾何求交點後計算距離。`,
            en: `Use coordinate geometry to find the intersection point, then calculate the distance.`
        },
        solution: `B (34%)<p><iframe src="https://www.youtube.com/embed/MZrwuRArpYc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q39",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$AC$ 為圓 $ABCD$ 的一直徑。 $EF$ 為該圓在 $D$ 的切線使得 $AB // EC$。 若 $\\angle CDF=49^\\circ$ 及 $\\angle CED=31^\\circ$，則 $\\angle ACB=$
<div class="q-mcopt"><img src="img/2021dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$49^\\circ$。 <br>
B.\t$57^\\circ$。 <br>
C.\t$59^\\circ$。 <br>
D.\t$67^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $AC$ is a diameter of the circle $ABCD$. $EF$ is the tangent to the circle at $D$ such that $AB // EC$. If $\\angle CDF=49^\\circ$ and $\\angle CED=31^\\circ$, then $\\angle ACB=$
<div class="q-mcopt"><img src="img/2021dsep2q39.jpg" class="q-img" alt="Figure" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$49^\\circ$.<br>
B.\t$57^\\circ$.<br>
C.\t$59^\\circ$.<br>
D.\t$67^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用切線與弦的夾角及直徑性質。`,
            en: `Use the angle in the alternate segment theorem and properties of a diameter.`
        },
        solution: `D (37%)<p><iframe src="https://www.youtube.com/embed/GsN8yVYK87k?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q40",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: {
            tc: `若直線 $4x=3y$ 與圓 $x^2+y^2-4x-22y+75=0$ 相交於點 $M$ 及點 $N$，則以 $MN$ 為一直徑的圓的方程是
<div class="q-mcopt">
A.\t$(x-6)^2+(y-8)^2=25$。 <br>
B.\t$(x-8)^2+(y-6)^2=25$。 <br>
C.\t$(x-6)^2+(y-8)^2=100$。 <br>
D.\t$(x-8)^2+(y-6)^2=100$。 
</div>`,
            en: `If the straight line $4x=3y$ and the circle $x^2+y^2-4x-22y+75=0$ intersect at the points $M$ and $N$, then the equation of the circle with $MN$ as a diameter is
<div class="q-mcopt">
A.\t$(x-6)^2+(y-8)^2=25$.<br>
B.\t$(x-8)^2+(y-6)^2=25$.<br>
C.\t$(x-6)^2+(y-8)^2=100$.<br>
D.\t$(x-8)^2+(y-6)^2=100$.
</div>`
        },
        hint: {
            tc: `先求 $M$、$N$ 坐標或中點及半徑。`,
            en: `Find the coordinates of $M$ and $N$, or determine their mid-point and radius.`
        },
        solution: `A (31%)<p><iframe src="https://www.youtube.com/embed/hP_i0Xu4lBw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q41",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Four Centres of a Triangle"],
        difficulty: 2,
        content: {
            tc: `設 $O$ 為原點。 點 $P$ 的坐標為 $(26,-18)$。 若 $\\Delta OPQ$ 的垂心的坐標為 $(21,-3)$，則 $Q$ 的 $y$ 坐標為
<div class="q-mcopt">
A.\t$-30$。 <br>
B.\t$-10$。 <br>
C.\t$10$。 <br>
D.\t$30$。 
</div>`,
            en: `Let $O$ be the origin. The coordinates of the point $P$ are $(26,-18)$. If the coordinates of the orthocentre of $\\Delta OPQ$ are $(21,-3)$, then the $y$-coordinate of $Q$ is
<div class="q-mcopt">
A.\t$-30$.<br>
B.\t$-10$.<br>
C.\t$10$.<br>
D.\t$30$.
</div>`
        },
        hint: {
            tc: `利用垂心性質及垂直條件。`,
            en: `Use the properties of the orthocentre and perpendicularity conditions.`
        },
        solution: `C (32%)<p><iframe src="https://www.youtube.com/embed/BuXR048gif8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q42",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: {
            tc: `某委員會由 $20$ 名學生及 $10$ 名教師組成。 若從該委員會中選出 $7$ 名委員組成一個有至少 $4$ 名學生的合唱團，則可組成多少個不同的合唱團？
<div class="q-mcopt">
A.\t$581\\,400$<br>
B.\t$873\\,120$<br>
C.\t$1\\,162\\,800$<br>
D.\t$1\\,744\\,200$
</div>`,
            en: `A committee is formed by $20$ students and $10$ teachers. If $7$ members are selected from the committee to form a choir consisting of at least $4$ students, how many different choirs can be formed?
<div class="q-mcopt">
A.\t$581\\,400$<br>
B.\t$873\\,120$<br>
C.\t$1\\,162\\,800$<br>
D.\t$1\\,744\\,200$
</div>`
        },
        hint: {
            tc: `分情況計算學生數目 $\\ge 4$ 的組合。`,
            en: `Calculate cases by considering combinations with number of students $\\ge 4$.`
        },
        solution: `D (62%)<p><iframe src="https://www.youtube.com/embed/L4jIbPD1UwU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q43",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `一袋子內有 $7$ 個紅球、$3$ 個黃球及 $5$ 個黑球。 某小童從該袋子中隨機重複取球，每次只取出一個且不放回該袋子中，直至取出黑球為止。 求該小童需要取球至多三次的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{4}{7}$<br>
B.\t$\\dfrac{5}{9}$<br>
C.\t$\\dfrac{19}{27}$<br>
D.\t$\\dfrac{67}{91}$
</div>`,
            en: `A bag contains $7$ red balls, $3$ yellow balls and $5$ black balls. A child repeats drawing one ball at a time randomly from the bag without replacement until a black ball is drawn. Find the probability that the child needs at most three draws.
<div class="q-mcopt">
A.\t$\\dfrac{4}{7}$<br>
B.\t$\\dfrac{5}{9}$<br>
C.\t$\\dfrac{19}{27}$<br>
D.\t$\\dfrac{67}{91}$
</div>`
        },
        hint: {
            tc: `計算第 1、2 或 3 次取出黑球的概率。`,
            en: `Calculate the probability of drawing a black ball on the 1st, 2nd, or 3rd draw.`
        },
        solution: `D (43%)<p><iframe src="https://www.youtube.com/embed/8ELt5YEgBaY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q44",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 1,
        content: {
            tc: `在一考試，考試得分的平均值為 $45$ 分。 某男生在該考試得 $25$ 分且他的標準分為 $-5$。 若某女生在該考試的標準分為 $7$，則她的考試得分為
<div class="q-mcopt">
A.\t$4$ 分。 <br>
B.\t$53$ 分。 <br>
C.\t$73$ 分。 <br>
D.\t$80$ 分。 
</div>`,
            en: `In an examination, the mean of the examination scores is $45$ marks. A boy gets $25$ marks in the examination and his standard score is $-5$. If the standard score of a girl in the examination is $7$, then her examination score is
<div class="q-mcopt">
A.\t$4$ marks.<br>
B.\t$53$ marks.<br>
C.\t$73$ marks.<br>
D.\t$80$ marks.
</div>`
        },
        hint: {
            tc: `先由男生數據求標準差，再求女生得分。`,
            en: `Find the standard deviation using the boy's data first, then find the girl's score.`
        },
        solution: `C (76%)<p><iframe src="https://www.youtube.com/embed/KIY5yUyk2GU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2021-DSE-MATH-CP2-Q45",
        year: 2021,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: {
            tc: `已知 $\\mathrm{T}(n)$ 為一等差數列的第 $n$ 項。 設 $x_1$、$y_1$ 及 $z_1$ 分別為 $\\{\\mathrm{T}(1), \\mathrm{T}(2), \\mathrm{T}(3), \\dots, \\mathrm{T}(49)\\}$ 這組數的中位數、分佈域及方差，而 $x_2$、$y_2$ 及 $z_2$ 分別為 $\\{\\mathrm{T}(51), \\mathrm{T}(52), \\mathrm{T}(53), \\dots, \\mathrm{T}(99)\\}$ 這組數的中位數、分佈域及方差。 下列何者必為正確？
<div class="q-mcms">
I.\t$x_1 < x_2$
II.\t$y_1 = y_2$
III.\t$z_1 > z_2$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `It is given that $\\mathrm{T}(n)$ is the $n$th term of an arithmetic sequence. Let $x_1$, $y_1$ and $z_1$ be the median, the range and the variance of the group of numbers $\\{\\mathrm{T}(1), \\mathrm{T}(2), \\mathrm{T}(3), \\dots, \\mathrm{T}(49)\\}$ respectively while $x_2$, $y_2$ and $z_2$ be the median, the range and the variance of the group of numbers $\\{\\mathrm{T}(51), \\mathrm{T}(52), \\mathrm{T}(53), \\dots, \\mathrm{T}(99)\\}$ respectively. Which of the following must be true?
<div class="q-mcms">
I.\t$x_1 < x_2$
II.\t$y_1 = y_2$
III.\t$z_1 > z_2$
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `等差數列的中位數、分佈域及方差性質。`,
            en: `Properties of median, range and variance of an arithmetic sequence.`
        },
        solution: `B (40%)<p><iframe src="https://www.youtube.com/embed/sLprGff8m8o?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
);
