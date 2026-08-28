// 2020dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2020-DSE-MATH-CP1-Q01",
        year: 2020,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `化簡 $\\dfrac{(mn^{-2})^5}{m^{-4}}$ ，並以正指數表示答案。<span class="marks">(3分)</span><div class="q-clearfix"></div>`,
            en: `Simplify $\\dfrac{(mn^{-2})^5}{m^{-4}}$ and express your answer with positive indices.<span class="marks">(3 marks)</span><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `先利用指數定律 $(x^m)^n = x^{mn}$ 展開分子，再利用 $x^m \\div x^n = x^{m-n}$ 化簡，最後處理負指數。`,
            en: `Expand the numerator using the index law $(x^m)^n = x^{mn}$, then simplify it using $x^m \\div x^n = x^{m-n}$, and finally handle the negative indices.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{(mn^{-2})^5}{m^{-4}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{m^5 n^{-10}}{m^{-4}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{m^{5-(-4)}}{n^{10}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{m^9}{n^{10}}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q02",
        year: 2020,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$\\alpha^2 + \\alpha - 6$ ，<span class="marks">(1分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$\\alpha^4 + \\alpha^3 - 6\\alpha^2$ 。<span class="marks">(2分)</span></div></div><div class="q-clearfix"></div>`,
            en: `Factorize<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$\\alpha^2 + \\alpha - 6$,<span class="marks">(1 mark)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$\\alpha^4 + \\alpha^3 - 6\\alpha^2$.<span class="marks">(2 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 尋找兩個數，其積為 $-6$、和為 $1$。<br>(b) 先提取公因式 $a^2$，再利用 (a) 的結果。`,
            en: `(a) Find two numbers with a product of $-6$ and a sum of $1$.<br>(b) Factor out the common factor $a^2$ first, then use the result from (a).`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $\\alpha^2+\\alpha-6$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(\\alpha+3)(\\alpha-2)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $\\alpha^4+\\alpha^3-6\\alpha^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\alpha^2(\\alpha^2+\\alpha-6)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\alpha^2(\\alpha+3)(\\alpha-2)$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q03",
        year: 2020,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: {
            tc: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">將 $534.7698$ 上捨入至最接近的百位。<span class="marks">(1分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">將 $534.7698$ 下捨入至二位小數。<span class="marks">(1分)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">將 $534.7698$ 捨入至二位有效數字。<span class="marks">(1分)</span></div></div><div class="q-clearfix"></div>`,
            en: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Round up $534.7698$ to the nearest hundred.<span class="marks">(1 mark)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Round down $534.7698$ to 2 decimal places.<span class="marks">(1 mark)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">Round off $534.7698$ to 2 significant figures.<span class="marks">(1 mark)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 上捨入（ceiling）到百位：看十位是否大於 $0$。<br>(b) 下捨入（floor）到二位小數：直接截斷。<br>(c) 有效數字從首位非零開始計算。`,
            en: `(a) Round up to the nearest hundred: check if the tens digit is greater than $0$.<br>(b) Round down to 2 decimal places: truncate directly.<br>(c) Count significant figures starting from the first non-zero digit.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">600</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">534.76</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">530</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q04",
        year: 2020,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: {
            tc: `設 $a$、$b$ 及 $c$ 均為非零的數使得 $\\dfrac{a}{b} = \\dfrac{6}{7}$ 及 $3a = 4c$。 求 $\\dfrac{b+2c}{a+2b}$。<span class="marks">(3分)</span><div class="q-clearfix"></div>`,
            en: `Let $a$, $b$ and $c$ be non-zero numbers such that $\\dfrac{a}{b} = \\dfrac{6}{7}$ and $3a = 4c$. Find $\\dfrac{b+2c}{a+2b}$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `設 $a = 6k$、$b = 7k$，代入 $3a = 4c$ 求出 $c$，再代入所求分式。`,
            en: `Let $a = 6k$ and $b = 7k$, substitute into $3a = 4c$ to find $c$, then substitute all into the required fraction.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$a:b=6:7=12:14$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$a:c=4:3=12:9$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$a:b:c=12:14:9$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">設 $a=12k$、$b=14k$ 及 $c=9k$，其中 $k$ 為非零常數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{b+2c}{a+2b}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{14k+2(9k)}{12k+2(14k)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{4}{5}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q05",
        year: 2020,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Percentages"],
        difficulty: 1,
        content: {
            tc: `在某招聘活動中，男申請者的人數較女申請者的人數多 $28\\%$。 男申請者的人數與女申請者的人數之差為 $91$。 求在該招聘活動中男申請者的人數。<span class="marks">(4分)</span><div class="q-clearfix"></div>`,
            en: `In a recruitment exercise, the number of male applicants is $28\\%$ more than the number of female applicants. The difference of the number of male applicants and the number of female applicants is $91$. Find the number of male applicants in the recruitment exercise.<span class="marks">(4 marks)</span><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `設女申請者人數為 $F$，則男申請者人數為 $1.28F$。利用兩者之差列出方程求解。`,
            en: `Let $F$ be the number of female applicants, then the number of male applicants is $1.28F$. Set up an equation using their difference to solve.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $x$ 為招聘中女申請人的數目，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">則男申請人的數目為 $(1+28\\%)x$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$(1+28\\%)x-x=91$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$0.28x=91$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=325$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$(1+28\\%)x=416$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，招聘中男申請人的數目為 416。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 1：</span><br>設 $x$ 及 $y$ 分別為招聘中男申請人及女申請人的數目。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得  $x-y=91$  及  $x=(1+28\\%)y$ 。</div><div class="ms-mark">1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">所以，可得 $(1+28\\%)y-y=91$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$0.28y=91$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=325$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=416$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，招聘中男申請人的數目為 416。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 2：</span><br>    招聘中男申請人的數目</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{(1+28\\%)(91)}{28\\%}$</div><div class="ms-mark">1M+1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=416$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q06",
        year: 2020,
        type: "P1",
        section: "A1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: {
            tc: `考慮複合不等式<br><div style="text-align: center;">$3 - x > \\dfrac{7 - x}{2}$  或  $5 + x > 4$  ...............(*) 。</div><br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">解 (*)。<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出滿足 (*) 的最大負整數。<span class="marks">(1分)</span></div></div><div class="q-clearfix"></div>`,
            en: `Consider the compound inequality<br><div style="text-align: center;">$3 - x > \\dfrac{7 - x}{2}$  or  $5 + x > 4$  ...............(*) .</div><br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Solve (*).<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Write down the greatest negative integer satisfying (*).<span class="marks">(1 mark)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 分別解兩個不等式，再取聯集。<br>(b) 在解集中找出最大的負整數。`,
            en: `(a) Solve the two inequalities separately, then take their union.<br>(b) Find the greatest negative integer within the solution set.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$3-x&gt;\\dfrac{7-x}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$6-2x&gt;7-x$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-2x+x&gt;7-6$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x&lt;-1$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$5+x&gt;4$<br>$x&gt;-1$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的解為 $x\\ne -1$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$-2$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q07",
        year: 2020,
        type: "P1",
        section: "A1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 1,
        content: {
            tc: `設 $\\mathrm{p}(x) = 4x^2 + 12x + c$，其中 $c$ 為一常數。 方程 $\\mathrm{p}(x) = 0$ 有等根。 求<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$c$，<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$y = \\mathrm{p}(x) - 169$ 的圖像的 $x$ 截距。<span class="marks">(3分)</span></div></div><div class="q-clearfix"></div>`,
            en: `Let $\\mathrm{p}(x) = 4x^2 + 12x + c$, where $c$ is a constant. The equation $\\mathrm{p}(x) = 0$ has equal roots. Find<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$c$,<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">the $x$-intercept(s) of the graph of $y = \\mathrm{p}(x) - 169$.<span class="marks">(3 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 利用判別式 $\\Delta = 0$ 求 $c$。<br>(b) 將 $c$ 代入後令 $y = 0$ 解二次方程。`,
            en: `(a) Use the discriminant $\\Delta = 0$ to find $c$.<br>(b) Substitute $c$, set $y = 0$, and solve the quadratic equation.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">由於方程 $4x^2+12x+c=0$ 有等根，可得 $\\Delta=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$12^2-4(4)c=0$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$144-16c=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c=9$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $y$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\mathrm{p}(x)-169$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4x^2+12x-160$ （藉 (a)）</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4(x+8)(x-5)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$y=\\mathrm{p}(x)-169$ 的圖形的 $x$ 截距為  $-8$  及  $5$ 。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q08",
        year: 2020,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$B$ 及 $D$ 分別為 $AC$ 及 $AE$ 上的點。 $BE$ 與 $CD$ 相交於點 $F$。 已知 $AB = BE$ 、 $BD \\mathbin{\/\/} CE$ 、 $\\angle CAE = 30^\\circ$ 及 $\\angle ADB = 42^\\circ$。<br><img src="img/2020dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 85%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\angle BEC$。<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $\\angle BDC = \\theta$。 以 $\\theta$ 表 $\\angle CFE$。<span class="marks">(2分)</span></div></div><div class="q-clearfix"></div>`,
            en: `In the figure, $B$ and $D$ are points lying on $AC$ and $AE$ respectively. $BE$ and $CD$ intersect at the point $F$. It is given that $AB = BE$, $BD \\mathbin{\/\/} CE$, $\\angle CAE = 30^\\circ$ and $\\angle ADB = 42^\\circ$.<br><img src="img/2020dsep1q08.jpg" class="q-img" alt="Figure 1" style="max-width: 85%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $\\angle BEC$.<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Let $\\angle BDC = \\theta$. Express $\\angle CFE$ in terms of $\\theta$.<span class="marks">(2 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 利用 $AB = BE$ 得等腰三角形，再配合平行線性質及三角形內角和。<br>(b) 利用三角形外角等於不相鄰兩內角之和，或以 $\\theta$ 表示相關角。`,
            en: `(a) Use $AB = BE$ to form an isosceles triangle, combined with parallel line properties and angle sum of triangle.<br>(b) Use exterior angle of triangle theorem or express related angles in terms of $\\theta$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $\\angle AEC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\angle ADB$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=42^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle AEB$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\angle CAE$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=30^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle BEC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\angle AEC-\\angle AEB$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=42^\\circ-30^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=12^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $\\angle DCE$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\angle BDC$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\theta$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle CFE$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-\\angle BEC-\\angle DCE$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=180^\\circ-12^\\circ-\\theta$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=168^\\circ-\\theta$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>    $\\angle DBE$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\angle BEC$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=12^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle BFD$<br>$=180^\\circ-\\angle BDC-\\angle DBE$<br>$=180^\\circ-\\theta-12^\\circ$<br>$=168^\\circ-\\theta$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\angle CFE$<br>$=\\angle BFD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=168^\\circ-\\theta$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q09",
        year: 2020,
        type: "P1",
        section: "A1",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion", "Change of Data"],
        difficulty: 1,
        content: {
            tc: `下表顯示某班學生所修科目的數目的分佈。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">所修科目的數目</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">7</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">學生人數</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">8</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">12</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">16</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
    </tr>
  </table><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出上述分佈的平均值、中位數及標準差。<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">現有一新生加入該班。 該新生所修科目的數目為 5。 求加入這學生而引致該分佈的中位數的改變。<span class="marks">(2分)</span></div></div><div class="q-clearfix"></div>`,
            en: `The table below shows the distribution of the numbers of subjects taken by a class of students.<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
      <col style="width: 2.5em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Number of subjects taken</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">7</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">Number of students</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">8</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">12</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">16</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
    </tr>
  </table><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Write down the mean, the median and the standard deviation of the above distribution.<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">A new student now joins the class. The number of subjects taken by the new student is 5. Find the change in the median of the distribution due to the joining of this student.<span class="marks">(2 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 平均值用加權平均；中位數取第 20 及 21 項的平均；標準差用公式計算。<br>(b) 加入後總人數變為 41，重新找出中位數。`,
            en: `(a) Use weighted mean for the average; the median is the mean of the 20th and 21st terms; calculate standard deviation using formula.<br>(b) Total students become 41 after joining; find the new median.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">平均值 $=5.4$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">中位數 $=5.5$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">標準差 $\\approx 0.916515139 \\approx 0.917$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">新的中位數 $=5$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">中位數的減少量 $= 5.5-5 = 0.5$</div><div class="ms-mark">1M+1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q10",
        year: 2020,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: {
            tc: `一個高度為 $h\\text{ cm}$ 的 $X$ 牌紀念品的價錢為 $\\$P$。 $P$ 的一部分為常數，而另一部分隨 $h^3$ 正變。 當 $h=3$ 時，$P=59$； 且當 $h=7$ 時，$P=691$。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求一個高度為 $4\\text{ cm}$ 的 $X$ 牌紀念品的價錢。<span class="marks">(4分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱一個高度為 5 cm 的 $X$ 牌紀念品的價錢高於兩個高度均為 $4\\text{ cm}$ 的 $X$ 牌紀念品的總價錢。 該宣稱是否正確？ 試解釋你的答案。<span class="marks">(2分)</span></div></div><div class="q-clearfix"></div>`,
            en: `The price of a brand X souvenir of height $h\\text{ cm}$ is $\\$P$. $P$ is partly constant and partly varies as $h^3$. When $h=3$, $P=59$ and when $h=7$, $P=691$.<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the price of a brand X souvenir of height $4\\text{ cm}$.<span class="marks">(4 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Someone claims that the price of a brand X souvenir of height $5\\text{ cm}$ is higher than the total price of two brand X souvenirs of height $4\\text{ cm}$. Is the claim correct? Explain your answer.<span class="marks">(2 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 設 $P = A + B h^3$，代入兩組已知值求 $A$、$B$。<br>(b) 計算 $h=5$ 的價錢與 $2 \\times (h=4$ 的價錢) 比較。`,
            en: `(a) Let $P = A + B h^3$, substitute the two given pairs to find $A$ and $B$.<br>(b) Calculate the price for $h=5$ and compare it with $2 \\times (\\text{price for } h=4)$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $P=a+bh^3$，其中 $a$ 及 $b$ 均為非零常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $a+27b=59$  及  $a+343b=691$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $a=5$  及  $b=2$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    所求的價錢</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=5+2(4^3)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\$133$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">當 $h=5$ 時，$P=5+2(5^3)=255$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $2(133)=266$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $255&lt;266$，該宣稱不正確。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q11",
        year: 2020,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion", "Probability"],
        difficulty: 1,
        content: {
            tc: `下面的幹葉圖顯示某袋子內的信件的重量（以克為單位）的分佈。
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
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px; white-space: nowrap;">1　2　3　3</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">2</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px; white-space: nowrap;">3　3　4　5　6　9　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px; white-space: nowrap;">1　6　7　8　8　8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px; white-space: nowrap;">2</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px; white-space: nowrap;">0　$w$</td>
    </tr>
  </table>
已知上述分佈的分佈域為其四分位數間距的三倍。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $w$。<span class="marks">(4分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若從該袋子中隨機抽取一信件，求所抽取的信件的重量不少於該分佈的眾數的概率。<span class="marks">(2分)</span></div></div><div class="q-clearfix"></div>`,
            en: `The stem-and-leaf diagram below shows the distribution of the weights (in grams) of the letters in a bag.
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
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px; white-space: nowrap;">1　2　3　3</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">2</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px; white-space: nowrap;">3　3　4　5　6　9　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px; white-space: nowrap;">1　6　7　8　8　8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px; white-space: nowrap;">2</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px; white-space: nowrap;">0　$w$</td>
    </tr>
  </table>
It is given that the range of the above distribution is the triple of its inter-quartile range.<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $w$.<span class="marks">(4 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">If a letter is randomly chosen from the bag, find the probability that the weight of the chosen letter is not less than the mode of the distribution.<span class="marks">(2 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 先數出總數據個數，找出 $Q_1$、$Q_3$ 及極差，利用「極差 = 3 × 四分位數間距」求 $w$。<br>(b) 找出眾數，再計算不少於眾數的數據個數除以總數。`,
            en: `(a) Count the total number of data, find $Q_1$, $Q_3$ and range, then solve for $w$ using "range = 3 × inter-quartile range".<br>(b) Find the mode, then divide the number of data points not less than the mode by the total number.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    分佈域</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=50+w-11$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(w+39)$ 克</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    四分位數間距</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=38-23$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=15$ 克</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$w+39=3(15)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$w=6$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">該分佈的眾數為 38 克。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{6}{20}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{3}{10}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q12",
        year: 2020,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `一實心直立圓錐體的高及底半徑分別為 36&nbspcm 及 15&nbspcm。 將該圓錐體以兩平行於其底的平面分成三部分。 該三部分的高相等。 以 $\\pi$ 表<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">該圓錐體的中間部分的體積，<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該圓錐體的中間部分的曲面面積。<span class="marks">(3分)</span></div></div><div class="q-clearfix"></div>`,
            en: `The height and the base radius of a solid right circular cone are $36\\text{ cm}$ and $15\\text{ cm}$ respectively. The circular cone is divided into three parts by two planes which are parallel to its base. The heights of the three parts are equal. Express, in terms of $\\pi$,<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">the volume of the middle part of the circular cone;<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">the curved surface area of the middle part of the circular cone.<span class="marks">(3 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 利用相似比求各截面半徑，再用大圓錐減去小圓錐求中間部分體積。<br>(b) 中間部分曲面面積 = 大圓錐側面積 − 小圓錐側面積。`,
            en: `(a) Use similarity ratios to find radii, then subtract the smaller cone volume from the larger cone volume to get the middle part volume.<br>(b) Curved surface area of middle part = curved surface area of larger cone − curved surface area of smaller cone.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    該圓錐中間部分的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}\\pi(15^2)(36)\\left(\\dfrac{2^3-1^3}{3^3}\\right)$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=700\\pi\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>設 $R\\text{ cm}$ 及 $r\\text{ cm}$ 分別為該圓錐中間部分的較大底半徑及較小底半徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $\\dfrac{r}{15}=\\dfrac{12}{36}$  及  $\\dfrac{R}{15}=\\dfrac{24}{36}$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $r=5$  及  $R=10$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    該圓錐中間部分的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}\\pi(10^2)(24)-\\dfrac{1}{3}\\pi(5^2)(12)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=700\\pi\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    該圓錐中間部分的曲面面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(15)\\sqrt{15^2+36^2}\\left(\\dfrac{2^2-1^2}{3^2}\\right)$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=195\\pi\\text{ cm}^2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>    該圓錐中間部分的曲面面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(10)\\sqrt{10^2+24^2}-\\pi(5)\\sqrt{5^2+12^2}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(10)(26)-\\pi(5)(13)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=195\\pi\\text{ cm}^2$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q13",
        year: 2020,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: {
            tc: `三次多項式 $\\mathrm{f}(x)$ 可被 $x-1$ 整除。 當 $\\mathrm{f}(x)$ 除以 $x^2-1$ 時，餘式為 $kx+8$，其中 $k$ 為一常數。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $k$。<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">已知 $x+3$ 為 $\\mathrm{f}(x)$ 的因式。 當 $\\mathrm{f}(x)$ 除以 $x$ 時，餘數為 24。 某人宣稱方程 $\\mathrm{f}(x)=0$ 所有的根均為整數。 該宣稱是否正確？ 試解釋你的答案。<span class="marks">(5分)</span></div></div><div class="q-clearfix"></div>`,
            en: `The cubic polynomial $\\mathrm{f}(x)$ is divisible by $x-1$. When $\\mathrm{f}(x)$ is divided by $x^2-1$, the remainder is $kx+8$, where $k$ is a constant.<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $k$.<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">It is given that $x+3$ is a factor of $\\mathrm{f}(x)$. When $\\mathrm{f}(x)$ is divided by $x$, the remainder is $24$. Someone claims that all the roots of the equation $\\mathrm{f}(x)=0$ are integers. Is the claim correct? Explain your answer.<span class="marks">(5 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 利用餘式定理及 $f(1)=0$ 求 $k$。<br>(b) 寫出 $f(x)$ 的完整形式，再因式分解並檢查根。`,
            en: `(a) Use remainder theorem and $f(1)=0$ to find $k$.<br>(b) Express $f(x)$ completely, factorize it and check its roots.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{f}(x)=(x^2-1)~\\mathrm{q}(x)+(kx+8)$，其中 $\\mathrm{q}(x)$ 為多項式。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $\\mathrm{f}(1)=0$，可得 $(1^2-1)~\\mathrm{q}(1)+(k+8)=0$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $k=-8$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $\\mathrm{f}(x)=(x-1)(x+3)(ax+b)$，其中 $a$ 及 $b$ 為常數。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $\\mathrm{f}(0)=24$，可得 $(-1)(3)(b)=24$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $b=-8$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $\\mathrm{f}(x)=(x^2-1)~\\mathrm{q}(x)+(-8x+8)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $\\mathrm{f}(-1)=((-1)^2-1)~\\mathrm{q}(-1)+((-8)(-1)+8)=16$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $(-1-1)(-1+3)(-a-8)=16$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $a=-4$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $\\mathrm{f}(x)=(x-1)(x+3)(-4x-8)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">方程 $\\mathrm{f}(x)=0$ 的根為  $1$ 、 $-3$  及  $-2$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">方程 $\\mathrm{f}(x)=0$ 的所有根均為整數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該宣稱正確。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">設 $\\mathrm{f}(x) = (x^2 - 1)(mx + n) + (-8x + 8)$ ，其中 $m$ 及 $n$ 均為常數。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $\\mathrm{f}(0) = 24$ ，可得 $(-1)(n) + 8 = 24$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $n = -16$ 。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $\\mathrm{f}(-3) = 0$ ，可得 $((-3)^2 - 1)(-3m - 16) + ((-8)(-3) + 8) = 0$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $m = -4$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\mathrm{f}(x)$<br>$=(x^2 - 1)(-4x - 16) + (-8x + 8)$<br>$=(x - 1)(x + 1)(-4x - 16) - 8(x - 1)$<br>$=(x - 1)(-4x^2 - 20x - 24)$<br>$=-4(x - 1)(x + 2)(x + 3)$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">因此，方程 $\\mathrm{f}(x) = 0$ 的根為  $1$ 、 $-2$  及  $-3$ 。<br>方程 $\\mathrm{f}(x) = 0$ 的所有根均為整數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該宣稱正確。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q14",
        year: 2020,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Equations of Circles", "Loci"],
        difficulty: 3,
        content: {
            tc: `點 $A$ 及點 $B$ 的坐標分別為 $(-10, 0)$ 及 $(30, 0)$。 圓 $C$ 通過 $A$ 及 $B$。 將 $C$ 的圓心記為 $G$。 已知 $G$ 的 $y$ 坐標為 $-15$。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $C$ 的方程。<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">直線 $L$ 通過 $B$ 及 $G$。 另一直線 $\\mathit{\\ell}$ 平行於 $L$。 設 $P$ 為直角坐標平面上的一動點使得由 $P$ 至 $L$ 的垂直距離等於由 $P$ 至 $\\mathit{\\ell}$ 的垂直距離。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。 已知 $\\mathit{\\Gamma}$ 通過 $A$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">描述 $\\mathit{\\Gamma}$ 與 $L$ 之間的幾何關係。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $\\mathit{\\Gamma}$ 的方程。</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">假定 $\\mathit{\\Gamma}$ 與 $C$ 相交於另一點 $H$。 某人宣稱 $\\angle GAH < 70^\\circ$。 你是否同意？ 試解釋你的答案。</div></div><div class="q-text-content"><span class="marks">(6分)</span></div><div class="q-clearfix"></div>`,
            en: `The coordinates of the points $A$ and $B$ are $(-10,0)$ and $(30,0)$ respectively. The circle $C$ passes through $A$ and $B$. Denote the centre of $C$ by $G$. It is given that the $y$-coordinate of $G$ is $-15$.<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the equation of $C$.<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">The straight line $L$ passes through $B$ and $G$. Another straight line $\\mathit{\\ell}$ is parallel to $L$. Let $P$ be a moving point in the rectangular coordinate plane such that the perpendicular distance from $P$ to $L$ is equal to the perpendicular distance from $P$ to $\\mathit{\\ell}$. Denote the locus of $P$ by $\\mathit{\\Gamma}$. It is given that $\\mathit{\\Gamma}$ passes through $A$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Describe the geometric relationship between $\\mathit{\\Gamma}$ and $L$.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Find the equation of $\\mathit{\\Gamma}$.</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">Suppose that $\\mathit{\\Gamma}$ cuts $C$ at another point $H$. Someone claims that $\\angle GAH < 70^\\circ$. Do you agree? Explain your answer.</div></div><div class="q-text-content"><span class="marks">(6 marks)</span></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 設圓心為 $(h,-15)$，利用 GA = GB 或距離公式求 $h$。<br>(b) $\\Gamma$ 是 L 與 $\\ell$ 的角平分線；因通過 A 且平行性質，可求出方程。`,
            en: `(a) Let the centre be $(h,-15)$, use GA = GB or the distance formula to find $h$.<br>(b) $\\Gamma$ is parallel to $L$ and $\\ell$; use the fact that it passes through $A$ to find its equation.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $G$ 的 $x$ 坐標</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{-10+30}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=10$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $C$ 的半徑</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{(-10-10)^2+(0+15)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=25$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$C$ 的方程為 $(x-10)^2+(y+15)^2=25^2$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $G$ 的 $x$ 坐標</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{-10+30}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=10$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">設 $x^2+y^2-20x+30y+F=0$ 為 $C$ 的方程，其中 $F$ 為常數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $A$ 位於 $C$ 上，可得 $(-10)^2+0^2-20(-10)+30(0)+F=0$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $F=-300$ 。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此， $C$ 的方程為 $x^2+y^2-20x+30y-300=0$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$\\mathit{\\Gamma}$ 平行於 $L$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">$L$ 的斜率 $=\\dfrac{0+15}{30-10}=\\dfrac{3}{4}$<br>故此，$\\mathit{\\Gamma}$ 的斜率為 $\\dfrac{3}{4}$（藉 (b)(i)）。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">$\\mathit{\\Gamma}$ 的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$y-0=\\dfrac{3}{4}(x-(-10))$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$3x-4y+30=0$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(iii)</div><div class="ms-content ms-from-l3">$\\tan\\angle ABG=\\dfrac{3}{4}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle ABG\\approx 36.86989765^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意  $\\angle BAH=\\angle ABG$  及  $\\angle BAG=\\angle ABG$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $\\angle GAH$<br>$=\\angle BAH+\\angle BAG$<br>$=2\\angle ABG$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $\\angle ABG&gt;35^\\circ$，可得 $\\angle GAH&gt;70^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q15",
        year: 2020,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations", "Probability"],
        difficulty: 1,
        content: {
            tc: `某箱子內有 3 隻藍色碟、7 隻綠色碟及 9 隻紫色碟。 若從該箱子中隨機同時抽出 4 隻碟，求<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">抽出 4 隻相同顏色的碟的概率；<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">抽出至少 2 隻不同顏色的碟的概率。<span class="marks">(2分)</span></div></div><div class="q-clearfix"></div>`,
            en: `In a box, there are 3 blue plates, 7 green plates and 9 purple plates. If 4 plates are randomly selected from the box at the same time, find<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">the probability that 4 plates of the same colour are selected;<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">the probability that at least 2 plates of different colours are selected.<span class="marks">(2 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 計算「全藍」「全綠」「全紫」的組合數總和，再除以總抽法。<br>(b) 用 1 減去「全同色」的概率。`,
            en: `(a) Sum the combinations for "all blue", "all green", and "all purple", then divide by the total combinations.<br>(b) Subtract the probability of "all same colour" from 1.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_4^7+C_4^9}{C_4^{19}}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{161}{3\\,876}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解 1：</span><br>    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{P_4^7+P_4^9}{P_4^{19}}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{161}{3\\,876}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解 2：</span><br>    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\left(\\dfrac{7}{19}\\right)\\left(\\dfrac{6}{18}\\right)\\left(\\dfrac{5}{17}\\right)\\left(\\dfrac{4}{16}\\right)+\\left(\\dfrac{9}{19}\\right)\\left(\\dfrac{8}{18}\\right)\\left(\\dfrac{7}{17}\\right)\\left(\\dfrac{6}{16}\\right)$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{161}{3\\,876}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1-\\dfrac{161}{3\\,876}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{3\\,715}{3\\,876}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q16",
        year: 2020,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences", "Quadratic Inequalities in One Unknown", "Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
            tc: `某等比數列的第 3 項及第 6 項分別為 144 及 486。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該數列的第 1 項。<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $n$ 的最小值使得該數列的首 $n$ 項之和大於 $8 \\times 10^{18}$。<span class="marks">(3分)</span></div></div><div class="q-clearfix"></div>`,
            en: `The 3rd term and the 6th term of a geometric sequence are 144 and 486 respectively.<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the 1st term of the sequence.<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Find the least value of $n$ such that the sum of the first $n$ terms of the sequence is greater than $8 \\times 10^{18}$.<span class="marks">(3 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 利用 $T_3 = ar^2$、$T_6 = ar^5$ 求公比 $r$ 及首項 $a$。<br>(b) 使用等比數列求和公式，解不等式求最小 $n$。`,
            en: `(a) Use $T_3 = ar^2$ and $T_6 = ar^5$ to solve for common ratio $r$ and first term $a$.<br>(b) Use the geometric series sum formula, set up an inequality to find the least $n$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $a$ 及 $r$ 分別為該等比數列的首項及公比。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $ar^2=144$  及  $ar^4=486$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $r=1.5$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $a=64$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該數列的首項為 64。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$64+64(1.5)+64(1.5^2)+\\cdots+64(1.5^{n-1})&gt;8\\times 10^{18}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{64(1.5^n-1)}{1.5-1}&gt;8\\times 10^{18}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$1.5^n&gt;6.25\\times 10^{16}+1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\log 1.5^n&gt;\\log(6.25\\times 10^{16}+1)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n\\log 1.5&gt;\\log(6.25\\times 10^{16}+1)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n&gt;95.38167941$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$n$ 的最小值為 96。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q17",
        year: 2020,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Coordinate Geometry", "Four Centres of a Triangle", "Functions and Graphs"],
        difficulty: 3,
        content: {
            tc: `設 $\\mathrm{g}(x) = x^2 - 2kx + 2k^2 + 4$，其中 $k$ 為一實常數。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">利用配方法，以 $k$ 表 $y = \\mathrm{g}(x)$ 的圖像的頂點的坐標。<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">在同一直角坐標系中，設 $D$ 及 $E$ 分別為 $y = \\mathrm{g}(x+2)$ 的圖像的頂點及 $y = -\\mathrm{g}(x-2)$ 的圖像的頂點。 這直角坐標系中是否有一點 $F$ 使得 $\\Delta DEF$ 的外心的坐標為 $(0, 3)$？ 試解釋你的答案。<span class="marks">(4分)</span></div></div><div class="q-clearfix"></div>`,
            en: `Let $\\mathrm{g}(x) = x^2 - 2kx + 2k^2 + 4$, where $k$ is a real constant.<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Using the method of completing the square, express, in terms of $k$, the coordinates of the vertex of the graph of $y = \\mathrm{g}(x)$.<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">On the same rectangular coordinate system, let $D$ and $E$ be the vertex of the graph of $y = \\mathrm{g}(x+2)$ and the vertex of the graph of $y = -\\mathrm{g}(x-2)$ respectively. Is there a point $F$ on this rectangular coordinate system such that the coordinates of the circumcentre of $\\Delta DEF$ are $(0,3)$? Explain your answer.<span class="marks">(4 marks)</span></div></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 配方 $g(x) = (x-k)^2 + k^2 + 4$。<br>(b) 求出 D、E 坐標，再假設外心為 (0,3)，檢查是否存在 F 使 DE 的垂直平分線通過 (0,3)。`,
            en: `(a) Complete the square to get $g(x) = (x-k)^2 + k^2 + 4$.<br>(b) Find the coordinates of $D$ and $E$, assume circumcentre is $(0,3)$, and check whether a valid $F$ exists such that the perpendicular bisector of $DE$ passes through $(0,3)$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $\\mathrm{g}(x)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=x^2-2kx+2k^2+4$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=x^2-2kx+k^2+k^2+4$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(x-k)^2+k^2+4$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$y=\\mathrm{g}(x)$ 的圖形的頂點坐標為 $(k,k^2+4)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">留意  $D=(k-2,k^2+4)$  及  $E=(k+2,-k^2-4)$ 。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">將點 $(0,3)$ 記為 $C$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $CD^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=((k-2)-0)^2+((k^2+4)-3)^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=k^4+3k^2-4k+5$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $CE^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(k+2-0)^2+((-k^2-4)-3)^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=k^4+15k^2+4k+53$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$CD^2=CE^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k^4+3k^2-4k+5=k^4+15k^2+4k+53$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$3k^2+2k+12=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $2^2-4(3)(12)=-140&lt;0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，方程 $3k^2+2k+12=0$ 沒有實根。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，在同一直角坐標平面上沒有點 $F$ 使得 $\\Delta DEF$ 的外心坐標為 $(0,3)$。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q18",
        year: 2020,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)", "Perimeters and Areas"],
        difficulty: 3,
        content: {
            tc: `圖中，$U$、$V$ 及 $W$ 均為某圓上的點。 將該圓記為 $C$。 $TU$ 為 $C$ 在 $U$ 的切線使得 $TVW$ 為一直線。<br><img src="img/2020dsep1q18.jpg" class="q-img" alt="題目附圖" style="max-width: 65%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta UTV \\sim \\Delta WTU$。<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">已知 $VW$ 為 $C$ 的一直徑。 假定 $TU = 780\\text{ cm}$ 及 $TV = 325\\text{ cm}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">以 $\\pi$ 表 $C$ 的圓周。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">某人宣稱 $\\Delta UVW$ 的周界超過 $35\\text{ m}$。 你是否同意？ 試解釋你的答案。</div></div><div class="q-text-content"><span class="marks">(5分)</span></div><div class="q-clearfix"></div>`,
            en: `In the figure, $U$, $V$ and $W$ are points lying on a circle. Denote the circle by $C$. $TU$ is the tangent to $C$ at $U$ such that $TVW$ is a straight line.<br><img src="img/2020dsep1q18.jpg" class="q-img" alt="Figure 2" style="max-width: 65%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Prove that $\\Delta UTV \\sim \\Delta WTU$.<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">It is given that $VW$ is a diameter of $C$. Suppose that $TU = 780\\text{ cm}$ and $TV = 325\\text{ cm}$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Express the circumference of $C$ in terms of $\\pi$.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Someone claims that the perimeter of $\\Delta UVW$ exceeds $35\\text{ m}$. Do you agree? Explain your answer.</div></div><div class="q-text-content"><span class="marks">(5 marks)</span></div><div class="q-clearfix"></div>`
        },
        hint: {
            tc: `(a) 利用切線與弦定理（切線垂直半徑或角度相等）證明 AA 相似。<br>(b) 利用相似比求半徑，再計算周界比較。`,
            en: `(a) Use angle in alternate segment and common angle to prove similarity by AA.<br>(b) Use ratio of similar triangles to find the radius, then calculate and compare the perimeter.`
        },
        solution: `<div class="ms-container"><div class="ms-row" style="white-space: pre; overflow-x: visible; overflow-y: visible;"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2" style="white-space: pre; overflow-x: visible; overflow-y: visible; grid-column: 2 / 6;">$\\angle TUV=\\angle TWU$\t[交錯弓形的圓周角]<br>$\\angle UTV=\\angle UTW$\t[公共角]<br>$\\Delta UTV\\sim\\Delta WTU$\t(AA)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$\\dfrac{TW}{TU}=\\dfrac{TU}{TV}$ （藉 (a)）</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{TV+VW}{TU}=\\dfrac{TU}{TV}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{325+VW}{780}=\\dfrac{780}{325}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$VW=1\\,547\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$C$ 的周界為 $1547\\pi\\text{ cm}$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">藉 (a)，可得 $UV:UW=TV:TU=325:780=5:12$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $VW$ 為 $C$ 的直徑，可得 $\\angle UVW=90^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $UV:UW:VW=5:12:13$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    $UV$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=(1\\,547)\\left(\\dfrac{5}{13}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=595\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    $UW$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=(1\\,547)\\left(\\dfrac{12}{13}\\right)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=1\\,428\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    $\\Delta UVW$ 的周界<br>$=595+1\\,428+1\\,547$<br>$=3\\,570\\text{ cm}$<br>$=35.7\\text{ m}$<br>$&gt;35\\text{ m}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2020-DSE-MATH-CP1-Q19",
        year: 2020,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Trigonometry (3D)"],
        difficulty: 3,
        content: {
            tc: `$PQRS$ 為四邊形紙卡，其中 $PQ = 60\\text{ cm}$、$PS = 40\\text{ cm}$、$\\angle PQR = 30^\\circ$、$\\angle PRQ = 55^\\circ$ 及 $\\angle QPS = 120^\\circ$。 把該紙卡懸掛且 $QR$ 位於水平地面上，如圖所示。<br><img src="img/2020dsep1q19.jpg" class="q-img" alt="題目附圖" style="max-width: 90%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $RS$ 的長度。<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求該紙卡的面積。<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">已知該紙卡與水平地面間的交角為 $32^\\circ$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求由 $P$ 至水平地面的最短距離。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">某學生宣稱 $RS$ 與水平地面間的交角至多為 $20^\\circ$。 該宣稱是否正確？ 試解釋你的答案。</div></div><div class="q-text-content"><span class="marks">(7分)</span></div>`,
            en: `$PQRS$ is a quadrilateral paper card, where $PQ = 60\\text{ cm}$, $PS = 40\\text{ cm}$, $\\angle PQR = 30^\\circ$, $\\angle PRQ = 55^\\circ$ and $\\angle QPS = 120^\\circ$. The paper card is held with $QR$ lying on the horizontal ground as shown in the figure.<br><img src="img/2020dsep1q19.jpg" class="q-img" alt="Figure 3" style="max-width: 90%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the length of $RS$.<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Find the area of the paper card.<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">It is given that the angle between the paper card and the horizontal ground is $32^\\circ$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Find the shortest distance from $P$ to the horizontal ground.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">A student claims that the angle between $RS$ and the horizontal ground is at most $20^\\circ$. Is the claim correct? Explain your answer.</div></div><div class="q-text-content"><span class="marks">(7 marks)</span></div>`
        },
        hint: {
            tc: `<a href="https://www.geogebra.org/m/zvbhqfcn" target="_blank">Geogebra 動態模型</a><br>(a) 先在 $\\Delta PQR$ 用正弦公式求 PR，再在 $\\Delta PRS$ 用餘弦公式求 RS。<br>(b) 面積 = $\\Delta PQR$ 面積 + $\\Delta PRS$ 面積。<br>(c) 最短距離為高度 $\\times \\sin 32^\\circ$；再用三維三角比較 RS 的傾角。<div class="q-clearfix"></div>`,
            en: `<a href="https://www.geogebra.org/m/zvbhqfcn" target="_blank">Geogebra Dynamic Model</a><br>(a) Use sine formula in $\\Delta PQR$ to find $PR$, then cosine formula in $\\Delta PRS$ to find $RS$.<br>(b) Area = area of $\\Delta PQR$ + area of $\\Delta PRS$.<br>(c) Shortest distance = height $\\times \\sin 32^\\circ$; then use 3D trigonometry to compare the angle of inclination of $RS$.<div class="q-clearfix"></div>`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{PR}{\\sin\\angle PQR}=\\dfrac{PQ}{\\sin\\angle PRQ}$ （藉正弦公式）</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{PR}{\\sin 30^\\circ}=\\dfrac{60}{\\sin 55^\\circ}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$PR\\approx 36.62323766\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $\\angle QPR=95^\\circ$，可得 $\\angle RPS=25^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$RS^2=PS^2+PR^2-2(PS)(PR)\\cos\\angle RPS$ （藉餘弦公式）</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$RS^2\\approx 40^2+36.62323766^2-2(40)(36.62323766)\\cos 25^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$RS\\approx 16.90879944$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$RS\\approx 16.9\\text{ cm}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$RS$ 的長度為 $16.9\\text{ cm}$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    紙卡的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}(PQ)(PR)\\sin\\angle QPR+\\dfrac{1}{2}(PR)(PS)\\sin\\angle RPS$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx\\dfrac{1}{2}(60)(36.62323766)\\sin 95^\\circ+\\dfrac{1}{2}(36.62323766)(40)\\sin 25^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 1\\,404.069236$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 1\\,400\\text{ cm}^2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">設 $H$ 為由 $P$ 至 $QR$ 的垂足。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PH=PQ\\sin\\angle PQH$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PH=60\\sin 30^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PH=30\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">設 $P$ 在水平地面上的投影為 $G$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，紙卡與水平地面的夾角為 $\\angle PHG$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，可得 $\\angle PHG=32^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PG=PH\\sin\\angle PHG$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PG=30\\sin 32^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PG\\approx 15.9\\text{ cm}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$P$ 至水平地面的最短距離為 $15.9\\text{ cm}$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">將 $S$ 在水平地面上的投影記為 $K$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">設 $T$ 為 $PS$ 的延線與 $QR$ 的延線的交點。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">則可得  $\\Delta SKT\\sim\\Delta PGT$  及  $PT=PQ$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $SK=\\dfrac{PT-PS}{PT}\\cdot PG=\\dfrac{PQ-PS}{PQ}\\cdot PG=\\dfrac{60-40}{60}\\cdot PG=\\dfrac{1}{3}PG$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉 (c)(i)，可得 $SK=10\\sin 32^\\circ\\text{ cm}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $RS$ 與水平地面的夾角為 $\\angle SRK$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sin\\angle SRK=\\dfrac{SK}{RS}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sin\\angle SRK\\approx\\dfrac{10\\sin 32^\\circ}{16.90879944}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle SRK\\approx 18.26416068^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，可得 $\\angle SRK\\le 20^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，該宣稱正確。</div><div class="ms-mark">1A</div></div></div>`
    }
);
