// 2024dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2024-DSE-MATH-CP2-Q01",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
          tc: `$(x+3y)^2 - (x-3y)^2 =$
<div class="q-mcopt">
A.\t$2x^2$。<br>
B.\t$6xy$。<br>
C.\t$12xy$。<br>
D.\t$2x^2 + 18y^2$。
</div>`,
          en: `$(x+3y)^2 - (x-3y)^2 =$
<div class="q-mcopt">
A.\t$2x^2$.<br>
B.\t$6xy$.<br>
C.\t$12xy$.<br>
D.\t$2x^2 + 18y^2$.
</div>`
        },
        hint: {
          tc: `應用平方差公式或展開後簡化。`,
          en: `Apply difference of two squares or simplify after expanding.`
        },
        solution: `C (86%)<p><iframe src="https://www.youtube.com/embed/cJei3NiIlbc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q02",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
          tc: `$\\dfrac{(2\\alpha)^3}{(4\\alpha^{-5})^{-1}} =$
<div class="q-mcopt">
A.\t$2\\alpha^8$。<br>
B.\t$32\\alpha^8$。<br>
C.\t$\\dfrac{2}{\\alpha^2}$。<br>
D.\t$\\dfrac{32}{\\alpha^2}$。
</div>`,
          en: `$\\dfrac{(2\\alpha)^3}{(4\\alpha^{-5})^{-1}} =$
<div class="q-mcopt">
A.\t$2\\alpha^8$.<br>
B.\t$32\\alpha^8$.<br>
C.\t$\\dfrac{2}{\\alpha^2}$.<br>
D.\t$\\dfrac{32}{\\alpha^2}$.
</div>`
        },
        hint: {
          tc: `先處理負指數，再合併同類項。`,
          en: `Handle the negative exponents first, then combine like terms.`
        },

        solution: `D (78%)<p><iframe src="https://www.youtube.com/embed/9aGO85CcQjU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q03",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: {
          tc: `若 $k = \\dfrac{5}{2m} + n$，則 $m =$
<div class="q-mcopt">
A.\t$\\dfrac{5}{2(k-n)}$。<br>
B.\t$\\dfrac{5}{2(n-k)}$。<br>
C.\t$\\dfrac{2(k-n)}{5}$。<br>
D.\t$\\dfrac{2(n-k)}{5}$。
</div>`,
          en: `If $k = \\dfrac{5}{2m} + n$, then $m =$
<div class="q-mcopt">
A.\t$\\dfrac{5}{2(k-n)}$.<br>
B.\t$\\dfrac{5}{2(n-k)}$.<br>
C.\t$\\dfrac{2(k-n)}{5}$.<br>
D.\t$\\dfrac{2(n-k)}{5}$.
</div>`
        },
        hint: {
          tc: `先移項再倒數求解 $m$。`,
          en: `Transpose terms first and then take reciprocals to solve for $m$.`
        },

        solution: `A (89%)<p><iframe src="https://www.youtube.com/embed/U-FVLwoBMc8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q04",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: {
          tc: `$\\sqrt{333} =$
<div class="q-mcopt">
A.\t$18$（準確至最接近的整數）。<br>
B.\t$18.24$（準確至二位小數）。<br>
C.\t$18.248$（準確至三位有效數字）。<br>
D.\t$18.2482$（準確至四位小數）。
</div>`,
          en: `$\\sqrt{333} =$
<div class="q-mcopt">
A.\t$18$ (correct to the nearest integer).<br>
B.\t$18.24$ (correct to 2 decimal places).<br>
C.\t$18.248$ (correct to 3 significant figures).<br>
D.\t$18.2482$ (correct to 4 decimal places).
</div>`
        },
        hint: {
          tc: `計算 $\\sqrt{333}$ 的近似值並對照各選項的精確度。`,
          en: `Calculate the approximate value of $\\sqrt{333}$ and compare with the accuracy of each option.`
        },

        solution: `A (92%)<p><iframe src="https://www.youtube.com/embed/lVKWcbXmjI0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q05",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: {
          tc: `2 個蘋果和 3 個檸檬的價錢為 $\\$38$。 若 3 個蘋果和 2 個檸檬的價錢為 $\\$47$，則 4 個蘋果和 7 個檸檬的價錢為
<div class="q-mcopt">
A.\t$\\$78$。<br>
B.\t$\\$80$。<br>
C.\t$\\$82$。<br>
D.\t$\\$84$。
</div>`,
          en: `The price of 2 apples and 3 lemons is $\\$38$. If the price of 3 apples and 2 lemons is $\\$47$, then the price of 4 apples and 7 lemons is
<div class="q-mcopt">
A.\t$\\$78$.<br>
B.\t$\\$80$.<br>
C.\t$\\$82$.<br>
D.\t$\\$84$.
</div>`
        },
        hint: {
          tc: `設未知數後解聯立方程。`,
          en: `Set up unknowns and solve the simultaneous equations.`
        },

        solution: `B (93%)<p><iframe src="https://www.youtube.com/embed/71fU26xpKGk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q06",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 1,
        content: {
          tc: `若 $a$ 、 $b$ 及 $c$ 均為非零的常數使得 $4x^2+2ax+3a \\equiv x(4x+b)+2c$，則 $a:b:c=$
<div class="q-mcopt">
A.\t$2:4:3$。<br>
B.\t$3:4:2$。<br>
C.\t$4:6:3$。<br>
D.\t$6:4:3$。
</div>`,
          en: `If $a$, $b$ and $c$ are non-zero constants such that $4x^2+2ax+3a \\equiv x(4x+b)+2c$, then $a:b:c=$
<div class="q-mcopt">
A.\t$2:4:3$.<br>
B.\t$3:4:2$.<br>
C.\t$4:6:3$.<br>
D.\t$6:4:3$.
</div>`
        },
        hint: {
          tc: `展開右邊並比較係數。`,
          en: `Expand the right-hand side and compare coefficients.`
        },

        solution: `A (77%)<p><iframe src="https://www.youtube.com/embed/Pynv1KKkTcY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q07",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: {
          tc: `設 $m$ 為一常數。 解方程 $x^2-3x=(m-1)^2-3(m-1)$。
<div class="q-mcopt">
A.\t$x=m-1$  或  $x=m-4$<br>
B.\t$x=m-1$  或  $x=4-m$<br>
C.\t$x=1-m$  或  $x=m-4$<br>
D.\t$x=1-m$  或  $x=4-m$
</div>`,
          en: `Let $m$ be a constant. Solve the equation $x^2-3x=(m-1)^2-3(m-1)$.
<div class="q-mcopt">
A.\t$x=m-1$  or  $x=m-4$<br>
B.\t$x=m-1$  or  $x=4-m$<br>
C.\t$x=1-m$  or  $x=m-4$<br>
D.\t$x=1-m$  or  $x=4-m$
</div>`
        },
        hint: {
          tc: `移項後因式分解。`,
          en: `Transpose terms and then factorise.`
        },

        solution: `B (46%)<p><iframe src="https://www.youtube.com/embed/5Ius4cQkDyo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q08",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
          tc: `設 $\\mathrm{g}(x)=(x+1)(x+a)$，其中 $a$ 為一常數。若 $\\mathrm{g}(1)=\\mathrm{g}(2)$，則 $\\mathrm{g}(a)=$
