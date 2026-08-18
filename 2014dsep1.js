// 2014dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2014-DSE-MATH-CP1-Q01",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `化簡 $\\dfrac{(xy^{-2})^3}{y^4}$，並以正指數表示答案。 <span class="marks">(3分)</span>`,
        hint: `先展開分子指數，再應用指數定律。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{(xy^{-2})^3}{y^4}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x^3 y^{-6}}{y^4}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x^3}{y^{4-(-6)}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x^3}{y^{10}}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q02",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$a^2 - 2a - 3$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$ab^2 + b^2 + a^2 - 2a - 3$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 十字相乘。 <br>(b) 分組因式分解。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $a^2-2a-3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(a+1)(a-3)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $ab^2+b^2+a^2-2a-3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=ab^2+b^2+(a+1)(a-3)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=b^2(a+1)+(a+1)(a-3)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(a+1)(b^2+a-3)$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q03",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">將 $123.45$ 上捨入至一位有效數字。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">將 $123.45$ 捨入至最接近的整數。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">將 $123.45$ 下捨入至一位小數。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `分別應用上捨入、四捨五入及下捨入規則。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">200</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">123</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">123.4</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q04",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 1,
        content: `下表顯示一些學生擁有計算機的數目的分佈。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">計算機的數目</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">0</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">學生人數</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">7</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">14</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">15</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
    </tr>
  </table>求上述分佈的中位數、眾數及標準差。 <span class="marks">(3分)</span>`,
        hint: `先求總人數，再求中位數、眾數，最後用公式求標準差。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">中位數 $=1$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">眾數 $=2$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">標準差 $\\approx 0.888819441 \\approx 0.889$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q05",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `考慮公式 $2(3m+n) = m+7$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">令 $n$ 成為上述公式的主項。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若 $m$ 的值增加 $2$，寫出 $n$ 的值的改變。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 解出 $n$。 <br>(b) 代入新 $m$ 值比較。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$2(3m+n)=m+7$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$6m+2n=m+7$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n=\\dfrac{7-5m}{2}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>$2(3m+n)=m+7$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$3m+n=\\dfrac{m+7}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n=\\dfrac{7-5m}{2}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $n$ 的值的減少</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=5$</div><div class="ms-mark">1M</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q06",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `某玩具的標價為 $\\$255$。 該玩具現以其標價六折售出。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該玩具的售價。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若盈利百分率為 $2\\%$，求該玩具的成本。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 標價 $\\times 0.6$。 <br>(b) 售價 $= $ 成本 $\\times 1.02$。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    該玩具的售價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=255(60\\%)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\$153$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $\\$x$ 為該玩具的成本。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(1+2\\%)x=153$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=150$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該玩具的成本為 $\\$150$。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q07",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: `設 $\\mathrm{f}(x) = 4x^3 - 5x^2 - 18x + c$，其中 $c$ 為一常數。 當 $\\mathrm{f}(x)$ 除以 $x-2$ 時，餘數為 $-33$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$x+1$ 是否 $\\mathrm{f}(x)$ 的因式？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱方程 $\\mathrm{f}(x)=0$ 所有的根均為有理數。 你是否同意？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 先求 $c$，再用因式定理檢查。 <br>(b) 因式分解後檢查根。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\mathrm{f}(2)=-33$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$4(2)^3-5(2)^2-18(2)+c=-33$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c=-9$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $\\mathrm{f}(-1)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=4(-1)^3-5(-1)^2-18(-1)-9$<br>$=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$x+1$ 是 $\\mathrm{f}(x)$ 的因式。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{f}(x)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$4x^3-5x^2-18x-9=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(x+1)(4x^2-9x-9)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(x+1)(x-3)(4x+3)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=-1$ 、 $x=3$  或  $x=-\\dfrac{3}{4}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意  $-1$ 、 $3$  及  $-\\dfrac{3}{4}$  均為有理數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q08",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 1,
        content: `點 $P$ 及點 $Q$ 的坐標分別為 $(-3, 5)$ 及 $(2, -7)$。 $P$ 繞原點 $O$ 逆時針方向旋轉 $270^\\circ$ 至 $P'$。 $Q$ 向左平移 $21$ 單位至 $Q'$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $P'$ 及 $Q'$ 的坐標。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">證明 $PQ$ 垂直於 $P'Q'$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 應用旋轉及平移公式。 <br>(b) 計算斜率乘積。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$P'$ 的坐標為 $(5,3)$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$Q'$ 的坐標為 $(-19,-7)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $PQ$ 的斜率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5+7}{-3-2}$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{-12}{5}$ ......<sup>#</sup></div><div class="ms-mark">1A<sup>#</sup></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $P'Q'$ 的斜率<br>$=\\dfrac{3+7}{5+19}$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{12}$ ......<sup>#</sup></div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">故此，$PQ$ 的斜率與 $P'Q'$ 的斜率之積為 $-1$。</div><div class="ms-mark">1</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$PQ$ 垂直於 $P'Q'$。</div><div class="ms-mark"></div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q09",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: `圖中，$D$ 為 $AC$ 上的一點使得 $\\angle BAC = \\angle CBD$。<img src="img/2014dsep1q09.jpg" class="q-img" alt="題目附圖" style="max-width: 90%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ABC \\sim \\Delta BDC$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $AC = 25\\text {cm}$ 、 $BC = 20\\text {cm}$ 及 $BD = 12\\text {cm}$。 $\\Delta BCD$ 是否一直角三角形？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用 AA 相似。 <br>(b) 用畢氏定理檢查。 `,
        solution: `<div class="ms-container"><div class="ms-row" style="white-space: pre; overflow-x: visible; overflow-y: visible;"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2" style="white-space: pre; overflow-x: visible; overflow-y: visible; grid-column: 2 / 6;">在 $\\Delta ABC$ 及 $\\Delta BDC$ 中，<br>$\\angle BAC=\\angle BDC$\t[已知]<br>$\\angle ACB=\\angle BCD$\t[公共角]<br>$\\angle ABC=\\angle BDC$\t[$\\Delta$內角和]<br>$\\Delta ABC\\sim\\Delta BDC$\t(AAA)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\dfrac{CD}{BC}=\\dfrac{BC}{AC}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{CD}{20}=\\dfrac{20}{25}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$CD=16\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $BD^2+CD^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=12^2+16^2$<br>$=20^2$<br>$=BC^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$\\Delta BCD$ 是一直角三角形。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q10",
        year: 2014,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Number and Cardinality"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 2,
        content: `$X$ 城與 $Y$ 城相距 $80\\text {km}$。 圖中顯示在某上午 7:30 至 9:30 期間，在 $X$ 城與 $Y$ 城之間的同一直路上汽車 $A$ 及汽車 $B$ 行駛的圖像。 汽車 $A$ 在該期間以恆速率行駛。 汽車 $B$ 於該上午 8:15 停下。<img src="img/2014dsep1q10zh.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求於該上午 8:15 汽車 $A$ 與 $X$ 城間之距離。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">在該上午 7:30 之後，汽車 $A$ 與汽車 $B$ 於甚麼時間首次相遇？<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">汽車 $B$ 的司機宣稱在該上午 8:15 至 9:30 期間，汽車 $B$ 的平均速率較汽車 $A$ 高。 你是否同意？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 從圖像讀取。 <br>(b) 求兩線交點時間。 <br>(c) 比較平均速率。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    於該上午 8:15 汽車 A 與 X 城間之距離</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{45}{120}(80)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=30\\text{ km}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">假定汽車 A 與汽車 B 於該上午 7:30 之後 $t$ 分鐘首次相遇。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{t}{120}=\\dfrac{44}{80}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$t=66$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，汽車 A 與汽車 B 於該上午 8:36 首次相遇。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">在該上午 8:15 至 9:30 期間，汽車 B 行駛 36 km，而汽車 A 行駛多於 36 km。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，汽車 A 的平均速率較汽車 B 高。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>汽車 A 在該上午 8:15 至 9:30 期間的平均速率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{80-30}{1.25}$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{50}{1.25}$<br>$=40\\text{ km/h}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    汽車 B 在該上午 8:15 至 9:30 期間的平均速率<br>$=\\dfrac{80-44}{1.25}$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{36}{1.25}$<br>$=28.8\\text{ km/h}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">留意 $40&gt;28.8$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，汽車 A 的平均速率較汽車 B 高。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q11",
        year: 2014,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 1,
        content: `某畫廊內有 $33$ 幅油畫。 下面的框線圖顯示該畫廊內的油畫的價錢（以千元為單位）的分佈。 已知這分佈的平均值為 $53$ 千元。<img src="img/2014dsep1q11zh.jpg" class="q-img" alt="題目附圖" style="max-width: 80%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求上述分佈的分佈域及四分位數間距。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">現將價錢（以千元為單位）分別為 $32$、$34$、$58$ 及 $59$ 的四幅油畫捐贈給一博物館。 求該畫廊內餘下的油畫的價錢的平均值及中位數。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 全距及 IQR。 <br>(b) 重新計算總和及中位數位置。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    分佈域</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=91-18$ ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=73$ 千元</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    四分位數間距<br>$=63-42$ ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=21$ 千元</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    該畫廊內餘下的油畫的價錢的平均值</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{(33)(53)-32-34-58-59}{33-4}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1566}{29}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=54$ 千元</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">留意 32 及 34 均小於 55。<br>再者留意 58 及 59 均大於 55。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">該畫廊內餘下的油畫的價錢的中位數 $=55$ 千元</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q12",
        year: 2014,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Loci", "Coordinate Geometry"],
        difficulty: 2,
        content: `圓 $C$ 通過點 $A(6,11)$ 且 $C$ 的圓心為點 $G(0,3)$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $C$ 的方程。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$P$ 為直角坐標平面上的一動點使得 $AP = GP$。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $\\mathit{\\Gamma}$ 的方程。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">描述 $\\mathit{\\Gamma}$ 與線段 $AG$ 之間的幾何關係。 </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">若 $\\mathit{\\Gamma}$ 與 $C$ 相交於 $Q$ 及 $R$，求四邊形 $AQGR$ 的周界。 <br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用圓心及半徑求方程。 <br>(b) 垂直平分線；求交點後計算周界。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $C$ 的半徑</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{(6-0)^2+(11-3)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=10$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$C$ 的方程為 $x^2+(y-3)^2=10^2$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">設 $(x,y)$ 為 $P$ 的坐標。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sqrt{(x-0)^2+(y-3)^2}=\\sqrt{(x-6)^2+(y-11)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$3x+4y-37=0$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$\\mathit{\\Gamma}$ 的方程為 $3x+4y-37=0$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解：</span><br>    $AG$ 的斜率<br>$=\\dfrac{11-3}{6-0}=\\dfrac{4}{3}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\mathit{\\Gamma}$ 的斜率為 $\\dfrac{-3}{4}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">再者留意 $AG$ 的中點為 $(3,7)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\mathit{\\Gamma}$ 的方程為<br>$y-7=\\dfrac{-3}{4}(x-3)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$3x+4y-37=0$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">$\\mathit{\\Gamma}$ 為線段 $AG$ 的垂直平分線。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(iii)</div><div class="ms-content ms-from-l3">    四邊形 $AQGR$ 的周界</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=4(10)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=40$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q13",
        year: 2014,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations", "Functions and Graphs"],
        difficulty: 1,
        content: `已知 $\\mathrm{f}(x)$ 為兩部分之和，一部分隨 $x^2$ 正變，而另一部分為常數。 假定 $\\mathrm{f}(2)=59$ 及 $\\mathrm{f}(7)=-121$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{f}(6)$。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$A(6, a)$ 及 $B(-6, b)$ 均為 $y=\\mathrm{f}(x)$ 的圖像上的點。 求 $\\Delta ABC$ 的面積，其中 $C$ 為 $x$ 軸上的一點。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $f(x)=Ax^2+B$，代入求係數。 <br>(b) 求 $a$、$b$ 後計算三角形面積。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{f}(x)=px^2+q$，其中 $p$ 及 $q$ 均為非零的常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得  $4p+q=59$  及  $49p+q=-121$ 。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得  $p=-4$  及  $q=75$ 。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，可得 $\\mathrm{f}(x)=75-4x^2$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{f}(6)=-69$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">藉 (a)，可得 $a=-69$。 ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $\\mathrm{f}(x)=75-4x^2$，可得 $\\mathrm{f}(-6)=\\mathrm{f}(6)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $b=-69$。 ......<sup>@</sup></div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">   $AB$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=6-(-6)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=12$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    $\\Delta ABC$ 的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{(12)(69)}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=414$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q14",
        year: 2014,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `圖中顯示一容器，其形狀為一平截頭體。 該平截頭體是從一底半徑為 $72\\text {cm}$ 及高為 $96\\text {cm}$ 的倒置直立圓錐體切去其下部分造成。 該容器的高度為 $60\\text {cm}$。 將該容器放在一水平桌上。 現將一些水注入該容器內。 <u>偉明</u>得知該容器內的水深為 $28\\text {cm}$。<img src="img/2014dsep1q14.jpg" class="q-img" alt="題目附圖" style="max-width: 75%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該容器被浸濕的曲面面積，答案以 $\\pi$ 表示。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content"><u>偉明</u>宣稱該容器內的水的體積大於 $0.1\\text {m}^3$。 你是否同意？ 試解釋你的答案。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用相似比求浸濕曲面。 <br>(b) 計算水體積並比較。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    圓錐體的斜高</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{72^2+96^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=120\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    該容器被浸濕的曲面面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(72)(120)\\dfrac{(96-60+28)^2-(96-60)^2}{96^2}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(72)(120)\\dfrac{64^2-36^2}{96^2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2\\,625\\pi\\text{ cm}^2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">設 $R\\text{ cm}$ 為水面的半徑，則可得 $\\dfrac{R}{72}=\\dfrac{96-60+28}{96}$。 ......<sup>@</sup></div><div class="ms-mark">1M<sup>@</sup></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，可得 $\\dfrac{R}{72}=\\dfrac{64}{96}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $R=48$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">設 $r\\text{ cm}$ 為倒置直立圓錐體的下部分的底半徑，則可得 $\\dfrac{r}{72}=\\dfrac{96-60}{96}$。 ......<sup>@</sup></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所以，可得 $\\dfrac{r}{72}=\\dfrac{36}{96}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $r=27$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    該容器被浸濕的曲面面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(48)\\sqrt{48^2+64^2}-\\pi(27)\\sqrt{27^2+36^2}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(48)(80)-\\pi(27)(45)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2\\,625\\pi\\text{ cm}^2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    圓錐體的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}\\pi(72)^2(96)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=165\\,888\\pi\\text{ cm}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">    該容器內的水的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=165\\,888\\pi\\bigl(\\dfrac{64^3-36^3}{96^3}\\bigr)$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=40\\,404\\pi\\text{ cm}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 0.126932909\\text{ m}^3$<br>$&gt;0.1\\text{ m}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，同意該宣稱。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>    該容器內的水的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}\\pi(48)^2(64)-\\dfrac{1}{3}\\pi(27)^2(36)$</div><div class="ms-mark">1M+1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=49\\,152\\pi - 8\\,748\\pi$<br>$=40\\,404\\pi\\text{ cm}^3$<br>$\\approx 0.126932909\\text{ m}^3$<br>$> 0.1\\text{ m}^3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q15",
        year: 2014,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: `圖中的圖像顯示 $\\log_4 x$ 與 $\\log_8 y$ 之間的線性關係。 該圖像的斜率及在水平軸上的截距分別為 $\\dfrac{-1}{3}$ 及 $3$。 將 $x$ 與 $y$ 之間的關係表為 $y = Ax^k$ 的形式，其中 $A$ 及 $k$ 均為常數。 <span class="marks">(3分)</span><img src="img/2014dsep1q15.jpg" class="q-img" alt="題目附圖" style="max-width: 55%;">`,
        hint: `寫出直線方程後換底或化簡。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\log_8 y-0=\\dfrac{-1}{3}(\\log_4 x-3)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\log_8 y=\\dfrac{-1}{3}\\log_4 x+1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\log_8 y=\\log_4 x^{\\frac{-1}{3}}+\\log_4 4$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\log_8 y=\\log_44x^{\\frac{-1}{3}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{\\log_2 y}{\\log_2 8}=\\dfrac{\\log_2 4x^{-\\frac{1}{3}}}{\\log_2 4}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\log_2 y=\\dfrac{3}{2}\\log_2 4x^{\\frac{-1}{3}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\log_2 y=\\log_2 8x^{\\frac{-1}{2}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=8x^{\\frac{-1}{2}}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\log_8 y-0=\\dfrac{-1}{3}(\\log_4 x-3)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\log_8 y=\\dfrac{-1}{3}\\log_4 x+1$<br>$\\log_8 y=\\log_4 x^{\\frac{-1}{3}}+\\log_4 4$<br>$\\log_8 y=\\log_4 4x^{\\frac{-1}{3}}$<br>$y=8^{\\log_4 4x^{\\frac{-1}{3}}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=4^{\\frac{3}{2}\\log_4 4x^{\\frac{-1}{3}}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=4^{\\log_4 8x^{\\frac{-1}{2}}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$y=8x^{\\frac{-1}{2}}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q16",
        year: 2014,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `圖中，第 $1$ 個圖案包含 $3$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $2$ 粒點子所組成。 求 $m$ 的最小值使得首 $m$ 個圖案的點子總數超過 $6\\,888$。 <span class="marks">(4分)</span><img src="img/2014dsep1q16.jpg" class="q-img" alt="題目附圖" style="max-width: 65%;">`,
        hint: `寫出通項後求和，解不等式。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">留意圖案的點子數目組成一等差數列。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">    首 $m$ 個圖案的點子總數<br>$=3+5+7+\\cdots+(2m+1)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{m}{2}\\bigl(3+(2m+1)\\bigr)$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=m^2+2m$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1">$m^2+2m&gt;6\\,888$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$m^2+2m-6\\,888&gt;0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$(m-82)(m+84)&gt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$m&lt;-84$  或  $m&gt;82$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，$m$ 的最小值為 83。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q17",
        year: 2014,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)", "Mensuration"],
        difficulty: 3,
        content: `圖 (a) 顯示以長方形為底的實心角錐體 $VABCD$，其中 $AB = 18\\text {cm}$ 、 $BC = 10\\text {cm}$ 、 $VB = VC = 30\\text {cm}$ 及 $\\angle VAB = \\angle VDC = 110^\\circ$。<img src="img/2014dsep1q17zh.jpg" class="q-img" alt="題目附圖" style="max-width: 95%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\angle VBA$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$P$、$Q$、$M$ 及 $N$ 分別為 $AB$、$CD$、$VB$ 及 $VC$ 的中點。 從 $VABCD$ 切去 $PBCQNM$ 造成一幾何模型，如圖 (b) 所示。 某工匠宣稱梯形 $PQNM$ 的面積小於 $70\\text {cm}^2$。 你是否同意？ 試解釋你的答案。 <span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用餘弦公式。 <br>(b) 求梯形各邊及高後計算面積。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">藉正弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{\\sin\\angle AVB}{AB}=\\dfrac{\\sin\\angle VAB}{VB}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{\\sin\\angle AVB}{18}=\\dfrac{\\sin 110^\\circ}{30}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle AVB\\approx 34.32008291^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle VBA\\approx 180^\\circ-110^\\circ-34.32008291^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle VBA\\approx 35.67991709^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle VBA\\approx 35.7^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">藉餘弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$MP^2=BP^2+BM^2-2(BP)(BM)\\cos\\angle VBA$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$MP^2\\approx 9^2+15^2-2(9)(15)\\cos 35.67991709^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$MP\\approx 9.310329519\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$MN=\\dfrac{BC}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$MN=5\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">留意 $MP=NQ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">設 $h\\text{ cm}$ 為梯形 $PQNM$ 的高。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$h=\\sqrt{MP^2-\\left(\\dfrac{PQ-MN}{2}\\right)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$h\\approx\\sqrt{9.310329519^2-\\left(\\dfrac{10-5}{2}\\right)^2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$h\\approx 8.968402074$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    梯形 $PQNM$ 的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{h(MN+PQ)}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx\\dfrac{(8.968402074)(5+10)}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 67.26301555\\text{ cm}^2$<br>$&lt;70\\text{ cm}^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，同意該宣稱。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>藉餘弦公式，可得</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$MP^2 = BP^2 + BM^2 - 2(BP)(BM)\\cos \\angle VBA$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$MP^2 \\approx 9^2 + 15^2 - 2(9)(15)\\cos 35.67991709^\\circ$<br>$MP \\approx 9.310329519\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$MN = \\dfrac{BC}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$MN = 5\\text{ cm}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$\\cos \\angle MPQ = \\dfrac{\\frac{PQ - MN}{2}}{PM}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\cos \\angle MPQ \\approx \\dfrac{\\frac{10 - 5}{2}}{9.310329519}$<br>$\\angle MPQ \\approx 74.42384466^\\circ$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">留意 $MP = NQ$ 。<br>設 $h\\text{ cm}$ 為梯形 $PQNM$ 的高。<br>$\\dfrac{h}{MP} = \\sin \\angle MPQ$<br>$\\dfrac{h}{9.310329519} \\approx \\sin 74.42384466^\\circ$<br>$h \\approx 8.968402074$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">    梯形 $PQNM$ 的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$= h(MN) + \\dfrac{1}{2}(MP)(BC - MN)\\sin \\angle MPQ$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx (8.968402074)(5) + \\dfrac{1}{2}(9.310329519)(10 - 5)\\sin 74.42384466^\\circ$<br>$\\approx 67.26301555\\text{ cm}^2$<br>$< 70\\text{ cm}^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q18",
        year: 2014,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities in Two Unknowns", "Linear Programming"],
        difficulty: 3,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">圖中，直線 $L_1$ 的方程為 $6x+7y=900$ 及直線 $L_2$ 的 $x$ 截距為 $180$。 $L_1$ 與 $L_2$ 相交於點 $(45, 90)$。 陰影區域（包括邊界在內）表示某不等式組的解。 求該不等式組。 <span class="marks">(4分)</span><img src="img/2014dsep1q18a.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某工廠生產 $X$ 及 $Y$ 兩款衣櫃。 每個 $X$ 衣櫃需 $6$ 工時裝嵌及 $2$ 工時包裝，而每個 $Y$ 衣櫃需 $7$ 工時裝嵌及 $3$ 工時包裝。 在某月，該工廠有 $900$ 工時可作裝嵌及 $360$ 工時可作包裝。 生產一個 $X$ 衣櫃及一個 $Y$ 衣櫃的利潤分別為 $\\$440$ 及 $\\$665$。 某工人宣稱該月的總利潤可超過 $\\$80\\,000$。 你是否同意？ 試解釋你的答案。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 從圖像讀取不等式。 <br>(b) 建立線性規劃模型求最大利潤。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$L_2$ 的斜率 $=\\dfrac{90-0}{45-180}=\\dfrac{-2}{3}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$L_2$ 的方程為</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$y-90=-\\dfrac{2}{3}(x-45)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2x+3y-360=0$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">因此，該不等式組為 $\\begin{cases}6x+7y\\le 900\\\\2x+3y\\le 360\\\\x\\ge 0\\\\y\\ge 0\\end{cases}$ 。</div><div class="ms-mark">1M+1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $x$ 及 $y$ 分別為在該月生產 $X$ 衣櫃及 $Y$ 衣櫃的數目。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">現約束條件為  $6x+7y\\le 900$  及  $2x+3y\\le 360$ ，其中 $x$ 及 $y$ 均為非負的整數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">將生產衣櫃的總利潤記為 $\\$P$，則可得 $P=440x+665y$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意在圖中陰影區域的頂點為點 $(0,0)$、$(0,120)$、$(45,90)$ 及 $(150,0)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">在點 $(0,0)$，可得 $P=(440)(0)+(665)(0)=0$。<br>在點 $(0,120)$，可得 $P=(440)(0)+(665)(120)=79\\,800$。<br>在點 $(45,90)$，可得 $P=(440)(45)+(665)(90)=79\\,650$。<br>在點 $(150,0)$，可得 $P=(440)(150)+(665)(0)=66\\,000$。</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，最大可取總利潤為 $\\$79\\,800$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br>設 $x$ 及 $y$ 分別為在該月生產 $X$ 衣櫃及 $Y$ 衣櫃的數目。<br>現約束條件為  $6x+7y\\le 900$  及  $2x+3y\\le 360$ ，其中 $x$ 及 $y$ 均為非負的整數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">將生產衣櫃的總利潤記為 $\\$P$ ，則可得 $P=440x+665y$ 。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">在圖上繪畫直線 $88x+133y=k$ ，其中 $k$ 為一常數。</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">現知 $P$ 在點 $(0,120)$ 達至最大值。<br>故此，最大可取總利潤為 $\\$79\\,800$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，不同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q19",
        year: 2014,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability", "Permutations and Combinations"],
        difficulty: 3,
        content: `<u><u>佩玲</u></u>及<u>志偉</u>參與一含兩回合的遊戲。 在第一回合，<u>佩玲</u>及<u>志偉</u>輪流投擲一枚勻稱骰子。 首位擲得點數「3」的參與者勝出第一回合。 <u>佩玲</u>及<u>志偉</u>參與第一回合，直至其中一人勝出為止。 <u>佩玲</u>首先投擲骰子。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求<u>佩玲</u>勝出該遊戲第一回合的概率。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">在該遊戲的第二回合，球被逐一投入某部由八個管子並列所組成的裝置內（見圖）。 當球被投入該裝置時，它會隨機跌進其中一管子內。 每個管子最多可容納三個球。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 3em; border-top: none;">
      <col style="width: 3em; border-top: none;">
	  <col style="width: 3em; border-top: none;">
	  <col style="width: 3em; border-top: none;">
      <col style="width: 3em; border-top: none;">
      <col style="width: 3em; border-top: none;">
      <col style="width: 3em; border-top: none;">
      <col style="width: 3em; border-top: none;">
    </colgroup>
    <tr>
      <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
    </tr>
</table>這回合的參與者採納下列兩個選項中的一個。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; width: 100%; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 5em;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="border: 0px; text-align: left; vertical-align: top; padding: 3px 0px;">選項 1：</td>
      <td style="border: 0px; text-align: left; vertical-align: top; padding: 3px 0px;">將兩個球逐一投入該裝置內。 若該兩個球跌進同一管子內，則該參與者獲 $10$ 個代幣； 若該兩個球跌進兩個相鄰的管子內，則該參與者獲 $5$ 個代幣； 否則，該參與者不獲代幣。</td>
    </tr>
    <tr>
      <td style="border: 0px; text-align: left; vertical-align: top; padding: 3px 0px;">選項 2：</td>
      <td style="border: 0px; text-align: left; vertical-align: top; padding: 3px 0px;">將三個球逐一投入該裝置內。 若該三個球跌進同一管子內，則該參與者獲 $50$ 個代幣； 若該三個球跌進三個相鄰的管子內，則該參與者獲 $10$ 個代幣； 若該三個球跌進兩個相鄰的管子內，則該參與者獲 $5$ 個代幣； 否則，該參與者不獲代幣。</td>
    </tr>
  </table></div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">若第二回合的參與者採納選項 1，求所獲代幣的數目的期望值。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">第二回合的參與者應採納哪一選項才使所獲代幣的數目的期望值達至最大？ 試解釋你的答案。 </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">只有第一回合的勝方參與第二回合。 已知第二回合的參與者採納能使所獲代幣的數目的期望值達至最大的選項。 <u>志偉</u>宣稱<u>佩玲</u>在該遊戲中不獲代幣的概率超過 $0.9$。 該宣稱是否正確？ 試解釋你的答案。 <br><span class="marks">(10分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 無限幾何級數求概率。 <br>(b) 計算各選項期望值後比較，再結合第一回合概率。 `,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{6}+\\left(\\dfrac{5}{6}\\right)\\left(\\dfrac{5}{6}\\right)\\left(\\dfrac{1}{6}\\right)+\\left(\\dfrac{5}{6}\\right)\\left(\\dfrac{5}{6}\\right)\\left(\\dfrac{5}{6}\\right)\\left(\\dfrac{1}{6}\\right)+\\cdots$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{6}+\\left(\\dfrac{1}{6}\\right)\\left(\\dfrac{25}{36}\\right)+\\left(\\dfrac{1}{6}\\right)\\left(\\dfrac{25}{36}\\right)^2+\\cdots$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{\\frac{1}{6}}{1-\\frac{25}{36}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{6}{11}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span></div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">設 $p$ 為<u>佩玲</u>勝出該遊戲第一回合的概率，則<u>志偉</u>勝出該遊戲第一回合的概率為 $\\dfrac{5p}{6}$ 。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$p+\\dfrac{5p}{6}=1$</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{11p}{6}=1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$p=\\dfrac{6}{11}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的概率為 $\\dfrac{6}{11}$ 。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">假定第二回合的參與者採納選項 1。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    獲 10 個代幣的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=(1)\\left(\\dfrac{1}{8}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{1}{8}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    獲 5 個代幣的概率<br>$=\\dfrac{(7)(P_2^2)}{8^2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{7}{32}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">    所獲代幣的數目的期望值</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=(10)\\left(\\dfrac{1}{8}\\right)+(5)\\left(\\dfrac{7}{32}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{75}{32}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">假定第二回合的參與者採納選項 2。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    獲 50 個代幣的概率<br>$=(1)\\left(\\dfrac{1}{8}\\right)\\left(\\dfrac{1}{8}\\right)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{1}{64}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    獲 10 個代幣的概率<br>$=\\dfrac{(6)(P_3^3)}{8^3}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{9}{128}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    獲 5 個代幣的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\left(2\\right)\\left(\\dfrac{1}{8}\\right)^2\\left(\\dfrac{1}{8}\\right)+\\left(6\\right)\\left(\\dfrac{1}{8}\\right)^2\\left(\\dfrac{2}{8}\\right)+\\left(\\dfrac{7}{32}\\right)\\left(\\dfrac{2}{8}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{21}{256}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    所獲代幣的數目的期望值<br>$=(50)\\left(\\dfrac{1}{64}\\right)+(10)\\left(\\dfrac{9}{128}\\right)+(5)\\left(\\dfrac{21}{256}\\right)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{485}{256}$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\dfrac{75}{32}&gt;\\dfrac{485}{256}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，第二回合的參與者應採納選項 1。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num2">(iii)</div><div class="ms-content ms-from-l3">    <u>佩玲</u>不獲代幣的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=1-\\left(\\dfrac{6}{11}\\right)\\left(\\dfrac{1}{8}+\\dfrac{7}{32}\\right)$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{13}{16}$<br>$=0.8125$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$&lt;0.9$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解：</span><br>    <u>佩玲</u>不獲代幣的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\left(\\dfrac{6}{11}\\right)\\left(1-\\dfrac{1}{8}-\\dfrac{7}{32}\\right)+\\dfrac{5}{11}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{13}{16}$<br>$=0.8125$<br>$< 0.9$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div></div>`
    }
);
