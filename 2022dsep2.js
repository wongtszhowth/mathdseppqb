// 2022dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2022-DSE-MATH-CP2-Q01",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `$\\alpha^2 - \\alpha - \\beta^2 + \\beta =$
<div class="q-mcopt">
A.\t$(\\alpha + \\beta)(\\alpha - \\beta + 1)$。<br>
B.\t$(\\alpha + \\beta)(\\alpha - \\beta - 1)$。<br>
C.\t$(\\alpha - \\beta)(\\alpha + \\beta + 1)$。<br>
D.\t$(\\alpha - \\beta)(\\alpha + \\beta - 1)$。
</div>`,
        hint: `分組後因式分解。`,
        solution: `D (77%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q02",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `$\\dfrac{81^{2n+3}}{(27^{n+1})^2} =$
<div class="q-mcopt">
A.\t$3$。<br>
B.\t$3^{2n+6}$。<br>
C.\t$3^{4n+8}$。<br>
D.\t$3^{10n+14}$。
</div>`,
        hint: `先化成相同底數再簡化指數。`,
        solution: `B (81%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q03",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 2,
        content: `若 $m$ 及 $n$ 均為常數使得 $(x+3)^2 + mx \\equiv (x-n)(x+1) + 2n$，則 $m =$
<div class="q-mcopt">
A.\t$-14$。<br>
B.\t$-8$。<br>
C.\t$4$。<br>
D.\t$9$。
</div>`,
        hint: `展開兩邊並比較係數。`,
        solution: `A (64%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q04",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: `設 $c$ 為一常數。 解方程 $(x-c)(x-4c) = (3c-x)(x-4c)$。
<div class="q-mcopt">
A.\t$x=2c$<br>
B.\t$x=3c$<br>
C.\t$x=c$  或  $x=3c$<br>
D.\t$x=2c$  或  $x=4c$
</div>`,
        hint: `移項後因式分解。`,
        solution: `D (59%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q05",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `若 $\\dfrac{2}{u} + \\dfrac{3}{v} = 4$，則 $u =$
<div class="q-mcopt">
A.\t$\\dfrac{2v}{4v-3}$。<br>
B.\t$\\dfrac{2v}{3-4v}$。<br>
C.\t$\\dfrac{3v}{4v-2}$。<br>
D.\t$\\dfrac{3v}{2-4v}$。
</div>`,
        hint: `先通分再整理含 $u$ 的項。`,
        solution: `A (81%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q06",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 2,
        content: `已知 $x$ 為一實數。 若將 $x$ 下捨入至三位有效數字，則結果為 $345$。 求 $x$ 值的範圍。
<div class="q-mcopt">
A.\t$344 < x \\le 345$<br>
B.\t$345 \\le x < 346$<br>
C.\t$345 < x \\le 345.5$<br>
D.\t$344.5 \\le x < 345.5$
</div>`,
        hint: `下捨入至三位有效數字的範圍。`,
        solution: `B (45%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q07",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: `$3y - 5 < 5y + 1 \\le 11$ 的解為
<div class="q-mcopt">
A.\t$-3 < y \\le 2$。<br>
B.\t$-3 \\le y < 2$。<br>
C.\t$-2 < y \\le 3$。<br>
D.\t$-2 \\le y < 3$。
</div>`,
        hint: `分開處理兩個不等式再取交集。`,
        solution: `A (86%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q08",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `設 $\\mathrm{f}(x) = x^2 - x + 1$。 若 $k$ 為一常數，則下列何者必為正確？
<div class="q-mcopt">
A.\t$\\mathrm{f}(k) = \\mathrm{f}(-k)$<br>
B.\t$\\mathrm{f}(k) = \\mathrm{f}(1-k)$<br>
C.\t$\\mathrm{f}(k+1) = \\mathrm{f}(k) + \\mathrm{f}(1)$<br>
D.\t$\\mathrm{f}(k-1) = \\mathrm{f}(k) - \\mathrm{f}(1)$
</div>`,
        hint: `直接代入驗證各選項。`,
        solution: `B (60%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q09",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: `設 $\\mathrm{g}(x)=x^2+ax+b$，其中 $a$ 及 $b$ 均為常數。 若 $\\mathrm{g}(x)$ 可被 $x+2a$ 整除，求當 $\\mathrm{g}(x)$ 除以 $x-2a$ 時的餘數。
<div class="q-mcopt">
A.\t$-2a^2$<br>
B.\t$0$<br>
C.\t$2a^2$<br>
D.\t$4a^2$
</div>`,
        hint: `用因式定理求 $b$，再用餘式定理。`,
        solution: `D (55%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q10",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `設 $h$ 及 $k$ 均為實常數使得 $hk<0$。 下列有關 $y=(h-x)(k-x)$ 的圖像之敍述，何者正確？
<div class="q-mcms">
I.\t該圖像開口向上。
II.\t該圖像有兩個 $x$ 截距。
III.\t該圖像的 $y$ 截距為正值。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `觀察二次項係數及截距符號。`,
        solution: `A (56%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q11",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `存款 $\\$88~000$，年利率 $6\\%$，年期 $4$ 年，複利計算，每月一結。 求利息準確至最接近的元。
<div class="q-mcopt">
A.\t$\\$21~120$<br>
B.\t$\\$23~098$<br>
C.\t$\\$23~803$<br>
D.\t$\\$23~825$
</div>`,
        hint: `月利率為 $0.5\\%$，共 $48$ 期。`,
        solution: `C (77%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q12",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 2,
        content: `設 $x$、$y$ 及 $z$ 均為非零的數。 若 $x:y=8:5$ 及 $2x=4z-3y$，則 $y:z=$
<div class="q-mcopt">
A.\t$16:17$。<br>
B.\t$17:16$。<br>
C.\t$20:31$。<br>
D.\t$31:20$。
</div>`,
        hint: `設 $x=8k$、$y=5k$ 後代入求解。`,
        solution: `C (66%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q13",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: `若 $u$ 隨 $v$ 的平方根正變且隨 $w$ 反變，則下列何者正確？
<div class="q-mcms">
I.\t$u^2$ 隨 $v$ 正變且隨 $w$ 的平方反變。
II.\t$v$ 隨 $w$ 正變且隨 $u$ 的平方根反變。
III.\t$w$ 隨 $v$ 的平方根正變且隨 $u$ 反變。
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `由 $u = k\\sqrt{v}/w$ 推導各關係。`,
        solution: `B (69%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q14",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 1,
        content: `圖中，第 $1$ 個圖案包含 $8$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $(2n+6)$ 粒點子所組成。 求第 $7$ 個圖案的點子數目。
<img src="img/2022dsep2q14.jpg" class="q-img" alt="題目附圖" style="max-width: 95%;">
<div class="q-mcopt">
A.\t$52$<br>
B.\t$68$<br>
C.\t$86$<br>
D.\t$106$
</div>`,
        hint: `寫出通項或累加計算。`,
        solution: `C (86%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q15",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `一實心半球體的半徑與一實心直立圓柱體的底半徑相等。 若該圓柱體的高等於其底直徑，則該半球體的總表面面積與該圓柱體的總表面面積之比為
<div class="q-mcopt">
A.\t$1:2$。<br>
B.\t$1:3$。<br>
C.\t$2:3$。<br>
D.\t$2:5$。
</div>`,
        hint: `設半徑為 $r$，分別計算兩表面積。`,
        solution: `A (43%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q16",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `某圓的直徑為 $10$ cm。 一長度為 $8$ cm 的弦把該圓分成一優弓形及一劣弓形。 求該優弓形的面積準確至最接近的 cm$^2$。
<div class="q-mcopt">
A.\t$11$ cm$^2$<br>
B.\t$23$ cm$^2$<br>
C.\t$55$ cm$^2$<br>
D.\t$67$ cm$^2$
</div>`,
        hint: `先求圓心角及扇形面積，再減三角形。`,
        solution: `D (33%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q17",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$M$ 及 $N$ 分別為 $PQ$ 及 $QR$ 上的點使得 $PM:MQ = 5:6$ 及 $QN:NR = 3:4$。 若四邊形 $MNRP$ 的面積為 $59$ cm$^2$，則 $\\Delta MNQ$ 的面積為
<div class="q-mcopt"><img src="img/2022dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$17$ cm$^2$。<br>
B.\t$18$ cm$^2$。<br>
C.\t$19$ cm$^2$。<br>
D.\t$20$ cm$^2$。
</div><div style="clear: both;"></div>`,
        hint: `利用面積比與底的比例關係。`,
        solution: `B (37%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q18",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: `圖中，長方形 $ABCD$ 的周界為 $170$ cm。 已知 $EBF$ 為一直線及 $\\angle AEB = \\angle BFC = 90^\\circ$。 若 $AE = 24$ cm 及 $BC = 34$ cm，則 $EF =$
<div class="q-mcopt"><img src="img/2022dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$45$ cm。<br>
B.\t$51$ cm。<br>
C.\t$61$ cm。<br>
D.\t$75$ cm。
</div><div style="clear: both;"></div>`,
        hint: `先求 $AB$ 及 $BE$、$CF$，再用畢氏定理。`,
        solution: `C (70%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q19",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: `圖中，$ABC$ 為一等邊三角形。 設 $D$ 及 $E$ 分別為 $AC$ 及 $BC$ 上的點使得 $AD = CE$。 若 $\\angle CBD = 38^\\circ$，則 $\\angle AEB =$
<div class="q-mcopt"><img src="img/2022dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$73^\\circ$。<br>
B.\t$75^\\circ$。<br>
C.\t$78^\\circ$。<br>
D.\t$82^\\circ$。
</div><div style="clear: both;"></div>`,
        hint: `利用等邊三角形及等腰三角形性質。`,
        solution: `D (67%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q20",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中所示為一平行四邊形。 下列何者必為正確？
<div class="q-mcms"><img src="img/2022dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a+b=180^\\circ$
II.\t$b+c=360^\\circ$
III.\t$c+d=540^\\circ$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `利用平行四邊形對角相等及鄰角互補。`,
        solution: `B (69%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q21",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 1,
        content: `圖中，$O$ 為圓 $ABC$ 的圓心。 若 $\\angle ABO = 36^\\circ$ 及 $\\angle BOC = 164^\\circ$，則 $\\angle ACO =$
<div class="q-mcopt"><img src="img/2022dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$41^\\circ$。<br>
B.\t$46^\\circ$。<br>
C.\t$52^\\circ$。<br>
D.\t$64^\\circ$。
</div><div style="clear: both;"></div>`,
        hint: `利用等腰三角形及圓心角性質。`,
        solution: `B (70%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q22",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$ABC$ 為一直角三角形且 $\\angle ABC = 90^\\circ$。 設 $D$ 及 $E$ 分別為 $AC$ 及 $BC$ 上的點使得 $ABED$ 為一圓內接四邊形。 若 $AB = 660$ cm 、 $AD = 572$ cm 及 $BE = 275$ cm，則 $CD =$
<div class="q-mcopt"><img src="img/2022dsep2q22.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 65%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$429$ cm。<br>
B.\t$715$ cm。<br>
C.\t$728$ cm。<br>
D.\t$845$ cm。
</div><div style="clear: both;"></div>`,
        hint: `利用圓內接四邊形及相似三角形或畢氏定理。`,
        solution: `C (41%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q23",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: `已知 $PQRS$ 為一菱形。 設 $T$ 為 $PR$ 與 $QS$ 的交點。 若 $\\angle QRT = \\theta$，則 $\\dfrac{PQ}{ST} =$
<div class="q-mcopt">
A.\t$\\sin\\theta$。<br>
B.\t$\\cos\\theta$。<br>
C.\t$\\dfrac{1}{\\sin\\theta}$。<br>
D.\t$\\dfrac{1}{\\cos\\theta}$。
</div>`,
        hint: `在直角三角形中表達比值。`,
        solution: `C (47%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q24",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: `圖中所示為直線 $mx+ny=3$ 的圖像。 下列何者正確？
<div class="q-mcms"><img src="img/2022dsep2q24.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$m<0$
II.\t$n>3$
III.\t$m+n=0$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `由截距判斷 $m$、$n$ 的符號及大小。`,
        solution: `A (47%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q25",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `<div style="color: red;">點 $Q$ 的直角坐標為 $(4\\sqrt{3}, -4)$。 若 $Q$ 繞原點順時針方向旋轉 $90^\\circ$，則它的像的極坐標為</div><div class="q-mcopt" style="color: red;">
A.\t$(8, 60^\\circ)$。<br>
B.\t$(8, 120^\\circ)$。<br>
C.\t$(8, 210^\\circ)$。<br>
D.\t$(8, 240^\\circ)$。
</div>`,
        hint: `先旋轉直角坐標再轉極坐標。`,
        solution: `D (57%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q26",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 2,
        content: `直線 $12x - 5y = 60$ 分別與 $x$ 軸及 $y$ 軸相交於點 $A$ 及點 $B$。 設 $P$ 為直角坐標平面上的一動點使得 $AP = BP$。 求 $P$ 的軌跡的方程。
<div class="q-mcopt">
A.\t$10x + 24y + 119 = 0$<br>
B.\t$15x + 36y + 179 = 0$<br>
C.\t$x^2 + y^2 - 5x + 12y = 0$<br>
D.\t$x^2 + y^2 + 12x - 133 = 0$
</div>`,
        hint: `$AP=BP$ 表示垂直平分線。`,
        solution: `A (52%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q27",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: `點 $P$ 及點 $Q$ 的坐標分別為 $(10, -24)$ 及 $(17, -7)$。 設 $C$ 為通過原點、$P$ 及 $Q$ 的圓。 下列何者正確？
<div class="q-mcopt">
A.\t$PQ$ 為 $C$ 的一直徑。<br>
B.\t$C$ 的面積為 $196\\pi$。<br>
C.\t點 $(16, -9)$ 位於 $C$ 以內。<br>
D.\t$C$ 的圓心在直線 $5x + 12y = 0$ 上。
</div>`,
        hint: `求圓方程後判斷各選項。`,
        solution: `C (50%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q28",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 1,
        content: `5&#9670;2 為三位數，其中 &#9670; 為 $0$ 至 $9$（包括 $0$ 及 $9$）內的整數。 求該三位數可被 $7$ 整除的概率。
<div class="q-mcopt">
A.\t$\\dfrac{1}{5}$<br>
B.\t$\\dfrac{1}{7}$<br>
C.\t$\\dfrac{1}{9}$<br>
D.\t$\\dfrac{1}{10}$
</div>`,
        hint: `計算 $502$ 至 $592$ 中可被 $7$ 整除的個數。`,
        solution: `D (73%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q29",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 1,
        content: `$60$ 名男演員和 $40$ 名女演員的平均體重為 $57$ kg。 若男演員的平均體重為 $63$ kg，則女演員的平均體重為
<div class="q-mcopt">
A.\t$48$ kg。<br>
B.\t$50$ kg。<br>
C.\t$53$ kg。<br>
D.\t$60$ kg。
</div>`,
        hint: `用加權平均列方程。`,
        solution: `A (79%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q30",
        year: 2022,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 3,
        content: `考慮以下正整數：<div style="text-align: center;">$2$　　$5$　　$6$　　$6$　　$x$　　$x$　　$x$　　$y$</div>若以上正整數的平均值及中位數均為 $6$，則下列何者必為正確？
<div class="q-mcms">
I.\t以上正整數的眾數為 $6$。
II.\t以上正整數的最小可取分佈域為 $6$。
III.\t以上正整數的最大可取方差為 $6$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `由平均值及中位數求 $x$、$y$ 的可能值。`,
        solution: `B (25%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q31",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 2,
        content: `下列何者最小？
<div class="q-mcopt">
A.\t$(-345)^{768}$<br>
B.\t$453^{-786}$<br>
C.\t$\\left(\\dfrac{1}{435}\\right)^{867}$<br>
D.\t$\\left(\\dfrac{2}{543}\\right)^{876}$
</div>`,
        hint: `比較各數的絕對值及正負。`,
        solution: `C (51%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q32",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `已知 $\\log_a y$ 為 $x$ 的線性函數，其中 $0 < a < 1$。 該線性函數的圖像在垂直軸上的截距及在水平軸上的截距分別為 $6$ 及 $3$。 若 $y=m x^n$，則下列何者正確？
<div class="q-mcms">
I.\t$m<1$
II.\t$n<1$
III.\t$mn^3=1$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `寫出線性關係並換底。`,
        solution: `C (34%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q33",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `若 $\\log_4 y = 2x - 1$ 及 $(\\log_4 y)^2 = 20x - 31$，則 $\\log_2 y =$
<div class="q-mcopt">
A.\t$1$  或  $2$。<br>
B.\t$2$  或  $4$。<br>
C.\t$3$  或  $7$。<br>
D.\t$6$  或  $14$。
</div>`,
        hint: `設 $t=\\log_4 y$ 後解二次方程。`,
        solution: `D (40%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q34",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: `<div style="color: red;">$\\text{12B00CD000000E}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.\t$299 \\times 4^{22} + 205 \\times 4^{14} + 14$。<br>
B.\t$300 \\times 4^{22} + 222 \\times 4^{14} + 15$。<br>
C.\t$299 \\times 4^{22} + 205 \\times 4^{16} + 14$。<br>
D.\t$300 \\times 4^{22} + 222 \\times 4^{16} + 15$。
</div>`,
        hint: `將十六進制分組轉成四進制或十進制。`,
        solution: `A (53%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q35",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: `設 $z = 4 + 5i^{10} - ki^{15} + 6i^{21} + 2ki^{28}$，其中 $k$ 為一實數。 若 $z$ 的實部與虛部相等，則 $z$ 的實部為
<div class="q-mcopt">
A.\t$7$。<br>
B.\t$13$。<br>
C.\t$17$。<br>
D.\t$25$。
</div>`,
        hint: `利用 $i$ 的週期簡化各項。`,
        solution: `B (38%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q36",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: `考慮以下的不等式組：<br>
\t$\\begin{cases}
2x + y \\ge 8 \\\\[1.2ex]
2x + 3y \\ge 16 \\\\[1.2ex]
4x + 3y \\le 22
\\end{cases}$<br>
設 $R$ 為表示以上的不等式組的解之區域。 若 $(x, y)$ 為 $R$ 中的一點，則 $7x + 6y$ 的最小值為
<div class="q-mcopt">
A.\t$32$。<br>
B.\t$38$。<br>
C.\t$41$。<br>
D.\t$43$。
</div>`,
        hint: `找出可行域頂點並代入目標函數。`,
        solution: `B (46%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q37",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `設 $a_n$ 為一等比數列的第 $n$ 項。 已知 $a_1=8p^2$ 、 $a_2=1$ 及 $a_3=27p$，其中 $p$ 為一實數。 求 $a_4$。
<div class="q-mcopt">
A.\t$\\dfrac{1}{6}$<br>
B.\t$\\dfrac{2}{9}$<br>
C.\t$\\dfrac{9}{2}$<br>
D.\t$\\dfrac{81}{4}$
</div>`,
        hint: `由公比關係求 $p$ 再求 $a_4$。`,
        solution: `D (44%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q38",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一圓。 $PA$ 及 $QB$ 分別為該圓在 $A$ 及 $B$ 的切線。 若 $\\angle ADC=79^\\circ$ 、 $\\angle CBQ=39^\\circ$ 及 $\\angle DAP=42^\\circ$，則 $\\angle BCD=$
<div class="q-mcopt"><img src="img/2022dsep2q38.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$76^\\circ$。<br>
B.\t$79^\\circ$。<br>
C.\t$81^\\circ$。<br>
D.\t$82^\\circ$。
</div><div style="clear: both;"></div>`,
        hint: `利用切線與弦的夾角及圓內接四邊形性質。`,
        solution: `D (48%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q39",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: `當 $0^\\circ \\le x < 360^\\circ$ 時，方程 $\\sin^2 x = 6\\cos^2 x$ 有多少個根？
<div class="q-mcopt">
A.\t$2$<br>
B.\t$3$<br>
C.\t$4$<br>
D.\t$5$
</div>`,
        hint: `化成 $\\tan^2 x = 6$ 後考慮範圍。`,
        solution: `C (39%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q40",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 3,
        content: `圖中，$ABCDEFGH$ 為一正方體。 設 $\\alpha$ 為 $\\Delta AFG$ 與 $\\Delta AFH$ 間的交角，而 $\\beta$ 為 $\\Delta AFH$ 與 $\\Delta FGH$ 間的交角。 下列何者正確？
<div class="q-mcopt"><img src="img/2022dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\alpha<60^\\circ<\\beta$<br>
B.\t$\\alpha<\\beta<60^\\circ$<br>
C.\t$60^\\circ<\\alpha<\\beta$<br>
D.\t$60^\\circ<\\beta<\\alpha$
</div><div style="clear: both;"></div>`,
        hint: `設邊長為 $1$，用餘弦定理求兩面角。`,
        solution: `A (29%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q41",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 3,
        content: `設 $O$ 為原點。 點 $A$ 及點 $B$ 的坐標分別為 $(a,0)$ 及 $(0,b)$，其中 $a$ 及 $b$ 均為正數。 若 $\\Delta OAB$ 的外心在直線 $4x+16y=17a$ 上，則 $a:b=$
<div class="q-mcopt">
A.\t$8:15$。<br>
B.\t$15:8$。<br>
C.\t$16:47$。<br>
D.\t$47:16$。
</div>`,
        hint: `外心是兩邊中垂線的交點。`,
        solution: `A (29%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q42",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: `若七位密碼的首五個位及尾兩個位分別由 $1,3,5,7,9$ 的排列及 $2,8$ 的排列所組成，則可組成多少個不同的七位密碼？
<div class="q-mcopt">
A.\t$10$<br>
B.\t$240$<br>
C.\t$480$<br>
D.\t$5~040$
</div>`,
        hint: `首五位排列數乘尾兩位排列數。`,
        solution: `B (68%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q43",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 3,
        content: `一盒子內有 $2$ 個白球、$2$ 個黃球及 $3$ 個紅球。 某男生及某女生輪流從該盒子中隨機取一個球，且取球後須放回該盒子中，直至其中一人取出白球或黃球為止。 該男生首先取球。 求該女生取出白球的概率。
<div class="q-mcopt">
A.\t$\\dfrac{3}{10}$<br>
B.\t$\\dfrac{3}{20}$<br>
C.\t$\\dfrac{7}{20}$<br>
D.\t$\\dfrac{17}{20}$
</div>`,
        hint: `考慮女生在第 2、4、6… 次取到白球的情況。`,
        solution: `B (30%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q44",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 2,
        content: `某測驗中，一班學生的測驗得分的中位數為 $30$ 分。 全部學生在該測驗均不及格，故此將每名學生的測驗得分調整，使每個得分均增加 $50\\%$ 然後額外加 $8$ 分。 設 $x$ 分為該班學生在得分調整後的測驗得分的中位數。 該測驗中，某學生在得分調整前的標準分為 $-2$。 將這學生在得分調整後的標準分記為 $z$。 求 $x$ 及 $z$。
<div class="q-mcopt">
A.\t$x=45$  及  $z=-2$<br>
B.\t$x=45$  及  $z=-1$<br>
C.\t$x=53$  及  $z=-2$<br>
D.\t$x=53$  及  $z=-1$
</div>`,
        hint: `中位數線性變換，標準分在線性變換下保持不變。`,
        solution: `C (43%)`
    },
    {
        id: "2022-DSE-MATH-CP2-Q45",
        year: 2022,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: `已知 $d$ 為一實數。 設 $S_1$ 為一組數 $\\{d-6, d-2, d-1, d+3, d+5, d+7\\}$ 而 $S_2$ 為另一組數 $\\{d-7, d-5, d-3, d+1, d+2, d+6\\}$。 下列何者正確？
<div class="q-mcms">
I.\t$S_1$ 與 $S_2$ 的平均值相等。
II.\t$S_1$ 與 $S_2$ 的標準差相等。
III.\t$S_1$ 與 $S_2$ 的四分位數間距相等。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `比較兩組數的平均值、離差及排序後的四分位數。`,
        solution: `D (50%)`
    }
);
