// 2013dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2013-DSE-MATH-CP2-Q01",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 2,
        content: `$(27 \\cdot 9^{n+1})^3 =$
<div class="q-mcopt">
A.\t$3^{6n+12}$。<br>
B.\t$3^{6n+15}$。<br>
C.\t$3^{9n+12}$。<br>
D.\t$3^{9n+18}$。
</div>`,
        hint: `先化成相同底數再簡化指數。 `,
        solution: `B (69%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q02",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `若 $\\dfrac{y-1}{c} = \\dfrac{y+1}{d}$，則 $y =$
<div class="q-mcopt">
A.\t$\\dfrac{c-d}{c+d}$。<br>
B.\t$\\dfrac{d-c}{c+d}$。<br>
C.\t$\\dfrac{c+d}{c-d}$。<br>
D.\t$\\dfrac{c+d}{d-c}$。
</div>`,
        hint: `交叉相乘後整理含 $y$ 的項。 `,
        solution: `D (81%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q03",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `$h\\ell - k\\ell + hm - km - hn + kn =$
<div class="q-mcopt">
A.\t$(h+k)(\\ell-m+n)$。<br>
B.\t$(h+k)(\\ell+m-n)$。<br>
C.\t$(h-k)(\\ell-m+n)$。<br>
D.\t$(h-k)(\\ell+m-n)$。
</div>`,
        hint: `分組後因式分解。 `,
        solution: `D (85%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q04",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: `$0.0504545 =$
<div class="q-mcopt">
A.\t$0.051$（準確至二位有效數字）。 <br>
B.\t$0.0505$（準確至三位小數）。 <br>
C.\t$0.05045$（準確至四位有效數字）。 <br>
D.\t$0.05046$（準確至五位小數）。 
</div>`,
        hint: `判斷有效數字及小數位。 `,
        solution: `C (75%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q05",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: `$x - \\dfrac{x-1}{2} > 5$  或  $1 < x - 11$  的解為
<div class="q-mcopt">
A.\t$x > 9$。 <br>
B.\t$x > 10$。 <br>
C.\t$x > 11$。 <br>
D.\t$x > 12$。 
</div>`,
        hint: `分別解兩個不等式再取聯集。 `,
        solution: `A (40%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q06",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: `設 $k$ 為一常數。 解方程 $(x-k)^2 = 4k^2$。 
<div class="q-mcopt">
A.\t$x = 3k$<br>
B.\t$x = 5k$<br>
C.\t$x = -k$  或  $x = 3k$<br>
D.\t$x = -3k$  或  $x = 5k$
</div>`,
        hint: `開方後移項。 `,
        solution: `C (70%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q07",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `圖中所示為 $y = -2x^2 + ax + b$ 的圖像，其中 $a$ 及 $b$ 均為常數。 該圖像的對稱軸的方程為
<div class="q-mcopt"><img src="img/2013dsep2q07.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$x = 2$。 <br>
B.\t$x = 3$。 <br>
C.\t$x = 5$。 <br>
D.\t$y = 8$。 
</div><div style="clear: both;"></div>`,
        hint: `對稱軸為 $x = -b/(2a)$。 `,
        solution: `B (59%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q08",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 2,
        content: `若 $a$、$b$ 及 $c$ 均為非零的常數使得 $x(x+3a)+a \\equiv x^2 + 2(bx+c)$，則 $a:b:c=$
<div class="q-mcopt">
A.\t$2:3:1$。 <br>
B.\t$2:3:4$。 <br>
C.\t$3:2:6$。 <br>
D.\t$6:4:3$。 
</div>`,
        hint: `展開兩邊並比較係數。 `,
        solution: `A (59%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q09",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 2,
        content: `設 $\\mathrm{f}(x) = x^{13} - 2x + k$，其中 $k$ 為一常數。 若 $\\mathrm{f}(x)$ 可被 $x+1$ 整除，求當 $\\mathrm{f}(x)$ 除以 $x-1$ 時的餘數。 
<div class="q-mcopt">
A.\t$0$<br>
B.\t$-1$<br>
C.\t$2$<br>
D.\t$-2$
</div>`,
        hint: `用因式定理求 $k$，再用餘式定理。 `,
        solution: `D (66%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q10",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: `<u>素珊</u>售出兩輛汽車，每輛汽車的售價均為 $\\$80\\,080$，其中一輛獲利 $30\\%$，而另一輛則虧蝕 $30\\%$。 完成該兩項交易後，<u>素珊</u>
<div class="q-mcopt">
A.\t虧蝕 $\\$15\\,840$。 <br>
B.\t獲利 $\\$5\\,544$。 <br>
C.\t獲利 $\\$10\\,296$。 <br>
D.\t既無獲利，又無虧蝕。 
</div>`,
        hint: `分別求成本後計算總盈虧。 `,
        solution: `A (45%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q11",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: `存款 $\\$50\\,000$，年利率 $8\\%$，年期 $1$ 年，複利計算，每月一結。 求利息準確至最接近的元。 
<div class="q-mcopt">
A.\t$\\$4\\,000$<br>
B.\t$\\$4\\,122$<br>
C.\t$\\$4\\,143$<br>
D.\t$\\$4\\,150$
</div>`,
        hint: `月利率為 $2/3\\%$，共 $12$ 期。 `,
        solution: `D (64%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q12",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions", "Mensuration"],
        difficulty: 2,
        content: `某遊樂場的實際面積為 $900\\text{ m}^2$。 若該遊樂場在某地圖上的面積為 $36\\text{ cm}^2$，則該地圖的比例尺為
<div class="q-mcopt">
A.\t$1:25$。 <br>
B.\t$1:50$。 <br>
C.\t$1:500$。 <br>
D.\t$1:250\\,000$。 
</div>`,
        hint: `面積比為長度比的平方。 `,
        solution: `C (30%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q13",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: `已知 $z$ 隨 $x$ 正變且隨 $\\sqrt{y}$ 反變。 若 $y$ 減少 $64\\%$ 且 $z$ 增加 $25\\%$，則 $x$
<div class="q-mcopt">
A.\t增加 $20\\%$。 <br>
B.\t增加 $80\\%$。 <br>
C.\t減少 $25\\%$。 <br>
D.\t減少 $75\\%$。 
</div>`,
        hint: `由 $z = k x / \\sqrt{y}$ 計算新比值。 `,
        solution: `C (63%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q14",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 3,
        content: `圖中所示為直線 $x + ay + b = 0$ 的圖像。 下列何者正確？
<div class="q-mcms"><img src="img/2013dsep2q14.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a \\lt 0$
II.\t$b \\lt 0$
III.\t$a \\lt b$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `由圖像判斷斜率及截距。 `,
        solution: `D (21%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q15",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 1,
        content: `圖中，正八邊形被分為八個完全相同的等腰三角形，且其中四個均塗上陰影。 該八邊形的反射對稱軸的數目為
<div class="q-mcopt"><img src="img/2013dsep2q15.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$2$。 <br>
B.\t$4$。 <br>
C.\t$8$。 <br>
D.\t$16$。 
</div><div style="clear: both;"></div>`,
        hint: `觀察陰影後的對稱軸。 `,
        solution: `B (71%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q16",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `圖中，半圓 $ABC$ 的直徑為 $3\\text{ cm}$。 若 $AC = 2\\text{ cm}$，求陰影區域的面積準確至最接近的 $0.01\\text{ cm}^2$。 
<div class="q-mcopt"><img src="img/2013dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$0.23\\text{ cm}^2$<br>
B.\t$0.52\\text{ cm}^2$<br>
C.\t$0.64\\text{ cm}^2$<br>
D.\t$1.07\\text{ cm}^2$
</div><div style="clear: both;"></div>`,
        hint: `用扇形面積減三角形面積。 `,
        solution: `B (33%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q17",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `圖中的固體由某直立圓錐體及其半球體組成，兩部分的底相同。 該圓錐體的底半徑及高分別為 $3\\text{ cm}$ 及 $4\\text{ cm}$。 求該固體的總表面面積。 
<div class="q-mcopt"><img src="img/2013dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$30\\pi\\text{ cm}^2$<br>
B.\t$33\\pi\\text{ cm}^2$<br>
C.\t$48\\pi\\text{ cm}^2$<br>
D.\t$51\\pi\\text{ cm}^2$
</div><div style="clear: both;"></div>`,
        hint: `計算圓錐側面 + 半球曲面。 `,
        solution: `B (56%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q18",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)", "Mensuration"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一梯形且 $AD//BC$ 及 $AD:BC = 2:3$。 設 $E$ 為 $BC$ 的中點，$AC$ 與 $DE$ 相交於 $F$。 若 $\\Delta CEF$ 的面積為 $36\\text{ cm}^2$，則梯形 $ABCD$ 的面積為
<div class="q-mcopt"><img src="img/2013dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$216\\text{ cm}^2$。 <br>
B.\t$264\\text{ cm}^2$。 <br>
C.\t$280\\text{ cm}^2$。 <br>
D.\t$320\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
        hint: `利用相似及面積比。 `,
        solution: `C (37%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q19",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一圓。 $AC$ 與 $BD$ 相交於 $E$。 若 $AB = AD$ 及 $AD//BC$，則 $\\angle BAE =$
<div class="q-mcopt"><img src="img/2013dsep2q19.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$53^\\circ$。 <br>
B.\t$57^\\circ$。 <br>
C.\t$69^\\circ$。 <br>
D.\t$74^\\circ$。 
</div><div style="clear: both;"></div>`,
        hint: `利用等腰及平行線性質。 `,
        solution: `C (56%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q20",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: `圖中，由 $O$ 測 $P$ 的方位為 S$86^\\circ$E，且由 $O$ 測 $Q$ 的方位為 N$32^\\circ$E。 若 $P$ 及 $Q$ 與 $O$ 等距，則由 $Q$ 測 $P$ 的方位為
<div class="q-mcopt"><img src="img/2013dsep2q20zh.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\tN$24^\\circ$W。 <br>
B.\tN$27^\\circ$W。 <br>
C.\tS$24^\\circ$E。 <br>
D.\tS$27^\\circ$E。 
</div><div style="clear: both;"></div>`,
        hint: `利用等腰三角形及方位角。 `,
        solution: `D (58%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q21",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `若某正 $n$ 邊形的一內角為該多邊形一外角的 $4$ 倍，則下列何者正確？
<div class="q-mcms">
I.\t$n$ 的值為 $10$。
II.\t該多邊形的對角線數目為 $10$。
III.\t該多邊形的旋轉對稱的折式數目為 $10$。 
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `由內外角關係求邊數。 `,
        solution: `C (46%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q22",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Pythagoras Theorem"],
        difficulty: 2,
        content: `$\\Delta ABC$ 中，$AB:BC:AC = 8:15:17$。 求 $\\cos A:\\cos C$。 
<div class="q-mcopt">
A.\t$8:15$<br>
B.\t$8:17$<br>
C.\t$15:8$<br>
D.\t$15:17$
</div>`,
        hint: `先確認是否直角三角形。 `,
        solution: `A (48%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q23",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: `若 $0^\\circ < x < 90^\\circ$，則下列何者必為正確？
<div class="q-mcms">
I.\t$\\tan x \\tan(90^\\circ - x) = 1$
II.\t$\\sin x - \\sin(90^\\circ - x) \\lt 0$
III.\t$\\cos x + \\cos(90^\\circ - x) \\gt 0$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `用餘角公式判斷。 `,
        solution: `B (55%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q24",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci", "Coordinate Geometry", "Equations of Straight Lines"],
        difficulty: 2,
        content: `點 $A$ 及點 $B$ 的坐標分別為 $(2,5)$ 及 $(4,-1)$。 設 $P$ 為直角坐標平面上的一動點使得 $AP = BP$。 求 $P$ 的軌跡的方程。 
<div class="q-mcopt">
A.\t$x-3y+3=0$<br>
B.\t$x-3y-7=0$<br>
C.\t$x-3y+13=0$<br>
D.\t$3x+y-11=0$
</div>`,
        hint: `$AP=BP$ 的軌跡是 $AB$ 的垂直平分線。 `,
        solution: `A (54%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q25",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Trigonometry (2D)"],
        difficulty: 2,
        content: `圓 $C$ 的方程為 $2x^2 + 2y^2 - 4x + 8y - 5 = 0$。 點 $P$ 及點 $Q$ 的坐標分別為 $(-1,2)$ 及 $(4,0)$。 下列何者正確？
<div class="q-mcms">
I.\t$C$ 的半徑為 $5$。
II.\t$PQ$ 的中點位於 $C$ 以外。
III.\t若 $G$ 為 $C$ 的圓心，則 $\\angle PGQ$ 為一銳角。 
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `先求圓心及半徑。 `,
        solution: `D (36%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q26",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: `從七張分別記有數字 $1$、$2$、$3$、$4$、$5$、$6$ 及 $7$ 的紙卡中，隨機同時抽出兩個數字。 求抽出數字之積為奇數的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{2}{7}$<br>
B.\t$\\dfrac{4}{7}$<br>
C.\t$\\dfrac{12}{49}$<br>
D.\t$\\dfrac{16}{49}$
</div>`,
        hint: `積為奇數需兩個奇數。 `,
        solution: `A (42%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q27",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 2,
        content: `若九個數 $14$、$6$、$4$、$5$、$7$、$5$、$x$、$y$ 與 $z$ 的平均值及眾數分別為 $8$ 及 $14$，則這九個數的中位數為
<div class="q-mcopt">
A.\t$5$。 <br>
B.\t$6$。 <br>
C.\t$7$。 <br>
D.\t$8$。 
</div>`,
        hint: `由平均值及眾數求未知數後求中位數。 `,
        solution: `B (68%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q28",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs"],
        difficulty: 1,
        content: `下面的散點圖顯示 $x$ 與 $y$ 之間的關係。 下列何者可表示 $x$ 與 $y$ 之間的關係？<img src="img/2013dsep2q28.jpg" class="q-img" alt="題目附圖" style="max-width: 40%;"><div class="q-mcopt">
A.\t當 $x$ 增加時，$y$ 增加。 <br>
B.\t當 $x$ 增加時，$y$ 減少。 <br>
C.\t$y$ 隨 $x^2$ 反變。 <br>
D.\t$y$ 隨 $x^{-3}$ 正變。 
</div>`,
        hint: `觀察散點圖的趨勢。 `,
        solution: `A (79%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q29",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 2,
        content: `下面的幹葉圖顯示某些工人的時薪（以元為單位）的分佈。
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
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0	2	2	2	4	4	4	7</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0	0	1	2	2	6	8	9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3	5	5	7</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">8</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">2	6</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">9</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">5</td>
    </tr>
  </table>
下列哪一個框線圖可表示他們時薪的分佈？
<div class="q-mcopt">
<img src="img/2013dsep2q29A.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 40%;"><br><img src="img/2013dsep2q29B.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 40%;"><br><img src="img/2013dsep2q29C.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 40%;"><br><img src="img/2013dsep2q29D.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 40%;">
</div>`,
        hint: `由幹葉圖求四分位數。 `,
        solution: `D (57%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q30",
        year: 2013,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs"],
        difficulty: 2,
        content: `下面的圓形圖顯示 $X$ 文具店及 $Y$ 文具店在某月從銷售文具所得的盈利的分佈。 下列何者必為正確？<div style="text-align: center;"><img src="img/2013dsep2q30zh_1.jpg" class="q-img" alt="題目附圖" style="display: inline-block; max-width: 35%;">\t\t<img src="img/2013dsep2q30zh_2.jpg" class="q-img" alt="題目附圖" style="display: inline-block; max-width: 35%;"></div><div class="q-mcopt">
A.\t在該月，$X$ 文具店從銷售鉛筆所得的盈利與 $Y$ 文具店相同。 <br>
B.\t在該月，$X$ 文具店從銷售原子筆和筆記簿所得的總盈利少於該店從銷售間尺和鉛筆所得的總盈利。 <br>
C.\t$k=14$<br>
D.\t$\\theta=36^\\circ$
</div>`,
        hint: `比較扇形角度。 `,
        solution: `B (53%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q31",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["H.C.F. and L.C.M."],
        difficulty: 2,
        content: `$a^2+4a+4$ 、 $a^2-4$  及  $a^3+8$  的 L.C.M. 為
<div class="q-mcopt">
A.\t$a+2$。 <br>
B.\t$(a-2)(a+2)^2(a^2-2a+4)$。 <br>
C.\t$(a-2)(a+2)^2(a^2+2a+4)$。 <br>
D.\t$(a-2)(a+2)^4(a^2-2a+4)$。 
</div>`,
        hint: `先因式分解後取最高次冪。 `,
        solution: `B (52%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q32",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `<img src="img/2013dsep2q32.jpg" class="q-img" alt="題目附圖" style="max-width: 40%;">上圖所示為 $y=ab^x$ 的圖像，其中 $a$ 及 $b$ 均為常數。 下列哪一個圖像可表示 $x$ 與 $\\log_7 y$ 之間的關係？
<div class="q-mcopt">
<img src="img/2013dsep2q32A.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 30%;">\t\t<img src="img/2013dsep2q32B.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 30%;"><br>
<img src="img/2013dsep2q32C.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 30%;">\t\t<img src="img/2013dsep2q32D.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 30%;">
</div>`,
        hint: `$\\log_7 y$ 與 $x$ 成線性關係。 `,
        solution: `B (40%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q33",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: `<div style="color: red;">$\\text{A00000E00011}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.\t$10 \\times 16^{11} + 14 \\times 16^5 + 17$<br>
B.\t$11 \\times 16^{11} + 15 \\times 16^5 + 17$<br>
C.\t$10 \\times 16^{12} + 14 \\times 16^6 + 272$<br>
D.\t$11 \\times 16^{12} + 15 \\times 16^6 + 272$
</div>`,
        hint: `直接轉成十進制表示。 `,
        solution: `A (64%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q34",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: `若 $x - \\log y = x^2 - \\log y^2 - 10 = 2$，則 $y =$
<div class="q-mcopt">
A.\t$100$<br>
B.\t$2$  或  $-4$<br>
C.\t$\\dfrac{1}{100}$  或  $10\\,000$<br>
D.\t$\\dfrac{1}{10\\,000}$  或  $100$
</div>`,
        hint: `設 $t = \\log y$ 後解聯立方程。 `,
        solution: `D (29%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q35",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: `若 $\\alpha \\neq \\beta$ 且 $\\begin{cases} 3\\alpha = \\alpha^2 - 5 \\\\[1.2ex] 3\\beta = \\beta^2 - 5 \\end{cases}$，則 $\\alpha\\beta =$
<div class="q-mcopt">
A.\t$3$<br>
B.\t$-3$<br>
C.\t$5$<br>
D.\t$-5$
</div>`,
        hint: `$\\alpha$、 $\\beta$ 為同一二次方程的兩根。 `,
        solution: `D (46%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q36",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: `$i+2i^2+3i^3+4i^4$ 的實部為
<div class="q-mcopt">
A.\t$2$。 <br>
B.\t$-2$。 <br>
C.\t$6$。 <br>
D.\t$-6$。 
</div>`,
        hint: `用 $i^2=-1$、$i^3=-i$、$i^4=1$ 簡化。 `,
        solution: `A (60%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q37",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: `考慮以下的不等式組：<br>
\t$\\begin{cases} 
x \\ge 2 \\\\[1.2ex] 
y \\ge 0 \\\\[1.2ex] 
x+4y \\le 22 \\\\[1.2ex] 
4x-y \\le 20 
\\end{cases}$<br>
設 $D$ 為表示以上的不等式組的解之區域。 若 $(x, y)$ 為 $D$ 中的一點，則 $3y-4x+15$ 的最大值為
<div class="q-mcopt">
A.\t$3$。 <br>
B.\t$17$。 <br>
C.\t$22$。 <br>
D.\t$30$。 
</div>`,
        hint: `找出可行域頂點並代入目標函數。 `,
        solution: `C (46%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q38",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `某數列的第 $n$ 項為 $2n-19$。 下列何者正確？
<div class="q-mcms">
I.\t$25$ 為該數列的其中一項。
II.\t該數列有 $10$ 個負值項。
III.\t該數列的首 $n$ 項之和為 $n^2-18n$。
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `檢查通項及求和公式。 `,
        solution: `C (47%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q39",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 3,
        content: `設 $h$ 及 $k$ 均為常數。 圖中所示為 $y=h+k\\tan 2x^\\circ$ 的圖像，其中 $0 \\le x \\le a$。 下列何者正確？
<div class="q-mcms"><img src="img/2013dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$h \\gt 0$
II.\t$k \\lt 0$
III.\t$\\tan a^\\circ = \\dfrac{1}{k}$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `由圖像判斷 $h$、$k$ 的符號。 `,
        solution: `A (29%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q40",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration", "Trigonometry (3D)"],
        difficulty: 3,
        content: `若一正四面體的高為 $2\\text{ cm}$，則該四面體的體積為
<div class="q-mcopt">
A.\t$2\\text{ cm}^3$<br>
B.\t$\\sqrt{3}\\text{ cm}^3$<br>
C.\t$\\sqrt{6}\\text{ cm}^3$<br>
D.\t$3\\sqrt{3}\\text{ cm}^3$
</div>`,
        hint: `用正四面體體積公式。 `,
        solution: `B (21%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q41",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$O$ 為圓 $ABC$ 的圓心，$DE$ 為該圓在 $A$ 的切線。 若 $AB$ 為 $\\angle CAE$ 的角平分線，則 $\\angle ACO =$
<div class="q-mcopt"><img src="img/2013dsep2q41.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$26^\\circ$。 <br>
B.\t$28^\\circ$。 <br>
C.\t$31^\\circ$。 <br>
D.\t$34^\\circ$。 
</div><div style="clear: both;"></div>`,
        hint: `利用切線與弦的夾角及圓心角。 `,
        solution: `D (39%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q42",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Equations of Straight Lines"],
        difficulty: 2,
        content: `求 $k$ 值的範圍使得圓 $x^2 + y^2 + 2x - 2y - 7 = 0$ 與直線 $3x - 4y + k = 0$ 相交。 
<div class="q-mcopt">
A.\t$-8 < k < 22$<br>
B.\t$-8 \\le k \\le 22$<br>
C.\t$k < -22$  或  $k > 8$<br>
D.\t$k \\le -22$ 或 $k \\ge 8$
</div>`,
        hint: `將直線代入圓方程後令判別式 $\\ge 0$。 `,
        solution: `B (37%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q43",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Four Centres of a Triangle"],
        difficulty: 2,
        content: `設 $O$ 為原點。 若點 $A$ 及點 $B$ 的坐標分別為 $(0,12)$ 及 $(30,12)$，則 $\\Delta OAB$ 的外心的 $y$ 坐標為
<div class="q-mcopt">
A.\t$6$。 <br>
B.\t$8$。 <br>
C.\t$12$。 <br>
D.\t$15$。 
</div>`,
        hint: `外心是三邊垂直平分線的交點。 `,
        solution: `A (30%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q44",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: `若八位電話號碼的首三個位及尾五個位分別由 $5,6,9$ 的排列及 $2,3,4,7,8$ 的排列所組成，則可組成多少個不同的八位電話號碼？
<div class="q-mcopt">
A.\t$15$<br>
B.\t$126$<br>
C.\t$720$<br>
D.\t$40320$
</div>`,
        hint: `分別計算排列後相乘。 `,
        solution: `C (63%)`
    },
    {
        id: "2013-DSE-MATH-CP2-Q45",
        year: 2013,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: `若五個數  $x_1$ 、 $x_2$ 、 $x_3$ 、 $x_4$  及  $x_5$  的方差為 $13$，則  $3x_1 + 4$ 、 $3x_2 + 4$ 、 $3x_3 + 4$ 、 $3x_4 + 4$  及  $3x_5 + 4$  這五個數的方差為
<div class="q-mcopt">
A.\t$39$。 <br>
B.\t$43$。 <br>
C.\t$117$。 <br>
D.\t$121$。 
</div>`,
        hint: `方差受倍數影響，平移不影響。 `,
        solution: `C (37%)`
    }
);
