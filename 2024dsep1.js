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
        content: `化簡 $\\dfrac{2}{4h-7} - \\dfrac{3}{6h-5}$。<span class="marks">(3分)</span>`,
        hint: `先通分母，然後展開分子並小心合併同類項（注意負號的分配）。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{2}{4h-7}-\\dfrac{3}{6h-5}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{2(6h-5)-3(4h-7)}{(4h-7)(6h-5)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{12h-10-12h+21}{(4h-7)(6h-5)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{11}{(4h-7)(6h-5)}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q02",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Formulae"],
        difficulty: 1,
        content: `令 $x$ 成為公式 $\\dfrac{Ax+C}{B}=3x$ 的主項。<span class="marks">(3分)</span>`,
        hint: `兩邊同乘以 $B$ 消除分母，將所有含有 $x$ 的項移到等號同一邊，抽公因式後即可單獨導出 $x$。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{Ax+C}{B}=3x$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$Ax+C=3Bx$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$Ax-3Bx=-C$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=\\dfrac{C}{3B-A}$</div><div class="ms-mark">1A</div></div><p>另解：<br><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{Ax+C}{B}=3x$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{Ax}{B}+\\dfrac{C}{B}=3x$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{Ax}{B}-3x=\\dfrac{-C}{B}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=\\dfrac{C}{3B-A}$</div><div class="ms-mark">1A</div></div></div>`
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
        content: `因式分解<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$6r^{2}-13rs-28s^{2}$ ，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$4r-14s+6r^{2}-13rs-28s^{2}$ 。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 使用十字相乘法；(b) 利用 (a) 的結果，將前兩項提取公因式後進行整體分組分解。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$6r^2-13rs-28s^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(2r-7s)(3r+4s)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$4r-14s+6r^2-13rs-28s^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4r-14s+(2r-7s)(3r+4s)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2(2r-7s)+(2r-7s)(3r+4s)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(2r-7s)(2+3r+4s)$</div><div class="ms-mark">1A</div></div></div>`
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
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求同時滿足  $\\dfrac{5x+7}{4}-1<2x$  及  $3x+9\\ge 0$  的 $x$ 值的範圍。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出同時滿足 (a) 的不等式的最小整數。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 分別解出兩個不等式，再找出它們在數線上的重疊部分（及 / and）；(b) 在解的範圍內找出最小的整數值。`,
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
        content: `設 $a$ 、 $b$ 及 $c$ 均為非零的數使得 $5a=6c$ 及 $\\dfrac{2b+7c}{b+c}=4$。 求 $\\dfrac{5a+8b}{2b+3c}$ 的值。<span class="marks">(4分)</span>`,
        hint: `利用已知條件將 $a$ 和 $b$ 都用含 $c$ 的代數式表示，然後代入所求分數中將 $c$ 約去。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$a:c=6:5$</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{2b+7c}{b+c}=4$<br>$2b+7c=4b+4c$<br>$2b=3c$<br>$b:c=3:2$<br>$b:c=15:10$<br>$a:c=12:10$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得 $a:b:c=12:15:10$。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">設 $a=12k$ 、 $b=15k$ 及 $c=10k$ ，其中 $k$ 為一非零的常數。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{5a+8b}{2b+3c}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{5(12k)+8(15k)}{2(15k)+3(10k)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=3$</div><div class="ms-mark">1A</div></div></div>`
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
        content: `某計算機的標價較其成本高 40%。 該計算機以其標價七五折售出並獲利 \\$13。 求該計算機的標價。<span class="marks">(4分)</span>`,
        hint: `設成本為 $C$，則標價為 $1.4C$，售價為 $1.4C \\times 0.75$。利用「售價 $-$ 成本 $=$ 獲利」建立方程。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $\\$x$ 為該計算機的標價。<br>該計算機的成本</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x}{(1+40\\%)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$\\left(\\dfrac{5x}{7}\\right)$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">該計算機的售價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=(75\\%)x$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$\\left(\\dfrac{3x}{4}\\right)$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{3x}{4}-\\dfrac{5x}{7}=13$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=364$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該計算機的標價為 $\\$364$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">另解：<br>設 $\\$c$ 為該計算機的成本。<br>該計算機的標價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=(1+40\\%)c$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$1.4c$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">該計算機的售價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=(75\\%)(1.4c)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\$1.05c$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">$1.05c-c=13$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$c=260$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該計算機的標價為 $\\$364$。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q07",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Coordinate Geometry"],
        difficulty: 2,
        content: `<div style="color: red;">在某極坐標系中，$O$ 為極點。 點 $P$、點 $Q$ 及點 $R$ 的極坐標分別為 $(11,59^{\\circ})$、$(60,149^{\\circ})$ 及 $(144,239^{\\circ})$。</div><div class="q-line" style="color: red;"><span class="q-label">(a)</span><div class="q-text-content" style="color: red;">求 $\\angle POQ$。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line" style="color: red;"><span class="q-label">(b)</span><div class="q-text-content" style="color: red;">$P$、$O$ 與 $R$ 是否共線？ 試解釋你的答案。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line" style="color: red;"><span class="q-label">(c)</span><div class="q-text-content" style="color: red;">求 $\\Delta PQR$ 的周界。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 兩點的極角相減；(b) 檢查 $P$ 與 $R$ 的極角相差是否為 $180^{\\circ}$；(c) 利用共線與垂直關係，在直角三角形中應用畢氏定理求邊長。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\angle POQ$<br>$=149^\\circ-59^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=90^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\angle POR$<br>$=239^\\circ-59^\\circ$<br>$=180^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$P$、$O$ 與 $R$ 共線。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">所求的周界</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=PQ+QR+PR$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{11^2+60^2}+\\sqrt{60^2+144^2}+(11+144)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=372$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q08",
        year: 2024,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Plane Geometry", "Areas and Volumes"],
        difficulty: 2,
        content: `圖中，$E$ 為 $AC$ 與 $BD$ 的交點。 已知 $\\angle ACB=\\angle ADB=90^{\\circ}$ 及 $AD=BC$。<br><img src="img/2024dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 65%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ABC\\cong\\Delta BAD$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若 $AD=12\\text{ cm}$ 及 $DE=9\\text{ cm}$，求五邊形 $ABCED$ 的面積。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用 R.H.S.（斜邊、直角邊）證明全等；(b) 由全等推出對應邊相等，進而利用畢氏定理求出直角三角形的其餘邊長，最後將圖形分割成兩個三角形求面積和。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\angle ACB=\\angle ADB=90^\\circ$\t\t[已知]<br>$BC=AD$\t\t\t\t[已知]<br>$AB=AB$\t\t\t\t\t[公共邊]<br>$\\Delta ABC\\cong\\Delta BAD$\t\t\t(RHS)</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$AE$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{AD^2+DE^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=15\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">藉 (a)，可得 $\\angle ABE=\\angle BAE$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由此，可得 $AE=BE$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $BE=15\\text{ cm}$。<br>留意 $CE=DE=9\\text{ cm}$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">所求的面積<br>$=\\dfrac{1}{2}(AD)(BD)+\\dfrac{1}{2}(BC)(CE)$<br>$=\\dfrac{1}{2}(12)(9+15)+\\dfrac{1}{2}(12)(9)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=198\\text{ cm}^2$</div><div class="ms-mark">1A</div></div></div>`
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
        content: `下表顯示某群主婦擁有鑰匙的數目的分佈。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
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
        hint: `(a) 多於 6 條代表 7 條或 8 條，概率為 $\\dfrac{4+k}{\\text{總人數}}$，藉此建立方程求 $k$；(b) 將 $k$ 代回後依常規統計公式計算。`,
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
        content: `已知 $\\mathrm{g}(x)$ 的一部分為常數，而另一部分則隨 $x$ 正變。 假定 $\\mathrm{g}(-3)=-21$ 及 $\\mathrm{g}(7)=9$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{g}(x)$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $\\mathrm{h}(x)=x~\\mathrm{g}(x)+k$，其中 $k$ 為一實常數。 若方程 $\\mathrm{h}(x)=0$ 所有的根均為實數，求 $k$ 值的範圍。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $g(x) = a + bx$，代入兩點聯立求常數；(b) 展開 $h(x)=0$ 得到一元二次方程，利用判別式 $\\Delta \\ge 0$ 求範圍。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{g}(x)=a+bx$ ，其中 $a$ 及 $b$ 均為非零的常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $a-3b=-21$ 及 $a+7b=9$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $a=-12$ 及 $b=3$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{g}(x)=3x-12$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{h}(x)=0$<br>$x\\mathrm{g}(x)+k=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$3x^2-12x+k=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意方程 $\\mathrm{h}(x)=0$ 所有的根均為實數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(-12)^2-4(3)(k)\\ge 0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k\\le 12$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q11",
        year: 2024,
        type: "P1",
        section: "A2",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 1,
        content: `下面的幹葉圖顯示一群研究員在某月內用於閱讀期刊的時數的分佈：
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
        hint: `(a) 根據葉的常規排序可知 $0 \\le a \\le 8$ 且 $9 \\le b \\le 9 \\Rightarrow b=9$（或利用平均值方程聯立求解）；(b) 分佈域 $=$ 最大值 $-$ 最小值；(c) 四分位數間距 $= Q_3 - Q_1$，調整未知數的位置使差值達到最大。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\frac{21+32+33+37+39+40+40+b+(20+28+29+30+34)(2)+(20+a)(3)}{20}=30$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，可得 $3a+b=16$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\begin{cases}a=3\\\\b=7\\end{cases}$ 、 $\\begin{cases}a=4\\\\b=4\\end{cases}$ 或 $\\begin{cases}a=5\\\\b=1\\end{cases}$。</div><div class="ms-mark">1A+1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">21</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">當 $a=3$ 時，該分佈的四分位數間距最大。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">   該分佈的最大可取四分位數間距</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=34-23$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=11$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">另解：<br>藉 (a)，有三種情況。<br>情況 1：\t$a=3$<br>\t\t   該分佈的四分位數間距</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">\t\t$=34-23$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">\t\t$=11$ ......<sup>#</sup></div><div class="ms-mark">1M<sup>#</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">情況 2：\t$a=4$<br>\t\t   該分佈的四分位數間距<br>\t\t$=34-24$ ......<sup>@</sup><br>\t\t$=10$ ......<sup>#</sup><br>情況 3：\t$a=5$<br>\t\t   該分佈的四分位數間距<br>\t\t$=34-25$ ......<sup>@</sup><br>\t\t$=9$ ......<sup>#</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該分佈的最大可取四分位數間距為 11。</div><div class="ms-mark">1A</div></div></div>`
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
        content: `將原點記為 $O$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$A$ 及 $B$ 均為正 $x$ 軸上的點使得 $A$ 的 $x$ 坐標大於 $B$ 的 $x$ 坐標。 通過 $B$ 的垂直線與直線 $y=mx$ 相交於點 $C$ 使得 $AB=BC$，其中 $m$ 為一正常數。 設 $D$ 為一點使得 $ABCD$ 為一正方形。 以 $m$ 表 $OD$ 的斜率。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">點 $M$ 及點 $N$ 的坐標分別為 $(6,5)$ 及 $(10,0)$。 設 $P$ 及 $Q$ 分別為 $OM$ 及 $MN$ 上的點，而 $R$ 及 $S$ 均為 $x$ 軸上的點。 若四邊形 $PQRS$ 為一正方形，求 $P$ 的 $x$ 坐標。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $B=(b,0)$，依題意表示出 $C$、$A$、$D$ 的坐標，再用斜率公式求 $OD$ 的斜率；(b) 構造相似三角形或利用直線方程與正方形的幾何約束求解。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $(b,0)$ 為 $B$ 的坐標，<br>則 $A$ 、 $C$ 及 $D$ 的坐標分別為 $(mb+b,0)$ 、 $(b,mb)$ 及 $(mb+b,mb)$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">   $OD$ 的斜率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{mb-0}{mb+b-0}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{m}{m+1}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">另解：<br>設 $k$ 為 $OD$ 的斜率。<br>將 $A$ 的 $x$ 坐標記為 $a$ ，</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">則 $D$ 的坐標為 $(a,ka)$ 。 ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，$B$ 的 $x$ 坐標為 $a-ka$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$C$ 的坐標為 $(a-ka,ka)$ 。 ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$ka=m(a-ka)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k=m-mk$<br>$k=\\dfrac{m}{m+1}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$OD$ 的斜率為 $\\dfrac{m}{m+1}$ 。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">   $OM$ 的斜率<br>$=\\dfrac{5-0}{6-0}$<br>$=\\dfrac{5}{6}$<p>   $OQ$ 的斜率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2"><br>$=\\dfrac{\\dfrac{5}{6}}{\\dfrac{5}{6}+1}$  （藉 (a)）<br></div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{11}$<br>故此，通過 $O$ 及 $Q$ 的直線的方程為 $y=\\dfrac{5x}{11}$ 。<p>通過 $M$ 及 $N$ 的直線的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$y-0=\\dfrac{5-0}{6-10}(x-10)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$y=\\dfrac{-5x}{4}+\\dfrac{25}{2}$<br>解 $y=\\dfrac{5x}{11}$ 與 $y=\\dfrac{-5x}{4}+\\dfrac{25}{2}$ 後，$Q$ 的坐標為 $\\left(\\dfrac{22}{3},\\dfrac{10}{3}\\right)$ 。<p>   $P$ 的 $x$ 坐標</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{22}{3}-\\dfrac{10}{3}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2024-DSE-MATH-CP1-Q13",
        year: 2024,
        type: "P1",
        section: "A2",
        level: ["Junior", "Senior"],
        domain: ["Geometry"],
        topic: ["Areas and Volumes", "Similar Solids"],
        difficulty: 2,
        content: `某實心直立角錐體的底為一正方形，其邊長為 $64\\text{ cm}$。 該角錐體的高為 $24\\text{ cm}$。 將該角錐體以一平行於其底的平面分成一平截頭體 $X$ 及一角錐體 $Y$。 已知 $Y$ 的高為 $18\\text{ cm}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $X$ 的體積。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">另一實心直立角錐體的底為一正方形。 將這角錐體以一平行於其底的平面分成一平截頭體 $Z$ 及一角錐體。 $Z$ 的高及總表面面積分別為 $3\\text{ cm}$ 及 $960\\text{ cm}^2$。 $X$ 與 $Z$ 是否相似？ 試解釋你的答案。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 小角錐體的高 $= 24 - 18 = 6\\text{ cm}$。利用相似錐體體比等於高比的立方，求出平截頭體體積；(b) 若兩幾何體相似，其對應面積之比必須等於對應長度（高）之比的平方，以此進行檢驗。`,
        solution: `(a) 小角錐與大角錐的高之比 $= (24-18)/24 = 6/24 = 1/4$。大角錐體積 $= \\dfrac{1}{3} \\times 64^2 \\times 24 = 32768\\text{ cm}^3$。小角錐體積 $= 32768 \\times \\left(\\dfrac{1}{4}\\right)^3 = 512\\text{ cm}^3$。$X$ 的體積 $= 32768 - 512 = 32256\\text{ cm}^3$。<br>(b) 計算 $X$ 的表面積並與 $Z$ 進行比例分析，發現其表面積比值並不等於高度比的平方，故不相似。`
    },
    {
        id: "2024-DSE-MATH-CP1-Q14",
        year: 2024,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials"],
        difficulty: 2,
        content: `設 $\\mathrm{F}(x)=(6x^2+x+p)(qx^2+rx-10)$，其中 $p$ 、 $q$ 及 $r$ 均為常數。 $\\mathrm{F}(x)$ 的常數項為 $40$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $p$ 的值。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">當 $\\mathrm{F}(x)$ 除以 $x+1$ 時，餘數為 $-12$。 已知 $x-2$ 為 $\\mathrm{F}(x)$ 的因式。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $q$ 及 $r$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">方程 $\\mathrm{F}(x)=0$ 有多少個無理根？ 試解釋你的答案。<br><span class="marks">(7分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 常數項是由兩個括號中的常數項相乘而得，即 $p \\times (-10) = 40$；(b)(i) 利用餘式定理 $F(-1) = -12$ 及因式定理 $F(2) = 0$ 建立關於 $q, r$ 的聯立方程求解；(b)(ii) 分別將兩個二次因式設為 $0$，檢查其判別式 $\\Delta$ 是否為完全平方數。`,
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
        content: `已知 $\\log_9 y$ 為 $\\log_3 x$ 的線性函數。 將該線性函數的圖像記為 $L$。 $L$ 的斜率為 4 及 $L$ 通過點 $(5,22)$。 以 $x$ 表 $y$。<span class="marks">(3分)</span>`,
        hint: `建立線性方程 $\\log_9 y = 4 \\log_3 x + c$，利用換底公式將 $\\log_9 y$ 轉化為以 $3$ 為底數的對數形式，求出 $c$ 後化簡除去對數符號。`,
        solution: `依題意設 $\\log_9 y = 4 \\log_3 x + c$。代入點 $(5,22)$ 得 $22 = 4(5) + c \\Rightarrow c = 2$。故 $\\log_9 y = 4 \\log_3 x + 2$。利用換底公式：$\\dfrac{\\log_3 y}{2} = 4 \\log_3 x + 2 \\Rightarrow \\log_3 y = 8 \\log_3 x + 4 \\Rightarrow \\log_3 y = \\log_3(x^8) + \\log_3(3^4) \\Rightarrow y = 81x^8$`
    },
    {
        id: "2024-DSE-MATH-CP1-Q16",
        year: 2024,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 1,
        content: `某袋子內有 16 個紅色杯及 4 個白色杯。 若從該袋子中隨機同時抽出 5 個杯，求<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">抽出恰好 $1$ 個白色杯的概率；<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">抽出至多 $3$ 個紅色杯的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `總杯數為 $20$，同時抽出 $5$ 個杯的總組合數為 $C_{5}^{20}$。(a) 分子為 $C_1^4 \\times C_4^{16}$；(b) 「至多 3 個紅」等價於「至少 2 個白」，即考慮 2白3紅、3白2紅、4白1紅的概率之和。`,
        solution: `(a) $P(\\text{1白4紅}) = \\dfrac{C_1^4 \\times C_4^{16}}{C_5^{20}} = \\dfrac{4 \\times 1820}{15504} = \\dfrac{455}{969}$。<br>(b) 至多3個紅即白杯數 $\\ge 2$。$P(\\text{白} \\ge 2) = \\dfrac{C_2^4 C_3^{16} + C_3^4 C_2^{16} + C_4^4 C_1^{16}}{C_5^{20}} = \\dfrac{6(560) + 4(120) + 1(16)}{15504} = \\dfrac{3856}{15504} = \\dfrac{241}{969}$。`
    },
    {
        id: "2024-DSE-MATH-CP1-Q17",
        year: 2024,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Loci", "Coordinate Geometry", "Equations of Circles"],
        difficulty: 3,
        content: `點 $Q$ 及點 $R$ 的坐標分別為 $(10,-1)$ 及 $(-4,-9)$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $P$ 為直角坐標平面上的一動點使得 $PQ=PR$。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">描述 $\\mathit{\\Gamma}$ 與 $QR$ 之間的幾何關係。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $\\mathit{\\Gamma}$ 的方程。<br><span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $C$ 為通過 $Q$、 $R$ 及點 $(4,3)$ 的圓。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $C$ 的方程。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">點 $U$ 的坐標為 $(10,4)$。 現知 $U$ 位於 $C$ 以外。 $UV$ 及 $UW$ 分別為 $C$ 在點 $V$ 及點 $W$ 的切線。 $\\Delta UVW$ 的外接圓的面積是否大於 $100$？ 試解釋你的答案。<br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a)(i) 到兩定點等距的軌跡為垂直平分線；(b)(i) 設圓的一般式或利用弦的垂直平分線過圓心聯立求方程；(b)(ii) $\\Delta UVW$ 的外接圓以圓心 $I$ 與 $U$ 的連線 $IU$ 為直徑，計算直徑後算出面積作比較。`,
        solution: `(a)(i) $\\Gamma$ 是線段 $QR$ 的垂直平分線。<br>(ii) $QR$ 中點為 $(3, -5)$，斜率為 $\\dfrac{4}{7}$。故 $\\Gamma$ 的斜率為 $-\\dfrac{7}{4}$，方程為 $7x + 4y - 1 = 0$。<br>(b)(i) 經計算圓心為 $(2, -3)$，半徑為 $\\sqrt{68}$。圓方程為 $(x-2)^2 + (y+3)^2 = 68$。<br>(ii) 圓心 $I=(2,-3)$，離 $U(10,4)$ 的距離平方 $IU^2 = (10-2)^2 + (4+3)^2 = 113$。外接圓直徑為 $IU$，面積 $= \\pi \\left(\\dfrac{IU}{2}\\right)^2 = \\dfrac{113\\pi}{4} \\approx 88.75 < 100$，故不大於 $100$。`
    },
    {
        id: "2024-DSE-MATH-CP1-Q18",
        year: 2024,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 3,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$PQRS$ 為四邊形金屬薄片，其中 $PQ=12\\text{ cm}$ 、 $PS=10\\text{ cm}$ 、 $QR=13\\text{ cm}$ 、 $\\angle QPS=82^{\\circ}$ 及 $\\angle QRS=65^{\\circ}$。 求</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$QS$ 的長度，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$\\angle RQS$。<br><span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">現將 (a) 中所描述的金屬薄片 $PQRS$ 沿 $QS$ 摺起（見圖）。 已知平面 $PQS$ 與平面 $QRS$ 間的交角為 $80^{\\circ}$。</div></div><img src="img/2024dsep1q18b.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求由 $R$ 至平面 $PQS$ 的最短距離。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">設 $X$ 為平面 $QRS$ 上的任意點。 某人宣稱 $P$ 與 $X$ 間的距離超過 $8\\text{ cm}$。 該宣稱是否正確？ 試解釋你的答案。<br><span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a)(i) 在 $\\Delta PQS$ 中使用餘弦定理；(a)(ii) 在 $\\Delta QRS$ 中使用正弦定理；(b)(i) 利用三面角或投影關係，最短距離為 $R$ 到棱 $QS$ 的垂線長度乘以 $\\sin 80^{\\circ}$。`,
        solution: `(a)(i) 由餘弦定理，$QS = \\sqrt{12^2+10^2-2(12)(10)\\cos 82^{\\circ}} \\approx 14.5\\text{ cm}$。<br>(ii) 利用正弦定理求出 $\\angle RQS$。<br>(b)(i) 作垂線並利用摺起角 $80^{\\circ}$ 的直角三角形關係，求出最短距離（即垂線高）。<br>(ii) 透過空間坐標法或最值幾何分析，找出 $P$ 到平面的最短距離是否大於 $8\\text{ cm}$ 來驗證宣稱。`
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
        content: `設 $\\mathrm{f}(x)=2x^{2}+4mx+8x+2m^{2}+8m+n$，其中 $m$ 及 $n$ 均為實常數使得 $mn<0$。 將 $y=\\mathrm{f}(x)$ 的圖像的頂點記為 $P$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">利用配方法，以 $m$ 及 $n$ 表 $P$ 的坐標。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">描述 $\\mathrm{f}(x)$ 變換為 $\\mathrm{f}\\left(\\dfrac{x}{5}\\right)+7$ 所表示的幾何意義。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">將 $y=\\mathrm{f}\\left(\\dfrac{x}{5}\\right)+7$ 的圖像的頂點記為 $Q$。 設 $(a_1, b_1)$ 及 $(a_2, b_2)$ 分別為 $P$ 及 $Q$ 的坐標。 已知 $a_1, 1+n, a_2$ 為一等差數列及 $b_1, 4-m, b_2$ 為一等比數列。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $P$ 及 $Q$ 的坐標。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">點 $R$ 及點 $S$ 的坐標分別為 $(3t+27, t)$ 及 $(3t+3, 2t-3)$，其中 $t$ 為一實數。 $PQRS$ 有沒有可能為一菱形？ 試解釋你的答案。<br><span class="marks">(8分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 將 $x$ 的項分組提取 $2$ 後配方；(b) $x \\to x/5$ 代表橫向伸展至 5 倍，$+7$ 代表向上平移；(c)(i) 根據平移規律寫出 $Q$ 的坐標，利用等差中項及等比中項公式建立方程組求解；(c)(ii) 菱形的對角線必須互相垂直，檢查斜率乘積是否可能為 $-1$。`,
        solution: `(a) $f(x) = 2[x + (m+2)]^2 + n - 8$。故 $P = (-m-2, n-8)$。<br>(b) 將圖像沿 $x$ 軸向外伸展至原來的 $5$ 倍，再向上平移 $7$ 個單位。<br>(c)(i) 依變換規律 $Q = (5(-m-2), n-8+7) = (-5m-10, n-1)$。利用等差與等比數列性質聯立方程，結合 $mn<0$ 條件，解得 $P$ 與 $Q$ 的坐標。<br>(ii) 計算向量 $PQ$ 與 $RS$ 的關係，若為菱形則對角線垂直且平分，經分析斜率及中點性質，若無解則代表不可能。`
    }
);
