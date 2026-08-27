// 2017dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2017-DSE-MATH-CP2-Q01",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `$3m^2 - 5mn + 2n^2 + m - n =$
<div class="q-mcopt">
A.\t$(m-n)(3m-2n+1)$。<br>
B.\t$(m-n)(3m+2n+1)$。<br>
C.\t$(m+n)(3m-2n-1)$。<br>
D.\t$(m+n)(3m+2n-1)$。
</div>`,
            en: `$3m^2 - 5mn + 2n^2 + m - n =$
<div class="q-mcopt">
A.\t$(m-n)(3m-2n+1)$.<br>
B.\t$(m-n)(3m+2n+1)$.<br>
C.\t$(m+n)(3m-2n-1)$.<br>
D.\t$(m+n)(3m+2n-1)$.
</div>`
        },
        hint: {
            tc: `先因式分解首三項。`,
            en: `Factorize the first three terms first.`
        },
        solution: `A (89%)<p><iframe src="https://www.youtube.com/embed/m54oHm6JjxA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q02",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `$\\left(\\dfrac{1}{9^{555}}\\right)^{344} =$
<div class="q-mcopt">
A.\t$0$。 <br>
B.\t$\\dfrac{1}{3^{111}}$。 <br>
C.\t$\\dfrac{1}{3^{222}}$。 <br>
D.\t$\\dfrac{1}{3^{666}}$。 
</div>`,
            en: `$\\left(\\dfrac{1}{9^{555}}\\right)^{344} =$
<div class="q-mcopt">
A.\t$0$. <br>
B.\t$\\dfrac{1}{3^{111}}$. <br>
C.\t$\\dfrac{1}{3^{222}}$. <br>
D.\t$\\dfrac{1}{3^{666}}$. 
</div>`
        },
        hint: {
            tc: `先化成相同底數再簡化指數。 `,
            en: `Convert to the same base first and then simplify the index.`
        },
        solution: `D (72%)<p><iframe src="https://www.youtube.com/embed/GCK5kooimcU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q03",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: {
            tc: `若 $\\dfrac{a+4b}{2a} = 2 + \\dfrac{b}{a}$，則 $a =$
<div class="q-mcopt">
A.\t$\\dfrac{2b}{3}$。 <br>
B.\t$\\dfrac{3b}{2}$。 <br>
C.\t$\\dfrac{5b}{6}$。 <br>
D.\t$\\dfrac{6b}{5}$。 
</div>`,
            en: `If $\\dfrac{a+4b}{2a} = 2 + \\dfrac{b}{a}$, then $a =$
<div class="q-mcopt">
A.\t$\\dfrac{2b}{3}$. <br>
B.\t$\\dfrac{3b}{2}$. <br>
C.\t$\\dfrac{5b}{6}$. <br>
D.\t$\\dfrac{6b}{5}$. 
</div>`
        },
        hint: {
            tc: `通分後整理含 $a$ 的項。 `,
            en: `Combine fractions and collect terms containing $a$.`
        },
        solution: `A (73%)<p><iframe src="https://www.youtube.com/embed/b3ZZOl3w244?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q04",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: {
            tc: `$\\dfrac{1}{\\pi^4} =$
<div class="q-mcopt">
A.\t$0.0102$（準確至三位有效數字）。 <br>
B.\t$0.01025$（準確至四位有效數字）。 <br>
C.\t$0.01026$（準確至五位小數）。 <br>
D.\t$0.010266$（準確至六位小數）。 
</div>`,
            en: `$\\dfrac{1}{\\pi^4} =$
<div class="q-mcopt">
A.\t$0.0102$ (correct to 3 significant figures). <br>
B.\t$0.01025$ (correct to 4 significant figures). <br>
C.\t$0.01026$ (correct to 5 decimal places). <br>
D.\t$0.010266$ (correct to 6 decimal places). 
</div>`
        },
        hint: {
            tc: `計算數值後判斷準確度。 `,
            en: `Calculate the value and check the accuracy.`
        },
        solution: `D (91%)<p><iframe src="https://www.youtube.com/embed/_u9e33SHSLc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q05",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: {
            tc: `$6-x<2x-3$  或  $7-3x>1$  的解為
<div class="q-mcopt">
A.\t$x \\lt 2$。 <br>
B.\t$x \\gt 3$。 <br>
C.\t$2 \\lt x \\lt 3$。 <br>
D.\t$x \\lt 2$  或  $x \\gt 3$。 
</div>`,
            en: `The solution of $6-x<2x-3$ or $7-3x>1$ is
<div class="q-mcopt">
A.\t$x \\lt 2$. <br>
B.\t$x \\gt 3$. <br>
C.\t$2 \\lt x \\lt 3$. <br>
D.\t$x \\lt 2$ or $x \\gt 3$. 
</div>`
        },
        hint: {
            tc: `分別解兩個不等式再取聯集。 `,
            en: `Solve both inequalities separately and find their union.`
        },
        solution: `D (87%)<p><iframe src="https://www.youtube.com/embed/GRVVUDWJIok?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q06",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 1,
        content: {
            tc: `設 $k$ 為一常數。 若 $\\mathrm{f}(x)=2x^2-5x+k$，則 $\\mathrm{f}(2)-\\mathrm{f}(-2) =$
<div class="q-mcopt">
A.\t$-20$。 <br>
B.\t$0$。 <br>
C.\t$16$。 <br>
D.\t$2k$。 
</div>`,
            en: `Let $k$ be a constant. If $\\mathrm{f}(x)=2x^2-5x+k$, then $\\mathrm{f}(2)-\\mathrm{f}(-2) =$
<div class="q-mcopt">
A.\t$-20$. <br>
B.\t$0$. <br>
C.\t$16$. <br>
D.\t$2k$. 
</div>`
        },
        hint: {
            tc: `直接代入並簡化。 `,
            en: `Substitute directly and simplify.`
        },
        solution: `A (73%)<p><iframe src="https://www.youtube.com/embed/bCD7r3TMsV4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q07",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: {
            tc: `設 $\\mathrm{p}(x)=2x^2-11x+c$，其中 $c$ 為一常數。 若 $\\mathrm{p}(x)$ 可被 $x-7$ 整除，求當 $\\mathrm{p}(x)$ 除以 $2x+1$ 時的餘數。 
<div class="q-mcopt">
A.\t$-26$<br>
B.\t$-15$<br>
C.\t$15$<br>
D.\t$26$
</div>`,
            en: `Let $\\mathrm{p}(x)=2x^2-11x+c$, where $c$ is a constant. If $\\mathrm{p}(x)$ is divisible by $x-7$, find the remainder when $\\mathrm{p}(x)$ is divided by $2x+1$.
