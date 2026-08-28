// 2021dsep1.js
// 使用 .push 將 2021 年 DSE 數學卷一（Q1 至 Q19）完整題目追加至 questions 陣列中

questions.push(
    {
        id: "2021-DSE-MATH-CP1-Q01",
        year: 2021,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `化簡 $(\\alpha\\beta^3)(\\alpha^{-2}\\beta^4)^5$，並以正指數表示答案。<span class="marks">(3分)</span>`,
            en: `Simplify $(\\alpha\\beta^3)(\\alpha^{-2}\\beta^4)^5$ and express your answer with positive indices.<span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `利用指數定律 $\\alpha^m \\cdot \\alpha^n = \\alpha^{m+n}$ 及 $\\beta^m \\cdot \\beta^n = \\beta^{m+n}$ 將同底數的項合併。`,
            en: `By the index laws $\\alpha^m \\cdot \\alpha^n = \\alpha^{m+n}$ and $\\beta^m \\cdot \\beta^n = \\beta^{m+n}$, combine terms with same base.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $(\\alpha\\beta^3)(\\alpha^{-2}\\beta^4)^5$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=(\\alpha\\beta^3)(\\alpha^{-10}\\beta^{20})$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\alpha^{-9}\\beta^{23}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{\\beta^{23}}{\\alpha^9}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q02",
        year: 2021,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: {
            tc: `令 $a$ 成為公式 $\\dfrac{4-3a}{b}=5$ 的主項。<span class="marks">(3分)</span>`,
            en: `Make $a$ the subject of the formula $\\dfrac{4-3a}{b}=5$.<span class="marks">(3 marks)</span>`
        },
        hint: {
            tc: `兩邊同乘以 $b$ 消除分母，然後將含有 $a$ 的項單獨移到等號一邊，再移項求解 $a$。`,
            en: `Multiply both sides by $b$ to clear the fraction, rearrange terms containing $a$ to one side, and solve for $a$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{4-3a}{b}=5$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$4-3a=5b$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$-3a=5b-4$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$a=\\dfrac{4-5b}{3}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>$\\dfrac{4-3a}{b}=5$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{4}{b}-\\dfrac{3a}{b}=5$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$-3a=b\\left(5-\\dfrac{4}{b}\\right)$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$a=-\\dfrac{b}{3}\\left(5-\\dfrac{4}{b}\\right)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$a=\\dfrac{4}{3}-\\dfrac{5b}{3}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q03",
        year: 2021,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `因式分解<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$6x^{2}+xy-2y^{2}$ ，<span class="marks">(1分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$8x-4y-6x^{2}-xy+2y^{2}$ 。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Factorize<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$6x^{2}+xy-2y^{2}$,<span class="marks">(1 mark)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$8x-4y-6x^{2}-xy+2y^{2}$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 使用十字相乘法將二次三項式因式分解。<br>(b) 先將前兩項提取公因式，後三項提取負號並代入 (a) 的結果，再提取整體公因式。`,
            en: `(a) Factorize the quadratic trinomial using cross-multiplication.<br>(b) Factor out common factors from the first two terms, extract a negative sign from the last three terms and substitute the result from (a), then factor out the common factor.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $6x^2+xy-2y^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$= (2x-y)(3x+2y)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $8x-4y-6x^2-xy+2y^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=8x-4y-(2x-y)(3x+2y)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4(2x-y)-(2x-y)(3x+2y)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(2x-y)(4-3x-2y)$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q04",
        year: 2021,
        type: "P1",
        section: "A1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: {
            tc: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求同時滿足  $\\dfrac{7(x-2)}{5}+11>3(x-1)$  及  $x+42 \\ge 0$  的 $x$ 值的範圍。<span class="marks">(3分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">有多少個正整數同時滿足 (a) 的不等式？<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
            en: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the range of values of $x$ which satisfy both $\\dfrac{7(x-2)}{5}+11>3(x-1)$ and $x+4 \\ge 0$.<span class="marks">(3 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">How many positive integers satisfy both inequalities in (a)?<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 先解第一個不等式（兩邊同乘以 5 展開並去括號），再解第二個不等式，最後求兩者解集的交集。<br>(b) 在得到的 $x$ 範圍內，數出屬於正整數（1, 2, 3...）的個數。`,
            en: `(a) Solve the first inequality (multiply both sides by 5 and expand), then solve the second inequality, and find the intersection of both solutions.<br>(b) Count the number of positive integers (1, 2, 3...) within the solution range obtained.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{7(x-2)}{5}+11&gt;3(x-1)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$7x-14&gt;15x-70$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-8x&gt;-56$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x&lt;7$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$x+4\\ge 0$<br>$x\\ge -4$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的解為 $-4\\le x&lt;7$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">6</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q05",
        year: 2021,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: {
            tc: `某男生擁有貼紙的數目為某女生擁有的 3 倍。若該男生將他其中的 20 張貼紙送給該女生，則該女生擁有貼紙的數目為該男生擁有的 2 倍。求該男生和該女生擁有貼紙的總數。<span class="marks">(4分)</span>`,
            en: `The number of stickers owned by a boy is 3 times that owned by a girl. If the boy gives 20 of his stickers to the girl, then the number of stickers owned by the girl is 2 times that owned by the boy. Find the total number of stickers owned by the boy and the girl.<span class="marks">(4 marks)</span>`
        },
        hint: {
            tc: `設女生原本擁有 $x$ 張貼紙，則男生原本擁有 $3x$ 張。根據男生送出 20 張、女生收到 20 張後的新數量關係列出方程。`,
            en: `Let the girl originally have $x$ stickers, so the boy originally has $3x$ stickers. Set up an equation according to the new relation after the boy gives 20 stickers and the girl receives 20 stickers.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $x$ 為女孩擁有的貼紙數目，則男孩擁有的貼紙數目為 $3x$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$2(3x-20)=x+20$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$6x-40=x+20$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=12$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，男孩與女孩擁有的貼紙總數為 48。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 1：</span><br>設 $x$ 及 $y$ 分別為女孩及男孩擁有的貼紙數目。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得  $3x=y$  及  $2(y-20)=x+20$ 。</div><div class="ms-mark">1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$2(3x-20)=x+20$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$6x-40=x+20$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=12$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=36$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，男孩與女孩擁有的貼紙總數為 48。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 2：</span><br>設 $n$ 為男孩與女孩擁有的貼紙總數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得 $2\\left(\\dfrac{3}{4}n-20\\right)=\\dfrac{1}{4}n+20$。</div><div class="ms-mark">1M+1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{5}{4}n=60$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$n=48$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，男孩與女孩擁有的貼紙總數為 48。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q06",
        year: 2021,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Arithmetic"],
        topic: ["Percentages"],
        difficulty: 1,
        content: {
            tc: `某襯衣的標價較其成本高 \\$80。該襯衣以其標價九折售出。售出該襯衣後，盈利百分率為 30%。求該襯衣的標價。<span class="marks">(4分)</span>`,
            en: `The marked price of a shirt is higher than its cost by $80. The shirt is sold at a discount of 10% on its marked price. After selling the shirt, the percentage profit is 30%. Find the marked price of the shirt.<span class="marks">(4 marks)</span>`
        },
        hint: {
            tc: `設成本為 \$c，則標價為 $c + 80$，售價為 $0.9(c + 80)$。利用「售價 = 成本 $\\times (1 + \\text{盈利百分率})$」列式求解成本，再算標價。`,
            en: `Let the cost be \$c, then marked price is $c + 80$, and selling price is $0.9(c + 80)$. Use "Selling Price = Cost $\\times (1 + \\text{profit percentage})$" to set up an equation to find the cost, then find the marked price.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $\\$x$ 為該襯衣的標價。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">該襯衣的成本 $=\\$(x-80)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">該襯衣的售價 $=(90\\%)x=\\$0.9x$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$0.9x=(x-80)(1+30\\%)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$0.9x=1.3x-104$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=260$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該襯衣的標價為 $\\$260$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>設 $\\$c$ 為該襯衣的成本。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">該襯衣的標價 $=\\$(c+80)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">該襯衣的售價 $=(c+80)(90\\%)=\\$(0.9c+72)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$0.9c+72=(1+30\\%)c$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$0.9c+72=1.3c$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$c=180$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該襯衣的標價為 $\\$260$。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q07",
        year: 2021,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: {
            tc: `<div style="color: red;">在某極坐標系中， $O$ 為極點。 點 $P$ 及點 $Q$ 的極坐標分別為 $(r, 80^\\circ)$ 及 $(r, 140^\\circ)$，其中 $r$ 為一正常數。 已知 $P$ 與 $Q$ 間的距離為 21。 求</div><div class="q-line" style="color: red;"><span class="q-label">(a)</span><div class="q-text-content" style="color: red;">$\\angle POQ$ ，<span class="marks">(1分)</span></div></div><div class="q-line" style="color: red;"><span class="q-label">(b)</span><div class="q-text-content" style="color: red;">$r$ ，<span class="marks">(1分)</span></div></div><div class="q-line" style="color: red;"><span class="q-label">(c)</span><div class="q-text-content" style="color: red;">$\\Delta OPQ$ 的周界。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `<div style="color: red;">In a polar coordinate system, $O$ is the pole. The polar coordinates of the points $P$ and $Q$ are $(r, 80^\\circ)$ and $(r, 140^\\circ)$ respectively, where $r$ is a positive constant. It is given that the distance between $P$ and $Q$ is 21. Find</div><div class="q-line" style="color: red;"><span class="q-label">(a)</span><div class="q-text-content" style="color: red;">$\\angle POQ$,<span class="marks">(1 mark)</span></div></div><div class="q-line" style="color: red;"><span class="q-label">(b)</span><div class="q-text-content" style="color: red;">$r$,<span class="marks">(1 mark)</span></div></div><div class="q-line" style="color: red;"><span class="q-label">(c)</span><div class="q-text-content" style="color: red;">the perimeter of $\\Delta OPQ$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) $\\angle POQ$ 為兩點極角的差值。<br>(b) 由於 $OP = OQ = r$，$\\triangle OPQ$ 為等腰三角形。利用等腰三角形性質或餘弦定理，結合已知的 $PQ=21$ 和頂角，求出 $r$。<br>(c) 周界 $= OP + OQ + PQ = 2r + 21$。`,
            en: `(a) $\\angle POQ$ is the difference between the polar angles of the two points.<br>(b) Since $OP = OQ = r$, $\\triangle OPQ$ is an isosceles triangle. Use properties of isosceles triangle or cosine formula with given $PQ=21$ and vertex angle to find $r$.<br>(c) Perimeter $= OP + OQ + PQ = 2r + 21$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\angle POQ=140^\\circ-80^\\circ=60^\\circ$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">由於 $\\Delta OPQ$ 為等邊三角形，可得 $r=21$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">$\\Delta OPQ$ 的周界 $=3(21)=63$</div><div class="ms-mark">1M+1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q08",
        year: 2021,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)", "Pythagoras Theorem"],
        difficulty: 2,
        content: {
            tc: `在圖中， $AB$ 的延線與 $CD$ 的延線相交於點 $E$。 已知 $\\angle CAE = \\angle BDE$。<img src="img/2021dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ACE \\sim \\Delta DBE$。<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">已知 $AC = 25\\text{ cm}$ 、 $AE = 60\\text{ cm}$ 、 $CE = 65\\text{ cm}$ 及 $BD = 15\\text{ cm}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$\\Delta ACE$ 是否一直角三角形？ 試解釋你的答案。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $\\Delta DBE$ 的面積。<br><span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `In the figure, $AB$ produced and $CD$ produced meet at the point $E$. It is given that $\\angle CAE = \\angle BDE$.<img src="img/2021dsep1q08.jpg" class="q-img" alt="Figure 1" style="max-width: 70%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Prove that $\\Delta ACE \\sim \\Delta DBE$.<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">It is given that $AC = 25\\text{ cm}$, $AE = 60\\text{ cm}$, $CE = 65\\text{ cm}$ and $BD = 15\\text{ cm}$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Is $\\Delta ACE$ a right-angled triangle? Explain your answer.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Find the area of $\\Delta DBE$.<br><span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 觀察兩個三角形，有一組對應角已知相等，且包含一個公共角 $\\angle E$，可使用 AA 證明相似。<br>(b)(i) 檢查 $AC^2 + AE^2 = CE^2$ 是否成立，利用畢氏定理的逆定理驗證。<br>(b)(ii) 相似三角形的面積比等於對應邊長比的平方，先求 $\\triangle ACE$ 的面積，再按比例求出 $\\triangle DBE$ 的面積。`,
            en: `(a) Observe both triangles, one pair of corresponding angles is given equal and they share a common angle $\\angle E$. Use AA to prove similarity.<br>(b)(i) Check whether $AC^2 + AE^2 = CE^2$ holds using converse of Pythagoras' theorem.<br>(b)(ii) The ratio of areas of similar triangles equals the square of the ratio of corresponding sides. Find area of $\\triangle ACE$ first then calculate area of $\\triangle DBE$.`
        },
        solution: `<div class="ms-container"><div class="ms-row" style="white-space: pre; overflow-x: visible; overflow-y: visible;"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2" style="white-space: pre; overflow-x: visible; overflow-y: visible; grid-column: 2 / 6;">$\\angle CAE=\\angle BDE$\t[已知]<br>$\\angle AEC=\\angle DEB$\t[公共角]<br>$\\angle ACE=\\angle DBE$\t[$\\Delta$內角和]<br>$\\Delta ACE\\sim\\Delta DBE$\t(AAA)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">    $AC^2+AE^2$<br>$=25^2+60^2$<br>$=4225$<br>$=65^2$<br>$=CE^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$\\Delta ACE$ 為直角三角形。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">$\\dfrac{DE}{AE}=\\dfrac{BD}{AC}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{DE}{60}=\\dfrac{15}{25}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$DE=36\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\angle BDE=90^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\Delta BDE$ 的面積 $=\\dfrac{15(36)}{2}=270\\text{ cm}^2$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q09",
        year: 2021,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs"],
        difficulty: 1,
        content: {
            tc: `下面的棒形圖顯示一群學生在某年內的閱書數目的分佈。<img src="img/2021dsep1q09zh.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;">若從該群中隨機選出一名學生，則所選出的學生在該年內閱書少於 26 本的概率為 $\\dfrac{7}{10}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $k$。<span class="marks">(2分)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出該分佈的分佈域、四分位數間距及標準差。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The bar chart below shows the distribution of the numbers of books read by a group of students in a year.<img src="img/2021dsep1q09en.jpg" class="q-img" alt="Figure" style="max-width: 70%;">If a student is randomly selected from the group, then the probability that the selected student reads fewer than 26 books in the year is $\\dfrac{7}{10}$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $k$.<span class="marks">(2 marks)</span></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Write down the range, the inter-quartile range and the standard deviation of the distribution.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 「少於 26 本」包含 23、24、25 本。利用其總人數除以全體總人數等於 $\\dfrac{7}{10}$ 建立方程求解 $k$。<br>(b) 求出 $k$ 後可得總人數與完整數據分佈，進而找出最大與最小值之差（分佈域）、第 3 四分位數與第 1 四分位數之差（IQR）及標準差（可利用計算機功能）。`,
            en: `(a) "Fewer than 26 books" includes 23, 24, and 25 books. Set up an equation with its sum divided by total students equal to $\\dfrac{7}{10}$ to solve for $k$.<br>(b) After finding $k$, get the full data distribution to calculate range (max - min), inter-quartile range ($Q_3 - Q_1$), and standard deviation.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{12+k+16}{12+k+16+9+11+4}=\\dfrac{7}{10}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k=28$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">分佈域 $=5$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">四分位數間距 $=2$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">標準差 $\\approx 1.43$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q10",
        year: 2021,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: {
            tc: `已知 $\\mathrm{f}(x)$ 的一部分為常數，另一部分則隨 $(x+4)^{2}$ 正變。 假定 $\\mathrm{f}(-3)=0$ 及 $\\mathrm{f}(2)=105$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{f}(0)$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">將 $y=\\mathrm{f}(x)+3$ 的圖像記為 $G$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">寫出 $G$ 的 $y$ 截距。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $G$ 的 $x$ 截距。<br><span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `It is given that $\\mathrm{f}(x)$ is partly constant and partly varies as $(x+4)^{2}$. Suppose that $\\mathrm{f}(-3)=0$ and $\\mathrm{f}(2)=105$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $\\mathrm{f}(0)$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Denote the graph of $y=\\mathrm{f}(x)+3$ by $G$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Write down the $y$-intercept of $G$.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Find the $x$-intercept(s) of $G$.<br><span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 設 $f(x) = k_1 + k_2(x+4)^2$，代入已知點求解 $k_1$ 和 $k_2$，進而計算 $f(0)$。<br>(b)(i) $y$ 截距即令 $x=0$ 求出 $y$ 的值。<br>(b)(ii) $x$ 截距即令 $y=0$ 求解二次方程所得的 $x$ 的值。`,
            en: `(a) Let $f(x) = k_1 + k_2(x+4)^2$. Substitute given values to find $k_1$ and $k_2$, then compute $f(0)$.<br>(b)(i) $y$-intercept is the value of $y$ when $x=0$.<br>(b)(ii) $x$-intercept(s) are found by setting $y=0$ and solving the quadratic equation.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{f}(x)=m(x+4)^2+n$，其中 $m$ 及 $n$ 均為非零常數。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於  $\\mathrm{f}(-3)=0$  及  $\\mathrm{f}(2)=105$ ，可得  $m+n=0$  及  $36m+n=105$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $m=3$  及  $n=-3$ 。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{f}(0)=45$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">48</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">對於 $\\mathrm{f}(x)+3=0$，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$3(x+4)^2=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$x=-4$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$G$ 的 $x$ 截距為 $-4$。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q11",
        year: 2021,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 2,
        content: {
            tc: `下表顯示在一遊戲中某群小童所獲代幣的數目的分佈。
        <table class="q-table" style="margin-left: auto; margin-right: auto; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 2em;">
      <col style="width: 2em;">
      <col style="width: 2em;">
      <col style="width: 2em;">
      <col style="width: 2em;">
      <col style="width: 2em;">
      <col style="width: 2em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">所獲代幣的數目</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">1</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">3</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">7</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">小童人數</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">15</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">9</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">5</td>
    </tr>
  </table>
<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該分佈的平均值。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該分佈的中位數與眾數是否相等？ 試解釋你的答案。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">若再多 $n$ 名小童參與該遊戲且其中每人均獲 5 個代幣，寫出</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$n$ 的值使得該分佈的平均值增加 1；</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$n$ 的最小值使得該分佈的中位數增加 2；</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">$n$ 的最大值使得該分佈的眾數維持不變。<br><span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The table below shows the distribution of the numbers of tokens got by a group of children in a game.
        <table class="q-table" style="margin-left: auto; margin-right: auto; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 2em;">
      <col style="width: 2em;">
      <col style="width: 2em;">
      <col style="width: 2em;">
      <col style="width: 2em;">
      <col style="width: 2em;">
      <col style="width: 2em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">Number of tokens got</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">1</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">3</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">7</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">Number of children</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">15</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">9</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 2px 10px;">5</td>
    </tr>
  </table>
<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the mean of the distribution.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Are the median and the mode of the distribution equal? Explain your answer.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">If $n$ more children play the game and each of them gets 5 tokens, write down</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">the value of $n$ such that the mean of the distribution is increased by 1;</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">the least value of $n$ such that the median of the distribution is increased by 2;</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">the greatest value of $n$ such that the mode of the distribution remains unchanged.<br><span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 使用加權平均公式（總代幣數 / 總人數）求解。<br>(b) 找出原本的眾數（頻數最大者）及中位數（排序後的正中間值）進行比較。<br>(c)(i) 利用新平均值 = 原平均值 + 1 建立方程求解 $n$。<br>(c)(ii) 使中位數從原先的值增加 2，需要加入足夠多的「5個代幣」的小童來使中位數右移。<br>(c)(iii) 原眾數為 1 (頻數 15)，加入獲 5 個代幣的小童會使 5 的頻數增加。若要眾數不變，5 的頻數不能大於 1 的頻數。`,
            en: `(a) Use weighted mean formula (total tokens / total children).<br>(b) Find original mode (highest frequency) and median (middle value) and compare.<br>(c)(i) Set up equation: new mean = original mean + 1, then solve for $n$.<br>(c)(ii) Add enough children with 5 tokens so the median shifts right and increases by 2.<br>(c)(iii) Original mode is 1 (freq 15). Adding children with 5 tokens increases frequency of 5. To keep mode unchanged, freq of 5 must not exceed 15.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    平均值</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1(15)+2(9)+3(2)+4(5)+5(4)+6(2)+7(5)}{15+9+2+5+4+2+5}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{126}{42}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">中位數及眾數分別為  2  及  1 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該分佈的中位數與眾數不相等。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">42</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">11</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(iii)</div><div class="ms-content ms-from-l3">10</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q12",
        year: 2021,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: {
            tc: `多項式 $\\mathrm{p}(x)$ 可被 $x-5$ 整除。 當 $\\mathrm{p}(x)$ 除以 $x^2+x+1$ 時，商式及餘式分別為 $2x^2-37$ 及 $cx+c-1$，其中 $c$ 為一常數。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $c$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">證明 $x+3$ 為 $\\mathrm{p}(x)$ 的因式。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">某人宣稱方程 $\\mathrm{p}(x)=0$ 所有的根均為實數。 該宣稱是否正確？ 試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The polynomial $\\mathrm{p}(x)$ is divisible by $x-5$. When $\\mathrm{p}(x)$ is divided by $x^2+x+1$, the quotient and the remainder are $2x^2-37$ and $cx+c-1$ respectively, where $c$ is a constant.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $c$.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Prove that $x+3$ is a factor of $\\mathrm{p}(x)$.<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">Someone claims that all the roots of the equation $\\mathrm{p}(x)=0$ are real numbers. Is the claim correct? Explain your answer.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 根據除法恆等式寫出 $p(x) = (x^2+x+1)(2x^2-37) + cx + c - 1$。利用因式定理 $p(5) = 0$ 代入方程求 $c$。<br>(b) 計算 $p(-3)$，若結果為 0，則根據因式定理得證。<br>(c) 將 $p(x)$ 完全因式分解，找出所有因式，檢查其二次因式部分的判別式 $\\Delta$ 是否小於 0。`,
            en: `(a) Write $p(x) = (x^2+x+1)(2x^2-37) + cx + c - 1$ using division identity. Use factor theorem $p(5) = 0$ to solve for $c$.<br>(b) Calculate $p(-3)$, if equal to 0, $x+3$ is a factor by factor theorem.<br>(c) Factorize $p(x)$ completely and check if discriminant $\\Delta$ of quadratic factor is less than 0.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{p}(x)=(x^2+x+1)(2x^2-37)+cx+c-1$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\mathrm{p}(5)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(5^2+5+1)(2(5^2)-37)+5c+c-1=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$6c+402=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c=-67$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $\\mathrm{p}(x)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(x^2+x+1)(2x^2-37)-67x-68$ （藉 (a)）</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2x^4+2x^3-35x^2-104x-105$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\mathrm{p}(-3)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2(-3)^4+2(-3)^3-35(-3)^2-104(-3)-105$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$x+3$ 為 $\\mathrm{p}(x)$ 的因式。</div><div class="ms-mark">1</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">藉 (b)，可得 $\\mathrm{p}(x)=2x^4+2x^3-35x^2-104x-105$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{p}(x)=(x+3)(x-5)(2x^2+6x+7)$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$\\mathrm{p}(x)=0$<br>$(x+3)(x-5)(2x^2+6x+7)=0$<br>$x=-3$ 、 $x=5$  或  $2x^2+6x+7=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $6^2-4(2)(7)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=-20$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$&lt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，方程 $2x^2+6x+7=0$ 的根不是實數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q13",
        year: 2021,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Loci"],
        difficulty: 2,
        content: {
            tc: `圓 $C$ 的方程為 $x^2+y^2-12x-16y-69=0$。 設 $G$ 為 $C$ 的圓心。 將原點記為 $O$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $OG$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$O$ 是否位於 $C$ 以內？ 試解釋你的答案。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">設 $P$ 為直角坐標平面上的一動點使得 $OP = GP$。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。 假定 $\\mathit{\\Gamma}$ 與 $C$ 相交於點 $M$ 及點 $N$。 求四邊形 $OMGN$ 的面積。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The equation of the circle $C$ is $x^2+y^2-12x-16y-69=0$. Let $G$ be the centre of $C$. Denote the origin by $O$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $OG$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Does $O$ lie inside $C$? Explain your answer.<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">Let $P$ be a moving point in the rectangular coordinate plane such that $OP = GP$. Denote the locus of $P$ by $\\mathit{\\Gamma}$. Suppose that $\\mathit{\\Gamma}$ cuts $C$ at the points $M$ and $N$. Find the area of the quadrilateral $OMGN$.<span class="marks">(4 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 利用公式將圓的方程化為標準式，求出圓心 $G(h,k)$ 與半徑 $r$。再利用兩點距離公式求 $OG$。<br>(b) 比較 $OG$ 的長度與圓 $C$ 的半徑 $r$ 的大小。若 $OG < r$，則在圓內。<br>(c) 軌跡 $L$ 是線段 $OG$ 的垂直平分線。根據對稱性，四邊形 $OMGN$ 可拆分為兩個全等的直角三角形（由半徑、弦心距、半弦組成），或利用對角線互相垂直的四邊形面積公式 $\\dfrac{1}{2} \\times d_1 \\times d_2$ 求解。`,
            en: `(a) Find centre $G(h,k)$ and radius $r$ of circle $C$. Use distance formula to find $OG$.<br>(b) Compare distance $OG$ with radius $r$. If $OG < r$, $O$ lies inside $C$.<br>(c) Locus $\\mathit{\\Gamma}$ is the perpendicular bisector of $OG$. By symmetry, quadrilateral $OMGN$ is a rhombus. Calculate area using $\\dfrac{1}{2} \\times d_1 \\times d_2$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">留意 $G$ 的坐標為 $(6,8)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $OG$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{(6-0)^2+(8-0)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=10$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $C$ 的半徑</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}\\sqrt{(-12)^2+(-16)^2+4(69)}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=13$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$&gt;OG$ （藉 (a)）</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">藉 (b)，可得 $GM=13$。<br>設 $Q$ 為 $MN$ 的中點。<br>留意 $\\mathit{\\Gamma}$ 為 $OG$ 的垂直平分線。<br>由於 $Q$ 在 $\\mathit{\\Gamma}$ 上，$Q$ 為 $OG$ 的中點。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $GQ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}OG$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{2}(10)$ （藉 (a)）</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=5$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">再留意 $\\angle GQM=90^\\circ$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $MQ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{GM^2-GQ^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{13^2-5^2}$<br>$=12$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">由於 $M$ 及 $N$ 均在 $\\mathit{\\Gamma}$ 上，可得  $OM=GM$  及  $ON=GN$ 。<br>再留意 $GM=GN$。<br>故此，可得 $OM=GM=GN=ON$。<br>因此，四邊形 $OMGN$ 為菱形。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    四邊形 $OMGN$ 的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4\\left(\\dfrac{1}{2}(GQ)(MQ)\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4\\left(\\dfrac{1}{2}(5)(12)\\right)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=120$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q14",
        year: 2021,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: {
            tc: `實心直立圓柱體 $X$ 的底半徑與實心直立圓錐體 $Y$ 的底半徑相等。 $X$ 及 $Y$ 的高分別為 $20\\text{ cm}$ 及 $24\\text{ cm}$。 實心直立圓錐體 $Z$ 的體積等於 $X$ 的體積與 $Y$ 的體積之和。 $Z$ 的底半徑等於 $X$ 的底直徑。 某工匠得知 $Y$ 的體積為 $800\\pi\\text{ cm}^3$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $Y$ 的底半徑。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$Y$ 與 $Z$ 是否相似？ 試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">該工匠宣稱 $X$ 的曲面面積與 $Y$ 的曲面面積之和大於 $Z$ 的曲面面積。 你是否同意？ 試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The base radius of the solid right circular cylinder $X$ and the base radius of the solid right circular cone $Y$ are equal. The heights of $X$ and $Y$ are $20\\text{ cm}$ and $24\\text{ cm}$ respectively. The volume of the solid right circular cone $Z$ is equal to the sum of the volume of $X$ and the volume of $Y$. The base radius of $Z$ is equal to the base diameter of $X$. A craftsman finds that the volume of $Y$ is $800\\pi\\text{ cm}^3$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find the base radius of $Y$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Are $Y$ and $Z$ similar? Explain your answer.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">The craftsman claims that the sum of the curved surface area of $X$ and the curved surface area of $Y$ is greater than the curved surface area of $Z$. Do you agree? Explain your answer.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 利用圓錐體體積公式 $V = \\dfrac{1}{3}\\pi r^2 h$ 帶入已知體積與高求解半徑。<br>(b) 計算出圓錐體 $Z$ 的體積，進而依據其底半徑（等於 $X$ 的直徑，即 $2r_Y$）求出 $Z$ 的高度。檢查其底半徑之比是否等於高度之比。<br>(c) 分別計算出 $X$ 的曲面面積 ($2\\pi r h$)、 $Y$ 的曲面面積 ($\\pi r l$) 和 $Z$ 的曲面面積 ($\\pi r_Z l_Z$)，相加後進行數值大小比較。`,
            en: `(a) Use cone volume formula $V = \\dfrac{1}{3}\\pi r^2 h$ with given volume and height to solve for base radius.<br>(b) Find the volume of $Z$, then determine height of $Z$ using its base radius ($2r_Y$). Compare the ratio of base radii cubed with ratio of volumes.<br>(c) Calculate curved surface area of $X$ ($2\\pi r h$), $Y$ ($\\pi r l$), and $Z$ ($\\pi r_Z l_Z$), sum $X$ and $Y$ and compare with $Z$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $r\\text{ cm}$ 為 $Y$ 的底半徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{1}{3}\\pi r^2(24)=800\\pi$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$r=10$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$Y$ 的底半徑為 $10\\text{ cm}$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $Z$ 的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(10^2)(20)+800\\pi$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2\\,800\\pi\\text{ cm}^3$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$\\left(\\dfrac{Y\\text{ 的底半徑}}{Z\\text{ 的底半徑}}\\right)^3=\\left(\\dfrac{1}{2}\\right)^3=\\dfrac{1}{8}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{Y\\text{ 的體積}}{Z\\text{ 的體積}}=\\dfrac{800}{2\\,800}=\\dfrac{2}{7}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{Y\\text{ 的體積}}{Z\\text{ 的體積}}\\ne\\left(\\dfrac{Y\\text{ 的底半徑}}{Z\\text{ 的底半徑}}\\right)^3$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$Y$ 與 $Z$ 不相似。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">    $X$ 的曲面面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2\\pi(10)(20)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=400\\pi\\text{ cm}^2$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $Y$ 的曲面面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(10)\\sqrt{10^2+24^2}$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=260\\pi\\text{ cm}^2$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">設 $h\\text{ cm}$ 為 $Z$ 的高。<br>$\\dfrac{1}{3}\\pi(20^2)h=2\\,800\\pi$<br>$h=21$<br>因此，$Z$ 的高為 $21\\text{ cm}$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $Z$ 的曲面面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(20)\\sqrt{20^2+21^2}$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=580\\pi\\text{ cm}^2$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $X$ 的曲面面積與 $Y$ 的曲面面積之和<br>$=400\\pi+260\\pi$<br>$=660\\pi\\text{ cm}^2$<br>$&gt;580\\pi\\text{ cm}^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q15",
        year: 2021,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations", "Probability"],
        difficulty: 1,
        content: {
            tc: `7 名教師與 3 名學生隨機排成一隊。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">可排成多少不同的隊？<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求沒有學生在該隊中相鄰而排的概率。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
            en: `A queue is randomly formed by 7 teachers and 3 students.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">How many different queues can be formed?<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Find the probability that no students are next to each other in the queue.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 總人數為 10 人，全排列的方法數為 $10!$。<br>(b) 「學生互不相鄰」可使用插空法。先將 7 名教師排好（$7!$），然後在教師產生的 8 個空隙中選出 3 個安排 3名學生（$P_{3}^{8}$）。所求概率為該排列數除以總排列數。`,
            en: `(a) Total 10 people, number of arrangements is $10!$.<br>(b) Use insertion method. Arrange 7 teachers first ($7!$), then select 3 spaces out of 8 spaces formed by teachers for the 3 students ($P_3^8$). Divide this by total permutations.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">所求的數目 $=P_{10}^{10}=3\\,628\\,800$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{7!\\cdot C_3^8\\cdot 3!}{3\\,628\\,800}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1\\,693\\,440}{3\\,628\\,800}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{7}{15}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q16",
        year: 2021,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities in Two Unknowns", "Linear Programming"],
        difficulty: 3,
        content: {
            tc: `直線 $L_1$ 與直線 $L_2$ 互相垂直。 $L_1$ 的 $y$ 截距為 3。 已知 $L_1$ 與 $L_2$ 相交於點 $(2, 6)$。 設 $R$ 為 $L_1$ 、 $L_2$ 與 $x$ 軸圍成的區域（包括邊界在內）。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">已知 $R$ 表示某不等式組的解。 求該不等式組。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $8x-5y$ 的最小值，其中 $(x, y)$ 為 $R$ 中的一點。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
            en: `The straight lines $L_1$ and $L_2$ are perpendicular to each other. The $y$-intercept of $L_1$ is 3. It is given that $L_1$ and $L_2$ intersect at the point $(2, 6)$. Let $R$ be the region (including the boundary) bounded by $L_1$, $L_2$ and the $x$-axis.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">It is given that $R$ represents the solution of a system of inequalities. Find the system of inequalities.<span class="marks">(3 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Find the least value of $8x-5y$, where $(x, y)$ is a point lying in $R$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 先利用兩點式或點斜式求出直線 $L_1$ 的方程（已知 $(0,3)$ 及 $(2,6)$）。再利用垂直直線斜率關係 $m_1 \\cdot m_2 = -1$ 找出 $L_2$ 的斜率，結合交點 $(2,6)$ 求出 $L_2$ 的方程。最後根據區域 $R$ 判別不等式的符號。<br>(b) 找出區域 $R$ 的所有頂點（$L_1$ 與 $x$ 軸交點、 $L_2$ 與 $x$ 軸交點、 $L_1$ 與 $L_2$ 的交點），分別代入目標函數 $P = 8x-5y$ 中，找出最小值。`,
            en: `(a) Find equation of $L_1$ using points $(0,3)$ and $(2,6)$. Use $m_1 \\cdot m_2 = -1$ to find slope of $L_2$, then derive equation of $L_2$ using $(2,6)$. Determine inequality signs for region $R$.<br>(b) Find all vertices of region $R$, substitute coordinates into $8x-5y$ to determine the minimum value.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$L_1$ 的斜率 $=\\dfrac{6-3}{2-0}=\\dfrac{3}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$L_1$ 的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$y-3=\\dfrac{3}{2}(x-0)$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$3x-2y+6=0$ ......<sup>#</sup></div><div class="ms-mark">1A<sup>#</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$L_2$ 的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$y-6=\\dfrac{-2}{3}(x-2)$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2x+3y-22=0$ ......<sup>#</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不等式組為 $\\begin{cases}3x-2y+6\\ge 0\\\\2x+3y-22\\le 0\\\\y\\ge 0\\end{cases}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">留意 $R$ 的頂點為 $(-2,0)$、$(2,6)$ 及 $(11,0)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">當 $x=-2$ 及 $y=0$ 時，$8x-5y=-16$。 ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">當 $x=2$ 及 $y=6$ 時，$8x-5y=-14$。 ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">當 $x=11$ 及 $y=0$ 時，$8x-5y=88$。 ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$8x-5y$ 的最小值為 $-16$。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q17",
        year: 2021,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences", "Exponential Functions and Logarithm Functions", "Quadratic Inequalities in One Unknown"],
        difficulty: 2,
        content: {
            tc: `設 $\\mathrm{A}(n)$ 為一等差數列的第 $n$ 項。 已知 $\\mathrm{A}(5)=26$ 及 $\\mathrm{A}(12)=61$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{A}(1)$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定對任意正整數 $n$， $\\log_{2}\\mathrm{G}(n)=\\mathrm{A}(n)$。 求 $k$ 的最大值使得 $\\log_{8}(\\mathrm{G}(1)\\mathrm{G}(2)\\mathrm{G}(3)\\cdots \\mathrm{G}(k))<999$。<span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Let $\\mathrm{A}(n)$ be the $n$th term of an arithmetic sequence. It is given that $\\mathrm{A}(5)=26$ and $\\mathrm{A}(12)=61$.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Find $\\mathrm{A}(1)$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Suppose that $\\log_{2}\\mathrm{G}(n)=\\mathrm{A}(n)$ for any positive integer $n$. Find the greatest value of $k$ such that $\\log_{8}(\\mathrm{G}(1)\\mathrm{G}(2)\\mathrm{G}(3)\\cdots \\mathrm{G}(k))<999$.<span class="marks">(5 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 利用等差數列通項公式 $A(n) = a_1 + (n-1)d$ 列聯立方程求出首項 $A(1)$ 與公差 $d$。<br>(b) 將對數不等式化簡：由性質可知 $G(n) = 2^{A(n)}$。利用對數換底公式與性質將 $\\log_{8}(\\prod G(i))$ 化為以 2 為底的式子，展開成關於 $A(n)$ 的等差數列求和公式，最後解關於 $k$ 的二次不等式。`,
            en: `(a) Use arithmetic sequence formula $A(n) = a_1 + (n-1)d$ to set up simultaneous equations to find $A(1)$ and $d$.<br>(b) Express $G(n) = 2^{A(n)}$. Use change of base formula to convert $\\log_8$ to base 2, rewrite product inside logarithm as sum of arithmetic sequence $A(n)$, then solve quadratic inequality in $k$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $d$ 為該等差數列的公差。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $\\mathrm{A}(1)+4d=26$  及  $\\mathrm{A}(1)+11d=61$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $d=5$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{A}(1)=6$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\log_8(\\mathrm{G}(1)\\mathrm{G}(2)\\mathrm{G}(3)\\cdots\\mathrm{G}(k))&lt;999$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{\\log_2(\\mathrm{G}(1)\\mathrm{G}(2)\\mathrm{G}(3)\\cdots\\mathrm{G}(k))}{\\log_2 8}&lt;999$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\log_2(\\mathrm{G}(1)\\mathrm{G}(2)\\mathrm{G}(3)\\cdots\\mathrm{G}(k))&lt;2\\,997$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\log_2\\mathrm{G}(1)+\\log_2\\mathrm{G}(2)+\\cdots+\\log_2\\mathrm{G}(k)&lt;2\\,997$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\mathrm{A}(1)+\\mathrm{A}(2)+\\mathrm{A}(3)+\\cdots+\\mathrm{A}(k)&lt;2\\,997$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{k}{2}(2(6)+(k-1)(5))&lt;2\\,997$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$5k^2+7k-5994&lt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{-7-7\\sqrt{7^2-4(5)(-5\\,994)}}{2(5)} < k < \\dfrac{-7+7\\sqrt{7^2-4(5)(-5\\,994)}}{2(5)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-35.33076667&lt;k&lt;33.93076667$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$k$ 的最大值為 33。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q18",
        year: 2021,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Trigonometry (3D)"],
        difficulty: 3,
        content: {
            tc: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">金屬薄片 $ABCD$ 的形狀為一梯形，其中 $AD // BC$。 已知 $AB = 45\\text{ cm}$ 、 $\\angle ADC=70^\\circ$ 及 $\\angle BAD=50^\\circ$。 求 $CD$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">現給定 (a) 中所描述的金屬片 $ABCD$。 設 $E$ 為 $AD$ 上的一點使得 $BE$ 垂直於 $AD$。 將該金屬片沿 $BE$ 摺起使得 $AE$ 垂直於平面 $BCDE$。 將三塊三角形金屬薄片放置在這已摺起的金屬片成一角錐體（見下圖）。 得知 $BC=40\\text{ cm}$。</div></div><img src="img/2021dsep1q18b.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $\\angle CAD$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">平面 $ACD$ 與平面 $BCDE$ 間的交角是否超過 $30^\\circ$？ 試解釋你的答案。<br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
            en: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">A thin metal sheet $ABCD$ is in the shape of a trapezium, where $AD // BC$. It is given that $AB = 45\\text{ cm}$, $\\angle ADC=70^\\circ$ and $\\angle BAD=50^\\circ$. Find $CD$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">The metal sheet $ABCD$ described in (a) is now given. Let $E$ be a point lying on $AD$ such that $BE$ is perpendicular to $AD$. The metal sheet is folded along $BE$ such that $AE$ is perpendicular to the plane $BCDE$. Three thin triangular metal sheets are placed to this folded metal sheet to form a pyramid (see the figure). It is found that $BC=40\\text{ cm}$.</div></div><img src="img/2021dsep1q18b.jpg" class="q-img" alt="Figure 2" style="max-width: 60%;"><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Find $\\angle CAD$.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Does the angle between the plane $ACD$ and the plane $BCDE$ exceed $30^\\circ$? Explain your answer.<br><span class="marks">(5 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `<a href="https://www.geogebra.org/m/hc7njvxh" target="_blank">Geogebra 動態模型</a><br>(a) 自 $B$ 和 $C$ 作垂直於 $AD$ 的高，利用兩平行線間的高相等，結合直角三角比建立關係求 $CD$（或從 $B$ 作一條平行於 $CD$ 的輔助線利用正弦定理）。<br>(b)(i) 摺起後，在直角 $\\triangle AEB$ 中求出 $AE$ 與 $EE'$ 的空間坐標或投影長度，在 $\\triangle CAD$ 中應用餘弦定理。<br>(b)(ii) 找出兩平面交角的幾何構造，利用三垂線定理作垂線，求出交角的正切或正弦值與 $30^{\\circ}$ 作比較。`,
            en: `<a href="https://www.geogebra.org/m/hc7njvxh" target="_blank">Geogebra 3D Model</a><br>(a) Construct height perpendicular to $AD$ or line parallel to $CD$ through $B$, use sine formula to solve for $CD$.<br>(b)(i) Calculate lengths $AE, DE, AD$ and $AC$ in the 3D figure, apply cosine formula in $\\triangle CAD$ to find $\\angle CAD$.<br>(b)(ii) Construct perpendicular line from $A$ to $CD$, find angle between plane $ACD$ and $BCDE$, and compare with $30^\\circ$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $P$ 為 $AD$ 上的一點，使得 $AB // PC$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">藉正弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{CD}{\\sin\\angle CPD}=\\dfrac{CP}{\\sin\\angle CDP}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{CD}{\\sin 50^\\circ}=\\dfrac{45}{\\sin 70^\\circ}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CD\\approx 36.6843361\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CD\\approx 36.7\\text{ cm}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$AE=AB\\cos\\angle BAE=45\\cos 50^\\circ\\approx 28.92544244\\text{ cm}$<br>$DE=BC+CD\\cos\\angle CDE\\approx 40+36.6843361\\cos 70^\\circ\\approx 52.54678189\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    $AD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\sqrt{AE^2+DE^2}$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx 59.98204321\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\angle ABC=90^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $AC$<br>$\\sqrt{AB^2+BC^2}$ ......<sup>@</sup><br>$\\approx 60.20797289\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">藉餘弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\cos\\angle CAD=\\dfrac{AC^2+AD^2-CD^2}{2(AC)(AD)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle CAD\\approx 35.54210789^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle CAD\\approx 35.5^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">設 $Q$ 為由 $A$ 至 $CD$ 的垂足。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">平面 $ACD$ 與平面 $BCDE$ 的夾角為 $\\angle AQE$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{(AQ)(CD)}{2}=\\dfrac{(AC)(AD)\\sin\\angle CAD}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AQ\\approx 57.22631076\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sin\\angle AQE=\\dfrac{AE}{AQ}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle AQE\\approx 30.36169732^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $\\angle AQE&gt;30^\\circ$，平面 $ACD$ 與平面 $BCDE$ 的夾角超過 $30^\\circ$。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2021-DSE-MATH-CP1-Q19",
        year: 2021,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines", "Equations of Circles", "Coordinate Geometry", "Functions and Graphs"],
        difficulty: 3,
        content: {
            tc: `設 $\\mathrm{f}(x) = x^2-12kx-14x+36k^2+89k+53$，其中 $k$ 為一正常數。 在同一直角坐標系中，將 $y=\\mathrm{f}(x)$ 的圖像的頂點及 $y=\\mathrm{f}(14-x)$ 的圖像的頂點分別記為 $Q$ 及 $R$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">利用配方法，以 $k$ 表 $Q$ 的坐標。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出 $R$ 的坐標，答案以 $k$ 表示。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">點 $S$ 的坐標為 $(7, 4-3k)$。 將 $\\triangle QRS$ 的內切圓記為 $C$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">以 $k$ 表通過 $Q$ 及 $S$ 的直線的方程。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">以 $k$ 表 $C$ 的方程。</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">假定 $QS$ 為 $C$ 在點 $T$ 的切線。 設 $U$ 為 $C$ 的圓心。已知點 $V$ 的坐標為 $(-29, -14)$。 $STUV$ 有沒有可能為一長方形？ 試解釋你的答案。<br><span class="marks">(9分)</span><div class="q-clearfix"></div></div></div>`,
            en: `Let $\\mathrm{f}(x) = x^2-12kx-14x+36k^2+89k+53$, where $k$ is a positive constant. On the same rectangular coordinate system, denote the vertex of the graph of $y=\\mathrm{f}(x)$ and the vertex of the graph of $y=\\mathrm{f}(14-x)$ by $Q$ and $R$ respectively.<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">Using the method of completing the square, express, in terms of $k$, the coordinates of $Q$.<span class="marks">(2 marks)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">Write down, in terms of $k$, the coordinates of $R$.<span class="marks">(1 mark)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">The coordinates of the point $S$ are $(7, 4-3k)$. Denote the inscribed circle of $\\triangle QRS$ by $C$.</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">Express, in terms of $k$, the equation of the straight line which passes through $Q$ and $S$.</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">Express, in terms of $k$, the equation of $C$.</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">Suppose that $QS$ is the tangent to $C$ at the point $T$. Let $U$ be the centre of $C$. It is given that the coordinates of the point $V$ are $(-29, -14)$. Is it possible that $STUV$ is a rectangle? Explain your answer.<br><span class="marks">(9 marks)</span><div class="q-clearfix"></div></div></div>`
        },
        hint: {
            tc: `(a) 將 $f(x)$ 按 $x$ 的項重組為 $x^2 - 2(6k+7)x + \\cdots$，再進行配平方求出頂點式。<br>(b) $f(14-x)$ 是將圖像沿 $x=7$ 進行反射對稱變換，利用中點公式求出新的頂點 $R$。<br>(c)(i) 利用兩點式求直線 $QS$ 的方程。<br>(c)(ii) 藉由 $\\triangle QRS$ 的對稱性（$S$ 點與 $Q, R$ 形成等腰三角形），求出內心 $V$ 的坐標與內切圓半徑，寫出圓方程。<br>(c)(iii) 若 $STUV$ 為長方形，由於 $VT \\perp QS$（切線性質）， $ST$ 必須垂直於 $VT$，且 $UV \\perp ST$。<br>計算各點間斜率或向量，驗證垂直與長度條件在 $k>0$ 時是否成立。`,
            en: `(a) Group terms in $f(x)$ as $x^2 - 2(6k+7)x + \\cdots$ and complete the square to find the vertex $Q$.<br>(b) $f(14-x)$ is a reflection of $f(x)$ along $x=7$, obtain $R$ using symmetry.<br>(c)(i) Use two-point form to find equation of line $QS$.<br>(c)(ii) By symmetry of $\\triangle QRS$, find incenter $U$ and radius $r$, then write equation of circle $C$.<br>(c)(iii) Check conditions for $STUV$ being a rectangle by verifying perpendicular slopes and equal opposite side lengths for $k > 0$.`
        },
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $\\mathrm{f}(x)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=x^2-12kx-14x+36k^2+89k+53$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=x^2-2(6k+7)x+(6k+7)^2-(6k+7)^2+36k^2+89k+53$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(x-6k-7)^2+5k+4$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$Q$ 的坐標為 $(6k+7,5k+4)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$(7-6k,5k+4)$</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">通過 $Q$ 及 $S$ 的直線的斜率 $=\\dfrac{5k+4-(4-3k)}{6k+7-7}=\\dfrac{4}{3}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所求的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{y-(4-3k)}{x-7}=\\dfrac{4}{3}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$4x-3y-9k-16=0$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">設 $r$ 為 $C$ 的半徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $QS=RS$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，$C$ 的圓心坐標為 $(7,5k+4-r)$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$C$ 的方程為 $(x-7)^2+(y-5k-4+r)^2=r^2$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">把 $y=\\dfrac{4x-16}{3}-3k$ 代入 $(x-7)^2+(y-5k-4+r)^2=r^2$ ，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">可得 $(x-7)^2+\\left(\\dfrac{4x-16}{3}-3k-5k-4+r\\right)^2=r^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$25x^2+(24r-192k-350)x+576k^2-144kr+1344k-168r+1225=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $QS$ 為 $C$ 的切線，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$(24r-192k-350)^2-4(25)(576k^2-144kr+1344k-168r+1225)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">化簡後，可得 $r^2+9kr-36k^2=0$ 。<br>故此，可得  $r=3k$  或  $r=-12k$ (捨去)。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由此， $C$ 的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$(x-7)^2+(y-5k-4+3k)^2=(3k)^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$(x-7)^2+(y-2k-4)^2=9k^2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(iii)</div><div class="ms-content ms-from-l3">對於 $ST // VU$，可得 $UV$ 的斜率等於 $QS$ 的斜率。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，可得 $\\dfrac{-14-(2k+4)}{-29-7}=\\dfrac{4}{3}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解後，可得 $k=15$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$S$ 及 $U$ 的坐標分別為 $(7,-41)$ 及 $(7,34)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$SV$ 的斜率 $=\\dfrac{-14+41}{-29-7}=-\\dfrac{3}{4}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，$QS$ 的斜率與 $SV$ 的斜率之積為 $-1$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$ST\\perp SV$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $ST\\perp TU$，可得 $SV // TU$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">當 $k=15$ 時，可得  $ST // VU$ 、 $SV // TU$  及  $ST\\perp TU$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$STUV$ 有可能為長方形。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解：</span><br>留意 $T$ 位於 $QS$ 上且  $QR=12k=2QT$ 。<br>由此，可得 $QT=6k$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">設 $\\left(t, \\frac{4t-16}{3}-3k\\right)$ 為 $T$ 的坐標。<br>$(t-6k-7)^2+\\left(\\dfrac{4t-16}{3}-3k-5k-4\\right)^2=(6k)^2$<br>$25(t-7)^2-300k(t-7)+576k^2=0$<br>$t=\\dfrac{12k}{5}+7$  或  $t=\\dfrac{48k}{5}+7$ (捨去)<br>故此， $T$ 的坐標為 $\\left(\\dfrac{12k}{5}+7, \\dfrac{k}{5}+4\\right)$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">對 $ST=UV$ ，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\left(\\dfrac{12k}{5}+7-7\\right)^2+\\left(\\dfrac{k}{5}+4+3k-4\\right)^2=(7+29)^2+(2k+4+14)^2$</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">化簡後，可得 $12k^2-72k-1620=0$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解後，可得  $k=15$  或  $k=-9$ (捨去)。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">$S$ 、 $T$ 及 $U$ 的坐標分別為 $(7,-41)$ 、 $(43,7)$ 及 $(7,34)$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">$SV^2=(7+29)^2+(-14+41)^2=2\\,025$<br>$TU^2=(7+29)^2+(34-7)^2=2\\,025$<br>由此，可得 $SV=TU$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">另留意 $ST \\perp TU$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">當 $k=15$ 時，可得  $ST=UV$ 、 $SV=TU$  及  $ST \\perp TU$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此， $STUV$ 有可能是長方形。</div><div class="ms-mark">1A</div></div></div>`
    }
);
