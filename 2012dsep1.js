// 2012dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2012-DSE-MATH-CP1-Q01",
        year: 2012,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `化簡 $\\dfrac{m^{-12}n^8}{n^3}$，並以正指數表示答案。 <span class="marks">(3分)</span>`,
        hint: `應用指數定律簡化。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{m^{-12}n^8}{n^3}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{n^8}{m^{12}n^3}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{n^{8-3}}{m^{12}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{n^5}{m^{12}}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q02",
        year: 2012,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `令 $a$ 成為公式 $\\dfrac{3a+b}{8}=b-1$ 的主項。 <span class="marks">(3分)</span>`,
        hint: `交叉相乘後解出 $a$。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{3a+b}{8}=b-1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$3a+b=8(b-1)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$3a+b=8b-8$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$3a=7b-8$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$a=\\dfrac{7b-8}{3}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>$\\dfrac{3a+b}{8}=b-1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{3a}{8}+\\dfrac{b}{8}=b-1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{3a}{8}=b-\\dfrac{b}{8}-1$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{3a}{8}=\\dfrac{7b}{8}-1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$3a=8\\bigl(\\dfrac{7b}{8}-1\\bigr)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$3a=7b-8$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$a=\\dfrac{7b-8}{3}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q03",
        year: 2012,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$x^2 - 6xy + 9y^2$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$x^2 - 6xy + 9y^2 + 7x - 21y$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 完全平方。 <br>(b) 分組因式分解。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $x^2-6xy+9y^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(x-3y)^2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $x^2-6xy+9y^2+7x-21y$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(x-3y)^2+7x-21y$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(x-3y)^2+7(x-3y)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(x-3y)(x-3y+7)$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q04",
        year: 2012,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `<u>佩玲</u>的日薪較<u>志偉</u>高 $20\\%$，而<u>志偉</u>的日薪較<u>潔儀</u>低 $20\\%$。 已知<u>志偉</u>的日薪為 $\\$480$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求<u>佩玲</u>的日薪。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">誰的日薪最高？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) <u>志偉</u>日薪 $\\times 1.2$。 <br>(b) 比較三人日薪。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    <u>佩玲</u>的日薪</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=480(1+20\\%)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\$576$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $\\$x$ 為<u>潔儀</u>的日薪。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x(1-20\\%)=480$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=\\dfrac{480}{1-20\\%}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=600$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，<u>潔儀</u>的日薪最高。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $\\dfrac{1}{1-20\\%}&gt;1+20\\%$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，<u>潔儀</u>的日薪最高。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q05",
        year: 2012,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: `在設有 $6$ 個展區的展覽中心內有 $132$ 名保安員。 各個展區均有相同人數的保安員。 在每個展區內，女保安員均較男保安員多 $4$ 名。 求在該展覽中心內男保安員的人數。 <span class="marks">(4分)</span>`,
        hint: `設每展區男保安員為 $x$，列出方程。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $x$ 為在該展覽中心內男保安員的人數，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">則在該展覽中心內女保安員的人數為 $(x+24)$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x+(x+24)=132$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$2x=108$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=54$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，在該展覽中心內男保安員的人數為 54。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 1：</span><br>設 $x$ 及 $y$ 分別為在該展覽中心內男及女保安員的人數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得  $x+y=132$  及  $\\dfrac{y}{6}-\\dfrac{x}{6}=4$ 。</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">所以，可得 $x+(x+24)=132$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">求解後，可得 $x=54$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，在該展覽中心內男保安員的人數為 54。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 2：</span><br>在該展覽中心內男保安員的人數</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{132-(6)(4)}{2}$</div><div class="ms-mark">1M+1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{108}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=54$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q06",
        year: 2012,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求同時滿足  $\\dfrac{4x+6}{7} > 2(x-3)$  及  $2x-10 \\le 0$  的 $x$ 值的範圍。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">有多少個正整數同時滿足 (a) 的不等式？ <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 分別解兩個不等式後取交集。 <br>(b) 從範圍中數正整數。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{4x+6}{7}&gt;2(x-3)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$4x+6&gt;14(x-3)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$10x&lt;48$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x&lt;\\dfrac{24}{5}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$2x-10\\le 0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x\\le 5$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的解為 $x&lt;\\dfrac{24}{5}$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">4</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q07",
        year: 2012,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Dispersion"],
        difficulty: 1,
        content: `下面的框線圖顯示某田徑學會的一大群學生完成 $100\\text{ m}$ 賽跑的所需時間的分佈：<img src="img/2012dsep1q07zh.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;">該分佈的四分位數間距及分佈域分別為 $3.2\\text{ s}$ 及 $6.8\\text{ s}$。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $a$ 及 $b$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該些學生參與某訓練課程。 現知在訓練後，該些學生完成 $100\\text{ m}$ 賽跑的最長所需時間較訓練前少 $2.9\\text{ s}$。 教練宣稱在訓練後，至少 $25\\%$ 的學生完成 $100\\text{ m}$ 賽跑的所需時間有改善。 你是否同意？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用 IQR 及 range 求 $a$、$b$。 <br>(b) 分析上四分位數變化。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$a=18.1-6.8=11.3$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$b=12.1+3.2=15.3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">留意在訓練後，該些學生完成 100 m 賽跑的最長所需時間為 15.2 s，並較訓練前所需時間的分佈的上四分位數少。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q08",
        year: 2012,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)", "Geometry (Triangles)"],
        difficulty: 2,
        content: `圖中，$AB$、$BC$、$CD$ 及 $AD$ 均為圓的弦。 $AC$ 與 $BD$ 相交於 $E$。 已知 $BE = 8\\text{ cm}$ 、 $CE = 20\\text{ cm}$ 及 $DE = 15\\text{ cm}$。<img src="img/2012dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出在圖中的一對相似三角形，並求 $AE$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $AB = 10\\text{ cm}$。 $AC$ 與 $BD$ 是否互相垂直？ 試解釋你的答案。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用相交弦定理及相似三角形。 <br>(b) 用畢氏定理檢查。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\Delta AED\\sim\\Delta BEC$  (或 $\\Delta AEB\\sim\\Delta DEC$)</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{AE}{BE}=\\dfrac{DE}{CE}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{AE}{8}=\\dfrac{15}{20}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AE=6\\text{ cm}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $AE^2+BE^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=6^2+8^2$<br>$=10^2$<br>$=AB^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$AC$ 與 $BD$ 互相垂直。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q09",
        year: 2012,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `圖中，實心直立角柱體 $ABCDEFGH$ 的體積為 $1\\,020\\text{ cm}^3$。 該角柱體的底 $ABCD$ 為一梯形，其中 $AD$ 平行於 $BC$。 已知 $\\angle BAD = 90^\\circ$ 、 $AB = 12\\text{ cm}$ 、 $BC = 6\\text{ cm}$ 及 $DE = 10\\text{ cm}$。<img src="img/2012dsep1q09.jpg" class="q-img" alt="題目附圖" style="max-width: 55%;">求<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$AD$ 的長度，<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">角柱體 $ABCDEFGH$ 的總表面面積。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用體積公式求 $AD$。 <br>(b) 計算各面面積總和。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $x\\text{ cm}$ 為 $AD$ 的長度。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{(6+x)(12)}{2}(10)=1\\,020$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=11$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$AD$ 的長度為 $11\\text{ cm}$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$CD$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{12^2+(11-6)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=13\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    角柱體 $ABCDEFGH$ 的總表面面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(12+11+13+6)(10)+\\dfrac{(6+11)(12)}{2}(2)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=624\\text{ cm}^2$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q10",
        year: 2012,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 1,
        content: `<u>志誠</u>進行一項中學生在某星期內用於做家課的時數的調查。 在發出的問卷中，有二十份回覆。 下面的幹葉圖顯示該二十份問卷記錄得的時數：<table class="q-table" style="border-collapse: collapse; table-layout: auto; width: auto; white-space: pre;" align="center">
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
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0 0 1 1 2 3 4 5 5 6 6 7 7</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">2</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0 0 0 5 8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">4 6</td>
    </tr>    
  </table><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該二十份問卷記錄得的時數的平均值及中位數。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content"><u>志誠</u>再收到四份問卷。 他得知這四份問卷記錄得的時數的平均值為 $18$。 現知這四份問卷其中兩份記錄得的時數為 $19$ 及 $20$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">寫出該二十四份問卷記錄得的時數的平均值。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">該二十四份問卷記錄得的時數的中位數與 (a) 所求得的中位數有沒有可能相同？ 試解釋你的答案。<br><span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 計算總和及中位位置。 <br>(b) 求新平均值；分析中位數可能變化。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">平均值 $=18$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">中位數 $=16$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">平均值 $=18$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">設 $a$ 及 $b$ 為另外兩份問卷記錄得的時數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\dfrac{a+b+19+20}{4}=18$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所以，可得 $a+b=33$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">若該兩中位數相同，則可得  $a\\le 16$  及  $b\\le 16$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">由此，可得 $a+b\\le 32$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $a+b=33$，所以這是不可能。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，該兩中位數相同是沒有可能。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解：</span><br>設 $a$ 及 $b$ 為另外兩份問卷記錄得的時數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\dfrac{a+b+19+20}{4}=18$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所以，可得 $a+b=33$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">若該兩中位數相同，則可得  $a\\le 16$  及  $b\\le 16$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">由此，可得  $a \\le 16$  及  $33-a \\le 16$ 。<br>故此，可得  $a \\le 16$  及  $a \\ge 17$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $17>16$，所以這是不可能。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，該兩中位數相同是沒有可能。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q11",
        year: 2012,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations", "Mensuration"],
        difficulty: 2,
        content: `設 $\\$C$ 為一表面面積是 $A\\text{ m}^2$ 的罐的髹漆成本。 已知 $C$ 為兩部分之和，一部分為常數，而另一部分隨 $A$ 正變。 當 $A=2$ 時，$C=62$； 當 $A=6$ 時，$C=74$。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求一表面面積是 $13\\text{ m}^2$ 的罐的髹漆成本。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">有一較大的罐與 (a) 所描述的罐相似。 若該較大的罐的體積為 (a) 所描述的罐的 $8$ 倍，求該較大的罐的髹漆成本。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $C = k + mA$，代入求係數。 <br>(b) 相似比為 $2$，表面積比為 $4$。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $C=r+sA$，其中 $r$ 及 $s$ 均為非零的常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $r+2s=62$  及  $r+6s=74$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $r=56$  及  $s=3$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    所求的成本<br>$=56+3(13)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\$95$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">由於該較大的罐的體積為 (a) 所描述的罐的 8 倍，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以該較大的罐的表面面積為 (a) 所描述的罐的 4 倍。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">該較大的罐的表面面積 $=(13)(4)=52\\text{ m}^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所求的成本 $=56+3(52)=\\$212$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q12",
        year: 2012,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `圖 (a) 顯示底半徑為 $48\\text{ cm}$ 及高為 $96\\text{ cm}$ 的實心金屬直立圓錐體。<img src="img/2012dsep1q12zh.jpg" class="q-img" alt="題目附圖" style="max-width: 75%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該圓錐體的體積，答案以 $\\pi$ 表示。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">把半徑為 $60\\text{ cm}$ 的半球形容器鉛垂置於一水平面上。 該容器載滿牛奶。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求該容器內牛奶的體積，答案以 $\\pi$ 表示。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">現把該圓錐體鉛垂置於該容器內，如圖 (b) 所示。 某工匠宣稱剩下在該容器內的牛奶的體積大於 $0.3\\text{ m}^3$。 你是否同意？ 試解釋你的答案。 <br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用圓錐體積公式。 <br>(b) 計算半球體積減去浸入部分。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    所求的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}\\pi(48)^2(96)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=73\\,728\\pi\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">    所求的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{2}{3}\\pi(60)^3$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=144\\,000\\pi\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">設 $h\\text{ cm}$ 為在牛奶表面下的平截頭體的高度及 $r\\text{ cm}$ 為在牛奶表面上的圓錐體的底半徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $h$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\sqrt{60^2-48^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=36$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{r}{48}=\\dfrac{96-36}{96}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$r=30$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    剩下在該容器內的牛奶的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=144\\,000\\pi-\\left(73\\,728\\pi-\\dfrac{1}{3}\\pi(30)^2(96-36)\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=88\\,272\\pi\\text{ cm}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx 0.2773146667\\text{ m}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$&lt;0.3\\text{ m}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解：</span><br>    在牛奶表面下的平截頭體的高度</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\sqrt{60^2-48^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=36\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    剩下在該容器內的牛奶的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=144\\,000\\pi-\\bigl(73\\,728\\pi\\left(1-\\left(\\dfrac{96-36}{96}\\right)^3\\right)\\bigr)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=88\\,272\\pi\\text{ cm}^3$<br>$\\approx 0.2773146667\\text{ m}^3$<br>$< 0.3\\text{ m}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q13",
        year: 2012,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Remainder Theorem and Factor Theorem", "Functions and Graphs"],
        difficulty: 2,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $k$ 的值使得 $x-2$ 為 $kx^3 - 21x^2 + 24x - 4$ 的因式。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">圖中顯示 $y = 15x^2 - 63x + 72$ 的圖像。 $Q$ 為第一象限內圖像上的可變點。 $P$ 及 $R$ 分別為由 $Q$ 至 $x$ 軸及 $y$ 軸的垂足。<img src="img/2012dsep1q13b.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"></div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">設 $(m, 0)$ 為 $P$ 的坐標。 以 $m$ 表長方形 $OPQR$ 的面積。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$Q$ 是否有三個不同的位置使得長方形 $OPQR$ 的面積為 $12$？ 試解釋你的答案。<br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用因式定理求 $k$。 <br>(b) 寫面積函數後分析方程根的數目。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$k(2)^3-21(2)^2+24(2)-4=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$8k=40$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k=5$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">    長方形 $OPQR$ 的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=m(15m^2-63m+72)$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=15m^3-63m^2+72m$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">留意長方形 $OPQR$ 的面積為 12。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$15m^3-63m^2+72m=12$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$5m^3-21m^2+24m-4=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$(m-2)(5m^2-11m+2)=0$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$(m-2)^2(5m-1)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$m=2$  或  $m=\\dfrac{1}{5}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，$Q$ 只有兩個不同的位置使得長方形 $OPQR$ 的面積為 12。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$Q$ 沒有三個不同的位置使得長方形 $OPQR$ 的面積為 12。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q14",
        year: 2012,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Loci", "Equations of Circles", "Coordinate Geometry"],
        difficulty: 3,
        content: `兩平行線 $L$ 及 $\\ell$ 的 $y$ 截距分別為 $-1$ 及 $-3$，且 $L$ 的 $x$ 截距為 $3$。 $P$ 為直角坐標平面上的一動點使得由 $P$ 至 $L$ 的垂直距離等於由 $P$ 至 $\\ell$ 的垂直距離。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。<div class="q-line"><span class="q-label">(a)</span><span class="q-label">(i)</span><div class="q-text-content">描述 $\\mathit{\\Gamma}$ 與 $L$ 之間的幾何關係。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $\\mathit{\\Gamma}$ 的方程。<br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">圓 $C$ 的方程為 $(x-6)^2 + y^2 = 4$。 將 $C$ 的圓心記為 $Q$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$\\mathit{\\Gamma}$ 是否通過 $Q$？ 試解釋你的答案。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">若 $L$ 與 $C$ 相交於 $A$ 及 $B$ 而 $\\mathit{\\Gamma}$ 與 $C$ 相交於 $H$ 及 $K$，求 $\\Delta AQH$ 的面積與 $\\Delta BQK$ 的面積之比。<br><span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 中間平行線；求方程。 <br>(b) 代入檢查；利用對稱求面積比。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$\\mathit{\\Gamma}$ 平行於 $L$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">留意 $\\mathit{\\Gamma}$ 的 $y$ 截距為 $-2$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    $L$ 的斜率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{-1-0}{0-3}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{1}{3}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">$\\mathit{\\Gamma}$ 的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$y+2=\\dfrac{1}{3}(x-0)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$x-3y-6=0$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">留意 $Q$ 的坐標為 $(6,0)$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $6-3(0)-6=0$，所以 $\\mathit{\\Gamma}$ 通過 $Q$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">留意 $QH$ 及 $QK$ 均為該圓的半徑。 ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">再留意 $\\Delta AQH$ 及 $\\Delta BQK$ 的高均為 $L$ 與 $\\mathit{\\Gamma}$ 間之距離。 ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所以，$\\Delta AQH$ 的面積等於 $\\Delta BQK$ 的面積。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，所求之比為 $1:1$。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q15",
        year: 2012,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score", "Measures of Dispersion"],
        difficulty: 2,
        content: `一班學生在某數學測驗得分的標準差為 $10$ 分。 全部學生在該測驗均不及格，故此將每名學生的測驗得分調整，使每個得分均增加 $20\\%$ 然後額外加 $5$ 分。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求得分調整後，測驗得分的標準差。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">每名學生的標準分有否因得分調整而改變？ 試解釋你的答案。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 標準差乘以 $1.2$。 <br>(b) 分析標準分定義。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">標準差 $=10(1+20\\%)=12\\text{ 分}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $x$ 為測驗得分及 $m$ 為得分調整前，測驗得分的平均值。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">得分調整前的標準分 $=\\dfrac{x-m}{10}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">得分調整後的標準分</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{(x(1+20\\%)+5)-(m(1+20\\%)+5)}{12}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1.2(x-m)}{12}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{x-m}{10}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，每名學生的標準分沒有因得分調整而改變。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q16",
        year: 2012,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations", "Probability"],
        difficulty: 2,
        content: `某公司有 $8$ 個部門。 每個部門各提名 $2$ 位代表以成立一個有 $16$ 位成員的工作小組。 從該工作小組中隨機選出 $4$ 位成員。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求所選出的 $4$ 位成員由 $4$ 個不同部門提名的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求所選出的 $4$ 位成員至多由 $3$ 個不同部門提名的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `用組合數計算。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{(C_4^8)(C_1^2)^4}{C_4^{16}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{8}{13}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\left(\\dfrac{16}{16}\\right)\\left(\\dfrac{14}{15}\\right)\\left(\\dfrac{12}{14}\\right)\\left(\\dfrac{10}{13}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{8}{13}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1-\\dfrac{8}{13}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{13}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解 1：</span><br>    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_2^8+\\left(C_1^8\\right)\\left(C_2^2\\right)\\left(C_2^7\\right)\\left(C_1^2\\right)^2}{C_4^{16}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{13}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解 2：</span><br>    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_2^8+\\left(C_2^8\\right)\\left(C_1^2\\right)^2\\left(C_1^6\\right)\\left(C_2^2\\right)}{C_4^{16}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{13}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q17",
        year: 2012,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Coordinate Geometry", "Intersection of Straight Line and Circle"],
        difficulty: 3,
        content: `圓 $C$ 的圓心的坐標為 $(6,10)$。 已知 $x$ 軸為 $C$ 的切線。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $C$ 的方程。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">直線 $L$ 的斜率及 $y$ 截距分別為 $-1$ 及 $k$。 若 $L$ 與 $C$ 相交於 $A$ 及 $B$，以 $k$ 表 $AB$ 的中點的坐標。<span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 半徑為圓心到 $x$ 軸距離。 <br>(b) 求交點中點公式。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">留意 $C$ 的半徑為 10。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$C$ 的方程為 $(x-6)^2+(y-10)^2=10^2$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$L$ 的方程為 $y=-x+k$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">把 $y=-x+k$ 代入 $x^2+y^2-12x-20y+36=0$，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">可得 $x^2+(-x+k)^2-12x-20(-x+k)+36=0$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $2x^2+(8-2k)x+(k^2-20k+36)=0$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $AB$ 的中點的 $x$ 坐標</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{\\frac{-(8-2k)}{2}}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{k-4}{2}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $AB$ 的中點的 $y$ 坐標<br>$=\\dfrac{-(k-4)}{2}+k$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{k+4}{2}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的坐標為 $\\left(\\dfrac{k-4}{2},\\dfrac{k+4}{2}\\right)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解 1：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$L$ 的方程為 $y=-x+k$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意通過 $C$ 的圓心且垂直於 $L$ 的直線的方程為 $y-10=1(x-6)$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">解線性方程組 $\\begin{cases}y=-x+k \\\\ x-y+4=0\\end{cases}$ ，</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">可得 $\\begin{cases}x=\\dfrac{k-4}{2} \\\\ y=\\dfrac{k+4}{2}\\end{cases}$ 。</div><div class="ms-mark">1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的坐標為 $\\left(\\dfrac{k-4}{2}, \\dfrac{k+4}{2}\\right)$ 。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解 2：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$L$ 的方程為 $y=-x+k$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">把 $y=-x+k$ 代入 $x^2+y^2-12x-20y+36=0$ ，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">可得 $x^2+(-x+k)^2-12x-20(-x+k)+36=0$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $2x^2+(8-2k)x+(k^2-20k+36)=0$ 。<br>留意 $\\sqrt{(8-2k)^2-4(2)(k^2-20k+36)}=2\\sqrt{-k^2+32k-56}$ 。<br>故此，$AB$ 的端點的 $x$ 坐標為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{k-4+\\sqrt{-k^2+32k-56}}{2}$  及  $\\dfrac{k-4-\\sqrt{-k^2+32k-56}}{2}$ 。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $AB$ 的中點的 $x$ 坐標<br>$=\\dfrac{\\frac{k-4+\\sqrt{-k^2+32k-56}}{2}+\\frac{k-4-\\sqrt{-k^2+32k-56}}{2}}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{k-4}{2}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $AB$ 的中點的 $y$ 坐標<br>$=\\dfrac{-(k-4)}{2}+k$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{k+4}{2}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的坐標為 $\\left(\\dfrac{k-4}{2}, \\dfrac{k+4}{2}\\right)$ 。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q18",
        year: 2012,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)", "Mensuration"],
        difficulty: 3,
        content: `圖 (a) 顯示以正方形為底的直立角錐體 $VABCD$，其中 $\\angle VAB = 72^\\circ$。 該底的邊長為 $20\\text{ cm}$。 設 $P$ 及 $Q$ 分別為 $VA$ 及 $VD$ 上的點使得 $PQ$ 平行於 $BC$ 且 $\\angle PBA = 60^\\circ$。 從 $VABCD$ 切去角錐體 $VPBCQ$ 造成一幾何模型，如圖 (b) 所示。<img src="img/2012dsep1q18zh.jpg" class="q-img" alt="題目附圖" style="max-width: 80%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $AP$ 的長度。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $\\alpha$ 為平面 $PBCQ$ 與底 $ABCD$ 間之交角。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $\\alpha$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">設 $\\beta$ 為 $PB$ 與底 $ABCD$ 間之交角。 $\\alpha$ 與 $\\beta$ 哪一個較大？ 試解釋你的答案。<br><span class="marks">(6分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用三角求 $AP$。 <br>(b) 求平面交角及線面交角比較。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">藉正弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{AP}{\\sin\\angle PBA}=\\dfrac{AB}{\\sin\\angle APB}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{AP}{\\sin 60^\\circ}=\\dfrac{20}{\\sin(180^\\circ-60^\\circ-72^\\circ)}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AP\\approx 23.30704256\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AP\\approx 23.3\\text{ cm}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$AP$ 的長度為 $23.3\\text{ cm}$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">設 $S$ 為由 $P$ 至 $AD$ 的垂足。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $PS$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=AP\\sin\\angle PAD$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\approx 22.1663147\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $AS$<br>$=AP\\cos\\angle PAD$ ......<sup>@</sup><br>$\\approx 7.202272239\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉正弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{PB}{\\sin\\angle PAB}=\\dfrac{AB}{\\sin\\angle APB}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PB\\approx 25.59545552\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">設 $T$ 為由 $P$ 至 $BC$ 的垂足。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PT^2=PB^2-AS^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$PT\\approx 24.56124219\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\alpha=\\angle PTS$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">藉餘弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\cos\\alpha=\\dfrac{PT^2+ST^2-PS^2}{2(PT)(ST)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\cos\\alpha=\\dfrac{(24.56124219)^2+(20)^2-(22.1663147)^2}{2(24.56124219)(20)}$<br>$\\alpha\\approx 58.59703733^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\alpha\\approx 58.6^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">設 $X$ 為 $P$ 在底 $ABCD$ 的投影，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">則可得 $\\beta=\\angle PBX$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $PB&gt;PT$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sin\\alpha=\\dfrac{PX}{PT}>\\dfrac{PX}{PB}=\\sin\\angle PBX=\\sin\\beta$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $\\alpha$ 及 $\\beta$ 均為銳角，所以 $\\alpha$ 大於 $\\beta$。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2012-DSE-MATH-CP1-Q19",
        year: 2012,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences", "Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: `在某城市，一機場的空運貨站 $X$ 自它開始運作起計的第 $n$ 年所處理的貨物的重量為 $\\mathrm{A}(n)$ 公噸，其中 $n$ 為一正整數。 已知 $\\mathrm{A}(n) = ab^{2n}$，其中 $a$ 及 $b$ 均為正常數。 現知 $X$ 自它開始運作起計的第 $1$ 年及第 $2$ 年所處理的貨物的重量分別為 $254\\,100$ 公噸及 $307\\,461$ 公噸。<br><div class="q-line"><span class="q-label">(a)</span><span class="q-label">(i)</span><div class="q-text-content">求 $a$ 及 $b$。<br>由此求 $X$ 自它開始運作起計的第 $4$ 年所處理的貨物的重量。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">以 $n$ 表 $X$ 自它開始運作起計的首 $n$ 年所處理的貨物的總重量。<br><span class="marks">(6分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">自 $X$ 運作了 $4$ 年，空運貨站 $Y$ 開始運作。 設 $\\mathrm{B}(m)$ 公噸為 $Y$ 自它開始運作起計的第 $m$ 年所處理的貨物的重量，其中 $m$ 為一正整數。 已知 $\\mathrm{B}(m) = 2ab^{m}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">該機場的經理宣稱於 $Y$ 運作後，每一年 $Y$ 所處理的貨物的重量均較 $X$ 所處理的少。 你是否同意？ 試解釋你的答案。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">該機場的監督認為當 $X$ 和 $Y$ 所處理的貨物自 $X$ 開始運作起計的總重量超出 $20\\,000\\,000$ 公噸時，應安裝新設施以維持空運貨站的工作效能。 根據該監督的想法，自 $X$ 開始運作起計的哪一年應安裝新設施？<br><span class="marks">(7分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 代入求 $a$、$b$；幾何級數求和。 <br>(b) 比較 $A(n)$ 與 $B(m)$；求總和超過閾值的年份。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">留意 $\\begin{cases}ab^2=254\\,100\\\\ab^4=307\\,461\\end{cases}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $b^2=\\dfrac{307\\,461}{254\\,100}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解後，可得  $b=1.1$  及  $a=210\\,000$ 。</div><div class="ms-mark">1A+1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">    所求的重量<br>$=(210\\,000)(1.1^{(2)(4)})$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=450\\,153.6501$ 公噸</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">    貨物的總重量<br>$=ab^2+ab^4+\\cdots+ab^{2n}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{ab^2(b^{2n}-1)}{b^2-1}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{(210\\,000)(1.1)^2((1.1)^{2n}-1)}{1.1^2-1}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=1210000((1.1)^{2n}-1)$ 公噸</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">留意 $\\mathrm{A}(4)=450\\,153.65&gt;420\\,000=2a$。<br>再留意對任意正整數 $m$，$(1.1)^{2m}&gt;(1.1)^m$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $\\mathrm{A}(m+4)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=(1.1)^{2m}~\\mathrm{A}(4)$<br>$&gt;(1.1)^{2m}(2a)$<br>$&gt;(1.1)^m(2a)$<br>$=\\mathrm{B}(m)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，同意該宣稱。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">設 $n$ 為自 $X$ 開始運作起計所經過的年數。<br>    $Y$ 所處理的貨物的總重量<br>$=2ab+2ab^2+\\cdots+2ab^{n-4}$<br>$=\\bigl(\\dfrac{2ab(b^{n-4}-1)}{b-1}\\bigr)$ 公噸，其中 $n>4$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">$1\\,210\\,000((1.1)^{2n}-1)+\\dfrac{420\\,000(1.1)((1.1)^{n-4}-1)}{1.1-1}&gt;20\\,000\\,000$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$121(1.1)^{2n}(1.1^n)^2+462(1.1^{n-4})-2\\,583>0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$121(1.1)^4(1.1^n)^2+462(1.1^n)-2\\,583(1.1^4)>0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$1.1^n > 3.496831134$  或  $1.1^n < -6.10470069$ (捨去)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$n\\log1.1 > \\log3.496831134$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$n&gt;13.13455888$<br>留意 $n$ 為一整數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，自 $X$ 開始運作起計的第 14 年應安裝新設施。</div><div class="ms-mark">1A</div></div></div>`
    }
);