<div class="q-mcopt">
A.\t$-26$<br>
B.\t$-15$<br>
C.\t$15$<br>
D.\t$26$
</div>`
        },
        hint: {
            tc: `用因式定理求 $c$，再用餘式定理。 `,
            en: `Use the factor theorem to find $c$, then apply the remainder theorem.`
        },
        solution: `B (76%)<p><iframe src="https://www.youtube.com/embed/PM5LGl5EkE0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q08",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 2,
        content: {
            tc: `若 $m$ 及 $n$ 均為常數使得 $4x^2 + m(x+1) + 28 \\equiv mx(x+3) + n(x-4)$，則 $n =$
<div class="q-mcopt">
A.\t$-8$。 <br>
B.\t$-7$。 <br>
C.\t$4$。 <br>
D.\t$16$。 
</div>`,
            en: `If $m$ and $n$ are constants such that $4x^2 + m(x+1) + 28 \\equiv mx(x+3) + n(x-4)$, then $n =$
<div class="q-mcopt">
A.\t$-8$. <br>
B.\t$-7$. <br>
C.\t$4$. <br>
D.\t$16$. 
</div>`
        },
        hint: {
            tc: `展開兩邊並比較係數。 `,
            en: `Expand both sides and compare coefficients.`
        },
        solution: `A (62%)<p><iframe src="https://www.youtube.com/embed/yU0i1lNR7l0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q09",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `圖中所示為 $y = (px + 5)^2 + q$ 的圖像，其中 $p$ 及 $q$ 均為常數。 下列何者正確？
<div class="q-mcopt"><img src="img/2017dsep2q09.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$p < 0$  及  $q < 0$<br>
B.\t$p < 0$  及  $q > 0$<br>
C.\t$p > 0$  及  $q < 0$<br>
D.\t$p > 0$  及  $q > 0$
</div><div style="clear: both;"></div>`,
            en: `The figure shows the graph of $y = (px+5)^2 + q$, where $p$ and $q$ are constants. Which of the following is true?
<div class="q-mcopt"><img src="img/2017dsep2q09.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$p < 0$ and $q < 0$<br>
B.\t$p < 0$ and $q > 0$<br>
C.\t$p > 0$ and $q < 0$<br>
D.\t$p > 0$ and $q > 0$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `觀察開口方向及頂點位置。 `,
            en: `Observe the direction of opening and the position of the vertex.`
        },
        solution: `C (44%)<p><iframe src="https://www.youtube.com/embed/CocFo8Mfflg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q10",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: {
            tc: `存款 $\\$2\\,000$，年利率 $5\\%$，年期 $4$ 年，複利計算，每半年一結。 求利息準確至最接近的元。 
<div class="q-mcopt">
A.\t$\\$400$<br>
B.\t$\\$431$<br>
C.\t$\\$437$<br>
D.\t$\\$440$
</div>`,
            en: `A sum of $\\$2\\,000$ is deposited at an interest rate of $5\\%$ per annum for $4$ years, compounded half-yearly. Find the interest correct to the nearest dollar.
<div class="q-mcopt">
A.\t$\\$400$<br>
B.\t$\\$431$<br>
C.\t$\\$437$<br>
D.\t$\\$440$
</div>`
        },
        hint: {
            tc: `半年利率為 $2.5\\%$，共 $8$ 期。 `,
            en: `Half-yearly rate is $2.5\\%$, with $8$ periods in total.`
        },
        solution: `C (76%)<p><iframe src="https://www.youtube.com/embed/KDAFF0JB40Q?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q11",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions", "Mensuration"],
        difficulty: 2,
        content: {
            tc: `某地圖的比例尺為 $1:20\\,000$。 若某動物園在該地圖上的面積為 $4\\text{ cm}^2$，則該動物園的實際面積為
<div class="q-mcopt">
A.\t$8 \\times 10^4\\text{ m}^2$。 <br>
B.\t$1.6 \\times 10^5\\text{ m}^2$。 <br>
C.\t$3.2 \\times 10^5\\text{ m}^2$。 <br>
D.\t$1 \\times 10^6\\text{ m}^2$。 
</div>`,
            en: `The scale of a map is $1:20\\,000$. If the area of a zoo on the map is $4\\text{ cm}^2$, then the actual area of the zoo is
<div class="q-mcopt">
A.\t$8 \\times 10^4\\text{ m}^2$. <br>
B.\t$1.6 \\times 10^5\\text{ m}^2$. <br>
C.\t$3.2 \\times 10^5\\text{ m}^2$. <br>
D.\t$1 \\times 10^6\\text{ m}^2$. 
</div>`
        },
        hint: {
            tc: `面積比為長度比的平方。 `,
            en: `The area ratio is the square of the linear scale ratio.`
        },
        solution: `B (56%)<p><iframe src="https://www.youtube.com/embed/XKMoqI_fhyI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q12",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: {
            tc: `已知 $y$ 為兩部分之和，一部分為常數，而另一部分隨 $x^2$ 正變。 當 $x=1$ 時，$y=7$，且當 $x=2$ 時，$y=13$。 若 $x=3$，則 $y=$
<div class="q-mcopt">
A.\t$19$。<br>
B.\t$20$。<br>
C.\t$23$。<br>
D.\t$47$。
</div>`,
            en: `It is given that $y$ is the sum of two parts, one part is a constant and the other part varies as $x^2$. When $x=1$, $y=7$ and when $x=2$, $y=13$. If $x=3$, then $y=$