<div class="q-mcopt">
A.\t$-4$。<br>
B.\t$0$。<br>
C.\t$12$。<br>
D.\t$24$。
</div>`,
          en: `Let $\\mathrm{g}(x)=(x+1)(x+a)$, where $a$ is a constant. If $\\mathrm{g}(1)=\\mathrm{g}(2)$, then $\\mathrm{g}(a)=$
<div class="q-mcopt">
A.\t$-4$.<br>
B.\t$0$.<br>
C.\t$12$.<br>
D.\t$24$.
</div>`
        },
        hint: {
          tc: `先由 $\\mathrm{g}(1)=\\mathrm{g}(2)$ 求 $a$，再代入。`,
          en: `First find $a$ from $\\mathrm{g}(1)=\\mathrm{g}(2)$, then substitute.`
        },

        solution: `D (54%)<p><iframe src="https://www.youtube.com/embed/oxCQyXRypXI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q09",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: {
          tc: `設 $\\mathrm{f}(x)=x^3+kx^2+5x+10$，其中 $k$ 為一常數。 若 $\\mathrm{f}(x)$ 可被 $x+k$ 整除，求當 $\\mathrm{f}(x)$ 除以 $x+1$ 時的餘數。
<div class="q-mcopt">
A.\t$-2$<br>
B.\t$2$<br>
C.\t$6$<br>
D.\t$18$
</div>`,
          en: `Let $\\mathrm{f}(x)=x^3+kx^2+5x+10$, where $k$ is a constant. If $\\mathrm{f}(x)$ is divisible by $x+k$, find the remainder when $\\mathrm{f}(x)$ is divided by $x+1$.
<div class="q-mcopt">
A.\t$-2$<br>
B.\t$2$<br>
C.\t$6$<br>
D.\t$18$
</div>`
        },
        hint: {
          tc: `用因式定理求 $k$，再用餘式定理求餘數。`,
          en: `Use the factor theorem to find $k$, then use the remainder theorem to find the remainder.`
        },

        solution: `C (67%)<p><iframe src="https://www.youtube.com/embed/WsBF3oekWCY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q10",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: {
          tc: `$\\dfrac{1-x}{2} \\ge 4$  或  $7+5x \\le -3$ 的解為
<div class="q-mcopt">
A.\t$x \\le -7$。<br>
B.\t$x \\le -2$。<br>
C.\t$-7 \\le x \\le -2$。<br>
D.\t$x \\le -7$  或  $x \\ge -2$。
</div>`,
          en: `The solution of $\\dfrac{1-x}{2} \\ge 4$ or $7+5x \\le -3$ is
<div class="q-mcopt">
A.\t$x \\le -7$.<br>
B.\t$x \\le -2$.<br>
C.\t$-7 \\le x \\le -2$.<br>
D.\t$x \\le -7$ or $x \\ge -2$.
</div>`
        },
        hint: {
          tc: `分別解兩個不等式再取聯集。`,
          en: `Solve the two inequalities separately and then take the union.`
        },

        solution: `B (71%)<p><iframe src="https://www.youtube.com/embed/lR3dntsjmBk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q11",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: {
          tc: `在某校，40% 學生為女生且 $\\beta\\%$ 女生為外地生。 已知該校中 30% 男生為外地生。 在該校，外地生人數與女生人數相等。 求 $\\beta$。
<div class="q-mcopt">
A.\t$20$<br>
B.\t$45$<br>
C.\t$55$<br>
D.\t$80$
</div>`,
          en: `In a school, 40% of the students are girls and $\\beta\\%$ of the girls are foreign students. It is given that 30% of the boys in the school are foreign students. In the school, the number of foreign students and the number of girls are equal. Find $\\beta$.
<div class="q-mcopt">
A.\t$20$<br>
B.\t$45$<br>
C.\t$55$<br>
D.\t$80$
</div>`
        },
        hint: {
          tc: `設總人數後列方程求解。`,
          en: `Assume the total number of students and set up an equation to solve.`
        },

        solution: `C (58%)<p><iframe src="https://www.youtube.com/embed/E4A3RSJ6qZE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q12",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: {
          tc: `某汽車以平均速率 $60\\text{ km/h}$ 行駛 $18$ 分鐘，該汽車然後以平均速率 $40\\text{ km/h}$ 行駛 $27$ 分鐘。 該汽車在整段行程的平均速率為
<div class="q-mcopt">
A.\t$48\\text{ km/h}$。<br>
B.\t$50\\text{ km/h}$。<br>
C.\t$52\\text{ km/h}$。<br>
D.\t$54\\text{ km/h}$。
</div>`,
          en: `A car travels at an average speed of $60\\text{ km/h}$ for $18$ minutes and then the car travels at an average speed of $40\\text{ km/h}$ for $27$ minutes. The average speed of the car for the whole journey is
<div class="q-mcopt">
A.\t$48\\text{ km/h}$.<br>
B.\t$50\\text{ km/h}$.<br>
C.\t$52\\text{ km/h}$.<br>
D.\t$54\\text{ km/h}$.
</div>`
        },
        hint: {
          tc: `先求總距離及總時間。`,
          en: `First find the total distance and the total time.`
        },

        solution: `A (73%)<p><iframe src="https://www.youtube.com/embed/SckgG-ZFQJ4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q13",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: {
          tc: `已知 $z$ 隨 $x$ 的平方正變且隨 $y$ 反變。 若 $x$ 增加 $20\\%$ 且 $y$ 減少 $20\\%$，則 $z$
<div class="q-mcopt">
A.\t增加 $20\\%$。<br>
B.\t減少 $20\\%$。<br>
C.\t增加 $80\\%$。<br>
D.\t減少 $80\\%$。
</div>`,
          en: `It is given that $z$ varies directly as the square of $x$ and inversely as $y$. If $x$ is increased by $20\\%$ and $y$ is decreased by $20\\%$, then $z$
<div class="q-mcopt">
A.\tis increased by $20\\%$.<br>
B.\tis decreased by $20\\%$.<br>
C.\tis increased by $80\\%$.<br>
D.\tis decreased by $80\\%$.
</div>`
        },
        hint: {
          tc: `寫出 $z = k\\dfrac{x^2}{y}$ 後計算新舊比值。`,
          en: `Write $z = k\\dfrac{x^2}{y}$ and then calculate the ratio of the new value to the old value.`
        },

        solution: `C (74%)<p><iframe src="https://www.youtube.com/embed/ZovVsqNfBI0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q14",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
          tc: `下列有關 $y = 2(6-x)^2 - 7$ 的圖像之敍述，何者正確？
