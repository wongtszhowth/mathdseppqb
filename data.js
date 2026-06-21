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
        content: `化簡 $\\frac{(x^{4}y^{-5})^{3}}{xy^{2}}$，並以正指數表示答案。`,
        hint: `先處理分子括號外的次方 $(a^m)^n = a^{mn}$，再利用指數定律化簡乘除法。`,
        solution: `原式 $= \\frac{x^{12}y^{-15}}{xy^2} = \\frac{x^{12-1}}{y^{2-(-15)}} = \\frac{x^{11}}{y^{17}}$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q02",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions and Fractional Equations"],
        difficulty: 1,
        content: `化簡 $\\frac{1}{3d-4} - \\frac{2}{6d+5}$。`,
        hint: `通分母後通分化簡分子。`,
        solution: `原式 $= \\frac{(6d+5) - 2(3d-4)}{(3d-4)(6d+5)} = \\frac{6d+5-6d+8}{(3d-4)(6d+5)} = \\frac{13}{(3d-4)(6d+5)}$`
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
        content: `點 $A$ 的坐標為 $(4,-2)$ 。 $A$ 繞原點順時針方向旋轉 $90^{\\circ}$ 至 $B$ 。
        <div class="q-line"><span class="q-text">(a) 寫出 $B$ 的坐標。</span><span class="marks">(1分)</span></div>
        <div class="q-line"><span class="q-text">(b) 假定 $B$ 向上平移 $k$ 單位至點 $C$ 。若 $A$ 、 $O$ 與 $C$ 共線，求 $k$ 。</span><span class="marks">(2分)</span></div>`,
        hint: `旋轉公式：$(x, y)$ 繞原點順時針旋轉 $90^{\\circ}$ 變為 $(y, -x)$。共線代表斜率相等，即 $m_{OA} = m_{OC}$。`,
        solution: `(a) $B = (-2, -4)$<br>(b) $C = (-2, -4+k)$。因為 $A(4,-2)$、$O(0,0)$、$C$ 共線，所以 $\\frac{-2-0}{4-0} = \\frac{-4+k-0}{-2-0} \\Rightarrow -\\frac{1}{2} = \\frac{-4+k}{-2} \\Rightarrow 1 = -4+k \\Rightarrow k = 5$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q05",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解
        <div class="q-line"><span class="q-text">(a) $10pr-6qr$</span><span class="marks">(1分)</span></div>
        <div class="q-line"><span class="q-text">(b) $25p^{2}-9q^{2}$</span><span class="marks">(1分)</span></div>
        <div class="q-line"><span class="q-text">(c) $25p^{2}-9q^{2}-10pr+6qr$</span><span class="marks">(2分)</span></div>`,
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
        content: `考慮複合不等式 $\\frac{6x+1}{2} < x-8$ 或 $3x-21 \\ge 0$ …… $(*)$。
        <div class="q-line"><span class="q-text">(a) 解 $(*)$。</span><span class="marks">(3分)</span></div>
        <div class="q-line"><span class="q-text">(b) 寫出滿足 $(*)$ 的最大整數。</span><span class="marks">(1分)</span></div>`,
        hint: `注意複合不等式使用的是「或 (or)」，解出兩個不等式後取其聯集。`,
        solution: `(a) 解第一個：$6x+1 < 2x-16 \\Rightarrow 4x < -17 \\Rightarrow x < -4.25$；解第二個：$3x \\ge 21 \\Rightarrow x \\ge 7$。因此 $(*)$ 的解為 $x < -4.25$ 或 $x \\ge 7$。<br>(b) 由於解區間在 $-4.25$ 以下或 $7$ 以上，在 $x < -4.25$ 的部分最大整數為 $-5$，但整個解包含 $x \\ge 7$ 的無窮大區域，若題目是指「不滿足」或有其他範圍限制請留意。依字面解區間向正無窮延伸，並無最大整數。若為 $x < -4.25$ 則最大整數為 $-5$。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q07",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: `某紀念品的售價為 \$378 。該紀念品以其標價四折售出。該紀念品的標價較其成本高 $75\\%$。
        <div class="q-line"><span class="q-text">(a) 求該紀念品的標價。</span><span class="marks">(2分)</span></div>
        <div class="q-line"><span class="q-text">(b) 求該紀念品的成本。</span><span class="marks">(2分)</span></div>
        <div class="q-line"><span class="q-text">(c) 判別售出該紀念品後是獲利還是虧蝕。試解釋你的答案。</span><span class="marks">(1分)</span></div>`,
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
        <div class="q-line"><span class="q-text">(a) 證明 $\\Delta SUW \\cong \\Delta TVW$。</span><span class="marks">(2分)</span></div>
        <div class="q-line"><span class="q-text">(b) 設 $X$ 為 $TW$ 上的一點使得 $\\Delta SUW \\sim \\Delta VXW$。若 $SU = 57\\text{ cm}$、 $SW = 63\\text{ cm}$ 及 $WX = 7\\text{ cm}$，求 $\\Delta TVX$ 的周界。</span><span class="marks">(3分)</span></div>`,
        hint: `(a) 利用平行線的內錯角 (A.A.S. 或 A.S.A.) 證明全等；(b) 運用相似三角形的對應邊成比例求出未知邊長。`,
        solution: `(a) 因為 $SU \\parallel VT$，所以 $\\angle USW = \\angle VTW$ (內錯角, $SU \\parallel VT$)。又 $SW = TW$ ($W$ 為中點)，且 $\\angle SWU = \\angle TWV$ (對頂角)。故 $\\Delta SUW \\cong \\Delta TVW$ (A.S.A.)。<br>(b) 由全等知 $TV = SU = 57\\text{ cm}$, $VW = UW$。利用相似三角形與比例關係算出各邊，進而求得周界。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q09",
        year: 2025,
        type: "P1",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 3,
        content: `下表顯示一些學生擁有原子筆的數目的分佈。該分佈的中位數為 $7$。
        <table class="q-table">
          <tr><th>原子筆的數目</th><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
          <tr><th>學生人數</th><td>9</td><td>13</td><td>2</td><td>$s$</td><td>11</td></tr>
        </table>
        <div class="q-line"><span class="q-text">(a) 求 $s$ 的最小可取值。</span><span class="marks">(2分)</span></div>
        <div class="q-line"><span class="q-text">(b) 寫出 $s$ 的最大可取值。</span><span class="marks">(1分)</span></div>
        <div class="q-line"><span class="q-text">(c) 求該分佈的最大可取標準差。</span><span class="marks">(2分)</span></div>`,
        hint: `中位數為 $7$ 代表小於或等於 $7$ 的數據個數與大於或等於 $7$ 的數據個數需要滿足中位數的定義限制。`,
        solution: `(a) 小於 $7$ 的人數 $= 9 + 13 = 22$。要讓中位數落在 $7$，大於 $7$ 的總人數 ($s + 11$) 不能無限小，經計算 $s$ 的最小可取值為 $10$。<br>(b) 只要中位數保持為 $7$，$s$ 的最大值由限制決定，最大可取值為 $13$。<br>(c) 當數據盡量分散時（即 $s$ 取極值或兩端人數最多時）標準差最大。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q10",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials"],
        difficulty: 2,
        content: `設 $f(x)=2x^{3}+hx^{2}+kx+15$，其中 $h$ 及 $k$ 均為常數。當 $f(x)$ 除以 $x+2$ 時，餘數為 $-45$。已知 $f(x)$ 可被 $2x-5$ 整除。
        <div class="q-line"><span class="q-text">(a) 求 $h$ 及 $k$。</span><span class="marks">(3分)</span></div>
        <div class="q-line"><span class="q-text">(b) 某人宣稱方程 $f(x)=0$ 所有的根均為有理數。你是否同意？試解釋你的答案。</span><span class="marks">(3分)</span></div>`,
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
        content: `已知 $p(x)$ 的一部分隨 $x$ 正變，而另一部分則隨 $x^2$ 正變。假定 $p(7)=56$ 及 $p(9)=216$。
        <div class="q-line"><span class="q-text">(a) 求 $p(x)$。</span><span class="marks">(3分)</span></div>
        <div class="q-line"><span class="q-text">(b) 設 $c$ 為一實常數。求 $c$ 值的範圍使得方程 $p(x)=c$ 有兩個相異的實根。</span><span class="marks">(3分)</span></div>`,
        hint: `(a) 設 $p(x) = ax + bx^2$，代入已知點求出 $a$ 和 $b$；(b) 將方程整理成一元二次方程形式，並利用判別式 $\\Delta > 0$ 求範圍。`,
        solution: `(a) 設 $p(x) = ax + bx^2$。代入得 $7a + 49b = 56 \\Rightarrow a + 7b = 8$；$9a + 81b = 216 \\Rightarrow a + 9b = 24$。解得 $b = 8, a = -48$。故 $p(x) = 8x^2 - 48x$。<br>(b) $8x^2 - 48x - c = 0$。有兩個相異實根 $\\Rightarrow \\Delta = (-48)^2 - 4(8)(-c) > 0 \\Rightarrow 2304 + 32c > 0 \\Rightarrow c > -72$。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q12",
        year: 2025,
        type: "P1",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 3,
        content: `下面的幹葉圖顯示一些運動員在訓練前的體重（以 $\\text{kg}$ 為單位）的分佈：
        <pre>
        幹(十位) | 葉(個位)
        4        | 5 6 7 8 9
        5        | 0 3 4 5 6 7 8
        6        | 2 4 w
        7        | w
        </pre>
        *(註：此處依據原卷 OCR 文本與常見題型進行數據還原模擬)* 上述分佈的分佈域與四分位數間距之差為 $25\\text{ kg}$。
        <div class="q-line"><span class="q-text">(a) 寫出上述分佈的分佈域（以 $w$ 表示）。由此，求 $w$。</span><span class="marks">(3分)</span></div>
        <div class="q-line"><span class="q-text">(b) 下面的框線圖顯示該些運動員在訓練後的體重分佈。求因訓練而引致該分佈的上四分位數的改變。</span><span class="marks">(2分)</span></div>
        <div class="q-line"><span class="q-text">(c) 該些運動員在訓練後的體重的分佈的離差是否較訓練前的小？試解釋你的答案。</span><span class="marks">(2分)</span></div>`,
        hint: `分佈域 $=$ 最大值 $-$ 最小值。四分位數間距 $= Q_3 - Q_1$。依據二者之差建立關於 $w$ 的方程。`,
        solution: `(a) 最大值為 $70+w$，最小值為 $45$，分佈域 $= 70+w - 45 = 25+w$。結合四分位數間距計算可解出 $w$。<br>(b) 讀取框線圖的上四分位數，再減去訓練前的 $Q_3$ 即可。<br>(c) 比較兩者的分佈域或四分位數間距（離差指標），若變小則同意，反之不同意。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q13",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Loci", "Coordinate Geometry", "Equations of Straight Lines"],
        difficulty: 3,
        content: `直線 $L_1: 3x-2y-30=0$ 分別與正 $x$ 軸及正 $y$ 軸相交於點 $M$ 及點 $N$。設 $P$ 為直角坐標平面上的一動點使得 $MP=NP$。將 $P$ 的軌跡記為 $L$。
        <div class="q-line"><span class="q-text">(a) 描述 $L$ 與 $MN$ 之間的幾何關係。</span><span class="marks">(1分)</span></div>
        <div class="q-line"><span class="q-text">(b) 求 $L$ 的方程。</span><span class="marks">(3分)</span></div>
        <div class="q-line"><span class="q-text">(c) 假定 $L$ 分別與 $L_1$ 及 $x$ 軸相交於點 $Q$ 及點 $R$。求四邊形 $ONQR$ 的面積，其中 $O$ 為原點。</span><span class="marks">(3分)</span></div>`,
        hint: `(a) 到兩定點距離相等的動點軌跡是該兩點連線的垂直平分線；(b) 求出 $MN$ 的中點及斜率，再利用垂直直線斜率之積為 $-1$ 求出 $L$ 的方程。`,
        solution: `(a) $L$ 是線段 $MN$ 的垂直平分線。<br>(b) 令 $y=0 \\Rightarrow M(10,0)$；令 $x=0 \\Rightarrow N(0,-15)$。中點為 $(5, -7.5)$。$MN$ 斜率為 $\\frac{15}{10} = 1.5$，故 $L$ 的斜率為 $-\\frac{2}{3}$。方程為 $y - (-7.5) = -\\frac{2}{3}(x - 5) \\Rightarrow 2x + 3y + 12.5 = 0$ (即 $4x + 6y + 25 = 0$)。<br>(c) 通過聯立方程求出交點 $Q$、直線與軸的交點 $R$，再利用割補法（三角形面積加減）計算四邊形面積。`
    }
);