<div class="q-mcopt">
A.\t$19$.<br>
B.\t$20$.<br>
C.\t$23$.<br>
D.\t$47$.
</div>`
        },
        hint: {
            tc: `設 $y = k x^2 + c$ 後求常數。 `,
            en: `Set $y = k x^2 + c$ and solve for constants.`
        },
        solution: `C (84%)<p><iframe src="https://www.youtube.com/embed/-p4leK14uRM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q13",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 1,
        content: {
            tc: `圖中，第 $1$ 個圖案包含 $1$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $(2n+2)$ 粒點子所組成。 求第 $7$ 個圖案的點子數目。 
<img src="img/2017dsep2q13.jpg" class="q-img" alt="題目附圖" style="max-width: 85%;"><div class="q-mcopt">
A.\t$41$<br>
B.\t$55$<br>
C.\t$71$<br>
D.\t$161$
</div>`,
            en: `In the figure, the 1st pattern consists of $1$ dot. For any positive integer $n$, the $(n+1)$th pattern is formed by adding $(2n+2)$ dots to the $n$th pattern. Find the number of dots in the 7th pattern.
<img src="img/2017dsep2q13.jpg" class="q-img" alt="題目附圖" style="max-width: 85%;"><div class="q-mcopt">
A.\t$41$<br>
B.\t$55$<br>
C.\t$71$<br>
D.\t$161$
</div>`
        },
        hint: {
            tc: `寫出通項或累加計算。 `,
            en: `Write down the general term or calculate by repeated addition.`
        },
        solution: `B (86%)<p><iframe src="https://www.youtube.com/embed/CKkbsTHRiTs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q14",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)", "Mensuration"],
        difficulty: 1,
        content: {
            tc: `圖中，$D$ 為 $AC$ 上的一點使得 $BD$ 垂直於 $AC$。 已知 $AC=14\\text{ cm}$ 及 $BD=12\\text{ cm}$。 若 $\\Delta ABD$ 的面積較 $\\Delta BCD$ 的面積大 $24\\text{ cm}^2$，則 $\\Delta ABC$ 的周界為
<div class="q-mcopt"><img src="img/2017dsep2q14.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$30\\text{ cm}$。 <br>
B.\t$42\\text{ cm}$。 <br>
C.\t$54\\text{ cm}$。 <br>
D.\t$84\\text{ cm}$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $D$ is a point lying on $AC$ such that $BD$ is perpendicular to $AC$. It is given that $AC=14\\text{ cm}$ and $BD=12\\text{ cm}$. If the area of $\\Delta ABD$ is greater than the area of $\\Delta BCD$ by $24\\text{ cm}^2$, then the perimeter of $\\Delta ABC$ is
<div class="q-mcopt"><img src="img/2017dsep2q14.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$30\\text{ cm}$. <br>
B.\t$42\\text{ cm}$. <br>
C.\t$54\\text{ cm}$. <br>
D.\t$84\\text{ cm}$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由面積差求 $AD$、$DC$，再用畢氏定理。 `,
            en: `Find $AD$ and $DC$ from the difference in area, then apply Pythagoras' Theorem.`
        },
        solution: `B (71%)<p><iframe src="https://www.youtube.com/embed/Hf0MGuVEjO8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q15",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `一直立圓錐體的底半徑為一直立圓柱體的底半徑的 $2$ 倍，而該圓柱體的高為該圓錐體的高的 $3$ 倍。 若該圓錐體的體積為 $36\\pi\\text{ cm}^3$，則該圓柱體的體積為
<div class="q-mcopt">
A.\t$27\\pi\\text{ cm}^3$。 <br>
B.\t$48\\pi\\text{ cm}^3$。 <br>
C.\t$81\\pi\\text{ cm}^3$。 <br>
D.\t$144\\pi\\text{ cm}^3$。 
</div>`,
            en: `The base radius of a right circular cone is $2$ times the base radius of a right circular cylinder while the height of the circular cylinder is $3$ times the height of the circular cone. If the volume of the circular cone is $36\\pi\\text{ cm}^3$, then the volume of the circular cylinder is
<div class="q-mcopt">
A.\t$27\\pi\\text{ cm}^3$. <br>
B.\t$48\\pi\\text{ cm}^3$. <br>
C.\t$81\\pi\\text{ cm}^3$. <br>
D.\t$144\\pi\\text{ cm}^3$. 
</div>`
        },
        hint: {
            tc: `設半徑及高後代入體積公式。 `,
            en: `Express radius and height using variables and substitute into volume formulas.`
        },
        solution: `C (52%)<p><iframe src="https://www.youtube.com/embed/ecrLf86A_3c?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q16",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 及 $BEDF$ 均為平行四邊形。 $E$ 為 $BC$ 上的一點使得 $BE:EC = 2:3$。 $AC$ 分別與 $BF$ 及 $DE$ 相交於 $G$ 及 $H$。 若 $\\Delta ABG$ 的面積為 $135\\text{ cm}^2$，則四邊形 $DFGH$ 的面積為
<div class="q-mcopt"><img src="img/2017dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$60\\text{ cm}^2$。 <br>
B.\t$81\\text{ cm}^2$。 <br>
C.\t$90\\text{ cm}^2$。 <br>
D.\t$144\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ and $BEDF$ are parallelograms. $E$ is a point lying on $BC$ such that $BE:EC = 2:3$. $AC$ cuts $BF$ and $DE$ at $G$ and $H$ respectively. If the area of $\\Delta ABG$ is $135\\text{ cm}^2$, then the area of the quadrilateral $DFGH$ is
<div class="q-mcopt"><img src="img/2017dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$60\\text{ cm}^2$. <br>
B.\t$81\\text{ cm}^2$. <br>
C.\t$90\\text{ cm}^2$. <br>
D.\t$144\\text{ cm}^2$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用面積比與底的比例關係。 `,
            en: `Use ratios of areas and base lengths of similar/shared-height triangles.`
        },
        solution: `D (32%)<p><iframe src="https://www.youtube.com/embed/U_VO4TOgoVg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q17",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABC$ 為一等邊三角形，其邊長為 $16\\text{ cm}$。 $D$ 及 $E$ 分別為 $AB$ 及 $BC$ 上的點使得 $AD = 4\\text{ cm}$ 及 $\\angle CDE = 60^\\circ$。 求 $CE$。 
<div class="q-mcopt"><img src="img/2017dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$9\\text{ cm}$<br>
B.\t$10\\text{ cm}$<br>
C.\t$12\\text{ cm}$<br>
D.\t$13\\text{ cm}$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABC$ is an equilateral triangle of side $16\\text{ cm}$. $D$ and $E$ are points lying on $AB$ and $BC$ respectively such that $AD = 4\\text{ cm}$ and $\\angle CDE = 60^\\circ$. Find $CE$.
<div class="q-mcopt"><img src="img/2017dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$9\\text{ cm}$<br>
B.\t$10\\text{ cm}$<br>
C.\t$12\\text{ cm}$<br>
D.\t$13\\text{ cm}$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用等邊三角形及等角性質。 `,
            en: `Use properties of equilateral triangles and equal angles.`
        },
        solution: `D (36%)<p><iframe src="https://www.youtube.com/embed/7SQOBC7S--8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q18",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$AB = BC$ 及 $D$ 為 $AE$ 上的一點使得 $AC = AD$。 若 $AE//BC$，則 $\\angle ABC =$
