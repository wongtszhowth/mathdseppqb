// 2018dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2018-DSE-MATH-CP1-Q01",
        year: 2018,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: {
            tc: `令 $b$ 成為公式 $\\dfrac{a+4}{3}=\\dfrac{b+1}{2}$ 的主項。<span class="marks">(3分)</span>`,
            en: `Make $b$ the subject of the formula $\\dfrac{a+4}{3}=\\dfrac{b+1}{2}$.<span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `交叉相乘後解出 $b$。`,
            en: `Cross-multiply then solve for $b$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{a+4}{3}=\\dfrac{b+1}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$2(a+4)=3(b+1)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$2a+8=3b+3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$3b=2a+5$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$b=\\dfrac{2a+5}{3}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>$\\dfrac{a+4}{3}=\\dfrac{b+1}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$2\\left(\\dfrac{a+4}{3}\\right)=b+1$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{2a+8}{3}=b+1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$b=\\dfrac{2a+8}{3}-1$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$b=\\dfrac{2a+5}{3}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q02",
        year: 2018,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `化簡 $\\dfrac{xy^7}{(x^{-2} y^3)^4}$，並以正指數表示答案。 <span class="marks">(3分)</span>`,
            en: `Simplify $\\dfrac{xy^7}{(x^{-2} y^3)^4}$ and express your answer with positive indices. <span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `先展開分母的指數，再應用指數定律。 `,
            en: `Expand the index of the denominator first, then apply laws of indices.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{x^7}{(x^{-2} y^3)^4}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{xy^7}{x^{-8} y^{12}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x^{1+8}}{y^{12-7}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x^9}{y^5}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q03",
        year: 2018,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: {
            tc: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">將 $265.473$ 上捨入至最接近的整數。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">將 $265.473$ 下捨入至一位小數。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">將 $265.473$ 捨入至二位有效數字。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
            en: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Round up $265.473$ to the nearest integer. <span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Round down $265.473$ to $1$ decimal place. <span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">Round off $265.473$ to $2$ significant figures. <span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `分別應用上捨入、下捨入及有效數字規則。 `,
            en: `Apply rules of rounding up, rounding down, and significant figures respectively.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">266</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">265.4</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">270</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q04",
        year: 2018,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 1,
        content: {
            tc: `某盒子中有 $n$ 個白球、$5$ 個黑球及 $8$ 個紅球。 若從該盒子中隨機抽出一個球，則抽出紅球的概率為 $\\dfrac{2}{5}$。 求 $n$ 的值。 <span class="marks">(3分)</span>`,
            en: `A box contains $n$ white balls, $5$ black balls and $8$ red balls. If a ball is randomly drawn from the box, then the probability of drawing a red ball is $\\dfrac{2}{5}$. Find the value of $n$. <span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `列出紅球概率方程求解 $n$。 `,
            en: `Set up an equation for the probability of drawing a red ball and solve for $n$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">留意抽出紅球的概率為 $\\dfrac{8}{n+5+8}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{8}{n+13}=\\dfrac{2}{5}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$2n+26=40$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$n=7$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q05",
        year: 2018,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$9r^3 - 18r^2 s$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$9r^3 - 18r^2 s - rs^2 + 2s^3$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Factorize<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$9r^3 - 18r^2 s$, <span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$9r^3 - 18r^2 s - rs^2 + 2s^3$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 提取公因式。 <br>(b) 分組因式分解。 `,
            en: `(a) Factor out common factors.<br>(b) Factorize by grouping.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $9r^3-18r^2s$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=9r^2(r-2s)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $9r^3-18r^2s-rs^2+2s^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=9r^2(r-2s)-rs^2+2s^3$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=9r^2(r-2s)-s^2(r-2s)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(r-2s)(9r^2-s^2)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(r-2s)(3r+s)(3r-s)$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q06",
        year: 2018,
        type: "P1",
        section: "A1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: {
            tc: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求同時滿足  $\\dfrac{3-x}{2} > 2x+7$  及  $x+8 \\ge 0$  的 $x$ 值的範圍。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出同時滿足 (a) 的不等式的最大整數。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
            en: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the range of values of $x$ which satisfy both $\\dfrac{3-x}{2} > 2x+7$ and $x+8 \\ge 0$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Write down the greatest integer satisfying both inequalities in (a). <span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 分別解兩個不等式後取交集。 <br>(b) 從範圍中取最大整數。 `,
            en: `(a) Solve both inequalities separately and find their intersection.<br>(b) Find the greatest integer within the range.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{3-x}{2}&gt;2x+7$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$3-x&gt;4x+14$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-5x&gt;11$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x&lt;-\\dfrac{11}{5}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$x+8\\ge 0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x\\ge -8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的範圍為 $-8\\le x&lt;-\\dfrac{11}{5}$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$-3$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q07",
        year: 2018,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Percentages"],
        difficulty: 1,
        content: {
            tc: `某花瓶的標價較其成本高 $30\\%$。 該花瓶以其標價六折售出並虧蝕 $\\$88$。 求該花瓶的標價。 <span class="marks">(5分)</span>`,
            en: `The marked price of a vase is $30\\%$ above its cost. A loss of $\\$88$ is made by selling the vase at a discount of $40\\%$ on its marked price. Find the marked price of the vase. <span class="marks">(5 marks)</span>`
        },
        hint: {
            tc: `設成本為 $x$，列出標價與售價關係後求解。 `,
            en: `Let cost be $x$, set up the relationship between marked price and selling price to solve.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $x$ 為該花瓶的標價。<br>   該花瓶的成本</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x}{1+30\\%}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$\\left(\\dfrac{10x}{13}\\right)$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    該花瓶的售價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=(60\\%)x$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$\\left(\\dfrac{3x}{5}\\right)$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{10x}{13}-\\dfrac{3x}{5}=88$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{11x}{65}=88$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=520$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該花瓶的標價為 $\\$520$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>設 $\\$c$ 為該花瓶的成本。<br>   該花瓶的標價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=(1+30\\%)c$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$1.3c$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    該花瓶的售價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=(60\\%)(1.3c)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$0.78c$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">$c-0.78c=88$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$0.22c=88$<br>$c=400$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    該花瓶的標價<br>$=1.3(400)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$520$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q08",
        year: 2018,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCDE$ 為一圓。 已知 $AB // ED$。 $AD$ 與 $BE$ 相交於點 $F$。<img src="img/2018dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;">以 $\\theta$ 表 $x$ 及 $y$。 <span class="marks">(5分)</span>`,
            en: `In the figure, $ABCDE$ is a circle. It is given that $AB // ED$. $AD$ and $BE$ intersect at the point $F$.<img src="img/2018dsep1q08.jpg" class="q-img" alt="Figure 1" style="max-width: 50%;">Express $x$ and $y$ in terms of $\\theta$. <span class="marks">(5 marks)</span>`
        },
        hint: {
            tc: `利用平行線性質、圓周角及對頂角。 `,
            en: `Use properties of parallel lines, angles in the same segment, and vertically opposite angles.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$x=180^\\circ-\\theta$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    $\\angle ADE$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=x$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=180^\\circ-\\theta$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    $\\angle BED$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=x$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=180^\\circ-\\theta$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    $y$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=180^\\circ-\\angle ADE-\\angle BED$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=180^\\circ-(180^\\circ-\\theta)-(180^\\circ-\\theta)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=2\\theta-180^\\circ$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q09",
        year: 2018,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 2,
        content: {
            tc: `某汽車以平均速率 $72\\text{ km/h}$ 由 $P$ 城駛至 $Q$ 城，該汽車然後以平均速率 $90\\text{ km/h}$ 由 $Q$ 城駛至 $R$ 城。 已知該汽車在整段行程中以 $161$ 分鐘行駛 $210\\text{ km}$。 該汽車由 $P$ 城駛至 $Q$ 城需時多久？<span class="marks">(5分)</span>`,
            en: `A car travels from city $P$ to city $Q$ at an average speed of $72\\text{ km/h}$ and then the car travels from city $Q$ to city $R$ at an average speed of $90\\text{ km/h}$. It is given that the car travels $210\\text{ km}$ in $161$ minutes for the whole journey. How long does the car take to travel from city $P$ to city $Q$? <span class="marks">(5 marks)</span>`
        },
        hint: {
            tc: `設 $PQ$ 距離為 $d$，列出時間方程求解。 `,
            en: `Let the distance of $PQ$ be $d$, set up a time equation to solve.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $x$ 分鐘為該汽車由 $P$ 城駛至 $Q$ 城的所需時間，則該汽車由 $Q$ 城駛至 $R$ 城需時 $(161-x)$ 分鐘。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$72\\left(\\dfrac{x}{60}\\right)+90\\left(\\dfrac{161-x}{60}\\right)=210$</div><div class="ms-mark">1M+1A+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$18x=1\\,890$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=105$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該汽車由 $P$ 城駛至 $Q$ 城需時 105 分鐘。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 1：</span><br>   $72\\text{ km/h}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{72}{60}\\text{ km/min}$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=1.2\\text{ km/min}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    $90\\text{ km/h}$<br>$=\\dfrac{90}{60}\\text{ km/min}$ ......<sup>@</sup><br>$=1.5\\text{ km/min}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">設 $x$ 分鐘及 $y$ 分鐘分別為該汽車由 $P$ 城駛至 $Q$ 城及由 $Q$ 城駛至 $R$ 城所需的時間。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得 $x+y=161$ 及 $1.2x+1.5y=210$ 。</div><div class="ms-mark">1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">所以，可得 $1.2x+1.5(161-x)=210$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">求解後，可得 $x=105$ 及 $y=56$ 。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該汽車由 $P$ 城駛至 $Q$ 城需時 $105$ 分鐘。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 2：</span><br>設 $x$ 小時為該汽車由 $P$ 城駛至 $Q$ 城所需時間，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">則該汽車由 $Q$ 城駛至 $R$ 城需時 $\\left(\\dfrac{161}{60}-x\\right)$ 小時。</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$72x+90\\left(\\dfrac{161}{60}-x\\right)=210$</div><div class="ms-mark">1A+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=1.75$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該汽車由 $P$ 城駛至 $Q$ 城需時 $1.75$ 小時。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 3：</span><br>該汽車由 $P$ 城駛至 $Q$ 城的所需時間</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{90\\left(\\dfrac{161}{60}\\right)-210}{90-72}$</div><div class="ms-mark">1M+1A<br>+1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=1.75\\text{ 小時}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 4：</span><br>設 $y\\text{ km}$ 為 $P$ 城與 $Q$ 城間的距離，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">則 $Q$ 城與 $R$ 城間的距離為 $(210-y)\\text{ km}$ 。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{y}{72}+\\dfrac{210-y}{90}=\\dfrac{161}{60}$</div><div class="ms-mark">1M+1A+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=126$<br>   該汽車由 $P$ 城駛至 $Q$ 城的所需時間<br>$=\\dfrac{126}{72}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=1.75\\text{ 小時}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q10",
        year: 2018,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Dispersion"],
        difficulty: 1,
        content: {
            tc: `下面的框線圖顯示某公司 $X$ 組文員的年歲的分佈。 已知這分佈的分佈域及四分位數間距分別為 $43$ 及 $21$。<img src="img/2018dsep1q10zh.jpg" class="q-img" alt="題目附圖" style="max-width: 65%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $a$ 及 $b$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該公司 $Y$ 組有五名文員且其中三名的年歲均為 $38$。 已知 $Y$ 組文員的年歲的分佈域為 $20$。 $X$ 組與 $Y$ 組現合併為一部門。 公司經理宣稱該部門文員的年歲的分佈域與 $X$ 組文員的年歲的分佈域必為相同。 你是否同意？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The box-and-whisker diagram below shows the distribution of the ages of the clerks in team X of a company. It is given that the range and the inter-quartile range of this distribution are $43$ and $21$ respectively.<img src="img/2018dsep1q10en.jpg" class="q-img" alt="Diagram" style="max-width: 65%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $a$ and $b$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">There are five clerks in team Y of the company and three of them are of age $38$. It is given that the range of the ages of the clerks in team Y is $20$. Team X and team Y are now combined to form a section. The manager of the company claims that the range of the ages of the clerks in the section and the range of the ages of the clerks in team X must be the same. Do you agree? Explain your answer. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 由分佈域及 IQR 求 $a$、$b$。 <br>(b) 考慮合併後最大/最小值可能改變。 `,
            en: `(a) Find $a$ and $b$ using range and IQR.<br>(b) Consider that the maximum/minimum values may change after combining.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$a-27=21$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$a=48$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$b-19=43$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$b=62$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">留意 $38-20=18$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，$Y$ 組文員的最小可取年歲為 18。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    該部門文員的年歲的分佈的最大可取分佈域<br>$=62-18$<br>$=44$<br>$\\ne 43$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">假定 $Y$ 組文員的年歲的分佈域為 18, 19, 38, 38 及 38。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $Y$ 組文員的年歲的分佈域為 20。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">該部門文員的年歲的分佈域<br>$=62-18$<br>$=44$<br>$\\ne 43$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q11",
        year: 2018,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 2,
        content: {
            tc: `下表顯示一些家庭的子女人數的分佈：<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">子女人數</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">0</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">家庭數目</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$k$</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">9</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">7</td>
    </tr>
  </table>已知 $k$ 為一正整數。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">若該分佈的眾數為 $2$，寫出</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$k$ 的最小可取值；</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$k$ 的最大可取值。 <br><span class="marks">(2分)</span></div></div><div class="q-clearfix"></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若該分佈的中位數為 $2$，寫出</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$k$ 的最小可取值；</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$k$ 的最大可取值。 <br><span class="marks">(2分)</span></div></div><div class="q-clearfix"></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">若該分佈的平均值為 $2$，求 $k$ 的值。 <span class="marks">(2分)</span></div></div><div class="q-clearfix"></div>`,
            en: `The following table shows the distribution of the numbers of children of some families:<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Number of children</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">0</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Number of families</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$k$</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">9</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">7</td>
    </tr>
  </table>It is given that $k$ is a positive integer. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">If the mode of the distribution is $2$, write down</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">the least possible value of $k$;</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">the greatest possible value of $k$. <br><span class="marks">(2 marks)</span></div></div><div class="q-clearfix"></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">If the median of the distribution is $2$, write down</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">the least possible value of $k$;</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">the greatest possible value of $k$. <br><span class="marks">(2 marks)</span></div></div><div class="q-clearfix"></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">If the mean of the distribution is $2$, find the value of $k$. <span class="marks">(2 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 眾數為 2 的條件限制 $k$ 的範圍。 <br>(b) 中位數位置決定 $k$ 範圍。 <br>(c) 由平均值方程求 $k$。 `,
            en: `(a) The condition for mode = 2 restricts the range of $k$.<br>(b) The position of the median determines the range of $k$.<br>(c) Find $k$ from the mean equation.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">1</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">8</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">3</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">19</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">$\\dfrac{0(k)+1(2)+2(9)+3(6)+4(7)}{k+2+9+6+7}=2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{66}{k+24}=2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2k+48=66$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k=9$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q12",
        year: 2018,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: {
            tc: `設 $\\mathrm{f}(x) = 4x(x+1)^2 + ax + b$，其中 $a$ 及 $b$ 均為常數。 已知 $x-3$ 為 $\\mathrm{f}(x)$ 的因式。 當 $\\mathrm{f}(x)$ 除以 $x+2$ 時，餘數為 $2b+165$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $a$ 及 $b$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱方程 $\\mathrm{f}(x)=0$ 有至少一個無理根。 你是否同意？ 試解釋你的答案。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Let $\\mathrm{f}(x) = 4x(x+1)^2 + ax + b$, where $a$ and $b$ are constants. It is given that $x-3$ is a factor of $\\mathrm{f}(x)$. When $\\mathrm{f}(x)$ is divided by $x+2$, the remainder is $2b+165$. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $a$ and $b$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Someone claims that the equation $\\mathrm{f}(x)=0$ has at least one irrational root. Do you agree? Explain your answer. <span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 利用因式定理及餘數定理求 $a$、$b$。 <br>(b) 因式分解後判斷根的性質。 `,
            en: `(a) Find $a$ and $b$ using factor theorem and remainder theorem.<br>(b) Factorize the polynomial and determine the nature of the roots.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\mathrm{f}(3)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$4(3)(3+1)^2+a(3)+b=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$3a+b=-192$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$\\mathrm{f}(-2)=2b+165$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$4(-2)(-2+1)^2+a(-2)+b=2b+165$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2a+b=-173$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $a=-19$ 及 $b=-135$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{f}(x)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$4x(x+1)^2-19x-135=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$4x^3+8x^2-15x-135=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(x-3)(4x^2+20x+45)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=3$  或  $4x^2+20x+45=0$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $20^2-4(4)(45)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=-320<br>\\lt 0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，方程 $4x^2+20x+45=0$ 沒有實根。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 3 不是無理數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q13",
        year: 2018,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)", "Pythagoras Theorem"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一梯形，且 $\\angle ABC = 90^\\circ$ 及 $AB // DC$。 $E$ 為 $BC$ 上的一點使得 $\\angle AED = 90^\\circ$。<img src="img/2018dsep1q13.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ABE \\sim \\Delta ECD$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">已知 $AB = 15\\text{ cm}$ 、 $AE = 25\\text{ cm}$ 及 $CE = 36\\text{ cm}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $CD$ 的長度。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $\\Delta ADE$ 的面積。 </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">$AD$ 上是否有一點 $F$ 使得 $E$ 與 $F$ 間的距離少於 $23\\text{ cm}$？ 試解釋你的答案。 <br><span class="marks">(6分)</span><div class="q-clearfix"></div></div></div>`,
            en: `In the figure, $ABCD$ is a trapezium with $\\angle ABC = 90^\\circ$ and $AB // DC$. $E$ is a point lying on $BC$ such that $\\angle AED = 90^\\circ$.<img src="img/2018dsep1q13.jpg" class="q-img" alt="Figure" style="max-width: 60%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Prove that $\\Delta ABE \\sim \\Delta ECD$. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">It is given that $AB = 15\\text{ cm}$, $AE = 25\\text{ cm}$ and $CE = 36\\text{ cm}$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Find the length of $CD$. </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Find the area of $\\Delta ADE$. </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">Is there a point $F$ lying on $AD$ such that the distance between $E$ and $F$ is less than $23\\text{ cm}$? Explain your answer. <br><span class="marks">(6 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 利用平行線及直角證明 AA 相似。 <br>(b) 用相似比及畢氏定理計算。 `,
            en: `(a) Prove AA similarity using parallel lines and right angles.<br>(b) Calculate using ratio of similarity and Pythagoras' theorem.`
        },
        solution: `<div class="ms-container"><div class="ms-row" style="white-space: pre; overflow-x: visible; overflow-y: visible;"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2" style="white-space: pre; overflow-x: visible; overflow-y: visible; grid-column: 2 / 6;">$\\angle ABE=90^\\circ$\t\t\t\t\t[已知]<br>$\\angle DCE=180^\\circ-\\angle ABE$\t\t\t[同側(旁)內角，$AB // DC$]<br>$\\angle DCE=90^\\circ$<br>$\\angle ABE=\\angle DCE$<br>$\\angle BAE=180^\\circ-\\angle ABE-\\angle AEB$\t[$\\Delta$內角和]<br>$\\angle BAE=90^\\circ-\\angle AEB$<br>$\\angle AED=90^\\circ$\t\t\t\t\t[已知]<br>$\\angle CED=180^\\circ-\\angle AED-\\angle AEB$\t[直線上的鄰角]<br>$\\angle CED=90^\\circ-\\angle AEB$<br>$\\angle BAE=\\angle CED$<br>$\\angle AEB=\\angle CDE$\t\t\t\t[$\\Delta$內角和]<br>$\\Delta ABE\\sim\\Delta ECD$\t\t\t\t(AAA)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">    $BE$<br>$=\\sqrt{AE^2-AB^2}$<br>$=\\sqrt{25^2-15^2}$<br>$=20\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{CD}{CE}=\\dfrac{AB}{BE}$ （藉 (a)）</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{CD}{20}=\\dfrac{36}{15}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$CD=48\\text{ cm}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">    $\\Delta ADE$ 的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{1}{2}(AB+CD)(BC)-\\dfrac{1}{2}(AB)(BE)-\\dfrac{1}{2}(CD)(CE)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{1}{2}(15+48)(20+36)-\\dfrac{1}{2}(15)(20)-\\dfrac{1}{2}(48)(36)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=750\\text{ cm}^2$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(iii)</div><div class="ms-content ms-from-l3">    $AD$<br>$=\\sqrt{BC^2+(CD-AB)^2}$<br>$=\\sqrt{(20+36)^2+(48-15)^2}$<br>$=65\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">由 $E$ 至 $AD$ 的最短距離</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{2(750)}{65}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{300}{13}$<br>$\\approx 23.07692308\\text{ cm}$<br>$&gt;23\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$AD$ 上沒有一點 $F$ 使得 $E$ 與 $F$ 間的距離少於 23 cm。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q14",
        year: 2018,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `一底半徑為 $8\\text{ cm}$ 及高為 $64\\text{ cm}$ 的直立圓柱形的容器與一底半徑為 $20\\text{ cm}$ 及高為 $60\\text{ cm}$ 的倒置直立圓錐形的器皿均鉛垂放置。 該容器載滿了水。 現將該容器內的水倒入該器皿內。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該器皿內水的體積，答案以 $\\pi$ 表示。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求該器皿內水的深度。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">若將一半徑為 $14\\text{ cm}$ 的實心金屬球體隨後放進該器皿內，且該球體完全浸入水中，水會否溢出？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `A right circular cylindrical container of base radius $8\\text{ cm}$ and height $64\\text{ cm}$ and an inverted right circular conical vessel of base radius $20\\text{ cm}$ and height $60\\text{ cm}$ are held vertically. The container is fully filled with water. The water in the container is now poured into the vessel. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the volume of water in the vessel in terms of $\\pi$. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Find the depth of water in the vessel. <span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">If a solid metal sphere of radius $14\\text{ cm}$ is then put into the vessel and the sphere is totally immersed in the water, will the water overflow? Explain your answer. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 圓柱體積即水體積。 <br>(b) 用相似圓錐求深度。 <br>(c) 比較球體積與剩餘空間。 `,
            en: `(a) Cylinder volume equals water volume.<br>(b) Use similar cones to find depth.<br>(c) Compare the sphere volume with the remaining capacity.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    該器皿內水的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(8^2)(64)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4096\\pi\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $h\\text{ cm}$ 為該器皿內水的深度，則水面的半徑為 $\\dfrac{h}{3}\\text{ cm}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{1}{3}\\pi\\left(\\dfrac{h}{3}\\right)^2 h=4096\\pi$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$h^3=110592$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$h=48$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該器皿內水的深度為 48 cm。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>設 $h\\text{ cm}$ 為該器皿內水的深度。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">該器皿的容積為 $\\dfrac{1}{3}\\pi(20)^2(60)\\text{ cm}^3$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{1}{3}\\pi(20)^2(60)\\left(\\dfrac{h}{60}\\right)^3=4096\\pi$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$h^3=110592$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$h=48$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該器皿內水的深度為 48 cm。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">該器皿內未被水佔據的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}\\pi(20)^2(60)-4096\\pi$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3904\\pi\\text{ cm}^3$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    金屬球體的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{4}{3}\\pi(14^3)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{10976}{3}\\pi\\text{ cm}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$&lt;3904\\pi\\text{ cm}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，水不會溢出。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q15",
        year: 2018,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 1,
        content: {
            tc: `一個八位電話號碼由 $2$、$3$、$4$、$5$、$6$、$7$、$8$ 及 $9$ 的排列所組成。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">可組成多少個不同的八位電話號碼？<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若八位電話號碼的第一個位及最後一個位均為奇數，則可組成多少個不同的八位電話號碼？<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `An eight-digit phone number is formed by a permutation of $2, 3, 4, 5, 6, 7, 8$ and $9$. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">How many different eight-digit phone numbers can be formed? <span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">If the first digit and the last digit of an eight-digit phone number are odd numbers, how many different eight-digit phone numbers can be formed? <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 全排列。 <br>(b) 先選首尾奇數再排列中間。 `,
            en: `(a) Full permutation.<br>(b) Choose odd numbers for the first and last digits first, then permute the remaining digits.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    所求的數目<br>$=P_8^8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=40\\,320$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的數目</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(P_2^8)(P_5^6)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=8\\,640$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q16",
        year: 2018,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: {
            tc: `某等比數列的第 $3$ 項及第 $4$ 項分別為 $720$ 及 $864$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該數列的第 $1$ 項。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $n$ 的最大值使得第 $(n+1)$ 項與第 $(2n+1)$ 項之和小於 $5 \\times 10^4$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The 3rd term and the 4th term of a geometric sequence are $720$ and $864$ respectively. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the 1st term of the sequence. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Find the greatest value of $n$ such that the sum of the $(n+1)$th term and the $(2n+1)$th term is less than $5 \\times 10^{14}$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 由公比求首項。 <br>(b) 列出不等式後求最大整數 $n$。 `,
            en: `(a) Find the first term from the common ratio.<br>(b) Set up an inequality and solve for the greatest integer $n$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $a$ 及 $r$ 分別為該數列的第 1 項及公比。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $ar^2=720$  及  $ar^3=864$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $a=500$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，第 1 項為 500。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">留意 $r=1.2$ 。<br>$500(1.2^n)+500(1.2^{2n})&lt;5\\times 10^{14}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(1.2^n)^2+(1.2^n)-10^{12}&lt;0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{-1-\\sqrt{1+4\\times 10^{12}}}{2}&lt;1.2^n&lt;\\dfrac{-1+\\sqrt{1+4\\times 10^{12}}}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\log 1.2^n&lt;\\log\\left(\\dfrac{-1+\\sqrt{4\\times 10^{12}+1}}{2}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n\\log 1.2&lt;\\log\\left(\\dfrac{-1+\\sqrt{4\\times 10^{12}+1}}{2}\\right)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n&lt;75.77551608$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $n$ 為一整數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$n$ 的最大值為 75。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q17",
        year: 2018,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Trigonometry (3D)"],
        difficulty: 3,
        content: {
            tc: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">圖 (a) 中，$ABCD$ 為一紙卡，其形狀為平行四邊形。 已知 $AB = 60\\text{ cm}$ 、 $\\angle ABD = 20^\\circ$ 及 $\\angle BAD = 120^\\circ$。<img src="img/2018dsep1q17a.jpg" class="q-img" alt="題目附圖" style="max-width: 65%;"><div style="text-align: center;">圖 (a)</div>求 $AD$ 的長度。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">將圖 (a) 中的紙卡沿 $BD$ 摺起，使得 $A$ 與 $C$ 間的距離為 $40\\text{ cm}$（見圖 (b)）。<img src="img/2018dsep1q17b.jpg" class="q-img" alt="題目附圖" style="max-width: 65%;"><div style="text-align: center;">圖 (b)</div></div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $\\angle ABC$。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求平面 $ABD$ 與平面 $BCD$ 間的交角。 <br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
            en: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">In Figure (a), $ABCD$ is a paper card in the shape of a parallelogram. It is given that $AB = 60\\text{ cm}$, $\\angle ABD = 20^\\circ$ and $\\angle BAD = 120^\\circ$.<img src="img/2018dsep1q17a.jpg" class="q-img" alt="Figure (a)" style="max-width: 65%;"><div style="text-align: center;">Figure (a)</div>Find the length of $AD$. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">The paper card in Figure (a) is folded along $BD$ such that the distance between $A$ and $C$ is $40\\text{ cm}$ (see Figure (b)).<img src="img/2018dsep1q17b.jpg" class="q-img" alt="Figure (b)" style="max-width: 65%;"><div style="text-align: center;">Figure (b)</div></div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Find $\\angle ABC$. </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Find the angle between the plane $ABD$ and the plane $BCD$. <br><span class="marks">(5 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `<a href="https://www.geogebra.org/m/GbRHUrd4" target="_blank">Geogebra 動態模型</a><br>(a) 用正弦公式。 <br>(b) 用餘弦公式求角，再求二面角。 `,
            en: `<a href="https://www.geogebra.org/m/GbRHUrd4" target="_blank">Geogebra 3D Model</a><br>(a) Use sine formula.<br>(b) Use cosine formula to find angle, then find the dihedral angle.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">藉正弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{AD}{\\sin\\angle ABD}=\\dfrac{AB}{\\sin\\angle ADB}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{AD}{\\sin 20^\\circ}=\\dfrac{60}{\\sin(180^\\circ-120^\\circ-20^\\circ)}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AD\\approx 31.92533317\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AD\\approx 31.9\\text{ cm}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">藉餘弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\cos\\angle ABC=\\dfrac{AB^2+BC^2-AC^2}{2(AB)(BC)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\cos\\angle ABC\\approx\\dfrac{60^2+(31.92533317)^2-40^2}{2(60)(31.92533317)}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle ABC\\approx 37.99207534^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle ABC\\approx 38.0^\\circ$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">圖 (a) 中，$AP$ 的延線與 $CD$ 相交於 $Q$，其中 $P$ 為由 $A$ 至 $BD$ 的垂足。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意所求的角為圖 (b) 中之 $\\angle APQ$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $AP$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=AD\\sin\\angle ADP$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx 31.92533317\\sin(180^\\circ-120^\\circ-20^\\circ)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx 20.5212086\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$DP^2=AD^2-AP^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$DP^2\\approx(31.92533317)^2-(20.5212086)^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$DP\\approx 24.45622407\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PQ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=DP\\tan\\angle PDQ$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx(24.45622407)\\tan 20^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx 8.901337605\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$DQ^2=DP^2+PQ^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$DQ^2\\approx(24.45622407)^2+(8.901337605)^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$DQ\\approx 26.02577006\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\angle ADC=\\angle ABC\\approx 37.99207534^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉餘弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AQ^2=AD^2+DQ^2-2(AD)(DQ)\\cos\\angle ADC$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AQ^2\\approx(31.92533317)^2+(26.02577006)^2-2(31.92533317)(26.02577006)\\cos 37.99207534^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AQ\\approx 19.67076991\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉餘弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\cos\\angle APQ=\\dfrac{AP^2+PQ^2-AQ^2}{2(AP)(PQ)}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\cos\\angle APQ\\approx\\dfrac{(20.5212086)^2+(8.901337605)^2-(19.67076991)^2}{2(20.5212086)(8.901337605)}$<br>$\\angle APQ\\approx71.91411397^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle APQ\\approx 71.9^\\circ$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，所求的角為 $71.9^\\circ$。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q18",
        year: 2018,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations", "Functions and Graphs", "Four Centres of a Triangle"],
        difficulty: 3,
        content: {
            tc: `已知 $\\mathrm{f}(x)$ 的一部分隨 $x^2$ 正變，而另一部分則隨 $x$ 正變。 假定 $\\mathrm{f}(2)=60$ 及 $\\mathrm{f}(3)=99$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{f}(x)$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $Q$ 為 $y=\\mathrm{f}(x)$ 的圖像的頂點及 $R$ 為 $y=27-\\mathrm{f}(x)$ 的圖像的頂點。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">利用配方法，求 $Q$ 的坐標。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">寫出 $R$ 的坐標。 </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">點 $S$ 的坐標為 $(56,0)$。 設 $P$ 為 $\\Delta QRS$ 的外心。 描述 $P$、$Q$ 與 $R$ 之間的幾何關係。 試解釋你的答案。 <br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
            en: `It is given that $\\mathrm{f}(x)$ partly varies as $x^2$ and partly varies as $x$. Suppose that $\\mathrm{f}(2)=60$ and $\\mathrm{f}(3)=99$. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $\\mathrm{f}(x)$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Let $Q$ be the vertex of the graph of $y=\\mathrm{f}(x)$ and $R$ be the vertex of the graph of $y=27-\\mathrm{f}(x)$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Using the method of completing the square, find the coordinates of $Q$. </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Write down the coordinates of $R$. </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">The coordinates of the point $S$ are $(56,0)$. Let $P$ be the circumcentre of $\\Delta QRS$. Describe the geometric relationship between $P$, $Q$ and $R$. Explain your answer. <br><span class="marks">(5 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 設 $f(x)=Ax^2+Bx$，代入求 $A$、$B$。 <br>(b) 配方找頂點，再分析外心位置。 `,
            en: `(a) Let $f(x)=Ax^2+Bx$, substitute values to solve for $A$ and $B$.<br>(b) Complete the square to find vertices, then analyze circumcentre position.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{f}(x)=ax^2+bx$，其中 $a$ 及 $b$ 均為非零的常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $4a+2b=60$ 及 $9a+3b=99$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $a=3$ 及 $b=24$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{f}(x)=3x^2+24x$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">    $\\mathrm{f}(x)$<br>$=3x^2+24x$<br>$=3(x^2+8x)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=3(x^2+8x+16-16)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=3(x+4)^2-48$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$Q$ 的坐標為 $(-4,-48)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">$(-4,75)$</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num2">(iii)</div><div class="ms-content ms-from-l3">    $QS$ 的斜率<br>$=\\dfrac{-48-0}{-4-56}$<br>$=\\dfrac{4}{5}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    $RS$ 的斜率<br>$=\\dfrac{75-0}{-4-56}$<br>$=\\dfrac{-5}{4}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">由此，$QS$ 的斜率與 $RS$ 的斜率之積為 $-1$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，$\\angle QSR$ 為一直角。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所以，$QR$ 為 $\\Delta QRS$ 的外接圓的一直徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $P$ 為 $\\Delta QRS$ 的外心。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$P$ 為連接 $Q$ 與 $R$ 的線段的中點。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解：</span><br>   $QS^2+RS^2$<br>$=((-4-56)^2+(-48-0)^2)+((-4-56)^2+(75-0)^2)$<br>$=15\\,129$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    $QR^2$<br>$=(-48-75)^2$<br>$=15\\,129$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">由此，可得 $QS^2+RS^2=QR^2$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此， $\\angle QSR$ 為一直角。<br>所以，$QR$ 為 $\\Delta QRS$ 的外接圓的一直徑。<br>留意 $P$ 為 $\\Delta QRS$ 的外心。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$P$ 為連接 $Q$ 與 $R$ 的線段的中點。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2018-DSE-MATH-CP1-Q19",
        year: 2018,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Intersection of Straight Line and Circle"],
        difficulty: 3,
        content: {
            tc: `圓 $C$ 的圓心的坐標為 $(8,2)$。 將 $C$ 的半徑記為 $r$。 設 $L$ 為直線 $kx-5y-21=0$，其中 $k$ 為一常數。 已知 $L$ 為 $C$ 的切線。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $C$ 的方程，答案以 $r$ 表示。 由此，以 $k$ 表 $r^2$。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$L$ 通過點 $D(18,39)$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $r$。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">已知 $L$ 與 $y$ 軸相交於點 $E$。 設 $F$ 為一點使得 $C$ 為 $\\Delta DEF$ 的內切圓。 $\\Delta DEF$ 是否一鈍角三角形？ 試解釋你的答案。 <br><span class="marks">(8分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The coordinates of the centre of the circle $C$ are $(8,2)$. Denote the radius of $C$ by $r$. Let $L$ be the straight line $kx-5y-21=0$, where $k$ is a constant. It is given that $L$ is a tangent to $C$. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the equation of $C$ in terms of $r$. Hence, express $r^2$ in terms of $k$. <span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$L$ passes through the point $D(18,39)$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Find $r$. </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">It is given that $L$ cuts the $y$-axis at the point $E$. Let $F$ be a point such that $C$ is the inscribed circle of $\\Delta DEF$. Is $\\Delta DEF$ an obtuse-angled triangle? Explain your answer. <br><span class="marks">(8 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 用圓心到直線距離等於半徑求關係。 <br>(b) 代入點求 $k$ 及 $r$，再分析三角形性質。 `,
            en: `(a) Use the distance from centre to line equals radius.<br>(b) Substitute point to find $k$ and $r$, then analyze the triangle properties.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$C$ 的方程為 $(x-8)^2+(y-2)^2=r^2$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">把 $y=\\dfrac{kx-21}{5}$ 代入 $(x-8)^2+(y-2)^2=r^2$，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(x-8)^2+\\left(\\dfrac{kx-21}{5}-2\\right)^2=r^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(k^2+25)x^2+(-62k-400)x+2561-25r^2=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $L$ 為 $C$ 的切線。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $(-62k-400)^2-4(k^2+25)(2561-25r^2)=0$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $r^2=\\dfrac{64k^2-496k+961}{k^2+25}$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">由於 $L$ 通過 $D$，可得 $18k-5(39)-21=0$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解後，可得 $k=12$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉 (a)，可得 $r^2=\\dfrac{64(12)^2-496(12)+961}{12^2+25}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，可得 $r=5$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">設 $G$ 為 $C$ 的圓心。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $E$ 的坐標為 $\\left(0,-\\dfrac{21}{5}\\right)$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">再者留意 $G$ 為 $\\Delta DEF$ 的內心。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$DG^2=(18-8)^2+(39-2)^2$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$DG=\\sqrt{1469}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sin\\angle EDG=\\dfrac{r}{DG}$ ......<sup>#</sup></div><div class="ms-mark">1M<sup>#</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sin\\angle EDG=\\dfrac{5}{\\sqrt{1469}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle EDG\\approx 7.49585764^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">$EG^2=(8-0)^2+\\left(2+\\dfrac{21}{5}\\right)^2$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$EG=\\dfrac{\\sqrt{2561}}{5}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sin\\angle DEG=\\dfrac{r}{EG}$ ......<sup>#</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sin\\angle DEG=\\dfrac{5}{\\sqrt{2561}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle DEG\\approx 29.60445074^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意  $\\angle EDG=\\angle FDG$  及  $\\angle DEG=\\angle FEG$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $\\angle DFE$<br>$=180^\\circ-(\\angle EDG+\\angle FDG)-(\\angle DEG+\\angle FEG)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx 180^\\circ-2(7.49585764^\\circ)-2(29.60445074^\\circ)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx 105.7993832^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$&gt;90^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$\\Delta DEF$ 是一鈍角三角形。</div><div class="ms-mark">1A</div></div></div>`
    }
);
