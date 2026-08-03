// 2025dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2025-DSE-MATH-CP2-Q01",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `$\\dfrac{(27x)^5}{(3x^{-2})^4} =$
<div class="q-mcopt">
A.	$3^2 x^3$。 <br>
B.	$3^4 x^3$。 <br>
C.	$3^{11} x^{13}$。 <br>
D.	$3^{14} x^{13}$。 
</div>`,
        hint: `先化簡指數，注意 $27=3^3$。`,
        solution: `C (88%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q02",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `$36 - (3m + 4n)^2 =$
<div class="q-mcopt">
A.	$(6 + 3m + 4n)(6 - 3m + 4n)$。 <br>
B.	$(6 + 3m + 4n)(6 - 3m - 4n)$。 <br>
C.	$(6 + 3m - 4n)(6 - 3m + 4n)$。 <br>
D.	$(6 + 3m - 4n)(6 - 3m - 4n)$。 
</div>`,
        hint: `應用平方差公式 $a^2-b^2=(a-b)(a+b)$。`,
        solution: `B (78%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q03",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 1,
        content: `若 $a$ 及 $b$ 均為常數使得 $(x+8)(x+a)+b \\equiv x^2 + 5a(x+3)$，則 $b=$
<div class="q-mcopt">
A.	$-14$。 <br>
B.	$-2$。 <br>
C.	$2$。 <br>
D.	$14$。 
</div>`,
        hint: `展開兩邊並比較係數。`,
        solution: `D (79%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q04",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `若 $(3c+1)(d-4) = 2d(5c-1)$，則 $c=$
<div class="q-mcopt">
A.	$\\dfrac{3d-4}{7d+12}$。<br>
B.	$\\dfrac{3d+4}{7d-12}$。<br>
C.	$\\dfrac{7d-12}{3d+4}$。<br>
D.	$\\dfrac{7d+12}{3d-4}$。
</div>`,
        hint: `展開後將含 $c$ 的項移至同一邊。`,
        solution: `A (80%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q05",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: `設 $k$ 為一常數。 解方程 $x^2+4x=k^2-2k-3$。 
<div class="q-mcopt">
A.	$x=k-3$  或  $x=-k-1$<br>
B.	$x=k-3$  或  $x=-k+1$<br>
C.	$x=k+3$  或  $x=-k-1$<br>
D.	$x=k+3$  或  $x=-k+1$
</div>`,
        hint: `移項後因式分解或配方。`,
        solution: `A (58%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q06",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: `若 $x=5.67$（準確至二位小數），求 $x$ 值的範圍。 
<div class="q-mcopt">
A.	$5.66 < x \\le 5.68$<br>
B.	$5.66 \\le x < 5.68$<br>
C.	$5.665 < x \\le 5.675$<br>
D.	$5.665 \\le x < 5.675$
</div>`,
        hint: `準確至二位小數的範圍為中間值的一半單位。`,
        solution: `D (80%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q07",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: `$4y+1 < 5y-3 \\le 8y-9$ 的解為
<div class="q-mcopt">
A.	$y > -4$。<br>
B.	$y \\ge -2$。<br>
C.	$y \\ge 2$。<br>
D.	$y > 4$。
</div>`,
        hint: `分開處理兩個不等式再取交集。`,
        solution: `D (66%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q08",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 1,
        content: `設 $\\mathrm{f}(x) = x^2 + 7x + k$，其中 $k$ 為一常數。 若 $\\mathrm{f}(4) + \\mathrm{f}(-4) = 38$，求 $k$。 
<div class="q-mcopt">
A.	$-6$<br>
B.	$-3$<br>
C.	$3$<br>
D.	$6$
</div>`,
        hint: `直接代入 $x=4$ 及 $x=-4$ 計算。`,
        solution: `C (85%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q09",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: `設 $\\mathrm{p}(x) = nx^3 - 3nx + 36$，其中 $n$ 為一常數。 若 $x+3$ 為 $\\mathrm{p}(x)$ 的因式，則 $\\mathrm{p}(3) =$
<div class="q-mcopt">
A.	$-2$。<br>
B.	$0$。<br>
C.	$2$。<br>
D.	$72$。
</div>`,
        hint: `先用因式定理求 $n$，再代入 $p(3)$。`,
        solution: `D (74%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q10",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `存款 $\\$40~000$，年利率 $3\\%$，年期 $5$ 年，複利計算，每半年一結。 求本利和準確至最接近的元。 
<div class="q-mcopt">
A.	$\\$46~000$<br>
B.	$\\$46~371$<br>
C.	$\\$46~422$<br>
D.	$\\$46~465$
</div>`,
        hint: `半年利率為 $1.5\\%$，共 $10$ 期複利。`,
        solution: `C (78%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q11",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 2,
        content: `若 $\\alpha$、$\\beta$ 及 $\\gamma$ 均為非零的常數使得 $(\\alpha + 2\\beta):(\\beta + 2\\gamma):(\\gamma + 2\\alpha) = 4:9:5$，則 $\\alpha:\\beta =$
<div class="q-mcopt">
A.	$2:5$。<br>
B.	$5:2$。<br>
C.	$128:149$。<br>
D.	$149:128$。
</div>`,
        hint: `設比例常數後建立方程組求解。`,
        solution: `A (51%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q12",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: `已知 $z$ 隨 $x$ 的立方正變且隨 $y$ 的平方反變。 當 $x = 3$ 及 $y = 6$ 時，$z = 3$。 當 $x = 5$ 及 $y = 2$ 時，$z =$
<div class="q-mcopt">
A.	$5$。 <br>
B.	$25$。 <br>
C.	$125$。 <br>
D.	$243$。 
</div>`,
        hint: `寫出 $z = k \\dfrac{x^3}{y^2}$ 並求 $k$。`,
        solution: `C (80%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q13",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `設 $a_n$ 為某數列的第 $n$ 項。 若 $a_2 = 3$ 、 $a_5 = 41$ 及對任意正整數 $n$，$a_{n+2} = 2a_{n+1} + a_n$，則 $a_6 =$
<div class="q-mcopt">
A.	$99$。 <br>
B.	$101$。 <br>
C.	$239$。 <br>
D.	$243$。 
</div>`,
        hint: `先求 $a_3$、$a_4$ 再求 $a_6$。`,
        solution: `A (60%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q14",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: `圖中，直線 $L$ 的方程為 $px + qy = 7$。 下列何者正確？
<div class="q-mcms"><img src="img/2025dsep2q14.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.	$p > 7$
II.	$q > 7$
III.	$q > p$
</div>
<div class="q-mcopt">
A.	只有 I<br>
B.	只有 II<br>
C.	只有 I 及 III<br>
D.	只有 II 及 III
</div><div style="clear: both;"></div>`,
        hint: `觀察截距判斷 $p$ 與 $q$ 的大小。`,
        solution: `A (53%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q15",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 3,
        content: `扇形 $OMN$ 的周界為 $12\\pi$ cm，其中 $O$ 為扇形 $OMN$ 的圓心。 若扇形 $OMN$ 的半徑為 $3\\pi$ cm，則下列何者正確？
<div class="q-mcms">
I.	扇形 $OMN$ 的面積為 $9\\pi^2$ cm$^2$。 
II.	$\\Delta OMN$ 的周界少於 $35$ cm。 
III.	扇形 $OMN$ 的角大於 $100^\\circ$。 
</div>
<div class="q-mcopt">
A.	只有 I 及 II<br>
B.	只有 I 及 III<br>
C.	只有 II 及 III<br>
D.	I、II 及 III
</div>`,
        hint: `先求弧長及圓心角，再比較各量。`,
        solution: `D (25%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q16",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `一實心直立圓柱體的高及總表面面積分別為 $35$ cm 及 $492\\pi$ cm$^2$。 若一實心球體的半徑等於該圓柱體的底半徑，則該球體的體積為
<div class="q-mcopt">
A.	$144\\pi$ cm$^3$。 <br>
B.	$288\\pi$ cm$^3$。 <br>
C.	$576\\pi$ cm$^3$。 <br>
D.	$864\\pi$ cm$^3$。 
</div>`,
        hint: `用總表面積公式求半徑。`,
        solution: `B (65%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q17",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一平行四邊形。 設 $E$ 、 $F$ 及 $G$ 分別為 $AB$ 、 $AD$ 及 $CD$ 上的點使得 $BE = 3AE$ 、 $2DF = 3AF$ 及 $DG = 2CG$。 已知 $BC$ 的延線與 $EG$ 的延線相交於點 $H$。 若 $\\Delta CGH$ 的面積為 $16$ cm$^2$，則四邊形 $DFBG$ 的面積為
<div class="q-mcopt"><img src="img/2025dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px;">
A.	$46$ cm$^2$。 <br>
B.	$49$ cm$^2$。 <br>
C.	$105$ cm$^2$。 <br>
D.	$115$ cm$^2$。 
</div><div style="clear: both;"></div>`,
        hint: `利用面積比與高度或底的比例關係。`,
        solution: `B (39%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q18",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: `圖中所示為三角形 $WXY$。 設 $Z$ 為 $WY$ 上的一點使得 $WY:XY = XY:YZ$。 若 $WX=65$ cm 、 $WZ=25$ cm 及 $XZ=60$ cm，則 $XY =$
<div class="q-mcopt"><img src="img/2025dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px;">
A.	$131$ cm。<br>
B.	$144$ cm。<br>
C.	$156$ cm。<br>
D.	$169$ cm。
</div><div style="clear: both;"></div>`,
        hint: `考慮相似三角形 $\\Delta WXY \\sim \\Delta XZY$。`,
        solution: `C (43%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q19",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 3,
        content: `圖中，$ABCD$ 為一正方形。 設 $E$ 為一點使得 $CDEF$ 為一菱形，其中 $F$ 為 $AC$ 的延線上的一點。 延長 $DF$ 至點 $G$ 使得 $AF//BG$。 下列何者正確？
<div class="q-mcms"><img src="img/2025dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px;">
I.	$DF = FG$
II.	$\\Delta BFG \\sim \\Delta DEF$
III.	$\\angle ABG + \\angle BFD = 180^\\circ$
</div>
<div class="q-mcopt">
A.	只有 I 及 II<br>
B.	只有 I 及 III<br>
C.	只有 II 及 III<br>
D.	I、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `利用正方形與菱形的性質及平行線。`,
        solution: `D (26%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q20",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: `已知 $PQRS$ 為一梯形且 $PQ//SR$。 若 $PS = 41$ cm 、 $RS = 53$ cm 、 $\\angle PSR = 120^\\circ$ 及 $\\angle QRS = 150^\\circ$，則 $PQ =$
<div class="q-mcopt">
A.	$82$ cm。 <br>
B.	$100$ cm。 <br>
C.	$106$ cm。 <br>
D.	$135$ cm。 
</div>`,
        hint: `作高並用餘弦定理或分割梯形。`,
        solution: `D (38%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q21",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一長方形。 已知 $AE = 20$ cm 及 $\\angle AED = 90^\\circ$。 若 $\\Delta ADE$ 的面積為 $150$ cm$^2$，則由 $E$ 至 $CD$ 的垂直距離為
<div class="q-mcopt"><img src="img/2025dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px;">
A.	$8$ cm。 <br>
B.	$9$ cm。 <br>
C.	$12$ cm。 <br>
D.	$15$ cm。 
</div><div style="clear: both;"></div>`,
        hint: `先求 $AD$ 及 $DE$，再求垂直距離。`,
        solution: `B (58%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q22",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$RSTUV$ 為一圓。 已知 $RT//VU$ 及 $RT$ 為 $\\triangle SRU$ 的角平分線。 若 $\\angle RTS = \\angle URV = 33^\\circ$，則 $\\angle RUT =$
<div class="q-mcopt"><img src="img/2025dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px;">
A.	$36^\\circ$。 <br>
B.	$49^\\circ$。 <br>
C.	$65^\\circ$。 <br>
D.	$71^\\circ$。 
</div><div style="clear: both;"></div>`,
        hint: `利用圓周角、平行線及角平分線性質。`,
        solution: `D (40%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q23",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 3,
        content: `圖中所示為四邊形 $ABCD$。 若 $\\angle ABC + \\angle ADC = \\angle ACD = \\angle BAC = 90^\\circ$，則下列何者必為正確？
<div class="q-mcopt"><img src="img/2025dsep2q23.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px;">
A.	$\\tan \\angle ACB = \\dfrac{AB}{AD}$<br>
B.	$\\tan \\angle ACB = \\dfrac{AB}{CD}$<br>
C.	$\\tan \\angle ADC = \\dfrac{BC}{AD}$<br>
D.	$\\tan \\angle ADC = \\dfrac{BC}{CD}$
</div><div style="clear: both;"></div>`,
        hint: `觀察直角並表達各角的正切。`,
        solution: `C (22%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q24",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 3,
        content: `點 $X$、點 $Y$ 及點 $Z$ 的極坐標分別為 $(1, 20^\\circ)$、$(2, 80^\\circ)$ 及 $(r, \\theta)$，其中 $20^\\circ < \\theta < 80^\\circ$。 若 $\\Delta XYZ$ 為一等邊三角形，求 $r$。 
<div class="q-mcopt">
A.	$\\sqrt{3}$<br>
B.	$\\sqrt{5}$<br>
C.	$\\sqrt{7}$<br>
D.	$\\sqrt{10}$
</div>`,
        hint: `用極坐標距離公式及等邊條件。`,
        solution: `C (25%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q25",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 2,
        content: `將原點記為 $O$。 點 $A$ 的坐標為 $(a, 2a)$，其中 $a > 0$。 設 $P$ 為直角坐標平面上的一動點使得 $AP = OA$。 $P$ 的軌跡為一
<div class="q-mcopt">
A.	點。 <br>
B.	圓。 <br>
C.	菱形。 <br>
D.	直線。 
</div>`,
        hint: `寫出 $AP = OA$ 的距離方程。`,
        solution: `B (58%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q26",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: `直線 $L_1$ 與直線 $L_2$ 互相垂直。 $L_1$ 及 $L_2$ 的方程分別為 $3x+4y-20=0$ 及 $mx+ny-20=0$，其中 $m$ 及 $n$ 均為常數。 假定 $L_1$ 及 $L_2$ 分別與 $x$ 軸相交於點 $A$ 及點 $B$。 設 $C$ 為 $L_1$ 與 $L_2$ 的交點。 已知 $C$ 在 $x$ 軸之上方。 若 $\\Delta ABC$ 的面積為 $6$，求 $n$。 
<div class="q-mcopt">
A.	$-12$<br>
B.	$-9$<br>
C.	$9$<br>
D.	$12$
</div>`,
        hint: `垂直條件 $3m+4n=0$，並用面積求 $n$。`,
        solution: `B (34%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q27",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: `圓 $C$ 的圓心的坐標為 $(7, -5)$。 若 $C$ 與 $x$ 軸相交於點 $P$ 及點 $Q$ 使得 $PQ = 24$，則 $C$ 的方程為
<div class="q-mcopt">
A.	$x^2+y^2-14x+10y-95=0$。 <br>
B.	$x^2+y^2+14x-10y-95=0$。 <br>
C.	$x^2+y^2-14x+10y-119=0$。 <br>
D.	$x^2+y^2+14x-10y-119=0$。 
</div>`,
        hint: `用圓心到 $x$ 軸距離及弦長求半徑。`,
        solution: `A (52%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q28",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `一盒子內有六張分別記有數字 $2$、$2$、$2$、$3$、$4$ 及 $5$ 的紙卡。 在一遊戲中，從該盒子內隨機抽出一個數字，並將根據下表獲得若干個代幣：
        <table class="q-table" style="margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
    </colgroup>
    <tr>
      <th style="border: 1px solid #000; text-align: center; padding: 6px 10px;">所抽出的數字</th>
      <td style="border: 1px solid #000; text-align: center; padding: 6px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 6px 10px;">3</td>
      <td style="border: 1px solid #000; text-align: center; padding: 6px 10px;">4</td>
      <td style="border: 1px solid #000; text-align: center; padding: 6px 10px;">5</td>
    </tr>
    <tr>
      <th style="border: 1px solid #000; text-align: center; padding: 6px 10px;">所獲代幣的數目</th>
      <td style="border: 1px solid #000; text-align: center; padding: 6px 10px;">10</td>
      <td style="border: 1px solid #000; text-align: center; padding: 6px 10px;">15</td>
      <td style="border: 1px solid #000; text-align: center; padding: 6px 10px;">25</td>
      <td style="border: 1px solid #000; text-align: center; padding: 6px 10px;">50</td>
    </tr>
  </table>
求在該遊戲中所獲代幣的數目的期望值。 
<div class="q-mcopt">
A.	$3$<br>
B.	$4$<br>
C.	$20$<br>
D.	$25$
</div>`,
        hint: `計算各結果的概率再求期望值。`,
        solution: `C (60%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q29",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 1,
        content: `下面的棒形圖顯示一些教師在某月內的閱書數目的分佈。 求該分佈的四分位數間距。 
<div class="q-mcopt"><img src="img/2025dsep2q29zh.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px;">
A.	$1$<br>
B.	$2$<br>
C.	$3$<br>
D.	$4$
</div><div style="clear: both;"></div>`,
        hint: `從棒形圖找出 $Q_1$ 及 $Q_3$。`,
        solution: `A (73%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q30",
        year: 2025,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 2,
        content: `考慮以下數據：
<table class="q-table" style="margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
    </colgroup>
    <tr>
      <td style="border: 0px; text-align: center; padding: 0px 0px;">$\\alpha$</th>
      <td style="border: 0px; text-align: center; padding: 0px 0px;">$\\beta$</td>
      <td style="border: 0px; text-align: center; padding: 0px 0px;">$-4$</td>
      <td style="border: 0px; text-align: center; padding: 0px 0px;">$-3$</td>
      <td style="border: 0px; text-align: center; padding: 0px 0px;">$1$</td>
      <td style="border: 0px; text-align: center; padding: 0px 0px;">$1$</td>
      <td style="border: 0px; text-align: center; padding: 0px 0px;">$1$</td>
      <td style="border: 0px; text-align: center; padding: 0px 0px;">$4$</td>
    </tr>
  </table>
$\\alpha$　　$\\beta$　　$-4$　　$-3$　　$1$　　$1$　　$1$　　$4$
將以上數據的眾數及中位數分別記為 $s$ 及 $t$。 若以上數據的平均值及分佈域分別為 $0$ 及 $10$，則下列何者正確？
<div class="q-mcms">
I.	$s = 1$
II.	$t = -1$
III.	$\\alpha + \\beta = 0$
</div>
<div class="q-mcopt">
A.	只有 I 及 II<br>
B.	只有 I 及 III<br>
C.	只有 II 及 III<br>
D.	I、II 及 III
</div>`,
        hint: `用平均值及分佈域求 $\\alpha$、 $\\beta$，再判斷中位數。`,
        solution: `B (59%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q31",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: `<div style="color: red;">$\\text{3E000000000000}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.	$2^{16} + 2^{15} + 2^{14} + 2^{13} + 2^{12}$。 <br>
B.	$2^{17} + 2^{16} + 2^{15} + 2^{14} + 2^{13}$。 <br>
C.	$2^{52} + 2^{51} + 2^{50} + 2^{49} + 2^{48}$。 <br>
D.	$2^{53} + 2^{52} + 2^{51} + 2^{50} + 2^{49}$。 
</div>`,
        hint: `將十六進制轉為二進制或直接計算位數。`,
        solution: `D (51%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q32",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["H.C.F. and L.C.M."],
        difficulty: 2,
        content: `$p^2 - 4q^2$ 、 $p^3 - 8q^3$ 及 $(p+2q)(p^2 - 4q^2)$ 的 L.C.M. 為
<div class="q-mcopt">
A.	$p-2q$。 <br>
B.	$p^2 - 4q^2$。 <br>
C.	$(p+2q)^2(p^3 - 8q^3)$。 <br>
D.	$(p+2q)(p^2 - 4q^2)(p^3 - 8q^3)$。 
</div>`,
        hint: `先因式分解各式再取最高次。`,
        solution: `C (35%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q33",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `已知 $\\log_5 y$ 為 $\\log_{25} x$ 的線性函數。 該線性函數的圖像在垂直軸上的截距及在水平軸上的截距分別為 $12$ 及 $2$。 若 $y = mx^n$，則 $n=$
<div class="q-mcopt">
A.	$-12$。 <br>
B.	$-4$。 <br>
C.	$-3$。 <br>
D.	$-1$。 
</div>`,
        hint: `寫出線性關係並換底。`,
        solution: `C (45%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q34",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions", "Functions and Graphs"],
        difficulty: 3,
        content: `在同一直角坐标系上，$y = \\log_a x$ 的圖像分別與 $y = a^x$ 的圖像及 $x$ 軸相交於點 $P$ 及點 $Q$，其中 $a$ 為一正常數。 將原點記為 $O$。 下列何者正確？
<div class="q-mcms">
I.	$a < 1$
II.	$OQ > a$
III.	$\\angle POQ = 45^\\circ$
</div>
<div class="q-mcopt">
A.	只有 I 及 II<br>
B.	只有 I 及 III<br>
C.	只有 II 及 III<br>
D.	I、II 及 III
</div>`,
        hint: `考慮 $a>1$ 或 $0<a<1$ 的圖像特徵。`,
        solution: `D (24%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q35",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: `$i^9 + i^{10} + i^{11} + \\dots + i^{999} =$
<div class="q-mcopt">
A.	$-1$。 <br>
B.	$0$。 <br>
C.	$1$。 <br>
D.	$i$。 
</div>`,
        hint: `利用 $i$ 的週期為 $4$ 分組求和。`,
        solution: `A (40%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q36",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 3,
        content: `考慮以下的不等式組：
$$
\\begin{cases}
x \\le 11 \\\\
4x + 5y - 19 \\ge 0 \\\\
7x - 6y + 11 \\le 0
\\end{cases}
$$
設 $D$ 為表示以上的不等式組的解之區域。 若 $(x, y)$ 為 $D$ 中的一點，則 $8x - 6y + 11$ 的最大值為
<div class="q-mcopt">
A.	$1$。 <br>
B.	$11$。 <br>
C.	$15$。 <br>
D.	$129$。 
</div>`,
        hint: `找出可行域頂點並代入目標函數。`,
        solution: `B (26%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q37",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `設 $p$、$q$ 及 $r$ 均為非零的實數。 若 $p, q, r$ 為一等差數列，則下列何者必為正確？
<div class="q-mcms">
I.	$3^p, 3^q, 3^r$ 為一等比數列。 
II.	$\\dfrac{5}{p}, \\dfrac{5}{q}, \\dfrac{5}{r}$ 為一等比數列。 
III.	$p-q$ ,  $q-r$ ,  $r-p$ 為一等差數列。 
</div>
<div class="q-mcopt">
A.	只有 I<br>
B.	只有 II<br>
C.	只有 I 及 III<br>
D.	只有 II 及 III
</div>`,
        hint: `檢查各數列是否滿足等差或等比條件。`,
        solution: `A (55%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q38",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$AC$ 為圓 $ABCD$ 的一直徑。 將 $AC$ 與 $BD$ 的交點記為 $E$。 已知 $TD$ 為該圓在 $D$ 的切線。 若 $\\angle BEC = 96^\\circ$ 及 $\\angle CDT = 41^\\circ$，則 $\\angle CDE =$
<div class="q-mcopt"><img src="img/2025dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px;">
A.	$47^\\circ$。 <br>
B.	$48^\\circ$。 <br>
C.	$52^\\circ$。 <br>
D.	$55^\\circ$。 
</div><div style="clear: both;"></div>`,
        hint: `利用圓周角、切線與直徑性質。`,
        solution: `A (44%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q39",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: `當 $90^\\circ < \\theta < 270^\\circ$ 時，方程 $\\tan^3 \\theta = 2 \\tan \\theta$ 有多少個根？
<div class="q-mcopt">
A.	$2$<br>
B.	$3$<br>
C.	$4$<br>
D.	$5$
</div>`,
        hint: `移項後因式分解，注意定義域。`,
        solution: `B (38%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q40",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 2,
        content: `$PQRS$ 為一正四面體。 求 $PQ$ 與 $\\Delta QRS$ 間的交角準確至最接近的度。 
<div class="q-mcopt">
A.	$35^\\circ$<br>
B.	$55^\\circ$<br>
C.	$60^\\circ$<br>
D.	$71^\\circ$
</div>`,
        hint: `設邊長為 $1$，求高及垂足位置。`,
        solution: `B (35%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q41",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `將原點記為 $O$。 點 $U$ 的坐標為 $(20, 0)$。 設 $V$ 為正 $y$ 軸上的一點使得 $\\Delta OUV$ 的內心的 $x$ 坐標為 $6$。 求 $\\Delta OUV$ 的面積。 
<div class="q-mcopt">
A.	$70$<br>
B.	$87$<br>
C.	$210$<br>
D.	$250$
</div>`,
        hint: `內心坐標公式涉及邊長。`,
        solution: `C (35%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q42",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: `某委員會由 $2$ 名經理、$4$ 名主任及 $12$ 名文員組成。 若從該委員會中選出 $7$ 名委員組成一個有至少 $1$ 名經理的工作小組，則可組成多少個不同的工作小組？
<div class="q-mcopt">
A.	$16~016$<br>
B.	$20~384$<br>
C.	$22~880$<br>
D.	$31~824$
</div>`,
        hint: `用總選法減去沒有經理的情況。`,
        solution: `B (55%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q43",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `某袋子內有 $9$ 罐蘋果汁及 $4$ 罐提子汁。 若從該袋子中隨機同時取出 $6$ 罐，求取出至多 $3$ 罐提子汁的概率。 
<div class="q-mcopt">
A.	$\\dfrac{9}{13}$<br>
B.	$\\dfrac{133}{143}$<br>
C.	$\\dfrac{140}{143}$<br>
D.	$\\dfrac{714}{715}$
</div>`,
        hint: `計算取 $0$ 至 $3$ 罐提子汁的組合數。`,
        solution: `C (66%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q44",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 2,
        content: `某男生及某女生在數學測驗的標準分分別為 $-2$ 及 $z$。 數學測驗的得分的標準差為 $2$ 分。 若該男生的測驗得分與該女生的測驗得分之差為 $6$ 分，求 $z$。 
<div class="q-mcopt">
A.	$-5$  或  $1$<br>
B.	$-5$  或  $3$<br>
C.	$-3$  或  $1$<br>
D.	$-3$  或  $3$
</div>`,
        hint: `用標準分公式及得分差求 $z$。`,
        solution: `A (42%)`
    },
    {
        id: "2025-DSE-MATH-CP2-Q45",
        year: 2025,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: `已知 $a$、$b$、$c$ 及 $d$ 為四個相異的實數。 設 $m_1$、$r_1$ 及 $v_1$ 分別為 $\\{a, b, c, d\\}$ 這組數的平均值、分佈域及方差，而 $m_2$、$r_2$ 及 $v_2$ 分別為 $\\{2a, 2b, 2c, 2d\\}$ 這組數的平均值、分佈域及方差。 將 $\\{a+3, b+3, c+3, d+3\\}$ 這組數的平均值、分佈域及方差分別記為 $m_3$、$r_3$ 及 $v_3$。 下列何者正確？
<div class="q-mcms">
I.	$m_1 + m_3 > m_2$
II.	$r_1 + r_3 = r_2$
III.	$v_1 + v_3 < v_2$
</div>
<div class="q-mcopt">
A.	只有 I 及 II<br>
B.	只有 I 及 III<br>
C.	只有 II 及 III<br>
D.	I、II 及 III
</div>`,
        hint: `分別考慮倍增及平移對平均、分佈域、方差的影響。`,
        solution: `D (36%)`
    }
);