<div class="q-mcopt"><img src="img/2017dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$44^\\circ$。<br>
B.\t$56^\\circ$。<br>
C.\t$62^\\circ$。<br>
D.\t$68^\\circ$。
</div><div style="clear: both;"></div>`,
            en: `In the figure, $AB = BC$ and $D$ is a point lying on $AE$ such that $AC = AD$. If $AE//BC$, then $\\angle ABC =$
<div class="q-mcopt"><img src="img/2017dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$44^\\circ$.<br>
B.\t$56^\\circ$.<br>
C.\t$62^\\circ$.<br>
D.\t$68^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用等腰三角形及平行線性質。 `,
            en: `Use properties of isosceles triangles and parallel lines.`
        },
        solution: `A (45%)<p><iframe src="https://www.youtube.com/embed/_ORK7_QHUx4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q19",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Pythagoras Theorem"],
        difficulty: 2,
        content: {
            tc: `圖中，連接 $A$ 與 $H$ 的線段的長度為
<div class="q-mcopt"><img src="img/2017dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$6$。<br>
B.\t$8$。<br>
C.\t$9$。<br>
D.\t$10$。
</div><div style="clear: both;"></div>`,
            en: `In the figure, the length of the line segment joining $A$ and $H$ is
<div class="q-mcopt"><img src="img/2017dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$6$.<br>
B.\t$8$.<br>
C.\t$9$.<br>
D.\t$10$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `用坐標距離公式計算。 `,
            en: `Calculate using coordinate distance formula or Pythagoras' theorem.`
        },
        solution: `D (68%)<p><iframe src="https://www.youtube.com/embed/wTKZnJLOk_E?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q20",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)", "Geometry (Triangles)"],
        difficulty: 3,
        content: {
            tc: `$ABCD$ 為一平行四邊形。 設 $E$ 為 $AD$ 的中點。 若 $\\angle ABE = \\angle CBD = \\angle DBE$，則下列何者正確？
<div class="q-mcms">
I.\t$AB = BD$
II.\t$\\angle ABC = 135^\\circ$
III.\t$\\Delta ABE \\cong \\Delta DBE$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `$ABCD$ is a parallelogram. Let $E$ be the mid-point of $AD$. If $\\angle ABE = \\angle CBD = \\angle DBE$, which of the following are true?
<div class="q-mcms">
I.\t$AB = BD$
II.\t$\\angle ABC = 135^\\circ$
III.\t$\\Delta ABE \\cong \\Delta DBE$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `利用等角及中點性質。 `,
            en: `Use properties of equal angles and the mid-point.`
        },
        solution: `D (15%)<p><iframe src="https://www.youtube.com/embed/WCvz1IyPGeQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q21",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$AD$ 為圓 $ABCDE$ 的一直徑。 若 $BC = CD$ 及 $\\angle ABC = 110^\\circ$，則 $\\angle BED =$
<div class="q-mcopt"><img src="img/2017dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$20^\\circ$。 <br>
B.\t$35^\\circ$。 <br>
C.\t$40^\\circ$。 <br>
D.\t$55^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $AD$ is a diameter of the circle $ABCDE$. If $BC = CD$ and $\\angle ABC = 110^\\circ$, then $\\angle BED =$
<div class="q-mcopt"><img src="img/2017dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$20^\\circ$. <br>
B.\t$35^\\circ$. <br>
C.\t$40^\\circ$. <br>
D.\t$55^\\circ$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用直徑及等弦對等角。 `,
            en: `Use diameter properties and equal chords subtending equal angles.`
        },
        solution: `C (59%)<p><iframe src="https://www.youtube.com/embed/tIUlnjfANgU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q22",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一長方形。 若 $E$ 為 $CD$ 上的一點使得 $\\angle CBE = 40^\\circ$，求 $\\angle AED$ 準確至最接近的度。 
<div class="q-mcopt"><img src="img/2017dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$33^\\circ$<br>
B.\t$43^\\circ$<br>
C.\t$47^\\circ$<br>
D.\t$57^\\circ$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a rectangle. If $E$ is a point lying on $CD$ such that $\\angle CBE = 40^\\circ$, find $\\angle AED$ correct to the nearest degree.
<div class="q-mcopt"><img src="img/2017dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$33^\\circ$<br>
B.\t$43^\\circ$<br>
C.\t$47^\\circ$<br>
D.\t$57^\\circ$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `在直角三角形中用三角函數。 `,
            en: `Use trigonometric ratios in right-angled triangles.`
        },
        solution: `D (58%)<p><iframe src="https://www.youtube.com/embed/x06c3M9qXO0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q23",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `圖中，直線 $L_1$ 及直線 $L_2$ 的方程分別為 $x+my=n$ 及 $x+py=q$。 下列何者正確？
<div class="q-mcms"><img src="img/2017dsep2q23.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$m \\lt p$
II.\t$n \\gt q$
III.\t$n+m \\lt p+q$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
            en: `In the figure, the equations of the straight lines $L_1$ and $L_2$ are $x+my=n$ and $x+py=q$ respectively. Which of the following are true?
<div class="q-mcms"><img src="img/2017dsep2q23.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$m \\lt p$
II.\t$n \\gt q$
III.\t$n+m \\lt p+q$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由圖像判斷斜率及截距。 `,
            en: `Determine slopes and intercepts from the figure.`
        },
        solution: `A (30%)<p><iframe src="https://www.youtube.com/embed/KZMk4W9Vj54?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q24",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `直線 $L$ 垂直於直線 $9x-5y+45=0$。 若 $L$ 的 $x$ 截距為 $-3$，則 $L$ 的方程為
<div class="q-mcopt">
A.\t$5x+9y+15=0$。<br>
B.\t$5x+9y+27=0$。<br>
C.\t$9x-5y+15=0$。<br>
D.\t$9x-5y+27=0$。
</div>`,
            en: `The straight line $L$ is perpendicular to the straight line $9x-5y+45=0$. If the $x$-intercept of $L$ is $-3$, then the equation of $L$ is