<div class="q-mcopt">
A.\t該圖像開口向上。<br>
B.\t該圖像與 $x$ 軸沒有相交。<br>
C.\t該圖像的 $y$ 截距為 $-7$。<br>
D.\t該圖像通過點 $(-6, -7)$。
</div>`,
          en: `Which of the following statements about the graph of $y = 2(6-x)^2 - 7$ is true?
<div class="q-mcopt">
A.\tThe graph opens upwards.<br>
B.\tThe graph does not cut the $x$-axis.<br>
C.\tThe $y$-intercept of the graph is $-7$.<br>
D.\tThe graph passes through the point $(-6, -7)$.
</div>`
        },
        hint: {
          tc: `觀察二次項係數及頂點位置。`,
          en: `Observe the coefficient of the quadratic term and the position of the vertex.`
        },

        solution: `A (66%)<p><iframe src="https://www.youtube.com/embed/MgFw5C0SyMM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q15",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
          tc: `若某扇形的弧長及面積分別為 $8\\pi\\text{ cm}$ 及 $80\\pi\\text{ cm}^2$，則該扇形的角為
<div class="q-mcopt">
A.\t$36^\\circ$。<br>
B.\t$45^\\circ$。<br>
C.\t$60^\\circ$。<br>
D.\t$72^\\circ$。
</div>`,
          en: `If the arc length and the area of a sector are $8\\pi\\text{ cm}$ and $80\\pi\\text{ cm}^2$ respectively, then the angle of the sector is
<div class="q-mcopt">
A.\t$36^\\circ$.<br>
B.\t$45^\\circ$.<br>
C.\t$60^\\circ$.<br>
D.\t$72^\\circ$.
</div>`
        },
        hint: {
          tc: `由弧長及面積公式求半徑及圓心角。`,
          en: `Use the formulae for arc length and area to find the radius and the central angle.`
        },

        solution: `D (68%)<p><iframe src="https://www.youtube.com/embed/FAIuzF4Sz80?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q16",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
          tc: `一直立圓柱體的高與一直立圓錐體的高之比為 $32:15$，而該圓柱體的體積與該圓錐體的體積之比為 $10:9$。 若該圓柱體的底半徑為 $25\\text{ cm}$，則該圓錐體的底半徑為
<div class="q-mcopt">
A.\t$20\\text{ cm}$。<br>
B.\t$24\\text{ cm}$。<br>
C.\t$48\\text{ cm}$。<br>
D.\t$60\\text{ cm}$。
</div>`,
          en: `The ratio of the height of a right circular cylinder to the height of a right circular cone is $32:15$ while the ratio of the volume of the circular cylinder to the volume of the circular cone is $10:9$. If the base radius of the circular cylinder is $25\\text{ cm}$, then the base radius of the circular cone is
<div class="q-mcopt">
A.\t$20\\text{ cm}$.<br>
B.\t$24\\text{ cm}$.<br>
C.\t$48\\text{ cm}$.<br>
D.\t$60\\text{ cm}$.
</div>`
        },
        hint: {
          tc: `利用體積比及高之比求半徑比。`,
          en: `Use the ratio of volumes and the ratio of heights to find the ratio of radii.`
        },

        solution: `D (54%)<p><iframe src="https://www.youtube.com/embed/HiSmdQkaQKM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q17",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
          tc: `圖中，$ABCD$ 為一正方形。 設 $M$ 為 $BC$ 的中點。 $E$ 為 $AD$ 上的一點使得 $AE:ED = 3:1$。 $F$ 為 $BC$ 的延線上的一點使得 $EF//AM$。 $CD$ 與 $EF$ 相交於點 $G$ 而 $AM$ 與 $BG$ 相交於點 $H$。 若 $\\triangle BMH$ 的面積為 $4\\text{ cm}^2$，則梯形 $AEGH$ 的面積為
<div class="q-mcopt"><img src="img/2024dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px;">
A.\t$12\\text{ cm}^2$。<br>
B.\t$33\\text{ cm}^2$。<br>
C.\t$39\\text{ cm}^2$。<br>
D.\t$45\\text{ cm}^2$。
</div><div style="clear: both;"></div>`,
          en: `In the figure, $ABCD$ is a square. Let $M$ be the mid-point of $BC$. $E$ is a point lying on $AD$ such that $AE:ED = 3:1$. $F$ is a point lying on $BC$ produced such that $EF // AM$. $CD$ and $EF$ intersect at the point $G$ while $AM$ and $BG$ intersect at the point $H$. If the area of $\\triangle BMH$ is $4\\text{ cm}^2$, then the area of the trapezium $AEGH$ is
<div class="q-mcopt"><img src="img/2024dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px;">
A.\t$12\\text{ cm}^2$.<br>
B.\t$33\\text{ cm}^2$.<br>
C.\t$39\\text{ cm}^2$.<br>
D.\t$45\\text{ cm}^2$.
</div><div style="clear: both;"></div>`
        },
        hint: {
          tc: `利用相似三角形或面積比關係。`,
          en: `Use similar triangles or area ratio relations.`
        },

        solution: `C (35%)<p><iframe src="https://www.youtube.com/embed/_r9WibZrGSU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q18",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 1,
        content: {
          tc: `圖中，$ABC$ 為一直線。 已知 $AD = 37\\text{ cm}$ 、 $BC = 5\\text{ cm}$ 、 $BD = 12\\text{ cm}$ 、 $CD = 13\\text{ cm}$ 及 $CE = 9\\text{ cm}$。 若 $\\angle ACE = 90^\\circ$，求四邊形 $ADCE$ 的周界。
