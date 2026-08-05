// 2014dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2014-DSE-MATH-CP2-Q01",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `$(2n^3)^{-5} =$
<div class="q-mcopt">
A.\t$\\dfrac{1}{32n^2}$。<br>
B.\t$\\dfrac{1}{32n^{15}}$。<br>
C.\t$\\dfrac{1}{10n^{125}}$。<br>
D.\t$\\dfrac{1}{10n^{243}}$。
</div>`,
        hint: `先處理負指數再簡化。 `,
        solution: `B (94%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q02",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `$u^2 - v^2 - 5u + 5v =$
<div class="q-mcopt">
A.\t$(u-v)(u+v-5)$。<br>
B.\t$(u-v)(u+v+5)$。<br>
C.\t$(u+v)(u-v-5)$。<br>
D.\t$(u+v)(u-v+5)$。
</div>`,
        hint: `分組後因式分解。 `,
        solution: `A (79%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q03",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 2,
        content: `若 $p$ 及 $q$ 均為常數使得 $px(x-1)+x^2 \\equiv qx(x-2)+4x$，則 $p=$
<div class="q-mcopt">
A.\t$1$。<br>
B.\t$2$。<br>
C.\t$3$。<br>
D.\t$4$。
</div>`,
        hint: `展開兩邊並比較係數。 `,
        solution: `B (63%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q04",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: `設 $a$ 為一常數。 若二次方程 $x^2 + ax + a = 1$ 有等根，則 $a=$
<div class="q-mcopt">
A.\t$-1$。 <br>
B.\t$2$。 <br>
C.\t$0$  或  $-4$。 <br>
D.\t$0$  或  $4$。 
</div>`,
        hint: `令判別式為零。 `,
        solution: `B (67%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q05",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 1,
        content: `圖中所示為 $y = mx^2 + x + n$ 的圖像，其中 $m$ 及 $n$ 均為常數。 下列何者正確？
<div class="q-mcopt"><img src="img/2014dsep2q05.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$m < 0$  及  $n < 0$<br>
B.\t$m < 0$  及  $n > 0$<br>
C.\t$m > 0$  及  $n < 0$<br>
D.\t$m > 0$  及  $n > 0$
</div><div style="clear: both;"></div>`,
        hint: `觀察開口方向及 y 截距。 `,
        solution: `C (73%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q06",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: `若 $a > b$ 及 $k < 0$，則下列何者必為正確？
<div class="q-mcms">
I.\t$a^2 \\gt b^2$
II.\t$a + k \\gt b + k$
III.\t$\\dfrac{a}{k^2} \\gt \\dfrac{b}{k^2}$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `考慮正負數對不等式方向的影響。 `,
        solution: `D (52%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q07",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: `$-3x < 6 < 2x$ 的解為
<div class="q-mcopt">
A.\t$x > -2$。 <br>
B.\t$x > 0$。 <br>
C.\t$x > 3$。 <br>
D.\t$-2 < x < 3$。 
</div>`,
        hint: `分別解兩個不等式再取交集。 `,
        solution: `C (63%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q08",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: `$2$ 個碗和 $3$ 個杯的價錢為 $\\$506$。 若 $5$ 個碗的價錢與 $4$ 個杯的價錢相同，則一個碗的價錢為
<div class="q-mcopt">
A.\t$\\$88$。 <br>
B.\t$\\$92$。 <br>
C.\t$\\$110$。 <br>
D.\t$\\$115$。 
</div>`,
        hint: `設未知數後列聯立方程。 `,
        solution: `A (83%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q09",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 2,
        content: `某工廠有 $792$ 名工人。 若男工的人數較女工少 $20\\%$，則男工的人數為
<div class="q-mcopt">
A.\t$352$。 <br>
B.\t$360$。 <br>
C.\t$432$。 <br>
D.\t$440$。 
</div>`,
        hint: `設女工為 $x$，則男工為 $0.8x$。 `,
        solution: `A (62%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q10",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages", "Mensuration"],
        difficulty: 2,
        content: `若扇形的角及半徑分別減少 $x\\%$ 及 $50\\%$ 使其面積減少 $90\\%$，則 $x =$
<div class="q-mcopt">
A.\t$20$。 <br>
B.\t$40$。 <br>
C.\t$60$。 <br>
D.\t$80$。 
</div>`,
        hint: `面積與角及半徑平方成正比。 `,
        solution: `C (49%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q11",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 2,
        content: `一長方形金屬薄片的闊度及長度分別量得 $8\\text{ cm}$ 及 $10\\text{ cm}$ 準確至最接近的 cm。 設 $x\\text{ cm}^2$ 為該金屬片的實際面積。 求 $x$ 值的範圍。 
<div class="q-mcopt">
A.\t$71.25 \\le x < 89.25$<br>
B.\t$71.25 < x \\le 89.25$<br>
C.\t$79.5 \\le x < 80.5$<br>
D.\t$79.5 < x \\le 80.5$
</div>`,
        hint: `考慮量度誤差範圍。 `,
        solution: `A (57%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q12",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 2,
        content: `已知 $\\dfrac{4}{5a} = \\dfrac{5}{7b} = \\dfrac{7}{9c}$，其中 $a$、$b$ 及 $c$ 均為正數。 下列何者正確？
<div class="q-mcopt">
A.\t$a < b < c$<br>
B.\t$a < c < b$<br>
C.\t$b < a < c$<br>
D.\t$b < c < a$
</div>`,
        hint: `設公比後比較大小。 `,
        solution: `D (58%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q13",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: `若 $z$ 隨 $x$ 反變且隨 $y$ 的立方正變，則下列何者必為常數？
<div class="q-mcopt">
A.\t$xy^3z$<br>
B.\t$x^3yz^3$<br>
C.\t$\\dfrac{y^3}{xz}$<br>
D.\t$\\dfrac{y}{x^3z^3}$
</div>`,
        hint: `由 $z = k y^3 / x$ 判斷。 `,
        solution: `C (80%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q14",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `設 $a_n$ 為某數列的第 $n$ 項。 若 $a_2 = 7$、$a_4 = 63$ 及對任意正整數 $n$，$a_{n+2} = a_{n+1} + a_n$，則 $a_5 =$
<div class="q-mcopt">
A.\t$56$。 <br>
B.\t$70$。 <br>
C.\t$91$。 <br>
D.\t$119$。 
</div>`,
        hint: `先求 $a_3$，再求 $a_5$。 `,
        solution: `D (50%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q15",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)", "Mensuration"],
        difficulty: 1,
        content: `圖中，$AB = AE$ 及 $\\angle BAE = \\angle BCD = \\angle CDE = 90^\\circ$。 若 $BC = CD = DE = 16\\text{ cm}$，則五邊形 $ABCDE$ 的面積為
<div class="q-mcopt"><img src="img/2014dsep2q15.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$71\\text{ cm}^2$。 <br>
B.\t$128\\text{ cm}^2$。 <br>
C.\t$192\\text{ cm}^2$。 <br>
D.\t$224\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
        hint: `分割成直角三角形計算。 `,
        solution: `C (81%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q16",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一正方形。 延長 $BC$ 至 $G$ 使得 $\\angle CDG = 25^\\circ$。 $E$ 為 $AB$ 上的一點使得 $AE = CG$。 若 $F$ 為 $BC$ 上的一點使得 $\\angle CDF = 20^\\circ$，則 $\\angle DFE =$
<div class="q-mcopt"><img src="img/2014dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$60^\\circ$。 <br>
B.\t$65^\\circ$。 <br>
C.\t$70^\\circ$。 <br>
D.\t$73^\\circ$。 
</div><div style="clear: both;"></div>`,
        hint: `利用正方形及等腰三角形性質。 `,
        solution: `C (33%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q17",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)", "Mensuration"],
        difficulty: 3,
        content: `圖中，$B$ 為 $AC$ 上的一點使得 $AB:BC = 3:2$。 已知 $AE//BD$。 若 $\\Delta BCD$ 的面積及 $\\Delta CDE$ 的面積分別為 $4\\text{ cm}^2$ 及 $8\\text{ cm}^2$，則梯形 $ABDE$ 的面積為
<div class="q-mcopt"><img src="img/2014dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 55%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$18\\text{ cm}^2$。 <br>
B.\t$21\\text{ cm}^2$。 <br>
C.\t$27\\text{ cm}^2$。 <br>
D.\t$33\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
        hint: `利用平行線及面積比。 `,
        solution: `D (24%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q18",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 2,
        content: `圖中，$\\angle ABD = \\angle ADC = \\angle BCD = 90^\\circ$。 若 $AB = \\mathit{\\ell}$，則 $CD =$
<div class="q-mcopt"><img src="img/2014dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\mathit{\\ell} \\sin \\theta$。 <br>
B.\t$\\mathit{\\ell} \\cos \\theta$。 <br>
C.\t$\\mathit{\\ell} \\sin \\theta \\tan \\theta$。 <br>
D.\t$\\dfrac{\\mathit{\\ell} \\tan \\theta}{\\cos \\theta}$。 
</div><div style="clear: both;"></div>`,
        hint: `在直角三角形中逐步表達。 `,
        solution: `A (38%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q19",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: `$\\left(\\cos(90^\\circ + \\theta) + 1 \\right)\\left(\\sin(360^\\circ - \\theta) - 1 \\right) =$
<div class="q-mcopt">
A.\t$-\\cos^2 \\theta$。 <br>
B.\t$-\\sin^2 \\theta$。 <br>
C.\t$\\cos^2 \\theta$。 <br>
D.\t$\\sin^2 \\theta$。 
</div>`,
        hint: `先用誘導公式化簡。 `,
        solution: `A (53%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q20",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: `圖中，$AC$ 為圓 $ABCDE$ 的一直徑。 若 $\\angle ADE = 28^\\circ$，則 $\\angle CBE =$
<div class="q-mcopt"><img src="img/2014dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$56^\\circ$。 <br>
B.\t$62^\\circ$。 <br>
C.\t$72^\\circ$。 <br>
D.\t$76^\\circ$。 
</div><div style="clear: both;"></div>`,
        hint: `利用直徑及圓周角性質。 `,
        solution: `B (67%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q21",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 3,
        content: `圖中，$O$ 為圓 $ABCDEF$ 的圓心。 $\\Delta PQR$ 與該圓相交於 $A$、$B$、$C$、$D$、$E$ 及 $F$。 若 $\\angle QPR = 38^\\circ$ 及 $AB = CD = EF$，則 $\\angle QOR =$
<div class="q-mcopt"><img src="img/2014dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$109^\\circ$。 <br>
B.\t$117^\\circ$。 <br>
C.\t$123^\\circ$。 <br>
D.\t$142^\\circ$。 
</div><div style="clear: both;"></div>`,
        hint: `利用等弦對等圓心角。 `,
        solution: `A (19%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q22",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: `若一正 $n$ 邊形的內角較外角大 $100^\\circ$，則下列何者正確？
<div class="q-mcms">
I.\t$n$ 的值為 $10$。
II.\t該多邊形每一外角均為 $40^\\circ$。
III.\t該多邊形的反射對稱軸的數目為 $9$。 
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `由內外角關係求邊數。 `,
        solution: `C (61%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q23",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: `<div style="color: red;">點 $P$ 的直角坐標為 $(-1, \\sqrt{3})$。 若 $P$ 對 $x$ 軸作反射，則它的像的極坐標為</div><div class="q-mcopt" style="color: red;">
A.\t$(2, 210^\\circ)$。 <br>
B.\t$(2, 240^\\circ)$。 <br>
C.\t$(4, 210^\\circ)$。 <br>
D.\t$(4, 240^\\circ)$。 
</div>`,
        hint: `先反射再轉極坐標。 `,
        solution: `B (59%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q24",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci", "Equations of Straight Lines"],
        difficulty: 2,
        content: `直線 $L_1$ 及直線 $L_2$ 的方程分別為 $2x+3y=5$ 及 $4x+6y=7$。 若 $P$ 為直角坐標平面上的一動點使得由 $P$ 至 $L_1$ 的垂直距離等於由 $P$ 至 $L_2$ 的垂直距離，則 $P$ 的軌跡為一
<div class="q-mcopt">
A.\t圓。 <br>
B.\t正方形。 <br>
C.\t拋物線。 <br>
D.\t直線。 
</div>`,
        hint: `兩平行線的等距軌跡是平行線。 `,
        solution: `D (65%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q25",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: `圖中，該兩直線相交於正 $y$ 軸上的一點。 下列何者正確？
<div class="q-mcms"><img src="img/2014dsep2q25.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a \\lt 0$
II.\t$c \\gt 0$
III.\t$b = d$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `由圖像判斷截距及斜率。 `,
        solution: `D (51%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q26",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines","Equations of Circles"],
        difficulty: 2,
        content: `若圓 $x^2 + y^2 - 8x + ky - 214 = 0$ 的一直徑通過點 $(6, -5)$ 且該直徑的斜率為 $-4$，則 $k =$
<div class="q-mcopt">
A.\t$-6$。 <br>
B.\t$-4$。 <br>
C.\t$13$。 <br>
D.\t$70$。 
</div>`,
        hint: `圓心在直徑上，且斜率已知。 `,
        solution: `A (45%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q27",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 1,
        content: `一盒子中有 $m$ 個黃球及 $20$ 個黑球。 若從該盒子中隨機抽出一個球，則抽出黃球的概率為 $\\dfrac{1}{m}$。 求 $m$ 的值。 
<div class="q-mcopt">
A.\t$4$<br>
B.\t$5$<br>
C.\t$15$<br>
D.\t$25$
</div>`,
        hint: `由概率等式列方程。 `,
        solution: `B (76%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q28",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 1,
        content: `$25$ 名教師和 $140$ 名學生的平均身高為 $150\\text{ cm}$。 若學生的平均身高為 $145\\text{ cm}$，則教師的平均身高為
<div class="q-mcopt">
A.\t$151\\text{ cm}$。 <br>
B.\t$155\\text{ cm}$。 <br>
C.\t$176\\text{ cm}$。 <br>
D.\t$178\\text{ cm}$。 
</div>`,
        hint: `用加權平均列方程。 `,
        solution: `D (71%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q29",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs"],
        difficulty: 1,
        content: `下面的圓形圖顯示<u>偉明</u>於某星期的支出。 <u>偉明</u>於該星期在衣物上的支出為 $\\$240$。 求他於該星期在交通上的支出。 
<div class="q-mcopt"><img src="img/2014dsep2q29.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\$40$<br>
B.\t$\\$60$<br>
C.\t$\\$90$<br>
D.\t$\\$135$
</div><div style="clear: both;"></div>`,
        hint: `由圓形圖比例計算。 `,
        solution: `C (81%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q30",
        year: 2014,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Dispersion"],
        difficulty: 2,
        content: `下面的幹葉圖顯示某巴士內乘客的年歲的分佈。
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
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">1</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$h$	4	6</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">2</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3	3	3	4	6	7	7</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1	2	2	2	6	8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0	$k$</td>
    </tr>
  </table>
若上述分佈的分佈域至少為 $33$，則下列何者必為正確？
<div class="q-mcms">
I.\t$0 \\le h \\le 3$
II.\t$3 \\le k \\le 9$
III.\t$3 \\le k - h \\le 5$
</div>
<div class="q-mcopt">
A.\t只有 I<br>
B.\t只有 II<br>
C.\t只有 I 及 III<br>
D.\t只有 II 及 III
</div>`,
        hint: `分佈域 = 最大值 − 最小值。 `,
        solution: `B (31%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q31",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["H.C.F. and L.C.M."],
        difficulty: 2,
        content: `$3x^4y^2z$ 、 $4xy^5z$  及  $6x^2y^3$  的 H.C.F. 為
<div class="q-mcopt">
A.\t$xy^2$。 <br>
B.\t$xy^2z$。 <br>
C.\t$12x^4y^5z$。 <br>
D.\t$12x^7y^9z^2$。 
</div>`,
        hint: `取各變數的最低次冪。 `,
        solution: `A (63%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q32",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `圖中所示為在同一直角坐標系上 $y=b^x$ 的圖像及 $y=c^x$ 的圖像，其中 $b$ 及 $c$ 均為正常數。 若一水平線 $L$ 分別與 $y$ 軸、$y=b^x$ 的圖像及 $y=c^x$ 的圖像相交於 $A$、$B$ 及 $C$，則下列何者正確？
<div class="q-mcms"><img src="img/2014dsep2q32.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$b \\lt c$
II.\t$bc \\gt 1$
III.\t$\\dfrac{AB}{AC} = \\log_b c$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
        hint: `由圖像判斷底數大小。 `,
        solution: `C (41%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q33",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices","Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: `下列何者最大？
<div class="q-mcopt">
A.\t$124^{241}$<br>
B.\t$241^{214}$<br>
C.\t$412^{142}$<br>
D.\t$421^{124}$
</div>`,
        hint: `取對數後比較。 `,
        solution: `B (54%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q34",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: `$7 \\times 2^{10} + 2^8 + 5 \\times 2^3 - 2^3 =$
<div class="q-mcopt">
A.\t$111010100000_2$。<br>
B.\t$111100010000_2$。<br>
C.\t$1110100100000_2$。<br>
D.\t$1111000010000_2$。
</div>`,
        hint: `直接轉成二進制。 `,
        solution: `C (49%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q35",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `設 $\\mathrm{f}(x) = 3x^2 - 6x + k$，其中 $k$ 為一常數。 若 $y = \\mathrm{f}(x)$ 的圖像的頂點的 $y$ 坐標為 $7$，則 $k =$
<div class="q-mcopt">
A.\t$1$。<br>
B.\t$3$。<br>
C.\t$4$。<br>
D.\t$10$。
</div>`,
        hint: `完成平方或用頂點公式。 `,
        solution: `D (50%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q36",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: `若 $\\beta$ 為一實數，則 $\\dfrac{\\beta^2 + 4}{\\beta + 2i} =$
<div class="q-mcopt">
A.\t$\\beta - 2i$。<br>
B.\t$\\beta + 2i$。<br>
C.\t$2 - \\beta i$。<br>
D.\t$2 + \\beta i$。
</div>`,
        hint: `分子因式分解後約簡。 `,
        solution: `A (44%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q37",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `若 $m > 1$，則下列何者為等比數列？
<div class="q-mcms">
I.\t$2^m$ ,  $2^{2m}$ ,  $2^{3m}$ ,  $2^{4m}$
II.\t$m$ ,  $2m^2$ ,  $3m^4$ ,  $4m^8$
III.\t$\\log m$ ,  $\\log m^2$ ,  $\\log m^4$ ,  $\\log m^8$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
        hint: `檢查公比是否為常數。 `,
        solution: `B (60%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q38",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: `下列何者可表示在同一直角坐標系上 $y=\\mathrm{f}(x)$ 的圖像及 $y=1-\\mathrm{f}(x)$ 的圖像？
<div class="q-mcopt">
<img src="img/2014dsep2q38A.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">\t\t<img src="img/2014dsep2q38B.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;"><br>
<img src="img/2014dsep2q38C.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">\t\t<img src="img/2014dsep2q38D.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">
</div>`,
        hint: `兩圖像關於 $y=0.5$ 對稱。 `,
        solution: `A (40%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q39",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 3,
        content: `當 $0^\\circ \\le x \\le 360^\\circ$ 時，方程 $7\\sin^2 x = \\sin x$ 有多少個根？
<div class="q-mcopt">
A.\t$2$<br>
B.\t$3$<br>
C.\t$4$<br>
D.\t$5$
</div>`,
        hint: `移項後因式分解並考慮範圍。 `,
        solution: `D (27%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q40",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 2,
        content: `圖中，$AB$ 為立於水平地面 $BCD$ 上的鉛垂柱，其中 $\\angle CBD = 90^\\circ$。 若平面 $ACD$ 與水平地面間之交角為 $\\theta$，則 $\\tan \\theta =$
<div class="q-mcopt"><img src="img/2014dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{8}{15}$。<br>
B.\t$\\dfrac{15}{8}$。<br>
C.\t$\\dfrac{15}{17}$。<br>
D.\t$\\dfrac{17}{15}$。
</div><div style="clear: both;"></div>`,
        hint: `用投影及直角三角形求交角。 `,
        solution: `D (33%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q41",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)", "Four Centres of a Triangle"],
        difficulty: 2,
        content: `圖中，$PQS$ 為一圓。 延長 $PQ$ 至 $R$ 使得 $RS$ 為圓在 $S$ 的切線。 $I$ 為 $\\Delta QRS$ 的內心。 若 $\\angle IRQ = 12^\\circ$ 及 $\\angle PSQ = 70^\\circ$，則 $\\angle QPS =$
<div class="q-mcopt"><img src="img/2014dsep2q41.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$24^\\circ$。 <br>
B.\t$37^\\circ$。 <br>
C.\t$43^\\circ$。 <br>
D.\t$62^\\circ$。 
</div><div style="clear: both;"></div>`,
        hint: `利用切線與弦的夾角及內心性質。 `,
        solution: `C (43%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q42",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Equations of Straight Lines", "Coordinate Geometry"],
        difficulty: 2,
        content: `若直線 $x-y = k$ 與圓 $x^2 + y^2 + 2x - 4y - 1 = 0$ 相交於 $A$ 及 $B$，則 $AB$ 的中點的 $x$ 坐標為
<div class="q-mcopt">
A.\t$1+k$。 <br>
B.\t$1-k$。 <br>
C.\t$\\dfrac{1+k}{2}$。 <br>
D.\t$\\dfrac{1-k}{2}$。 
</div>`,
        hint: `弦的中點在圓心與弦垂直的直線上。 `,
        solution: `C (43%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q43",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: `某班有 $13$ 名男生及 $17$ 名女生。 若從該班中選出 $2$ 名男生及 $3$ 名女生為一隊參與義工服務，則可組成多少不同的隊？
<div class="q-mcopt">
A.\t$38\\,896$<br>
B.\t$53\\,040$<br>
C.\t$142\\,506$<br>
D.\t$636\\,480$
</div>`,
        hint: `分別計算組合後相乘。 `,
        solution: `B (67%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q44",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 2,
        content: `在某考試，<u>文俊</u>獲得 $55$ 分且他的標準分為 $-3$，而<u>小麗</u>獲得 $95$ 分且她的標準分為 $2$。 求考試分數的平均值。 
<div class="q-mcopt">
A.\t$8$ 分<br>
B.\t$64$ 分<br>
C.\t$75$ 分<br>
D.\t$79$ 分
</div>`,
        hint: `用標準分公式列方程。 `,
        solution: `D (56%)`
    },
    {
        id: "2014-DSE-MATH-CP2-Q45",
        year: 2014,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Change of Data"],
        difficulty: 2,
        content: `若四個數 $a$、$b$、$c$ 及 $d$ 的方差為 $9$，則  $14-a$ 、 $14-b$ 、 $14-c$  及  $14-d$  這四個數的方差為
<div class="q-mcopt">
A.\t$5$。 <br>
B.\t$9$。 <br>
C.\t$23$。 <br>
D.\t$121$。 
</div>`,
        hint: `平移不改變方差。 `,
        solution: `B (56%)`
    }
);