<div class="q-mcopt">
A.\t$5x+9y+15=0$.<br>
B.\t$5x+9y+27=0$.<br>
C.\t$9x-5y+15=0$.<br>
D.\t$9x-5y+27=0$.
</div>`
        },
        hint: {
            tc: `兩直線垂直時斜率乘積為 $-1$。 `,
            en: `The product of slopes of perpendicular lines is $-1$.`
        },
        solution: `A (59%)<p><iframe src="https://www.youtube.com/embed/3yStLDAs-8I?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q25",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: {
            tc: `<div style="color: red;">點 $P$、點 $Q$ 及點 $R$ 的極坐標分別為 $(3,160^\\circ)$、$(4,280^\\circ)$ 及 $(6,340^\\circ)$。 由 $Q$ 至 $PR$ 的垂直距離為</div><div class="q-mcopt" style="color: red;">
A.\t$2$。<br>
B.\t$3$。<br>
C.\t$2\\sqrt{3}$。<br>
D.\t$3\\sqrt{3}$。
</div>`,
            en: `<div style="color: red;">The polar coordinates of the points $P$, $Q$ and $R$ are $(3,160^\\circ)$, $(4,280^\\circ)$ and $(6,340^\\circ)$ respectively. The perpendicular distance from $Q$ to $PR$ is</div><div class="q-mcopt" style="color: red;">
A.\t$2$.<br>
B.\t$3$.<br>
C.\t$2\\sqrt{3}$.<br>
D.\t$3\\sqrt{3}$.
</div>`
        },
        hint: {
            tc: `轉直角坐標後用點到直線距離公式。 `,
            en: `Convert to rectangular coordinates or use geometry on polar plane.`
        },
        solution: `C (57%)<p><iframe src="https://www.youtube.com/embed/fQMBfg4swto?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q26",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: {
            tc: `圓 $C_1$ 及圓 $C_2$ 的方程分別為 $x^2+y^2+8x-4y-5=0$ 及 $2x^2+2y^2+8x-4y-5=0$。 設 $G_1$ 及 $G_2$ 分別為 $C_1$ 及 $C_2$ 的圓心。 將原點記為 $O$。 下列何者正確？
<div class="q-mcms">
I.\t$G_1$ 、 $G_2$ 與 $O$ 共線。
II.\t$C_1$ 與 $C_2$ 的半徑相等。
III.\t$O$ 與 $G_1$ 及 $G_2$ 等距。 
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `The equations of the circles $C_1$ and $C_2$ are $x^2+y^2+8x-4y-5=0$ and $2x^2+2y^2+8x-4y-5=0$ respectively. Let $G_1$ and $G_2$ be the centres of $C_1$ and $C_2$ respectively. Denote the origin by $O$. Which of the following is/are true?
<div class="q-mcms">
I.\t$G_1$, $G_2$ and $O$ are collinear.
II.\tThe radii of $C_1$ and $C_2$ are equal.
III.\t$O$ is equidistant from $G_1$ and $G_2$. 
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `先求兩圓圓心及半徑。 `,
            en: `Find the centres and radii of both circles first.`
        },
        solution: `A (53%)<p><iframe src="https://www.youtube.com/embed/C4RVHQfc8dw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q27",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci", "Equations of Straight Lines", "Equations of Circles"],
        difficulty: 2,
        content: {
            tc: `已知 $A$ 及 $B$ 為圓 $x^2+y^2-6x-4y-87=0$ 上的兩相異點。 設 $P$ 為直角坐標平面上的一動點使得 $AP=BP$。 $P$ 的軌跡的方程為 $x+2y+k=0$，其中 $k$ 為一常數。 求 $k$。 
<div class="q-mcopt">
A.\t$-8$<br>
B.\t$-7$<br>
C.\t$7$<br>
D.\t$8$
</div>`,
            en: `It is given that $A$ and $B$ are two distinct points lying on the circle $x^2+y^2-6x-4y-87=0$. Let $P$ be a moving point in the rectangular coordinate plane such that $AP = BP$. The equation of the locus of $P$ is $x+2y+k=0$, where $k$ is a constant. Find $k$.
<div class="q-mcopt">
A.\t$-8$<br>
B.\t$-7$<br>
C.\t$7$<br>
D.\t$8$
</div>`
        },
        hint: {
            tc: `$AP=BP$ 表示 $AB$ 的垂直平分線。 `,
            en: `$AP=BP$ represents the perpendicular bisector of $AB$.`
        },
        solution: `B (38%)<p><iframe src="https://www.youtube.com/embed/P2GBbm0feKg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q28",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability", "Statistical Graphs"],
        difficulty: 1,
        content: {
            tc: `下面的棒形圖顯示某群小童在一遊戲中所獲代幣的數目的分佈。 若從該群中隨機選出一名小童，求所選出的小童在該遊戲中獲得少於 $5$ 個代幣的概率。 
<div class="q-mcopt"><img src="img/2017dsep2q28zh.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{2}{3}$<br>
B.\t$\\dfrac{2}{5}$<br>
C.\t$\\dfrac{5}{12}$<br>
D.\t$\\dfrac{7}{25}$
</div><div style="clear: both;"></div>`,
            en: `The bar chart below shows the distribution of the numbers of tokens got by a group of children in a game. If a child is randomly selected from the group, find the probability that the selected child gets fewer than $5$ tokens in the game.
<div class="q-mcopt"><img src="img/2017dsep2q28en.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{2}{3}$<br>
B.\t$\\dfrac{2}{5}$<br>
C.\t$\\dfrac{5}{12}$<br>
D.\t$\\dfrac{7}{25}$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由棒形圖讀取人數後計算概率。 `,
            en: `Read the counts from the bar chart and calculate the probability.`
        },
        solution: `C (84%)<p><iframe src="https://www.youtube.com/embed/eqKY-oKfbdo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q29",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 1,
        content: {
            tc: `下面的框線圖顯示一班學生在某星期的上網時數的分佈。 求該分佈的下四分位數。
        <img src="img/2017dsep2q29zh.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-mcopt">
A.\t$5$<br>
B.\t$15$<br>
C.\t$25$<br>
D.\t$40$
</div>`,
            en: `The box-and-whisker diagram below shows the distribution of the numbers of online hours spent by a class of students in a certain week. Find the lower quartile of the distribution.
        <img src="img/2017dsep2q29en.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-mcopt">
A.\t$5$<br>
B.\t$15$<br>
C.\t$25$<br>
D.\t$40$
</div>`
        },
        hint: {
            tc: `從框線圖直接讀取 $Q_1$。 `,
            en: `Read $Q_1$ directly from the box-and-whisker diagram.`
        },
        solution: `B (76%)<p><iframe src="https://www.youtube.com/embed/FVQFK1gvcfM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q30",
        year: 2017,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 2,
        content: {
            tc: `考慮以下正整數：<div style="text-align: center;">2 3 4 6 79 10 $m$ $n$</div>設 $a$、$b$ 及 $c$ 分別為以上正整數的眾數、中位數及分佈域。 若以上正整數的平均值為 $5$，則下列何者必為正確？