<div class="q-mcopt"><img src="img/2024dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px;">
A.\t$76\\text{ cm}$<br>
B.\t$90\\text{ cm}$<br>
C.\t$100\\text{ cm}$<br>
D.\t$180\\text{ cm}$
</div><div style="clear: both;"></div>`,
          en: `In the figure, $ABC$ is a straight line. It is given that $AD = 37\\text{ cm}$, $BC = 5\\text{ cm}$, $BD = 12\\text{ cm}$, $CD = 13\\text{ cm}$ and $CE = 9\\text{ cm}$. If $\\angle ACE = 90^\\circ$, find the perimeter of the quadrilateral $ADCE$.
<div class="q-mcopt"><img src="img/2024dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px;">
A.\t$76\\text{ cm}$<br>
B.\t$90\\text{ cm}$<br>
C.\t$100\\text{ cm}$<br>
D.\t$180\\text{ cm}$
</div><div style="clear: both;"></div>`
        },
        hint: {
          tc: `先用畢氏定理求 $AC$ 及 $AE$。`,
          en: `First use Pythagoras' theorem to find $AC$ and $AE$.`
        },

        solution: `C (82%)<p><iframe src="https://www.youtube.com/embed/wvjHEK230ik?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q19",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
          tc: `根據圖中所示，下列何者必為正確？
<div class="q-mcopt"><img src="img/2024dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px;">
A.\t$p+q-r=90^\\circ$<br>
B.\t$p-r+s=180^\\circ$<br>
C.\t$p+q-r+s=270^\\circ$<br>
D.\t$p+q+r-s=540^\\circ$
</div><div style="clear: both;"></div>`,
          en: `According to the figure, which of the following must be true?
<div class="q-mcopt"><img src="img/2024dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px;">
A.\t$p+q-r=90^\\circ$<br>
B.\t$p-r+s=180^\\circ$<br>
C.\t$p+q-r+s=270^\\circ$<br>
D.\t$p+q+r-s=540^\\circ$
</div><div style="clear: both;"></div>`
        },
        hint: {
          tc: `利用多邊形內角和及直線上的角。`,
          en: `Use the sum of interior angles of a polygon and angles on a straight line.`
        },

        solution: `D (51%)<p><iframe src="https://www.youtube.com/embed/d7AIac64-rA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q20",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
          tc: `若一正多邊形的內角和為 $900^\\circ$，則下列何者正確？
<div class="q-mcms">
I.\t該多邊形的對角線數目為 $7$。
II.\t該多邊形的旋轉對稱的折式數目為 $7$。
III.\t該多邊形的反射對稱軸的數目為 $7$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
          en: `If the sum of the interior angles of a regular polygon is $900^\\circ$, which of the following is/are true?
<div class="q-mcms">
I.\tThe number of diagonals of the polygon is $7$.
II.\tThe number of folds of rotational symmetry of the polygon is $7$.
III.\tThe number of axes of reflectional symmetry of the polygon is $7$.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
          tc: `先求邊數 $n$，再判斷對稱性質。`,
          en: `First find the number of sides $n$, then determine the symmetry properties.`
        },

        solution: `D (46%)<p><iframe src="https://www.youtube.com/embed/myTLHdzbN9E?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q21",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
          tc: `圖中，$ABCD$ 為一菱形。 將 $AC$ 與 $BD$ 的交點記為 $E$。 設 $F$ 為一點使得 $BH//EF$ 且 $CFHG$ 為一長方形，其中 $G$ 及 $H$ 分別為 $AC$ 的延線及 $BC$ 的延線上的點。 將 $CD$ 與 $EF$ 的交點記為 $I$。 下列何者必為正確？
<div class="q-mcms"><img src="img/2024dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px;">
I.\t$CI=FI$
II.\t$\\angle ABE=\\angle GCH$
III.\t$\\Delta ADE \\cong \\Delta HCF$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
          en: `In the figure, $ABCD$ is a rhombus. Denote the point of intersection of $AC$ and $BD$ by $E$. Let $F$ be a point such that $BH//EF$ and $CFHG$ is a rectangle, where $G$ and $H$ are points lying on $AC$ produced and $BC$ produced respectively. Denote the point of intersection of $CD$ and $EF$ by $I$. Which of the following must be true?
<div class="q-mcms"><img src="img/2024dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px;">
I.\t$CI=FI$
II.\t$\\angle ABE=\\angle GCH$
III.\t$\\Delta ADE \\cong \\Delta HCF$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div><div style="clear: both;"></div>`
        },
        hint: {
          tc: `利用菱形及長方形的性質。`,
          en: `Use the properties of a rhombus and a rectangle.`
        },

        solution: `B (36%)<p><iframe src="https://www.youtube.com/embed/_A5st1pJPK0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q22",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
          tc: `圖中，$ABCDE$ 為一圓。 $AC$ 及 $BE$ 均為該圓的直徑。 設 $P$ 為 $AC$ 與 $BD$ 的交點。 若 $\\angle ABE = 46^\\circ$ 及 $\\angle DBE = 16^\\circ$，則 $\\angle APD =$
<div class="q-mcopt"><img src="img/2024dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px;">
A.\t$104^\\circ$。<br>
B.\t$108^\\circ$。<br>
C.\t$120^\\circ$。<br>
D.\t$135^\\circ$。
</div><div style="clear: both;"></div>`,
          en: `In the figure, $ABCDE$ is a circle. $AC$ and $BE$ are diameters of the circle. Let $P$ be the point of intersection of $AC$ and $BD$. If $\\angle ABE = 46^\\circ$ and $\\angle DBE = 16^\\circ$, then $\\angle APD =$
<div class="q-mcopt"><img src="img/2024dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px;">
A.\t$104^\\circ$.<br>
B.\t$108^\\circ$.<br>
C.\t$120^\\circ$.<br>
D.\t$135^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
          tc: `利用直徑所對的圓周角及圓心角性質。`,
          en: `Use the properties of the angle in a semicircle and central angles.`
        },

        solution: `B (64%)<p><iframe src="https://www.youtube.com/embed/D-AcaL_4muk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q23",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: {
          tc: `圖中，$ABC$ 為一直線。 $\\dfrac{BC}{AD} =$
<div class="q-mcopt"><img src="img/2024dsep2q23.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px;">
A.\t$\\dfrac{\\sin \\theta}{\\tan \\phi}$。<br>
B.\t$\\dfrac{\\tan \\phi}{\\sin \\theta}$。<br>
C.\t$\\dfrac{\\cos \\theta}{\\tan \\phi}$。<br>
D.\t$\\dfrac{\\tan \\phi}{\\cos \\theta}$。
</div><div style="clear: both;"></div>`,
          en: `In the figure, $ABC$ is a straight line. $\\dfrac{BC}{AD} =$
