// 2025dsep1.js
// 這是主檔案，負責宣告全域變數
window.questions = []; 

// 您可以在這裡放第一批題目
questions.push(
    {
        id: "2025-DSE-MATH-CP1-Q01",
        year: 2025,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `化簡 $\\dfrac{(x^{4}y^{-5})^{3}}{xy^{2}}$，並以正指數表示答案。<span class="marks">(3分)</span>`,
        hint: `先處理分子括號外的次方 $(a^m)^n = a^{mn}$，再利用指數定律化簡乘除法。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{(x^4 y^{-5})^3}{xy^2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x^{12}y^{-15}}{xy^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=x^{12-1}y^{-15-2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x^{11}}{y^{17}}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q02",
        year: 2025,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 1,
        content: `化簡 $\\dfrac{1}{3d-4} - \\dfrac{2}{6d+5}$。<span class="marks">(3分)</span>`,
        hint: `通分母後通分化簡分子。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{1}{3d-4}-\\dfrac{2}{6d+5}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{(6d+5)-2(3d-4)}{(3d-4)(6d+5)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{6d+5-6d+8}{(3d-4)(6d+5)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{13}{(3d-4)(6d+5)}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q03",
        year: 2025,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns", "Rates, Ratios and Proportions"],
        difficulty: 1,
        content: `設 $m$ 及 $n$ 為兩數。 $2m$ 與 $3n$ 之和為 $999$ 而 $m$ 與 $n$ 之比為 $8:7$。 求 $n$。<span class="marks">(3分)</span>`,
        hint: `根據比例設 $m = 8k$ 及 $n = 7k$，或者建立聯立方程組。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">留意 $2m+3n=999$ 及 $7m=8n$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得 $2\\left(\\dfrac{8n}{7}\\right)+3n=999$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">求解後，可得 $n=189$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>$n=\\dfrac{999}{2\\left(\\dfrac{8}{7}\\right)+3}$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=189$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q04",
        year: 2025,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `點 $A$ 的坐標為 $(4,-2)$ 。 $A$ 繞原點順時針方向旋轉 $90^{\\circ}$ 至 $B$ 。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $B$ 的坐標。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $B$ 向上平移 $k$ 單位至點 $C$ 。 若 $A$ 、 $O$ 與 $C$ 共線，求 $k$ 。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `旋轉公式：$(x, y)$ 繞原點順時針旋轉 $90^{\\circ}$ 變為 $(y, -x)$。共線代表斜率相等，即 $m_{OA} = m_{OC}$。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$(-2,-4)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $C$ 的坐標為 $(-2,t-4)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{t-4}{-2}=\\dfrac{-2}{4}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$t-4=1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$t=5$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q05",
        year: 2025,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$10pr-6qr$ ，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$25p^{2}-9q^{2}$ ，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">$25p^{2}-9q^{2}-10pr+6qr$ 。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 抽公因式；(b) 利用平方差公式；(c) 結合前面兩問的結果進行分組分解。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $10pr-6qr$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=2r(5p-3q)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $25p^2-9q^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(5p+3q)(5p-3q)$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">    $25p^2-9q^2-10pr+6qr$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(25p^2-9q^2)-(10pr-6qr)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(5p+3q)(5p-3q)-2r(5p-3q)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=(5p-3q)(5p+3q-2r)$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q06",
        year: 2025,
        type: "P1",
        section: "A1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: `考慮複合不等式 <br><div style="text-align: center;">$\\dfrac{6x+1}{2} < x-8$  或  $3x-21 \\ge 0$  ...............(*)。</div><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">解 (*)。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出滿足 (*) 的最大整數。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `注意複合不等式使用的是「或 (or)」，解出兩個不等式後取其聯集。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{6x+1}{2}&lt;x-8$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$6x+1&lt;2x-16$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$6x-2x&lt;-16-1$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$4x&lt;-17$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x&lt;-\\dfrac{17}{4}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$3x\\le -21$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x\\le -7$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，(*) 的解為 $x&lt;-\\dfrac{17}{4}$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$-5$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q07",
        year: 2025,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `某紀念品的售價為 $378。 該紀念品以其標價四折售出。 該紀念品的標價較其成本高 75%。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該紀念品的標價。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求該紀念品的成本。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">判別售出該紀念品後是獲利還是虧蝕。 試解釋你的答案。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 售價 $=$ 標價 $\\times 0.4$；(b) 標價 $=$ 成本 $\\times (1 + 75\\%)$；(c) 比較售價與成本。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">該紀念品的標價</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{378}{40\\%}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\$945$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">該紀念品的成本</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{945}{1+75\\%}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\$540$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">由於 $540&gt;378$，售出該紀念品後有虧損。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q08",
        year: 2025,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Plane Geometry"],
        difficulty: 2,
        content: `圖中，$ST$ 與 $UV$ 相交於點 $W$ 。 已知 $SU//VT$ 及 $W$ 為 $ST$ 的中點。
<img src="img/2025dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 40%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta SUW \\cong \\Delta TVW$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $X$ 為 $TW$ 上的一點使得 $\\Delta SUW \\sim \\Delta VXW$。 若 $SU = 57\\text{ cm}$、 $SW = 63\\text{ cm}$ 及 $WX = 7\\text{ cm}$，求 $\\Delta TVX$ 的周界。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用平行線的內錯角 (A.A.S. 或 A.S.A.) 證明全等；(b) 運用相似三角形的對應邊成比例求出未知邊長。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\angle SWU=\\angle TWV$ （對頂角）</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$SW=TW$ （已知）</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle USW=\\angle VTW$ （內錯角，$SU // VT$）</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\Delta SUW\\cong\\Delta TVW$ （ASA）</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">留意 $\\Delta SUW\\sim\\Delta VXW$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $\\dfrac{SU}{VX}=\\dfrac{UW}{XW}=\\dfrac{SW}{VW}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">藉 (a)，可得 $UW=VW$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\dfrac{57}{VX}=\\dfrac{7}{VW}=\\dfrac{63}{VW}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $VW=21\\text{ cm}$ 及 $VX=19\\text{ cm}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\Delta TVX$ 的周界</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=TV+VX+TX$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=57+19+(63-7)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=132\\text{ cm}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q09",
        year: 2025,
        type: "P1",
        section: "A1",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 1,
        content: `下表顯示一些學生擁有原子筆的數目的分佈。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">原子筆的數目</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">6</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">7</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">8</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">9</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">學生人數</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">9</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">13</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$s$</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">11</td>
    </tr>
  </table>該分佈的中位數為 $7$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $s$ 的最小可取值。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出 $s$ 的最大可取值。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">求該分佈的最大可取標準差。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `中位數為 $7$ 代表小於或等於 $7$ 的數據個數與大於或等於 $7$ 的數據個數需要滿足中位數的定義限制。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $m$ 為 $s$ 的最小可能值。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$9+13=1+m+11$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$m=10$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$s$ 的最小可能值為 10。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">12</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">有三種情況。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">情況 1：$s=10$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">該分佈的標準差 $\\approx 1.512744216$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">情況 2：$s=11$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">該分佈的標準差 $\\approx 1.502990088$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">情況 3：$s=12$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">該分佈的標準差 $\\approx 1.493307842$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該分佈的最大可能標準差為 1.51。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q10",
        year: 2025,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials"],
        difficulty: 2,
        content: `設 $\\mathrm{f}(x)=2x^{3}+hx^{2}+kx+15$，其中 $h$ 及 $k$ 均為常數。 當 $\\mathrm{f}(x)$ 除以 $x+2$ 時，餘數為 $-45$。 已知 $\\mathrm{f}(x)$ 可被 $2x-5$ 整除。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $h$ 及 $k$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱方程 $\\mathrm{f}(x)=0$ 所有的根均為有理數。 你是否同意？ 試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用餘式定理與因式定理建立聯立方程組：$f(-2) = -45$ 且 $f(2.5) = 0$；(b) 因式分解 $f(x)$ 並檢查其餘二次方程的解是否為有理數。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\mathrm{f}(-2)=-45$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2(-2)^3+h(-2)^2+k(-2)+15=-45$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2h-k+22=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\mathrm{f}\\left(\\dfrac{5}{2}\\right)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2\\left(\\dfrac{5}{2}\\right)^3+h\\left(\\dfrac{5}{2}\\right)^2+k\\left(\\dfrac{5}{2}\\right)+15=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$5h+2k+37=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $h=-9$ 及 $k=4$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{f}(x)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2x^3-9x^2+4x+15=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(2x-5)(x^2-2x-3)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(2x-5)(x+1)(x-3)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">方程 $\\mathrm{f}(x)=0$ 的根為 $\\dfrac{5}{2}$、$-1$ 及 $3$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $\\dfrac{5}{2}$、$-1$ 及 $3$ 均為有理數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，同意該宣稱。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q11",
        year: 2025,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations", "Quadratic Equations in One Unknown"],
        difficulty: 1,
        content: `已知 $\\mathrm{p}(x)$ 的一部分隨 $x$ 正變，而另一部分則隨 $x^2$ 正變。 假定 $\\mathrm{p}(7)=56$ 及 $\\mathrm{p}(9)=216$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{p}(x)$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $c$ 為一實常數。 求 $c$ 值的範圍使得方程 $\\mathrm{p}(x)=c$ 有兩個相異的實根。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $p(x) = ax + bx^2$，代入已知點求出 $a$ 和 $b$；(b) 將方程整理成一元二次方程形式，並利用判別式 $\\Delta > 0$求範圍。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{p}(x)=ax+bx^2$，其中 $a$ 及 $b$ 均為非零常數。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $7a+49b=56$ 及 $9a+81b=216$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $a=-48$ 及 $b=8$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{p}(x)=-48x+8x^2$。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{p}(x)=c$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$-48x+8x^2=c$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$8x^2-48x-c=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於方程 $8x^2-48x-c=0$ 有兩個相異實根，可得</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(-48)^2-4(8)(-c)&gt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c&gt;-72$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q12",
        year: 2025,
        type: "P1",
        section: "A2",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 1,
        content: `下面的幹葉圖顯示一些運動員在訓練前的體重（以 $\\text{kg}$ 為單位）的分佈：
        <table class="q-table" style="border-collapse: collapse; table-layout: auto;" align="center">
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
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">5\t6\t8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$w$\t$w$\t6\t7</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3\t4\t5\t6\t9\t9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0\t2</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">8</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">7</td>
    </tr>
  </table>
上述分佈的分佈域與四分位數間距之差為 $25\\text{ kg}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出上述分佈的分佈域。 由此，求 $w$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">下面的框線圖顯示該些運動員在訓練後的體重（以 kg 為單位）的分佈。</div></div><img src="img/2025dsep1q12b.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求因訓練而引致該分佈的上四分位數的改變。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">該些運動員在訓練後的體重的分佈的離差是否較訓練前的小？ 試解釋你的答案。</div></div><span class="marks">(4分)</span><div class="q-clearfix"></div>`,
        hint: `分佈域 $=$ 最大值 $-$ 最小值。四分位數間距 $= Q_3 - Q_1$。依據二者之差建立關於 $w$ 的方程。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">分佈域 $=42\\text{ kg}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">四分位數間距 $=42-25=17\\text{ kg}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">上四分位數 $=69\\text{ kg}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">下四分位數 $=69-17=52\\text{ kg}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $w=2$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">上四分位數的變化 $=64-69=-5\\text{ kg}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，上四分位數減少了 $5\\text{ kg}$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">訓練前該分佈的分佈域 $=42\\text{ kg}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">訓練後該分佈的分佈域 $=67-46=21\\text{ kg}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，訓練後該分佈的分佈域小於訓練前的分佈域。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，運動員體重的分佈比訓練前較少分散。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解：</span><br>訓練前該分佈的四分位數間距 $=17\\text{ kg}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">訓練後該分佈的四分位數間距 $=64-54=10\\text{ kg}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，訓練後該分佈的四分位數間距小於訓練前的四分位數間距。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，運動員體重的分佈比訓練前較少分散。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q13",
        year: 2025,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Loci", "Coordinate Geometry", "Equations of Straight Lines"],
        difficulty: 3,
        content: `直線 $L$ 分別與正 $x$ 軸及正 $y$ 軸相交於點 $M$ 及點 $N$。 設 $P$ 為直角坐標平面上的一動點使得 $MP=NP$。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。 已知 $\\mathit{\\Gamma}$ 的方程為 $3x-2y-30=0$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">描述 $\\mathit{\\Gamma}$ 與 $MN$ 之間的幾何關係。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $L$ 的方程。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">假定 $\\mathit{\\Gamma}$ 分別與 $L$ 及 $x$ 軸相交於點 $Q$ 及點 $R$。 求四邊形 $ONQR$ 的面積，其中 $O$ 為原點。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 到兩定點距離相等的動點軌跡是該兩點連線的垂直平分線；(b) 求出 $MN$ 的中點及斜率，再利用垂直直線斜率之積為 $-1$求出 $L$ 的方程。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\mathit{\\Gamma}$ 為 $MN$ 的垂直平分線。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $(a,0)$ 及 $(0,b)$ 分別為 $M$ 及 $N$ 的坐標。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$L$ 的斜率為 $-\\dfrac{b}{a}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">藉 (a)，可得 $\\left(-\\dfrac{b}{a}\\right)\\left(\\dfrac{3}{2}\\right)=-1$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $2a=3b$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $MN$ 的中點坐標為 $\\left(\\dfrac{a}{2},\\dfrac{b}{2}\\right)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">藉 (a)，可得 $3\\left(\\dfrac{a}{2}\\right)-2\\left(\\dfrac{b}{2}\\right)-30=0$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $a=36$ 及 $b=24$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$L$ 的方程為 $y-24=-\\dfrac{24}{36}(x-0)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2x+3y-72=0$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">藉 (b)，$N$ 及 $Q$ 的坐標分別為 $(0,24)$ 及 $(18,12)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">設 $k$ 為 $\\mathit{\\Gamma}$ 的 $x$ 截距。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$3k-2(0)-30=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$k=10$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$R$ 的坐標為 $(10,0)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">所求的面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{(24)(18)}{2}+\\dfrac{(10)(12)}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=216+60$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=276$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q14",
        year: 2025,
        type: "P1",
        section: "A2",
        level: ["Junior", "Senior"],
        domain: ["Geometry"],
        topic: ["Areas and Volumes"],
        difficulty: 2,
        content: `一實心金屬直立圓錐體的高及底半徑分別為 $45\\text{ cm}$ 及 $24\\text{ cm}$。 將該圓錐體以一平行於其底的平面分成一圓錐體及一平截頭體 $X$。 已知 $X$ 的高為 $30\\text{ cm}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">以 $\\pi$ 表 $X$ 的體積。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">以 $\\pi$ 表 $X$ 的總表面面積。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">把 $X$ 熔化，並重鑄成一實心正方體。 該正方體的總表面面積是否超過 $X$ 的總表面面積？ 試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `利用相似三角形關係得出小圓錐體的底半徑，然後用「大圓錐體」減去「小圓錐體」求得平截頭體體積及表面積。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $X$ 的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{1}{3}\\pi(24^2)(45)\\left(1-\\left(\\dfrac{45-30}{45}\\right)^3\\right)$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=8640\\pi\\left(1-\\left(\\dfrac{1}{3}\\right)^3\\right)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=8320\\pi\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    $X$ 的總表面面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi(24)\\sqrt{24^2+45^2}\\left(1-\\left(\\dfrac{45-30}{45}\\right)^2\\right)+\\pi(24^2)+\\pi\\left(24\\left(\\dfrac{45-30}{45}\\right)\\right)^2$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1728\\pi\\text{ cm}^2$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(c)</div><div class="ms-content ms-from-l2">設 $x\\text{ cm}$ 為該立方體的邊長。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x^3=8320\\pi$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x\\approx 29.67730087$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">該立方體的總表面面積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 6(29.67730087)^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 5284.453123\\text{ cm}^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$&lt;1728\\pi\\text{ cm}^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，該立方體的總表面面積不超過 $X$ 的總表面面積。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q15",
        year: 2025,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 1,
        content: `某盒子內有 8 隻白色碟、4 隻紅色碟及 1 隻黑色碟。 若從該盒子中隨機同時抽出 3 隻碟，求<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">所抽出 3 隻碟的顏色是相同的概率；<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">所抽出 3 隻碟的顏色是全不相同的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `總碟數為 $13$。同時抽出 $3$ 隻使用組合數 $C_{3}^{13}$。(a) 考慮全白 or 全紅；(b) 白、紅、黑各抽一隻。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_3^8+C_3^4}{C_3^{13}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{30}{143}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br> 所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{\\left(\\dfrac{8}{13}\\right)\\left(\\dfrac{7}{12}\\right)\\left(\\dfrac{6}{11}\\right)+\\left(\\dfrac{4}{13}\\right)\\left(\\dfrac{3}{12}\\right)\\left(\\dfrac{2}{11}\\right)}{1}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{30}{143}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_2^8 C_1^4 C_0^1}{C_3^{13}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{16}{143}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2"><span style="background-color: #42b4ff;">另解：</span><br> 所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=6\\left(\\dfrac{8}{13}\\right)\\left(\\dfrac{4}{12}\\right)\\left(\\dfrac{1}{11}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{16}{143}$</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q16",
        year: 2025,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: `已知 $\\begin{cases}\\log_{3}x+\\log_{3}y=9\\\\[1.2ex] \\log_{x}81-\\log_{y}9=1\\end{cases}$ ，其中 $0 < x < y$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $u = \\log_{3}y$。 證明 $u^2-3u-18=0$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $x$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 由第一式得 $\\log_{3}x = 9 - u$。利用換底公式將第二式的底數轉為 $3$，即 $\\log_x 81 = \\dfrac{4}{\\log_3 x}$ 及 $\\log_y 9 = \\dfrac{2}{u}$。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">留意 $\\log_3 x=9-u$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $\\log_x 81-\\log_y 9=1$，可得 $\\dfrac{\\log_3 81}{\\log_3 x}-\\dfrac{\\log_3 9}{\\log_3 y}=1$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $\\dfrac{4}{\\log_3 x}-\\dfrac{2}{\\log_3 y}=1$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\dfrac{4}{9-u}-\\dfrac{2}{u}=1$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $4u-2(9-u)=u(9-u)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $u^2-3u-18=0$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">藉 (a)，可得 $u=6$ 或 $u=-3$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $\\begin{cases}x=27\\\\y=729\\end{cases}$ 或 $\\begin{cases}x=531441\\\\y=\\dfrac{1}{27}\\end{cases}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $x&lt;y$，可得 $x=27$。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q17",
        year: 2025,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `設 $\\mathrm{T}(n)$ 為一等差數列的第 $n$ 項使得 $\\mathrm{T}(1) \\neq \\mathrm{T}(2)$ 及 $\\mathrm{T}(47)=456$。 已知 $\\mathrm{T}(9)$, $\\mathrm{T}(47)$, $\\mathrm{T}(199)$ 為一等比數列。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{T}(1)$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $n$ 的最小值使得該等差數列的首 $n$ 項之和大於 $10^6$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設首項為 $a$，公差為 $d$。利用等比中項性質 $T(47)^2 = T(9) \\times T(199)$ 求解；(b) 運用等差數列求和公式 $S_n > 10^9$ 建立不等式。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $a$ 及 $d$ 分別為該等差數列的首項及公差。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $a+46d=456$ 及 $\\dfrac{a+46d}{a+8d}=\\dfrac{a+198d}{a+46d}$。</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\dfrac{456}{456-38d}=\\dfrac{456+152d}{456}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $51984d-5776d^2=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $\\mathrm{T}(1)\\ne\\mathrm{T}(2)$，可得 $d=9$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{T}(1)=42$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{T}(1)+\\mathrm{T}(2)+\\mathrm{T}(3)+\\cdots+\\mathrm{T}(n)&gt;10^6$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{n}{2}(2(42)+(n-1)(9))&gt;10^6$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$9n^2+75n-2\\times 10^6&gt;0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n&lt;-475.5896013$ 或 $n&gt;467.256268$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$n$ 的最小值為 468。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q18",
        year: 2025,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra", "Geometry"],
        topic: ["Functions and Graphs", "Coordinate Geometry", "Equations of Circles"],
        difficulty: 3,
        content: `設 $\\mathrm{g}(x)=3x^{2}-6kx+24x+3k^{2}-24k+55$，其中 $k$ 為一正常數。 將 $y=\\mathrm{g}(x)$ 的圖像的頂點記為 $R$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">利用配方法，以 $k$ 表 $R$ 的坐標。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">藉將 $y=\\mathrm{g}(x)$ 的圖像向右平移 6 單位，然後向下平移 10 單位得出 $y=\\mathrm{h}(x)$ 的圖像。 將 $y=\\mathrm{h}(x)$ 的圖像的頂點記為 $S$。 設 $T$ 為一點使得 $\\Delta RST$ 的垂心為原點。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">以 $k$ 表 $T$ 的坐標。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">點 $U$ 的坐標為 $(-5,5)$。 設 $V$ 為 $RS$ 上的一點使得 $TV$ 垂直於 $RS$。 已知 $S$、$T$、$U$ 與 $V$ 共圓。 求 $k$。<span class="marks">(7分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 提取 $3$ 後對 $x$ 項配方；(b)(i) 平移頂點得到 $S$，利用垂心性質求 $T$ 的坐標；(b)(ii) 四點共圓代表 $\angle TUS = 90^{\circ}$，利用垂直直線斜率關係建立方程。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\mathrm{g}(x)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3x^2-6kx+24x+3k^2-24k+55$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3(x^2-2kx+8x)+3k^2-24k+55$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3(x^2-2kx+8x+(k-4)^2-(k-4)^2)+3k^2-24k+55$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=3(x-(k-4))^2+7$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$R$ 的坐標為 $(k-4,7)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">    $S$ 的坐標為 $(k+2,-3)$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $RS$ 垂直於 $OT$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $RS$ 的斜率為 $-\\dfrac{5}{3}$，$OT$ 的斜率為 $\\dfrac{3}{5}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">設 $(5t,3t)$ 為 $T$ 的坐標。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">再留意 $RT$ 垂直於 $OS$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $\\dfrac{3t-7}{5t-(k-4)}\\cdot\\dfrac{-3}{k+2}=-1$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，可得 $t=\\dfrac{k^2-2k-29}{5k+1}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，$T$ 的坐標為 $\\left(\\dfrac{5(k^2-2k-29)}{5k+1},\\dfrac{3(k^2-2k-29)}{5k+1}\\right)$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">    $SU$ 的斜率 $=\\dfrac{-8}{k+7}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">    $TU$ 的斜率 $=\\dfrac{3k^2-31k-92}{5k^2+15k-140}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\angle SVT=90^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $S$、$T$、$U$ 及 $V$ 共圓，可得 $\\angle SUT=90^\\circ$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，可得 $\\dfrac{-8}{k+7}\\cdot\\dfrac{3k^2-31k-92}{5k^2+15k-140}=-1$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $5k^3+26k^2+213k-244=0$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">所以，可得 $(k-1)(5k^2+31k+244)=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解後，可得 $k=1$。</div><div class="ms-mark">1A</div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q19",
        year: 2025,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Equations of Straight Lines", "Trigonometry (2D)"],
        difficulty: 3,
        content: `直線 $L$ 的方程為 $4x-3y+83=0$。 圓 $C$ 的方程為 $x^{2}+y^{2}+ax-2y+b=0$，其中 $a$ 及 $b$ 均為正常數。 已知 $C$ 通過點 $(-10,9)$ 且 $L$ 為 $C$ 的切線。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明方程 $25x^{2}+(9a+640)x+(90a+4924)=0$ 有等根。 由此，求 $a$ 及 $b$。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">點 $P$ 的坐標為 $(-20,1)$。 設 $Q$ 為 $L$ 之下的一點使得 $PQ$ 與 $C$ 相切且 $PQ=25$。 將 $C$ 的圓心記為 $I$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $\\cos \\angle IPQ$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $I$ 與 $Q$ 間的距離，答案以根式表示。</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">設 $R$ 為 $L$ 上的一點使得 $C$ 為 $\\Delta PQR$ 的內切圓。 將 $\\Delta PQR$ 的外接圓的半徑記為 $r$。 某人宣稱 $r > PQ$。 該宣稱是否正確？ 試解釋你的答案。<span class="marks">(8分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 聯立方程由 $\Delta = 0$ 求 $a$ 與 $b$；(b)(i) 切線垂直半徑，在直角三角形中求三角比；(b)(iii) 利用正弦定理 $2r = \\dfrac{PQ}{\\sin\\angle PRQ}$ 評估半徑大小。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">由於 $(-10,9)$ 在 $C$ 上，可得 $10^2+9^2-10a-2(9)+b=0$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $163-10a+b=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">把 $y=\\dfrac{4x+83}{3}$ 代入 $x^2+y^2+ax-2y+b=0$，</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">可得 $25x^2+(9a+640)x+(90a+4924)=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $L$ 為 $C$ 的切線，上式有等根。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $(9a+640)^2-4(25)(90a+4924)=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $9a^2+280a-9200=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">由於 $a&gt;0$ 及 $b&gt;0$，可得 $a=20$ 及 $b=37$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">由於 $I$ 的坐標為 $(-10,1)$，$IP$ 為水平線。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $P$ 在 $L$ 上且 $Q$ 在 $L$ 下方，可得 $\\tan\\angle IPQ=\\dfrac{4}{3}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，可得 $\\cos\\angle IPQ=\\dfrac{3}{5}$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">留意 $IP=10$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">藉餘弦公式，可得</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$IQ^2=IP^2+PQ^2-2(IP)(PQ)\\cos\\angle IPQ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$IQ^2=10^2+25^2-2(10)(25)\\left(\\dfrac{3}{5}\\right)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$IQ^2=425$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$IQ=5\\sqrt{17}$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，所求的距離為 $5\\sqrt{17}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-num2">(iii)</div><div class="ms-content ms-from-l3">藉正弦公式，可得</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{\\sin\\angle IQP}{IP}=\\dfrac{\\sin\\angle IPQ}{IQ}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\sin\\angle IQP=\\dfrac{4}{5\\sqrt{17}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle IQP\\approx 22.83365418^\\circ$ 或 $\\angle IQP\\approx 157.1663458^\\circ$（捨去）</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">設 $G$ 為 $\\Delta PQR$ 的外心。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $\\angle QGR=360^\\circ-2(2\\angle IPQ)\\approx 147.4795905^\\circ$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\angle GQP=\\dfrac{180^\\circ-\\angle QGR}{2}+2\\angle IQP\\approx 61.92751306^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $\\cos\\angle GQP=\\dfrac{PQ}{2r}$，可得 $r=\\dfrac{PQ}{2\\cos\\angle GQP}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $60^\\circ&lt;\\angle GQP&lt;90^\\circ$，可得 $0&lt;2\\cos\\angle GQP&lt;1$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，可得 $r&gt;PQ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，該宣稱正確。</div><div class="ms-mark">1A</div></div></div>`
    }
);