<div class="q-mcms">
I.\t$a=2$
II.\t$b=4$
III.\t$c=8$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
            en: `Consider the following positive integers:
<div style="text-align: center;">2 3 4 6 7 910 $m$ $n$</div>Let $a$, $b$ and $c$ be the mode, the median and the range of the above positive integers respectively. If the mean of the above positive integers is $5$, which of the following must be true?
<div class="q-mcms">
I.\t$a=2$
II.\t$b=4$
III.\t$c=8$
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
            tc: `由平均值求 $m+n$，再判斷中位數。 `,
            en: `Find $m+n$ using the mean, then deduce the median.`
        },
        solution: `B (51%)<p><iframe src="https://www.youtube.com/embed/zlA3N0TJnfg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q31",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `<img src="img/2017dsep2q31.jpg" class="q-img" alt="題目附圖" style="max-width: 33%;"><br>上圖所示為 $y=\\mathrm{f}(x)$ 的圖像。 若 $\\mathrm{g}(x)=\\mathrm{f}\\left(\\dfrac{x}{2}\\right)$，則下列何者可表示 $y=\\mathrm{g}(x)$ 的圖像？
<div class="q-mcopt" style="vertical-align: top;">
<img src="img/2017dsep2q31A.jpg" class="q-img" alt="題目附圖" style="display: inline-block; max-width: 35%;">\t\t\t<img src="img/2017dsep2q31B.jpg" class="q-img" alt="題目附圖" style="display: inline-block; max-width: 35%;"><br>
<img src="img/2017dsep2q31C.jpg" class="q-img" alt="題目附圖" style="display: inline-block; max-width: 35%;">\t\t\t<img src="img/2017dsep2q31D.jpg" class="q-img" alt="題目附圖" style="display: inline-block; max-width: 35%;">
</div>`,
            en: `<img src="img/2017dsep2q31.jpg" class="q-img" alt="題目附圖" style="max-width: 33%;"><br>The figure above shows the graph of $y=\\mathrm{f}(x)$. If $\\mathrm{g}(x)=\\mathrm{f}\\left(\\dfrac{x}{2}\\right)$, which of the following may represent the graph of $y=\\mathrm{g}(x)$?
<div class="q-mcopt" style="vertical-align: top;">
<img src="img/2017dsep2q31A.jpg" class="q-img" alt="題目附圖" style="display: inline-block; max-width: 35%;">\t\t\t<img src="img/2017dsep2q31B.jpg" class="q-img" alt="題目附圖" style="display: inline-block; max-width: 35%;"><br>
<img src="img/2017dsep2q31C.jpg" class="q-img" alt="題目附圖" style="display: inline-block; max-width: 35%;">\t\t\t<img src="img/2017dsep2q31D.jpg" class="q-img" alt="題目附圖" style="display: inline-block; max-width: 35%;">
</div>`
        },
        hint: {
            tc: `沿 $x$ 方向伸展 2 倍。 `,
            en: `Stretch horizontally along the $x$-axis by a factor of 2.`
        },
        solution: `D (41%)<p><iframe src="https://www.youtube.com/embed/-Za8ZfuM1LM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q32",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: {
            tc: `<div style="color: red;">$8^3 + 8^{19} =$</div><div class="q-mcopt" style="color: red;">
A.\t$100000000000010_{16}$<br>
B.\t$200000000000020_{16}$<br>
C.\t$100000000000100_{16}$<br>
D.\t$200000000000200_{16}$
</div>`,
            en: `<div style="color: red;">$8^3 + 8^{19} =$</div><div class="q-mcopt" style="color: red;">
A.\t$100000000000010_{16}$<br>
B.\t$200000000000020_{16}$<br>
C.\t$100000000000100_{16}$<br>
D.\t$200000000000200_{16}$
</div>`
        },
        hint: {
            tc: `轉成十六進制表示。 `,
            en: `Convert into hexadecimal representation.`
        },
        solution: `D (50%)<p><iframe src="https://www.youtube.com/embed/BL3UStZU-sY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q33",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `圖中的圖像顯示 $x$ 與 $\\sqrt{y}$ 之間的線性關係。 下列何者必為正確？
<div class="q-mcopt"><img src="img/2017dsep2q33.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 35%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$y = x^2 - 4x + 8$<br>
B.\t$y = x^2 + 4x + 8$<br>
C.\t$y = 4x^2 - 32x + 64$<br>
D.\t$y = 4x^2 + 32x + 64$
</div>`,
            en: `The graph in the figure shows the linear relation between $x$ and $\\sqrt{y}$. Which of the following must be true?
<div class="q-mcopt"><img src="img/2017dsep2q33.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 35%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$y = x^2 - 4x + 8$<br>
B.\t$y = x^2 + 4x + 8$<br>
C.\t$y = 4x^2 - 32x + 64$<br>
D.\t$y = 4x^2 + 32x + 64$
</div>`
        },
        hint: {
            tc: `由圖像讀取斜率及截距後平方。 `,
            en: `Find the slope and intercept from the graph and square both sides.`
        },
        solution: `C (53%)<p><iframe src="https://www.youtube.com/embed/6Yce8ZjS6q4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q34",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
            tc: `若 $\\begin{cases} \\log_9 y = x - 3 \\\\[1.2ex] 2(\\log_9 y)^2 = 4 - x \\end{cases}$，則 $y=$
<div class="q-mcopt">
A.\t$-1$  或  $\\dfrac{1}{2}$。<br>
B.\t$1$  或  $\\dfrac{1}{3}$。<br>
C.\t$2$  或  $\\dfrac{7}{2}$。<br>
D.\t$3$  或  $\\dfrac{1}{9}$。
</div>`,
            en: `If $\\begin{cases} \\log_9 y = x - 3 \\\\[1.2ex] 2(\\log_9 y)^2 = 4 - x \\end{cases}$, then $y=$