<div class="q-mcopt"><img src="img/2024dsep2q23.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px;">
A.\t$\\dfrac{\\sin \\theta}{\\tan \\phi}$.<br>
B.\t$\\dfrac{\\tan \\phi}{\\sin \\theta}$.<br>
C.\t$\\dfrac{\\cos \\theta}{\\tan \\phi}$.<br>
D.\t$\\dfrac{\\tan \\phi}{\\cos \\theta}$.
</div><div style="clear: both;"></div>`
        },
        hint: {
          tc: `在直角三角形中表達各邊。`,
          en: `Express the sides in the right-angled triangles.`
        },

        solution: `A (56%)<p><iframe src="https://www.youtube.com/embed/PlqRlnF8xMs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q24",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: {
          tc: `點 $U$ 的坐標為 $(-3, -8)$。 $U$ 繞原點逆時針方向旋轉 $90^\\circ$ 至點 $V$，然後 $V$ 對直線 $x=2$ 作反射至點 $W$。 求 $W$ 的 $x$ 坐標。
<div class="q-mcopt">
A.\t$-4$<br>
B.\t$-3$<br>
C.\t$7$<br>
D.\t$12$
</div>`,
          en: `The coordinates of the point $U$ are $(-3, -8)$. $U$ is rotated anticlockwise about the origin through $90^\\circ$ to the point $V$. $V$ is then reflected with respect to the straight line $x=2$ to the point $W$. Find the $x$-coordinate of $W$.
<div class="q-mcopt">
A.\t$-4$<br>
B.\t$-3$<br>
C.\t$7$<br>
D.\t$12$
</div>`
        },
        hint: {
          tc: `先作旋轉再作反射。`,
          en: `Perform the rotation first, then the reflection.`
        },

        solution: `A (58%)<p><iframe src="https://www.youtube.com/embed/a36VTcp7afE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q25",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 2,
        content: {
          tc: `點 $A$ 及點 $B$ 的坐標分別為 $(-3,1)$ 及 $(-7,-5)$。 若 $P$ 為直線 $x-y+13=0$ 上的一點使得 $AP=PB$，則 $P$ 的 $y$ 坐標為
<div class="q-mcopt">
A.\t$-11$。<br>
B.\t$-2$。<br>
C.\t$2$。<br>
D.\t$11$。
</div>`,
          en: `The coordinates of the points $A$ and $B$ are $(-3, 1)$ and $(-7, -5)$ respectively. If $P$ is a point lying on the straight line $x - y + 13 = 0$ such that $AP = PB$, then the $y$-coordinate of $P$ is
<div class="q-mcopt">
A.\t$-11$.<br>
B.\t$-2$.<br>
C.\t$2$.<br>
D.\t$11$.
</div>`
        },
        hint: {
          tc: `$AP=PB$ 表示 $P$ 在 $AB$ 的垂直平分線上。`,
          en: `$AP=PB$ means that $P$ lies on the perpendicular bisector of $AB$.`
        },

        solution: `C (39%)<p><iframe src="https://www.youtube.com/embed/aoiekrJAO3M?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q26",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: {
          tc: `求常數 $k$ 使得直線 $6x-8y=7k$ 與直線 $kx+12y=5$ 互不相交。
<div class="q-mcopt">
A.\t$-16$<br>
B.\t$-9$<br>
C.\t$9$<br>
D.\t$16$
</div>`,
          en: `Find the constant $k$ such that the straight lines $6x-8y=7k$ and $kx+12y=5$ do not intersect with each other.
<div class="q-mcopt">
A.\t$-16$<br>
B.\t$-9$<br>
C.\t$9$<br>
D.\t$16$
</div>`
        },
        hint: {
          tc: `兩直線平行時斜率相等。`,
          en: `The two straight lines are parallel when their slopes are equal.`
        },

        solution: `B (54%)<p><iframe src="https://www.youtube.com/embed/nNAWMogfcgQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q27",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: {
          tc: `將圓 $3x^2+3y^2-6x+12y-4=0$ 記為 $C$。 下列何者正確？
<div class="q-mcms">
I.\t原點位於 $C$ 以內。
II.\t$C$ 的圓周少於 $16$。
III.\t由 $C$ 的圓心至 $x$ 軸的垂直距離為 $2$。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
          en: `Denote the circle $3x^2+3y^2-6x+12y-4=0$ by $C$. Which of the following are true?
<div class="q-mcms">
I.\tThe origin lies inside $C$.
II.\tThe circumference of $C$ is less than $16$.
III.\tThe perpendicular distance from the centre of $C$ to the $x$-axis is $2$.
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
          tc: `先化成標準式求圓心及半徑。`,
          en: `First rewrite in standard form to find the centre and radius.`
        },

        solution: `D (45%)<p><iframe src="https://www.youtube.com/embed/GfLZM2QTILE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q28",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
          tc: `從六張分別記有數字 $1$、$2$、$3$、$4$、$5$ 及 $6$ 的紙卡中，隨機同時抽出兩個數字。 求抽出數字之積不小於 $12$ 的概率。
<div class="q-mcopt">
A.\t$\\dfrac{1}{3}$<br>
B.\t$\\dfrac{2}{3}$<br>
C.\t$\\dfrac{7}{15}$<br>
D.\t$\\dfrac{8}{15}$
</div>`,
          en: `Two numbers are randomly drawn at the same time from six cards numbered $1$, $2$, $3$, $4$, $5$ and $6$ respectively. Find the probability that the product of the numbers drawn is not less than $12$.
<div class="q-mcopt">
A.\t$\\dfrac{1}{3}$<br>
B.\t$\\dfrac{2}{3}$<br>
C.\t$\\dfrac{7}{15}$<br>
D.\t$\\dfrac{8}{15}$
</div>`
        },
        hint: {
          tc: `列出所有組合後計算符合條件的數目。`,
          en: `List all combinations and then count the number that satisfy the condition.`
        },

        solution: `C (60%)<p><iframe src="https://www.youtube.com/embed/bLxJeo-cmB4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q29",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 1,
        content: {
          tc: `下面的框線圖顯示一群小童在某遊戲中所獲代幣的數目的分佈。 若該分佈的分佈域為其四分位數間距的三倍，求 $m$。<img src="img/2024dsep2q29zh.jpg" class="q-img" alt="題目附圖" style="max-width: 75%;"><div class="q-mcopt">
