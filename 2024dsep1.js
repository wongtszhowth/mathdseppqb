// 2024dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2024-DSE-MATH-CP1-Q01",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 1,
        content: {
            tc: `化簡 $\\dfrac{2}{4h-7} - \\dfrac{3}{6h-5}$。<span class="marks">(3分)</span>`,
            en: `Simplify $\\dfrac{2}{4h-7} - \\dfrac{3}{6h-5}$.<span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `先通分母，然後展開分子並合併同類項（注意負號）。`,
            en: `Find a common denominator, then expand the numerator and combine like terms (pay attention to the negative signs).`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{2}{4h-7}-\\dfrac{3}{6h-5}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{2(6h-5)-3(4h-7)}{(4h-7)(6h-5)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{12h-10-12h+21}{(4h-7)(6h-5)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{11}{(4h-7)(6h-5)}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q02",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: {
            tc: `令 $x$ 成為公式 $\\dfrac{Ax+C}{B}=3x$ 的主項。<span class="marks">(3分)</span>`,
            en: `Make $x$ the subject of the formula $\\dfrac{Ax+C}{B}=3x$.<span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `兩邊同乘以 $B$ 消除分母，將所有含有 $x$ 的項移到等號同一邊，抽公因式後即可單獨導出 $x$。`,
            en: `Multiply both sides by $B$ to clear the denominator, move all terms containing $x$ to one side, factor out $x$, and solve for $x$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{Ax+C}{B}=3x$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$Ax+C=3Bx$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$Ax-3Bx=-C$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=\\dfrac{C}{3B-A}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>$\\dfrac{Ax+C}{B}=3x$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{Ax}{B}+\\dfrac{C}{B}=3x$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{Ax}{B}-3x=\\dfrac{-C}{B}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=\\dfrac{C}{3B-A}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q03",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `因式分解<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$6r^{2}-13rs-28s^{2}$ ，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$4r-14s+6r^{2}-13rs-28s^{2}$ 。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Factorize<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$6r^{2}-13rs-28s^{2}$,<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$4r-14s+6r^{2}-13rs-28s^{2}$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 使用十字相乘法；(b) 利用 (a) 的結果，將前兩項提取公因式後進行整體分組分解。`,
            en: `(a) Use cross-multiplication; (b) Use the result of (a), factor out the common factor from the first two terms, then factorize by grouping.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $6r^2-13rs-28s^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(2r-7s)(3r+4s)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $4r-14s+6r^2-13rs-28s^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4r-14s+(2r-7s)(3r+4s)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2(2r-7s)+(2r-7s)(3r+4s)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(2r-7s)(2+3r+4s)$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q04",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: {
            tc: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求同時滿足  $\\dfrac{5x+7}{4}-1<2x$  及  $3x+9\\ge 0$  的 $x$ 值的範圍。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出同時滿足 (a) 的不等式的最小整數。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
            en: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the range of values of $x$ which satisfy both $\\dfrac{5x+7}{4}-1<2x$ and $3x+9\\ge 0$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Write down the least integer satisfying both inequalities in (a).<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 分別解出兩個不等式，再找出它們在數線上的重疊部分（及 / and）；(b) 在解的範圍內找出最小的整數值。`,
            en: `(a) Solve both inequalities separately, then find their overlapping region on the number line; (b) Find the smallest integer within the solution range.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{5x+7}{4}-1<2x$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$5x+7-4<8x$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-3x<-3$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x>1$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$3x+9\\ge 0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x\\ge -3$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的範圍為 $x>1$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">2</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q05",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: {
            tc: `設 $a$ 、 $b$ 及 $c$ 均為非零的數使得 $5a=6c$ 及 $\\dfrac{2b+7c}{b+c}=4$。 求 $\\dfrac{5a+8b}{2b+3c}$ 的值。<span class="marks">(4分)</span>`,
            en: `Let $a$, $b$ and $c$ be non-zero numbers such that $5a=6c$ and $\\dfrac{2b+7c}{b+c}=4$. Find $\\dfrac{5a+8b}{2b+3c}$.<span class="marks">(4 marks)</span>`
        },
        hint: {
            tc: `利用已知條件將 $a$ 和 $b$ 都用含 $c$ 的代數式表示，然後代入所求分數中將 $c$ 約去。`,
            en: `Use the given equations to express both $a$ and $b$ in terms of $c$, then substitute them into the fraction to cancel out $c$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$a:c=6:5$</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{2b+7c}{b+c}=4$<br>$2b+7c=4b+4c$<br>$2b=3c$<br>$b:c=3:2$<br>$b:c=15:10$<br>$a:c=12:10$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得 $a:b:c=12:15:10$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">設 $a=12k$ 、 $b=15k$ 及 $c=10k$ ，其中 $k$ 為一非零的常數。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{5a+8b}{2b+3c}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{5(12k)+8(15k)}{2(15k)+3(10k)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=3$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q06",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: {
            tc: `某計算機的標價較其成本高 40%。 該計算機以其標價七五折售出並獲利 \\$13。 求該計算機的標價。<span class="marks">(4分)</span>`,
            en: `The marked price of a calculator is 40% higher than its cost. The calculator is sold at a discount of 25% on its marked price and the profit is \\$13. Find the marked price of the calculator.<span class="marks">(4 marks)</span>`
        },
        hint: {
            tc: `設成本為 $C$，則標價為 $1.4C$，售價為 $1.4C \\times 0.75$。利用「售價 $-$ 成本 $=$ 獲利」建立方程。`,
            en: `Let the cost be $C$, then the marked price is $1.4C$, and the selling price is $1.4C \\times 0.75$. Set up an equation using "Selling Price $-$ Cost $=$ Profit".`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $\\$x$ 為該計算機的標價。<br>   該計算機的成本</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x}{(1+40\\%)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$\\left(\\dfrac{5x}{7}\\right)$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    該計算機的售價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=(75\\%)x$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$\\left(\\dfrac{3x}{4}\\right)$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{3x}{4}-\\dfrac{5x}{7}=13$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=364$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該計算機的標價為 $\\$364$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>設 $\\$c$ 為該計算機的成本。<br>   該計算機的標價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=(1+40\\%)c$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$1.4c$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    該計算機的售價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=(75\\%)(1.4c)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$1.05c$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">$1.05c-c=13$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$c=260$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該計算機的標價為 $\\$364$。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q07",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Perimeters and Areas", "Coordinate Geometry"],
        difficulty: 2,
        content: {
            tc: `<div style="color: red;">在某極坐標系中，$O$ 為極點。 點 $P$、點 $Q$ 及點 $R$ 的極坐標分別為 $(11,59^{\\circ})$、$(60,149^{\\circ})$ 及 $(144,239^{\\circ})$。</div><div class="q-line" style="color: red;"><span class="q-label">(a)</span><div class="q-text-content" style="color: red;">求 $\\angle POQ$。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line" style="color: red;"><span class="q-label">(b)</span><div class="q-text-content" style="color: red;">$P$、$O$ 與 $R$ 是否共線？ 試解釋你的答案。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line" style="color: red;"><span class="q-label">(c)</span><div class="q-text-content" style="color: red;">求 $\\Delta PQR$ 的周界。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `<div style="color: red;">In a polar coordinate system, $O$ is the pole. The polar coordinates of the points $P$, $Q$ and $R$ are $(11,59^{\\circ})$, $(60,149^{\\circ})$ and $(144,239^{\\circ})$ respectively.</div><div class="q-line" style="color: red;"><span class="q-label">(a)</span><div class="q-text-content" style="color: red;">Find $\\angle POQ$.<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line" style="color: red;"><span class="q-label">(b)</span><div class="q-text-content" style="color: red;">Are $P$, $O$ and $R$ collinear? Explain your answer.<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line" style="color: red;"><span class="q-label">(c)</span><div class="q-text-content" style="color: red;">Find the perimeter of $\\Delta PQR$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 兩點的極角相減；(b) 檢查 $P$ 與 $R$ 的極角相差是否為 $180^{\\circ}$；(c) 利用共線與垂直關係，在直角三角形中應用畢氏定理求邊長。`,
            en: `(a) Subtract the polar angles of the two points; (b) Check if the difference between the polar angles of $P$ and $R$ is $180^{\\circ}$; (c) Use collinearity and perpendicularity to apply Pythagoras' theorem in right-angled triangles to find the side lengths.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $\\angle POQ$<br>$=149^\\circ-59^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=90^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $\\angle POR$<br>$=239^\\circ-59^\\circ$<br>$=180^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$P$、$O$ 與 $R$ 共線。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">    所求的周界</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=PQ+QR+PR$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{11^2+60^2}+\\sqrt{60^2+144^2}+(11+144)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=372$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q08",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)", "Perimeters and Areas"],
        difficulty: 2,
        content: {
            tc: `圖中，$E$ 為 $AC$ 與 $BD$ 的交點。 已知 $\\angle ACB=\\angle ADB=90^{\\circ}$ 及 $AD=BC$。<br><img src="img/2024dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 65%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ABC\\cong\\Delta BAD$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若 $AD=12\\text{ cm}$ 及 $DE=9\\text{ cm}$，求五邊形 $ABCED$ 的面積。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `In Figure 1, $E$ is the point of intersection of $AC$ and $BD$. It is given that $\\angle ACB=\\angle ADB=90^{\\circ}$ and $AD=BC$.<br><img src="img/2024dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 65%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Prove that $\\Delta ABC\\cong\\Delta BAD$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">If $AD=12\\text{ cm}$ and $DE=9\\text{ cm}$, find the area of the pentagon $ABCED$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 利用 R.H.S.（斜邊、直角邊）證明全等；(b) 由全等推出對應邊相等，進而利用畢氏定理求出直角三角形的其餘邊長，最後將圖形分割成兩個三角形求面積和。`,
            en: `(a) Use R.H.S. (Hypotenuse, Right angle, Side) to prove congruence; (b) Use congruence to deduce equal corresponding sides, apply Pythagoras' theorem to find other sides, and split the figure into two triangles to calculate the total area.`
        },
        solution: `<div class="ms-container"><div class="ms-row" style="white-space: pre; overflow-x: visible; overflow-y: visible;"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2" style="white-space: pre; overflow-x: visible; overflow-y: visible; grid-column: 2 / 6;">$\\angle ACB=\\angle ADB=90^\\circ$\t\t[已知]<br>$BC=AD$\t\t\t\t[已知]<br>$AB=AB$\t\t\t\t\t[公共邊]<br>$\\Delta ABC\\cong\\Delta BAD$\t\t\t(RHS)</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $AE$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{AD^2+DE^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=15\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">藉 (a)，可得 $\\angle ABE=\\angle BAE$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由此，可得 $AE=BE$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $BE=15\\text{ cm}$。<br>留意 $CE=DE=9\\text{ cm}$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    所求的面積<br>$=\\dfrac{1}{2}(AD)(BD)+\\dfrac{1}{2}(BC)(CE)$<br>$=\\dfrac{1}{2}(12)(9+15)+\\dfrac{1}{2}(12)(9)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=198\\text{ cm}^2$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q09",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Probability", "Measures of Central Tendency"],
        difficulty: 1,
        content: {
            tc: `下表顯示某群主婦擁有鑰匙的數目的分佈。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">鑰匙的數目</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">7</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">8</td>      
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">主婦人數</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">10</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">9</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$k$</td>
    </tr>
  </table>若從該群中隨機選出一名主婦，則她擁有多於 $6$ 條鑰匙的概率為 $\\dfrac{5}{18}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $k$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出該分佈的平均值、眾數及中位數。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The table below shows the distribution of the numbers of keys owned by a group of housewives.<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Number of keys</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">7</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">8</td>      
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Number of housewives</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">10</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">9</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$k$</td>
    </tr>
  </table>If a housewife is randomly selected from the group, then the probability that she owns more than $6$ keys is $\\dfrac{5}{18}$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $k$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Write down the mean, the mode and the median of the distribution.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 多於 6 條代表 7 條或 8 條，概率為 $\\dfrac{4+k}{\\text{總人數}}$，藉此建立方程求 $k$；(b) 將 $k$ 代回後依常規統計公式計算。`,
            en: `(a) More than 6 keys means 7 or 8 keys, so the probability is $\\dfrac{4+k}{\\text{Total housewives}}$. Set up an equation to find $k$; (b) Substitute $k$ back and calculate using standard statistical formulas.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{4+k}{10+9+4+3+4+k}=\\dfrac{5}{18}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k=6$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">平均值 $=5$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">眾數 $=3$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">中位數 $=4$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q10",
        year: 2024,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations", "Quadratic Equations in One Unknown"],
        difficulty: 1,
        content: {
            tc: `已知 $\\mathrm{g}(x)$ 的一部分為常數，而另一部分則隨 $x$ 正變。 假定 $\\mathrm{g}(-3)=-21$ 及 $\\mathrm{g}(7)=9$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{g}(x)$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $\\mathrm{h}(x)=x~\\mathrm{g}(x)+k$，其中 $k$ 為一實常數。 若方程 $\\mathrm{h}(x)=0$ 所有的根均為實數，求 $k$ 值的範圍。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `It is given that $\\mathrm{g}(x)$ is partly constant and partly varies as $x$. Suppose that $\\mathrm{g}(-3)=-21$ and $\\mathrm{g}(7)=9$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $\\mathrm{g}(x)$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Let $\\mathrm{h}(x)=x~\\mathrm{g}(x)+k$, where $k$ is a real constant. If all the roots of the equation $\\mathrm{h}(x)=0$ are real numbers, find the range of values of $k$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 設 $g(x) = a + bx$，代入兩點聯立求常數；(b) 展開 $h(x)=0$ 得到一元二次方程，利用判別式 $\\Delta \\ge 0$ 求範圍。`,
            en: `(a) Let $g(x) = a + bx$, substitute both given points to solve the simultaneous equations for the constants; (b) Expand $h(x)=0$ into a quadratic equation and use the discriminant $\\Delta \\ge 0$ to find the range.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{g}(x)=a+bx$ ，其中 $a$ 及 $b$ 均為非零的常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $a-3b=-21$ 及 $a+7b=9$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $a=-12$ 及 $b=3$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{g}(x)=3x-12$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{h}(x)=0$<br>$x\\mathrm{g}(x)+k=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$3x^2-12x+k=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意方程 $\\mathrm{h}(x)=0$ 所有的根均為實數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(-12)^2-4(3)(k)\\ge 0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k\\le 12$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q11",
        year: 2024,
        type: "P1",
        section: "A2",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 1,
        content: {
            tc: `下面的幹葉圖顯示一群研究員在某月內用於閱讀期刊的時數的分佈：
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
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">2</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　0　1　$a$　$a$　$a$　8　8　9　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　0　2　3　4　4　7　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　$b$</td>
    </tr>
</table>
該分佈的平均值為 $30$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $a$ 及 $b$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出該分佈的最小可取分佈域。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">求該分佈的最大可取四分位數間距。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The stem-and-leaf diagram below shows the distribution of the numbers of hours spent on reading journals in a month by a group of researchers:
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
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">2</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　0　1　$a$　$a$　$a$　8　8　9　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　0　2　3　4　4　7　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　$b$</td>
    </tr>
</table>
The mean of the distribution is $30$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $a$ and $b$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Write down the least possible range of the distribution.<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">Find the greatest possible inter-quartile range of the distribution.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 根據葉的常規排序可知 $0 \\le a \\le 8$ 且 $9 \\le b \\le 9 \\Rightarrow b=9$（或利用平均值方程聯立求解）；(b) 分佈域 $=$ 最大值 $-$ 最小值；(c) 四分位數間距 $= Q_3 - Q_1$，調整未知數的位置使差值達到最大。`,
            en: `(a) From the order of leaves, set up the mean equation to solve for $a$ and $b$; (b) Range $=$ Maximum value $-$ Minimum value; (c) Inter-quartile range $= Q_3 - Q_1$, determine which possible values of $a$ maximize this difference.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\frac{21+32+33+37+39+40+40+b+(20+28+29+30+34)(2)+(20+a)(3)}{20}=30$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，可得 $3a+b=16$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\begin{cases}a=3\\\\b=7\\end{cases}$ 、 $\\begin{cases}a=4\\\\b=4\\end{cases}$ 或 $\\begin{cases}a=5\\\\b=1\\end{cases}$。</div><div class="ms-mark">1A+1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">21</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">當 $a=3$ 時，該分佈的四分位數間距最大。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">    該分佈的最大可取四分位數間距</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=34-23$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=11$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>藉 (a)，有三種情況。<br>情況 1：\t$a=3$<br>\t\t   該分佈的四分位數間距</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">\t\t$=34-23$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">\t\t$=11$ ......<sup>#</sup></div><div class="ms-mark">1M<sup>#</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">情況 2：\t$a=4$<br>\t\t   該分佈的四分位數間距<br>\t\t$=34-24$ ......<sup>@</sup><br>\t\t$=10$ ......<sup>#</sup><br>情況 3：\t$a=5$<br>\t\t   該分佈的四分位數間距<br>\t\t$=34-25$ ......<sup>@</sup><br>\t\t$=9$ ......<sup>#</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該分佈的最大可取四分位數間距為 11。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q12",
        year: 2024,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Equations of Straight Lines"],
        difficulty: 3,
        content: {
            tc: `將原點記為 $O$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$A$ 及 $B$ 均為正 $x$ 軸上的點使得 $A$ 的 $x$ 坐標大於 $B$ 的 $x$ 坐標。 通過 $B$ 的垂直線與直線 $y=mx$ 相交於點 $C$ 使得 $AB=BC$，其中 $m$ 為一正常數。 設 $D$ 為一點使得 $ABCD$ 為一正方形。 以 $m$ 表 $OD$ 的斜率。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">點 $M$ 及點 $N$ 的坐標分別為 $(6,5)$ 及 $(10,0)$。 設 $P$ 及 $Q$ 分別為 $OM$ 及 $MN$ 上的點，而 $R$ 及 $S$ 均為 $x$ 軸上的點。 若四邊形 $PQRS$ 為一正方形，求 $P$ 的 $x$ 坐標。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Denote the origin by $O$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$A$ and $B$ are points lying on the positive $x$-axis such that the $x$-coordinate of $A$ is greater than the $x$-coordinate of $B$. A vertical line which passes through $B$ cuts the straight line $y=mx$ at the point $C$ such that $AB=BC$, where $m$ is a positive constant. Let $D$ be a point such that $ABCD$ is a square. Express the slope of $OD$ in terms of $m$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">The coordinates of the points $M$ and $N$ are $(6,5)$ and $(10,0)$ respectively. Let $P$ and $Q$ be points lying on $OM$ and $MN$ respectively while $R$ and $S$ be points lying on the $x$-axis. If the quadrilateral $PQRS$ is a square, find the $x$-coordinate of $P$.<span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 設 $B=(b,0)$，依題意表示出 $C$、$A$、$D$ 的坐標，再用斜率公式求 $OD$ 的斜率；(b) 構造相似三角形或利用直線方程與正方形的幾何約束求解。`,
            en: `(a) Let $B=(b,0)$, express the coordinates of $C$, $A$, and $D$ according to the conditions, then use the slope formula to find the slope of $OD$; (b) Use similar triangles or line equations along with geometric properties of the square to solve for $P$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $(b,0)$ 為 $B$ 的坐標，<br>則 $A$ 、 $C$ 及 $D$ 的坐標分別為 $(mb+b,0)$ 、 $(b,mb)$ 及 $(mb+b,mb)$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $OD$ 的斜率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{mb-0}{mb+b-0}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{m}{m+1}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>設 $k$ 為 $OD$ 的斜率。<br>將 $A$ 的 $x$ 坐標記為 $a$ ，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">則 $D$ 的坐標為 $(a,ka)$ 。 ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，$B$ 的 $x$ 坐標為 $a-ka$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$C$ 的坐標為 $(a-ka,ka)$ 。 ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$ka=m(a-ka)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k=m-mk$<br>$k=\\dfrac{m}{m+1}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$OD$ 的斜率為 $\\dfrac{m}{m+1}$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $OM$ 的斜率<br>$=\\dfrac{5-0}{6-0}$<br>$=\\dfrac{5}{6}$<p>   $OQ$ 的斜率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{\\dfrac{5}{6}}{\\dfrac{5}{6}+1}$  （藉 (a)</div><div class="ms-mark">1M</div></div><br><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{11}$<br>故此，通過 $O$ 及 $Q$ 的直線的方程為 $y=\\dfrac{5x}{11}$ 。<p>通過 $M$ 及 $N$ 的直線的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$y-0=\\dfrac{5-0}{6-10}(x-10)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$y=\\dfrac{-5x}{4}+\\dfrac{25}{2}$<br>解 $y=\\dfrac{5x}{11}$ 與 $y=\\dfrac{-5x}{4}+\\dfrac{25}{2}$ 後，$Q$ 的坐標為 $\\left(\\dfrac{22}{3},\\dfrac{10}{3}\\right)$ 。<p>   $P$ 的 $x$ 坐標</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{22}{3}-\\dfrac{10}{3}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q13",
        year: 2024,
        type: "P1",
        section: "A2",
        level: ["Junior", "Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `某實心直立角錐體的底為一正方形，其邊長為 $64\\text{ cm}$。 該角錐體的高為 $24\\text{ cm}$。 將該角錐體以一平行於其底的平面分成一平截頭體 $X$ 及一角錐體 $Y$。 已知 $Y$ 的高為 $18\\text{ cm}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $X$ 的體積。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">另一實心直立角錐體的底為一正方形。 將這角錐體以一平行於其底的平面分成一平截頭體 $Z$ 及一角錐體。 $Z$ 的高及總表面面積分別為 $3\\text{ cm}$ 及 $960\\text{ cm}^2$。 $X$ 與 $Z$ 是否相似？ 試解釋你的答案。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The base of a solid right pyramid is a square of side $64\\text{ cm}$. The height of the pyramid is $24\\text{ cm}$. The pyramid is divided into a frustum $X$ and a pyramid $Y$ by a plane which is parallel to its base. It is given that the height of $Y$ is $18\\text{ cm}$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the volume of $X$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">The base of another solid right pyramid is a square. This pyramid is divided into a frustum $Z$ and a pyramid by a plane which is parallel to its base. The height and the total surface area of $Z$ are $3\\text{ cm}$ and $960\\text{ cm}^2$ respectively. Are $X$ and $Z$ similar? Explain your answer.<span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 小角錐體的高 $= 24 - 18 = 6\\text{ cm}$。利用相似錐體體積比等於高度比的立方，求出平截頭體體積；(b) 若兩幾何體相似，其對應面積之比必須等於對應長度（高）之比的平方，以此進行檢驗。`,
            en: `(a) Height of small pyramid $= 24 - 18 = 6\\text{ cm}$. Use the ratio of volumes equal to the cube of the height ratio for similar pyramids; (b) Check if the ratio of total surface areas equals the square of the height ratio.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $X$ 的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}(64^2)(24)\\left(1-\\left(\\dfrac{18}{24}\\right)^3\\right)$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=18944\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $X$ 每一側面的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}\\left(64+\\dfrac{3}{4}(64)\\right)\\sqrt{6^2+8^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=560\\text{ cm}^2$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $X$ 的總表面面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4(560)+64^2\\left(1+\\left(\\dfrac{3}{4}\\right)^2\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=8\\,640\\text{ cm}^2$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$\\left(\\dfrac{X\\text{ 的高}}{Z\\text{ 的高}}\\right)^2=\\left(\\dfrac{6}{3}\\right)^2=4$<br>$\\dfrac{X\\text{ 的總表面面積}}{Z\\text{ 的總表面面積}}=\\dfrac{8640}{960}=9$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{X\\text{ 的總表面面積}}{Z\\text{ 的總表面面積}}\\neq\\left(\\dfrac{X\\text{ 的高}}{Z\\text{ 的高}}\\right)^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$X$ 與 $Z$ 不相似。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q14",
        year: 2024,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: {
            tc: `設 $\\mathrm{F}(x)=(6x^2+x+p)(qx^2+rx-10)$，其中 $p$ 、 $q$ 及 $r$ 均為常數。 $\\mathrm{F}(x)$ 的常數項為 $40$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $p$ 的值。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">當 $\\mathrm{F}(x)$ 除以 $x+1$ 時，餘數為 $-12$。 已知 $x-2$ 為 $\\mathrm{F}(x)$ 的因式。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $q$ 及 $r$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">方程 $\\mathrm{F}(x)=0$ 有多少個無理根？ 試解釋你的答案。<br><span class="marks">(7分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Let $\\mathrm{F}(x)=(6x^2+x+p)(qx^2+rx-10)$, where $p$, $q$ and $r$ are constants. The constant term of $\\mathrm{F}(x)$ is $40$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Write down the value of $p$.<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">When $\\mathrm{F}(x)$ is divided by $x+1$, the remainder is $-12$. It is given that $x-2$ is a factor of $\\mathrm{F}(x)$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Find $q$ and $r$.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">How many irrational roots does the equation $\\mathrm{F}(x)=0$ have? Explain your answer.<br><span class="marks">(7 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 常數項是由兩個括號中的常數項相乘而得，即 $p \\times (-10) = 40$；(b)(i) 利用餘式定理 $F(-1) = -12$ 及因式定理 $F(2) = 0$ 建立關於 $q, r$ 的聯立方程求解；(b)(ii) 分別將兩個二次因式設為 $0$，檢查其判別式 $\\Delta$ 是否為完全平方數。`,
            en: `(a) The constant term is the product of constants in both brackets: $p \\times (-10) = 40$; (b)(i) Use the Remainder Theorem $F(-1) = -12$ and Factor Theorem $F(2) = 0$ to set up simultaneous equations for $q$ and $r$; (b)(ii) Solve $\\mathrm{F}(x)=0$ and inspect if the roots are irrational.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$-4$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">藉 (a)，可得 $\\mathrm{F}(x)=(6x^2+x-4)(qx^2+rx-10)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\mathrm{F}(-1)=-12$ 及 $\\mathrm{F}(2)=0$。</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">由此，可得 $(6(-1)^2+(-1)-4)(q(-1)^2+r(-1)-10)=-12$
及 $(6(2)^2+(2)-4)(q(2)^2+r(2)-10)=0$。
故此，可得 $q-r=-2$ 及 $2q+r=5$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解後，可得 $q=1$ 及 $r=3$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">$\\mathrm{F}(x)=0$
$(6x^2+x-4)(x^2+3x-10)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$(6x^2+x-4)(x-2)(x+5)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$6x^2+x-4=0$ 、 $x-2=0$ 或 $x+5=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$x=\\dfrac{-1\\pm\\sqrt{97}}{12}$ 、 $x=2$ 或 $x=-5$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\dfrac{-1-\\sqrt{97}}{12}$ 及 $\\dfrac{-1+\\sqrt{97}}{12}$ 均為無理數。
再者留意 $2$ 及 $-5$ 均不是無理數。
因此，方程 $\\mathrm{F}(x)=0$ 有 2 個無理根。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q15",
        year: 2024,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: {
            tc: `已知 $\\log_9 y$ 為 $\\log_3 x$ 的線性函數。 將該線性函數的圖像記為 $L$。 $L$ 的斜率為 4 及 $L$ 通過點 $(5,22)$。 以 $x$ 表 $y$。<span class="marks">(3分)</span>`,
            en: `It is given that $\\log_9 y$ is a linear function of $\\log_3 x$. Denote the graph of the linear function by $L$. The slope of $L$ is $4$ and $L$ passes through the point $(5,22)$. Express $y$ in terms of $x$.<span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `建立線性方程 $\\log_9 y = 4 \\log_3 x + c$，利用換底公式將 $\\log_9 y$ 轉化為以 $3$ 為底數的對數形式，求出 $c$ 後化簡除去對數符號。`,
            en: `Set up the linear equation $\\log_9 y = 4 \\log_3 x + c$, use base-change formula to convert $\\log_9 y$ to base 3 logarithmic form, find $c$, and simplify to eliminate the logarithms.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\log_9 y-22=4(\\log_3 x-5)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\log_9 y=\\log_3 x^4+2$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\log_9 y=\\log_3 9x^4$ ......<sup>@</sup><br>$\\dfrac{\\log_3 y}{\\log_3 9}=\\log_3 9x^4$ ......<sup>@</sup><br>$\\log_3 y=2\\log_3 9x^4$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=81x^8$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q16",
        year: 2024,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations", "Probability"],
        difficulty: 1,
        content: {
            tc: `某袋子內有 16 個紅色杯及 4 個白色杯。 若從該袋子中隨機同時抽出 5 個杯，求<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">抽出恰好 $1$ 個白色杯的概率；<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">抽出至多 $3$ 個紅色杯的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `In a bag, there are $16$ red cups and $4$ white cups. If $5$ cups are randomly drawn from the bag at the same time, find<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">the probability that exactly $1$ white cup is drawn;<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">the probability that at most $3$ red cups are drawn.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `總杯數為 $20$，同時抽出 $5$ 個杯的總組合數為 $C_{5}^{20}$。(a) 分子為 $C_1^4 \\times C_4^{16}$；(b) 「至多 3 個紅」等價於「至少 2 個白」，即考慮 2白3紅、3白2紅、4白1紅的概率之和。`,
            en: `Total cups $= 20$, total combinations of drawing 5 cups $= C_5^{20}$. (a) Numerator is $C_1^4 \\times C_4^{16}$; (b) "At most 3 red" is equivalent to "at least 2 white", so sum the probabilities of 2W3R, 3W2R, and 4W1R.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_4^{16}C_1^4}{C_5^{20}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{455}{969}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>   所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=5\\left(\\dfrac{16}{20}\\right)\\left(\\dfrac{15}{19}\\right)\\left(\\dfrac{14}{18}\\right)\\left(\\dfrac{13}{17}\\right)\\left(\\dfrac{4}{16}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{455}{969}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1-\\dfrac{C_5^{16}}{C_5^{20}}-\\dfrac{455}{969}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1-\\dfrac{91}{323}-\\dfrac{455}{969}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{241}{969}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>   所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_3^{16}C_2^4}{C_5^{20}}+\\dfrac{C_2^{16}C_3^4}{C_5^{20}}+\\dfrac{C_1^{16}C_4^4}{C_5^{20}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{70}{323}+\\dfrac{10}{323}+\\dfrac{1}{969}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{241}{969}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q17",
        year: 2024,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Loci", "Coordinate Geometry", "Equations of Straight Lines", "Equations of Circles"],
        difficulty: 3,
        content: {
            tc: `點 $Q$ 及點 $R$ 的坐標分別為 $(10,-1)$ 及 $(-4,-9)$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $P$ 為直角坐標平面上的一動點使得 $PQ=PR$。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">描述 $\\mathit{\\Gamma}$ 與 $QR$ 之間的幾何關係。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $\\mathit{\\Gamma}$ 的方程。<br><span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $C$ 為通過 $Q$、 $R$ 及點 $(4,3)$ 的圓。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $C$ 的方程。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">點 $U$ 的坐標為 $(10,4)$。 現知 $U$ 位於 $C$ 以外。 $UV$ 及 $UW$ 分別為 $C$ 在點 $V$ 及點 $W$ 的切線。 $\\Delta UVW$ 的外接圓的面積是否大於 $100$？ 試解釋你的答案。<br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The coordinates of the points $Q$ and $R$ are $(10,-1)$ and $(-4,-9)$ respectively.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Let $P$ be a moving point in the rectangular coordinate plane such that $PQ=PR$. Denote the locus of $P$ by $\\mathit{\\Gamma}$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Describe the geometric relationship between $\\mathit{\\Gamma}$ and $QR$.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Find the equation of $\\mathit{\\Gamma}$.<br><span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Let $C$ be the circle which passes through $Q$, $R$ and the point $(4,3)$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Find the equation of $C$.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">The coordinates of the point $U$ are $(10,4)$. It is found that $U$ lies outside $C$. $UV$ and $UW$ are the tangents to $C$ at the points $V$ and $W$ respectively. Is the area of the circumcircle of $\\Delta UVW$ greater than $100$? Explain your answer.<br><span class="marks">(5 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a)(i) 到兩定點等距的軌跡為垂直平分線；(b)(i) 設圓的一般式或利用弦的垂直平分線過圓心聯立求方程；(b)(ii) $\\Delta UVW$ 的外接圓以圓心 $I$ 與 $U$ 的連線 $IU$ 為直徑，計算直徑後算出面積作比較。`,
            en: `(a)(i) Locus equidistant from two fixed points is the perpendicular bisector; (b)(i) Find the center using perpendicular bisectors of chords to write the equation of $C$; (b)(ii) The circumcircle of $\\Delta UVW$ has diameter $GU$ (where $G$ is the center of $C$). Calculate its diameter to find and compare the area.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$\\mathit{\\Gamma}$ 為 $QR$ 的垂直平分線。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">$QR$ 的中點的坐標為 $(3,-5)$ 。<p>   $QR$ 的斜率<br>$=\\dfrac{-9-(-1)}{-4-10}$<br>$=\\dfrac{4}{7}$<p>$\\mathit{\\Gamma}$ 的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$y-(-5)=\\dfrac{-7}{4}(x-3)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$7x+4y-1=0$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">將點 $(4,3)$ 記為 $S$ 。<br>$RS$ 的中點的坐標為 $(0,-3)$ 。<p>   $RS$ 的斜率<br>$=\\dfrac{3-(-9)}{4-(-4)}$<br>$=\\dfrac{3}{2}$<p>$RS$ 的垂直平分線的方程為<br>$y-(-3)=\\dfrac{-2}{3}(x-0)$<br>$2x+3y+9=0$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">解 $7x+4y-1=0$ 與 $2x+3y+9=0$ 後，$C$ 的圓心的坐標為 $(3,-5)$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$C$ 的半徑</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\sqrt{(4-3)^2+(3+5)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\sqrt{65}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$C$ 的方程為 $(x-3)^2+(y+5)^2=65$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">將 $C$ 的圓心記為 $G$ 。<br>留意 $G$ 在 $\\Delta UVW$ 的外接圓上。<br>再者留意 $GU$ 為 $\\Delta UVW$ 的外接圓的一直徑。<p>   $GU$<br>$=\\sqrt{(10-3)^2+(4+5)^2}$<br>$=\\sqrt{130}$<p>   $\\Delta UVW$ 的外接圓的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\pi\\left(\\dfrac{\\sqrt{130}}{2}\\right)^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx 102.1017612$<br>$>100$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$\\Delta UVW$ 的外接圓的面積大於 100 。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q18",
        year: 2024,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Trigonometry (3D)"],
        difficulty: 3,
        content: {
            tc: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$PQRS$ 為四邊形金屬薄片，其中 $PQ=12\\text{ cm}$ 、 $PS=10\\text{ cm}$ 、 $QR=13\\text{ cm}$ 、 $\\angle QPS=82^{\\circ}$ 及 $\\angle QRS=65^{\\circ}$。 求</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$QS$ 的長度，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$\\angle RQS$。<br><span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">現將 (a) 中所描述的金屬薄片 $PQRS$ 沿 $QS$ 摺起（見圖）。 已知平面 $PQS$ 與平面 $QRS$ 間的交角為 $80^{\\circ}$。</div></div><img src="img/2024dsep1q18b.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求由 $R$ 至平面 $PQS$ 的最短距離。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">設 $X$ 為平面 $QRS$ 上的任意點。 某人宣稱 $P$ 與 $X$ 間的距離超過 $8\\text{ cm}$。 該宣稱是否正確？ 試解釋你的答案。<br><span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
            en: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$PQRS$ is a thin quadrilateral metal sheet, where $PQ=12\\text{ cm}$, $PS=10\\text{ cm}$, $QR=13\\text{ cm}$, $\\angle QPS=82^{\\circ}$ and $\\angle QRS=65^{\\circ}$. Find</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">the length of $QS$,</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$\\angle RQS$.<br><span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">The metal sheet $PQRS$ described in (a) is now folded along $QS$ ( see Figure 2 ). It is given that the angle between the plane $PQS$ and the plane $QRS$ is $80^{\\circ}$.</div></div><img src="img/2024dsep1q18b.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Find the shortest distance from $R$ to the plane $PQS$.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Let $X$ be any point lying on the plane $QRS$. Someone claims that the distance between $P$ and $X$ exceeds $8\\text{ cm}$. Is the claim correct? Explain your answer.<br><span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `<a href="https://www.geogebra.org/m/fh3fetdc" target="_blank">Geogebra 動態模型</a><br>(a)(i) 在 $\\Delta PQS$ 中使用餘弦定理；(a)(ii) 在 $\\Delta QRS$ 中使用正弦定理；(b)(i) 利用三面角或投影關係，最短距離為 $R$ 到棱 $QS$ 的垂線長度乘以 $\\sin 80^{\\circ}$。`,
            en: `<a href="https://www.geogebra.org/m/fh3fetdc" target="_blank">Geogebra 3D Model</a><br>(a)(i) Use the cosine formula in $\\Delta PQS$; (a)(ii) Use the sine formula in $\\Delta QRS$; (b)(i) The shortest distance equals the perpendicular distance from $R$ to $QS$ multiplied by $\\sin 80^{\\circ}$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">藉餘弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$QS^2=PQ^2+PS^2-2(PQ)(PS)\\cos\\angle QPS$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$QS^2=12^2+10^2-2(12)(10)\\cos 82^\\circ$<br>$QS\\approx 14.51201074$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$QS\\approx 14.5\\text{ cm}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$QS$ 的長度為 $14.5\\text{ cm}$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">藉正弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{\\sin\\angle QSR}{QR}=\\dfrac{\\sin\\angle QRS}{QS}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sin\\angle QSR\\approx\\dfrac{13\\sin 65^\\circ}{14.51201074}$<br>$\\angle QSR\\approx 54.27995332^\\circ$ 或 $\\angle QSR\\approx 125.7200468^\\circ$（捨去）</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    $\\angle RQS$<br>$\\approx 180^\\circ-65^\\circ-54.27995332^\\circ$<br>$\\approx 60.72004668^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx 60.7^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">將由 $R$ 至 $QS$ 的垂足記為 $T$ ，<br>則可得 $RT=13\\sin\\angle RQS$ 。<br>設 $h\\text{ cm}$ 為由 $R$ 至平面 $PQS$ 的最短距離。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$h=RT\\sin 80^\\circ$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$h=(13\\sin\\angle RQS)\\sin 80^\\circ$<br>藉 (a)(ii)，可得 $h\\approx 11.16685898$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，所求的距離為 $11.2\\text{ cm}$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">將由 $P$ 至平面 $QRS$ 的最短距離記為 $d\\text{ cm}$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{1}{3}(\\Delta PQS\\text{ 的面積})h=\\dfrac{1}{3}(\\Delta QRS\\text{ 的面積})d$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{d}{h}=\\dfrac{\\dfrac{1}{2}(PQ)(PS)\\sin\\angle QPS}{\\dfrac{1}{2}(QR)(QS)\\sin\\angle RQS}$<br>$\\dfrac{d}{11.16685898}\\approx\\dfrac{(12)(10)(\\sin 82^\\circ)}{(13)(14.51201074)\\sin 60.72004668^\\circ}$<br>$d\\approx 8.064136851$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">由於 $PX\\ge d$ ，所以 $P$ 與 $X$ 間的距離超過 $8\\text{ cm}$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，該宣稱正確。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q19",
        year: 2024,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra", "Geometry"],
        topic: ["Functions and Graphs", "Sequences", "Coordinate Geometry"],
        difficulty: 3,
        content: {
            tc: `設 $\\mathrm{f}(x)=2x^{2}+4mx+8x+2m^{2}+8m+n$，其中 $m$ 及 $n$ 均為實常數使得 $mn<0$。 將 $y=\\mathrm{f}(x)$ 的圖像的頂點記為 $P$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">利用配方法，以 $m$ 及 $n$ 表 $P$ 的坐標。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">描述 $\\mathrm{f}(x)$ 變換為 $\\mathrm{f}\\left(\\dfrac{x}{5}\\right)+7$ 所表示的幾何意義。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">將 $y=\\mathrm{f}\\left(\\dfrac{x}{5}\\right)+7$ 的圖像的頂點記為 $Q$。 設 $(a_1, b_1)$ 及 $(a_2, b_2)$ 分別為 $P$ 及 $Q$ 的坐標。 已知 $a_1, 1+n, a_2$ 為一等差數列及 $b_1, 4-m, b_2$ 為一等比數列。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $P$ 及 $Q$ 的坐標。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">點 $R$ 及點 $S$ 的坐標分別為 $(3t+27, t)$ 及 $(3t+3, 2t-3)$，其中 $t$ 為一實數。 $PQRS$ 有沒有可能為一菱形？ 試解釋你的答案。<br><span class="marks">(8分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Let $\\mathrm{f}(x)=2x^{2}+4mx+8x+2m^{2}+8m+n$, where $m$ and $n$ are real constants such that $mn<0$. Denote the vertex of the graph of $y=\\mathrm{f}(x)$ by $P$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Using the method of completing the square, express the coordinates of $P$ in terms of $m$ and $n$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Describe the geometric meaning represented by transforming $\\mathrm{f}(x)$ to $\\mathrm{f}\\left(\\dfrac{x}{5}\\right)+7$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">Denote the vertex of the graph of $y=\\mathrm{f}\\left(\\dfrac{x}{5}\\right)+7$ by $Q$. Let $(a_1,b_1)$ and $(a_2,b_2)$ be the coordinates of $P$ and $Q$ respectively. It is given that $a_1, 1+n, a_2$ is an arithmetic sequence and $b_1, 4-m, b_2$ is a geometric sequence.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Find the coordinates of $P$ and $Q$.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">The coordinates of the points $R$ and $S$ are $(3t+27,t)$ and $(3t+3,2t-3)$ respectively, where $t$ is a real number. Is it possible that $PQRS$ is a rhombus? Explain your answer.<br><span class="marks">(8 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 將 $x$ 的項分組提取 $2$ 後配方；(b) $x \\to x/5$ 代表橫向伸展至 5 倍，$+7$ 代表向上平移；(c)(i) 根據平移規律寫出 $Q$ 的坐標，利用等差中項及等比中項公式建立方程組求解；(c)(ii) 菱形的對角線必須互相垂直，檢查斜率乘積是否可能為 $-1$。`,
            en: `(a) Group terms with $x$, factor out 2, and complete the square; (b) $x \\to x/5$ represents stretching horizontally by 5 times, $+7$ represents shifting upwards by 7 units; (c)(i) Write coordinates of $Q$, set up equations using arithmetic mean and geometric mean; (c)(ii) Check if all four side lengths can be equal to form a rhombus.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $\\mathrm{f}(x)$<br>$=2x^2+4mx+8x+2m^2+8m+n$<br>$=2(x^2+2mx+4x)+2m^2+8m+n$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2(x^2+2(m+2)x+(m+2)^2-(m+2)^2)+2m^2+8m+n$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2(x+m+2)^2+n-8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$P$ 的坐標為 $(-m-2,n-8)$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{f}(x)$ 變換為 $\\mathrm{f}\\left(\\dfrac{x}{5}\\right)+7$ 表示沿 $x$ 軸放大至原本的 $5$ 倍且向上平移 $7$ 單位。</div><div class="ms-mark">1A+1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$Q$ 的坐標為 $(-5m-10,n-1)$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $1+n-(-m-2)=-5m-10-(1+n)$ 及 $\\dfrac{4-m}{n-8}=\\dfrac{n-1}{4-m}$ 。</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $n=-3m-7$ 及 $8m^2+77m+104=0$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $mn<0$ ，可得 $m=-8$ 及 $n=17$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$P$ 及 $Q$ 的坐標分別為 $(6,9)$ 及 $(30,16)$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">對 $PQ // SR$ ，$PQ$ 的斜率等於 $RS$ 的斜率。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所以，可得 $\\dfrac{t-(2t-3)}{3t+27-(3t+3)}=\\dfrac{16-9}{30-6}$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解後，可得 $t=-4$ 。<br>$R$ 及 $S$ 的坐標分別為 $(15,-4)$ 及 $(-9,-11)$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PQ=\\sqrt{(30-6)^2+(16-9)^2}=25$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$RS=\\sqrt{(15-(-9))^2+(-4-(-11))^2}=25$ ......<sup>@</sup><br>$QR=\\sqrt{(30-15)^2+(16-(-4))^2}=25$ ......<sup>@</sup><br>當 $t=-4$ 時，可得 $PQ=QR=RS$ 及 $PQ // SR$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$PQRS$ 有可能為一菱形。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解 1：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">對 $PQ=RS$ ，可得<br>$\\sqrt{(30-6)^2+(16-9)^2}=\\sqrt{((3t+27)-(3t+3))^2+(t-(2t-3))^2}$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">化簡後，可得 $t^2-6t-40=0$ 。<br>求解後，可得 $t=10$ 或 $t=-4$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">情況 1： $t=10$<br>$R$ 及 $S$ 的坐標分別為 $(57,10)$ 及 $(33,17)$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$QR=\\sqrt{(57-30)^2+(10-16)^2}=\\sqrt{765}\\ne 25=PQ$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由此，$PQRS$ 不是一菱形。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">情況 2： $t=-4$<br>$R$ 及 $S$ 的坐標分別為 $(15,-4)$ 及 $(-9,-11)$ 。<br>$QR=\\sqrt{(30-15)^2+(16-(-4))^2}=25$ ......<sup>@</sup><br>$PS=\\sqrt{(6-(-9))^2+(9-(-11))^2}=25$ ......<sup>@</sup><br>當 $t=-4$ 時，可得 $PQ=QR=RS=PS$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$PQRS$ 有可能為一菱形。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解 2：</span><br>對 $PQ=QR$ ，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sqrt{(30-6)^2+(16-9)^2}=\\sqrt{(3t+27-30)^2+(t-16)^2}$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">化簡後，可得 $t^2-5t-36=0$ 。<br>求解後，可得 $t=9$ 或 $t=-4$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">情況 1： $t=9$<br>$R$ 及 $S$ 的坐標分別為 $(54,9)$ 及 $(30,15)$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$RS=\\sqrt{(54-30)^2+(9-15)^2}=\\sqrt{612}\\ne 25=PQ$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由此，$PQRS$ 不是一菱形。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">情況 2： $t=-4$<br>$R$ 及 $S$ 的坐標分別為 $(15,-4)$ 及 $(-9,-11)$ 。<br>$RS=\\sqrt{(15-(-9))^2+(-4-(-11))^2}=25$ ......<sup>@</sup><br>$PS=\\sqrt{(6-(-9))^2+(9-(-11))^2}=25$ ......<sup>@</sup><br>當 $t=-4$ 時，可得 $PQ=QR=RS=PS$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$PQRS$ 有可能為一菱形。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解 3：</span><br>對 $QR=RS$ ，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sqrt{(3t+27-30)^2+(t-16)^2}=\\sqrt{(3t+27-3t-3)^2+(t-2t+3)^2}$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">化簡後，可得 $9t^2-44t-320=0$ 。<br>求解後，可得 $t=\\dfrac{80}{9}$ 或 $t=-4$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">情況 1： $t=\\dfrac{80}{9}$<br>$R$ 及 $S$ 的坐標分別為 $\\left(\\dfrac{161}{3},\\dfrac{80}{9}\\right)$ 及 $\\left(\\dfrac{89}{3},\\dfrac{133}{9}\\right)$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PS=\\sqrt{\\left(6-\\dfrac{89}{3}\\right)^2+\\left(9-\\dfrac{133}{9}\\right)^2}=\\sqrt{\\dfrac{48073}{81}}\\ne 25=PQ$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由此，$PQRS$ 不是一菱形。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">情況 2： $t=-4$<br>$R$ 及 $S$ 的坐標分別為 $(15,-4)$ 及 $(-9,-11)$ 。<br>$RS=\\sqrt{(15-(-9))^2+(-4-(-11))^2}=25$ ......<sup>@</sup><br>$PS=\\sqrt{(6-(-9))^2+(9-(-11))^2}=25$ ......<sup>@</sup><br>當 $t=-4$ 時，可得 $PQ=QR=RS=PS$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$PQRS$ 有可能為一菱形。</div><div class="ms-mark">1A</div></div></div>`
    }
);
