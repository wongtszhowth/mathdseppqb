// 2022dsep1.js
// 嚴格遵照原始擷取文字（包含所有斷句、標點、漏字與原有排版），生成完整 js 檔

questions.push(
    {
        id: "2022-DSE-MATH-CP1-Q01",
        year: 2022,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `化簡 $\\dfrac{(a^3b^{-2})^4}{a^{-5}b^6}$ ，並以正指數表示答案。<span class="marks">(3分)</span>`,
            en: `Simplify $\\dfrac{(a^3b^{-2})^4}{a^{-5}b^6}$ and express your answer with positive indices.<span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `先利用指數定律 $(x^m)^n = x^{mn}$ 展開分子，再利用 $x^m \\div x^n = x^{m-n}$ 化簡，最後處理負指數。`,
            en: `Expand the numerator using the index law $(x^m)^n = x^{mn}$, then simplify it using $x^m \\div x^n = x^{m-n}$, and finally handle the negative index.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{(a^3b^{-2})^4}{a^{-5}b^6}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{a^{12}b^{-8}}{a^{-5}b^6}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{a^{12+5}}{b^{6+8}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{a^{17}}{b^{14}}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2022-DSE-MATH-CP1-Q02",
        year: 2022,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: {
            tc: `設 $x$ 及 $y$ 為兩數。 $x$ 與 $y$ 之和為 456 而 7 與 $x$ 之積為 $y$。 求 $x$。<span class="marks">(3分)</span>`,
            en: `Let $x$ and $y$ be two numbers. The sum of $x$ and $y$ is 456 while the product of 7 and $x$ is $y$. Find $x$.<span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `根據題目條件列出聯立方程： $x + y = 456$ 及 $7x = y$。然後將第二式代入第一式求解 $x$。`,
            en: `Set up a system of linear equations based on the given conditions: $x + y = 456$ and $7x = y$. Then substitute the second equation into the first equation to solve for $x$.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">留意  $x+y=456$  及  $7x=y$ 。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得 $x+7x=456$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">求解後，可得 $x=57$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>    $x$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{456}{1+7}$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=57$</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">Note that  $x+y=456$  and  $7x=y$ .</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">So, we have $x+7x=456$.</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">Solving, we have $x=57$.</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">Alternative Solution:</span><br>    $x$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{456}{1+7}$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=57$</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q03",
        year: 2022,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 1,
        content: {
            tc: `化簡 $\\dfrac{3}{k-9} + \\dfrac{2}{5k+6}$。<span class="marks">(3分)</span>`,
            en: `Simplify $\\dfrac{3}{k-9} + \\dfrac{2}{5k+6}$.<span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `先進行通分，分母化為 $(k-9)(5k+6)$，然後展開分子並合併同類項。`,
            en: `Find a common denominator $(k-9)(5k+6)$, then expand the numerator and combine like terms.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{3}{k-9}+\\dfrac{2}{5k+6}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{3(5k+6)+2(k-9)}{(k-9)(5k+6)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{15k+18+2k-18}{(k-9)(5k+6)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{17k}{(k-9)(5k+6)}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2022-DSE-MATH-CP1-Q04",
        year: 2022,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `因式分解<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$9c^2 - 6c + 1$ ，<span class="marks">(1分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$(4c + d)^2 - 9c^2 + 6c - 1$ 。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Factorize<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$9c^2 - 6c + 1$,<span class="marks">(1 mark)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$(4c + d)^2 - 9c^2 + 6c - 1$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 利用完全平方公式 $a^2 - 2ab + b^2 = (a-b)^2$ 進行分解。<br>(b) 先將後三項提取負號，使其呈現出 (a) 的結構，再利用平方差公式 $x^2 - y^2 = (x-y)(x+y)$ 分解。`,
            en: `(a) Factorize using the perfect square identity $a^2 - 2ab + b^2 = (a-b)^2$.<br>(b) Factor out a negative sign from the last three terms to rewrite it in the form of (a), then factorize using the difference of two squares identity $x^2 - y^2 = (x-y)(x+y)$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $9c^2-6c+1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(3c-1)^2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $(4c+d)^2-9c^2+6c-1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(4c+d)^2-(9c^2-6c+1)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(4c+d)^2-(3c-1)^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(4c+d+3c-1)(4c+d-(3c-1))$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(7c+d-1)(c+d+1)$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2022-DSE-MATH-CP1-Q05",
        year: 2022,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: {
            tc: `某風扇以其標價七折售出。 售出該風扇後，盈利為 \\$78 且盈利百分率為 26%。 求該風扇的標價。<span class="marks">(4分)</span>`,
            en: `A fan is sold at a discount of 30% on its marked price. After selling the fan, the profit is \\$78 and the percentage profit is 26%. Find the marked price of the fan.<span class="marks">(4 marks)</span>`
        },
        hint: {
            tc: `先利用「盈利 = 成本 $\\times$ 盈利百分率」求出成本，再找出售價（成本 + 盈利），最後利用「售價 = 標價 $\\times 0.7$」求標價。`,
            en: `Use "Profit = Cost $\\times$ Percentage profit" to find the cost, then find the selling price (Cost + Profit), and finally use "Selling price = Marked price $\\times (1 - 30\\%)$" to calculate the marked price.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $\\$x$ 為該風扇的成本。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$(26\\%)x=78$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=\\dfrac{78}{0.26}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=300$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    該風扇的售價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=300+78$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$378$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">設 $\\$y$ 為該風扇的標價。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$(70\\%)y=378$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=\\dfrac{378}{0.7}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=540$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該風扇的標價為 $\\$540$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>    該風扇的標價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{(78)(1+26\\%)}{(26\\%)(70\\%)}$</div><div class="ms-mark">1M+1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$540$</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">Let $\\$x$ be the cost of the fan.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$(26\\%)x=78$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=\\dfrac{78}{0.26}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=300$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    Selling price of the fan</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=300+78$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$378$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">Let $\\$y$ be the marked price of the fan.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$(70\\%)y=378$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=\\dfrac{378}{0.7}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=540$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">Thus, the marked price of the fan is $\\$540$.</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">Alternative Solution:</span><br>    Marked price of the fan</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{(78)(1+26\\%)}{(26\\%)(70\\%)}$</div><div class="ms-mark">1M+1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$540$</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q06",
        year: 2022,
        type: "P1",
        section: "A1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: {
            tc: `考慮複合不等式<br><div style="text-align: center;">$-2(3x+2) > x+10$  或  $2x \\le -8$  ...............(*)。</div><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">解 (*)。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出滿足 (*) 的最大整數。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Consider the compound inequality<br><div style="text-align: center;">$-2(3x+2) > x+10$ or $2x \\le -8$ ...............(*).</div><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Solve (*).<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Write down the greatest integer satisfying (*).<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 分別解兩個不等式，然後取聯集。<br>(b) 在解集中找出最大的整數。`,
            en: `(a) Solve the two inequalities separately, then find their union.<br>(b) Find the largest integer within the solution set.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$-2(3x+2)&gt;x+10$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-6x-4&gt;x+10$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-6x-x&gt;10+4$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-7x&gt;14$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x&lt;-2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$2x\\le -8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x\\le -4$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">因此，我們有  $x&lt;-2$  或  $x\\le -4$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，(*) 的解為 $x&lt;-2$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$-3$</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$-2(3x+2)&gt;x+10$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-6x-4&gt;x+10$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-6x-x&gt;10+4$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-7x&gt;14$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x&lt;-2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$2x\\le -8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x\\le -4$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">So, we have  $x&lt;-2$  or  $x\\le -4$ .</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Thus, the solution of (*) is $x&lt;-2$.</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$-3$</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q07",
        year: 2022,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 1,
        content: {
            tc: `點 $S$ 及點 $T$ 的坐標分別為 $(12, -5)$ 及 $(-3, -7)$。 $S$ 繞 $O$ 逆時針方向旋轉 $90^\\circ$ 至 $S'$，其中 $O$ 為原點。 $T'$ 為 $T$ 對 $x$ 軸的反射影像。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $S'$ 及 $T'$ 的坐標。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $S'T'$ 的斜率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The coordinates of the points $S$ and $T$ are $(12, -5)$ and $(-3, -7)$ respectively. $S$ is rotated anticlockwise about $O$ through $90^\\circ$ to $S'$, where $O$ is the origin. $T'$ is the reflection image of $T$ with respect to the $x$-axis.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Write down the coordinates of $S'$ and $T'$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Find the slope of $S'T'$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 旋轉 $90^\\circ$ 規則：$(x,y) \\rightarrow (-y,x)$；對 $x$ 軸反射規則：$(x,y) \\rightarrow (x,-y)$。<br>(b) 利用斜率公式 $m = \\dfrac{y_2-y_1}{x_2-x_1}$ 計算。`,
            en: `(a) Rule for rotation through $90^\circ$ anticlockwise: $(x,y) \\rightarrow (-y,x)$; rule for reflection in the $x$-axis: $(x,y) \\rightarrow (x,-y)$.<br>(b) Use the slope formula $m = \\dfrac{y_2-y_1}{x_2-x_1}$ to calculate.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$S'$ 的坐標為 $(5,12)$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$T'$ 的坐標為 $(-3,7)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $S'T'$ 的斜率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{12-7}{5-(-3)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{8}$</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">The coordinates of $S'$ are $(5,12)$.</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">The coordinates of $T'$ are $(-3,7)$.</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    The slope of $S'T'$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{12-7}{5-(-3)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{8}$</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q08",
        year: 2022,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$A$ 是位於四邊形 $BCDE$ 以內的一點使得 $AC // ED$ 及 $AD // BC$。 已知 $\\angle ABC = \\angle AED$ 及 $AB = AE$。<br><img src="img/2022dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ABC \\cong \\Delta AED$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若 $\\angle ABC = 39^\\circ$ 及 $\\angle DAE = 87^\\circ$，求 $\\angle ACD$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `In the figure, $A$ is a point lying inside the quadrilateral $BCDE$ such that $AC // ED$ and $AD // BC$. It is given that $\\angle ABC = \\angle AED$ and $AB = AE$.<br><img src="img/2022dsep1q08.jpg" class="q-img" alt="Figure 1" style="max-width: 70%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Prove that $\\Delta ABC \\cong \\Delta AED$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">If $\\angle ABC = 39^\\circ$ and $\\angle DAE = 87^\\circ$, find $\\angle ACD$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 利用平行線性質證明對應角相等，再配合 $AB=AE$ 及已知角相等，用 AAS 或 ASA 證明全等。<br>(b) 由全等得對應角相等，再在 $\\triangle ACD$ 中求所需角。`,
            en: `(a) Use parallel line properties to prove corresponding angles are equal, then combine with $AB=AE$ and the given equal angles to prove congruence using AAS or ASA.<br>(b) Use the corresponding angles and sides from congruent triangles to find the required angle in $\\triangle ACD$.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row" style="white-space: pre; overflow-x: visible; overflow-y: visible;"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2" style="white-space: pre; overflow-x: visible; overflow-y: visible; grid-column: 2 / 6;">$\\angle ACB=\\angle CAD$\t[(內)錯角，$AD // BC$]<br>$\\angle CAD=\\angle ADE$\t[(內)錯角，$AC // ED$]<br>$\\angle ACB=\\angle ADE$<br>$\\angle ABC=\\angle AED$\t[已知]<br>$AB=AE$\t\t\t[已知]<br>$\\Delta ABC\\cong\\Delta AED$\t(AAS)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $\\angle BAC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\angle DAE$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=87^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle ACB$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-\\angle BAC-\\angle ABC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-87^\\circ-39^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=54^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle CAD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\angle ACB$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=54^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $AC=AD$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle ACD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\angle ADC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{180^\\circ-\\angle CAD}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{180^\\circ-54^\\circ}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=63^\\circ$</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row" style="white-space: pre; overflow-x: visible; overflow-y: visible;"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2" style="white-space: pre; overflow-x: visible; overflow-y: visible; grid-column: 2 / 6;">$\\angle ACB=\\angle CAD$\t[alt. $\\angle s$, $AD // BC$]<br>$\\angle CAD=\\angle ADE$\t[alt. $\\angle s$, $AC // ED$]<br>$\\angle ACB=\\angle ADE$<br>$\\angle ABC=\\angle AED$\t[given]<br>$AB=AE$\t\t\t[given]<br>$\\Delta ABC\\cong\\Delta AED$\t(AAS)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">Marking Scheme:<br>Case 1\tAny correct proof with correct reasons.<br>Case 2\tAny correct proof without correct reasons.</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $\\angle BAC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\angle DAE$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=87^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle ACB$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-\\angle BAC-\\angle ABC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-87^\\circ-39^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=54^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle CAD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\angle ACB$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=54^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Note that $AC=AD$.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle ACD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\angle ADC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{180^\\circ-\\angle CAD}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{180^\\circ-54^\\circ}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=63^\\circ$</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q09",
        year: 2022,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Central Tendency", "Probability"],
        difficulty: 1,
        content: {
            tc: `下面的頻數分佈表及累積頻數分佈表顯示一群學生完成一次 3 km 賽跑所需時間的分佈。        
<div class="q-text-content"><table class="q-table" style="float: left; margin-top: 12px; margin-bottom: 12px; margin-left: 3em; margin-right: auto; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 11em;">
      <col style="width: 4em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">所需時間 (分鐘)</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">頻數</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">10 – 14</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$a$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">15 – 19</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">9</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">20 – 24</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$b$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">25 – 29</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
    </tr></table><table class="q-table" style="float: right; margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: 3em; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 13em;">
      <col style="width: 6em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">所需時間少於 (分鐘)</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">累積頻數</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">14.5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">19.5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$x$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">24.5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$y$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">29.5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">20</td>
    </tr></table></div>
    <div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $x$ 的值。<span class="marks">(1分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求該分佈的平均值。<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">求從該群中隨機選出的一名學生完成該 3 km 賽跑所需時間少於 19.5 分鐘的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The frequency distribution table and the cumulative frequency distribution table below show the distribution of the times taken to complete a 3km race by a group of students.
<div class="q-text-content"><table class="q-table" style="float: left; margin-top: 12px; margin-bottom: 12px; margin-left: 3em; margin-right: auto; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 11em;">
      <col style="width: 7em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Time taken (minutes)</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Frequency</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">10 – 14</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$a$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">15 – 19</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">9</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">20 – 24</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$b$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">25 – 29</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
    </tr></table><table class="q-table" style="float: right; margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: 3em; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Time taken less than (minutes)</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Cumulative frequency</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">14.5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">19.5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$x$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">24.5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$y$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">29.5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">20</td>
    </tr></table></div>
    <div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Write down the value of $x$.<span class="marks">(1 mark)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Find the mean of the distribution.<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">Find the probability that the time taken to complete the 3km race by a randomly selected student from the group is less than 19.5 minutes.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 由表格對比可知，第一個組別的累積頻數為 3，故 $a = 3$。 $x$ 為前兩組頻數之和 ($a + 9$)。<br>(b) 總人數為 20，利用總數建立方程求出 $b$，再利用各組別的中點值（12, 17, 22, 27）計算加權平均數。<br>(c) 「少於 19.5 分鐘」的學生人數即為對應組別的累積頻數 $x$。概率為 $x / 20$。`,
            en: `(a) By comparing the tables, $a = 3$. $x$ is the cumulative frequency of the second class interval ($a + 9$).<br>(b) The total number of students is 20. Solve for $b$ using the total frequency, then calculate the mean using the class mid-marks (12, 17, 22, 27).<br>(c) The number of students taking less than 19.5 minutes is the cumulative frequency $x$. The required probability is $x / 20$.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">12</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">留意  $a=3$  及  $b=5$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    平均值</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{12(3)+17(9)+22(5)+27(3)}{20}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=19$ 分鐘</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{12}{20}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{3}{5}$</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">12</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">Note that  $a=3$  and  $b=5$ .</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    The mean</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{12(3)+17(9)+22(5)+27(3)}{20}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=19$ minutes</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">    The required probability</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{12}{20}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{3}{5}$</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q10",
        year: 2022,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations", "Quadratic Equations in One Unknown"],
        difficulty: 1,
        content: {
            tc: `已知 $\\mathrm{f}(x)$ 的一部分隨 $x^2$ 正變，而另一部分則隨 $x$ 正變。 假定 $\\mathrm{f}(4)=96$ 及 $\\mathrm{f}(-5)=15$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{f}(x)$。<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出 $y=8\\mathrm{f}(x)$ 的圖像的 $x$ 截距。<span class="marks">(1分)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">設 $k$ 為一實常數。 求 $k$ 值的範圍使得方程 $\\mathrm{f}(x)=k$ 有兩個相異的實根。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `It is given that $\\mathrm{f}(x)$ partly varies as $x^2$ and partly varies as $x$. Suppose that $\\mathrm{f}(4)=96$ and $\\mathrm{f}(-5)=15$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $\\mathrm{f}(x)$.<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Write down the $x$-intercept(s) of the graph of $y=8\\mathrm{f}(x)$.<span class="marks">(1 mark)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">Let $k$ be a real constant. Find the range of values of $k$ such that the equation $\\mathrm{f}(x)=k$ has two distinct real roots.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 根據題意設 $f(x) = Ax^2 + Bx$，代入 $f(4)=96$ 與 $f(-5)=15$ 組成聯立方程求解 $A$ 和 $B$。<br>(b) $x$ 截距即令 $y=0$ 的點。當 $8f(x)=0$ 時即為 $f(x)=0$，解二次方程即可。<br>(c) 方程 $Ax^2 + Bx - k = 0$ 有且只有一個實根，代表其判別式 $\\Delta = 0$。建立關於 $k$ 的一元一次方程求解。`,
            en: `(a) Let $f(x) = Ax^2 + Bx$. Substitute $f(4)=96$ and $f(-5)=15$ to set up a system of linear equations and solve for $A$ and $B$.<br>(b) The $x$-intercepts are found where $y=0$. Setting $8f(x)=0$ gives $f(x)=0$; solve this quadratic equation.<br>(c) For $f(x)=k$ to have two distinct real roots, the discriminant of $Ax^2 + Bx - k = 0$ must be greater than zero ($\Delta > 0$). Solve the inequality for $k$.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{f}(x)=ax^2+bx$，其中 $a$ 及 $b$ 均為非零常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $16a+4b=96$  及  $25a-5b=15$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $a=3$  及  $b=12$ 。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{f}(x)=3x^2+12x$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$y=8\\mathrm{f}(x)$ 的圖形的 $x$ 截距為  $0$  及  $-4$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">方程 $3x^2+12x-k=0$ 有兩個相異實根。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$12^2-4(3)(-k)&gt;0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k&gt;-12$</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">Let $\\mathrm{f}(x)=ax^2+bx$, where $a$ and $b$ are non-zero constants.</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">So, we have  $16a+4b=96$  and  $25a-5b=15$ .</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">Solving, we have  $a=3$  and  $b=12$ .</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">Therefore, we have $\\mathrm{f}(x)=3x^2+12x$.</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">The $x$-intercepts of the graph of $y=8\\mathrm{f}(x)$ are  $0$  and  $-4$ .</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">The equation $3x^2+12x-k=0$ has two distinct real roots.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$12^2-4(3)(-k)&gt;0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k&gt;-12$</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q11",
        year: 2022,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion", "Change of Data"],
        difficulty: 1,
        content: {
            tc: `下面的幹葉圖顯示某足球隊球員的年齡的分佈。
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
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">1</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">7　8　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">2</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　$a$　$a$　8　8　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$b$　$b$　5　5　6　6　6　6　7　8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3</td>
    </tr>    
  </table>
該分佈的四分位數間距及中位數分別為 14 及 31。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $a$ 及 $b$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某球員現退出該足球隊。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">該分佈的眾數有否因該球員退出而改變？ 試解釋你的答案。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">若該分佈的分佈域減小，求該分佈的最大可取標準差。</div></div><div class="q-text-content"><span class="marks">(4分)</span></div><div class="q-clearfix"></div>`,
            en: `The stem-and-leaf diagram below shows the distribution of the ages of the players of a football team.
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
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">1</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">7　8　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">2</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　$a$　$a$　8　8　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$b$　$b$　5　5　6　6　6　6　7　8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3</td>
    </tr>    
  </table>
The inter-quartile range and the median of the distribution are 14 and 31 respectively.<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $a$ and $b$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">A player now leaves the football team.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Is there any change in the mode of the distribution due to the leaving of the player? Explain your answer.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">If the range of the distribution is decreased, find the greatest possible standard deviation of the distribution.</div></div><div class="q-text-content"><span class="marks">(4 marks)</span></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 總人數為 20，中位數為第 10 及 11 項的平均 $=31$，故 $b=1$；再利用 IQR $=14$ 求 $a$。<br>(b) (i) 比較退出前後眾數出現次數。<br>(ii) 分佈域減小意味著最大或最小數據被移除，計算可能的最大標準差。`,
            en: `(a) Total number of data is 20. The median is the average of the 10th and 11th items $=31$, giving $b=1$. Then use IQR $=14$ to solve for $a$.<br>(b) (i) Compare the mode before and after the leaving of a player.<br>(ii) A decreased range implies that either the minimum or maximum value is removed. Calculate the standard deviation in both cases to find the greatest possible standard deviation.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$36-(20+a)=14$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$a=2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$30+b=31$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$b=1$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">原來的眾數 $=36$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">新的眾數 $=36$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，該分佈的眾數沒有改變。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">有兩種情況。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">情況 1：\t年齡 17 歲的球員離開足球隊。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">\t\t    該分佈的標準差</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">\t\t$\\approx 7.162537194$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">情況 2：\t年齡 43 歲的球員離開足球隊。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">\t\t    該分佈的標準差</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">\t\t$\\approx 7.132307207$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，該分佈的最大可能標準差為 7.16。</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$36-(20+a)=14$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$a=2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$30+b=31$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$b=1$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">The original mode $=36$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">The new mode $=36$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">Thus, there is no change in the mode of the distribution.</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">There are two cases.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">Case 1:\tThe player aged 17 leaves the football team.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">\t\t    The standard deviation of the distribution</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">\t\t$\\approx 7.162537194$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">Case 2:\tThe player aged 43 leaves the football team.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">\t\t    The standard deviation of the distribution</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">\t\t$\\approx 7.132307207$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">Thus, the greatest possible standard deviation of the distribution is 7.16.</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q12",
        year: 2022,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Pythagoras Theorem"],
        difficulty: 2,
        content: {
            tc: `圓 $C$ 的方程為 $x^2 + y^2 - 154x - 128y + 224 = 0$。 將 $C$ 的圓心記為 $G$。 點 $H$ 的坐標為 $(65, 48)$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $G$ 與 $H$ 間的距離。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $P$ 為 $C$ 上的一動點。 當 $\\Delta GHP$ 的面積最大時，</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">描述 $GH$ 與 $GP$ 之間的幾何關係；</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $\\Delta GHP$ 的周界。</div></div><div class="q-text-content"><span class="marks">(4分)</span></div><div class="q-clearfix"></div>`,
            en: `The equation of the circle $C$ is $x^2+y^2-154x-128y+224=0$. Denote the centre of $C$ by $G$. The coordinates of the point $H$ are $(65,48)$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the distance between $G$ and $H$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Let $P$ be a moving point on $C$. When the area of $\\Delta GHP$ is the greatest,</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">describe the geometric relationship between $GH$ and $GP$;</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">find the perimeter of $\\Delta GHP$.</div></div><div class="q-text-content"><span class="marks">(4 marks)</span></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 先求圓心 $G$ 坐標及半徑，再用距離公式。<br>(b) 面積最大時 $GP$ 垂直於 $GH$；周界為 $GH + 2r$。`,
            en: `(a) Find the coordinates of centre $G$, then apply the distance formula.<br>(b) The area is greatest when $GP$ is perpendicular to $GH$. Find $HP$ using Pythagoras' theorem and sum the lengths to find the perimeter.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $G$ 的坐標</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\left(\\dfrac{154}{2},\\dfrac{128}{2}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(77,64)$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $G$ 與 $H$ 的距離</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{(77-65)^2+(64-48)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=20$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$GH$ 垂直於 $GP$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">    $C$ 的半徑</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\sqrt{\\left(\\dfrac{154}{2}\\right)^2+\\left(\\dfrac{128}{2}\\right)^2-224}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=99$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">$HP^2=GH^2+GP^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$HP^2=20^2+99^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$HP=101$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    $\\Delta GHP$ 的周界</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=GH+GP+HP$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=20+99+101$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=220$</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    Coordinates of $G$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\left(\\dfrac{154}{2},\\dfrac{128}{2}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(77,64)$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    Distance between $G$ and $H$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{(77-65)^2+(64-48)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=20$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$GH$ is perpendicular to $GP$.</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">    Radius of $C$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\sqrt{\\left(\\dfrac{154}{2}\\right)^2+\\left(\\dfrac{128}{2}\\right)^2-224}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=99$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">$HP^2=GH^2+GP^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$HP^2=20^2+99^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$HP=101$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    Perimeter of $\\Delta GHP$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=GH+GP+HP$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=20+99+101$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=220$</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q13",
        year: 2022,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `現有兩實心金屬球體。 較小的球體的表面面積與較大的球體的表面面積之比為 $4:9$。 較大的球體的半徑為 $9\\text{ cm}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">以 $\\pi$ 表較小的球體的體積。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">把該兩球體熔化，並重鑄成兩實心直立圓錐體。 將該兩圓錐體記為 $A$ 及 $B$。 已知 $A$ 的高及底半徑分別為 $10\\text{ cm}$ 及 $6\\text{ cm}$。 某學生得知 $B$ 的底半徑為 $12\\text{ cm}$。 該學生宣稱 $A$ 與 $B$ 相似。 該宣稱是否正確？ 試解釋你的答案。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
            en: `There are two solid metal spheres. The ratio of the surface area of the smaller sphere to the surface area of the larger sphere is $4:9$. The radius of the larger sphere is $9\\text{ cm}$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Express, in terms of $\\pi$, the volume of the smaller sphere.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">The two spheres are melted and recast into two solid right circular cones. Denote these two circular cones by $A$ and $B$. It is given that the height and the base radius of $A$ are $10\\text{ cm}$ and $6\\text{ cm}$ respectively. A student finds that the base radius of $B$ is $12\\text{ cm}$. The student claims that $A$ and $B$ are similar. Is the claim correct? Explain your answer.<span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 表面積比 $= $ 半徑比的平方，求出小圓半徑後用體積公式。<br>(b) 先求兩球體積總和，再求 $B$ 的高，比較相似比。`,
            en: `(a) The ratio of surface areas equals the square of the ratio of radii. Find the radius of the smaller sphere, then calculate its volume.<br>(b) Calculate the total volume of the two spheres, deduce the volume of cone $B$, and compare the ratio of volumes with the cube of the ratio of base radii.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">較小球體的體積與較大球體的體積之比為 $8:27$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">    較小球體的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{4}{3}\\pi(9)^3\\left(\\dfrac{8}{27}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=288\\pi\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $A$ 的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}\\pi(6)^2(10)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=120\\pi\\text{ cm}^3$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $B$ 的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=288\\pi+\\dfrac{4}{3}\\pi(9)^3-120\\pi$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1\\,140\\pi\\text{ cm}^3$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\dfrac{B\\text{ 的體積}}{A\\text{ 的體積}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1\\,140\\pi}{120\\pi}$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{19}{2}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\left(\\dfrac{B\\text{ 的底半徑}}{A\\text{ 的底半徑}}\\right)^3$<br>$=\\left(\\dfrac{12}{6}\\right)^3$ ......<sup>@</sup><br>$=8$<br>$\\ne\\dfrac{19}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$A$ 與 $B$ 不相似。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">The ratio of the volume of the smaller sphere to the volume of the larger sphere is $8:27$.</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">    Volume of the smaller sphere</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{4}{3}\\pi(9)^3\\left(\\dfrac{8}{27}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=288\\pi\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    Volume of $A$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}\\pi(6)^2(10)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=120\\pi\\text{ cm}^3$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    Volume of $B$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=288\\pi+\\dfrac{4}{3}\\pi(9)^3-120\\pi$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1\\,140\\pi\\text{ cm}^3$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\dfrac{\\text{Volume of } B}{\\text{Volume of } A}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1\\,140\\pi}{120\\pi}$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{19}{2}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\left(\\dfrac{\\text{Base radius of } B}{\\text{Base radius of } A}\\right)^3$<br>$=\\left(\\dfrac{12}{6}\\right)^3$ ......<sup>@</sup><br>$=8$<br>$\\ne\\dfrac{19}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">So, $A$ and $B$ are not similar.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Thus, the claim is not correct.</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q14",
        year: 2022,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Quadratic Equations in One Unknown", "Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: {
            tc: `設 $\\mathrm{p}(x)=2x^{3}+ax^{2}+bx-20$，其中 $a$ 及 $b$ 均為常數。 當 $\\mathrm{p}(x)$ 除以 $x^2-2x+3$ 時，餘式為 $x+13$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $a$ 及 $b$。<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$x-5$ 是否 $\\mathrm{p}(x)$ 的因式？ 試解釋你的答案。<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">某人宣稱方程 $\\mathrm{p}(x)=0$ 有兩個無理根。 你是否同意？ 試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Let $\\mathrm{p}(x)=2x^{3}+ax^{2}+bx-20$, where $a$ and $b$ are constants. When $\\mathrm{p}(x)$ is divided by $x^2-2x+3$, the remainder is $x+13$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $a$ and $b$.<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Is $x-5$ a factor of $\\mathrm{p}(x)$? Explain your answer.<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">Someone claims that the equation $\\mathrm{p}(x)=0$ has two irrational roots. Do you agree? Explain your answer.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 利用多項式長除法將 $p(x)$ 除以 $x^2-2x+3$，並將最後得到的餘式與 $x+13$ 的對應項係數進行比較，建立聯立方程求解 $a$ 與 $b$。<br>(b) 將 (a) 的答案代入 $p(x)$，計算 $p(5)$ 的值。若 $p(5)=0$，則 $x-5$ 是因式；否則不是。<br>(c) 利用因式定理將 $p(x)$ 寫成 $(x-5)(2x^2+mx+n)$ 的形式，再利用判別式 $\\Delta$ 及求根公式檢查剩餘二次方程的根是否為無理數。`,
            en: `(a) Express $p(x)$ as $(mx+n)(x^2-2x+3) + x + 13$, expand and compare coefficients to find $a$ and $b$.<br>(b) Evaluate $p(5)$. If $p(5)=0$, then $x-5$ is a factor; otherwise it is not.<br>(c) Factorize $p(x)=0$ into $(x-5)(2x^2+mx+n)=0$. Check the discriminant $\\Delta$ of the quadratic factor to determine whether it has real/irrational roots.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{p}(x)=(mx+n)(x^2-2x+3)+x+13$，其中 $m$ 及 $n$ 為常數。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{p}(x)=mx^3+(n-2m)x^2+(3m-2n+1)x+3n+13$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $m=2$  及  $3n+13=-20$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $m=2$  及  $n=-11$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{p}(x)=2x^3-15x^2+29x-20$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $a=-15$  及  $b=29$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $\\mathrm{p}(5)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2(5)^3-15(5)^2+29(5)-20$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$x-5$ 為 $\\mathrm{p}(x)$ 的因式。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">$\\mathrm{p}(x)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(x-5)(2x^2-5x+4)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x-5=0$  或  $2x^2-5x+4=0$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $(-5)^2-4(2)(4)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=-7$<br>$&lt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，二次方程 $2x^2-5x+4=0$ 沒有實根。<br>因此，二次方程 $2x^2-5x+4=0$ 沒有無理根。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $5$ 不是無理數。<br>因此，方程 $\\mathrm{p}(x)=0$ 沒有無理根。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，不同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">Let $\\mathrm{p}(x)=(mx+n)(x^2-2x+3)+x+13$, where $m$ and $n$ are constants.</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">So, we have $\\mathrm{p}(x)=mx^3+(n-2m)x^2+(3m-2n+1)x+3n+13$.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Thus, we have  $m=2$  and  $3n+13=-20$ .</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">Solving, we have  $m=2$  and  $n=-11$ .</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Therefore, we have $\\mathrm{p}(x)=2x^3-15x^2+29x-20$.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Thus, we have  $a=-15$  and  $b=29$ .</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $\\mathrm{p}(5)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2(5)^3-15(5)^2+29(5)-20$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Thus, $x-5$ is a factor of $\\mathrm{p}(x)$.</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">$\\mathrm{p}(x)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(x-5)(2x^2-5x+4)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x-5=0$  or  $2x^2-5x+4=0$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $(-5)^2-4(2)(4)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=-7$<br>$&lt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Thus, the quadratic equation $2x^2-5x+4=0$ has no real roots.<br>So, the quadratic equation $2x^2-5x+4=0$ has no irrational roots.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Note that $5$ is not an irrational number.<br>So, the equation $\\mathrm{p}(x)=0$ has no irrational roots.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Thus, the claim is disagreed.</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q15",
        year: 2022,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations", "Probability"],
        difficulty: 1,
        content: {
            tc: `某班有 10 名男生及 12 名女生。 若從該班中隨機選出 4 名學生組成一個委員會，<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該委員會有 2 名男生及 2 名女生的概率；<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求該委員會男生人數與女生人數不同的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `There are 10 boys and 12 girls in a class. If 4 students are randomly selected from the class to form a committee,<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">find the probability that there are 2 boys and 2 girls in the committee;<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">find the probability that the number of boys and the number of girls in the committee are different.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `全班總人數為 22 人，選出 4 人的總選法為 $C_{4}^{22}$。<br>(a) 從 10 名男生中選 2 人且從 12 名女生中選 2 人，方法數為 $C_{2}^{10} \\times C_{2}^{12}$。<br>(b) 男生與女生人數不同的餘事件為「男生與女生人數相同」（即各有 2 人），可直接利用 $1 - \\text{(a)的概率}$ 計算。`,
            en: `Total number of students is 22, so selecting 4 students gives $C_{4}^{22}$ combinations.<br>(a) Choosing 2 boys from 10 and 2 girls from 12 gives $C_{2}^{10} \\times C_{2}^{12}$ combinations.<br>(b) The complement event of "different number of boys and girls" is "equal number of boys and girls" (2 boys and 2 girls). Use $1 - \\text{probability from (a)}$.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_2^{10}~C_2^{12}}{C_4^{22}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{54}{133}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br> 所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=6\\left(\\dfrac{10}{22}\\right)\\left(\\dfrac{9}{21}\\right)\\left(\\dfrac{12}{20}\\right)\\left(\\dfrac{11}{19}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{54}{133}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1-\\dfrac{54}{133}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{79}{133}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br> 所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_4^{10}}{C_4^{22}}+\\dfrac{C_3^{10}~C_1^{12}}{C_4^{22}}+\\dfrac{C_1^{10}~C_3^{12}}{C_4^{22}}+\\dfrac{C_4^{12}}{C_4^{22}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{79}{133}$</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    The required probability</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_2^{10}~C_2^{12}}{C_4^{22}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{54}{133}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">Alternative Solution:</span><br> The required probability</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=6\\left(\\dfrac{10}{22}\\right)\\left(\\dfrac{9}{21}\\right)\\left(\\dfrac{12}{20}\\right)\\left(\\dfrac{11}{19}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{54}{133}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    The required probability</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1-\\dfrac{54}{133}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{79}{133}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">Alternative Solution:</span><br> The required probability</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_4^{10}}{C_4^{22}}+\\dfrac{C_3^{10}~C_1^{12}}{C_4^{22}}+\\dfrac{C_1^{10}~C_3^{12}}{C_4^{22}}+\\dfrac{C_4^{12}}{C_4^{22}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{79}{133}$</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q16",
        year: 2022,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs", "Coordinate Geometry"],
        difficulty: 3,
        content: {
            tc: `設 $\\mathrm{g}(x)=3x^{2}+12kx+16k^{2}+8$，其中 $k$ 為一非零的實常數。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">利用配方法，以 $k$ 表 $y=\\mathrm{g}(x)$ 的圖像的頂點的坐標。<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">在同一直角坐標系中，將 $y=\\mathrm{g}(x)$ 的圖像的頂點及 $y=2~\\mathrm{g}(-x)$ 的圖像的頂點分別記為 $A$ 及 $B$。 設 $M$ 為 $AB$ 上的一點使得 $\\Delta OBM$ 的面積為 $\\Delta OAM$ 的面積之三倍，其中 $O$ 為原點。 以 $k$ 表 $M$ 的坐標。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Let $\\mathrm{g}(x)=3x^{2}+12kx+16k^{2}+8$, where $k$ is a non-zero real constant.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Using the method of completing the square, express, in terms of $k$, the coordinates of the vertex of the graph of $y=\\mathrm{g}(x)$.<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">On the same rectangular coordinate system, denote the vertex of the graph of $y=\\mathrm{g}(x)$ and the vertex of the graph of $y=2~\\mathrm{g}(-x)$ by $A$ and $B$ respectively. Let $M$ be a point lying on $AB$ such that the area of $\\Delta OBM$ is the triple of the area of $\\Delta OAM$, where $O$ is the origin. Express, in terms of $k$, the coordinates of $M$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 將 $g(x)$ 提取前兩項的係數 3，然後加上並減去一次項係數一半的平方進行配方。<br>(b) 先寫出 $2g(-x)$ 的表達式並求出其頂點 $B$ 的坐標（或利用函數變換性質： $x \\to -x$ 為關於 $y$ 軸對稱，前面乘以 2 為 $y$ 坐標變為 2 倍）。由於 $\\triangle OBM$ 與 $\\triangle OAM$ 同高，其面積比等於底邊長度之比 $BM : AM = 3 : 1$，即 $M$ 是線段 $AB$ 的內分點，利用分點公式求 $M$。`,
            en: `(a) Factor out 3 from the first two terms of $g(x)$, then add and subtract the square of half the $x$-coefficient to complete the square.<br>(b) Find the vertex $B$ of $y=2g(-x)$ using transformations (reflection in the $y$-axis and vertical stretch by factor 2). Since $\\Delta OBM$ and $\\Delta OAM$ share the same height, $AM:MB = 1:3$. Apply the section formula to find the coordinates of $M$.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $\\mathrm{g}(x)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3x^2+12kx+16k^2+8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3(x^2+4kx)+16k^2+8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3(x^2+4kx+4k^2)+4k^2+8$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3(x+2k)^2+4k^2+8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，頂點的坐標為 $(-2k,4k^2+8)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$B$ 的坐標為 $(2k,8k^2+16)$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $AM:MB=1:3$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $M$ 的坐標</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\left(\\dfrac{3(-2k)+(2k)}{1+3},\\dfrac{3(4k^2+8)+(8k^2+16)}{1+3}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(-k,5k^2+10)$</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $\\mathrm{g}(x)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3x^2+12kx+16k^2+8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3(x^2+4kx)+16k^2+8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3(x^2+4kx+4k^2)+4k^2+8$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3(x+2k)^2+4k^2+8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Thus, the coordinates of the vertex are $(-2k,4k^2+8)$.</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">The coordinates of $B$ are $(2k,8k^2+16)$.</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">Note that $AM:MB=1:3$.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    Coordinates of $M$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\left(\\dfrac{3(-2k)+(2k)}{1+3},\\dfrac{3(4k^2+8)+(8k^2+16)}{1+3}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(-k,5k^2+10)$</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q17",
        year: 2022,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown", "Sequences", "Quadratic Inequalities in One Unknown", "Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: {
            tc: `設 $c$ 為一實常數。 方程 $x^2+cx-9=0$ 的根為 $\\alpha$ 及 $\\beta$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">以 $c$ 表 $\\alpha^2+\\beta^2$。<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某等差數列的第 1 項、第 2 項及第 3 項分別為 $c^2$ 、 $\\alpha^2+\\beta^2$ 及 $85$。 求 $n$ 的最小值使得該數列的首 $n$ 項之和大於 $2\\times 10^6$。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Let $c$ be a real constant. The roots of the equation $x^2+cx-9=0$ are $\\alpha$ and $\\beta$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Express $\\alpha^2+\\beta^2$ in terms of $c$.<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">The 1st term, the 2nd term and the 3rd term of an arithmetic sequence are $c^2$, $\\alpha^2+\\beta^2$ and $85$ respectively. Find the least value of $n$ such that the sum of the first $n$ terms of the sequence is greater than $2\\times 10^6$.<span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 由根與係數的關係可知 $\\alpha+\\beta = -c$ 且 $\\alpha\\beta = -9$。利用恆等式 $\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta$ 進行代換。<br>(b) 根據等差數列性質，第 2 項減第 1 項等於第 3 項減第 2 項，以此建立方程求出 $c^2$，進而求出首項 $a$ 和公差 $d$。最後列出首 $n$ 項和 $S_n > 2 \\times 10^6$ 的二次不等式求解 $n$。`,
            en: `(a) By relations between roots and coefficients, $\\alpha+\\beta = -c$ and $\\alpha\\beta = -9$. Express $\\alpha^2+\\beta^2$ using $(\\alpha+\\beta)^2 - 2\\alpha\\beta$.<br>(b) Use the common difference property $T_2 - T_1 = T_3 - T_2$ to set up an equation for $c^2$, then find the first term $a$ and common difference $d$. Solve the quadratic inequality $S_n > 2 \\times 10^6$ to find the least integer $n$.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">留意  $\\alpha+\\beta=-c$  及  $\\alpha\\beta=-9$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\alpha^2+\\beta^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(\\alpha+\\beta)^2-2\\alpha\\beta$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(-c)^2-2(-9)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=c^2+18$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\alpha^2+\\beta^2-c^2=85-(\\alpha^2+\\beta^2)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c^2+18-c^2=85-(c^2+18)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c^2=49$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意該數列的首項及公差分別為 49 及 18。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{n}{2}(2(49)+18(n-1))&gt;2\\times 10^6$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$9n^2+40n-2\\times 10^6&gt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n&lt;\\dfrac{-40-\\sqrt{40^2-4(9)(-2\\times10^6)}}{2(9)}$  或  $n&gt;\\dfrac{-40+\\sqrt{40^2-4(9)(-2\\times10^6)}}{2(9)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n&lt;-473.6319808$  或  $n&gt;469.1875364$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$n$ 的最小值為 470。</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">Note that  $\\alpha+\\beta=-c$  and  $\\alpha\\beta=-9$ .</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\alpha^2+\\beta^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(\\alpha+\\beta)^2-2\\alpha\\beta$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(-c)^2-2(-9)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=c^2+18$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\alpha^2+\\beta^2-c^2=85-(\\alpha^2+\\beta^2)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c^2+18-c^2=85-(c^2+18)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c^2=49$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Note that the 1st term and the common difference of the sequence are 49 and 18 respectively.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{n}{2}(2(49)+18(n-1))&gt;2\\times 10^6$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$9n^2+40n-2\\times 10^6&gt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n&lt;\\dfrac{-40-\\sqrt{40^2-4(9)(-2\\times10^6)}}{2(9)}$  or  $n&gt;\\dfrac{-40+\\sqrt{40^2-4(9)(-2\\times10^6)}}{2(9)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n&lt;-473.6319808$  or  $n&gt;469.1875364$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Thus, the least value of $n$ is 470.</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q18",
        year: 2022,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Trigonometry (3D)"],
        difficulty: 3,
        content: {
            tc: `圖中，把三角形紙卡 $PQR$ 懸掛使得 $PQ$ 位於水平地面上。 已知 $PQ = 30\\text{ cm}$ 、 $PR=25\\text{ cm}$ 及 $\\angle QPR=95^\\circ$。<br><img src="img/2022dsep1q18.jpg" class="q-img" alt="題目附圖" style="max-width: 95%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$QR$ 的長度，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$\\angle PQR$。</div></div><div class="q-text-content"><span class="marks">(4分)</span></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $M$ 為 $QR$ 的中點。 某工匠得知 $PR$ 與水平地面間的交角為 $70^\\circ$。 該工匠宣稱 $PM$ 與水平地面間的交角超過 $40^\\circ$。 該宣稱是否正確？ 試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `In the figure, the triangular paper card $PQR$ is held such that $PQ$ lies on the horizontal ground. It is given that $PQ = 30\\text{ cm}$, $PR = 25\\text{ cm}$ and $\\angle QPR = 95^\\circ$.<br><img src="img/2022dsep1q18.jpg" class="q-img" alt="Figure 2" style="max-width: 95%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">the length of $QR$,</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$\\angle PQR$.</div></div><div class="q-text-content"><span class="marks">(4 marks)</span></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Let $M$ be the mid-point of $QR$. A craftsman finds that the angle between $PR$ and the horizontal ground is $70^\\circ$. The craftsman claims that the angle between $PM$ and the horizontal ground exceeds $40^\\circ$. Is the claim correct? Explain your answer.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `<a href="https://www.geogebra.org/m/vtjuwcph" target="_blank">Geogebra 動態模型</a><br>(a)(i) 在 $\\triangle PQR$ 中已知兩邊及其夾角，直接利用餘弦定理求 $QR$。<br>(a)(ii) 利用正弦定理 $\\dfrac{\\sin\\angle PQR}{PR} = \\dfrac{\\sin\\angle QPR}{QR}$ 求解該角。<br>(b) 自 $R$ 作垂線 $RH$ 垂直於地面，則 $\\angle RPH = 70^{\\circ}$ 為 $PR$ 與地面的交角。利用直角 $\\triangle RPH$ 算出空間高度 $RH$。自 $M$ 作垂線 $MK \\perp \\text{地面}$，因為 $M$ 為 $QR$ 中點，由中點定理知 $MK = \\dfrac{1}{2}RH$。在 $\\triangle PQR$ 中利用餘弦定理求出中線 $PM$ 的長度，最後在直角 $\\triangle PKM$ 中求出 $\\sin\\angle MPK = \\dfrac{MK}{PM}$，算出交角並與 $40^{\\circ}$ 比較。`,
            en: `<a href="https://www.geogebra.org/m/vtjuwcph" target="_blank">Geogebra Dynamic Model</a><br>(a)(i) In $\\triangle PQR$, apply the cosine law to find $QR$.<br>(a)(ii) Apply the sine law $\\dfrac{\\sin\\angle PQR}{PR} = \\dfrac{\\sin\\angle QPR}{QR}$ to solve for $\\angle PQR$.<br>(b) Let $D$ and $N$ be the projections of $R$ and $M$ on the ground respectively. Calculate height $MN = \\dfrac{1}{2}RD = \\dfrac{1}{2}PR\\sin 70^\\circ$. Use the cosine law in $\\triangle PQM$ to calculate $PM$. Then compute $\\sin\\angle MPN = \\dfrac{MN}{PM}$ and check if $\\angle MPN > 40^\\circ$.`
        },
        solution: {
            tc: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$QR^2=PQ^2+PR^2-2(PQ)(PR)\\cos\\angle PQR$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$QR^2=30^2+25^2-2(30)(25)\\cos 95^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$QR\\approx 40.69070673$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$QR\\approx 40.7\\text{ cm}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$QR$ 的長度為 $40.7\\text{ cm}$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">$\\dfrac{\\sin\\angle PQR}{PR}=\\dfrac{\\sin\\angle QPR}{QR}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{\\sin\\angle PQR}{25}=\\dfrac{\\sin 95^\\circ}{40.69070673}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle PQR\\approx 37.73809375^\\circ$  或  $\\angle PQR\\approx 142.2619063^\\circ$ (捨去)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，可得 $\\angle PQR\\approx 37.7^\\circ$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$PM^2=PQ^2+QM^2-2(PQ)(QM)\\cos\\angle PQR$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$PM^2\\approx 30^2+\\left(\\dfrac{40.69070673}{2}\\right)^2-2(30)\\left(\\dfrac{40.69070673}{2}\\right)\\cos 37.73809375^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$PM\\approx 18.66993831\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">設 $D$ 及 $N$ 分別為 $R$ 及 $M$ 在水平地面上的投影。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $MN$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}RD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}(25\\sin 70^\\circ)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 11.74615776\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">設 $\\theta$ 為 $PM$ 與水平地面間的交角。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\sin\\theta=\\dfrac{MN}{PM}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\sin\\theta\\approx\\dfrac{11.74615776}{18.66993831}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\theta\\approx 38.98661601^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\le 40^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div></div>`,
            en: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$QR^2=PQ^2+PR^2-2(PQ)(PR)\\cos\\angle PQR$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$QR^2=30^2+25^2-2(30)(25)\\cos 95^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$QR\\approx 40.69070673$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$QR\\approx 40.7\\text{ cm}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">Thus, the length of $QR$ is $40.7\\text{ cm}$.</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">$\\dfrac{\\sin\\angle PQR}{PR}=\\dfrac{\\sin\\angle QPR}{QR}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{\\sin\\angle PQR}{25}=\\dfrac{\\sin 95^\\circ}{40.69070673}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle PQR\\approx 37.73809375^\\circ$  or  $\\angle PQR\\approx 142.2619063^\\circ$ (rejected)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">Thus, we have $\\angle PQR\\approx 37.7^\\circ$.</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$PM^2=PQ^2+QM^2-2(PQ)(QM)\\cos\\angle PQR$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$PM^2\\approx 30^2+\\left(\\dfrac{40.69070673}{2}\\right)^2-2(30)\\left(\\dfrac{40.69070673}{2}\\right)\\cos 37.73809375^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$PM\\approx 18.66993831\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">Let $D$ and $N$ be the projections of $R$ and $M$ on the horizontal ground respectively.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $MN$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}RD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}(25\\sin 70^\\circ)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 11.74615776\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">Let $\\theta$ be the angle between $PM$ and the horizontal ground.</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\sin\\theta=\\dfrac{MN}{PM}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\sin\\theta\\approx\\dfrac{11.74615776}{18.66993831}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\theta\\approx 38.98661601^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\le 40^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">Thus, the claim is not correct.</div><div class="ms-mark">1A</div></div></div>`
        }
    },
    {
        id: "2022-DSE-MATH-CP1-Q19",
        year: 2022,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Four Centres of a Triangle"],
        difficulty: 3,
        content: {
            tc: `圓 $C$ 的圓心為點 $G(83, 112)$。 得知點 $A(158, 12)$ 位於 $C$ 以外。 $AP$ 及 $AQ$ 分別為 $C$ 在點 $P$ 及點 $Q$ 的切線。 已知 $C$ 通過點 $(23, 67)$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求通過 $A$ 及 $G$ 的直線的方程。<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $AG$ 與 $PQ$ 的交點的坐標。<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">求 $\\Delta APQ$ 的內切圓的方程。<span class="marks">(4分)</span></div></div><div class="q-line"><span class="q-label">(d)</span><div class="q-text-content">某人宣稱 $\\Delta APQ$ 的內切圓的面積與外接圓的面積之比為 $1:4$。 你是否同意？ 試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The centre of the circle $C$ is the point $G(83, 112)$. It is found that the point $A(158, 12)$ lies outside $C$. $AP$ and $AQ$ are the tangents to $C$ at the points $P$ and $Q$ respectively. It is given that $C$ passes through the point $(23, 67)$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the equation of the straight line passing through $A$ and $G$.<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Find the coordinates of the point of intersection of $AG$ and $PQ$.<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">Find the equation of the inscribed circle of $\\Delta APQ$.<span class="marks">(4 marks)</span></div></div><div class="q-line"><span class="q-label">(d)</span><div class="q-text-content">Someone claims that the ratio of the area of the inscribed circle to the area of the circumcircle of $\\Delta APQ$ is $1:4$. Do you agree? Explain your answer.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `<a href="https://www.geogebra.org/m/bsrs7uka" target="_blank">Geogebra 動態模型</a><br>(a) 已知兩點 $A(158, 12)$ 和 $G(83, 112)$，利用兩點式直接求出直線 $AG$ 的方程。<br>(b) 先利用圓心 $G$ 與圓上點 $(23, 67)$ 計算圓 $C$ 的半徑 $r$。依切線幾何性質， $AG \\perp PQ$，且交點 $K$ 滿足直角 $\\triangle APG$ 中的射影幾何關係 $GK \\cdot GA = r^2$。利用定比分點公式或向量求出 $K$ 點坐標。<br>(c) $\\Delta APQ$ 的內切圓圓心必位於對稱軸 $AG$ 上。利用切線長定理和角度關係，可發現切點 $K$ 實際上就是內切圓與 $PQ$ 的切點。利用幾何性質算得內切圓圓心 $I$ 坐標與半徑，寫出其圓方程。<br>(d) $\\Delta APQ$ 的外接圓即是以 $AG$ 為直徑的圓（因為 $\\angle APG = \\angle AQG = 90^{\\circ}$）。算出外接圓半徑 $R = \\dfrac{1}{2}AG$，並求出內切圓半徑 $r_in$ 與外接圓半徑 $R$ 的平方比，即可驗證面積比是否為 $1:4$。`,
            en: `<a href="https://www.geogebra.org/m/bsrs7uka" target="_blank">Geogebra Dynamic Model</a><br>(a) Use two-point form to find the equation of $AG$ given $A(158, 12)$ and $G(83, 112)$.<br>(b) Find radius $r$ of circle $C$. Since $AG \\perp PQ$, find equation of line $PQ$ and solve the linear system with $AG$ to get the intersection coordinates.<br>(c) The in-centre $I$ lies on $AG$. Set up the distance from $I$ to $AP$ and to $PQ$ equal to in-radius $r_{in}$ to solve for $r_{in}$ and $I$, then write down the equation.<br>(d) The circumcircle of $\\Delta APQ$ has diameter $AG$. Compare the square ratio of in-radius to circum-radius with $1:4$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $AG$ 的斜率 $=\\dfrac{112-12}{83-158}=\\dfrac{-4}{3}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所求的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$y-12=\\dfrac{-4}{3}(x-158)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$4x+3y-668=0$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$C$ 的半徑為 75。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $83+75=158$，$AP$ 或 $AQ$ 為沿垂線。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$P$ 或 $Q$ 的坐標為 $(158,112)$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">留意  $\\Delta AGP\\cong\\Delta AGQ$  及  $AG\\perp PQ$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$PQ$ 的斜率為 $\\dfrac{3}{4}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$PQ$ 的方程為 $y-112=\\dfrac{3}{4}(x-158)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">解  $y-112=\\dfrac{3}{4}(x-158)$  及  $4x+3y-668=0$ ，</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">可得  $x=110$  及  $y=76$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$AG$ 與 $PQ$ 的交點坐標為 $(110,76)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">設 $I$ 及 $r$ 分別為 $\\Delta APQ$ 的內切圓圓心及半徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意  $AP=AQ$  及  $I$ 在 $AG$ 上。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$I$ 的 $x$ 坐標 $=158-r$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$I$ 的 $y$ 坐標 $=\\dfrac{-4}{3}(158-r)+\\dfrac{668}{3}=\\dfrac{4r}{3}+12$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$I$ 的坐標為 $\\left(158-r,\\dfrac{4r}{3}+12\\right)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$I$ 與 $AG$ 與 $PQ$ 的交點的距離為 $r$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$((158-r)-110)^2+\\left(\\left(\\dfrac{4r}{3}+12\\right)-76\\right)^2=r^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{16}{9}r^2-\\dfrac{800}{3}r+6400=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$r^2-150r+3600=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$r=30$  或  $r=120$ (捨去)</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $r=30$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$I$ 的坐標為 $(128,52)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的方程為 $(x-128)^2+(y-52)^2=30^2$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(d)</div><div class="ms-content ms-from-l2">留意  $\\angle APG=\\angle AQG=90^\\circ$  及  $\\angle APG+\\angle AQG=180^\\circ$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$APGQ$ 為圓內接四邊形，且 $AG$ 為 $\\Delta APQ$ 外接圓的直徑。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\Delta APQ$ 外接圓的半徑</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}\\sqrt{(83-158)^2+(112-12)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{125}{2}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">藉 (c)，$\\Delta APQ$ 內切圓的半徑為 30。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\Delta APQ$ 的內切圓面積與外接圓面積之比</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=30^2:\\left(\\dfrac{125}{2}\\right)^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=144:625$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\ne 1:4$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    }
);