A.\t$248$<br>
B.\t$275$<br>
C.\t$336$<br>
D.\t$360$
</div>`,
          en: `The box-and-whisker diagram below shows the distribution of the numbers of tokens got by a group of children in a game. If the range of the distribution is the triple of its inter-quartile range, find $m$.<img src="img/2024dsep2q29zh.jpg" class="q-img" alt="題目附圖" style="max-width: 75%;"><div class="q-mcopt">
A.\t$248$<br>
B.\t$275$<br>
C.\t$336$<br>
D.\t$360$
</div>`
        },
        hint: {
          tc: `由框線圖讀取 $Q_1$、$Q_3$ 及分佈域。`,
          en: `Read $Q_1$, $Q_3$ and the range from the box-and-whisker diagram.`
        },

        solution: `B (87%)<p><iframe src="https://www.youtube.com/embed/CZNcYve-uIA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q30",
        year: 2024,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 2,
        content: {
          tc: `考慮以下正整數：<div style="text-align: center;">$5$　$5$　$5$　$6$　$9$　$9$　$11$　$13$　$m$　$n$</div>設 $p$ 、 $q$ 及 $r$ 分別為以上正整數的標準差、眾數及中位數。 若以上正整數的平均值為 $7$，則下列何者必為正確？
<div class="q-mcms">
I.\t$p>3$
II.\t$q=5$
III.\t$r<7$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
          en: `Consider the following positive integers:<div style="text-align: center;">$5$　$5$　$5$　$6$　$9$　$9$　$11$　$13$　$m$　$n$</div>Let $p$, $q$ and $r$ be the standard deviation, the mode and the median of the above positive integers respectively. If the mean of the above positive integers is $7$, which of the following must be true?
<div class="q-mcms">
I.\t$p>3$
II.\t$q=5$
III.\t$r<7$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
          tc: `由平均值求 $m+n$，再判斷眾數及中位數。`,
          en: `Find $m+n$ from the mean, then determine the mode and the median.`
        },

        solution: `D (55%)<p><iframe src="https://www.youtube.com/embed/gx7qUCN0ucM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q31",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["H.C.F. and L.C.M."],
        difficulty: 1,
        content: {
          tc: `$u^2v^3w$ 、 $u^3vw^2$  及  $u^2v^3w^4$  的 H.C.F. 為
<div class="q-mcopt">
A.\t$uvw$。<br>
B.\t$u^2vw$。<br>
C.\t$u^2v^3w^4$。<br>
D.\t$u^3v^3w^4$。
</div>`,
          en: `The H.C.F. of $u^2v^3w$, $u^3vw^2$ and $u^2v^3w^4$ is
<div class="q-mcopt">
A.\t$uvw$.<br>
B.\t$u^2vw$.<br>
C.\t$u^2v^3w^4$.<br>
D.\t$u^3v^3w^4$.
</div>`
        },
        hint: {
          tc: `取各變數的最低次冪。`,
          en: `Take the lowest power of each variable.`
        },

        solution: `B (71%)<p><iframe src="https://www.youtube.com/embed/v3asPUp_Cic?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q32",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: {
          tc: `<div style="color: red;">$\\text{AF000000000BC}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.\t$175 \\times 16^{11} + 188$。<br>
B.\t$192 \\times 16^{11} + 205$。<br>
C.\t$175 \\times 16^{12} + 188$。<br>
D.\t$192 \\times 16^{12} + 205$。
</div>`,
          en: `<div style="color: red;">$\\text{AF000000000BC}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.\t$175 \\times 16^{11} + 188$.<br>
B.\t$192 \\times 16^{11} + 205$.<br>
C.\t$175 \\times 16^{12} + 188$.<br>
D.\t$192 \\times 16^{12} + 205$.
</div>`
        },
        hint: {
          tc: `將十六進制最高位及最低位轉成十進制。`,
          en: `Convert the highest and lowest digits of the hexadecimal number to decimal.`
        },

        solution: `A (63%)<p><iframe src="https://www.youtube.com/embed/VJF0NVpVke8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q33",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
          tc: `若  $x = \\log_2 y - 2$  及  $(\\log_2 y)^2 = 5 \\log_2 y + x - 7$ ，則 $y =$
<div class="q-mcopt">
A.\t$1$。<br>
B.\t$8$。<br>
C.\t$1$  或  $3$。<br>
D.\t$3$  或  $8$。
</div>`,
          en: `If $x = \\log_2 y - 2$ and $(\\log_2 y)^2 = 5 \\log_2 y + x - 7$, then $y =$
<div class="q-mcopt">
A.\t$1$.<br>
B.\t$8$.<br>
C.\t$1$ or $3$.<br>
D.\t$3$ or $8$.
</div>`
        },
        hint: {
          tc: `設 $t=\\log_2 y$ 後解二次方程。`,
          en: `Let $t=\\log_2 y$ and then solve the quadratic equation.`
        },

        solution: `B (48%)<p><iframe src="https://www.youtube.com/embed/RsBB7jQCd_M?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q34",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
          tc: `圖中的圖像顯示 $y^3$ 與 $\\sqrt{x}$ 之間的線性關係。 若 $x=36$，則 $y=$
<div class="q-mcopt"><img src="img/2024dsep2q34.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px;">
A.\t$-64$。<br>
B.\t$-16$。<br>
C.\t$-8$。<br>
D.\t$-4$。
</div><div style="clear: both;"></div>`,
          en: `The graph in the figure shows the linear relation between $y^3$ and $\\sqrt{x}$. If $x=36$, then $y=$
<div class="q-mcopt"><img src="img/2024dsep2q34.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px;">
A.\t$-64$.<br>
B.\t$-16$.<br>
C.\t$-8$.<br>
D.\t$-4$.
</div><div style="clear: both;"></div>`
        },
        hint: {
          tc: `由圖像讀取斜率及截距後代入。`,
          en: `Read the slope and intercept from the graph and then substitute.`
        },

        solution: `D (54%)<p><iframe src="https://www.youtube.com/embed/VAAcs8bWCzo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q35",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: {
          tc: `設 $z=(a-5)i+\\dfrac{(a+2)i}{2+i}$。 若 $a$ 及 $z$ 均為實數，則 $a-z=$
<div class="q-mcopt">
A.\t$2$。<br>
B.\t$3$。<br>
C.\t$4$。<br>
D.\t$5$。
</div>`,
          en: `Let $z=(a-5)i+\\dfrac{(a+2)i}{2+i}$. If $a$ and $z$ are real numbers, then $a-z=$