<div class="q-mcopt">
A.\t$-1$ or $\\dfrac{1}{2}$.<br>
B.\t$1$ or $\\dfrac{1}{3}$.<br>
C.\t$2$ or $\\dfrac{7}{2}$.<br>
D.\t$3$ or $\\dfrac{1}{9}$.
</div>`
        },
        hint: {
            tc: `設 $t=\\log_9 y$ 後解聯立方程。 `,
            en: `Let $t=\\log_9 y$ and solve the simultaneous equations.`
        },
        solution: `D (41%)<p><iframe src="https://www.youtube.com/embed/5PUGiX2yQl0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q35",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: {
            tc: `若 $k$ 及 $\\dfrac{5}{2-i} + ki$ 均為實數，則 $k=$
<div class="q-mcopt">
A.\t$-2$。 <br>
B.\t$-1$。 <br>
C.\t$1$。 <br>
D.\t$2$。 
</div>`,
            en: `If $k$ and $\\dfrac{5}{2-i} + ki$ are real numbers, then $k=$
<div class="q-mcopt">
A.\t$-2$. <br>
B.\t$-1$. <br>
C.\t$1$. <br>
D.\t$2$. 
</div>`
        },
        hint: {
            tc: `化簡分式後令虛部為零。 `,
            en: `Simplify the complex expression and set its imaginary part to zero.`
        },
        solution: `B (45%)<p><iframe src="https://www.youtube.com/embed/9GQprWdMYp4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q36",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: {
            tc: `下列何者為等差數列？
<div class="q-mcms">
I.\t$\\pi^{30}$ ,  $\\pi^{45}$ ,  $\\pi^{60}$
II.\t$30\\pi$ ,  $45\\pi$ ,  $60\\pi$
III.\t$\\pi - 30$ ,  $\\pi - 45$ ,  $\\pi - 60$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `Which of the following are arithmetic sequences?
<div class="q-mcms">
I.\t$\\pi^{30}$ ,  $\\pi^{45}$ ,  $\\pi^{60}$
II.\t$30\\pi$ ,  $45\\pi$ ,  $60\\pi$
III.\t$\\pi - 30$ ,  $\\pi - 45$ ,  $\\pi - 60$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `檢查公差是否為常數。 `,
            en: `Check whether the common difference is constant.`
        },
        solution: `C (66%)<p><iframe src="https://www.youtube.com/embed/sv4M-Jd21Dk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q37",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: {
            tc: `考慮以下的不等式組：<br>
\t$\\begin{cases}
y \\le 9 \\\\[1.2ex]
x - y - 9 \\le 0 \\\\[1.2ex]
x + y - 9 \\ge 0
\\end{cases}$<br>
設 $R$ 為表示以上的不等式組的解之區域。 若 $(x, y)$ 為 $R$ 中的一點，則 $x-2y+43$ 的最大值為
<div class="q-mcopt">
A.\t$25$。<br>
B.\t$43$。<br>
C.\t$52$。<br>
D.\t$61$。
</div>`,
            en: `Consider the following system of inequalities:
<br>
\t$\\begin{cases}
y \\le 9 \\\\[1.2ex]
x - y - 9 \\le 0 \\\\[1.2ex]
x + y - 9 \\ge 0
\\end{cases}$<br>
Let $R$ be the region which represents the solution of the above system of inequalities. If $(x, y)$ is a point lying in $R$, then the greatest value of $x-2y+43$ is
<div class="q-mcopt">
A.\t$25$.<br>
B.\t$43$.<br>
C.\t$52$.<br>
D.\t$61$.
</div>`
        },
        hint: {
            tc: `找出可行域頂點並代入目標函數。 `,
            en: `Find vertices of the feasible region and test them in the objective function.`
        },
        solution: `C (45%)<p><iframe src="https://www.youtube.com/embed/1D2obzAiWQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q38",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一長方形。 若 $E$ 為 $AC$ 上的一點使得 $AE = 30\\text{ cm}$，則 $DE =$
<div class="q-mcopt"><img src="img/2017dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$3\\sqrt{65}\\text{ cm}$<br>
B.\t$5\\sqrt{29}\\text{ cm}$<br>
C.\t$\\sqrt{641}\\text{ cm}$<br>
D.\t$\\sqrt{697}\\text{ cm}$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a rectangle. If $E$ is a point lying on $AC$ such that $AE = 30\\text{ cm}$, then $DE =$
<div class="q-mcopt"><img src="img/2017dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$3\\sqrt{65}\\text{ cm}$<br>
B.\t$5\\sqrt{29}\\text{ cm}$<br>
C.\t$\\sqrt{641}\\text{ cm}$<br>
D.\t$\\sqrt{697}\\text{ cm}$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `用坐標或相似三角形求長度。 `,
            en: `Find the length using coordinates or similar triangles.`
        },
        solution: `A (49%)<p><iframe src="https://www.youtube.com/embed/UuyIBz888sI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q39",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 2,
        content: {
            tc: `圖中，$AD$ 為立於水平地面 $BCD$ 上的鉛垂柱。 若 $AB = 25\\text{ m}$ 、 $AD = 15\\text{ m}$ 、 $BC = 29\\text{ m}$ 及 $CD = 21\\text{ m}$，求 $AB$ 與平面 $ACD$ 間的交角準確至最接近的度。 
<div class="q-mcopt"><img src="img/2017dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$53^\\circ$<br>
B.\t$54^\\circ$<br>
C.\t$69^\\circ$<br>
D.\t$70^\\circ$
</div><div style="clear: both;"></div>`,
            en: `In the figure, $AD$ is a vertical pole standing on the horizontal ground $BCD$. If $AB = 25\\text{ m}$, $AD = 15\\text{ m}$, $BC = 29\\text{ m}$ and $CD = 21\\text{ m}$, find the angle between $AB$ and the plane $ACD$ correct to the nearest degree.
<div class="q-mcopt"><img src="img/2017dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$53^\\circ$<br>
B.\t$54^\\circ$<br>
C.\t$69^\\circ$<br>
D.\t$70^\\circ$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `用餘弦定理及投影求交角。 `,
            en: `Use the cosine formula and projection to find the angle.`
        },
        solution: `A (34%)<p><iframe src="https://www.youtube.com/embed/yUOIVc1_3Vk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q40",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$O$ 為圓 $ABC$ 的圓心。 $DE$ 為圓在 $A$ 的切線。 若 $\\angle BAD = 68^\\circ$ 及 $\\angle BCO = 26^\\circ$，則 $\\angle ABC =$
<div class="q-mcopt"><img src="img/2017dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$42^\\circ$。 <br>
B.\t$48^\\circ$。 <br>
C.\t$54^\\circ$。 <br>
D.\t$64^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $O$ is the centre of the circle $ABC$. $DE$ is the tangent to the circle at $A$. If $\\angle BAD = 68^\\circ$ and $\\angle BCO = 26^\\circ$, then $\\angle ABC =$
<div class="q-mcopt"><img src="img/2017dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$42^\\circ$. <br>
B.\t$48^\\circ$. <br>
C.\t$54^\\circ$. <br>
D.\t$64^\\circ$. 
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用切線與弦的夾角及圓心角。 `,
            en: `Use angle in alternate segment and central angle properties.`
        },
        solution: `B (61%)<p><iframe src="https://www.youtube.com/embed/UaZLGWSc35Y?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q41",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Four Centres of a Triangle", "Equations of Straight Lines"],
        difficulty: 3,
        content: {
            tc: `設 $O$ 為原點。 點 $P$ 及點 $Q$ 的坐標分別為 $(p, 0)$ 及 $(0, q)$，其中 $p$ 及 $q$ 均為正數。 若 $\\Delta OPQ$ 的內心在直線 $3x + 4y = 3p$ 上，則 $p:q =$
<div class="q-mcopt">
A.\t$2:3$。<br>
B.\t$4:3$。<br>
C.\t$4:9$。<br>
D.\t$7:24$。
</div>`,
            en: `Let $O$ be the origin. The coordinates of the points $P$ and $Q$ are $(p,0)$ and $(0,q)$ respectively, where $p$ and $q$ are positive numbers. If the in-centre of $\\Delta OPQ$ lies on the straight line $3x+4y=3p$, then $p:q =$
<div class="q-mcopt">
A.\t$2:3$.<br>
B.\t$4:3$.<br>
C.\t$4:9$.<br>
D.\t$7:24$.
</div>`
        },
        hint: {
            tc: `利用內心坐標公式及邊長權重。 `,
            en: `Use the formula for in-centre coordinates weighted by side lengths.`
        },
        solution: `D (21%)<p><iframe src="https://www.youtube.com/embed/-CkmEmW1qRg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q42",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 1,
        content: {
            tc: `某委員會有 $13$ 名學生及 $6$ 名教師。 若從該委員會中選出 $5$ 名學生及 $4$ 名教師組成一隊，則可組成多少不同的隊？
<div class="q-mcopt">
A.\t$4\\,290$<br>
B.\t$19\\,305$<br>
C.\t$92\\,378$<br>
D.\t$55\\,598\\,400$
</div>`,
            en: `There are $13$ students and $6$ teachers in a committee. If $5$ students and $4$ teachers are selected from the committee to form a team, how many different teams can be formed?
<div class="q-mcopt">
A.\t$4\\,290$<br>
B.\t$19\\,305$<br>
C.\t$92\\,378$<br>
D.\t$55\\,598\\,400$
</div>`
        },
        hint: {
            tc: `分別計算學生及教師的組合後相乘。 `,
            en: `Calculate combinations of students and teachers separately and multiply them.`
        },
        solution: `B (70%)<p><iframe src="https://www.youtube.com/embed/dS7nXppXIY0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q43",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `當<u>佩怡</u>擲一飛鏢時，她擲中目標的概率為 $0.7$。 若<u>佩怡</u>擲該飛鏢 $4$ 次，求她擲中目標至多 $3$ 次的概率。 
<div class="q-mcopt">
A.\t$0.0081$<br>
B.\t$0.2401$<br>
C.\t$0.7599$<br>
D.\t$0.9919$
</div>`,
            en: `When Teresa throws a dart, the probability that she hits the target is $0.7$. If Teresa throws the dart $4$ times, find the probability that she hits the target at most $3$ times.
<div class="q-mcopt">
A.\t$0.0081$<br>
B.\t$0.2401$<br>
C.\t$0.7599$<br>
D.\t$0.9919$
</div>`
        },
        hint: {
            tc: `1 減全部 4 次均中的概率。 `,
            en: `Subtract the probability of hitting all 4 times from 1.`
        },
        solution: `C (59%)<p><iframe src="https://www.youtube.com/embed/OP8eIVRkbQw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q44",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 1,
        content: {
            tc: `<u>志誠</u>在某數學考試的標準分為 $-2$。 若<u>志誠</u>在該數學考試的得分為 $33$ 分且該數學考試的得分的平均值為 $45$ 分，則該數學考試的得分的標準差為
