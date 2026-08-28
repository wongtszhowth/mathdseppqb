// 2015dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2015-DSE-MATH-CP1-Q01",
        year: 2015,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `化簡 $\\dfrac{m^9}{(m^3 n^{-7})^5}$，並以正指數表示答案。<span class="marks">(3分)</span>`,
            en: `Simplify $\\dfrac{m^9}{(m^3 n^{-7})^5}$ and express your answer with positive indices.<span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `先展開分母指數，再應用指數定律。`,
            en: `Expand the exponent in the denominator, then apply the index laws.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{m^9}{(m^3 n^{-7})^5}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{m^9}{m^{15} n^{-35}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{n^{35}}{m^6}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{n^{35}}{m^6}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q02",
        year: 2015,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: {
            tc: `令 $b$ 成為公式 $\\dfrac{4a + 5b - 7}{b} = 8$ 的主項。<span class="marks">(3分)</span>`,
            en: `Make $b$ the subject of the formula $\\dfrac{4a + 5b - 7}{b} = 8$. <span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `交叉相乘後解出 $b$。`,
            en: `Cross-multiply and solve for $b$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{4a+5b-7}{b}=8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$4a+5b-7=8b$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$4a-7=8b-5b$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$4a-7=3b$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$b=\\dfrac{4a-7}{3}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>$\\dfrac{4a+5b-7}{b}=8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{4a-7}{b}+5=8$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{4a-7}{b}=8-5$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{4a-7}{b}=3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$b=\\dfrac{4a-7}{3}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q03",
        year: 2015,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 1,
        content: {
            tc: `$A$ 袋內有四張卡，該四張卡分別記有數字 $1$、$3$、$5$ 及 $7$； 而 $B$ 袋內有五張卡，該五張卡分別記有數字 $2$、$4$、$6$、$8$ 及 $10$。 若從每袋中各隨機抽出一張卡，求所抽出的兩數字之和小於 $9$ 的概率。<span class="marks">(3分)</span>`,
            en: `Bag A contains four cards numbered $1$, $3$, $5$ and $7$ respectively while bag B contains five cards numbered $2$, $4$, $6$, $8$ and $10$ respectively. If one card is randomly drawn from each bag, find the probability that the sum of the two numbers drawn is less than $9$. <span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `列出所有可能結果，數算和小於 $9$ 的情況。`,
            en: `List all possible outcomes and count the cases where the sum is less than $9$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{1+2+3}{(4)(5)}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{6}{20}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{3}{10}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q04",
        year: 2015,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$x^3 + x^2 y - 7x^2$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$x^3 + x^2 y - 7x^2 - x - y + 7$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Factorize<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$x^3 + x^2 y - 7x^2$,<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$x^3 + x^2 y - 7x^2 - x - y + 7$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 提取公因式。 <br>(b) 分組因式分解。`,
            en: `(a) Factor out the common factor. <br>(b) Factorize by grouping.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $x^3+x^2 y-7x^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=x^2(x+y-7)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $x^3+x^2 y-7x^2-x-y+7$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=x^2(x+y-7)-(x+y-7)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(x^2-1)(x+y-7)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(x-1)(x+1)(x+y-7)$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q05",
        year: 2015,
        type: "P1",
        section: "A1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: {
            tc: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求同時滿足  $\\dfrac{7-3x}{5} \\le 2(x+2)$  及  $4x-13 > 0$  的 $x$ 值的範圍。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出同時滿足 (a) 的不等式的最小整數。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
            en: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the range of values of $x$ which satisfy both $\\dfrac{7-3x}{5} \\le 2(x+2)$ and $4x-13 > 0$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Write down the least integer which satisfies both inequalities in (a). <span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 分別解兩個不等式後取交集。 <br>(b) 從範圍中取最小整數。`,
            en: `(a) Solve the two inequalities separately and find their intersection. <br>(b) Find the least integer within the range.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{7-3x}{5}\\le 2(x+2)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$7-3x\\le 10(x+2)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$7-3x\\le 10x+20$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-13\\le 13x$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x\\ge -1$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$4x-13&gt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x&gt;\\dfrac{13}{4}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的範圍為 $x&gt;\\dfrac{13}{4}$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">4</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q06",
        year: 2015,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Percentages"],
        difficulty: 1,
        content: {
            tc: `某書的成本為 $\\$250$。 現售出該書且盈利百分率為 $20\\%$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該書的售價。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若該書以其標價七五折售出，求該書的標價。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The cost of a book is $\\$250$. The book is now sold and the percentage profit is $20\\%$. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the selling price of the book. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">If the book is sold at a discount of $25\\%$ on its marked price, find the marked price of the book. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 成本 $\\times (1+20\\%)$。 <br>(b) 售價 $= $ 標價 $\\times 0.75$。`,
            en: `(a) Cost $\\times (1+20\\%)$. <br>(b) Selling price $= $ Marked price $\\times 0.75$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    該書的售價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=250(1+20\\%)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\$300$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $\\$x$ 為該書的標價。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(75\\%)x=300$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=\\dfrac{300}{75\\%}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=400$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該書的標價為 $\\$400$。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q07",
        year: 2015,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: {
            tc: `<u>佩玲</u>擁有蘋果的數目為<u>志偉</u>擁有的 $4$ 倍。 若<u>佩玲</u>將她其中的 $12$ 個蘋果送給<u>志偉</u>，他們將擁有相同數目的蘋果。 求<u>佩玲</u>和<u>志偉</u>擁有蘋果的總數。<span class="marks">(4分)</span>`,
            en: `The number of apples owned by Ada is $4$ times that owned by Billy. If Ada gives $12$ of her apples to Billy, they will have the same number of apples. Find the total number of apples owned by Ada and Billy. <span class="marks">(4 marks)</span>`
        },
        hint: {
            tc: `設志偉有 $x$ 個，佩玲有 $4x$ 個，列出方程。`,
            en: `Let $x$ be the number of apples Billy has, and $4x$ be the number Ada has, then set up an equation.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $x$ 為<u>志偉</u>擁有蘋果的數目，則<u>佩玲</u>擁有蘋果的數目為 $4x$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$4x-12=x+12$</div><div class="ms-mark">1A+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$3x=24$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，<u>佩玲</u>和<u>志偉</u>擁有蘋果的總數為 40。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 1：</span><br>設 $x$ 及 $y$ 分別為<u>佩玲</u>及<u>志偉</u>擁有蘋果的數目。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得 $x=4y$ 及 $x-12=y+12$。</div><div class="ms-mark">1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">所以，可得 $4y-12=y+12$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">由此，可得 $3y=24$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">求解後，可得 $x=32$ 及 $y=8$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，<u>佩玲</u>和<u>志偉</u>擁有蘋果的總數為 40。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 2：</span><br>設 $x$ 為<u>佩玲</u>和<u>志偉</u>擁有蘋果的總數，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">則<u>佩玲</u>及<u>志偉</u>擁有蘋果的數目分別為 $\\dfrac{x}{2}+12$ 及 $\\dfrac{x}{2}-12$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{x}{2}+12=4\\left(\\dfrac{x}{2}-12\\right)$</div><div class="ms-mark">1A+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{x}{2}+12=2x-48$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$3x=120$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=40$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，<u>佩玲</u>和<u>志偉</u>擁有蘋果的總數為 40。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 3：</span><br>    <u>佩玲</u>和<u>志偉</u>擁有蘋果的總數</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{(12-(-12))(4+1)}{4-1}$</div><div class="ms-mark">1M+1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{(24)(5)}{3}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=40$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q08",
        year: 2015,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)", "Geometry (Triangles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一圓。 $E$ 為 $AC$ 上的一點使得 $BC=CE$。 已知 $AB=AD$、$\\angle ADB=58^\\circ$ 及 $\\angle CBD=25^\\circ$。<img src="img/2015dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;">求 $\\angle BDC$ 及 $\\angle ABE$。 <span class="marks">(5分)</span>`,
            en: `In the figure, $ABCD$ is a circle. $E$ is a point lying on $AC$ such that $BC = CE$. It is given that $AB = AD$, $\\angle ADB = 58^\\circ$ and $\\angle CBD = 25^\\circ$.<img src="img/2015dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;">Find $\\angle BDC$ and $\\angle ABE$. <span class="marks">(5 marks)</span>`
        },
        hint: {
            tc: `利用等腰三角形及圓內接四邊形性質。`,
            en: `Use properties of isosceles triangles and cyclic quadrilaterals.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">留意 $\\angle ABD=\\angle ADB=58^\\circ$。 ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l1">再者留意 $\\angle ABC+\\angle ADC=180^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得 $58^\\circ+25^\\circ+58^\\circ+\\angle BDC=180^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">所以，可得 $\\angle BDC=39^\\circ$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">又再留意 $\\angle BCE=\\angle ADB=58^\\circ$。 ......<sup>@</sup></div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    $\\angle BEC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{180^\\circ-\\angle BCE}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{180^\\circ-58^\\circ}{2}$<br>$=61^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    $\\angle ABE$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\angle BEC-\\angle BAC$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\angle BEC-\\angle BDC$<br>$=61^\\circ-39^\\circ$$=\\angle BEC-\\angle BDC$$=22^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">留意 $\\angle ABD=\\angle ADB=58^\\circ$ 及 $\\angle ACB=\\angle ADB=58^\\circ$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">    $\\angle CBE$<br>$=\\angle BEC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{180^\\circ-\\angle BCE}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{180^\\circ-\\angle ACB}{2}$<br>$=\\dfrac{180^\\circ-58^\\circ}{2}$<br>$=61^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">    $\\angle ABE$<br>$=\\angle ABD+\\angle CBD-\\angle CBE$<br>$=58^\\circ+25^\\circ-61^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=22^\\circ$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">    $\\angle BDC$<br>$=\\angle BAE$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\angle BEC - \\angle ABE$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=61^\\circ-22^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=39^\\circ$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q09",
        year: 2015,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration", "Perimeters and Areas"],
        difficulty: 2,
        content: {
            tc: `某扇形的半徑及面積分別為 $12\\text{ cm}$ 及 $30\\pi\\text{ cm}^2$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該扇形的角。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">以 $\\pi$ 表該扇形的周界。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The radius and the area of a sector are $12\\text{ cm}$ and $30\\pi\\text{ cm}^2$ respectively. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the angle of the sector. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Express the perimeter of the sector in terms of $\\pi$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 用扇形面積公式求角度。 <br>(b) 周界 $= $ 兩半徑 $+$ 弧長。`,
            en: `(a) Use the area formula of a sector to find the angle. <br>(b) Perimeter $= 2 \\times$ radius $+$ arc length.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\theta^\\circ$ 為該扇形的角。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{\\theta}{360}\\bigl(\\pi(12)^2\\bigr)=30\\pi$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\theta=75$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該扇形的角為 $75^\\circ$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的周界</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{75}{360}\\bigl(2\\pi(12)\\bigr)+2(12)$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(5\\pi+24)\\text{ cm}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q10",
        year: 2015,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: {
            tc: `當<u>素姍</u>在某月售出 $n$ 個手袋時，她該月的收入是 $\\$S$。 已知 $S$ 為兩部分之和，一部分為常數，而另一部分隨 $n$ 正變。 當 $n=10$ 時，$S=10\\,600$； 當 $n=6$ 時，$S=9\\,000$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">當<u>素姍</u>在某月售出 $20$ 個手袋時，求她該月的收入。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">當<u>素姍</u>在某月售出若干個手袋時，她該月的收入有沒有可能是 $\\$18\\,000$？ 試解釋你的答案。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `When Susan sells $n$ handbags in a month, her income in that month is $\\$S$. It is given that $S$ is a sum of two parts, one part is a constant and the other part varies as $n$. When $n=10$, $S=10\\,600$; when $n=6$, $S=9\\,000$. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">When Susan sells $20$ handbags in a month, find her income in that month. <span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Is it possible that when Susan sells a certain number of handbags in a month, her income in that month is $\\$18\\,000$? Explain your answer. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 設 $S = A + Bn$，代入求係數。 <br>(b) 檢查 $n$ 是否為正整數。`,
            en: `(a) Let $S = A + Bn$, substitute values to find constants. <br>(b) Check whether $n$ is a positive integer.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $S=a+bn$，其中 $a$ 及 $b$ 均為非零的常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $a+b(10)=10\\,600$  及  $a+b(6)=9\\,000$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $a=6\\,600$  及  $b=400$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    所求的收入<br>$=6\\,600+400(20)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\$14\\,600$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$6\\,600+400n=18\\,000$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$400n=11\\,400$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n=28.5$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $28.5$ 不是整數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，<u>素姍</u>該月的收入沒有可能是 $\\$18\\,000$。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q11",
        year: 2015,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: {
            tc: `設 $\\mathrm{f}(x) = (x-2)^2(x+h) + k$，其中 $h$ 及 $k$ 均為常數。 當 $\\mathrm{f}(x)$ 除以 $x-2$ 時，餘數為 $-5$。 已知 $\\mathrm{f}(x)$ 可被 $x-3$ 整除。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $h$ 及 $k$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱方程 $\\mathrm{f}(x)=0$ 所有的根均為整數。 你是否同意？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Let $\\mathrm{f}(x) = (x-2)^2(x+h) + k$, where $h$ and $k$ are constants. When $\\mathrm{f}(x)$ is divided by $x-2$, the remainder is $-5$. It is given that $\\mathrm{f}(x)$ is divisible by $x-3$. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $h$ and $k$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Someone claims that all the roots of the equation $\\mathrm{f}(x)=0$ are integers. Do you agree? Explain your answer. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 用餘數定理及因式定理求 $h$、$k$。 <br>(b) 展開後解方程檢查根。`,
            en: `(a) Use the Remainder Theorem and Factor Theorem to find $h$ and $k$. <br>(b) Expand and solve the equation to check the roots.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$k=-5$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\mathrm{f}(3)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(3-2)^2(3+h)-5=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$h=2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{f}(x)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(x-2)^2(x+2)-5=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x^3-2x^2-4x+3=0$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(x-3)(x^2+x-1)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=3$  或  $x=\\dfrac{-1\\pm\\sqrt{5}}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意  $\\dfrac{-1+\\sqrt{5}}{2}$  及  $\\dfrac{-1-\\sqrt{5}}{2}$  均不是整數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q12",
        year: 2015,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 1,
        content: {
            tc: `下面的幹葉圖顯示足球學會的學生的體重（以 $\\text{kg}$ 為單位）的分佈。
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
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0 2 3 3 3 3 9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">11 2 2 3{7} 9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3 5 8 9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">8 9</td>
    </tr>    
  </table><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求上述分佈的平均值、中位數及分佈域。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">現再有兩名學生加入該學會。 得知體重的分佈的平均值及分佈域均增加 $1\\text{ kg}$。 求這兩名學生各人的體重。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The stem-and-leaf diagram below shows the distribution of the weights (in $\\text{kg}$) of the students in a football club.
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
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0 2 3 3 3 3 9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1 1 2 2 3 7 9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3 5 8 9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">8 9</td>
    </tr>    
  </table><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the mean, the median and the range of the above distribution. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Two more students now join the club. It is found that both the mean and the range of the distribution of the weights are increased by $1\\text{ kg}$. Find the weight of each of these two students. <span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 計算所有數據的平均、中位及全距。 <br>(b) 由平均值及分佈域變化求新數據。`,
            en: `(a) Calculate the mean, median and range of the data set. <br>(b) Use the changes in mean and range to determine the weights of the two new students.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">平均值 $=55\\text{ kg}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">中位數 $=52\\text{ kg}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">分佈域 $=79-40=39\\text{ kg}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $a\\text{ kg}$ 及 $b\\text{ kg}$ 為這兩名學生的體重，其中 $a\\le b$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $\\dfrac{a+b+55(20)}{22}=55+1$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，可得 $a+b=132$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於分佈域增加 $1\\text{ kg}$，新分佈域為 $40\\text{ kg}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">有兩種情況。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">情況 1：\t$a=39$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">\t\t由於 $a+b=132$，可得 $b=93$。<br>\t\t所以，新分佈域為 $54\\text{ kg}$。<br>\t\t這是不可能。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">情況 2：\t$40\\le a\\le 80$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">\t\t在這情況下，可得 $b=80$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">\t\t由於 $a+b=132$，可得 $a=52$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，這兩名學生的體重為  $52\\text{ kg}$  及  $80\\text{ kg}$ 。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q13",
        year: 2015,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)", "Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一正方形。 $E$ 及 $F$ 分別為 $BC$ 及 $CD$ 上的點使得 $AE=BF$。 $AE$ 與 $BF$ 相交於 $G$。<img src="img/2015dsep1q13.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ABE \\cong \\Delta BCF$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$\\Delta BGE$ 是否一直角三角形？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">若 $CF=15\\text{ cm}$ 及 $EG=9\\text{ cm}$，求 $BG$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `In the figure, $ABCD$ is a square. $E$ and $F$ are points lying on $BC$ and $CD$ respectively such that $AE = BF$. $AE$ and $BF$ intersect at $G$.<img src="img/2015dsep1q13.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Prove that $\\Delta ABE \\cong \\Delta BCF$. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Is $\\Delta BGE$ a right-angled triangle? Explain your answer. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">If $CF=15\\text{ cm}$ and $EG=9\\text{ cm}$, find $BG$. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 利用正方形性質證明全等。 <br>(b) 檢查角度。 <br>(c) 用相似或畢氏定理。`,
            en: `(a) Prove congruency using properties of a square. <br>(b) Check the angles. <br>(c) Use similarity or Pythagoras' theorem.`
        },
        solution: `<div class="ms-container"><div class="ms-row" style="white-space: pre; overflow-x: visible; overflow-y: visible;"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2" style="white-space: pre; overflow-x: visible; overflow-y: visible; grid-column: 2 / 6;">$AB=BC$\t\t\t\t[正方形性質]<br>$AE=BF$\t\t\t\t[已知]<br>$\\angle ABE=90^\\circ=\\angle BCF$\t[正方形性質]<br>$\\Delta ABE\\cong\\Delta BCF$\t\t(RHS)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">藉 (a)，可得 $\\angle BAE=\\angle CBF$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle AEB$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-\\angle ABE-\\angle BAE$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-90^\\circ-\\angle BAE$<br>$=90^\\circ-\\angle BAE$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle BGE$<br>$=180^\\circ-\\angle CBF-\\angle AEB$<br>$=180^\\circ-\\angle BAE-(90^\\circ-\\angle BAE)$<br>$=90^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$\\Delta BGE$ 是一直角三角形。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">藉 (a)，可得 $\\angle BAE = \\angle CBF$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $\\angle AEB = \\angle DAE$ 。<br>由於 $\\angle BAE + \\angle DAE = 90^\\circ$ ，可得 $\\angle CBF + \\angle AEB = 90^\\circ$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">再者留意 $\\angle CBF + \\angle AEB + \\angle BGE = 180^\\circ$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $\\angle BGE = 90^\\circ$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$\\Delta BGE$ 是一直角三角形。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">藉 (a)，可得 $BE=CF=15\\text{ cm}$。<br>    $BG$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{BE^2-EG^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{15^2-9^2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=12\\text{ cm}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q14",
        year: 2015,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines", "Equations of Circles", "Coordinate Geometry"],
        difficulty: 3,
        content: {
            tc: `點 $P$ 及點 $Q$ 的坐標分別為 $(4, -1)$ 及 $(-14, 23)$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $L$ 為 $PQ$ 的垂直平分線。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $L$ 的方程。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">假定 $G$ 為 $L$ 上的一點。 將 $G$ 的 $x$ 坐標記為 $h$。 設 $C$ 為一圓，其圓心為 $G$ 且通過 $P$ 及 $Q$。 證明 $C$ 的方程為 $2x^2 + 2y^2 - 4hx - (3h+59)y + 13h - 93 = 0$。 <br><span class="marks">(6分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">點 $R$ 的坐標為 $(26, 43)$。 利用 (a)(ii)，或其他方法，求通過 $P$、$Q$ 及 $R$ 的圓的直徑。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The coordinates of the points $P$ and $Q$ are $(4, -1)$ and $(-14, 23)$ respectively. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Let $L$ be the perpendicular bisector of $PQ$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Find the equation of $L$. </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Suppose that $G$ is a point lying on $L$. Denote the $x$-coordinate of $G$ by $h$. Let $C$ be the circle which is centred at $G$ and passes through $P$ and $Q$. Prove that the equation of $C$ is $2x^2 + 2y^2 - 4hx - (3h+59)y + 13h - 93 = 0$. <br><span class="marks">(6 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">The coordinates of the point $R$ are $(26, 43)$. Using (a)(ii), or otherwise, find the diameter of the circle which passes through $P$, $Q$ and $R$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 求中點及斜率後寫垂直平分線；代入圓方程證明。 <br>(b) 代入 $R$ 求 $h$ 後求直徑。`,
            en: `(a) Find the midpoint and slope, then write the perpendicular bisector; substitute into circle equation to prove. <br>(b) Substitute $R$ to find $h$, then calculate the diameter.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">    $PQ$ 的中點<br>$=(-5,11)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $PQ$ 的斜率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{23-(-1)}{-14-4}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{-4}{3}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$L$ 的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$y-11=\\dfrac{3}{4}\\bigl(x-(-5)\\bigr)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$3x-4y+59=0$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解：</span><br>$L$ 的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$(x-4)^2+(y+1)^2=(x+14)^2+(y-23)^2$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$x^2-8x+16+y^2+2y+1=x^2+28x+196+y^2-46y+529$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$36x-48y+708=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$3x-4y+59=0$</div><div class="ms-mark">1A</div></div><p><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">設 $k$ 為 $G$ 的 $y$ 坐標。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉 (a)(i)，可得 $3h-4k+59=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $k=\\dfrac{3h+59}{4}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$C$ 的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$(x-h)^2+(y-k)^2=(4-h)^2+(-1-k)^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$2x^2+2y^2-4hx-(3h+59)y+13h-93=0$</div><div class="ms-mark">1</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解：</span><br>把圓 $2x^2+2y^2-4hx-(3h+59)y+13h-93=0$ 記為 $C'$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$C'$ 的圓心的坐標為 $\\left(h,\\dfrac{3h+59}{4}\\right)$ 。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">設 $k$ 為 $G$ 的 $y$ 坐標。<br>藉 (a)(i)，可得 $3h-4k+59=0$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $k=\\dfrac{3h+59}{4}$ 。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">所以，$C'$ 的圓心為 $G$ 。<br>再者留意  $2(4)^2+2(-1)^2-4h(4)-(3h+59)(-1)+13h-93=0$  及  $2(-14)^2+2(23)^2-4h(-14)-(3h+59)(23)+13h-93=0$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由此，$C'$ 是以 $G$ 為圓心且通過 $P$ 及 $Q$ 的圓。</div><div class="ms-mark">1</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$C$ 的方程為 $2x^2+2y^2-4hx-(3h+59)y+13h-93=0$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">把通過 $P$、$Q$ 及 $R$ 的圓記為 $C$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $C$ 的圓心在 $PQ$ 的垂直平分線上。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">設 $h$ 為 $C$ 的圓心的 $x$ 坐標。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">藉 (a)(ii)，可得 $2(26)^2+2(43)^2-4h(26)-(3h+59)(43)+13h-93=0$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $h=11$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由此，$C$ 的方程為 $x^2+y^2-22x-46y+25=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    所求的直徑</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2\\sqrt{\\left(\\dfrac{22}{2}\\right)^2+\\left(\\dfrac{46}{2}\\right)^2-25}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2\\sqrt{625}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=50$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>把通過 $P$ 、 $Q$ 及 $R$ 的圓記為 $C$ 。<br>留意 $C$ 的圓心在 $PQ$ 的垂直平分線上。<br>設 $(a,b)$ 為 $C$ 的圓心的坐標，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">則可得 $\\begin{cases} 3a-4b+59=0 \\\\ (a-4)^2+(b+1)^2=(a-26)^2+(b-43)^2 \\end{cases}$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">由此，可得 $\\begin{cases} 3a-4b+59=0 \\\\ a+2b-57=0 \\end{cases}$ 。<br>求解後，可得  $a=11$  及  $b=23$  。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    所求的直徑</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2\\sqrt{(11-4)^2+(23+1)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2\\sqrt{625}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=50$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q15",
        year: 2015,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 1,
        content: {
            tc: `下表顯示一大群學生在數學考試及科學考試的得分的平均值及標準差：<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 7em;">
      <col style="width: 8em;">
      <col style="width: 8em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">考試</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">平均值</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">標準差</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">數學</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$66$ 分</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$12$ 分</td>
    </tr>
	<tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">科學</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$52$ 分</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$10$ 分</td>
    </tr>
  </table><u>家華</u>在數學考試的標準分為 $-0.5$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求<u>家華</u>在數學考試的得分。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假設上述每一考試的得分均為正態分佈。 <u>家華</u>在科學考試得 $49$ 分。 他宣稱相對於其他學生，他在科學考試的表現較數學考試為佳。 該宣稱是否正確？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The table below shows the means and the standard deviations of the scores of a large group of students in a Mathematics examination and a Science examination:<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 7em;">
      <col style="width: 8em;">
      <col style="width: 8em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Examination</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Mean</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Standard deviation</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Mathematics</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$66$ marks</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$12$ marks</td>
    </tr>
	<tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Science</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$52$ marks</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$10$ marks</td>
    </tr>
  </table>The standard score of David in the Mathematics examination is $-0.5$. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the score of David in the Mathematics examination. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Assume that the scores in each of the above examinations are normally distributed. David gets $49$ marks in the Science examination. He claims that relative to other students, he performs better in the Science examination than in the Mathematics examination. Is the claim correct? Explain your answer. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 用標準分公式反求得分。 <br>(b) 比較兩科標準分。`,
            en: `(a) Use the standard score formula to find the score. <br>(b) Compare the standard scores of both subjects.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $x$ 分為<u>家華</u>在數學考試的得分。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{x-66}{12}=-0.5$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=66-(0.5)(12)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=60$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，<u>家華</u>在數學考試的得分為 60 分。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    <u>家華</u>在科學考試的標準分<br>$=\\dfrac{49-52}{10}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=-0.3$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$&gt;-0.5$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">相對於其他學生，<u>家華</u>在科學考試的表現較數學考試為佳。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該宣稱正確。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q16",
        year: 2015,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations", "Probability"],
        difficulty: 1,
        content: {
            tc: `某盒子內有 $5$ 個紅色碗、$6$ 個黃色碗及 $3$ 個白色碗。 若從該盒子中隨機同時抽出 $4$ 個碗，<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求抽出恰好 $2$ 個紅色碗的概率；<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求抽出至少 $2$ 個紅色碗的概率。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `A box contains $5$ red bowls, $6$ yellow bowls and $3$ white bowls. If $4$ bowls are randomly drawn from the box at the same time, <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">find the probability that exactly $2$ red bowls are drawn; <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">find the probability that at least $2$ red bowls are drawn. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `用組合數計算。`,
            en: `Calculate using combinations.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_2^5 C_2^9}{C_4^{14}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{360}{1\\,001}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解 1：</span><br>所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=6\\left(\\dfrac{5}{14}\\right)\\left(\\dfrac{4}{13}\\right)\\left(\\dfrac{9}{12}\\right)\\left(\\dfrac{8}{11}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{360}{1\\,001}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{360}{1\\,001}+\\dfrac{C_3^5 C_1^9}{C_4^{14}}+\\dfrac{C_4^5}{C_4^{14}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{11}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解 1：</span><br>    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{360}{1001}+4\\left(\\dfrac{5}{14}\\right)\\left(\\dfrac{4}{13}\\right)\\left(\\dfrac{3}{12}\\right)\\left(\\dfrac{9}{11}\\right)+\\left(\\dfrac{5}{14}\\right)\\left(\\dfrac{4}{13}\\right)\\left(\\dfrac{3}{12}\\right)\\left(\\dfrac{2}{11}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{11}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解 2：</span><br>    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1-\\dfrac{C_4^9}{C_4^{14}}-\\dfrac{C_1^5 C_3^9}{C_4^{14}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{11}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q17",
        year: 2015,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences", "Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: {
            tc: `對任意正整數 $n$，設 $\\mathrm{A}(n) = 4n - 5$ 及 $\\mathrm{B}(n) = 10^{4n-5}$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">以 $n$ 表 $\\mathrm{A}(1) + \\mathrm{A}(2) + \\mathrm{A}(3) + \\cdots + \\mathrm{A}(n)$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $n$ 的最大值使得 $\\log\\bigl(\\mathrm{B}(1)~\\mathrm{B}(2)~\\mathrm{B}(3)~\\cdots~\\mathrm{B}(n)\\bigr) \\le 8\\,000$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `For any positive integer $n$, let $\\mathrm{A}(n) = 4n - 5$ and $\\mathrm{B}(n) = 10^{4n-5}$. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Express $\\mathrm{A}(1) + \\mathrm{A}(2) + \\mathrm{A}(3) + \\cdots + \\mathrm{A}(n)$ in terms of $n$. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Find the greatest value of $n$ such that $\\log\\bigl(\\mathrm{B}(1)~\\mathrm{B}(2)~\\mathrm{B}(3)~\\cdots~\\mathrm{B}(n)\\bigr) \\le 8\\,000$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 等差數列求和。 <br>(b) 對數性質化簡後解不等式。`,
            en: `(a) Summation of an arithmetic sequence. <br>(b) Simplify using logarithm properties, then solve the inequality.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $\\mathrm{A}(1)+\\mathrm{A}(2)+\\mathrm{A}(3)+\\cdots+\\mathrm{A}(n)$<br>$=-1+3+7+\\cdots+(4n-5)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{n}{2}\\bigl((-1)+(4n-5)\\bigr)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=n(2n-3)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\log\\bigl(\\mathrm{B}(1)\\mathrm{B}(2)\\mathrm{B}(3)\\cdots \\mathrm{B}(n)\\bigr)\\le 8000$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\log \\mathrm{B}(1)+\\log \\mathrm{B}(2)+\\log \\mathrm{B}(3)+\\cdots+\\log \\mathrm{B}(n)\\le 8000$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意對所有正整數 $k$，$\\log \\mathrm{B}(k)=\\mathrm{A}(k)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\mathrm{A}(1)+\\mathrm{A}(2)+\\mathrm{A}(3)+\\cdots+\\mathrm{A}(n)\\le 8000$</div><div class="ms-mark">1</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n(2n-3)\\le 8000$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2n^2-3n-8000\\le 0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(n-64)(2n+125)\\le 0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{-125}{2}\\le n\\le 64$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$n$ 的最大值為 64。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>$\\log(\\mathrm{B}(1)\\mathrm{B}(2)\\mathrm{B}(3)\\cdots\\mathrm{B}(n)) \\le 8\\,000$<br>$\\log(10^{-1}~10^3~10^7~\\dots~10^{4n-5}) \\le 8\\,000$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\log(10^{-1+3+7+\\dots+(4n-5)}) \\le 8\\,000$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\log(10^{n(2n-3)}) \\le 8\\,000$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n(2n-3) \\le 8\\,000$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2n^2-3n-8\\,000 \\le 0$<br>$(n-64)(2n+125) \\le 0$<br>$\\dfrac{-125}{2} \\le n \\le 64$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$n$ 的最大值為 $64$ 。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q18",
        year: 2015,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs", "Quadratic Equations in One Unknown", "Loci", "Four Centres of a Triangle"],
        difficulty: 3,
        content: {
            tc: `設 $\\mathrm{f}(x) = 2x^2 - 4kx + 3k^2 + 5$，其中 $k$ 為一實常數。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$y = \\mathrm{f}(x)$ 的圖像是否與 $x$ 軸相交？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">利用配方法，以 $k$ 表 $y = \\mathrm{f}(x)$ 的圖像的頂點的坐標。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">在同一直角坐標系中，設 $S$ 及 $T$ 分別為 $y = \\mathrm{f}(x)$ 的圖像及 $y = 2 - \\mathrm{f}(x)$ 的圖像上的動點。 將原點記為 $O$。 某人宣稱當 $S$ 與 $T$ 最接近時，$\\Delta OST$ 的外心在 $x$ 軸上。 該宣稱是否正確？ 試解釋你的答案。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Let $\\mathrm{f}(x) = 2x^2 - 4kx + 3k^2 + 5$, where $k$ is a real constant. <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Does the graph of $y = \\mathrm{f}(x)$ cut the $x$-axis? Explain your answer. <span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Using the method of completing the square, express, in terms of $k$, the coordinates of the vertex of the graph of $y = \\mathrm{f}(x)$. <span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">In the same rectangular coordinate system, let $S$ and $T$ be moving points on the graph of $y = \\mathrm{f}(x)$ and the graph of $y = 2 - \\mathrm{f}(x)$ respectively. Denote the origin by $O$. Someone claims that when $S$ and $T$ are nearest to each other, the circumcentre of $\\Delta OST$ lies on the $x$-axis. Is the claim correct? Explain your answer. <span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 判別式檢查。 <br>(b) 配方求頂點。 <br>(c) 分析最接近情況的幾何關係。`,
            en: `(a) Check using the discriminant. <br>(b) Find the vertex by completing the square. <br>(c) Analyze the geometric relationship when they are nearest to each other.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $(-4k)^2-4(2)(3k^2+5)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=16k^2-24k^2-40$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=-8k^2-40$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$&lt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$y=\\mathrm{f}(x)$ 的圖像不與 $x$ 軸相交。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $\\mathrm{f}(x)$<br>$=2x^2-4kx+3k^2+5$<br>$=2(x^2-2kx)+3k^2+5$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2(x^2-2kx+k^2-k^2)+3k^2+5$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2(x-k)^2+k^2+5$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，頂點的坐標為 $(k,k^2+5)$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">藉 (b)，$y=2-\\mathrm{f}(x)$ 的圖像的頂點的坐標為 $(k,-k^2-3)$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">當 $S$ 與 $T$ 最接近時，$S$ 及 $T$ 的坐標分別為  $(k,k^2+5)$  及  $(k,-k^2-3)$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">在這情況下，$ST$ 為一垂直線。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$ST$ 的垂直平分線為一水平線。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\Delta OST$ 的外心的 $y$ 坐標</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{(k^2+5)+(-k^2-3)}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1$<br>$\\ne 0$<br>所以，$\\Delta OST$ 的外心不在 $x$ 軸上。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>假設當 $S$ 與 $T$ 最接近時， $\\Delta OST$ 的外心在 $x$ 軸上。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">在這情況下，$S$ 及 $T$ 的坐標分別為  $(k,k^2+5)$  及  $(k,-k^2-3)$ 。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">設 $(r,0)$ 為 $\\Delta OST$ 的外心 $R$ 的坐標。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $RS$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{(r-k)^2+(0-(k^2+5))^2}$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{(r-k)^2+(k^2+5)^2}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $RT$<br>$=\\sqrt{(r-k)^2+(0-(-k^2-3))^2}$ ......<sup>@</sup><br>$=\\sqrt{(r-k)^2+(k^2+3)^2}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $RS \\ne RT$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">這是不可能。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2015-DSE-MATH-CP1-Q19",
        year: 2015,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Trigonometry (3D)", "Mensuration"],
        difficulty: 3,
        content: {
            tc: `圖 (a) 中，$ABCDB'$ 為邊形紙卡。 已知 $AB = AB' = 40\\text{ cm}$ 、 $BC = B'D = 24\\text{ cm}$ 及 $\\angle ABC = \\angle AB'D = 80^\\circ$。<img src="img/2015dsep1q19zh.jpg" class="q-img" alt="題目附圖" style="max-width: 90%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">假定 $105^\\circ \\le \\angle BCD \\le 145^\\circ$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $A$ 與 $C$ 間的距離。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $\\angle ACB$。 </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">描述當 $\\angle BCD$ 由 $105^\\circ$ 增加至 $145^\\circ$ 期間該紙卡的面積如何變化。 試解釋你的答案。 <br><span class="marks">(7分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $\\angle BCD = 132^\\circ$。 將圖 (a) 中的紙卡沿 $AC$ 及 $AD$ 摺起，使得 $AB$ 與 $AB'$ 連接成角錐體 $ABCD$，如圖 (b) 所示。 求角錐體 $ABCD$ 的體積。 <span class="marks">(6分)</span><div class="q-clearfix"></div></div></div>`,
            en: `In Figure (a), $ABCDB'$ is a pentagonal paper card. It is given that $AB = AB' = 40\\text{ cm}$, $BC = B'D = 24\\text{ cm}$ and $\\angle ABC = \\angle AB'D = 80^\\circ$.<img src="img/2015dsep1q19zh.jpg" class="q-img" alt="題目附圖" style="max-width: 90%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Suppose that $105^\\circ \\le \\angle BCD \\le 145^\\circ$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Find the distance between $A$ and $C$. </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Find $\\angle ACB$. </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">Describe how the area of the paper card varies when $\\angle BCD$ increases from $105^\\circ$ to $145^\\circ$. Explain your answer. <br><span class="marks">(7 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Suppose that $\\angle BCD = 132^\\circ$. The paper card in Figure (a) is folded along $AC$ and $AD$ such that $AB$ and $AB'$ join together to form a pyramid $ABCD$ as shown in Figure (b). Find the volume of the pyramid $ABCD$. <span class="marks">(6 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `<a href="https://www.geogebra.org/m/L2U1IXWA" target="_blank">Geogebra 動態模型</a><br>(a) 用餘弦公式及正弦公式；分析面積變化。 <br>(b) 求底面積及高後計算體積。`,
            en: `<a href="https://www.geogebra.org/m/L2U1IXWA" target="_blank">Geogebra 3D Model</a><br>(a) Use cosine law and sine law; analyze the change in area. <br>(b) Calculate the base area and height to find the volume.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">藉餘弦公式，</div><div class="ms-mark">1</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AC^2=AB^2+BC^2-2(AB)(BC)\\cos\\angle ABC$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AC^2=40^2+24^2-2(40)(24)\\cos 80^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AC\\approx 42.92546446\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AC\\approx 42.9\\text{ cm}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$A$ 與 $C$ 間的距離為 $42.9\\text{ cm}$。</div><div class="ms-mark"></div></div><p><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">藉正弦公式，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{\\sin\\angle ACB}{AB}=\\dfrac{\\sin\\angle ABC}{AC}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sin\\angle ACB\\approx\\dfrac{\\sin 80^\\circ}{42.92546446}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle ACB\\approx 66.59081487^\\circ$  或  $\\angle ACB\\approx 113.4091851^\\circ$ (捨去)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle ACB\\approx 66.6^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-num2">(iii)</div><div class="ms-content ms-from-l3">$\\angle CAD=180^\\circ-2(\\angle BCD-\\angle ACB)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$23.18162974^\\circ&lt;\\angle CAD&lt;103.1816297^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    該紙卡的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=2\\left(\\dfrac{1}{2}(40)(24)\\sin 80^\\circ\\right)+\\dfrac{1}{2}AC^2\\sin\\angle CAD$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=960\\sin 80^\\circ+\\dfrac{1}{2}AC^2\\sin\\angle CAD$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">留意 $960\\sin 80^\\circ$ 為一常數而 $\\dfrac{1}{2}AC^2\\sin\\angle CAD$ 隨 $\\sin\\angle CAD$ 正變。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">再者留意當 $\\angle CAD=90^\\circ$ 時，該紙卡的面積最大。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">定義 $\\alpha=45^\\circ+\\angle ACB$，則可得 $\\alpha\\approx 111.59081487^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">當 $\\angle BCD$ 由 $105^\\circ$ 增加至 $\\alpha$ 期間，該紙卡的面積增加。<br>當 $\\angle BCD$ 由 $\\alpha$ 增加至 $145^\\circ$ 期間，該紙卡的面積減少。</div><div class="ms-mark">1A</div></div><p><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\angle ACD=\\angle BCD-\\angle ACB$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle ACD\\approx 65.40918513^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\cos\\angle ACD=\\dfrac{\\frac{CD}{2}}{AC}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CD\\approx 35.72557859\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">設 $M$ 為 $CD$ 的中點。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AM^2=AC^2-CM^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AM^2\\approx 1523.516258$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$BM^2=BC^2-CM^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$BM^2\\approx 256.9207587$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">藉餘弦公式，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\cos\\angle AMB=\\dfrac{AM^2+BM^2-AB^2}{2(AM)(BM)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle AMB\\approx 81.70890517^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    角錐體 $ABCD$ 的高</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=BM\\sin\\angle AMB$  ($=BA\\sin\\angle BAM$)</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 15.86121883\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\Delta ACD$ 的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}(CD)(AM)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 697.2247927\\text{ cm}^2$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    角錐體 $ABCD$ 的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}(\\Delta ACD\\text{ 的面積})(\\text{角錐體 }$ABCD$\\text{ 的高})$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 3\\,686.278338\\text{ cm}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 3\\,690\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>$\\angle ACD = \\angle BCD - \\angle ACB$<br>$\\angle ACD \\approx 65.40918513^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\cos \\angle ACD = \\dfrac{\\frac{CD}{2}}{AC}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CD \\approx 35.72557859\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">設 $M$ 為 $CD$ 的中點。<br>$AM^2 = AC^2 - CM^2$<br>$AM^2 \\approx 1523.516258$<br>$BM^2 = BC^2 - CM^2$<br>$BM^2 \\approx 256.9207587$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">藉餘弦公式，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\cos \\angle ABM = \\dfrac{AB^2 + BM^2 - AM^2}{2(AB)(BM)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle ABM \\approx 74.92963499^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    角錐體 $ABCD$ 的高</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=AB\\sin \\angle ABM$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 38.62428968\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\Delta BCD$ 的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}(CD)(BM)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 286.318146\\text{ cm}^2$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    角錐體 $ABCD$ 的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}(\\Delta BCD\\text{ 的面積})(\\text{角錐體 }ABCD\\text{ 的高})$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 3\\,686.278338\\text{ cm}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 3\\,690\\text{ cm}^3$</div><div class="ms-mark">1A</div></div></div>`
    }
);
