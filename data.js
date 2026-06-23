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
        content: `化簡 $\\dfrac{(x^{4}y^{-5})^{3}}{xy^{2}}$，並以正指數表示答案。<span class="marks">(3分)</span>`,
        hint: `先處理分子括號外的次方 $(a^m)^n = a^{mn}$，再利用指數定律化簡乘除法。`,
        solution: `$\\begin{aligned} &\\frac{(x^{4}y^{-5})^{3}}{xy^{2}} \\\\=& \\frac{x^{12}y^{-15}}{xy^{2}} \\\\=& \\frac{x^{12-1}}{y^{2+15}} \\\\=& \\frac{x^{11}}{y^{17}} \\end{aligned}$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q02",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 1,
        content: `化簡 $\\dfrac{1}{3d-4} - \\dfrac{2}{6d+5}$。<span class="marks">(3分)</span>`,
        hint: `通分母後通分化簡分子。`,
        solution: `$\\begin{aligned} &\\frac{1}{3d-4} - \\frac{2}{6d+5} \\\\=& \\frac{(6d+5)-2(3d-4)}{(3d-4)(6d+5)} \\\\=& \\frac{6d+5-6d+8}{(3d-4)(6d+5)} \\\\=& \\frac{13}{(3d-4)(6d+5)} \\end{aligned}$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q03",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns", "Rates, Ratios and Proportions"],
        difficulty: 2,
        content: `設 $m$ 及 $n$ 為兩數。 $2m$ 與 $3n$ 之和為 $999$ 而 $m$ 與 $n$ 之比為 $8:7$ 。求 $n$ 。<span class="marks">(3分)</span>`,
        hint: `根據比例設 $m = 8k$ 及 $n = 7k$，或者建立聯立方程組。`,
        solution: `注意 $2m+3n=999$ 且 $7m=8n$。<br>因此，可得：<br>$$2\\left(\\frac{8n}{7}\\right)+3n=999$$<br>解方程，可得 $n=189$。`
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
        solution: `(a) $(-2,-4)$<br>(b) $C$ 的坐標為 $(-2,t-4)$。<br>$\\begin{aligned} \\frac{t-4}{-2} &= \\frac{-2}{4} \\\\ t-4 &= 1 \\\\ t &= 5 \\end{aligned}$`
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
        solution: `(a) $\\begin{aligned} &10pr-6qr \\\\=& 2r(5p-3q) \\end{aligned}$<br>(b) $\\begin{aligned} &25p^{2}-9q^{2} \\\\=& (5p+3q)(5p-3q) \\end{aligned}$<br>(c) $\\begin{aligned} &25p^{2}-9q^{2}-10pr+6qr \\\\=& (25p^{2}-9q^{2})-(10pr-6qr) \\\\=& (5p+3q)(5p-3q)-2r(5p-3q) \\\\=& (5p-3q)(5p+3q-2r) \\end{aligned}$`
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
        solution: `(a) $\\begin{aligned} \\frac{6x+1}{2} &< x-8 \\\\ 6x+1 &< 2x-16 \\\\ 6x-2x &< -16-1 \\\\ 4x &< -17 \\\\ x &< \\frac{-17}{4} \\end{aligned}$ 且 $\\begin{aligned} 3x &\\le -21 \\\\ x &\\le -7 \\end{aligned}$<br>因此，(*) 的解為 $x \\le -7$。<br>(b) $-5$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q07",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: `某紀念品的售價為 $378 。該紀念品以其標價四折售出。該紀念品的標價較其成本高 75%。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該紀念品的標價。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求該紀念品的成本。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">判別售出該紀念品後是獲利還是虧蝕。試解釋你的答案。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 售價 $=$ 標價 $\\times 0.4$；(b) 標價 $=$ 成本 $\\times (1 + 75\\%)$；(c) 比較售價與成本。`,
        solution: `(a) 該紀念品的標價 $\\begin{aligned} &= \\frac{378}{40\\%} \\\\ &= \\$945 \\end{aligned}$<br>(b) 該紀念品的成本 $\\begin{aligned} &= \\frac{945}{1+75\\%} \\\\ &= \\$540 \\end{aligned}$<br>(c) 因為 $540 > 378$，所以售出該紀念品後錄得虧蝕。`
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
<img src="img/2025dsep1q08.jpg" class="q-img" alt="題目附圖" style="width: inherit; max-width: 400px; height: auto;">
<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta SUW \\cong \\Delta TVW$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $X$ 為 $TW$ 上的一點使得 $\\Delta SUW \\sim \\Delta VXW$。若 $SU = 57\\text{ cm}$、 $SW = 63\\text{ cm}$ 及 $WX = 7\\text{ cm}$，求 $\\Delta TVX$ 的周界。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用平行線的內錯角 (A.A.S. 或 A.S.A.) 證明全等；(b) 運用相似三角形的對應邊成比例求出未知邊長。`,
        solution: `(a) $\\angle SWU = \\angle TWV$ （對頂角）<br>$SW = TW$ （已知）<br>$\\angle USW = \\angle VTW$ （內錯角， $SU \\parallel VT$）<br>$\\triangle SUW \\cong \\triangle TVW$ （ASA）<br><br>(b) 注意 $\\triangle SUW \\sim \\triangle VXW$。<br>$$\\frac{SU}{VX} = \\frac{UW}{XW} = \\frac{SW}{VW}$$<br>由 (a) 可得 $UW = VW$。<br>因此，<br>$$\\frac{57}{VX} = \\frac{VW}{7} = \\frac{63}{VW}$$<br>解得 $VW = 21\\text{ cm}$ 且 $VX = 19\\text{ cm}$。<br><br>$\\triangle TVX$ 的周界 $\\begin{aligned} &= TV + VX + TX \\\\ &= 57 + 19 + (63 - 7) \\\\ &= 132\\text{ cm} \\end{aligned}$`
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
        solution: `(a) 設 $m$ 為 $s$ 的最小可能值。<br>$\\begin{aligned} 9+13 &= 1+m+11 \\\\ m &= 10 \\end{aligned}$<br>因此，$s$ 的最小可能值為 10。<br><br>(b) 12<br><br>(c) 共有三種情況。<br>情況 1： 當 $s=10$ 時，該分佈的標準差 $\\approx 1.512744216$<br>情況 2： 當 $s=11$ 時，該分佈的標準差 $\\approx 1.502990088$<br>情況 3： 當 $s=12$ 時，該分佈的標準差 $\\approx 1.493307842$<br><br>因此，該分佈的最大可能標準差為 1.51。`
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
        solution: `(a) $f(-2)=-45$<br>$\\begin{aligned} 2(-2)^{3}+h(-2)^{2}+k(-2)+15 &= -45 \\\\ 2h-k+22 &= 0 \\end{aligned}$<br>另外， $f\\left(\\frac{5}{2}\\right)=0$<br>$\\begin{aligned} 2\\left(\\frac{5}{2}\\right)^{3}+h\\left(\\frac{5}{2}\\right)^{2}+k\\left(\\frac{5}{2}\\right)+15 &= 0 \\\\ 5h+2k+37 &= 0 \\end{aligned}$<br>聯立解得 $h=-9$ 及 $k=4$。<br><br>(b) $f(x)=0$<br>$\\begin{aligned} 2x^{3}-9x^{2}+4x+15 &= 0 \\\\ (2x-5)(x^{2}-2x-3) &= 0 \\\\ (2x-5)(x+1)(x-3) &= 0 \\end{aligned}$<br>方程 $f(x)=0$ 的根為 $\\frac{5}{2}$、$-1$ 和 $3$。<br>注意 $\\frac{5}{2}$、$-1$ 和 $3$ 均為有理數。<br>因此，同意該宣稱。`
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
        hint: `(a) 設 $p(x) = ax + bx^2$，代入已知點求出 $a$ 和 $b$；(b) 將方程整理成一元二次方程形式，並利用判別式 $\\Delta > 0$求範圍。`,
        solution: `(a) 設 $p(x)=ax+bx^{2}$，其中 $a$ 及 $b$ 為非零常數。<br>由此可得 $7a+49b=56$ 及 $9a+81b=216$。<br>解方程組，得 $a=-48$ 及 $b=8$。<br>開得 $p(x)=-48x+8x^{2}$。<br><br>(b) $p(x)=c$<br>$\\begin{aligned} -48x+8x^{2} &= c \\\\ 8x^{2}-48x-c &= 0 \\end{aligned}$<br>由於方程 $8x^{2}-48x-c=0$ 有兩個相異實根，可得：<br>$\\begin{aligned} (-48)^{2}-4(8)(-c) &> 0 \\\\ c &> -72 \\end{aligned}$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q12",
        year: 2025,
        type: "P1",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 3,
        content: `下面的幹葉圖顯示一些運動員在訓練前的體重（以 $\\text{kg}$ 為單位）的分佈：<pre style="white-space: pre-wrap; word-break: break-all;">幹(十位) | 葉(個位)\n4        | 5 6 7 8 9\n5        | 0 3 4 5 6 7 8\n6        | 2 4 w\n7        | w</pre>上述分佈的分佈域與四分位數間距之差為 $25\\text{ kg}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出上述分佈的分佈域（以 $w$ 表示）。由此，求 $w$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">下面的框線圖顯示該些運動員在訓練後的體重分佈。</div></div>
        <img src="img/2025dsep1q12b.jpg" class="q-img" alt="題目附圖" style="max-width: 400px; height: auto;">
        <div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求因訓練而引致該分佈的上四分位數的改變。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">該些運動員在訓練後的體重的分佈的離差是否較訓練前的小？試解釋你的答案。</div></div>
        <span class="marks">(4分)</span><div class="q-clearfix"></div>`,
        hint: `分佈域 $=$ 最大值 $-$ 最小值。四分位數間距 $= Q_3 - Q_1$。依據二者之差建立關於 $w$ 的方程。`,
        solution: `(a) 分佈域 $= 42\\text{ kg}$<br>四分位數間距 $= 42-25 = 17\\text{ kg}$<br>上四分位數 $= 69\\text{ kg}$<br>下四分位數 $= 69-17 = 52\\text{ kg}$<br>由此可得 $w=2$。<br><br>(b) (i) 上四分位數的變化 $= 64-69 = -5\\text{ kg}$<br>因此，上四分位數減少了 $5\\text{ kg}$。<br><br>(ii) 訓練前該分佈的分佈域 $= 42\\text{ kg}$<br>訓練後該分佈的分佈域 $= 67-46 = 21\\text{ kg}$<br>由於訓練後的分佈域小於訓練前，因此運動員體重的分佈較訓練前更凝聚。<br>【或】<br>訓練前該分佈的四分位數間距 $= 17\\text{ kg}$<br>訓練後該分佈的四分位數間距 $= 64-54 = 10\\text{ kg}$<br>由於訓練後的四分位數間距小於訓練前，開得運動員體重的分佈較訓練前更凝聚。`
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
        solution: `(a) 直線 $L$ 是 $MN$ 的垂直平分線。<br>(b) 設 $M$ 和 $N$ 的坐標分別為 $(a,0)$ 和 $(0,b)$。<br>$MN$ 的斜率 $= \\frac{-b}{a}$<br>$L$ 的斜率可由下式求得：<br>$$\\left(\\frac{-b}{a}\\right)\\left(\\frac{3}{2}\\right)=-1$$<br>可得 $2a=3b$。<br>注意 $MN$ 的中點坐標為 $\\left(\\frac{a}{2},\\frac{b}{2}\\right)$。<br>由於中點在 $L$ 上：<br>$$3\\left(\\frac{a}{2}\\right)-2\\left(\\frac{b}{2}\\right)-30=0$$<br>聯立解得 $a=36$ 及 $b=24$。<br>因此 $L$ 的方程為：<br>$\\begin{aligned} y-24 &= \\frac{-24}{36}(x-0) \\\\ 2x+3y-72 &= 0 \\end{aligned}$<br><br>(c) 由 (b) 可得 $N$ 和 $Q$ 的坐標分別為 $(0,24)$ 和 $(18,12)$。<br>設 $k$ 為 $L$ 的 $x$ 截距。<br>$\\begin{aligned} 3k-2(0)-30 &= 0 \\\\ k &= 10 \\end{aligned}$<br>所以 $R$ 的坐標為 $(10,0)$。<br>所求面積$\\begin{aligned} &= \\frac{(24)(18)}{2}+\\frac{(10)(12)}{2} \\\\ &= 216+60 \\\\ &= 276 \\end{aligned}$`
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
        solution: `(a) $X$ 的體積 $\\begin{aligned} &= \\frac{1}{3}\\pi(24^{2})(45)\\left(1-\\left(\\frac{45-30}{45}\right)^{3}\\right) \\\\ &= 8640\\pi\\left(1-\\left(\\frac{1}{3}\right)^{3}\\right) \\\\ &= 8320\\pi\\text{ cm}^{3} \\end{aligned}$<br><br>(b) $X$ 的總表面面積 $\\begin{aligned} &= \\pi(24)\\sqrt{24^{2}+45^{2}}\\left(1-\\left(\\frac{45-30}{45}\right)^{2}\\right)+\\pi(24^{2})+\\pi\\left(24\\left(\\frac{45-30}{45}\right)\\right)^{2} \\\\ &= 1728\\pi\\text{ cm}^{2} \\end{aligned}$<br><br>(c) 設正方體的邊長為 $x\\text{ cm}$。<br>$\\begin{aligned} x^{3} &= 8320\\pi \\\\ x &\\approx 29.67730087 \\end{aligned}$<br>正方體的總表面面積 $\\begin{aligned} &\\approx 6(29.67730087)^{2} \\\\ &\\approx 5284.453123\\text{ cm}^{2} \\\\ &< 1728\\pi\\text{ cm}^{2} \\end{aligned}$<br>因此，正方體的總表面面積並未超過 $X$ 的總表面面積。`
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
        hint: `總碟數為 $13$。同時抽出 $3$ 隻使用組合數 $C_{3}^{13}$。(a) 考慮全白 or 全紅；(b) 白、紅、黑各抽一隻。`,
        solution: `(a) 所求概率 $\\begin{aligned} &= \\frac{C_{3}^{8}+C_{3}^{4}}{C_{3}^{13}} \\\\ &= \\frac{30}{143} \\end{aligned}$<br>【或】<br>$\\begin{aligned} &= \\left(\\frac{8}{13}\\right)\\left(\\frac{7}{12}\\right)\\left(\\frac{6}{11}\\right)+\\left(\\frac{4}{13}\\right)\\left(\\frac{3}{12}\\right)\\left(\\frac{2}{11}\\right) \\\\ &= \\frac{30}{143} \\end{aligned}$<br><br>(b) 所求概率 $\\begin{aligned} &= \\frac{C_{1}^{8}C_{1}^{4}C_{1}^{1}}{C_{3}^{13}} \\\\ &= \\frac{16}{143} \\end{aligned}$<br>【或】<br>$\\begin{aligned} &= 6\\left(\\frac{8}{13}\\right)\\left(\\frac{4}{12}\\right)\\left(\\frac{1}{11}\\right) \\\\ &= \\frac{16}{143} \\end{aligned}$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q16",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: `考慮方程組 $\\begin{cases}\\log_{3}x+\\log_{3}y=9\\\\ \\log_{x}81-\\log_{y}9=1\\end{cases}$ 其中 $0 < x < y$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $u = \\log_{3}y$。證明 $u^2-3u-18=0$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $x$。<span class="marks">(22分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 由第一式得 $\\log_{3}x = 9 - u$。利用換底公式將第二式的底數轉為 $3$，即 $\\log_x 81 = \\dfrac{4}{\\log_3 x}$ 及 $\\log_y 9 = \\dfrac{2}{u}$。`,
        solution: `(a) 注意 $\\log_{3}x = 9-u$。<br>由於 $\\log_{x}81 - \\log_{y}9 = 1$，可得：<br>$$\\frac{\\log_{3}81}{\\log_{3}x} - \\frac{\\log_{3}9}{\\log_{3}y} = 1$$<br>因此， $\\frac{4}{\\log_{3}x} - \\frac{2}{\\log_{3}y} = 1$。<br>代入得 $\\frac{4}{9-u} - \\frac{2}{u} = 1$。<br>展開得 $4u - 2(9-u) = u(9-u)$。<br>整理解得 $u^{2}-3u-18 = 0$。<br><br>(b) 由 (a) 可得 $u=6$ 或 $u=-3$。<br>對應的解為：<br>$$\\begin{cases}x=27\\\\ y=729\\end{cases} \\quad \\text{或} \\quad \\begin{cases}x=531441\\\\ y=\\frac{1}{27}\\end{cases}$$<br>由於已知 $x<y$，因此 $x=27$。`
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
        solution: `(a) 設 $a$ 與 $d$ 分別為該等差數列的第 1 項和公差。<br>$$\\frac{a+46d}{a+8d} = \\frac{a+198d}{a+46d}$$<br>已知 $a+46d=456$，<br>代入得 $\\frac{456}{456-38d} = \\frac{456+152d}{456}$。<br>化簡得 $51984d - 5776d^2 = 0$。<br>因為 $T(1) \\neq T(2)$，所以 $d=9$。<br>進而求得 $T(1)=42$。<br><br>(b) $T(1)+T(2)+T(3)+\\cdots+T(n) > 10^{6}$<br>$\\begin{aligned} \\frac{n}{2}(2(42)+(n-1)(9)) &&> 10^{6} \\\\ 9n^{2}+75n-2\\times10^{6} &&> 0 \\end{aligned}$<br>考慮對應方程的根：<br>$$n = \\frac{-75 \\pm \\sqrt{75^{2}-4(9)(-2\\times10^{6})}}{2(9)}$$<br>得 $n < -475.5896013$ 或 $n > 467.256268$。<br>因此， $n$ 的最小可能值為 468。`
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
        solution: `(a) $\\begin{aligned} g(x) &= 3x^{2}-6kx+24x+3k^{2}-24k+55 \\\\ &= 3(x^{2}-2kx+8x)+3k^{2}-24k+55 \\\\ &= 3(x^{2}-2kx+8x+(k-4)^{2}-(k-4)^{2})+3k^{2}-24k+55 \\\\ &= 3(x-(k-4))^{2}+7 \\end{aligned}$<br>因此， $R$ 的坐標為 $(k-4, 7)$。<br><br>(b) (i) $S$ 的坐標為 $(k+2, -3)$。<br>注意 $RS$ 垂直於 $OT$。<br>因為 $RS$ 的斜率為 $\\frac{-5}{3}$，所以 $OT$ 的斜率為 $\\frac{3}{5}$。<br>設 $T$ 的坐標為 $(5t, 3t)$。<br>同時注意 $RT$ 垂直於 $OS$。<br>由此可得：<br>$$\\left(\\frac{3t-7}{5t-(k-4)}\\right)\\left(\\frac{-3}{k+2}\\right)=-1$$<br>整理得 $t = \\frac{k^{2}-2k-29}{5k+1}$。<br>因此， $T$ 的坐標為 $\\left(\\frac{5(k^{2}-2k-29)}{5k+1}, \\frac{3(k^{2}-2k-29)}{5k+1}\right)$。<br><br>(ii) $SU$ 的斜率 $= \\frac{-8}{k+7}$<br>$TU$ 的斜率 $= \\frac{3k^{2}-31k-92}{5k^{2}+15k-140}$<br>注意 $\\angle SVT = 90^\\circ$。<br>因為 $S, T, U, V$ 四點共圓，所以 $\\angle SUT = 90^\\circ$。<br>因此：<br>$$\\left(\\frac{-8}{k+7}\\right)\\left(\\frac{3k^{2}-31k-92}{5k^{2}+15k-140}\right)=-1$$<br>整理解得 $5k^{3}+26k^{2}+213k-244 = 0$。<br>因式分解得 $(k-1)(5k^{2}+31k+244) = 0$。<br>因為後面二次式無實根，解得 $k=1$。`
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
        solution: `(a) 因為 $(-10, 9)$ 位於 $C$ 上，可得：<br>$$10^{2}+9^{2}-10a-2(9)+b=0$$<br>因此， $163-10a+b=0$。<br><br>將 $y=\\frac{4x+83}{3}$ 代入 $x^{2}+y^{2}+ax-2y+b=0$，可得：<br>$$x^{2}+\\left(\\frac{4x+83}{3}\\right)^{2}+ax-2\\left(\\frac{4x+83}{3}\\right)+b=0$$<br>化簡得：<br>$$25x^{2}+(9a+640)x+(90a+4924)=0$$<br>由於 $L$ 為 $C$ 的切線，上述方程有等根。<br>開得：<br>$$(9a+640)^{2}-4(25)(90a+4924)=0$$<br>展開並整理得：<br>$$9a^{2}+280a-9200=0$$<br>由於 $a>0$ 且 $b>0$，解得 $a=20$ 及 $b=37$。<br><br>(b) (i) 因為 $I$ 的坐標為 $(-10, 1)$，所以 $IP$ 為一條水平線。<br>由於 $P$ 位於 $L$ 上且 $Q$ 位於 $L$ 下方，可得：<br>$$\\cos\\angle IPQ = \\frac{3}{5}$$<br><br>(ii) 注意 $IP = 10$。<br>根據餘弦公式，可得：<br>$\\begin{aligned} IQ^{2} &= IP^{2}+PQ^{2}-2(IP)(PQ)\\cos\\angle IPQ \\\\ IQ^{2} &= 10^{2}+25^{2}-2(10)(25)\\left(\\frac{3}{5}\right) \\\\ IQ^{2} &= 425 \\\\ IQ &= 5\\sqrt{17} \\end{aligned}$<br>因此，所求的距離為 $5\\sqrt{17}$。<br><br>(iii) 根據正弦公式（正弦定理），我們有<br>$$\\frac{\\sin \\angle IQP}{IP} = \\frac{\\sin \\angle IPQ}{IQ}$$<br>$$\\frac{\\sin \\angle IQP}{10} = \\frac{4}{25\\sqrt{17}}$$<br>$$\\angle IQP \\approx 22.83365418^\\circ \\text{ 或 } \\angle IQP \\approx 157.1663458^\\circ \\text{（捨去）}$$<br><br>設 $G$ 為 $\\triangle PQR$ 的外心。<br>注意 $\\angle QGR = 360^\\circ - 2(2\\angle IPQ) \\approx 147.4795905^\\circ$。<br>$$\\angle GQP$$<br>$$= \\frac{180^\\circ - \\angle QGR}{2} + 2\\angle IQP$$<br>$$\\approx 61.92751306^\\circ$$<br><br>因為 $\\cos \\angle GQP = \\frac{PQ}{2r}$，我們有 $r = \\frac{PQ}{2\\cos \\angle GQP}$。<br>因為 $60^\\circ < \\angle GQP < 90^\\circ$，我們有 $0 < 2\\cos \\angle GQP < 1$。<br>因此，我們有 $r > PQ$。<br>所以，該宣稱是正確的。`
    }
);
