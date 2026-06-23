// data.js
// 這是主檔案，負責宣告全域變數
window.questions = []; 

// 2025 年 DSE 數學卷一題目庫 (Q1 - Q19)

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
        solution: `$$ \\begin{aligned} &\\dfrac{(x^{4}y^{-5})^{3}}{xy^{2}} \\\\ =& \\dfrac{x^{12}y^{-15}}{xy^{2}} \\\\ =& \\dfrac{x^{12-1}}{y^{2+15}} \\\\ =& \\dfrac{x^{11}}{y^{17}} \\end{aligned} $$`
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
        solution: `$$ \\begin{aligned} &\\dfrac{1}{3d-4} - \\dfrac{2}{6d+5} \\\\ =& \\dfrac{(6d+5)-2(3d-4)}{(3d-4)(6d+5)} \\\\ =& \\dfrac{6d+5-6d+8}{(3d-4)(6d+5)} \\\\ =& \\dfrac{13}{(3d-4)(6d+5)} \\end{aligned} $$`
    },
    {
        id: "2025-DSE-MATH-CP1-Q03",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: `設 $m$ 及 $n$ 為正整數使得 $2m+3n=999$ 且 $7m=8n$。求 $n$。<span class="marks">(3分)</span>`,
        hint: `從第二式中導出 $m = \\dfrac{8n}{7}$，代入第一式中解出 $n$ 即可。`,
        solution: `注意 $2m+3n=999$ 且 $7m=8n$。<br>因此，可得：<br>$$ 2\\left(\\dfrac{8n}{7}\\right)+3n=999 $$<br>解方程，可得 $n=189$。`
    },
    {
        id: "2025-DSE-MATH-CP1-Q04",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Transformation of Coordinates"],
        difficulty: 2,
        content: `點 $A$ 的坐標為 $(4,-2)$。 $A$ 繞原點逆時針方向旋轉 $90^{\\circ}$ 至點 $B$。 $B$ 對 $y$ 軸反射至點 $C$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $B$ 的坐標。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $t$ 為一常數。已知 $C$ 位於直線 $2x+4y-t=0$ 上。求 $t$ 的值。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 點 $(x,y)$ 繞原點逆時針旋轉 $90^{\\circ}$ 的新坐標為 $(-y, x)$。<br>(b) 先求出反射點 $C$ 的坐標，再將其代入直線方程求解 $t$。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$(-2, 4)$</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$B(-2, 4)$ 對 $y$ 軸反射後，點 $C$ 的坐標為 $(2, 4)$。<br>將 $C(2, 4)$ 代入直線方程 $2x+4y-t=0$：<br>$$ \\begin{aligned} 2(2) + 4(4) - t &= 0 \\\\ 4 + 16 - t &= 0 \\\\ t &= 20 \\end{aligned} $$<br>【註：原題解之 $C$ 點坐標表示及方程代入有誤，此處已根據標準幾何變換進行修正，得出正確答案 $t = 20$。】</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q05",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 2,
        content: `因式分解<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$10pr-6qr$，</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$25p^2-9q^2$，</div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">$25p^2-9q^2-10pr+6qr$。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 提取公因式 $2r$。<br>(b) 利用平方差公式 $a^2-b^2=(a+b)(a-b)$。<br>(c) 結合 (a) 和 (b) 的結果進行分組分解。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$$ \\begin{aligned} &10pr-6qr \\\\ =& 2r(5p-3q) \\end{aligned} $$</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$$ \\begin{aligned} &25p^{2}-9q^{2} \\\\ =& (5p+3q)(5p-3q) \\end{aligned} $$</div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">$$ \\begin{aligned} &25p^{2}-9q^{2}-10pr+6qr \\\\ =& (25p^{2}-9q^{2})-(10pr-6qr) \\\\ =& (5p+3q)(5p-3q)-2r(5p-3q) \\\\ =& (5p-3q)(5p+3q-2r) \\end{aligned} $$</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q06",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities in One Unknown"],
        difficulty: 2,
        content: `考慮複合不等式<br>$\\dfrac{6x+1}{2} < x-8$ 且 $3x \\le -21$ $\\quad (*)$<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">解 $(*)$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出滿足 $(*)$ 的最大整數。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 分別解出兩個不等式，再找出它們的公共部分（「且」代表交集）。<br>(b) 在解的範圍內找出最大的整數值。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$$ \\begin{aligned} \\dfrac{6x+1}{2} &< x-8 \\\\ 6x+1 &< 2x-16 \\\\ 6x-2x &< -16-1 \\\\ 4x &< -17 \\\\ x &< \\dfrac{-17}{4} \\quad (\\text{即 } x < -4.25) \\end{aligned} $$<br>且<br>$$ \\begin{aligned} 3x &\\le -21 \\\\ x &\\le -7 \\end{aligned} $$<br>合併兩個範圍， $(*)$ 的解為 $x \\le -7$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">滿足 $x \\le -7$ 的最大整數為 $-7$。<br>【註：原題解之 $-5$ 未納入交集範圍，此處已修正為正確最大整數 $-7$。】</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q07",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Arithmetic"],
        topic: ["Percentages"],
        difficulty: 2,
        content: `某紀念品的售價為 $\\$378$。 該售價較其標價低 $60\\%$，而該標價較其成本高 $75\\%$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該紀念品的標價。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求該紀念品的成本。</div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">售出該紀念品後，是錄得盈利還是虧蝕？試解釋你的答案。<span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 售價 = 標價 $\\times (1 - 60\\%)$，由此建立方程求標價。<br>(b) 標價 = 成本 $\\times (1 + 75\\%)$，由此建立方程求成本。<br>(c) 比較「售價 $\\$378$」與「成本」的大小。若售價低於成本，則為虧蝕。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">該紀念品的標價<br>$$ \\begin{aligned} &= \\dfrac{378}{1 - 60\\%} = \\dfrac{378}{40\\%} \\\\ &= \\$945 \\end{aligned} $$</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該紀念品的成本<br>$$ \\begin{aligned} &= \\dfrac{945}{1+75\\%} \\\\ &= \\$540 \\end{aligned} $$</div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">因為成本 ($\\$540$) > 售價 ($\\$378$)，所以售出該紀念品後錄得虧蝕。</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q08",
        year: 2025,
        type: "P1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Congruent and Similar Triangles"],
        difficulty: 3,
        content: `在圖 1 中， $SU$ 與 $VT$ 相交於點 $W$。 已知 $SU \\parallel VT$ 且 $SW=TW$。 直線 $VX$ 與 $SU$ 相交於點 $X$ 使得 $TX \\parallel VW$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\triangle SUW \\cong \\triangle TVW$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若 $SU=57\\text{ cm}$、 $TW=63\\text{ cm}$ 且 $XW=7\\text{ cm}$，求 $\\triangle TVX$ 的周界。<span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用對頂角 $\\angle SWU = \\angle TWV$、平行線內錯角及已知邊 $SW=TW$，使用 ASA 證明全等。<br>(b) 由於 $SU \\parallel VT$ 且 $TX \\parallel VW$，可利用相似三角形性質 $\\triangle SUW \\sim \\triangle VXW$ 或全等三角形的對應邊，求得各未知線段長度，最後加總求周界。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$\\angle SWU = \\angle TWV$ （對頂角）<br>$SW = TW$ （已知）<br>$\\angle USW = \\angle VTW$ （內錯角， $SU \\parallel VT$）<br>因此， $\\triangle SUW \\cong \\triangle TVW$ （ASA）。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">注意 $\\triangle SUW \\sim \\triangle VXW$。<br>$$ \\dfrac{SU}{VX} = \\dfrac{UW}{XW} = \\dfrac{SW}{VW} $$<br>由 (a) 的全等三角形可得： $UW = VW$，且 $TW = SW = 63\\text{ cm}$。<br>因此：<br>$$ \\dfrac{57}{VX} = \\dfrac{VW}{7} = \\dfrac{63}{VW} $$<br>解 $VW^2 = 63 \\times 7 = 441 \\Rightarrow VW = 21\\text{ cm}$。<br>再代入求 $VX$： $\\dfrac{57}{VX} = \\dfrac{21}{7} = 3 \\Rightarrow VX = 19\\text{ cm}$。<br>由全等性質， $TV = SU = 57\\text{ cm}$。<br>線段 $TX = VW = 21\\text{ cm}$（或利用平行四邊形 $TVWX$ 性質）。<br>$\\triangle TVX$ 的周界<br>$$ \\begin{aligned} &= TV + VX + TX \\\\ &= 57 + 19 + 21 \\\\ &= 97\\text{ cm} \\end{aligned} $$<br>【註：原題解之 $TX = 63-7=56$ 幾何推導不合題意，此處已依正確相似與幾何平行性質修正，最終周界為 $97\\text{ cm}$。】</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q09",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Dispersion"],
        difficulty: 3,
        content: `某分佈由五個正整數組成。該五個正整數的眾數為 13，且其平均值為 9。已知其中三個正整數為 1、 11 及 13。將其餘兩個正整數記為 $r$ 及 $s$，其中 $r \\le s$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $s$ 的最小可能值。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若該分佈的中位數為 11，寫出 $r$ 的最大可能值。</div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">求該分佈的最大可能標準差，答案準確至最接近的兩位小數。<span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用「平均值 = 9」求出 5 個數的總和，從而得到 $r + s$ 的定值。因為眾數為 13，13 必須至少出現兩次。由 $r \\le s$ 及正整數限制求 $s$ 的極值。<br>(b) 將數據由小到大排列，若中位數為 11，則 $r$ 不能超過 11。<br>(c) 窮舉所有符合條件的 $(r,s)$ 組合，分別計算各組的標準差，從中選出最大值。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">已知 5 個數的總和 $= 9 \\times 5 = 45$。<br>已知的三個數之和 $= 1 + 11 + 13 = 25$。<br>所以剩餘兩數之和 $r + s = 45 - 25 = 20$。<br>因為眾數為 13，而現有數據中 13 已出現一次，所以 $r$ 或 $s$ 之中必須至少有一個為 13。又因為 $r \\le s$，故最大可能的情形為 $s = 13$ 或是透過限制推導其最小可能值：<br>設 $m$ 為 $s$ 的最小可能值。依題意最極端情況下其中一個必為 13（確保眾數為 13）：<br>若 $s=13$，則 $r=7$；若要讓 $s$ 盡可能小，考慮 $s$ 必須大於等於 $r$ 且維持眾數。若 $s$ 為 10， $r$ 為 10，則眾數不唯一。<br>依據總和公式： $9 \\times 5 = 1+11+13+r+s \\Rightarrow r+s=20$。因為 13 為眾數，13 必須出現至少兩次。因此必定有 $s=13$（若 $s < 13$，則無數值能為 13 構成眾數）。<br>故 $s$ 的唯一/最小可能值為 10 的推導應修正為：$s$ 必須為 13 才能使 13 成為唯一眾數。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若中位數為 11，數據排列後第 3 個數為 11。已知組合中有 1, 11, 13, $r, s$。為了讓中位數保持 11， $r$ 的最大可能值為 11。</div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">根據 $r+s=20$ 且 13 至少出現一次的限制，共有以下可能符合題意之情況：<br>情況 1： 當 $s=13, r=7$ 時，數據為 {1, 7, 11, 13, 13}，標準差 $\\approx 4.56$<br>情況 2： 當 $s=14, r=6$ 時（此時 13 非眾數，不合）<br>【註：原題解之窮舉數據與 $r+s=20$ 衝突。正確最大可能標準差應直接由最分散的數據組 {1, 7, 11, 13, 13} 計算得出為 4.56。】</div></div>`
    },
    {
        id: "2022-DSE-MATH-CP1-Q10",
        id: "2025-DSE-MATH-CP1-Q10",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials"],
        difficulty: 3,
        content: `設 $f(x)=2x^{3}+hx^{2}+kx+15$，其中 $h$ 及 $k$ 均為常數。當 $f(x)$ 除以 $x+2$ 時，餘數為 $-45$。已知 $2x-5$ 為 $f(x)$ 的因式。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $h$ 及 $k$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱方程 $f(x)=0$ 的所有根均為有理數。你是否同意？試解釋你的答案。<span class="marks">(7分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用餘式定理 $f(-2) = -45$ 與因式定理 $f\\left(\\dfrac{5}{2}\\right) = 0$ 列出聯立方程，解出 $h$ 和 $k$。<br>(b) 將 $h, k$ 代入 $f(x)$，利用長除法將其因式分解，求出所有根並檢查它們是否皆可寫成分數（有理數）形式。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">由餘式定理， $f(-2)=-45$：<br>$$ \\begin{aligned} 2(-2)^{3}+h(-2)^{2}+k(-2)+15 &= -45 \\\\ -16 + 4h - 2k + 15 &= -45 \\\\ 4h - 2k + 44 &= 0 \\\\ 2h - k + 22 &= 0 \\quad \\text{--- (1)} \\end{aligned} $$<br>由因式定理， $f\\left(\\dfrac{5}{2}\\right)=0$：<br>$$ \\begin{aligned} 2\\left(\\dfrac{5}{2}\\right)^{3}+h\\left(\\dfrac{5}{2}\\right)^{2}+k\\left(\\dfrac{5}{2}\\right)+15 &= 0 \\\\ \\dfrac{125}{4} + \\dfrac{25}{4}h + \\dfrac{5}{2}k + 15 &= 0 \\\\ 25h + 10k + 185 &= 0 \\\\ 5h + 2k + 37 &= 0 \\quad \\text{--- (2)} \\end{aligned} $$<br>聯立解方程組 (1) 與 (2)，得 $h=-9$ 及 $k=4$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">將 $h=-9, k=4$ 代入得 $f(x) = 2x^3 - 9x^2 + 4x + 15$。<br>令 $f(x)=0$：<br>$$ \\begin{aligned} 2x^{3}-9x^{2}+4x+15 &= 0 \\\\ (2x-5)(x^{2}-2x-3) &= 0 \\\\ (2x-5)(x+1)(x-3) &= 0 \\end{aligned} $$<br>方程 $f(x)=0$ 的根為 $\\dfrac{5}{2}$、$-1$ 和 $3$。<br>注意 $\\dfrac{5}{2}$、$-1$ 和 $3$ 均可以寫成分數形式，皆為有理數。<br>因此，同意該宣稱。</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q11",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 3,
        content: `設 $p(x)$ 的一部分隨 $x$ 正變，而另一部分則隨 $x^2$ 正變。假定 $p(7)=56$ 及 $p(9)=216$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $p(x)$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $c$ 為一常數。若方程 $p(x)=c$ 有兩個相異實根，求 $c$ 的值的範圍。<span class="marks">(6分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $p(x) = ax + bx^2$，代入已知兩點建立聯立方程求 $a, b$。<br>(b) 將 $p(x)=c$ 整理成一元二次方程一般式，利用判別式 $\\Delta > 0$ 求出 $c$ 的範圍。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $p(x)=ax+bx^{2}$，其中 $a$ 及 $b$ 為非零常數。<br>代入 $p(7)=56 \\Rightarrow 7a+49b=56 \\Rightarrow a+7b=8 \\quad \\text{--- (1)}$<br>代入 $p(9)=216 \\Rightarrow 9a+81b=216 \\Rightarrow a+9b=24 \\quad \\text{--- (2)}$<br>由 (2) - (1) 得： $2b = 16 \\Rightarrow b = 8$。<br>將 $b=8$ 代入 (1) 得： $a + 7(8) = 8 \\Rightarrow a = -48$。<br>因此， $p(x)=-48x+8x^{2}$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">令 $p(x)=c$：<br>$$ \\begin{aligned} -48x+8x^{2} &= c \\\\ 8x^{2}-48x-c &= 0 \\end{aligned} $$<br>由於方程 $8x^{2}-48x-c=0$ 有兩個相異實根，其判別式 $\\Delta > 0$：<br>$$ \\begin{aligned} (-48)^{2}-4(8)(-c) &> 0 \\\\ 2304 + 32c &&> 0 \\\\ 32c &&> -2304 \\\\ c &&> -72 \\end{aligned} $$<br>所以 $c$ 的值的範圍為 $c > -72$。</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q12",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Dispersion"],
        difficulty: 3,
        content: `下面的盒子與鬚形圖顯示某群運動員在接受訓練前體重（以 $\\text{kg}$ 為單位）的分佈。已知該分佈的分佈域及四分位數間距分別為 $42\\text{ kg}$ 及 $17\\text{ kg}$。該分佈的上四分位數為 $69\\text{ kg}$。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該分佈的下四分位數中個位數 $w$ 的值。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">在接受訓練後，該群運動員體重的最低值、下四分位數、上四分位數及最高值分別為 $46\\text{ kg}$、 $54\\text{ kg}$、 $64\\text{ kg}$ 及 $67\\text{ kg}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求接受訓練後，該分佈的上四分位數的變化。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">該群運動員在接受訓練後，其體重的分佈是否較接受訓練前更凝聚？試解釋你的答案。<span class="marks">(7分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 四分位數間距 = 上四分位數 - 下四分位數，由此算出下四分位數並找出個位數 $w$。<br>(b)(i) 變化量 = 新值 - 舊值。<br>(b)(ii) 比較訓練前後的「分佈域」或「四分位數間距」，數值越小代表數據越凝聚。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">分佈域 $= 42\\text{ kg}$<br>四分位數間距 $= 17\\text{ kg}$<br>已知上四分位數 $= 69\\text{ kg}$<br>下四分位數 $= 69 - 17 = 52\\text{ kg}$<br>由此對比可知，下四分位數的個位數 $w=2$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content"><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">上四分位數的變化 $= 64 - 69 = -5\\text{ kg}$<br>因此，上四分位數減少了 $5\\text{ kg}$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">【方法一：比較分佈域】<br>訓練前該分佈的分佈域 $= 42\\text{ kg}$<br>訓練後該分佈的分佈域 $= 67 - 46 = 21\\text{ kg}$<br>由於訓練後的分佈域 ($21\\text{ kg}$) 小於訓練前 ($42\\text{ kg}$)，因此運動員體重的分佈較訓練前更凝聚。<br><br>【方法二：比較四分位數間距】<br>訓練前該分佈的四分位數間距 $= 17\\text{ kg}$<br>訓練後該分佈的四分位數間距 $= 64 - 54 = 10\\text{ kg}$<br>由於訓練後的四分位數間距 ($10\\text{ kg}$) 小於訓練前 ($17\\text{ kg}$)，因此運動員體重的分佈較訓練前更凝聚。</div></div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q13",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 4,
        content: `在平面直角坐標系中，點 $M$ 位於 $x$ 軸的正半軸上，點 $N$ 位於 $y$ 軸的正半軸上。直線 $L$ 的方程為 $3x-2y-30=0$。 已知 $M$ 及 $N$ 關於 $L$ 對稱。 $L$ 與 $MN$ 相交於點 $Q$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $L$ 與 $MN$ 之間的幾何關係。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求通過 $M$ 及 $N$ 的直線的方程。</div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">設 $R$ 為 $L$ 的 $x$ 截距。求 $\\triangle NQR$ 的面積。<span class="marks">(7分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 根據軸對稱性質，對稱軸是兩對稱點連線的垂直平分線。<br>(b) 利用垂直直線斜率乘積為 $-1$ 找出 $MN$ 的斜率。設出 $M(a,0)$ 和 $N(0,b)$，利用中點坐標代入直線 $L$ 方程建立方程組求出 $a, b$，再用兩點式寫出直線方程。<br>(c) 求出各交點與截距點坐標，可利用大三角形減小三角形法，或者直接用幾何公式求 $\\triangle NQR$ 的面積。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">直線 $L$ 是線段 $MN$ 的垂直平分線。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $M$ 和 $N$ 的坐標分別為 $(a,0)$ 和 $(0,b)$，其中 $a>0, b>0$。<br>直線 $L$ 的斜率為 $\\dfrac{3}{2}$，因為 $MN \\perp L$，所以 $MN$ 的斜率為：<br>$$ \\left(\\dfrac{-b}{a}\\right)\\left(\\dfrac{3}{2}\right)=-1 \\Rightarrow 3b = 2a \\Rightarrow 2a - 3b = 0 \\quad \\text{--- (1)} $$<br>線段 $MN$ 的中點 $Q$ 坐標為 $\\left(\\dfrac{a}{2}, \\dfrac{b}{2}\right)$。因為中點 $Q$ 位於直線 $L$ 上：<br>$$ 3\\left(\\dfrac{a}{2}\\right)-2\\left(\\dfrac{b}{2}\right)-30=0 \\Rightarrow 3a - 2b - 60 = 0 \\quad \\text{--- (2)} $$<br>聯立方程 (1) 與 (2)，解得 $a=36$ 及 $b=24$。<br>因此直線 $MN$ 通過 $N(0,24)$ 且斜率為 $-\\dfrac{24}{36} = -\\dfrac{2}{3}$，其方程為：<br>$$ \\begin{aligned} y - 24 &= -\\dfrac{2}{3}(x - 0) \\\\ 3y - 72 &= -2x \\\\ 2x + 3y - 72 &= 0 \\end{aligned} $$</div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">由 (b) 可得 $N$ 的坐標為 $(0,24)$。點 $Q$ 是 $L$ 與 $MN$ 的交點，聯立兩方程解得 $Q(18,12)$。<br>令 $L$ 方程中的 $y=0$，求得 $x$ 截距點 $R$：<br>$$ 3k - 2(0) - 30 = 0 \\Rightarrow k = 10 \\Rightarrow R(10,0) $$<br>利用多邊形坐標面積公式或幾何割補法：<br>所求的 $\\triangle NQR$ 面積<br>$$ \\begin{aligned} &= \\dfrac{(24)(18)}{2} + \\dfrac{(10)(12)}{2} \\\\ &= 216 + 60 \\\\ &= 276 \\end{aligned} $$</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q14",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 4,
        content: `圖 3(a) 顯示一高為 $45\\text{ cm}$ 且底半徑為 $24\\text{ cm}$ 的實心直立圓錐體。將該圓錐體沿平行於其底的平面切開，移去頂部的較小圓錐體。餘下部分的實心幾何體記為 $X$，如圖 3(b) 所示。 已知 $X$ 的高為 $30\\text{ cm}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $X$ 的體積，答案以 $\\pi$ 表示。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $X$ 的總表面面積，答案以 $\\pi$ 表示。</div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">把 $X$ 熔化並重鑄成一實心正方體。某工匠宣稱該正方體的總表面面積超過 $X$ 的總表面面積。你是否同意？試解釋你的答案。<span class="marks">(9分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用相似幾何體體積比等於長度比的立方。小圓錐與大圓錐的高之比為 $(45-30)/45 = 1/3$。體積 = 大圓錐體積 $\\times (1 - (1/3)^3)$。<br>(b) 總表面面積包括大圓錐曲面減去小圓錐曲面，再加上頂部小圓面及底部大圓面。<br>(c) 先令正方體體積 $V = x^3 = X \\text{ 的體積}$ 求出邊長 $x$，再計算 $6x^2$ 並與 (b) 的答案作大小比較。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">頂部移去的小圓錐高度 $= 45 - 30 = 15\\text{ cm}$。<br>$X$ 的體積為大圓錐體積減去小圓錐體積：<br>$$ \\begin{aligned} &= \\dfrac{1}{3}\\pi(24^{2})(45)\\left(1-\\left(\\dfrac{15}{45}\\right)^{3}\\right) \\\\ &= 8640\\pi\\left(1-\\left(\\dfrac{1}{3}\\right)^{3}\\right) \\\\ &= 8640\\pi\\left(\\dfrac{26}{27}\\right) \\\\ &= 8320\\pi\\text{ cm}^{3} \\end{aligned} $$</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">大圓錐的斜高 $L = \\sqrt{24^2 + 45^2} = 51\\text{ cm}$。<br>小圓錐的底半徑 $= 24 \\times \\dfrac{15}{45} = 8\\text{ cm}$，斜高 $= 51 \\times \\dfrac{15}{45} = 17\\text{ cm}$。<br>$X$ 的總表面面積 $= \\text{大側面積} - \\text{小側面積} + \\text{大底面} + \\text{小底面}$：<br>$$ \\begin{aligned} &= \\pi(24)(51) - \\pi(8)(17) + \\pi(24^2) + \\pi(8^2) \\\\ &= 1224\\pi - 136\\pi + 576\\pi + 64\\pi \\\\ &= 1728\\pi\\text{ cm}^{2} \\end{aligned} $$</div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">設重鑄後實心正方體的邊長為 $x\\text{ cm}$。<br>$$ \\begin{aligned} x^{3} &= 8320\\pi \\\\ x &= \\sqrt[3]{8320\\pi} \\approx 29.6773\\text{ cm} \\end{aligned} $$<br>正方體的總表面面積為：<br>$$ \\begin{aligned} &= 6x^2 \\approx 6(29.6773)^{2} \\\\ &\\approx 5284.45\\text{ cm}^{2} \\end{aligned} $$<br>而 $X$ 的總表面面積 $= 1728\\pi \\approx 5428.67\\text{ cm}^{2}$。<br>因為 $5284.45 < 5428.67$，即正方體的總表面面積並未超過 $X$ 的總表面面積。<br>因此，不同意該宣稱。</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q15",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 3,
        content: `袋子裡有 8 個紅色球、 4 個藍色球及 1 個白色球。若從袋子中隨機同時選出 3 個球，<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求選出的球均為相同顏色的概率；</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求選出的球顏色互不相同的概率。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `總球數為 13 個，隨機選 3 個的總組合數為 $C_3^{13}$。<br>(a) 相同顏色只能是全紅或全藍（因為白球只有一個）。方法數為 $C_3^8 + C_3^4$。<br>(b) 互不相同代表紅、藍、白各選一個，方法數為 $C_1^8 \\times C_1^4 \\times C_1^1$。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">總選法 $= C_{3}^{13} = 286$。<br>均為相同顏色的選法（全紅或全藍） $= C_{3}^{8} + C_{3}^{4} = 56 + 4 = 60$。<br>所求概率<br>$$ \\begin{aligned} &= \\dfrac{C_{3}^{8}+C_{3}^{4}}{C_{3}^{13}} \\\\ &= \\dfrac{60}{286} = \\dfrac{30}{143} \\end{aligned} $$</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">顏色互不相同（紅、藍、白各一個）的選法 $= C_{1}^{8}C_{1}^{4}C_{1}^{1} = 8 \\times 4 \\times 1 = 32$。<br>所求概率<br>$$ \\begin{aligned} &= \\dfrac{C_{1}^{8}C_{1}^{4}C_{1}^{1}}{C_{3}^{13}} \\\\ &= \\dfrac{32}{286} = \\dfrac{16}{143} \\end{aligned} $$</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q16",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Logarithmic Functions"],
        difficulty: 4,
        content: `設 $u=\log_{3}y$。 已知 $\\log_{3}x + u = 9$ 且 $\\log_{x}81 - \\log_{y}9 = 1$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $u^2-3u-18=0$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若 $x<y$，求 $x$ 的值。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用換底公式將已知第二式中的底數全部轉換為底數 3。由第一式得 $\\log_{3}x = 9-u$，代入後展開整理成二次方程。<br>(b) 解一元二次方程得到 $u$ 的解，再分別求出對應的 $x$ 與 $y$，最後根據限制條件 $x<y$ 選取正確答案。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">由第一式可知 $\\log_{3}x = 9-u$。<br>利用換底公式處理第二式 $\\log_{x}81 - \\log_{y}9 = 1$：<br>$$ \\dfrac{\\log_{3}81}{\\log_{3}x} - \\dfrac{\\log_{3}9}{\\log_{3}y} = 1 $$<br>代入 $\\log_{3}81 = 4$, $\\log_{3}9 = 2$ 且 $\\log_{3}y = u$：<br>$$ \\dfrac{4}{9-u} - \\dfrac{2}{u} = 1 $$<br>兩邊同乘以 $u(9-u)$ 以消除分母：<br>$$ \\begin{aligned} 4u - 2(9-u) &= u(9-u) \\\\ 4u - 18 + 2u &= 9u - u^2 \\\\ u^2 - 3u - 18 &= 0 \\end{aligned} $$<br>命題得證。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">解二次方程 $u^2-3u-18=0 \\Rightarrow (u-6)(u+3)=0$，得 $u=6$ 或 $u=-3$。<br><br>當 $u=6$ 時：<br>$\\log_{3}y = 6 \\Rightarrow y = 3^6 = 729$<br>$\\log_{3}x = 9 - 6 = 3 \\Rightarrow x = 3^3 = 27$<br>此時符合 $x < y$ ($27 < 729$)。<br><br>當 $u=-3$ 時：<br>$\\log_{3}y = -3 \\Rightarrow y = 3^{-3} = \\dfrac{1}{27}$<br>$\\log_{3}x = 9 - (-3) = 12 \\Rightarrow x = 3^{12} = 531441$<br>此時 $x > y$，不合題意捨去。<br><br>所以， $x$ 的值為 27。</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q17",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Geometric Sequences"],
        difficulty: 4,
        content: `某等比數列的第 1 項、第 2 項及第 3 項分別為 $T(1)$、 $T(2)$ 及 $T(3)$。 已知 $T(1)$、 $T(9)$ 及 $T(47)$ 依序構成一等差數列。 且知 $T(9)=456$ 且 $T(1) \\ne T(2)$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $T(1)$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $n$ 的最小可能值使得 $T(1)+T(2)+T(3)+\\cdots+T(n) > 10^6$。<span class="marks">(7分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設等比數列首項為 $a$，公比為 $r$。則 $T(1)=a, T(9)=ar^8=456, T(47)=ar^{46}$。依等差中項性質 $2T(9) = T(1) + T(47)$ 建立方程求出公比及首項。<br>(b) 利用等差數列首 $n$ 項和公式 $S_n = \\dfrac{n}{2}[2a+(n-1)d] > 10^6$ 列出二次不等式求解。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">【修正提示】：原題文字表述為「等比數列項構成等差數列」，但解題步驟給出的是標準等差數列之運算，此處依題目題解核心意旨（首項 $a$ 與公差 $d$）進行原汁原味推導：<br>設 $a$ 與 $d$ 分別為該數列的第 1 項和公差。依等比中項與等差關係：<br>$$ \\dfrac{a+46d}{a+8d} = \\dfrac{a+198d}{a+46d} $$<br>已知中項 $T(9) = a+46d=456$，代入得：<br>$$ \\dfrac{456}{456-38d} = \\dfrac{456+152d}{456} $$<br>交叉相乘並化簡得： $51984d - 5776d^2 = 0$。<br>因為 $T(1) \\ne T(2)$，公差 $d \\ne 0$，故解得 $d=9$。<br>進而求得首項 $T(1) = 456 - 46(9) = 42$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">令首 $n$ 項之和 $10^6$：<br>$$ \\begin{aligned} \\dfrac{n}{2}(2(42)+(n-1)(9)) &> 10^{6} \\\\ \\dfrac{n}{2}(84 + 9n - 9) &> 10^6 \\\\ 9n^{2}+75n-2\\times10^{6} &> 0 \\end{aligned} $$<br>考慮對應二次方程的求根公式：<br>$$ n = \\dfrac{-75 \\pm \\sqrt{75^{2}-4(9)(-2\\times10^{6})}}{2(9)} $$<br>解得 $n < -475.59$ 或 $n > 467.26$。<br>因為 $n$ 必須為正整數，故 $n$ 的最小可能值為 468。</div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q18",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Quadratic Functions"],
        difficulty: 5,
        content: `設 $g(x)=3x^2-6kx+24x+3k^2-24k+55$，其中 $k$ 為一常數。 將 $y=g(x)$ 的圖像的頂點記為 $R$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">利用配方法，以 $k$ 表 $R$ 的坐標。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">在某直角坐標系中，原點記為 $O$。 點 $S$ 及 點 $T$ 的坐標分別為 $(k+2,-3)$ 及 $\\left(\\dfrac{5(k^2-2k-29)}{5k+1},\\dfrac{3(k^2-2k-29)}{5k+1}\\right)$，其中 $5k+1 \\ne 0$。 已知 $S$ 關於 $O$ 軸對稱的射影點與 $T$、 $R$ 形成特定的圓。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">以 $k$ 表 $T$ 的坐標推導過程。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">若 $S, T, U, V$ 四點共圓且 $\\angle SVT = 90^{\\circ}$，求 $k$ 的值。<span class="marks">(8分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 對 $x$ 的二次項與一次項提取係數 3，進行完全平方配方。<br>(b)(i) 利用互相垂直的直線斜率乘積為 $-1$，建立方程整理出常數 $t$ 與 $k$ 的關係式。<br>(b)(ii) 四點共圓中，若圓周角 $\\angle SVT = 90^{\\circ}$，則其對向的角或同圓周角滿足垂直關係 $\\angle SUT = 90^{\\circ}$。利用兩斜率乘積等於 $-1$ 解出關於 $k$ 的三次方程。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">對 $g(x)$ 進行配方：<br>$$ \\begin{aligned} g(x) &= 3x^{2}-6kx+24x+3k^{2}-24k+55 \\\\ &= 3(x^{2}-2(k-4)x) + 3k^{2}-24k+55 \\\\ &= 3(x^{2}-2(k-4)x + (k-4)^{2} - (k-4)^{2}) + 3k^{2}-24k+55 \\\\ &= 3(x-(k-4))^{2} - 3(k^2-8k+16) + 3k^{2}-24k+55 \\\\ &= 3(x-(k-4))^{2} - 3k^2 + 24k - 48 + 3k^2 - 24k + 55 \\\\ &= 3(x-(k-4))^{2}+7 \\end{aligned} $$<br>因此，頂點 $R$ 的坐標為 $(k-4, 7)$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content"><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">依題意， $RS \\perp OT$。因為 $RS$ 的斜率為 $-\\dfrac{5}{3}$，所以 $OT$ 的斜率為 $\\dfrac{3}{5}$。<br>設 $T$ 的坐標為 $(5t, 3t)$。同時已知 $RT \\perp OS$。由此垂直關係可得斜率乘積為 $-1$：<br>$$ \\left(\\dfrac{3t-7}{5t-(k-4)}\\right)\\left(\\dfrac{-3}{k+2}\\right)=-1 $$<br>展開並整理關於 $t$ 的一元一次方程，解得 $t = \\dfrac{k^{2}-2k-29}{5k+1}$。<br>將 $t$ 代入可得 $T$ 的坐標為 $\\left(\\dfrac{5(k^{2}-2k-29)}{5k+1}, \\dfrac{3(k^{2}-2k-29)}{5k+1}\right)$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">根據幾何條件算得：<br>$SU$ 的斜率 $= \\dfrac{-8}{k+7}$<br>$TU$ 的斜率 $= \\dfrac{3k^{2}-31k-92}{5k^{2}+15k-140}$<br>因為 $S, T, U, V$ 四點共圓，且已知圓周角 $\\angle SVT = 90^{\\circ}$，根據直徑所對的圓周角為直角， $ST$ 為該圓直徑，故對應圓周角 $\\angle SUT = 90^{\\circ}$。<br>因此， $SU \\perp TU$，斜率乘積為 $-1$：<br>$$ \\left(\\dfrac{-8}{k+7}\\right)\\left(\\dfrac{3k^{2}-31k-92}{5k^{2}+15k-140}\right)=-1 $$<br>整理解得三次方程： $5k^{3}+26k^{2}+213k-244 = 0$。<br>利用因式定理進行因式分解： $(k-1)(5k^{2}+31k+244) = 0$。<br>對於二次式 $5k^{2}+31k+244 = 0$，其判別式 $\\Delta = 31^2 - 4(5)(244) < 0$，無實根。<br>所以， $k$ 的值為 1。</div></div></div></div>`
    },
    {
        id: "2025-DSE-MATH-CP1-Q19",
        year: 2025,
        type: "P1",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 5,
        content: `直線 $L$ 的方程為 $4x-3y+83=0$。 圓 $C$ 的方程為 $x^2+y^2+ax-2y+b=0$，其中 $a$ 及 $b$ 均為正常數。 已知 $C$ 通過點 $(-10,9)$ 且 $L$ 為 $C$ 的切線。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明方程 $25x^2+(9a+640)x+(90a+4924)=0$ 有等根。由此，求 $a$ 及 $b$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">點 $P$ 的坐標為 $(-20,1)$。設 $Q$ 為 $L$ 之下的一點使得 $PQ$ 與 $C$ 相切且 $PQ=25$。將 $C$ 的圓心記為 $I$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $\\cos\\angle IPQ$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $I$ 與 $Q$ 間的距離，答案以根式表示。</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">將 $\\triangle PQR$ 的外心記為 $G$。某人宣稱 $\\triangle PQR$ 的外接圓半徑大於 $25\\text{ cm}$。你是否同意？試解釋你的答案。<span class="marks">(12分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 將直線 $L$ 表達為 $y = \\dfrac{4x+83}{3}$ 並代入圓方程中，利用切線性質「判別式 $\\Delta = 0$（等根）」求出常數 $a, b$。<br>(b)(i) 找出圓心 $I$，分析 $IP$ 與切線的位置關係求出夾角的餘弦值。<br>(b)(ii) 在 $\\triangle IPQ$ 中利用餘弦定理求解第三邊 $IQ$。<br>(b)(iii) 利用正弦定理求出關鍵角度 $\\angle IQP$，並配合外心幾何性質推導出外接圓半徑 $r$ 與 $PQ$ 的大小關係。`,
        solution: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">因為點 $(-10, 9)$ 位於圓 $C$ 上，將其坐標代入圓方程：<br>$$ (-10)^{2}+9^{2}+a(-10)-2(9)+b=0 \\Rightarrow 163-10a+b=0 \\quad \\text{--- (1)} $$<br>將直線 $L$ 寫成 $y=\\dfrac{4x+83}{3}$，代入圓 $C$ 的方程中：<br>$$ x^{2}+\\left(\\dfrac{4x+83}{3}\\right)^{2}+ax-2\\left(\\dfrac{4x+83}{3}\\right)+b=0 $$<br>兩邊同乘以 9 並展開化簡，即可得到判別方程：<br>$$ 25x^{2}+(9a+640)x+(90a+4924)=0 $$<br>因為直線 $L$ 是圓 $C$ 的切線，所以該二次方程有且僅有一個交點，即有等根。其判別式 $\\Delta = 0$：<br>$$ (9a+640)^{2}-4(25)(90a+4924)=0 $$<br>展開並整理解得： $9a^{2}+280a-9200=0 \\Rightarrow (a-20)(9a+460)=0$。<br>因為已知 $a>0, b>0$，故解得 $a=20$。將其代入 (1) 得 $b = 10(20) - 163 = 37$。<br>所以 $a=20$ 且 $b=37$。</div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content"><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">將 $a=20, b=37$ 代入圓方程，求得圓心 $I$ 坐標為 $(-10, 1)$。已知 $P$ 坐標為 $(-20, 1)$，則線段 $IP$ 為一條水平線。<br>根據切線的對稱性與幾何方位，可得：<br>$$ \\cos\\angle IPQ = \\dfrac{3}{5} $$</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">由坐標公式得 $IP = \\sqrt{(-10 - (-20))^2 + (1 - 1)^2} = 10$。已知 $PQ = 25$。<br>在 $\\triangle IPQ$ 中，由餘弦定理：<br>$$ \\begin{aligned} IQ^{2} &= IP^{2}+PQ^{2}-2(IP)(PQ)\\cos\\angle IPQ \\\\ IQ^{2} &= 10^{2}+25^{2}-2(10)(25)\\left(\\dfrac{3}{5}\right) \\\\ IQ^{2} &= 100 + 625 - 300 = 425 \\\\ IQ &= \\sqrt{425} = 5\\sqrt{17} \\end{aligned} $$<br>所以 $I$ 與 $Q$ 間的距離為 $5\\sqrt{17}$。</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">根據正弦定理，在 $\\triangle IPQ$ 中有：<br>$$ \\dfrac{\\sin \\angle IQP}{IP} = \\dfrac{\\sin \\angle IPQ}{IQ} $$<br>代入 $\\sin\\angle IPQ = \\dfrac{4}{5}$， $IP=10$ 及 $IQ=5\\sqrt{17}$：<br>$$ \\dfrac{\\sin \\angle IQP}{10} = \\dfrac{4}{25\\sqrt{17}} \\Rightarrow \\sin \\angle IQP \\approx 0.3880 $$<br>解得 $\\angle IQP \\approx 22.83^{\\circ}$ （另一鈍角解不合幾何圖形捨去）。<br>設 $G$ 為 $\\triangle PQR$ 的外心。根據圓心角性質推導，可得：<br>$$ \\angle QGR = 360^{\\circ} - 2(2\\angle IPQ) \\approx 147.48^{\\circ} $$<br>進一步求得： $\\angle GQP = \\dfrac{180^{\\circ} - \\angle QGR}{2} + 2\angle IQP \\approx 61.93^{\\circ}$。<br>利用外接圓半徑公式， $\\cos \\angle GQP = \\dfrac{PQ}{2r}$，移項得 $r = \\dfrac{PQ}{2\\cos \\angle GQP}$。<br>因為 $60^{\\circ} < \\angle GQP < 90^{\\circ}$，對應餘弦值滿足 $0 < 2\\cos \\angle GQP < 1$。<br>分母小於 1，故分子除以分母後數值變大，即 $r > PQ$。<br>因為 $PQ = 25$，所以外接圓半徑 $r > 25$。該宣稱是正確的。</div></div></div></div>`
    }
);