<div class="q-mcopt">
A.\t$2$.<br>
B.\t$3$.<br>
C.\t$4$.<br>
D.\t$5$.
</div>`
        },
        hint: {
          tc: `先化簡分母，令虛部為零求 $a$。`,
          en: `First simplify the denominator and set the imaginary part to zero to find $a$.`
        },

        solution: `A (34%)<p><iframe src="https://www.youtube.com/embed/QRMNSNdDV7I?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q36",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: {
          tc: `某數列的首 $n$ 項之和為 $n(2n+3)$。 下列何者正確？
<div class="q-mcms">
I.\t$14$ 為該數列的其中一項。
II.\t該數列的第 $n$ 項為 $4n+1$。
III.\t該數列為一等差數列。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
          en: `The sum of the first $n$ terms of a sequence is $n(2n+3)$. Which of the following are true?
<div class="q-mcms">
I.\t$14$ is a term of the sequence.
II.\tThe $n$th term of the sequence is $4n+1$.
III.\tThe sequence is an arithmetic sequence.
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
          tc: `由 $S_n$ 求通項 $a_n$。`,
          en: `Find the general term $a_n$ from $S_n$.`
        },

        solution: `C (45%)<p><iframe src="https://www.youtube.com/embed/HoR9AkaH0BE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q37",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: {
          tc: `考慮以下的不等式組：<br>
\t$\\begin{cases}
x - 2y \\le 1 \\\\[1.2ex]
x + 4y \\le 13 \\\\[1.2ex]
2x - y \\ge -1
\\end{cases}$<br>
設 $R$ 為表示以上的不等式組的解之區域。 求常數 $c$ 使得 $5x - 2y + c$ 的最小值為 $22$，其中 $(x, y)$ 為 $R$ 中的一點。
<div class="q-mcopt">
A.\t$1$<br>
B.\t$23$<br>
C.\t$25$<br>
D.\t$29$
</div>`,
          en: `Consider the following system of inequalities:<br>
\t$\\begin{cases}
x - 2y \\le 1 \\\\[1.2ex]
x + 4y \\le 13 \\\\[1.2ex]
2x - y \\ge -1
\\end{cases}$<br>
Let $R$ be the region which represents the solution of the above system of inequalities. Find the constant $c$ such that the least value of $5x - 2y + c$ is $22$, where $(x, y)$ is a point lying in $R$.
<div class="q-mcopt">
A.\t$1$<br>
B.\t$23$<br>
C.\t$25$<br>
D.\t$29$
</div>`
        },
        hint: {
          tc: `找出可行域頂點並代入目標函數。`,
          en: `Find the vertices of the feasible region and substitute into the objective function.`
        },

        solution: `C (41%)<p><iframe src="https://www.youtube.com/embed/79nF8DRhhgk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q38",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
          tc: `圖中，$TA$ 為圓 $ABCDE$ 在點 $A$ 的切線。 $BC$ 的延線與 $ED$ 的延線相交於點 $P$。 若 $\\angle ACB = 43^\\circ$、$\\angle DAT = 55^\\circ$ 及 $\\angle CPD = 29^\\circ$，則 $\\angle CBE =$
<div class="q-mcopt"><img src="img/2024dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 70%; margin-left: 15px; margin-bottom: 5px;">
A.\t$64^\\circ$。<br>
B.\t$69^\\circ$。<br>
C.\t$72^\\circ$。<br>
D.\t$78^\\circ$。
</div><div style="clear: both;"></div>`,
          en: `In the figure, $TA$ is the tangent to the circle $ABCDE$ at the point $A$. $BC$ produced and $ED$ produced meet at the point $P$. If $\\angle ACB = 43^\\circ$, $\\angle DAT = 55^\\circ$ and $\\angle CPD = 29^\\circ$, then $\\angle CBE =$
<div class="q-mcopt"><img src="img/2024dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 70%; margin-left: 15px; margin-bottom: 5px;">
A.\t$64^\\circ$.<br>
B.\t$69^\\circ$.<br>
C.\t$72^\\circ$.<br>
D.\t$78^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
          tc: `利用切線與弦的夾角及圓周角性質。`,
          en: `Use the angle between the tangent and the chord and the properties of inscribed angles.`
        },

        solution: `B (47%)<p><iframe src="https://www.youtube.com/embed/9AnLOSFXL2Q?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q39",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: {
          tc: `當 $0^\\circ < \\theta \\le 360^\\circ$ 時，方程 $4\\cos^2\\theta - 3\\cos\\theta - 1 = 0$ 有多少個根？
<div class="q-mcopt">
A.\t$3$<br>
B.\t$4$<br>
C.\t$5$<br>
D.\t$6$
</div>`,
          en: `For $0^\\circ < \\theta \\le 360^\\circ$, how many roots does the equation $4\\cos^2\\theta - 3\\cos\\theta - 1 = 0$ have?
<div class="q-mcopt">
A.\t$3$<br>
B.\t$4$<br>
C.\t$5$<br>
D.\t$6$
</div>`
        },
        hint: {
          tc: `因式分解後考慮 $\\cos\\theta$ 的範圍。`,
          en: `Factorise and then consider the range of $\\cos\\theta$.`
        },

        solution: `A (49%)<p><iframe src="https://www.youtube.com/embed/XWo3iBmri2k?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q40",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 2,
        content: {
          tc: `圖中，四面體 $PQRS$ 的底 $PQR$ 在水平地面上。 已知 $Q$ 鉛垂於 $S$ 之下。 若 $\\angle PQR = 90^\\circ$ 、 $\\angle QPS = 30^\\circ$ 及 $\\angle QRS = 45^\\circ$，則 $\\cos \\angle PRS =$
<div class="q-mcopt"><img src="img/2024dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px;">
A.\t$\\dfrac{1}{2}$。<br>
B.\t$\\dfrac{3}{4}$。<br>
C.\t$\\dfrac{\\sqrt{2}}{4}$。<br>
D.\t$\\dfrac{\\sqrt{3}}{6}$。
</div><div style="clear: both;"></div>`,
          en: `In the figure, the base $PQR$ of the tetrahedron $PQRS$ lies on the horizontal ground. It is given that $Q$ is vertically below $S$. If $\\angle PQR = 90^\\circ$, $\\angle QPS = 30^\\circ$ and $\\angle QRS = 45^\\circ$, then $\\cos \\angle PRS =$