<div class="q-mcopt">
A.\t$3$ 分。<br>
B.\t$6$ 分。<br>
C.\t$12$ 分。<br>
D.\t$36$ 分。
</div>`,
            en: `The standard score of Tom in a Mathematics examination is $-2$. If the score of Tom in the Mathematics examination is $33$ marks and the mean of the scores of the Mathematics examination is $45$ marks, then the standard deviation of the scores of the Mathematics examination is
<div class="q-mcopt">
A.\t$3$ marks.<br>
B.\t$6$ marks.<br>
C.\t$12$ marks.<br>
D.\t$36$ marks.
</div>`
        },
        hint: {
            tc: `標準分 $= ($得分 $-$ 平均$)/$標準差。 `,
            en: `Standard Score $= ($Score $-$ Mean$) / $Standard Deviation.`
        },
        solution: `B (78%)<p><iframe src="https://www.youtube.com/embed/MCsV0tPVrls?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2017-DSE-MATH-CP2-Q45",
        year: 2017,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: {
            tc: `設 $m_1$、$r_1$ 及 $v_1$ 分別為某組數 $\\{x_1, x_2, x_3, x_4, x_5, x_6, x_7\\}$ 的眾數、四分位數間距及方差，而 $m_2$、$r_2$ 及 $v_2$ 分別為 $\\{8x_1, 8x_2, 8x_3, 8x_4, 8x_5, 8x_6, 8x_7\\}$ 這組數的眾數、四分位數間距及方差。 下列何者必為正確？
<div class="q-mcms">
I.\t$m_2 = 8m_1$
II.\t$r_2 = 8r_1$
III.\t$v_2 = 8v_1$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `Let $m_1$, $r_1$ and $v_1$ be the mode, the inter-quartile range and the variance of a group of numbers $\\{x_1, x_2, x_3, x_4, x_5, x_6, x_7\\}$ respectively while $m_2$, $r_2$ and $v_2$ be the mode, the inter-quartile range and the variance of the group of numbers $\\{8x_1, 8x_2, 8x_3, 8x_4, 8x_5, 8x_6, 8x_7\\}$ respectively. Which of the following must be true?
<div class="q-mcms">
I.\t$m_2 = 8m_1$
II.\t$r_2 = 8r_1$
III.\t$v_2 = 8v_1$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `線性變換對眾數、四分位距、方差的影響。 `,
            en: `Effects of linear transformations on mode, inter-quartile range, and variance.`
        },
        solution: `A (48%)<p><iframe src="https://www.youtube.com/embed/ZB5HXXkFQfE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
);
