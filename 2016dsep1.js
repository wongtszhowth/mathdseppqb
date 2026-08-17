// 2016dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2016-DSE-MATH-CP1-Q01",
        year: 2016,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `化簡 $\\dfrac{(x^8 y^7)^2}{x^3 y^{-6}}$，並以正指數表示答案。 <span class="marks">(3分)</span>`,
        hint: `先展開分子指數，再應用指數定律。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{(x^8 y^7)^2}{x^5 y^{-6}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x^{16} y^{14}}{x^5 y^{-6}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=x^{16-5} y^{14-(-6)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=x^{11} y^{20}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q02",
        year: 2016,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `令 $x$ 成為公式 $Ax = (4x + B)C$ 的主項。 <span class="marks">(3分)</span>`,
        hint: `展開後將含 $x$ 的項移到一邊求解。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$Ax=(4x+B)C$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$Ax=4Cx+BC$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$Ax-4Cx=BC$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$(A-4C)x=BC$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=\\dfrac{BC}{A-4C}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>$Ax=(4x+B)C$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{A}{C}x=4x+B$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{A}{C}x-4x=B$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\left(\\dfrac{A}{C}-4\\right)x=B$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\left(\\dfrac{A-4C}{C}\\right)x=B$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=\\dfrac{BC}{A-4C}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q03",
        year: 2016,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 1,
        content: `化簡 $\\dfrac{2}{4x-5} + \\dfrac{3}{1-6x}$。 <span class="marks">(3分)</span>`,
        hint: `通分後合併。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{2}{4x-5}+\\dfrac{3}{1-6x}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{2(1-6x)+3(4x-5)}{(4x-5)(1-6x)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{2-12x+12x-15}{(4x-5)(1-6x)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{-13}{(4x-5)(1-6x)}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{13}{(4x-5)(6x-1)}$</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q04",
        year: 2016,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$5m - 10n$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$m^2 + mn - 6n^2$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">$m^2 + mn - 6n^2 - 5m + 10n$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 提取公因式。 <br>(b) 十字相乘。 <br>(c) 分組或利用前兩部分。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $5m-10n$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=5(m-2n)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $m^2+mn-6n^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(m+3n)(m-2n)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">    $m^2+mn-6n^2-5m+10n$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=m^2+mn-6n^2-(5m-10n)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(m+3n)(m-2n)-5(m-2n)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(m-2n)(m+3n-5)$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q05",
        year: 2016,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `某遊樂會有 $180$ 名會員且男會員人數較女會員人數多 $40\\%$。 求男會員人數與女會員人數之差。 <span class="marks">(4分)</span>`,
        hint: `設女會員為 $x$，男會員為 $1.4x$，列出方程求解。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $x$ 及 $y$ 分別為男會員人數及女會員人數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\begin{cases}x+y=180\\\\x=(1+40\\%)y\\end{cases}$</div><div class="ms-mark">1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得 $1.4y+y=180$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">求解後，可得  $y=75$  及  $x=105$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，男會員人數與女會員人數之差為 30。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 1：</span><br>設 $x$ 為男會員人數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=(1+40\\%)(180-x)$</div><div class="ms-mark">1A+1A+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">求解後，可得 $x=105$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">留意 $105-(180-105)=30$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，男會員人數與女會員人數之差為 30。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 2：</span><br>    男會員人數與女會員人數之差</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{(180)(40\\%)}{100\\%+(100\\%+40\\%)}$</div><div class="ms-mark">1A+1A+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=30$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 3：</span><br>設 $d$ 為男會員人數與女會員人數之差。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{180+d}{2}=\\dfrac{180-d}{2}(1+40\\%)$</div><div class="ms-mark">1A+1A+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$d=30$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，男會員人數與女會員人數之差為 30。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q06",
        year: 2016,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: `考慮複合不等式<div style="text-align: center;">$x+6 < 6(x+11)$  或  $x \\le -5$  ...............(*)</div><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">解 (*)。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出滿足 (*) 的最大負整數。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 分別解兩個不等式後取聯集。 <br>(b) 從範圍中取最大負整數。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$x+6&lt;6(x+11)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x+6&lt;6x+66$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x-6x&lt;66-6$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-5x&lt;60$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x&gt;-12$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，可得  $x&gt;-12$  或  $x\\le -5$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，(*) 的解為所有實數。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$-1$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q07",
        year: 2016,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Perimeters and Areas"],
        difficulty: 1,
        content: `<div style="color: red;">在某極坐標系中，$O$ 為極點。 點 $A$ 及點 $B$ 的極坐標分別為 $(12, 75^\\circ)$ 及 $(12, 135^\\circ)$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\angle AOB$。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $\\Delta AOB$ 的周界。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">寫出 $\\Delta AOB$ 的旋轉對稱的折式數目。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div></div>`,
        hint: `(a) 極角差。 <br>(b) 用餘弦公式求 $AB$ 後加兩半徑。 <br>(c) 等腰三角形的旋轉對稱。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $\\angle AOB$<br>$=135^\\circ-75^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=60^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">由於 $AO=BO$，可得 $\\angle OAB=\\angle OBA$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $\\angle OAB+\\angle OBA+60^\\circ=180^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，可得 $\\angle OAB=\\angle OBA=60^\\circ$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$\\Delta AOB$ 為一等邊三角形。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\Delta AOB$ 的周界<br>$=3(12)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=36$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">3</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q08",
        year: 2016,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: `已知 $\\mathrm{f}(x)$ 為兩部分之和，一部分隨 $x$ 正變，而另一部分隨 $x^2$ 正變。 假定 $\\mathrm{f}(3)=48$ 及 $\\mathrm{f}(9)=198$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{f}(x)$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">解方程 $\\mathrm{f}(x)=90$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $f(x)=Ax + Bx^2$，代入求係數。 <br>(b) 解二次方程。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{f}(x)=hx+kx^2$，其中 $h$ 及 $k$ 均為非零的常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $3h+9k=48$  及  $9h+81k=198$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $h=13$  及  $k=1$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{f}(x)=13x+x^2$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{f}(x)=90$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$13x+x^2=90$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x^2+13x-90=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(x-5)(x+18)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=5$  或  $x=-18$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q09",
        year: 2016,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Probability"],
        difficulty: 1,
        content: `下面的頻數分佈表及累積頻數分佈表均顯示某花園內植物的高度的分佈。<div class="q-text-content"><table class="q-table" style="float: left; margin-top: 12px; margin-bottom: 12px; margin-left: 3em; margin-right: auto; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 8em;">
      <col style="width: 4em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">高度 (m)</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">頻數</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">0.1 – 0.3</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$a$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">0.4 – 0.6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">0.7 – 0.9</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$b$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1.0 – 1.2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$c$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1.3 – 1.5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">15</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1.6 – 1.8</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
    </tr></table><table class="q-table" style="float: right; margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: 3em; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 10em;">
      <col style="width: 6em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">高度少於 (m)</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">累積頻數</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">0.35</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">0.65</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$x$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">0.95</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">13</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1.25</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$y$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1.55</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">37</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1.85</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$z$</td>
    </tr></table></div>
    <div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $x$、$y$ 及 $z$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若從該花園中隨機選取一植物，求所選取的植物的高度少於 $1.25\\text{ m}$ 但不少於 $0.65\\text{ m}$ 的概率。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 由累積頻數關係求未知數。 <br>(b) 計算對應頻數比例。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $x$<br>$=2+4$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=6$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $y$<br>$=37-15$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=22$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $z$<br>$=37+3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=40$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{22-6}{40}$<br>$=\\dfrac{2}{5}$</div><div class="ms-mark">1M<br>1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解 1：</span><br>留意  $b=7$  及  $c=9$ 。<br>    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{7+9}{40}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{2}{5}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解 2：</span><br>留意  $a=2$ 。<br>    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{40-2-4-15-3}{40}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{2}{5}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q10",
        year: 2016,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Loci", "Equations of Circles"],
        difficulty: 2,
        content: `點 $A$ 及點 $B$ 的坐標分別為 $(5, 7)$ 及 $(13, 1)$。 設 $P$ 為直角坐標平面上的一動點使得 $P$ 與 $A$ 及 $B$ 等距。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathit{\\Gamma}$ 的方程。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$\\mathit{\\Gamma}$ 與 $x$ 軸及 $y$ 軸分別相交於 $H$ 及 $K$。 將原點記為 $O$。 設 $C$ 為通過 $O$、$H$ 及 $K$ 的圓。 某人宣稱 $C$ 的圓周超過 $30$。 該宣稱是否正確？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 垂直平分線方程。 <br>(b) 求截距後求圓半徑比較。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $(x,y)$ 為 $P$ 的坐標。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\sqrt{(x-5)^2+(y-7)^2}=\\sqrt{(x-13)^2+(y-1)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$4x-3y-24=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$\\mathit{\\Gamma}$ 的方程為 $4x-3y-24=0$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>$AB$ 的斜率 $=\\dfrac{7-1}{5-13}=-\\dfrac{3}{4}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\mathit{\\Gamma}$ 的斜率 $=\\dfrac{4}{3}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AB$ 的中點 $=\\left(\\dfrac{5+13}{2},\\dfrac{7+1}{2}\\right)=(9,4)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，$\\mathit{\\Gamma}$ 的方程為 $y-4=\\dfrac{4}{3}(x-9)$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$\\mathit{\\Gamma}$ 的方程為 $4x-3y-24=0$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">把 $y=0$ 代入 $4x-3y-24=0$，可得 $x=6$。 ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$H$ 的坐標為 $(6,0)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">把 $x=0$ 代入 $4x-3y-24=0$，可得 $y=-8$。 ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，$K$ 的坐標為 $(0,-8)$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$C$ 的直徑 $=HK=\\sqrt{(6-0)^2+(0-(-8))^2}=10$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$C$ 的圓周</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=10\\pi$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 31.41592654$<br>$&gt;30$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該宣稱正確。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q11",
        year: 2016,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `某倒置直立圓錐形的容器載有一些牛奶。 將該容器鉛垂放置。 該容器內牛奶的深度為 $12\\text{ cm}$。 <u>文俊</u>隨後將 $444\\pi\\text{ cm}^3$ 的牛奶倒入該容器內，而牛奶沒有溢出。 他現知該容器內牛奶的深度為 $16\\text{ cm}$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">以 $\\pi$ 表該容器內牛奶的最終體積。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content"><u>文俊</u>宣稱該容器被浸濕的曲面的最終面積至少為 $800\\text{ cm}^2$。 你是否同意？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用相似比求最終體積。 <br>(b) 求斜高後計算曲面面積比較。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $V\\text{ cm}^3$ 為該容器內牛奶的最終體積。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{V-444\\pi}{V}=\\left(\\dfrac{12}{16}\\right)^3$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$V=768\\pi$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該容器內牛奶的最終體積為 $768\\pi\\text{ cm}^3$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>設 $V\\text{ cm}^3$ 及 $r\\text{ cm}$ 分別為該容器內牛奶的最終體積及牛奶表面的最終半徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$V=\\dfrac{1}{3}\\pi r^2(16)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$V-444\\pi=\\dfrac{1}{3}\\pi\\left(\\dfrac{12r}{16}\\right)^2(12)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $V-444\\pi=\\dfrac{1}{3}\\pi\\left(\\dfrac{12}{16}\\right)^2\\left(\\dfrac{3V}{16\\pi}\\right)(12)$。</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $V=768\\pi$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該容器內牛奶的最終體積為 $768\\pi\\text{ cm}^3$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $r\\text{ cm}$ 為該容器內牛奶表面的最終半徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{1}{3}\\pi r^2(16)=768\\pi$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$r=12$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    該容器被浸濕的曲面的最終面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(12)\\sqrt{12^2+16^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=240\\pi$<br>$\\approx 753.9822369\\text{ cm}^2$<br>$&lt;800\\text{ cm}^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q12",
        year: 2016,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 2,
        content: `下面的棒型圖顯示一群小童的年歲的分佈，其中 $a > 11$ 及 $4 < b < 10$。 該群小童的年歲的中位數為 $7.5$。<img src="img/2016dsep1q12zh.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $a$ 及 $b$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">現再有四名小童加入該群。 得知該四名小童的年歲全不相同且該群小童的年歲的分佈域維持不變。 求</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">該群小童的年歲的最大可取中位數，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">該群小童的年歲的最小可取平均值。 <br><span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 由中位數位置求 $a$、$b$。 <br>(b) 考慮加入後中位數與平均值的極值。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$11+a=11+b+4$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$a=b+4$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意  $a&gt;11$  及  $4&lt;b&lt;10$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得  $\\begin{cases}a=12\\\\b=8\\end{cases}$  或  $\\begin{cases}a=13\\\\b=9\\end{cases}$ 。</div><div class="ms-mark">1A+1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">當這四名小童的年歲為 7、8、9 及 10 時，中位數最大。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">該群小童的年歲的最大可取中位數 $=8$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">當這四名小童的年歲為 6、7、8 及 9 時，平均值最小。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉 (a)，有兩個情況。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">情況 1：\t$a=12$  及  $b=8$<br>\t\t\t    該群小童的年歲的平均值<br>\t\t\t$=\\dfrac{12(6)+13(7)+12(8)+9(9)+4(10)}{12+13+12+9+4}$<br>\t\t\t$=7.6$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">情況 2：\t$a=13$  及  $b=9$<br>\t\t\t    該群小童的年歲的平均值<br>\t\t\t$=\\dfrac{12(6)+14(7)+12(8)+10(9)+4(10)}{12+14+12+10+4}$<br>\t\t\t$\\approx 7.615384615$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">因此，該群小童的年歲的最小可取平均值為 7.6。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q13",
        year: 2016,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: `圖中，$ABC$ 為三角形。 $D$、$E$ 及 $M$ 均為 $BC$ 上的點使得 $BD=CE$、$\\angle ADC=\\angle AEB$ 及 $DM=EM$。 <img src="img/2016dsep1q13.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ACD \\cong \\Delta ABE$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $AD = 15\\text{ cm}$ 、 $BD = 7\\text{ cm}$ 及 $DE = 18\\text{ cm}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $AM$。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$\\Delta ABE$ 是否一直角三角形？ 試解釋你的答案。 <br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用等長及角相等證明全等。 <br>(b) 用全等及畢氏定理檢查。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">在 $\\Delta ACD$ 及 $\\Delta ABE$ 中，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle ADC=\\angle AEB$\t\t[已知]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AD=AE$\t\t\t\t[等角對邊相等]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CE=BD$\t\t\t[已知]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CE+DE=BD+DE$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CD=BE$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\Delta ACD\\cong\\Delta ABE$\t\t(SAS)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">留意  $DM=EM=9\\text{ cm}$  及  $\\angle AMD=\\angle AME=90^\\circ$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $AM$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\sqrt{AD^2-DM^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\sqrt{15^2-9^2}$<br>$=\\sqrt{144}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=12\\text{ cm}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">    $AB^2$<br>$=AM^2+BM^2$<br>$=144+(7+9)^2$<br>$=400$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉 (a)，可得 $AE=AD=15\\text{ cm}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $AB^2+AE^2$<br>$=400+15^2$<br>$=625$<br>$=(7+18)^2$<br>$=(BD+DE)^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=BE^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$\\Delta ABE$ 是一直角三角形。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q14",
        year: 2016,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: `設 $\\mathrm{p}(x) = 6x^4 + 7x^3 + ax^2 + bx + c$，其中 $a$、$b$ 及 $c$ 均為常數。 當 $\\mathrm{p}(x)$ 除以 $x+2$ 時及當 $\\mathrm{p}(x)$ 除以 $x-2$ 時，所得的兩餘數相等。 已知 $\\mathrm{p}(x) \\equiv (lx^2 + 5x + 8)(2x^2 + mx + n)$，其中 $l$、$m$ 及 $n$ 均為常數。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $l$、$m$ 及 $n$。 <span class="marks">(5分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">方程 $\\mathrm{p}(x) = 0$ 有多少個實根？ 試解釋你的答案。 <span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用餘數相等及比較係數求參數。 <br>(b) 因式分解後判斷實根數目。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">留意  $\\mathrm{p}(2)=152+4a+2b+c$  及  $\\mathrm{p}(-2)=40+4a-2b+c$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $\\mathrm{p}(2)=\\mathrm{p}(-2)$，可得 $b=-28$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">藉比較 $x^4$ 的係數，可得 $l=3$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意在 $(3x^2+5x+8)(2x^2+mx+n)$ 的展開式中 $x^3$ 及 $x$ 的係數分別為  $3m+10$  及  $8m+5n$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $3m+10=7$  及  $8m+5n=-28$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $m=-1$  及  $n=-4$ 。</div><div class="ms-mark">1A+1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{p}(x)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(3x^2+5x+8)(2x^2-x-4)=0$ （藉 (a)）</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$3x^2+5x+8=0$  或  $2x^2-x-4=0$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $5^2-4(3)(8)$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=-71$ ......<sup>#</sup></div><div class="ms-mark">1A<sup>#</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$&lt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，二次方程 $3x^2+5x+8=0$ 沒有實根。 ......<sup>^</sup></div><div class="ms-mark">1M+1A<sup>^</sup></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $(-1)^2-4(2)(-4)$ ......<sup>@</sup><br>$=33$ ......<sup>#</sup><br>$&gt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，二次方程 $2x^2-x-4=0$ 有 2 個實根。 ......<sup>^</sup></div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">由此，方程 $(3x^2+5x+8)(2x^2-x-4)=0$ 有 2 個實根。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，方程 $\\mathrm{p}(x)=0$ 有 2 個實根。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q15",
        year: 2016,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations", "Probability"],
        difficulty: 1,
        content: `若 $4$ 名男生與 $5$ 名女生隨機排成一隊，求沒有男生在該隊中相鄰而排的概率。 <span class="marks">(3分)</span>`,
        hint: `先排女生再插入男生位置。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{C_4^6~4!~5!}{(4+5)!}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{43\\,200}{362\\,880}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{5}{42}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 1：</span><br>    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{4!5!+4!5!(4)(2)+4!5!(3)+4!5!(3)}{(4+5)!}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{43\\,200}{362\\,880}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{5}{42}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 2：</span><br>    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\left(\\dfrac{4}{4}\\right)\\left(\\dfrac{3}{3}\\right)\\left(\\dfrac{2}{2}\\right)\\left(\\dfrac{1}{1}\\right)\\left(\\dfrac{5}{9}\\right)\\left(\\dfrac{4}{8}\\right)\\left(\\dfrac{3}{7}\\right)\\left(\\dfrac{2}{6}\\right)\\left(\\dfrac{1}{5}\\right)(1+(4)(2)+3+3)$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{43\\,200}{362\\,880}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{5}{42}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q16",
        year: 2016,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score", "Measures of Dispersion"],
        difficulty: 2,
        content: `某測驗中，一班學生得分的分佈的平均值為 $61$ 分。 <u>偉健</u>及<u>小麗</u>的標準分分別為 $-2.6$ 及 $1.4$。 <u>偉健</u>得 $22$ 分。 某學生宣稱該分佈的分佈域至多為 $59$ 分。 該宣稱是否正確？ 試解釋你的答案。 <span class="marks">(3分)</span>`,
        hint: `由標準分求標準差，再估計分佈域。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $\\sigma$ 分為該分佈的標準差。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{22-61}{\\sigma}=-2.6$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\sigma=15$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    <u>小麗</u>的得分<br>$=61+1.4\\sigma$ ......<sup>@</sup><br>$=61+1.4(15)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=82$ 分</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    <u>小麗</u>的得分與<u>偉健</u>的得分之差<br>$=82-22$<br>$=60$ 分<br>$&gt;59$ 分</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">留意該分佈的分佈域至少為<u>小麗</u>的得分與<u>偉健</u>的得分之差。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">所以，該分佈的分佈域超過 59 分。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q17",
        year: 2016,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `某等差數列的第 $1$ 項及第 $38$ 項分別為 $666$ 及 $555$。 求<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">該數列的公差，<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$n$ 的最大值使得該數列的首 $n$ 項之和為正值。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用通項公式求公差。 <br>(b) 求和公式後解不等式。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $d$ 為該數列的公差。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$555=666+(38-1)d$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$d=-3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>    該數列的公差</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{555-666}{38-1}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=-3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\dfrac{n}{2}\\bigl(2(666)+(n-1)(-3)\\bigr)&gt;0$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$1335n-3n^2&gt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n(n-445)&lt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$0&lt;n&lt;445$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$n$ 的最大值為 444。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q18",
        year: 2016,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 3,
        content: `設 $\\mathrm{f}(x) = -\\dfrac{1}{3}x^2 + 12x - 121$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">利用配方法，求 $y = \\mathrm{f}(x)$ 的圖像的頂點的坐標。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">藉將 $y = \\mathrm{f}(x)$ 的圖像垂直平移得出 $y = \\mathrm{g}(x)$ 的圖像。 若 $y = \\mathrm{g}(x)$ 的圖像與 $x$ 軸相切，求 $\\mathrm{g}(x)$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">在一變換下，$\\mathrm{f}(x)$ 變為 $-\\dfrac{1}{3}x^2 - 12x - 121$。 描述該變換的幾何意義。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 配方求頂點。 <br>(b) 垂直平移使判別式為 0。 <br>(c) 對 $y$ 軸反射。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $\\mathrm{f}(x)$<br>$=\\dfrac{-1}{3}x^2+12x-121$<br>$=\\dfrac{-1}{3}(x^2-36x)-121$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{-1}{3}(x^2-36x+18^2-18^2)-121$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=-\\dfrac{1}{3}(x-18)^2-13$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，頂點的坐標為 $(18,-13)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $\\mathrm{g}(x)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\mathrm{f}(x)+13$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{-1}{3}(x-18)^2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">留意 $\\dfrac{-1}{3}x^2-12x-121=\\mathrm{f}(-x)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該變換為對 $y$ 軸的反射。</div><div class="ms-mark">1A+1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>留意 $\\dfrac{-1}{3}x^2-12x-121=\\mathrm{f}(x+36)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該變換為向左平移 36 單位。</div><div class="ms-mark">1A+1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q19",
        year: 2016,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Trigonometry (3D)"],
        difficulty: 3,
        content: `圖中顯示一幾何模型 $ABCD$，其形狀為四面體。 已知 $\\angle BAD = 86^\\circ$、$\\angle CBD = 43^\\circ$、$AB = 10\\text{ cm}$ 、 $AC = 6\\text{ cm}$ 、 $BC = 8\\text{ cm}$ 及 $BD = 15\\text{ cm}$。<img src="img/2016dsep1q19.jpg" class="q-img" alt="題目附圖" style="max-width: 55%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\angle ABD$ 及 $CD$。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某工匠宣稱 $AB$ 與面 $BCD$ 間的交角為 $\\angle ABC$。 你是否同意？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用餘弦公式及正弦公式。 <br>(b) 檢查 $AB$ 是否垂直於交線。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">藉正弦公式，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{AB}{\\sin\\angle ADB}=\\dfrac{BD}{\\sin\\angle BAD}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{10}{\\sin\\angle ADB}=\\dfrac{15}{\\sin 86^\\circ}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle ADB\\approx 41.68560132^\\circ$  或  $\\angle ADB\\approx 138.31439878^\\circ$ (捨去)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle ABD=180^\\circ-\\angle BAD-\\angle ADB$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle ABD\\approx 52.31439868^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle ABD\\approx 52.3^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">藉餘弦公式，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CD^2=BC^2+BD^2-2(BC)(BD)\\cos\\angle CBD$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CD^2\\approx 8^2+15^2-2(8)(15)\\cos 43^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CD\\approx 10.65246974$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CD\\approx 10.7\\text{ cm}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">由於 $AC^2+BC^2=AB^2$，可得 $\\angle ACB=90^\\circ$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">藉餘弦公式，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AD^2=AB^2+BD^2-2(AB)(BD)\\cos\\angle ABD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AD^2\\approx 10^2+15^2-2(10)(15)\\cos 52.31439868^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AD\\approx 11.89964475$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">藉餘弦公式，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AD^2=AC^2+CD^2-2(AC)(CD)\\cos\\angle ACD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\cos\\angle ACD\\approx\\dfrac{6^2+(10.65246974)^2-(11.89964475)^2}{2(6)(10.65246974)}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle ACD\\approx 86.46867599^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$\\angle ACD$ 不是直角。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">由此，$AB$ 與面 $BCD$ 間的交角不是 $\\angle ABC$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>由於 $AC^2 + BC^2 = AB^2$ ，可得 $\\angle ACB = 90^\\circ$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">藉餘弦公式，<br>$AD^2 = AB^2 + BD^2 - 2(AB)(BD)\\cos \\angle ABD$<br>$AD^2 \\approx 10^2 + 15^2 - 2(10)(15)\\cos 52.31439868^\\circ$<br>$AD^2 \\approx 141.6015451$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$AC^2 + CD^2 \\approx 6^2 + (10.65246974)^2$<br>$AC^2 + CD^2 \\approx 149.4751116$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">由此，可得 $AD^2 \\neq AC^2 + CD^2$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此， $\\angle ACD$ 不是直角。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">由此，$AB$ 與面 $BCD$ 間的交角不是 $\\angle ABC$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2016-DSE-MATH-CP1-Q20",
        year: 2016,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)", "Equations of Circles", "Coordinate Geometry"],
        difficulty: 3,
        content: `$\\Delta OPQ$ 為一鈍角三角形。 將 $\\Delta OPQ$ 的內心及外心分別記為 $I$ 及 $J$。 已知 $P$、$I$ 與 $J$ 共線。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $OP = PQ$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">引入一直角坐標系使得 $O$ 及 $Q$ 的坐標分別為 $(0, 0)$ 及 $(40, 30)$，而 $P$ 的 $y$ 坐標為 $19$。 設 $C$ 為通過 $O$、$P$ 及 $Q$ 的圓。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $C$ 的方程。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">設 $L_1$ 及 $L_2$ 為 $C$ 的兩切線使得每一切線的斜率均為 $\\dfrac{3}{4}$ 且 $L_1$ 的 $y$ 截距較 $L_2$ 大。 $L_1$ 分別與 $x$ 軸及 $y$ 軸相交於 $S$ 及 $T$，而 $L_2$ 分別與 $x$ 軸及 $y$ 軸相交於 $U$ 及 $V$。 某人宣稱梯形 $STUV$ 的面積超過 $17\\,000$。 該宣稱是否正確？ 試解釋你的答案。 <br><span class="marks">(9分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用內心外心性質。 <br>(b) 求圓方程後求切線及梯形面積。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">留意 $J$ 為圓 $OPQ$ 的圓心。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle IPO=\\angle JPQ$\t[$A$ 內心]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">再者留意 $P$、$I$ 與 $J$ 共線。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle JPO=\\angle JPQ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$JO=JP$\t\t[半徑]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle JOP=\\angle JPO$\t[等腰 $\\Delta$ 底角]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$JP=JQ$\t\t[半徑]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle JPQ=\\angle JQP$\t[等腰 $\\Delta$ 底角]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle JOP=\\angle JQP$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$JP=JP$\t\t[公共邊]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\Delta JOP\\cong\\Delta JQP$\t(AAS)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $OP=PQ$。[全等 $\\Delta$ 的對應邊]</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有理由的任何正確證明。<br>情況 3\t附有一正確理由和一正確步驟之未完整的證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>3<br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">設 $(h,19)$ 為 $P$ 的坐標。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉 (a)，可得 $h^2+19^2=(40-h)^2+(30-19)^2$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解後，可得 $h=17$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">設 $x^2+y^2+Dx+Ey+F=0$ 為 $C$ 的方程。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $C$ 通過原點，可得 $F=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $17D+19E+650=0$ 及 $40D+30E+2500=0$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解後，可得 $D=-112$ 及 $E=66$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$C$ 的方程為 $x^2+y^2-112x+66y=0$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">留意 $L_1$ 的方程及 $L_2$ 的方程均為 $y=\\dfrac{3}{4}x+c$ 的形式，其中 $c$ 為一常數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">把 $y=\\dfrac{3}{4}x+c$ 代入 $x^2+y^2-112x+66y=0$，可得</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$x^2+\\left(\\dfrac{3}{4}x+c\\right)^2-112x+66\\left(\\dfrac{3}{4}x+c\\right)=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$25x^2+(24c-1000)x+16c^2+1056c=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $L_1$ 及 $L_2$ 均為 $C$ 的切線，可得</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$(24c-1000)^2-4(25)(16c^2+1056c)=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$16c^2+2400c-15625=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$(4c-25)(4c+625)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$c=\\dfrac{25}{4}$ 或 $c=-\\dfrac{625}{4}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所以，$L_1$ 的方程及 $L_2$ 的方程分別為 $y=\\dfrac{3}{4}x+\\dfrac{25}{4}$ 及 $y=\\dfrac{3}{4}x-\\dfrac{625}{4}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">梯形 $STUV$ 的面積<br>$=\\dfrac{1}{2}\\left(\\dfrac{625}{3}\\cdot\\dfrac{625}{4}+\\dfrac{625}{4}\\cdot\\dfrac{25}{3}+\\dfrac{25}{3}\\cdot\\dfrac{25}{4}+\\dfrac{25}{4}\\cdot\\dfrac{625}{3}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{105625}{6}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$&gt;17000$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，該宣稱正確。</div><div class="ms-mark">1A</div></div></div>`
    }
);