<div class="q-mcopt"><img src="img/2024dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px;">
A.\t$\\dfrac{1}{2}$.<br>
B.\t$\\dfrac{3}{4}$.<br>
C.\t$\\dfrac{\\sqrt{2}}{4}$.<br>
D.\t$\\dfrac{\\sqrt{3}}{6}$.
</div><div style="clear: both;"></div>`
        },
        hint: {
          tc: `設邊長並用餘弦定理。`,
          en: `Assume side lengths and use the cosine rule.`
        },

        solution: `C (46%)<p><iframe src="https://www.youtube.com/embed/CAbNQ9NFSDw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q41",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Four Centres of a Triangle"],
        difficulty: 3,
        content: {
          tc: `設 $G$ 、 $H$ 、 $I$ 及 $J$ 分別為 $\\Delta PQR$ 的形心、垂心、內心及外心。 若 $\\angle PQR = \\angle PRQ = 22^\\circ$，則下列何者正確？
<div class="q-mcms">
I.\t$G$ 位於 $\\Delta PQR$ 以內。
II.\t$H$ 位於 $\\Delta PQR$ 以外。
III.\t$I$、$J$ 與 $Q$ 共線。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
          en: `Let $G$, $H$, $I$ and $J$ be the centroid, the orthocentre, the in-centre and the circumcentre of $\\Delta PQR$ respectively. If $\\angle PQR = \\angle PRQ = 22^\\circ$, which of the following are true?
<div class="q-mcms">
I.\t$G$ lies inside $\\Delta PQR$.
II.\t$H$ lies outside $\\Delta PQR$.
III.\t$I$, $J$ and $Q$ are collinear.
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
          tc: `先判斷三角形類型（銳角／鈍角）。`,
          en: `First determine the type of the triangle (acute / obtuse).`
        },

        solution: `A (27%)<p><iframe src="https://www.youtube.com/embed/FtE_C9o5-gI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q42",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: {
          tc: `2 名經理與 7 名主任排成一隊。 若沒有經理相鄰而排，則可排成多少不同的隊？
<div class="q-mcopt">
A.\t$80~640$<br>
B.\t$141~120$<br>
C.\t$282~240$<br>
D.\t$362~880$
</div>`,
          en: `A queue is formed by 2 managers and 7 officers. If no managers are next to each other, how many different queues can be formed?
<div class="q-mcopt">
A.\t$80~640$<br>
B.\t$141~120$<br>
C.\t$282~240$<br>
D.\t$362~880$
</div>`
        },
        hint: {
          tc: `先排主任再插入經理的空位。`,
          en: `First arrange the officers and then insert the managers into the gaps.`
        },

        solution: `C (66%)<p><iframe src="https://www.youtube.com/embed/1Pon94qbLI0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q43",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
          tc: `某測驗共設三題。 某學生答對第一題、答對第二題及答對第三題的概率分別為 $0.6$、$0.7$ 及 $0.8$。 求該學生在這測驗中答對至少 $1$ 題的概率。
<div class="q-mcopt">
A.\t$0.024$<br>
B.\t$0.188$<br>
C.\t$0.812$<br>
D.\t$0.976$
</div>`,
          en: `There are three questions in a test. The probabilities that a student answers the first question correctly, the second question correctly and the third question correctly are $0.6$, $0.7$ and $0.8$ respectively. Find the probability that the student answers at least $1$ question correctly in this test.
<div class="q-mcopt">
A.\t$0.024$<br>
B.\t$0.188$<br>
C.\t$0.812$<br>
D.\t$0.976$
</div>`
        },
        hint: {
          tc: `用 $1$ 減去全部答錯的概率。`,
          en: `Use $1$ minus the probability of answering all questions incorrectly.`
        },

        solution: `D (59%)<p><iframe src="https://www.youtube.com/embed/RzU_RsqRcGs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q44",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 1,
        content: {
          tc: `在某考試，考生的得分（以分為單位）如下：<div style="text-align: center;">$39$　$10$　$13$　$16$　$17$　$19$　$25$　$26$　$28$　$30$　$30$　$32$</div>下列何者正確？
<div class="q-mcms">
I.\t該些考生的考試得分的中位數為 $22$ 分。
II.\t每名考生在該考試的標準分均低於 $2$。
III.\t該些考生的考試得分的標準差超過 $8$ 分。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
          en: `In an examination, the scores (in marks) of the candidates are as follows:<div style="text-align: center;">$39$　$10$　$13$　$16$　$17$　$19$　$25$　$26$　$28$　$30$　$30$　$32$</div>Which of the following is/are true?
<div class="q-mcms">
I.\tThe median of the examination scores of the candidates is $22$ marks.
II.\tThe standard score of each candidate in the examination is lower than $2$.
III.\tThe standard deviation of the examination scores of the candidates exceeds $8$ marks.
</div>
<div class="q-mcopt">
A.\tI only<br>
B.\tII only<br>
C.\tI and III only<br>
D.\tII and III only
</div>`
        },
        hint: {
          tc: `先求中位數、平均值及標準差。`,
          en: `First find the median, the mean and the standard deviation.`
        },

        solution: `D (73%)<p><iframe src="https://www.youtube.com/embed/z5UkvirIFb8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2024-DSE-MATH-CP2-Q45",
        year: 2024,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: {
          tc: `若七個數 $x_1$、$x_2$、$x_3$、$x_4$、$x_5$、$x_6$ 及 $x_7$ 的方差為 $16$，則  $9x_1 - 5$ 、 $9x_2 - 5$ 、 $9x_3 - 5$ 、 $9x_4 - 5$ 、 $9x_5 - 5$ 、 $9x_6 - 5$  及  $9x_7 - 5$  這七個數的標準差為
<div class="q-mcopt">
A.\t$31$。<br>
B.\t$36$。<br>
C.\t$139$。<br>
D.\t$144$。
</div>`,
          en: `If the variance of the seven numbers $x_1$, $x_2$, $x_3$, $x_4$, $x_5$, $x_6$ and $x_7$ is $16$, then the standard deviation of the seven numbers $9x_1 - 5$, $9x_2 - 5$, $9x_3 - 5$, $9x_4 - 5$, $9x_5 - 5$, $9x_6 - 5$ and $9x_7 - 5$ is
<div class="q-mcopt">
A.\t$31$.<br>
B.\t$36$.<br>
C.\t$139$.<br>
D.\t$144$.
</div>`
        },
        hint: {
          tc: `方差乘以 $9^2$，標準差再乘 $9$。`,
          en: `The variance is multiplied by $9^2$, then the standard deviation is multiplied by $9$.`
        },

        solution: `B (53%)<p><iframe src="https://www.youtube.com/embed/oIMlG5cWnik?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
);
