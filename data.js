// data.js
// 這是主檔案，負責宣告全域變數
window.questions = []; 

// 您可以在這裡放第一批題目
questions.push(
    {
        id: "2025-DSE-MATH-CP1-Q01",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `化簡 $\\dfrac{(x^{4}y^{-5})^{3}}{xy^{2}}$，並以正指數表示答案。`,
        hint: `先處理分子括號外的次方 $(a^m)^n = a^{mn}$，再利用指數定律化簡乘除法。`,
        solution: `原式 $= \\dfrac{x^{12}y^{-15}}{xy^2} = \\dfrac{x^{12-1}}{y^{2-(-15)}} = \\dfrac{x^{11}}{y^{17}}$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q02",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 1,
        content: `化簡 $\\dfrac{1}{3d-4} - \\dfrac{2}{6d+5}$。`,
        hint: `通分母後通分化簡分子。`,
        solution: `原式 $= \\dfrac{(6d+5) - 2(3d-4)}{(3d-4)(6d+5)} = \\dfrac{6d+5-6d+8}{(3d-4)(6d+5)} = \\dfrac{13}{(3d-4)(6d+5)}$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q03",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns", "Rates, Ratios and Proportions"],
        difficulty: 2,
        content: `設 $m$ 及 $n$ 為兩數。 $2m$ 與 $3n$ 之和為 $999$ 而 $m$ 與 $n$ 之比為 $8:7$ 。求 $n$ 。`,
        hint: `根據比例設 $m = 8k$ 及 $n = 7k$，或者建立聯立方程組。`,
        solution: `設 $m = 8k$, $n = 7k$。由題意知 $2(8k) + 3(7k) = 999 \\Rightarrow 16k + 21k = 999 \\Rightarrow 37k = 999 \\Rightarrow k = 27$。故 $n = 7(27) = 189$。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q04",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `點 $A$ 的坐標為 $(4,-2)$ 。 $A$ 繞原點順時針方向旋轉 $90^{\\circ}$ 至 $B$ 。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $B$ 的坐標。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $B$ 向上平移 $k$ 單位至點 $C$ 。若 $A$ 、 $O$ 與 $C$ 共線，求 $k$ 。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `旋轉公式：$(x, y)$ 繞原點順時針旋轉 $90^{\\circ}$ 變為 $(y, -x)$。共線代表斜率相等，即 $m_{OA} = m_{OC}$。`,
        solution: `(a) $B = (-2, -4)$<br>(b) $C = (-2, -4+k)$。因為 $A(4,-2)$、$O(0,0)$、$C$ 共線，所以 $\\dfrac{-2-0}{4-0} = \\dfrac{-4+k-0}{-2-0} \\Rightarrow -\\dfrac{1}{2} = \\dfrac{-4+k}{-2} \\Rightarrow 1 = -4+k \\Rightarrow k = 5$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q05",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$10pr-6qr$<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$25p^{2}-9q^{2}$<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">$25p^{2}-9q^{2}-10pr+6qr$<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 抽公因式；(b) 利用平方差公式；(c) 結合前面兩問的結果進行分組分解。`,
        solution: `(a) $2r(5p-3q)$<br>(b) $(5p+3q)(5p-3q)$<br>(c) $(5p+3q)(5p-3q) - 2r(5p-3q) = (5p-3q)(5p+3q-2r)$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q06",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: `考慮複合不等式 $\\dfrac{6x+1}{2} < x-8$ 或 $3x-21 \\ge 0$ …… $(*)$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">解 $(*)$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出滿足 $(*)$ 的最大整數。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `注意複合不等式使用的是「或 (or)」，解出兩個不等式後取其聯集。`,
        solution: `(a) 解第一個：$6x+1 < 2x-16 \\Rightarrow 4x < -17 \\Rightarrow x < -4.25$；解第二個：$3x \\ge 21 \\Rightarrow x \\ge 7$。因此 $(*)$ 的解為 $x < -4.25$ 或 $x \\ge 7$。<br>(b) 由於解區間在 $-4.25$ 以下或 $7$ 以上，在 $x < -4.25$ 的部分最大整數為 $-5$，但整個解包含 $x \\ge 7$ 的無窮大區域。依字面解區間向正無窮延伸，並無最大整數。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q07",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: `某紀念品的售價為 \$378 。該紀念品以其標價四折售出。該紀念品的標價較其成本高 $75\\%$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該紀念品的標價。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求該紀念品的成本。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">判別售出該紀念品後是獲利還是虧蝕。試解釋你的答案。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 售價 $=$ 標價 $\\times 0.4$；(b) 標價 $=$ 成本 $\\times (1 + 75\\%)$；(c) 比較售價與成本。`,
        solution: `(a) 標價 $= 378 / 0.4 = \\$945$<br>(b) 成本 $= 945 / (1 + 0.75) = \\$540$<br>(c) 盈利 $=$ 售價 $-$ 成本 $= 378 - 540 = -\\$162$。因為售價小於成本，所以是虧蝕。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q08",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Plane Geometry"],
        difficulty: 3,
        content: `圖中，$ST$ 與 $UV$ 相交於點 $W$ 。已知 $SU \\parallel VT$ 及 $W$ 為 $ST$ 的中點。
<img src="2025dsep1q08.jpg" class="q-img" alt="題目附圖">
<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta SUW \\cong \\Delta TVW$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $X$ 為 $TW$ 上的一點使得 $\\Delta SUW \\sim \\Delta VXW$。若 $SU = 57\\text{ cm}$、 $SW = 63\\text{ cm}$ 及 $WX = 7\\text{ cm}$，求 $\\Delta TVX$ 的周界。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用平行線的內錯角 (A.A.S. 或 A.S.A.) 證明全等；(b) 運用相似三角形的對應邊成比例求出未知邊長。`,
        solution: `(a) 因為 $SU \\parallel VT$，所以 $\\angle USW = \\angle VTW$ (內錯角)。又 $SW = TW$ ($W$ 為中點)，且 $\\angle SWU = \\angle TWV$ (對頂角)。故 $\\Delta SUW \\cong \\Delta TVW$ (A.S.A.)。<br>(b) 由全等知 $TV = SU = 57\\text{ cm}$, $VW = UW$。利用相似三角形與比例關係算出各邊，進而求得周界。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q09",
        year: 2025,
        type: "P1",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 3,
        content: `下表顯示一些學生擁有原子筆的數目的分佈。該分佈的中位數為 $7$。<div style="overflow-x: auto; width: 100%; margin-bottom: 8px;"><table class="q-table" style="width: 100%; min-width: 300px;"><tr><th>原子筆的數目</th><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><th>學生人數</th><td>9</td><td>13</td><td>2</td><td>$s$</td><td>11</td></tr></table></div><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $s$ 的最小可取值。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出 $s$ 的最大可取值。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">求該分佈的最大可取標準差。<span class="marks">(22分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `中位數為 $7$ 代表小於或等於 $7$ 的數據個數與大於或等於 $7$ 的數據個數需要滿足中位數的定義限制。`,
        solution: `(a) 小於 $7$ 的人數 $= 9 + 13 = 22$。要讓中位數落在 $7$，大於 $7$ 的總人數 ($s + 11$) 不能無限小，經計算 $s$ 的最小可取值為 $10$。<br>(b) 為了讓中位數維持在 $7$，$s$ 的最大可取值為 $13$。<br>(c) 當數據盡量分散時（即 $s$ 取極值時）標準差最大。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q10",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials"],
        difficulty: 2,
        content: `設 $f(x)=2x^{3}+hx^{2}+kx+15$，其中 $h$ 及 $k$ 均為常數。當 $f(x)$ 除以 $x+2$ 時，餘數為 $-45$。已知 $f(x)$ 可被 $2x-5$ 整除。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $h$ 及 $k$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱方程 $f(x)=0$ 所有的根均為有理數。你是否同意？試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用餘式定理與因式定理建立聯立方程組：$f(-2) = -45$ 且 $f(2.5) = 0$；(b) 因式分解 $f(x)$ 並檢查其餘二次方程的解是否為有理數。`,
        solution: `(a) 代入定理可得 $h = -3, k = -11$。<br>(b) $f(x) = (2x-5)(x^2 + x - 3) = 0$。對於 $x^2 + x - 3 = 0$，其判別式 $\\Delta = 1^2 - 4(1)(-3) = 13$ 不是完全平方數，因此該部分方程的根為無理數。故不同意。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q11",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations", "Quadratic Equations in One Unknown"],
        difficulty: 3,
        content: `已知 $p(x)$ 的一部分隨 $x$ 正變，而另一部分則隨 $x^2$ 正變。假定 $p(7)=56$ 及 $p(9)=216$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $p(x)$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $c$ 為一實常數。求 $c$ 值的範圍使得方程 $p(x)=c$ 有兩個相異的實根。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $p(x) = ax + bx^2$，代入已知點求出 $a$ 和 $b$；(b) 將方程整理成一元二次方程形式，並利用判別式 $\\Delta > 0$ 求範圍。`,
        solution: `(a) 設 $p(x) = ax + bx^2$。代入解得 $b = 8, a = -48$。故 $p(x) = 8x^2 - 48x$。<br>(b) $8x^2 - 48x - c = 0$。有兩個相異實根 $\\Rightarrow \\Delta = (-48)^2 - 4(8)(-c) > 0 \\Rightarrow c > -72$。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q12",
        year: 2025,
        type: "P1",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 3,
        content: `下面的幹葉圖顯示一些運動員在訓練前的體重（以 $\\text{kg}$ 為單位）的分佈：<pre style="white-space: pre-wrap; word-break: break-all;">幹(十位) | 葉(個位)\n4        | 5 6 7 8 9\n5        | 0 3 4 5 6 7 8\n6        | 2 4 w\n7        | w</pre>上述分佈的分佈域與四分位數間距之差為 $25\\text{ kg}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出上述分佈的分佈域（以 $w$ 表示）。由此，求 $w$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">下面的框線圖顯示該些運動員在訓練後的體重分佈。求因訓練而引致該分佈的上四分位數的改變。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">該些運動員在訓練後的體重的分佈的離差是否較訓練前的小？試解釋你的答案。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `分佈域 $=$ 最大值 $-$ 最小值。四分位數間距 $= Q_3 - Q_1$。依據二者之差建立關於 $w$ 的方程。`,
        solution: `(a) 最大值為 $70+w$，最小值為 $45$，分佈域 $= 70+w - 45 = 25+w$。結合四分位數間距計算可解出 $w$。<br>(b) 讀取框線圖的上四分位數，再減去訓練前的 $Q_3$ 即可。<br>(c) 比較兩者的分佈域或四分位數間距（離差指標）來做判斷。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q13",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Loci", "Coordinate Geometry", "Equations of Straight Lines"],
        difficulty: 3,
        content: `直線 $L_1: 3x-2y-30=0$ 分別與正 $x$ 軸及正 $y$ 軸相交於點 $M$ 及點 $N$。設 $P$ 為直角坐標平面上的一動點使得 $MP=NP$。將 $P$ 的軌跡記為 $L$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">描述 $L$ 與 $MN$ 之間的幾何關係。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $L$ 的方程。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">假定 $L$ 分別與 $L_1$ 及 $x$ 軸相交於點 $Q$ 及點 $R$。求四邊形 $ONQR$ 的面積，其中 $O$ 為原點。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 到兩定點距離相等的動點軌跡是該兩點連線的垂直平分線；(b) 求出 $MN$ 的中點及斜率，再利用垂直直線斜率之積為 $-1$求出 $L$ 的方程。`,
        solution: `(a) $L$ 是線段 $MN$ 的垂直平分線。<br>(b) $M(10,0)$，$N(0,-15)$。中點為 $(5, -7.5)$。$MN$ 斜率為 $1.5$，故 $L$ 的斜率為 $-\\dfrac{2}{3}$。方程為 $4x + 6y + 25 = 0$。<br>(c) 通過聯立方程求出交點 $Q$ 與 $R$，再利用割補法（三角形面積加減）計算四邊形面積。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q14",
        year: 2025,
        type: "P1",
        level: ["Junior", "Senior"],
        domain: ["Geometry"],
        topic: ["Areas and Volumes"],
        difficulty: 3,
        content: `一實心金屬直立圓錐體的高及底半徑分別為 $45\text{ cm}$ 及 $24\text{ cm}$。將該圓錐體以一平行於其底的平面分成一小圓錐體及一平截頭體 $X$。已知小圓錐體的高為 $30\text{ cm}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">以 $\pi$ 表 $X$ 的體積。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">以 $\pi$ 表 $X$ 的總表面面積。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">把 $X$ 熔化，並重鑄成一實心正方體。該正方體的總表面面積是否超過 $X$ 的總表面面積？試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `利用相似三角形關係得出小圓錐體的底半徑，然後用「大圓錐體」減去「小圓錐體」求得平截頭體體積及表面積。`,
        solution: `(a) 小圓錐半徑 $r = 24 \\times \\dfrac{30}{45} = 16\text{ cm}$。體積 $V_X = \\dfrac{1}{3}\\pi(24^2)(45) - \\dfrac{1}{3}\\pi(16^2)(30) = 6080\\pi\text{ cm}^3$。<br>(b) 大斜高 $L = 51$，小斜高 $l = 34$。總表面積 $= \\pi(24)(51) - \\pi(16)(34) + \\pi(24^2) + \\pi(16^2) = 1512\\pi\text{ cm}^2$。<br>(c) 計算正方體邊長 $a = \\sqrt[3]{6080\\pi}$，再計算正方體總表面積 $6a^2$ 並與 $1512\\pi$ 作比較。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q15",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 3,
        content: `某盒子內有 $8$ 隻白色碟、$4$ 隻紅色碟及 $1$ 隻黑色碟。若從該盒子中隨機同時抽出 $3$ 隻碟，求<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">所抽出 $3$ 隻碟的顏色是相同的概率；<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">所抽出 $3$ 隻碟的顏色是全不相同的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `總碟數為 $13$。同時抽出 $3$ 隻使用組合數 $C_{3}^{13}$。(a) 考慮全白或全紅；(b) 白、紅、黑各抽一隻。`,
        solution: `(a) $P(\\text{同色}) = \\dfrac{C_3^8 + C_3^4}{C_3^{13}} = \\dfrac{30}{143}$。<br>(b) $P(\\text{全不同色}) = \\dfrac{C_1^8 \\times C_1^4 \\times C_1^1}{C_3^{13}} = \\dfrac{16}{143}$。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q16",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: `考慮方程組 $\\begin{cases}\\log_{3}x+\\log_{3}y=9\\\\ \\log_{x}81-\\log_{y}9=1\\end{cases}$ 其中 $0 < x < y$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $u = \\log_{3}y$。證明 $u^2-3u-18=0$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $x$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 由第一式得 $\\log_{3}x = 9 - u$。利用換底公式將第二式的底數轉為 $3$，即 $\\log_x 81 = \\dfrac{4}{\\log_3 x}$ 及 $\\log_y 9 = \\dfrac{2}{u}$。`,
        solution: `(a) 依提示，$\\dfrac{4}{9-u} - \\dfrac{2}{u} = 1 \\Rightarrow u^2 - 3u - 18 = 0$。<br>(b) 解方程得 $u = 6$ 或 $u = -3$。由於 $0 < x < y$，對應求出 $u=6 \\Rightarrow \\log_3 y = 6 \\Rightarrow \\log_3 x = 3 \\Rightarrow x = 27$。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q17",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 3,
        content: `設 $T(n)$ 為一等差數列的第 $n$ 項使得 $T(1) \\neq T(2)$ 及 $T(47)=456$。已知 $T(9)$，$T(47)$，$T(199)$ 為一等比數列。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $T(1)$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $n$ 的最小值使得該等差數列的首 $n$ 項之和大於 $10^9$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設首項為 $a$，公差為 $d$。利用等比中項性質 $T(47)^2 = T(9) \\times T(199)$ 求解；(b) 運用等差數列求和公式 $S_n > 10^9$ 建立不等式。`,
        solution: `(a) 聯立化簡可求得 $a = T(1) = -4$ 及 $d = 10$。<br>(b) $S_n = \\dfrac{n}{2}[2(-4) + (n-1)10] = 5n^2 - 9n$。設 $5n^2 - 9n > 10^9$，解二次不等式可得 $n$ 的最小整數值。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q18",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra", "Geometry"],
        topic: ["Functions and Graphs", "Coordinate Geometry", "Equations of Circles"],
        difficulty: 4,
        content: `設 $g(x)=3x^{2}-6kx+24x+3k^{2}-24k+55$，其中 $k$ 為一正常數。將 $y=g(x)$ 的圖像的頂點記為 $R$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">利用配方法，以 $k$ 表 $R$ 的坐標。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">藉將 $y=g(x)$ 的圖像向右平移 $6$ 單位，然後向下平移 $10$ 單位得出 $y=h(x)$ 的圖像。將 $y=h(x)$ 的圖像的頂點記為 $S$。設 $T$ 為一點使得 $\Delta RST$ 的垂心為原點。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">以 $k$ 表 $T$ 的坐標。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">點 $U$ 的坐標為 $(-5,5)$。設 $V$ 為 $RS$ 上的一點使得 $TV$ 垂直於 $RS$。已知 $S$、 $T$、 $U$ 與 $V$ 共圓。求 $k$。<span class="marks">(7分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 提取 $3$ 後對 $x$ 項配方；(b)(i) 平移頂點得到 $S$，利用垂心性質求 $T$ 的坐標；(b)(ii) 四點共圓代表 $\angle TUS = 90^{\circ}$，利用垂直直線斜率關係建立方程。`,
        solution: `(a) $g(x) = 3[x - (k-4)]^2 + 7$。因此 $R = (k-4, 7)$。<br>(b)(i) 平移後 $S = (k+2, -3)$。利用垂心性質可求得 $T$。<br>(b)(ii) 因為 $S, T, U, V$ 共圓且 $\\angle TVS = 90^{\circ}$，所以 $ST$ 是圓直徑，故 $\\angle TUS = 90^{\circ}$。利用斜率之積 $m_{TU} \\times m_{SU} = -1$ 即可解出 $k$。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q19",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Equations of Straight Lines", "Trigonometry (2D)"],
        difficulty: 5,
        content: `直線 $L$ 的方程為 $4x-3y+83=0$。圓 $C$ 的方程為 $x^{2}+y^{2}+ax-2y+b=0$，其中 $a$ 及 $b$ 均為正常數。已知 $C$ 通過點 $(-10,9)$ 且 $L$ 為 $C$ 的切線。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明方程 $25x^{2}+(9a+640)x+(90a+4924)=0$ 有等根。由此，求 $a$ 及 $b$。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">點 $P$ 的坐標為 $(-20,1)$。設 $Q$ 為 $L$ 之下的一點使得 $PQ$ 與 $C$ 相切且 $PQ=25$。將 $C$ 的圓心記為 $I$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $\cos\angle IPQ$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $I$ 與 $Q$ 間的距離，答案以根式表示。</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">設 $R$ 為 $L$ 上的一點使得 $C$ 為 $\Delta PQR$ 的內切圓。將 $\Delta PQR$ 的外接圓的半徑記為 $r$。某人宣稱 $r > PQ$。該宣稱是否正確？試解釋你的答案。<span class="marks">(8分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 聯立方程由 $\Delta = 0$ 求 $a$ 與 $b$；(b)(i) 切線垂直半徑，在直角三角形中求三角比；(b)(iii) 利用正弦定理 $2r = \\dfrac{PQ}{\\sin\\angle PRQ}$ 評估半徑大小。`,
        solution: `(a) 將 $y = \\dfrac{4x+83}{3}$ 代入圓方程，利用 $\Delta = 0$ 解出 $a$，再代點求出 $b$。<br>(b)(i) 求出圓心 $I$ 與半徑。在直角三角形 $\Delta IQP$ 中利用三角比求出 $\cos\\angle IPQ$。<br>(b)(ii) $IQ$ 即為圓的半徑（若 $Q$ 為切點）或利用直角三角形求其長度。<br>(b)(iii) 根據內切圓與外接圓的幾何不等式關係，計算出 $\sin\\angle PRQ$ 的範圍，從而判斷宣稱是否正確。`
    }
);